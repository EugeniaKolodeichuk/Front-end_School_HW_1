(this.webpackJsonpTikTuk=this.webpackJsonpTikTuk||[]).push([[4],{108:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return S}));var r=e(13);var a=e(20);function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c,i,u,s,f,p=e(19),d=e(0),l=e(81),h=e.n(l),b=e(7),x=e(5),j=x.c.div(c||(c=Object(b.a)(["\n  max-width: 1300px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n"]))),m=e(18),g=e(69),v=e(68),O=x.c.img(i||(i=Object(b.a)(["\n  border-radius: 50%;\n  margin-right: 20px;\n"]))),w=e(1),y=function(t){var n=t.avatarThumb,e=t.nickname;return Object(w.jsx)(O,{width:"70px",src:n||v.a,alt:e})},k=function(t){var n=t.commentCount,e=void 0===n?0:n,r=t.diggCount,a=void 0===r?0:r;return Object(w.jsxs)("ul",{children:[Object(w.jsxs)("li",{children:["Comments: ",Object(w.jsx)("b",{children:e})]}),Object(w.jsxs)("li",{children:["Likes: ",Object(w.jsx)("b",{children:a})]})]})},C=function(t){var n=t.downloadAddr;return n?Object(w.jsxs)("video",{width:"300px",controls:!0,"data-testid":"video",children:[Object(w.jsx)("source",{src:n,type:"video/mp4;"}),Object(w.jsx)("track",{kind:"captions",srcLang:"en",label:"english_captions"})]}):Object(w.jsx)(m.a,{})},T=e(11),E=x.c.div(u||(u=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 15px;\n  margin-bottom: 1.5em;\n  padding: 0.6em;\n  background: #fefefe8c;\n  color: #231f20;\n  width: 350px;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px 0px rgba(0, 0, 0, 0.12);\n"]))),A=Object(x.c)(T.b)(s||(s=Object(b.a)(["\n  display: inline-block;\n  text-decoration: none;\n  padding: 10px;\n  color: inherit;\n\n  &:hover {\n    color: #005eaa;\n  }\n"]))),M=x.c.div(f||(f=Object(b.a)(["\n  display: inline-flex;\n  align-items: center;\n  flex-direction: row;\n  margin-top: 15px;\n"]))),L=function(t){var n=t.feed;return n.video.downloadAddr?Object(w.jsxs)(E,{children:[Object(w.jsx)(C,{downloadAddr:n.video.downloadAddr}),Object(w.jsx)("p",{children:n.author.signature}),Object(w.jsxs)(M,{children:[Object(w.jsx)(y,{avatarThumb:n.author.avatarThumb,nickname:n.author.nickname}),Object(w.jsx)("p",{children:Object(w.jsx)(A,{to:"/profile/".concat(n.author.uniqueId),children:Object(w.jsx)("b",{children:n.author.nickname})})})]}),Object(w.jsx)(k,{commentCount:n.stats.commentCount,diggCount:n.stats.diggCount})]},n.author.nickname):Object(w.jsx)(m.a,{})};function S(){var t=Object(d.useState)([]),n=Object(p.a)(t,2),e=n[0],r=n[1],a=Object(d.useState)(1),c=Object(p.a)(a,2),i=c[0],u=c[1],s=Object(d.useState)(!0),f=Object(p.a)(s,2),l=f[0],b=f[1],x=function(t){t.target.documentElement.scrollHeight-(t.target.documentElement.scrollTop+window.innerHeight)<100&&b(!0)};return Object(d.useEffect)((function(){return document.addEventListener("scroll",x),function(){document.removeEventListener("scroll",x)}}),[]),Object(d.useEffect)((function(){try{Object(g.a)(i).then((function(t){r([].concat(o(e),o(t))),u((function(t){return t+1}))}))}catch(t){console.error(t)}finally{b(!1)}}),[l]),Object(w.jsx)(j,{children:e.length>0?e.map((function(t){return Object(w.jsx)(L,{feed:t},h.a.generate())})):Object(w.jsx)(m.a,{})},h.a.generate())}},65:function(t,n,e){"use strict";var r,a,o,c=e(83),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){o=!1}function s(t){if(t){if(t!==r){if(t.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+t.length+" characters: "+t);var n=t.split("").filter((function(t,n,e){return n!==e.lastIndexOf(t)}));if(n.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+n.join(", "));r=t,u()}}else r!==i&&(r=i,u())}function f(){return o||(o=function(){r||s(i);for(var t,n=r.split(""),e=[],a=c.nextValue();n.length>0;)a=c.nextValue(),t=Math.floor(a*n.length),e.push(n.splice(t,1)[0]);return e.join("")}())}t.exports={get:function(){return r||i},characters:function(t){return s(t),r},seed:function(t){c.seed(t),a!==t&&(u(),a=t)},lookup:function(t){return f()[t]},shuffled:f}},68:function(t,n,e){"use strict";n.a=e.p+"static/media/default.0baf9395.jpg"},69:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return f})),e.d(n,"b",(function(){return d}));var r=e(70),a=e.n(r),o=e(71),c=e(72),i=e.n(c).a.create({baseURL:"https://tiktok33.p.rapidapi.com",headers:{"x-rapidapi-host":"".concat("tiktok33.p.rapidapi.com"),"x-rapidapi-key":"".concat("98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551"),"Content-Type":"application/json"}});function u(t){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(a.a.mark((function t(n){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/trending/feed/?limit=30&page=".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark((function t(n){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/user/info/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(a.a.mark((function t(n){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/user/feed/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},81:function(t,n,e){"use strict";t.exports=e(82)},82:function(t,n,e){"use strict";var r=e(65),a=e(84),o=e(88),c=e(89)||0;function i(){return a(c)}t.exports=i,t.exports.generate=i,t.exports.seed=function(n){return r.seed(n),t.exports},t.exports.worker=function(n){return c=n,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=o},83:function(t,n,e){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},84:function(t,n,e){"use strict";var r,a,o=e(85);e(65);t.exports=function(t){var n="",e=Math.floor(.001*(Date.now()-1567752802062));return e===a?r++:(r=0,a=e),n+=o(7),n+=o(t),r>0&&(n+=o(r)),n+=o(e)}},85:function(t,n,e){"use strict";var r=e(65),a=e(86),o=e(87);t.exports=function(t){for(var n,e=0,c="";!n;)c+=o(a,r.get(),1),n=t<Math.pow(16,e+1),e++;return c}},86:function(t,n,e){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(t){return a.getRandomValues(new Uint8Array(t))}:function(t){for(var n=[],e=0;e<t;e++)n.push(Math.floor(256*Math.random()));return n},t.exports=r},87:function(t,n){t.exports=function(t,n,e){for(var r=(2<<Math.log(n.length-1)/Math.LN2)-1,a=-~(1.6*r*e/n.length),o="";;)for(var c=t(a),i=a;i--;)if((o+=n[c[i]&r]||"").length===+e)return o}},88:function(t,n,e){"use strict";var r=e(65);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},89:function(t,n,e){"use strict";t.exports=0}}]);
//# sourceMappingURL=news-view.01e30aad.chunk.js.map