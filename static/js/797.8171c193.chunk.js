"use strict";(self.webpackChunktailwind=self.webpackChunktailwind||[]).push([[797],{3797:function(e,t,n){n.r(t);var i=n(885),r=n(2791),s=n(2419),a=n(77),o=n(3853),c=n(6871),l=n(8112),u=n(8091),d=n(184);function x(e){var t=e.item,n=(0,c.s0)(),i=t.id,r=t.poster_path,s=t.title;return(0,d.jsxs)("div",{className:"flex flex-row  min:flex-col mt-4 ",onClick:function(){return n("/movie/".concat(i))},children:[(0,d.jsx)("img",{src:a.W.getImgage(r),alt:"",className:"  h-[80px] w-[180px] min:w-full min:h-[120px] rounded-lg object-cover"}),(0,d.jsx)("span",{className:"flex-1 items-stretch text-[15px] ml-4 min:ml-0",children:s})]})}function m(){return(0,d.jsxs)("div",{className:"flex flex-row  min:flex-col mt-4 ",children:[(0,d.jsx)("div",{className:"  h-[80px] w-[180px] min:w-full min:h-[120px] rounded-lg object-cover",children:(0,d.jsx)(u.Z,{width:"100%",height:"100%",borderRadius:"8px"})}),(0,d.jsx)("span",{className:"flex-1 items-stretch text-[15px] ml-4 min:ml-0",children:(0,d.jsx)(u.Z,{width:"100%",height:"20px"})})]})}t.default=function(){var e=(0,c.s0)(),t=(0,r.useState)(""),n=(0,i.Z)(t,2),u=n[0],f=n[1],h=(0,l.Z)(u,1e3),p=(0,r.useState)("https://api.themoviedb.org/3/movie/popular?api_key=92f81e121c32d0b9ad19e4e7851187ca"),v=(0,i.Z)(p,2),g=v[0],j=v[1],b=(0,s.ZP)(g,a._),w=b.data,N=b.error,y=!w&&!N;(0,r.useEffect)((function(){j(h?"https://api.themoviedb.org/3/search/movie?api_key=92f81e121c32d0b9ad19e4e7851187ca&query=".concat(h):"https://api.themoviedb.org/3/movie/popular?api_key=92f81e121c32d0b9ad19e4e7851187ca")}),[h]);var k=(null===w||void 0===w?void 0:w.results)||[];return(0,d.jsxs)("div",{className:"w-full max-w-[400px] mx-auto mt-6 h-screen px-4",children:[(0,d.jsx)("div",{className:"flex justify-end text-xl font-bold cursor-pointer",onClick:function(){return e("/moviedb")},children:"X"}),(0,d.jsxs)("div",{className:"flex flex-col mt-10",children:[(0,d.jsx)("h3",{className:"text-xl font-medium mx-auto my-4 min:text-[16px]",children:"Search for your favorite movies"}),(0,d.jsxs)("div",{className:"flex items-center px-2 mx-auto border border-basic rounded-[20px]",children:[(0,d.jsx)("input",{type:"text",onChange:function(e){return f(e.target.value)},className:"flex-1 py-[7px]  px-4 outline-none border-none bg-transparent text-[14px]"}),(0,d.jsx)("span",{className:"flex items-center text-xl font-medium mr-2 cursor-pointer",children:(0,d.jsx)(o.jRj,{})})]}),(0,d.jsxs)("div",{className:"movies-list flex flex-col justify-start mb-10",children:[(0,d.jsx)("h3",{className:"text-[16px]  mt-10",children:"Popular Search"}),y&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{}),(0,d.jsx)(m,{}),(0,d.jsx)(m,{}),(0,d.jsx)(m,{}),(0,d.jsx)(m,{}),(0,d.jsx)(m,{})]}),!y&&k.length>0&&k.map((function(e){return(0,d.jsx)(x,{item:e},e.id)}))]})]})]})}},77:function(e,t,n){n.d(t,{W:function(){return a},_:function(){return i}});var i=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))},r="92f81e121c32d0b9ad19e4e7851187ca",s="https://api.themoviedb.org/3/movie",a={getMovie:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(s,"/").concat(e,"?api_key=").concat(r).concat(t)},getSlider:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},getImgage:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}}},8112:function(e,t,n){var i=n(885),r=n(2791);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=(0,r.useState)(e),s=(0,i.Z)(n,2),a=s[0],o=s[1];return(0,r.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[t,e]),a}},8091:function(e,t,n){n(2791);var i=n(184);t.Z=function(e){var t=e.height,n=void 0===t?"100%":t,r=e.width,s=void 0===r?"100%":r,a=e.borderRadius,o=void 0===a?"8px":a,c=e.bg,l=void 0===c?"":c;return(0,i.jsx)("div",{className:"skeleton",style:{height:n,width:s,borderRadius:o,background:l}})}}}]);
//# sourceMappingURL=797.8171c193.chunk.js.map