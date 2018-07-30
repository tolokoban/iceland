/**********************************************************************
 require( 'require' )
 -----------------------------------------------------------------------
 @example

 var Path = require("node://path");  // Only in NodeJS/NW.js environment.
 var Button = require("tfw.button");

 **********************************************************************/

window.require = function() {
  var mocks = {};
  var modules = {};
  var definitions = {};
  var nodejs_require = typeof window.require === 'function' ? window.require : null;

  var f = function(id, body) {
    var mock = mocks[id];
    if( mock ) return mock;
    
    if( id.substr( 0, 7 ) == 'node://' ) {
      // Calling for a NodeJS module.
      if( !nodejs_require ) {
        throw Error( "[require] NodeJS is not available to load module `" + id + "`!" );
      }
      return nodejs_require( id.substr( 7 ) );
    }

    if( typeof body === 'function' ) {
      definitions[id] = body;
      return;
    }
    var mod;
    body = definitions[id];
    if (typeof body === 'undefined') {
      var err = new Error("Required module is missing: " + id);
      console.error(err.stack);
      throw err;
    }
    mod = modules[id];
    if (typeof mod === 'undefined') {
      mod = {exports: {}};
      var exports = mod.exports;
      body(f, mod, exports);
      modules[id] = mod.exports;
      mod = mod.exports;
    }
    return mod;
  };

  f.mock = function( moduleName, module ) {
    mocks[moduleName] = module;
  };
  
  return f;
}();
function addListener(e,l) {
    if (window.addEventListener) {
        window.addEventListener(e,l,false);
    } else {
        window.attachEvent('on' + e, l);
    }
};

addListener(
    'DOMContentLoaded',
    function() {
        document.body.parentNode.$data = {};
        // Attach controllers.
        APP = require('main');
setTimeout(function (){if(typeof APP.start==='function')APP.start()});

    }
);
require("$",function(n,r,a){a.config={name:'"Iceland"',description:'"Voyage en Islande"',author:'"tolokoban"',version:'"0.0.4"',major:"0",minor:"0",revision:"4",date:"2018-07-30T15:41:28.000Z",consts:{}};var o=null;a.lang=function(n){return void 0===n&&(window.localStorage&&(n=window.localStorage.getItem("Language")),n||(n=window.navigator.language)||(n=window.navigator.browserLanguage)||(n="fr"),n=n.substr(0,2).toLowerCase()),o=n,window.localStorage&&window.localStorage.setItem("Language",n),n},a.intl=function(n,r){var o,e,t,i,g,l,u,s=n[a.lang()],c=r[0];for(u in n)break;if(!u)return c;if(!s&&!(s=n[u]))return c;if(o=s[c],o||(s=n[u],o=s[c]),!o)return c;if(r.length>1){for(e="",g=0,t=0;t<o.length;t++)i=o.charAt(t),"$"===i?(e+=o.substring(g,t),t++,l=o.charCodeAt(t)-48,l<0||l>=r.length?e+="$"+o.charAt(t):e+=r[l],g=t+1):"\\"===i&&(e+=o.substring(g,t),t++,e+=o.charAt(t),g=t+1);e+=o.substr(g),o=e}return o}});
//# sourceMappingURL=$.js.map
require("main",function(e,n,r){var o=function(){function n(){return o(r,arguments)}var r={en:{welcome:"Welcome in the world of"},fr:{welcome:"Bienvenue dans le monde de"}},o=e("$").intl;return n.all=r,n}(),l=e("iceland.scroll-snap");r.start=function(){l()},n.exports._=o});
//# sourceMappingURL=main.js.map
require("iceland.scroll-snap",function(o,n,t){function e(){r=0,console.log("SNAP!");var o=document.body.parentElement,n=o.scrollLeft,t=document.body.clientWidth,e=Math.floor(.5+n/t);o.scrollLeft=e*t}var l=function(){function n(){return e(t,arguments)}var t={en:{},fr:{}},e=o("$").intl;return n.all=t,n}(),r=0;n.exports=function(){document.body.onscroll=function(o){r&&clearTimeout(r),r=setTimeout(e,200);document.body.scrollLeft}},n.exports._=l});
//# sourceMappingURL=iceland.scroll-snap.js.map
