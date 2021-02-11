(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(17),a=c.n(r),s=c(8),i=c(7),o=c.n(i),u=c(18),l=c(3),j=c(19),h=c.n(j),d=c(20),m=function(e){for(var t,c,n=Object(d.a)(e),r=n.length;0!==r;)c=Math.floor(Math.random()*r),t=n[r-=1],n[r]=n[c],n[c]=t;return n},b=c(0),O=function(e){var t=e.characters,c=e.handleClick,r=e.currentScore,a=Object(n.useState)(!1),s=Object(l.a)(a,2),i=s[0],o=s[1];Object(n.useEffect)((function(){o(!0);var e=setTimeout((function(){return o(!1)}),550);return function(){return clearTimeout(e)}}),[r]);var u=t.map((function(e){return Object(b.jsx)("div",{className:"tile ".concat(i?"flip":""),onClick:function(){return c(e)},children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card__img",children:Object(b.jsx)("img",{src:e.image,alt:e.name})}),Object(b.jsx)("div",{className:"card__name",children:e.name})]})},e.id)}));return Object(b.jsx)("div",{className:"container",children:u})},f=function(e){var t=e.href,c=e.children;return Object(b.jsx)("a",{onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",t);var c=new PopStateEvent("popstate");window.dispatchEvent(c)}},href:t,children:c})},p=function(e){var t=Object(n.useState)(e),c=Object(l.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){var e=function(){a(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),r},v=function(e){var t=e.bestScore,c=p(window.location.pathname);return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("div",{className:"header__menu",children:Object(b.jsx)("ul",{className:"header__items",children:[{label:"Memory Game",path:"/memory-game/"},{label:"How To Play",path:"/instruction"}].map((function(e,t){var n=e.label,r=e.path,a=r===c?"header__item--selected":"";return Object(b.jsx)("li",{className:"header__item ".concat(a),children:Object(b.jsx)(f,{href:r,children:n})},t)}))})}),Object(b.jsxs)("div",{className:"header__score",children:["Best Score: ",t]})]})},x=function(e){var t=e.path,c=e.children;return p(window.location.pathname)===t?c:null},g=function(e){var t=e.gameOver,c=e.resetGame;return t?Object(b.jsx)("div",{className:"modal-overlay",children:Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("p",{children:"Congratulations! You're a Genius!"}),Object(b.jsx)("button",{onClick:c,children:"Play Again"})]})}):null},y=function(){return Object(b.jsxs)("div",{className:"instruction",children:[Object(b.jsx)("h1",{children:"Memory Game"}),Object(b.jsxs)("p",{children:["This application puts your memory to the test. You are presented with multiple images of Rick and Morty characters. The images get shuffled every-time they are clicked. You ",Object(b.jsx)("strong",{children:"CAN NOT"})," click on any image more than once or else your score resets to zero. The main objective is to get the highest score as possible or beat the game."]})]})},w=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(null),i=Object(l.a)(a,2),j=i[0],d=i[1],f=Object(n.useState)(0),p=Object(l.a)(f,2),w=p[0],k=p[1],N=Object(n.useState)(0),S=Object(l.a)(N,2),_=S[0],C=S[1],E=Object(n.useState)(!1),T=Object(l.a)(E,2),G=T[0],M=T[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,7,343,118,47,180,115,103,242,331,558,208,564,375,107,171");case 3:t=e.sent,c=t.data,P(c),r(m(c)),d(c.length),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){r(m(c)),_>w&&k(_),_===j&&M(!0)}),[_]);var P=function(e){e.forEach((function(e){return e.isClicked=!1}))},Y=function(){P(c),C(0),M(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{bestScore:w}),Object(b.jsxs)("p",{className:"current-score",children:["Current Score: ",_]}),Object(b.jsx)(x,{path:"/memory-game/",children:Object(b.jsx)(O,{characters:c,handleClick:function(e){e.isClicked||(r(c.map((function(t){return t.id===e.id?Object(s.a)(Object(s.a)({},t),{},{isClicked:!0}):t}))),C(_+1)),e.isClicked&&Y()},currentScore:_})}),Object(b.jsx)(x,{path:"/instruction",children:Object(b.jsx)(y,{})}),Object(b.jsx)(g,{gameOver:G,resetGame:Y})]})};c(45);a.a.render(Object(b.jsx)(w,{}),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.3f19a0c4.chunk.js.map