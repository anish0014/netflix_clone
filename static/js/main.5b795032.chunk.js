(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},63:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(19),r=n.n(i),o=(n(29),n(30),n(4)),s=n.n(o),l=n(6),u=n(5),d=n(20),h=n(23),b=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(n(63),n(24)),v=n.n(f),j=n(0);var p=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),r=Object(u.a)(i,2),o=r[0],h=r[1],f=Object(c.useState)(""),p=Object(u.a)(f,2),g=p[0],m=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),console.log(o),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("div",{className:"row_posters",children:o.map((function(e){return Object(j.jsx)("img",{onClick:function(){return function(e){g?m(""):v()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),g&&Object(j.jsx)(d.a,{videoId:g,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},g="71ce3d24eaa63b962947cc1350460bda",m={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixDriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(73);var O=function(){var e,t,n=Object(c.useState)([]),a=Object(u.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(m.fetchTrending);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n                    "https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'"\n                )'),backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner_contents",children:[Object(j.jsx)("h1",{className:"banner_title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(j.jsxs)("div",{className:"banner_buttons",children:[Object(j.jsx)("button",{className:"banner_button",children:"Play"}),Object(j.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(j.jsx)("h1",{className:"banner_description",children:(e=null===i||void 0===i?void 0:i.overview,t=250,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(j.jsx)("div",{className:"banner--fadeBottom"})]})};n(74);var x=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(j.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(j.jsx)("img",{className:"nav_logo",src:"https://www.pinclipart.com/picdir/big/2-23236_transparent-netflix-logo-2018-clipart.png",art:"Netflix Logo"}),Object(j.jsx)("img",{className:"nav_avatar",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",art:"Netflix Logo"})]})};var _=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{}),Object(j.jsx)(O,{}),Object(j.jsx)(p,{title:"Trending Now",fetchUrl:m.fetchTrending,isLargeRow:!0}),Object(j.jsx)(p,{title:"NETFLIX ORIGINAL",fetchUrl:m.fetchNetflixDriginals}),Object(j.jsx)(p,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(j.jsx)(p,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(j.jsx)(p,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(j.jsx)(p,{title:"Romance Movies",fetchUrl:m.fetchRomanceMovies}),Object(j.jsx)(p,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(j.jsx)(p,{title:"Documentaries",fetchUrl:m.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),w()}},[[75,1,2]]]);
//# sourceMappingURL=main.5b795032.chunk.js.map