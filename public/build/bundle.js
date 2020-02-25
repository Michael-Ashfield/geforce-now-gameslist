var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}function c(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function l(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}let $;function b(t){$=t}function y(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const x=[],v=[],N=[],_=[],S=Promise.resolve();let w=!1;function O(t){N.push(t)}let j=!1;const T=new Set;function E(){if(!j){j=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];b(e),I(e.$$)}for(x.length=0;v.length;)v.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];T.has(e)||(T.add(e),e())}N.length=0}while(x.length);for(;_.length;)_.pop()();w=!1,j=!1,T.clear()}}function I(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const M=new Set;let F;function H(t,e){t&&t.i&&(M.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),F.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function z(t,n,s){const{fragment:i,on_mount:c,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,s),O(()=>{const n=c.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(O)}function C(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(x.push(t),w||(w=!0,S.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(e,o,s,i,c,l,a=[-1]){const u=$;b(e);const d=o.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:a};let h=!1;f.ctx=s?s(e,d,(t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(f.bound[t]&&f.bound[t](o),h&&P(e,t)),n}):[],f.update(),h=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),o.target&&(o.hydrate?f.fragment&&f.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):f.fragment&&f.fragment.c(),o.intro&&H(e.$$.fragment),z(e,o.target,o.anchor),E()),b(u)}class B{$destroy(){C(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var L,G,J=(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.compareStrings=function(t,e){return t>e?1:t<e?-1:0},e.compareNumbers=function(t,e){return t-e},e.reverse=function(t){return-t},e.compareStringsCaseInsensitive=function(t,e){return t.localeCompare(e,void 0,{sensitivity:"base"})},e.sortFunction=function(t){return(e,n)=>{for(let r of t(e,n))if(r)return r;return 0}}}(L={exports:{}},L.exports),L.exports);(G=J)&&G.__esModule&&Object.prototype.hasOwnProperty.call(G,"default")&&G.default;var U=J.compareStrings,Y=J.compareNumbers,q=(J.reverse,J.compareStringsCaseInsensitive,J.sortFunction);const D=t=>({}),K=t=>({}),Q=t=>({item:4&t}),R=t=>({item:t[11]});function V(t,e,n){const r=t.slice();return r[11]=e[n],r}const W=t=>({}),X=t=>({});function Z(t){let e;const n=t[9].tbody,r=i(n,t,t[8],R);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&260&e&&r.p(c(n,t,t[8],R),l(n,t[8],e,Q))},i(t){e||(H(r,t),e=!0)},o(t){k(r,t),e=!1},d(t){r&&r.d(t)}}}function tt(t){let e,n,o,s,h,g,$,b;const y=t[9].thead,x=i(y,t,t[8],X);let v=t[2],N=[];for(let e=0;e<v.length;e+=1)N[e]=Z(V(t,v,e));const _=t=>k(N[t],1,1,()=>{N[t]=null}),S=t[9].tfoot,w=i(S,t,t[8],K);return{c(){e=f("table"),n=f("thead"),x&&x.c(),o=p(),s=f("tbody");for(let t=0;t<N.length;t+=1)N[t].c();h=p(),g=f("tfoot"),w&&w.c(),m(n,"class","svelte-1h7c4zv"),m(e,"class",$=et+" "+t[0])},m(r,i){u(r,e,i),a(e,n),x&&x.m(n,null),t[10](n),a(e,o),a(e,s);for(let t=0;t<N.length;t+=1)N[t].m(s,null);a(e,h),a(e,g),w&&w.m(g,null),b=!0},p(t,[n]){if(x&&x.p&&256&n&&x.p(c(y,t,t[8],X),l(y,t[8],n,W)),260&n){let e;for(v=t[2],e=0;e<v.length;e+=1){const r=V(t,v,e);N[e]?(N[e].p(r,n),H(N[e],1)):(N[e]=Z(r),N[e].c(),H(N[e],1),N[e].m(s,null))}for(F={r:0,c:[],p:F},e=v.length;e<N.length;e+=1)_(e);F.r||r(F.c),F=F.p}w&&w.p&&256&n&&w.p(c(S,t,t[8],K),l(S,t[8],n,D)),(!b||1&n&&$!==($=et+" "+t[0]))&&m(e,"class",$)},i(t){if(!b){H(x,t);for(let t=0;t<v.length;t+=1)H(N[t]);H(w,t),b=!0}},o(t){k(x,t),N=N.filter(Boolean);for(let t=0;t<N.length;t+=1)k(N[t]);k(w,t),b=!1},d(n){n&&d(e),x&&x.d(n),t[10](null),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(N,n),w&&w.d(n)}}}const et="tablesort";function nt(t,e,n){let r,{items:o}=e,{class:s=""}=e,i=[[]];const c=function(t,e){return t.sort(q((function*(t,n){for(let[r,o]of e){const e=0===o?1:-1;"number"==typeof t[r]?yield e*Y(t[r],n[r]):yield e*U(t[r],n[r])}}))),t};function l(t,e){const r=t.dataset.sort;e?i[i.length-1][0]===r?n(4,i[i.length-1]=[r,(i[i.length-1][1]+1)%2],i):n(4,i=[...i,[r,0]]):1===i.length&&i[0][0]===r?n(4,i[0]=[r,(i[0][1]+1)%2],i):(a(),n(4,i=[[r,0]])),t.className="sortable "+(i[i.length-1][1]?"descending":"ascending")}function a(){const t=r.getElementsByTagName("th");for(let e=0;e<t.length;e++)t[e].dataset.sort&&(t[e].className="sortable")}y(()=>{const t=r.getElementsByTagName("th");for(let e=0;e<t.length;e++)t[e].dataset.sort&&(t[e].className="sortable",t[e].onclick=n=>l(t[e],n.shiftKey)),"descending"===t[e].dataset.sortInitial?(t[e].className="sortable descending",n(4,i=[...i,[t[e].dataset.sort,1]])):null!=t[e].dataset.sortInitial&&(t[e].className="sortable ascending",n(4,i=[...i,[t[e].dataset.sort,0]]))});let u,{$$slots:d={},$$scope:f}=e;return t.$set=t=>{"items"in t&&n(3,o=t.items),"class"in t&&n(0,s=t.class),"$$scope"in t&&n(8,f=t.$$scope)},t.$$.update=()=>{24&t.$$.dirty&&n(2,u=c([...o],i))},[s,r,u,o,i,c,l,a,f,d,function(t){v[t?"unshift":"push"](()=>{n(1,r=t)})}]}class rt extends B{constructor(t){super(),A(this,t,nt,tt,s,{items:3,class:0})}}function ot(t){let e;return{c(){e=f("tr"),e.innerHTML='<th data-sort="id" data-sort-initial="descending">ID</th> \n        <th data-sort="title">Title</th> \n        <th data-sort="isFullyOptimized">Is Fully Optimized</th> \n        <th data-sort="isHighlightsSupported">Is Highlights Supported</th> \n        <th data-sort="publisher">Publisher</th> \n        <th data-sort="genres">Genres</th> \n        <th data-sort="status">Status</th>',m(e,"slot","thead"),m(e,"class","thead-dark")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function st(t){let e;return{c(){e=h("No")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function it(t){let e;return{c(){e=h("Yes")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function ct(t){let e;return{c(){e=h("No")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function lt(t){let e;return{c(){e=h("Yes")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function at(t){let e,n,r,o,s,i,c,l,$,b,y,x,v,N,_,S,w,O,j,T,E,I,M,F=t[1].id+"",H=t[1].title+"",k=t[1].publisher+"",z=t[1].genres+"",C=t[1].status+"";function P(t,e){return t[1].isFullyOptimized?it:st}let A=P(t),B=A(t);function L(t,e){return t[1].isHighlightsSupported?lt:ct}let G=L(t),J=G(t);return{c(){e=f("tr"),n=f("td"),r=h(F),o=p(),s=f("td"),i=f("b"),c=f("a"),l=h(H),y=p(),x=f("td"),B.c(),v=p(),N=f("td"),J.c(),_=p(),S=f("td"),w=h(k),O=p(),j=f("td"),T=h(z),E=p(),I=f("td"),M=h(C),m(c,"href",$=t[1].steamUrl),m(c,"title",b=t[1].title),m(e,"slot","tbody")},m(t,d){u(t,e,d),a(e,n),a(n,r),a(e,o),a(e,s),a(s,i),a(i,c),a(c,l),a(e,y),a(e,x),B.m(x,null),a(e,v),a(e,N),J.m(N,null),a(e,_),a(e,S),a(S,w),a(e,O),a(e,j),a(j,T),a(e,E),a(e,I),a(I,M)},p(t,e){2&e&&F!==(F=t[1].id+"")&&g(r,F),2&e&&H!==(H=t[1].title+"")&&g(l,H),2&e&&$!==($=t[1].steamUrl)&&m(c,"href",$),2&e&&b!==(b=t[1].title)&&m(c,"title",b),A!==(A=P(t))&&(B.d(1),B=A(t),B&&(B.c(),B.m(x,null))),G!==(G=L(t))&&(J.d(1),J=G(t),J&&(J.c(),J.m(N,null))),2&e&&k!==(k=t[1].publisher+"")&&g(w,k),2&e&&z!==(z=t[1].genres+"")&&g(T,z),2&e&&C!==(C=t[1].status+"")&&g(M,C)},d(t){t&&d(e),B.d(),J.d()}}}function ut(e){let n;return{c(){n=p()},m(t,e){u(t,n,e)},p:t,d(t){t&&d(n)}}}function dt(t){let e,n,r,o,s,i,c;const l=new rt({props:{items:t[0],class:"table table-striped table-bordered table-hover",$$slots:{default:[ut],tbody:[at,({item:t})=>({1:t}),({item:t})=>t?2:0],thead:[ot]},$$scope:{ctx:t}}});return{c(){var t;e=f("main"),n=f("h1"),n.innerHTML="<u>Geforce Now Game List</u>",r=p(),o=f("h3"),o.innerHTML='\n    This is a table directly from the current Nvidia&#39;s\n    <a href="https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON">\n      JSON data here.\n    </a> \n    <br>\n    💕 Please feel free to contribute code to the project\n    <a href="https://github.com/lettuceboop/geforce-now-gameslist">here</a>\n    💕\n  ',s=p(),i=f("div"),(t=l.$$.fragment)&&t.c(),m(i,"class","container-fluid")},m(t,d){u(t,e,d),a(e,n),a(e,r),a(e,o),a(e,s),a(e,i),z(l,i,null),c=!0},p(t,[e]){const n={};1&e&&(n.items=t[0]),6&e&&(n.$$scope={dirty:e,ctx:t}),l.$set(n)},i(t){c||(H(l.$$.fragment,t),c=!0)},o(t){k(l.$$.fragment,t),c=!1},d(t){t&&d(e),C(l)}}}function ft(t,e,n){let r=[];return fetch("https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON").then(t=>t.json()).then(t=>{n(0,r=t),console.log(r)}),[r]}return new class extends B{constructor(t){super(),A(this,t,ft,dt,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
