(this["webpackJsonp@monorepo/web"]=this["webpackJsonp@monorepo/web"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=(n(12),n(1)),l=n.n(s),u=n(2),i=n(6),p=n(5),m=n.n(p),f=(n(14),n(15));setInterval((function(){return f().format("D MMM, YYYY : HH:mm:ss",1e3)}));var h={ROUTES:{FETCH_USERS:"http://localhost:7001/fetch-users"},BASE_URL:"http://localhost:7001/"},E={COLORS:{PRIMARY_COLOR:"#333333",SECONDARY_COLOR:"#fafafa"},FONTS:{LARGE:20,MEDIUM:16,SMALL:12}},d={fetchPost:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};var v=function(e){var t=e.posts;return r.a.createElement("ol",null,t.map((function(e){var t=e.id,n=e.title,a=e.body;return r.a.createElement("li",{key:t},r.a.createElement("h5",null,n),r.a.createElement("p",null,a))})))},O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){c()}),[]);var c=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.fetchPost();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),r.a.createElement("p",null,f().format("D MMM, YYYY : HH:mm:ss")),r.a.createElement("p",null,h.BASE_URL),r.a.createElement("p",null,E.COLORS.PRIMARY_COLOR)),n.length>0&&r.a.createElement(v,{posts:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6cd7959b.chunk.js.map