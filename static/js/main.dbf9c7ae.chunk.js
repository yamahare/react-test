(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),i=(n(9),n(1)),l=(n(10),function(e){return c.a.createElement("header",{className:"App-header"},c.a.createElement("h2",null,e.text))}),s=function(e){var t=e.movie,n="N/A"===t.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":t.Poster;return c.a.createElement("div",{className:"movie"},c.a.createElement("h2",null,t.Title),c.a.createElement("div",null,c.a.createElement("img",{width:"200",src:n,alt:"the movie titled: ".concat(t.Title)})),c.a.createElement("p",null,"(",t.Year,")"))},m=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1];return c.a.createElement("form",{className:"search"},c.a.createElement("input",{value:r,onChange:function(e){o(e.currentTarget.value)},type:"text"}),c.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(r),o("")},type:"submit",value:"\u691c\u7d22"}))},u=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),h=u[0],p=u[1];Object(a.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then((function(e){return e.json()})).then((function(e){p(e.Search),r(!1)}))}),[]);return c.a.createElement("div",{className:"App"},c.a.createElement(l,{text:"\u6620\u753b\u691c\u7d22 React Hook"}),c.a.createElement(m,{search:function(e){r(!0),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=4a3b711b")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?(p(e.Search),r(!1)):r(!1)}))}}),c.a.createElement("p",{className:"App-intro"},"\u597d\u307f\u306e\u6620\u753b\u3092\u691c\u7d22\u3057\u307e\u3057\u3087\u3046c(`\u0414\xb4\u3068\u2312\uff43)\u3064\u5f61 \u82f1\u8a9e\u63a8\u5968"),c.a.createElement("div",{className:"movies"},n?c.a.createElement("span",null,"loading..."):h.map((function(e,t){return c.a.createElement(s,{key:"".concat(t,"-").concat(e.Title),movie:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.dbf9c7ae.chunk.js.map