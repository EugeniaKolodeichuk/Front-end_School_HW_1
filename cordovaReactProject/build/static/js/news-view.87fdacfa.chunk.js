(this["webpackJsonpio.cordova.hellocordova"]=this["webpackJsonpio.cordova.hellocordova"]||[]).push([[4],{110:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return R}));var r=e(16);var o=e(22);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c,i,u,s,d,p=e(21),f=e(0),l=e(83),h=e.n(l),x=e(10),b=e(8),j=b.c.div(c||(c=Object(x.a)(["\n  max-width: 1300px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n"]))),v=e(20),m=e(71),g=e(70),O=b.c.img(i||(i=Object(x.a)(["\n  border-radius: 50%;\n  margin-right: 20px;\n"]))),w=e(1),y=function(t){var n=t.avatarThumb,e=t.nickname;return Object(w.jsx)(O,{width:"70px",src:n||g.a,alt:e})},E=function(t){var n=t.commentCount,e=void 0===n?0:n,r=t.diggCount,o=void 0===r?0:r;return Object(w.jsxs)("ul",{children:[Object(w.jsxs)("li",{children:["Comments: ",Object(w.jsx)("b",{children:e})]}),Object(w.jsxs)("li",{children:["Likes: ",Object(w.jsx)("b",{children:o})]})]})},S=function(t){var n=t.downloadAddr;return n?Object(w.jsxs)("video",{width:"300px",controls:!0,"data-testid":"video",children:[Object(w.jsx)("source",{src:n,type:"video/mp4;"}),Object(w.jsx)("track",{kind:"captions",srcLang:"en",label:"english_captions"})]}):Object(w.jsx)(v.a,{})},T=e(14),_=b.c.div(u||(u=Object(x.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 15px;\n  margin-bottom: 1.5em;\n  padding: 0.6em;\n  background: #fefefe8c;\n  color: #231f20;\n  width: 350px;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px 0px rgba(0, 0, 0, 0.12);\n"]))),C=Object(b.c)(T.b)(s||(s=Object(x.a)(["\n  display: inline-block;\n  text-decoration: none;\n  padding: 10px;\n  color: inherit;\n\n  &:hover {\n    color: #005eaa;\n  }\n"]))),k=b.c.div(d||(d=Object(x.a)(["\n  display: inline-flex;\n  align-items: center;\n  flex-direction: row;\n  margin-top: 15px;\n"]))),A=function(t){var n=t.feed;return n.video.downloadAddr?Object(w.jsxs)(_,{children:[Object(w.jsx)(S,{downloadAddr:n.video.downloadAddr}),Object(w.jsx)("p",{children:n.author.signature}),Object(w.jsxs)(k,{children:[Object(w.jsx)(y,{avatarThumb:n.author.avatarThumb,nickname:n.author.nickname}),Object(w.jsx)("p",{children:Object(w.jsx)(C,{to:"/profile/".concat(n.author.uniqueId),children:Object(w.jsx)("b",{children:n.author.nickname})})})]}),Object(w.jsx)(E,{commentCount:n.stats.commentCount,diggCount:n.stats.diggCount})]},n.author.nickname):Object(w.jsx)(v.a,{})};function R(){var t=Object(f.useState)([]),n=Object(p.a)(t,2),e=n[0],r=n[1],o=Object(f.useState)(1),c=Object(p.a)(o,2),i=c[0],u=c[1],s=Object(f.useState)(!0),d=Object(p.a)(s,2),l=d[0],x=d[1],b=function(t){t.target.documentElement.scrollHeight-(t.target.documentElement.scrollTop+window.innerHeight)<100&&x(!0)};return Object(f.useEffect)((function(){return document.addEventListener("scroll",b),function(){document.removeEventListener("scroll",b)}}),[]),Object(f.useEffect)((function(){try{Object(m.a)(i).then((function(t){r([].concat(a(e),a(t))),u((function(t){return t+1}))}))}catch(t){console.error(t)}finally{x(!1)}}),[l]),Object(w.jsx)(j,{children:e.length>0?e.map((function(t){return Object(w.jsx)(A,{feed:t},h.a.generate())})):Object(w.jsx)(v.a,{})},h.a.generate())}},67:function(t,n,e){"use strict";var r,o,a,c=e(85),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){a=!1}function s(t){if(t){if(t!==r){if(t.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+t.length+" characters: "+t);var n=t.split("").filter((function(t,n,e){return n!==e.lastIndexOf(t)}));if(n.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+n.join(", "));r=t,u()}}else r!==i&&(r=i,u())}function d(){return a||(a=function(){r||s(i);for(var t,n=r.split(""),e=[],o=c.nextValue();n.length>0;)o=c.nextValue(),t=Math.floor(o*n.length),e.push(n.splice(t,1)[0]);return e.join("")}())}t.exports={get:function(){return r||i},characters:function(t){return s(t),r},seed:function(t){c.seed(t),o!==t&&(u(),o=t)},lookup:function(t){return d()[t]},shuffled:d}},70:function(t,n,e){"use strict";n.a=e.p+"static/media/default.0baf9395.jpg"},71:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return d})),e.d(n,"b",(function(){return f}));var r=e(72),o=e(73),a=e.n(o),c=e(74),i=e.n(c).a.create({baseURL:"https://tiktok33.p.rapidapi.com",headers:{"x-rapidapi-host":"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_HOST),"x-rapidapi-key":"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY),"Content-Type":"application/json"}});function u(t){return s.apply(this,arguments)}function s(){return(s=Object(r.a)(a.a.mark((function t(n){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/trending/feed/?limit=30&page=".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return p.apply(this,arguments)}function p(){return(p=Object(r.a)(a.a.mark((function t(n){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/user/info/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(a.a.mark((function t(n){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/user/feed/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},83:function(t,n,e){"use strict";t.exports=e(84)},84:function(t,n,e){"use strict";var r=e(67),o=e(86),a=e(90),c=e(91)||0;function i(){return o(c)}t.exports=i,t.exports.generate=i,t.exports.seed=function(n){return r.seed(n),t.exports},t.exports.worker=function(n){return c=n,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=a},85:function(t,n,e){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},86:function(t,n,e){"use strict";var r,o,a=e(87);e(67);t.exports=function(t){var n="",e=Math.floor(.001*(Date.now()-1567752802062));return e===o?r++:(r=0,o=e),n+=a(7),n+=a(t),r>0&&(n+=a(r)),n+=a(e)}},87:function(t,n,e){"use strict";var r=e(67),o=e(88),a=e(89);t.exports=function(t){for(var n,e=0,c="";!n;)c+=a(o,r.get(),1),n=t<Math.pow(16,e+1),e++;return c}},88:function(t,n,e){"use strict";var r,o="object"===typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(t){return o.getRandomValues(new Uint8Array(t))}:function(t){for(var n=[],e=0;e<t;e++)n.push(Math.floor(256*Math.random()));return n},t.exports=r},89:function(t,n){t.exports=function(t,n,e){for(var r=(2<<Math.log(n.length-1)/Math.LN2)-1,o=-~(1.6*r*e/n.length),a="";;)for(var c=t(o),i=o;i--;)if((a+=n[c[i]&r]||"").length===+e)return a}},90:function(t,n,e){"use strict";var r=e(67);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},91:function(t,n,e){"use strict";t.exports=0}}]);
//# sourceMappingURL=news-view.87fdacfa.chunk.js.map