(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),o=n(8),i=(n(13),n(14),n(1)),a=n(4),u=n.n(a),l=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)(d,{good:t},t)}))})},d=function(t){var e=t.good;return Object(l.jsx)("li",{"data-cy":"Good",children:e})},h="name",g="length";var f=function(){var t=Object(i.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(i.useState)(!1),a=Object(r.a)(c,2),d=a[0],f=a[1],O=function(t,e){var n=e.sortField,s=e.reversed,c=Object(o.a)(t);return n&&c.sort((function(t,e){switch(n){case h:return t.localeCompare(e);case g:return t.length-e.length;default:return 0}})),s&&(c=c.reverse()),c}(b,{sortField:n,reversed:d});return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":s!==h}),onClick:function(){return s(h)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":s!==g}),onClick:function(){return s(g)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!1===d}),onClick:function(){return f(!d)},children:"Reverse"}),(n||d)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),f(!1)},children:"Reset"})]}),Object(l.jsx)(j,{goods:O})]})};c.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c54166ed.chunk.js.map