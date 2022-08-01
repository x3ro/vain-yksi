const _t=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};_t();function I(){}const ge=t=>t;function et(t){return t()}function Ge(){return Object.create(null)}function Y(t){t.forEach(et)}function $e(t){return typeof t=="function"}function x(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function pt(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return I;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function he(t,e,n){t.$$.on_destroy.push(mt(e,n))}const tt=typeof window<"u";let nt=tt?()=>window.performance.now():()=>Date.now(),we=tt?t=>requestAnimationFrame(t):I;const Z=new Set;function lt(t){Z.forEach(e=>{e.c(t)||(Z.delete(e),e.f())}),Z.size!==0&&we(lt)}function it(t){let e;return Z.size===0&&we(lt),{promise:new Promise(n=>{Z.add(e={c:t,f:n})}),abort(){Z.delete(e)}}}function m(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ht(t){const e=v("style");return vt(st(t),e),e.sheet}function vt(t,e){m(t.head||t,e)}function g(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function Se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function C(){return P(" ")}function Ee(){return P("")}function T(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function N(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return t===""?null:+t}function bt(t){return Array.from(t.childNodes)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function z(t,e){t.value=e==null?"":e}function Ie(t,e,n){t.classList[n?"add":"remove"](e)}function yt(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,l,e),r}const de=new Map;let _e=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function gt(t,e){const n={stylesheet:ht(e),rules:{}};return de.set(t,n),n}function ot(t,e,n,l,r,s,i,o=0){const a=16.666/l;let u=`{
`;for(let f=0;f<=1;f+=a){const $=e+(n-e)*s(f);u+=f*100+`%{${i($,1-$)}}
`}const p=u+`100% {${i(n,1-n)}}
}`,c=`__svelte_${kt(p)}_${o}`,_=st(t),{stylesheet:y,rules:w}=de.get(_)||gt(_,t);w[c]||(w[c]=!0,y.insertRule(`@keyframes ${c} ${p}`,y.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${c} ${l}ms linear ${r}ms 1 both`,_e+=1,c}function ye(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=n.length-l.length;r&&(t.style.animation=l.join(", "),_e-=r,_e||$t())}function $t(){we(()=>{_e||(de.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),de.clear())})}let Ne;function le(t){Ne=t}const ne=[],qe=[],ce=[],De=[],wt=Promise.resolve();let ke=!1;function St(){ke||(ke=!0,wt.then(ut))}function J(t){ce.push(t)}const be=new Set;let ae=0;function ut(){const t=Ne;do{for(;ae<ne.length;){const e=ne[ae];ae++,le(e),Et(e.$$)}for(le(null),ne.length=0,ae=0;qe.length;)qe.pop()();for(let e=0;e<ce.length;e+=1){const n=ce[e];be.has(n)||(be.add(n),n())}ce.length=0}while(ne.length);for(;De.length;)De.pop()();ke=!1,be.clear(),le(t)}function Et(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}let te;function at(){return te||(te=Promise.resolve(),te.then(()=>{te=null})),te}function pe(t,e,n){t.dispatchEvent(yt(`${e?"intro":"outro"}${n}`))}const fe=new Set;let Q;function Ae(){Q={r:0,c:[],p:Q}}function Pe(){Q.r||Y(Q.c),Q=Q.p}function M(t,e){t&&t.i&&(fe.delete(t),t.i(e))}function V(t,e,n,l){if(t&&t.o){if(fe.has(t))return;fe.add(t),Q.c.push(()=>{fe.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const ct={duration:0};function ie(t,e,n){let l=e(t,n),r=!1,s,i,o=0;function a(){s&&ye(t,s)}function u(){const{delay:c=0,duration:_=300,easing:y=ge,tick:w=I,css:d}=l||ct;d&&(s=ot(t,0,1,_,c,y,d,o++)),w(0,1);const f=nt()+c,$=f+_;i&&i.abort(),r=!0,J(()=>pe(t,!0,"start")),i=it(S=>{if(r){if(S>=$)return w(1,0),pe(t,!0,"end"),a(),r=!1;if(S>=f){const E=y((S-f)/_);w(E,1-E)}}return r})}let p=!1;return{start(){p||(p=!0,ye(t),$e(l)?(l=l(),at().then(u)):u())},invalidate(){p=!1},end(){r&&(a(),r=!1)}}}function ee(t,e,n){let l=e(t,n),r=!0,s;const i=Q;i.r+=1;function o(){const{delay:a=0,duration:u=300,easing:p=ge,tick:c=I,css:_}=l||ct;_&&(s=ot(t,1,0,u,a,p,_));const y=nt()+a,w=y+u;J(()=>pe(t,!1,"start")),it(d=>{if(r){if(d>=w)return c(0,1),pe(t,!1,"end"),--i.r||Y(i.c),!1;if(d>=y){const f=p((d-y)/u);c(1-f,f)}}return r})}return $e(l)?at().then(()=>{l=l(),o()}):o(),{end(a){a&&l.tick&&l.tick(1,0),r&&(s&&ye(t,s),r=!1)}}}function Nt(t,e){V(t,1,1,()=>{e.delete(t.key)})}function At(t,e,n,l,r,s,i,o,a,u,p,c){let _=t.length,y=s.length,w=_;const d={};for(;w--;)d[t[w].key]=w;const f=[],$=new Map,S=new Map;for(w=y;w--;){const h=c(r,s,w),A=n(h);let H=i.get(A);H?l&&H.p(h,e):(H=u(A,h),H.c()),$.set(A,f[w]=H),A in d&&S.set(A,Math.abs(w-d[A]))}const E=new Set,b=new Set;function O(h){M(h,1),h.m(o,p),i.set(h.key,h),p=h.first,y--}for(;_&&y;){const h=f[y-1],A=t[_-1],H=h.key,G=A.key;h===A?(p=h.first,_--,y--):$.has(G)?!i.has(H)||E.has(H)?O(h):b.has(G)?_--:S.get(H)>S.get(G)?(b.add(H),O(h)):(E.add(G),_--):(a(A,i),_--)}for(;_--;){const h=t[_];$.has(h.key)||a(h,i)}for(;y;)O(f[y-1]);return f}function ve(t){t&&t.c()}function se(t,e,n,l){const{fragment:r,on_mount:s,on_destroy:i,after_update:o}=t.$$;r&&r.m(e,n),l||J(()=>{const a=s.map(et).filter($e);i?i.push(...a):Y(a),t.$$.on_mount=[]}),o.forEach(J)}function re(t,e){const n=t.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(ne.push(t),St(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,l,r,s,i,o=[-1]){const a=Ne;le(t);const u=t.$$={fragment:null,ctx:null,props:s,update:I,not_equal:r,bound:Ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Ge(),dirty:o,skip_bound:!1,root:e.target||a.$$.root};i&&i(u.root);let p=!1;if(u.ctx=n?n(t,e.props||{},(c,_,...y)=>{const w=y.length?y[0]:_;return u.ctx&&r(u.ctx[c],u.ctx[c]=w)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](w),p&&Pt(t,c)),_}):[],u.update(),p=!0,Y(u.before_update),u.fragment=l?l(u.ctx):!1,e.target){if(e.hydrate){const c=bt(e.target);u.fragment&&u.fragment.l(c),c.forEach(k)}else u.fragment&&u.fragment.c();e.intro&&M(t.$$.fragment),se(t,e.target,e.anchor,e.customElement),ut()}le(a)}class ue{$destroy(){re(this,1),this.$destroy=I}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const X=[];function Lt(t,e=I){let n;const l=new Set;function r(o){if(x(t,o)&&(t=o,n)){const a=!X.length;for(const u of l)u[1](),X.push(u,t);if(a){for(let u=0;u<X.length;u+=2)X[u][0](X[u+1]);X.length=0}}}function s(o){r(o(t))}function i(o,a=I){const u=[o,a];return l.add(u),l.size===1&&(n=e(r)||I),o(t),()=>{l.delete(u),l.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:i}}class Ct{constructor(){this.gameStarted=!1,this.otherPlayers=[],this.hints=[],this.duplicateHints=[]}}let q=Lt(new Ct);class Ot{constructor(e,n){this.client=e,this.hint=n}}class Rt{constructor(e){this.guess=e.guess,this.word=e.word,this.correct=e.result==="correct"}}class je{constructor(e,n){this.hintGiven=!1,this.guesser=!1,this.id=e,this.username=n}}function Ht(){q.update(t=>(t.duplicateHints=[],t.hints=[],t.result=null,t))}let me=window.location.hostname,Le=":8000";me!=="localhost"&&me!=="127.0.0.1"&&(Le="");let Gt=window.location.protocol,Ce="ws";Gt==="https:"&&(Ce="wss");let ft=window.location.pathname,F;var U;(function(t){t.ALL_HINTS="all_hints",t.ALL_HINTS_TO_GUESSER="all_hints_to_guesser",t.GUESS_RESULT="guess_result",t.HINT_RECEIVED="hint_received",t.NEW_GAME="new_game",t.NEW_ROUND="new_round",t.OTHER_PLAYERS="other_players",t.PLAYER_JOIN="join",t.PLAYER_QUIT="quit",t.YOUR_DATA="your_data"})(U||(U={}));function It(t){F=new WebSocket(`${Ce}://${me}${Le}${ft}ws/new/${t}`),dt(F)}function qt(t,e){F=new WebSocket(`${Ce}://${me}${Le}${ft}ws/join/${t}/${e}`),q.update(n=>(n.id=t,n)),dt(F)}function Oe(){console.log("Starting next round"),F.send(JSON.stringify({action:{start_next_round:!0}}))}function Dt(t){console.log("Sending hint",t),F.send(JSON.stringify({action:{hint:t}})),q.update(e=>(e.player.hintGiven=!0,e))}function jt(t){console.log("Sending guess",t),F.send(JSON.stringify({action:{guess:t}}))}function Ut(){console.log("Skip word"),F.send(JSON.stringify({action:{skip_word:!0}}))}function dt(t){t.onopen=function(e){console.log("[open] Connection established")},t.onmessage=function(e){console.log(`[message] Data received from server: ${e.data} ${typeof e.data}`);let n=JSON.parse(e.data);switch(n.event){case U.ALL_HINTS:let l=n.payload;q.update(d=>(d.hints=l.hints,d.duplicateHints=l.duplicates,d));break;case U.ALL_HINTS_TO_GUESSER:let r=n.payload;q.update(d=>(d.hints=r.hints,d.duplicateHints=r.usersWithDuplicates.map(f=>new Ot(f,"")),d));break;case U.GUESS_RESULT:let s=n.payload;q.update(d=>(d.result=new Rt(s),d));break;case U.HINT_RECEIVED:let i=n.payload;q.update(d=>(d.otherPlayers=d.otherPlayers.map(f=>(f.id===i.client&&(f.hintGiven=!0),f)),d));break;case U.NEW_GAME:let o=n.payload;console.log("NewGame event!",o.id),q.update(d=>(d.id=o.id,d));break;case U.NEW_ROUND:let a=n.payload;console.log("NewRound event!",a.role,a.word),Ht(),q.update(d=>(d.word=a.word,d.player.guesser=a.role==="guesser",d.player.hintGiven=!1,d)),q.update(d=>(d.otherPlayers=d.otherPlayers.map(f=>(f.id===a.guesser?f.guesser=!0:f.guesser=!1,f.hintGiven=!1,f)),d)),q.update(d=>(d.gameStarted=!0,d));break;case U.OTHER_PLAYERS:let u=n.payload;console.log("Other players",u),q.update(d=>(d.otherPlayers=u,d));break;case U.PLAYER_JOIN:let p=n.payload;console.log("Join event!",p.id,p.username);let c=new je(p.id,p.username);q.update(d=>(d.otherPlayers.push(c),d));break;case U.PLAYER_QUIT:let _=n.payload;console.log("Quit event!",_.id),q.update(d=>(d.otherPlayers=d.otherPlayers.filter(f=>f.id!==_.id),d));break;case U.YOUR_DATA:let y=n.payload,w=new je(y.id,y.username);q.update(d=>(d.player=w,d));break;default:console.log("Unknown event:",typeof n)}},t.onclose=function(e){e.wasClean?console.log(`[close] Connection closed cleanly, code=${e.code} reason=${e.reason}`):console.log("[close] Connection died")},t.onerror=function(e){console.log(`[error] ${e}`)}}function Ue(t,e,n){const l=t.slice();return l[6]=e[n],l}function Tt(t){let e;return{c(){e=P("Odotellaan muita.")},m(n,l){g(n,e,l)},p:I,d(n){n&&k(e)}}}function Mt(t){let e,n,l,r=t[1].word+"",s,i,o,a,u,p,c,_,y,w,d,f,$;return{c(){e=v("div"),n=P("Anna vinkki sanalle: "),l=v("div"),s=P(r),i=C(),o=v("div"),a=v("div"),u=v("label"),u.textContent="Vinkki",p=C(),c=v("input"),_=C(),y=v("button"),w=P("L\xE4het\xE4 vinkki"),N(l,"class","word-to-guess svelte-1a1t21q"),N(u,"for","hint"),N(c,"id","hint"),y.disabled=d=!t[0],N(y,"class","svelte-1a1t21q"),N(o,"class","row")},m(S,E){g(S,e,E),m(e,n),m(e,l),m(l,s),g(S,i,E),g(S,o,E),m(o,a),m(a,u),m(a,p),m(a,c),z(c,t[0]),m(o,_),m(o,y),m(y,w),f||($=[T(c,"input",t[2]),T(y,"click",t[3])],f=!0)},p(S,E){E&2&&r!==(r=S[1].word+"")&&j(s,r),E&1&&c.value!==S[0]&&z(c,S[0]),E&1&&d!==(d=!S[0])&&(y.disabled=d)},d(S){S&&k(e),S&&k(i),S&&k(o),f=!1,Y($)}}}function Jt(t){let e;return{c(){e=P("Sin\xE4 arvaat! Odota vinkkej\xE4.")},m(n,l){g(n,e,l)},p:I,d(n){n&&k(e)}}}function Te(t){let e;return{c(){e=v("div"),e.textContent="Ei muita pelaajia."},m(n,l){g(n,e,l)},p:I,d(n){n&&k(e)}}}function Vt(t){let e;return{c(){e=P("Vinkkaa")},m(n,l){g(n,e,l)},d(n){n&&k(e)}}}function Yt(t){let e;return{c(){e=P("VALMIS")},m(n,l){g(n,e,l)},d(n){n&&k(e)}}}function Wt(t){let e;return{c(){e=P("ARVAA")},m(n,l){g(n,e,l)},d(n){n&&k(e)}}}function Me(t){let e,n,l,r,s=t[6].username+"",i,o;function a(c,_){return c[6].guesser?Wt:c[6].hintGiven?Yt:Vt}let u=a(t),p=u(t);return{c(){e=v("div"),n=v("div"),p.c(),l=C(),r=v("div"),i=P(s),o=C(),N(n,"class","state svelte-1a1t21q"),N(r,"class","username svelte-1a1t21q"),N(e,"class","player-state-card svelte-1a1t21q")},m(c,_){g(c,e,_),m(e,n),p.m(n,null),m(e,l),m(e,r),m(r,i),m(e,o)},p(c,_){u!==(u=a(c))&&(p.d(1),p=u(c),p&&(p.c(),p.m(n,null))),_&2&&s!==(s=c[6].username+"")&&j(i,s)},d(c){c&&k(e),p.d()}}}function Je(t){let e,n,l;return{c(){e=v("button"),e.textContent="Vaihda sana",N(e,"class","svelte-1a1t21q")},m(r,s){g(r,e,s),n||(l=T(e,"click",t[4]),n=!0)},p:I,d(r){r&&k(e),n=!1,l()}}}function zt(t){let e,n,l,r,s,i,o,a,u,p,c,_;function y(b,O){return b[1].player&&b[1].player.guesser?Jt:b[1].player&&!b[1].player.hintGiven?Mt:Tt}let w=y(t),d=w(t),f=t[1].otherPlayers,$=[];for(let b=0;b<f.length;b+=1)$[b]=Me(Ue(t,f,b));let S=null;f.length||(S=Te());let E=t[1].player&&!t[1].player.guesser&&Je(t);return{c(){e=v("div"),d.c(),n=C(),l=v("h2"),l.textContent="Muut",r=C(),s=v("div");for(let b=0;b<$.length;b+=1)$[b].c();S&&S.c(),i=C(),o=v("div"),a=v("div"),E&&E.c(),u=C(),p=v("button"),p.textContent="Vaihda arvaaja ja sana",N(p,"class","svelte-1a1t21q"),N(a,"class","footer-content svelte-1a1t21q"),N(o,"class","footer svelte-1a1t21q")},m(b,O){g(b,e,O),d.m(e,null),g(b,n,O),g(b,l,O),g(b,r,O),g(b,s,O);for(let h=0;h<$.length;h+=1)$[h].m(s,null);S&&S.m(s,null),g(b,i,O),g(b,o,O),m(o,a),E&&E.m(a,null),m(a,u),m(a,p),c||(_=T(p,"click",t[5]),c=!0)},p(b,[O]){if(w===(w=y(b))&&d?d.p(b,O):(d.d(1),d=w(b),d&&(d.c(),d.m(e,null))),O&2){f=b[1].otherPlayers;let h;for(h=0;h<f.length;h+=1){const A=Ue(b,f,h);$[h]?$[h].p(A,O):($[h]=Me(A),$[h].c(),$[h].m(s,null))}for(;h<$.length;h+=1)$[h].d(1);$.length=f.length,!f.length&&S?S.p(b,O):f.length?S&&(S.d(1),S=null):(S=Te(),S.c(),S.m(s,null))}b[1].player&&!b[1].player.guesser?E?E.p(b,O):(E=Je(b),E.c(),E.m(a,u)):E&&(E.d(1),E=null)},i:I,o:I,d(b){b&&k(e),d.d(),b&&k(n),b&&k(l),b&&k(r),b&&k(s),Se($,b),S&&S.d(),b&&k(i),b&&k(o),E&&E.d(),c=!1,_()}}}function Qt(t,e,n){let l;he(t,q,u=>n(1,l=u));let r;function s(){r=this.value,n(0,r)}return[r,l,s,()=>Dt(r),()=>Ut(),()=>Oe()]}class Ft extends ue{constructor(e){super(),oe(this,e,Qt,zt,x,{})}}function Bt(t){const e=t-1;return e*e*e+1}function Re(t,{delay:e=0,duration:n=400,easing:l=ge}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:l,css:s=>`opacity: ${s*r}`}}function B(t,{delay:e=0,duration:n=400,easing:l=Bt,x:r=0,y:s=0,opacity:i=0}={}){const o=getComputedStyle(t),a=+o.opacity,u=o.transform==="none"?"":o.transform,p=a*(1-i);return{delay:e,duration:n,easing:l,css:(c,_)=>`
			transform: ${u} translate(${(1-c)*r}px, ${(1-c)*s}px);
			opacity: ${a-p*_}`}}function Ve(t,e,n){const l=t.slice();return l[8]=e[n],l}function Ye(t,e,n){const l=t.slice();return l[8]=e[n],l}function We(t){let e,n,l,r=t[1].duplicateHints,s=[];for(let i=0;i<r.length;i+=1)s[i]=ze(Ye(t,r,i));return{c(){e=v("h2"),e.textContent="Duplikaatit vinkit",n=C();for(let i=0;i<s.length;i+=1)s[i].c();l=Ee()},m(i,o){g(i,e,o),g(i,n,o);for(let a=0;a<s.length;a+=1)s[a].m(i,o);g(i,l,o)},p(i,o){if(o&10){r=i[1].duplicateHints;let a;for(a=0;a<r.length;a+=1){const u=Ye(i,r,a);s[a]?s[a].p(u,o):(s[a]=ze(u),s[a].c(),s[a].m(l.parentNode,l))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},d(i){i&&k(e),i&&k(n),Se(s,i),i&&k(l)}}}function Kt(t){let e,n=t[3](t[8].client)+"",l,r;return{c(){e=v("div"),l=P(n),r=C(),N(e,"class","duplicate svelte-1erss3n")},m(s,i){g(s,e,i),m(e,l),m(e,r)},p(s,i){i&2&&n!==(n=s[3](s[8].client)+"")&&j(l,n)},d(s){s&&k(e)}}}function Xt(t){let e,n,l=t[3](t[8].client)+"",r,s,i,o=t[8].hint+"",a,u;return{c(){e=v("div"),n=v("div"),r=P(l),s=C(),i=v("div"),a=P(o),u=C(),N(n,"class","username svelte-1erss3n"),N(i,"class","hint svelte-1erss3n"),N(e,"class","hint-card duplicate svelte-1erss3n")},m(p,c){g(p,e,c),m(e,n),m(n,r),m(e,s),m(e,i),m(i,a),m(e,u)},p(p,c){c&2&&l!==(l=p[3](p[8].client)+"")&&j(r,l),c&2&&o!==(o=p[8].hint+"")&&j(a,o)},d(p){p&&k(e)}}}function ze(t){let e;function n(s,i){return(!s[1].player.guesser||s[1].result)&&s[8].hint?Xt:Kt}let l=n(t),r=l(t);return{c(){r.c(),e=Ee()},m(s,i){r.m(s,i),g(s,e,i)},p(s,i){l===(l=n(s))&&r?r.p(s,i):(r.d(1),r=l(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){r.d(s),s&&k(e)}}}function Qe(t){let e;return{c(){e=P("-")},m(n,l){g(n,e,l)},d(n){n&&k(e)}}}function Fe(t){let e,n,l=t[3](t[8].client)+"",r,s,i,o=t[8].hint+"",a;return{c(){e=v("div"),n=v("div"),r=P(l),s=C(),i=v("div"),a=P(o),N(n,"class","username svelte-1erss3n"),N(i,"class","hint svelte-1erss3n"),N(e,"class","hint-card svelte-1erss3n")},m(u,p){g(u,e,p),m(e,n),m(n,r),m(e,s),m(e,i),m(i,a)},p(u,p){p&2&&l!==(l=u[3](u[8].client)+"")&&j(r,l),p&2&&o!==(o=u[8].hint+"")&&j(a,o)},d(u){u&&k(e)}}}function Zt(t){let e,n,l;function r(o,a){return o[1].player.guesser?tn:en}let s=r(t),i=s(t);return{c(){e=v("div"),i.c(),N(e,"class","row")},m(o,a){g(o,e,a),i.m(e,null),l=!0},p(o,a){s===(s=r(o))&&i?i.p(o,a):(i.d(1),i=s(o),i&&(i.c(),i.m(e,null)))},i(o){l||(n&&n.end(1),l=!0)},o(o){n=ee(e,Re,{duration:500}),l=!1},d(o){o&&k(e),i.d(),o&&n&&n.end()}}}function xt(t){let e,n,l,r,s,i,o,a,u,p=t[1].result.word+"",c,_,y,w,d,f,$,S,E;function b(H,G){return H[1].result.correct?ln:nn}let O=b(t),h=O(t),A=!t[1].result.correct&&Be(t);return{c(){e=v("div"),n=v("div"),l=P("Arvaus meni "),r=v("span"),h.c(),s=P("!"),i=C(),o=v("div"),a=P("Sana oli "),u=v("span"),c=P(p),_=P("."),y=C(),A&&A.c(),w=C(),d=v("div"),f=v("button"),f.textContent="Aloita uusi kierros",N(r,"class","emphasis svelte-1erss3n"),N(u,"class","emphasis svelte-1erss3n"),N(d,"class","next-round svelte-1erss3n"),N(e,"class","result svelte-1erss3n")},m(H,G){g(H,e,G),m(e,n),m(n,l),m(n,r),h.m(r,null),m(r,s),m(e,i),m(e,o),m(o,a),m(o,u),m(u,c),m(o,_),m(e,y),A&&A.m(e,null),m(e,w),m(e,d),m(d,f),S||(E=T(f,"click",t[4]),S=!0)},p(H,G){O!==(O=b(H))&&(h.d(1),h=O(H),h&&(h.c(),h.m(r,s))),G&2&&p!==(p=H[1].result.word+"")&&j(c,p),H[1].result.correct?A&&(A.d(1),A=null):A?A.p(H,G):(A=Be(H),A.c(),A.m(e,w))},i(H){$||J(()=>{$=ie(e,Re,{duration:500,delay:500}),$.start()})},o:I,d(H){H&&k(e),h.d(),A&&A.d(),S=!1,E()}}}function en(t){let e,n,l;return{c(){e=P("Odotetaan, ett\xE4 "),n=P(t[2]),l=P(" arvaa.")},m(r,s){g(r,e,s),g(r,n,s),g(r,l,s)},p:I,d(r){r&&k(e),r&&k(n),r&&k(l)}}}function tn(t){let e,n,l,r,s,i,o,a,u,p;return{c(){e=v("div"),n=v("label"),n.textContent="Arvaus",l=C(),r=v("input"),s=C(),i=v("button"),o=P("Arvaa!"),N(n,"for","guess"),N(r,"id","guess"),N(i,"class","button-guess svelte-1erss3n"),i.disabled=a=!t[0]},m(c,_){g(c,e,_),m(e,n),m(e,l),m(e,r),z(r,t[0]),g(c,s,_),g(c,i,_),m(i,o),u||(p=[T(r,"input",t[5]),T(i,"click",t[6])],u=!0)},p(c,_){_&1&&r.value!==c[0]&&z(r,c[0]),_&1&&a!==(a=!c[0])&&(i.disabled=a)},d(c){c&&k(e),c&&k(s),c&&k(i),u=!1,Y(p)}}}function nn(t){let e;return{c(){e=P("v\xE4\xE4rin")},m(n,l){g(n,e,l)},d(n){n&&k(e)}}}function ln(t){let e;return{c(){e=P("oikein")},m(n,l){g(n,e,l)},d(n){n&&k(e)}}}function Be(t){let e,n,l=t[1].result.guess+"",r,s;return{c(){e=P("Arvaus oli "),n=v("span"),r=P(l),s=P("."),N(n,"class","emphasis svelte-1erss3n")},m(i,o){g(i,e,o),g(i,n,o),m(n,r),g(i,s,o)},p(i,o){o&2&&l!==(l=i[1].result.guess+"")&&j(r,l)},d(i){i&&k(e),i&&k(n),i&&k(s)}}}function sn(t){let e,n,l,r,s,i,o,a,u=t[1].duplicateHints.length>0&&We(t),p=t[1].hints,c=[];for(let f=0;f<p.length;f+=1)c[f]=Fe(Ve(t,p,f));let _=null;p.length||(_=Qe());const y=[xt,Zt],w=[];function d(f,$){return f[1].result?0:1}return s=d(t),i=w[s]=y[s](t),{c(){u&&u.c(),e=C(),n=v("h2"),n.textContent="Vinkit",l=C();for(let f=0;f<c.length;f+=1)c[f].c();_&&_.c(),r=C(),i.c(),o=Ee()},m(f,$){u&&u.m(f,$),g(f,e,$),g(f,n,$),g(f,l,$);for(let S=0;S<c.length;S+=1)c[S].m(f,$);_&&_.m(f,$),g(f,r,$),w[s].m(f,$),g(f,o,$),a=!0},p(f,[$]){if(f[1].duplicateHints.length>0?u?u.p(f,$):(u=We(f),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),$&10){p=f[1].hints;let E;for(E=0;E<p.length;E+=1){const b=Ve(f,p,E);c[E]?c[E].p(b,$):(c[E]=Fe(b),c[E].c(),c[E].m(r.parentNode,r))}for(;E<c.length;E+=1)c[E].d(1);c.length=p.length,p.length?_&&(_.d(1),_=null):_||(_=Qe(),_.c(),_.m(r.parentNode,r))}let S=s;s=d(f),s===S?w[s].p(f,$):(Ae(),V(w[S],1,1,()=>{w[S]=null}),Pe(),i=w[s],i?i.p(f,$):(i=w[s]=y[s](f),i.c()),M(i,1),i.m(o.parentNode,o))},i(f){a||(M(i),a=!0)},o(f){V(i),a=!1},d(f){u&&u.d(f),f&&k(e),f&&k(n),f&&k(l),Se(c,f),_&&_.d(f),f&&k(r),w[s].d(f),f&&k(o)}}}function rn(t,e,n){let l;he(t,q,c=>n(1,l=c));let r=l.otherPlayers.filter(c=>c.guesser).at(0),s=r?r.username:"...",i;function o(c){let _=l.otherPlayers.filter(y=>y.id===c);return _.length===1?_.at(0).username:l.player.id===c?l.player.username:"N/A"}const a=()=>Oe();function u(){i=this.value,n(0,i)}return[i,l,s,o,a,u,()=>jt(i)]}class on extends ue{constructor(e){super(),oe(this,e,rn,sn,x,{})}}function Ke(t,e,n){const l=t.slice();return l[2]=e[n],l}function Xe(t){let e,n,l=t[0].player.username+"",r;return{c(){e=P("Pelaat nimell\xE4 "),n=v("div"),r=P(l),N(n,"class","username svelte-1nvwh74")},m(s,i){g(s,e,i),g(s,n,i),m(n,r)},p(s,i){i&1&&l!==(l=s[0].player.username+"")&&j(r,l)},d(s){s&&k(e),s&&k(n)}}}function Ze(t){let e;return{c(){e=v("div"),e.textContent="Ei viel\xE4 muita pelaajia."},m(n,l){g(n,e,l)},p:I,d(n){n&&k(e)}}}function xe(t,e){let n,l=e[2].username+"",r,s,i,o;return{key:t,first:null,c(){n=v("div"),r=P(l),N(n,"class","player-card svelte-1nvwh74"),this.first=n},m(a,u){g(a,n,u),m(n,r),o=!0},p(a,u){e=a,(!o||u&1)&&l!==(l=e[2].username+"")&&j(r,l)},i(a){o||(J(()=>{i&&i.end(1),s=ie(n,B,{x:50,duration:500}),s.start()}),o=!0)},o(a){s&&s.invalidate(),i=ee(n,Re,{duration:1e3}),o=!1},d(a){a&&k(n),a&&i&&i.end()}}}function un(t){let e,n,l,r,s=t[0].id+"",i,o,a,u,p,c,_,y,w,d,f=t[0].otherPlayers.length+"",$,S,E,b=[],O=new Map,h,A,H,G=t[0].player&&Xe(t),W=t[0].otherPlayers;const He=L=>L[2].id;for(let L=0;L<W.length;L+=1){let R=Ke(t,W,L),K=He(R);O.set(K,b[L]=xe(K,R))}let D=null;return W.length||(D=Ze()),{c(){e=v("div"),n=v("h3"),n.textContent="Pelin tunnus",l=C(),r=v("div"),i=P(s),o=C(),G&&G.c(),a=C(),u=v("button"),p=P("Aloita peli"),_=C(),y=v("div"),w=v("h2"),d=P("Muut pelaajat ("),$=P(f),S=P(")"),E=C();for(let L=0;L<b.length;L+=1)b[L].c();D&&D.c(),N(n,"class","svelte-1nvwh74"),N(r,"class","game-id svelte-1nvwh74"),u.disabled=c=t[0].otherPlayers.length<1,N(u,"class","svelte-1nvwh74")},m(L,R){g(L,e,R),m(e,n),m(e,l),m(e,r),m(r,i),m(e,o),G&&G.m(e,null),g(L,a,R),g(L,u,R),m(u,p),g(L,_,R),g(L,y,R),m(y,w),m(w,d),m(w,$),m(w,S),m(y,E);for(let K=0;K<b.length;K+=1)b[K].m(y,null);D&&D.m(y,null),h=!0,A||(H=T(u,"click",t[1]),A=!0)},p(L,[R]){(!h||R&1)&&s!==(s=L[0].id+"")&&j(i,s),L[0].player?G?G.p(L,R):(G=Xe(L),G.c(),G.m(e,null)):G&&(G.d(1),G=null),(!h||R&1&&c!==(c=L[0].otherPlayers.length<1))&&(u.disabled=c),(!h||R&1)&&f!==(f=L[0].otherPlayers.length+"")&&j($,f),R&1&&(W=L[0].otherPlayers,Ae(),b=At(b,R,He,1,L,W,O,y,Nt,xe,null,Ke),Pe(),!W.length&&D?D.p(L,R):W.length?D&&(D.d(1),D=null):(D=Ze(),D.c(),D.m(y,null)))},i(L){if(!h){for(let R=0;R<W.length;R+=1)M(b[R]);h=!0}},o(L){for(let R=0;R<b.length;R+=1)V(b[R]);h=!1},d(L){L&&k(e),G&&G.d(),L&&k(a),L&&k(u),L&&k(_),L&&k(y);for(let R=0;R<b.length;R+=1)b[R].d();D&&D.d(),A=!1,H()}}}function an(t,e,n){let l;return he(t,q,s=>n(0,l=s)),[l,()=>Oe()]}class cn extends ue{constructor(e){super(),oe(this,e,an,un,x,{})}}function fn(t){let e,n,l,r,s,i,o,a,u,p,c,_,y,w,d,f,$,S,E,b,O;return{c(){e=v("div"),n=v("div"),l=v("label"),l.textContent="Nimi",r=C(),s=v("input"),i=C(),o=v("button"),a=P("Luo uusi peli"),p=C(),c=v("div"),_=v("div"),y=v("label"),y.textContent="Pelin tunnus",w=C(),d=v("input"),f=C(),$=v("button"),S=P("Liity peliin"),N(l,"for","username"),N(s,"id","username"),N(s,"type","text"),N(s,"maxlength","30"),o.disabled=u=!t[0],N(o,"class","svelte-oemqzf"),N(e,"class","row"),N(y,"for","gameIdToJoin"),N(d,"id","gameIdToJoin"),N(d,"type","number"),N(d,"minlength","4"),N(d,"maxlength","4"),N(d,"min","1001"),N(d,"max","9999"),$.disabled=E=!t[0]||!t[1],N($,"class","svelte-oemqzf"),N(c,"class","row")},m(h,A){g(h,e,A),m(e,n),m(n,l),m(n,r),m(n,s),z(s,t[0]),m(e,i),m(e,o),m(o,a),g(h,p,A),g(h,c,A),m(c,_),m(_,y),m(_,w),m(_,d),z(d,t[1]),m(c,f),m(c,$),m($,S),b||(O=[T(s,"input",t[2]),T(o,"click",t[3]),T(d,"input",t[4]),T($,"click",t[5])],b=!0)},p(h,[A]){A&1&&s.value!==h[0]&&z(s,h[0]),A&1&&u!==(u=!h[0])&&(o.disabled=u),A&2&&rt(d.value)!==h[1]&&z(d,h[1]),A&3&&E!==(E=!h[0]||!h[1])&&($.disabled=E)},i:I,o:I,d(h){h&&k(e),h&&k(p),h&&k(c),b=!1,Y(O)}}}function dn(t,e,n){let l,r;function s(){l=this.value,n(0,l)}const i=()=>It(l);function o(){r=rt(this.value),n(1,r)}return[l,r,s,i,o,()=>qt(r,l)]}class _n extends ue{constructor(e){super(),oe(this,e,dn,fn,x,{})}}function pn(t){let e,n,l,r;return n=new _n({}),{c(){e=v("div"),ve(n.$$.fragment)},m(s,i){g(s,e,i),se(n,e,null),r=!0},p(s,i){t=s},i(s){r||(M(n.$$.fragment,s),l&&l.end(1),r=!0)},o(s){V(n.$$.fragment,s),l=ee(e,B,t[2]),r=!1},d(s){s&&k(e),re(n),s&&l&&l.end()}}}function mn(t){let e,n,l,r,s;return n=new cn({}),{c(){e=v("div"),ve(n.$$.fragment)},m(i,o){g(i,e,o),se(n,e,null),s=!0},p(i,o){t=i},i(i){s||(M(n.$$.fragment,i),J(()=>{r&&r.end(1),l=ie(e,B,t[1]),l.start()}),s=!0)},o(i){V(n.$$.fragment,i),l&&l.invalidate(),r=ee(e,B,t[2]),s=!1},d(i){i&&k(e),re(n),i&&r&&r.end()}}}function hn(t){let e,n,l,r,s;return n=new Ft({}),{c(){e=v("div"),ve(n.$$.fragment)},m(i,o){g(i,e,o),se(n,e,null),s=!0},p(i,o){t=i},i(i){s||(M(n.$$.fragment,i),J(()=>{r&&r.end(1),l=ie(e,B,t[1]),l.start()}),s=!0)},o(i){V(n.$$.fragment,i),l&&l.invalidate(),r=ee(e,B,t[2]),s=!1},d(i){i&&k(e),re(n),i&&r&&r.end()}}}function vn(t){let e,n,l,r,s;return n=new on({}),{c(){e=v("div"),ve(n.$$.fragment)},m(i,o){g(i,e,o),se(n,e,null),s=!0},p(i,o){t=i},i(i){s||(M(n.$$.fragment,i),J(()=>{r&&r.end(1),l=ie(e,B,t[1]),l.start()}),s=!0)},o(i){V(n.$$.fragment,i),l&&l.invalidate(),r=ee(e,B,t[2]),s=!1},d(i){i&&k(e),re(n),i&&r&&r.end()}}}function bn(t){let e,n,l,r,s,i,o,a;const u=[vn,hn,mn,pn],p=[];function c(_,y){return _[0].hints.length>0||_[0].duplicateHints.length>0?0:_[0].gameStarted?1:_[0].id?2:3}return i=c(t),o=p[i]=u[i](t),{c(){e=v("div"),n=v("main"),l=v("h1"),l.textContent="Vain Yksi",r=C(),s=v("div"),o.c(),N(l,"class","svelte-fck7fd"),Ie(l,"started",t[0].id),N(s,"class","game-info svelte-fck7fd"),N(e,"class","content svelte-fck7fd")},m(_,y){g(_,e,y),m(e,n),m(n,l),m(n,r),m(n,s),p[i].m(s,null),a=!0},p(_,[y]){y&1&&Ie(l,"started",_[0].id);let w=i;i=c(_),i===w?p[i].p(_,y):(Ae(),V(p[w],1,1,()=>{p[w]=null}),Pe(),o=p[i],o?o.p(_,y):(o=p[i]=u[i](_),o.c()),M(o,1),o.m(s,null))},i(_){a||(M(o),a=!0)},o(_){V(o),a=!1},d(_){_&&k(e),p[i].d()}}}function yn(t,e,n){let l;return he(t,q,i=>n(0,l=i)),[l,{x:50,duration:500,delay:510},{x:-50,duration:500}]}class kn extends ue{constructor(e){super(),oe(this,e,yn,bn,x,{})}}new kn({target:document.getElementById("app")});
