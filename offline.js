<<<<<<< HEAD
function precache(){return caches.open(CACHE).then(function(n){return n.addAll(["./index.html","./manifest.json","./js/@index.js","./css/@index.css","./css/font.josefin/josefin.woff2","./icon-128.png","./icon-512.png","./css/main/backmap.jpg","./css/main/skaftafell.jpg","./css/main/svartifoss.jpg","./css/main/tiles/10-5653-5187.jpg","./css/main/tiles/10-5653-5188.jpg","./css/main/tiles/10-5653-5189.jpg","./css/main/tiles/10-6102-5355.jpg","./css/main/tiles/10-6103-5355.jpg","./css/main/tiles/10-6104-5355.jpg","./css/main/tiles/10-6125-5424.jpg","./css/main/tiles/10-6125-5425.jpg","./css/main/tiles/10-6126-5423.jpg","./css/main/tiles/10-6126-5424.jpg","./css/main/tiles/10-6126-5425.jpg","./css/main/tiles/10-6127-5422.jpg","./css/main/tiles/10-6127-5423.jpg","./css/main/tiles/9-2370-2078.jpg","./css/main/tiles/9-2371-2078.jpg"])})}function fromCache(n){return caches.open(CACHE).then(function(e){return e.match(n).then(function(n){return n||Promise.reject("no-match")})})}function update(n){return caches.open(CACHE).then(function(e){return fetch(n).then(function(t){return e.put(n,t)})})}var window=self;window.require=function(){var n={},e={},t={},s="function"==typeof window.require?window.require:null,i=function(o,r){var a=n[o];if(a)return a;if("node://"==o.substr(0,7)){if(!s)throw Error("[require] NodeJS is not available to load module `"+o+"`!");return s(o.substr(7))}if("function"==typeof r)return void(t[o]=r);var c;if(void 0===(r=t[o])){var l=new Error("Required module is missing: "+o);throw console.error(l.stack),l}if(void 0===(c=e[o])){c={exports:{}};var u=c.exports;r(i,c,u),e[o]=c.exports,c=c.exports}return c};return i.mock=function(e,t){n[e]=t},i}(),require("$",function(n,e,t){t.config={name:'"Iceland"',description:'"Voyage en Islande"',author:'"tolokoban"',version:'"0.0.12"',major:"0",minor:"0",revision:"12",date:"2018-08-05T15:41:36.000Z",consts:{}};var s=null;t.lang=function(n){return void 0===n&&(window.localStorage&&(n=window.localStorage.getItem("Language")),n||(n=window.navigator.language)||(n=window.navigator.browserLanguage)||(n="fr"),n=n.substr(0,2).toLowerCase()),s=n,window.localStorage&&window.localStorage.setItem("Language",n),n},t.intl=function(n,e){var s,i,o,r,a,c,l,u=n[t.lang()],f=e[0];for(l in n)break;if(!l)return f;if(!u&&!(u=n[l]))return f;if(s=u[f],s||(u=n[l],s=u[f]),!s)return f;if(e.length>1){for(i="",a=0,o=0;o<s.length;o++)r=s.charAt(o),"$"===r?(i+=s.substring(a,o),o++,c=s.charCodeAt(o)-48,c<0||c>=e.length?i+="$"+s.charAt(o):i+=e[c],a=o+1):"\\"===r&&(i+=s.substring(a,o),o++,i+=s.charAt(o),a=o+1);i+=s.substr(a),s=i}return s}});var CACHE="iceland-20180803";self.addEventListener("install",function(n){console.log("[SW] install."),n.waitUntil(precache())}),self.addEventListener("activate",function(n){console.log("[SW] activate."),n.waitUntil(precache())}),self.addEventListener("fetch",function(n){console.log("[SW] fetch. ",n.request.url),n.respondWith(fromCache(n.request)),n.waitUntil(update(n.request))}),self.addEventListener("message",function(n){console.log("[SW] message.")}),self.addEventListener("sync",function(n){console.log("[SW] sync.")}),self.addEventListener("push",function(n){console.log("[SW] push.")});
=======
function precache(){return caches.open(CACHE).then(function(n){return n.addAll(["./index.html","./manifest.json","./js/@index.js","./css/@index.css","./css/font.josefin/josefin.woff2","./icon-128.png","./icon-512.png","./css/main/backmap.jpg","./css/main/skaftafell.jpg","./css/main/svartifoss.jpg","./css/main/tiles/10-5653-5187.jpg","./css/main/tiles/10-5653-5188.jpg","./css/main/tiles/10-5653-5189.jpg","./css/main/tiles/10-6102-5355.jpg","./css/main/tiles/10-6103-5355.jpg","./css/main/tiles/10-6104-5355.jpg","./css/main/tiles/10-6125-5424.jpg","./css/main/tiles/10-6125-5425.jpg","./css/main/tiles/10-6126-5423.jpg","./css/main/tiles/10-6126-5424.jpg","./css/main/tiles/10-6126-5425.jpg","./css/main/tiles/10-6127-5422.jpg","./css/main/tiles/10-6127-5423.jpg","./css/main/tiles/9-2370-2078.jpg","./css/main/tiles/9-2371-2078.jpg"])})}function fromCache(n){return caches.open(CACHE).then(function(e){return e.match(n).then(function(n){return n||Promise.reject("no-match")})})}function update(n){return caches.open(CACHE).then(function(e){return fetch(n).then(function(t){return e.put(n,t)})})}var window=self;window.require=function(){var n={},e={},t={},s="function"==typeof window.require?window.require:null,i=function(o,r){var a=n[o];if(a)return a;if("node://"==o.substr(0,7)){if(!s)throw Error("[require] NodeJS is not available to load module `"+o+"`!");return s(o.substr(7))}if("function"==typeof r)return void(t[o]=r);var c;if(void 0===(r=t[o])){var l=new Error("Required module is missing: "+o);throw console.error(l.stack),l}if(void 0===(c=e[o])){c={exports:{}};var u=c.exports;r(i,c,u),e[o]=c.exports,c=c.exports}return c};return i.mock=function(e,t){n[e]=t},i}(),require("$",function(n,e,t){t.config={name:'"Iceland"',description:'"Voyage en Islande"',author:'"tolokoban"',version:'"0.0.10"',major:"0",minor:"0",revision:"10",date:"2018-08-03T12:54:09.000Z",consts:{}};var s=null;t.lang=function(n){return void 0===n&&(window.localStorage&&(n=window.localStorage.getItem("Language")),n||(n=window.navigator.language)||(n=window.navigator.browserLanguage)||(n="fr"),n=n.substr(0,2).toLowerCase()),s=n,window.localStorage&&window.localStorage.setItem("Language",n),n},t.intl=function(n,e){var s,i,o,r,a,c,l,u=n[t.lang()],f=e[0];for(l in n)break;if(!l)return f;if(!u&&!(u=n[l]))return f;if(s=u[f],s||(u=n[l],s=u[f]),!s)return f;if(e.length>1){for(i="",a=0,o=0;o<s.length;o++)r=s.charAt(o),"$"===r?(i+=s.substring(a,o),o++,c=s.charCodeAt(o)-48,c<0||c>=e.length?i+="$"+s.charAt(o):i+=e[c],a=o+1):"\\"===r&&(i+=s.substring(a,o),o++,i+=s.charAt(o),a=o+1);i+=s.substr(a),s=i}return s}});var CACHE="iceland-20180803";self.addEventListener("install",function(n){console.log("[SW] install."),n.waitUntil(precache())}),self.addEventListener("activate",function(n){console.log("[SW] activate."),n.waitUntil(precache())}),self.addEventListener("fetch",function(n){console.log("[SW] fetch. ",n.request.url),n.respondWith(fromCache(n.request)),n.waitUntil(update(n.request))}),self.addEventListener("message",function(n){console.log("[SW] message.")}),self.addEventListener("sync",function(n){console.log("[SW] sync.")}),self.addEventListener("push",function(n){console.log("[SW] push.")});
>>>>>>> d2a40d8ee53df154fab14abda404dcbbf4a70347
//# sourceMappingURL=mod/offline.wrk.map