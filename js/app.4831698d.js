(function(e){function t(t){for(var r,i,a=t[0],l=t[1],u=t[2],f=0,p=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/interstellar-observer/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=["data-height","data-width","data-theme","href"],c=Object(r["defineComponent"])({props:{channelName:null,theme:null,width:null,height:null},setup:function(e){return function(t,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{class:"twitter-timeline","data-height":e.height,"data-width":e.width,"data-theme":e.theme,href:"https://twitter.com/".concat(e.channelName)},"Tweets by "+Object(r["toDisplayString"])(e.channelName),9,o)}}});const i=c;var a=i,l=Object(r["defineComponent"])({setup:function(e){return function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(a,{theme:"dark","channel-name":"Space_Station"})}}});const u=l;var s=u,f=Object(r["defineComponent"])({setup:function(e){return function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(s)}}});const p=f;var d=p,h=n("9483");Object(h["a"])("".concat("/interstellar-observer/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var b=n("6c02"),g=[{path:"/",name:"Dashboard",component:s}],v=Object(b["a"])({history:Object(b["b"])("/interstellar-observer/"),routes:g}),w=v,m=n("be92"),O=Object(r["createApp"])(d);O.config.globalProperties.$twitter_widget=window.twttr,O.use(w).use(Object(m["a"])()).mount("#app")}});
//# sourceMappingURL=app.4831698d.js.map