!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.glitch=e()}(this,function(){"use strict";function t(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function e(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}var n=function(t,e,n){return t<e?e:t>n?n:t},r=function(t){var e=!1;if(void 0!==t)try{e=JSON.parse(JSON.stringify(t))}catch(t){}return e},i={amount:35,iterations:20,quality:30,seed:25},a=function(t){return"object"!=typeof(t=r(t))&&(t={}),Object.keys(i).filter(function(t){return"iterations"!==t}).forEach(function(e){"number"!=typeof t[e]||isNaN(t[e])?t[e]=i[e]:t[e]=n(t[e],0,100),t[e]=Math.round(t[e])}),("number"!=typeof t.iterations||isNaN(t.iterations)||t.iterations<=0)&&(t.iterations=i.iterations),t.iterations=Math.round(t.iterations),t},o=function(t,e){void 0===t&&(t=300),void 0===e&&(e=150),this.canvasEl=document.createElement("canvas"),this.canvasEl.width=t,this.canvasEl.height=e,this.ctx=this.canvasEl.getContext("2d")},s={width:{configurable:!0},height:{configurable:!0}};o.prototype.getContext=function(){return this.ctx},o.prototype.toDataURL=function(t,e,n){if("function"!=typeof n)return this.canvasEl.toDataURL(t,e);n(this.canvasEl.toDataURL(t,e))},s.width.get=function(){return this.canvasEl.width},s.width.set=function(t){this.canvasEl.width=t},s.height.get=function(){return this.canvasEl.height},s.height.set=function(t){this.canvasEl.height=t},Object.defineProperties(o.prototype,s);var u=function(t){if(t instanceof HTMLImageElement){if(!t.naturalWidth||!t.naturalHeight||!1===t.complete)throw new Error("This this image hasn't finished loading: "+t.src);var e=new o(t.naturalWidth,t.naturalHeight),n=e.getContext("2d");n.drawImage(t,0,0,e.width,e.height);var r=n.getImageData(0,0,e.width,e.height);return r.data&&r.data.length&&(void 0===r.width&&(r.width=t.naturalWidth),void 0===r.height&&(r.height=t.naturalHeight)),r}throw new Error("This object does not seem to be an image.")},c=o.Image=Image,f=function(t){return new Promise(function(e,n){var r=new c;r.onload=function(){e(r)},r.onerror=function(t){n(t)},r.src=t})},h=function(t,e,n,r){f(t).then(n,r)},l=function(t){return{width:t.width||t.naturalWidth,height:t.height||t.naturalHeight}},p=function(t){var e=l(t),n=new o(e.width,e.height),r=n.getContext("2d");return r.drawImage(t,0,0,e.width,e.height),{canvas:n,ctx:r}},d=function(t,e,n,r){f(t).then(function(t){var e=l(t),r=p(t).ctx.getImageData(0,0,e.width,e.height);r.width||(r.width=e.width),r.height||(r.height=e.height),n(r)},r)},g=function(t){return t&&"number"==typeof t.width&&"number"==typeof t.height&&t.data&&"number"==typeof t.data.length&&"object"==typeof t.data},v=function(t,e){return new Promise(function(n,r){if(g(t)){var i=new o(t.width,t.height);i.getContext("2d").putImageData(t,0,0),n(i.toDataURL("image/jpeg",e/100))}else r(new Error("object is not valid imageData"))})};"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("").forEach(function(t,e){});var m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,w=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(e,n){for(var r,i,a=arguments,o=t(e),s=1;s<arguments.length;s++){r=Object(a[s]);for(var u in r)b.call(r,u)&&(o[u]=r[u]);if(m){i=m(r);for(var c=0;c<i.length;c++)y.call(r,i[c])&&(o[i[c]]=r[i[c]])}}return o},_="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};return function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t,n){!function(e,n){t.exports=n()}(0,function(){function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}function r(){return void 0!==U?function(){U(a)}:i()}function i(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<k;t+=2)(0,F[t])(F[t+1]),F[t]=void 0,F[t+1]=void 0;k=0}function o(t,e){var n=arguments,r=this,i=new this.constructor(u);void 0===i[K]&&x(i);var a=r._state;return a?function(){var t=n[a-1];H(function(){return D(a,i,t,r._result)})}():w(r,i,t,e),i}function s(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(u);return v(n,t),n}function u(){}function c(){return new TypeError("You cannot resolve a promise with itself")}function f(){return new TypeError("A promises callback cannot return that same promise.")}function h(t){try{return t.then}catch(t){return V.error=t,V}}function l(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function p(t,e,n){H(function(t){var r=!1,i=l(n,e,function(n){r||(r=!0,e!==n?v(t,n):b(t,n))},function(e){r||(r=!0,y(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&i&&(r=!0,y(t,i))},t)}function d(t,e){e._state===G?b(t,e._result):e._state===Q?y(t,e._result):w(e,void 0,function(e){return v(t,e)},function(e){return y(t,e)})}function g(t,e,r){e.constructor===t.constructor&&r===o&&e.constructor.resolve===s?d(t,e):r===V?(y(t,V.error),V.error=null):void 0===r?b(t,e):n(r)?p(t,e,r):b(t,e)}function v(e,n){e===n?y(e,c()):t(n)?g(e,n,h(n)):b(e,n)}function m(t){t._onerror&&t._onerror(t._result),j(t)}function b(t,e){t._state===z&&(t._result=e,t._state=G,0!==t._subscribers.length&&H(j,t))}function y(t,e){t._state===z&&(t._state=Q,t._result=e,H(m,t))}function w(t,e,n,r){var i=t._subscribers,a=i.length;t._onerror=null,i[a]=e,i[a+G]=n,i[a+Q]=r,0===a&&t._state&&H(j,t)}function j(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,i=void 0,a=t._result,o=0;o<e.length;o+=3)r=e[o],i=e[o+n],r?D(n,r,i,a):i(a);t._subscribers.length=0}}function E(){this.error=null}function M(t,e){try{return t(e)}catch(t){return X.error=t,X}}function D(t,e,r,i){var a=n(r),o=void 0,s=void 0,u=void 0,c=void 0;if(a){if((o=M(r,i))===X?(c=!0,s=o.error,o.error=null):u=!0,e===o)return void y(e,f())}else o=i,u=!0;e._state!==z||(a&&u?v(e,o):c?y(e,s):t===G?b(e,o):t===Q&&y(e,o))}function O(t,e){try{e(function(e){v(t,e)},function(e){y(t,e)})}catch(e){y(t,e)}}function A(){return Z++}function x(t){t[K]=Z++,t._state=void 0,t._result=void 0,t._subscribers=[]}function I(t,e){this._instanceConstructor=t,this.promise=new t(u),this.promise[K]||x(this.promise),B(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?b(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&b(this.promise,this._result))):y(this.promise,P())}function P(){return new Error("Array Methods must be provided an Array")}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function S(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function T(t){this[K]=A(),this._result=this._state=void 0,this._subscribers=[],u!==t&&("function"!=typeof t&&L(),this instanceof T?O(this,t):S())}var C=void 0,B=C=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},k=0,U=void 0,R=void 0,H=function(t,e){F[k]=t,F[k+1]=e,2===(k+=2)&&(R?R(a):J())},N="undefined"!=typeof window?window:void 0,W=N||{},$=W.MutationObserver||W.WebKitMutationObserver,q="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Y="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,F=new Array(1e3),J=void 0;J=q?function(){return process.nextTick(a)}:$?function(){var t=0,e=new $(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():Y?function(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}():void 0===N&&"function"==typeof e?function(){try{var t=e("vertx");return U=t.runOnLoop||t.runOnContext,r()}catch(t){return i()}}():i();var K=Math.random().toString(36).substring(16),z=void 0,G=1,Q=2,V=new E,X=new E,Z=0;return I.prototype._enumerate=function(){for(var t=this,e=this.length,n=this._input,r=0;this._state===z&&r<e;r++)t._eachEntry(n[r],r)},I.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===s){var i=h(t);if(i===o&&t._state!==z)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===T){var a=new n(u);g(a,t,i),this._willSettleAt(a,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},I.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===z&&(this._remaining--,t===Q?y(r,n):this._result[e]=n),0===this._remaining&&b(r,this._result)},I.prototype._willSettleAt=function(t,e){var n=this;w(t,void 0,function(t){return n._settledAt(G,e,t)},function(t){return n._settledAt(Q,e,t)})},T.all=function(t){return new I(this,t).promise},T.race=function(t){var e=this;return new e(B(t)?function(n,r){for(var i=t.length,a=0;a<i;a++)e.resolve(t[a]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})},T.resolve=s,T.reject=function(t){var e=new this(u);return y(e,t),e},T._setScheduler=function(t){R=t},T._setAsap=function(t){H=t},T._asap=H,T.prototype={constructor:T,then:o,catch:function(t){return this.then(null,t)}},T.polyfill=function(){var t=void 0;if(void 0!==_)t=_;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=T},T.Promise=T,T})}).polyfill(),function(t){function e(){var t=w({},b);return p||w(t,y),t}function n(){var t=w({},b);return g||w(t,_),t}function r(t){return t}function i(t,e,i){return p=function(){return new Promise(function(n,a){if(i)t(e,n,a);else if(t===r)n(e);else try{n(t(e,n,a))}catch(t){a(t)}})},s()?c():n()}function o(t,n,i){return g=function(e){return new Promise(function(a,o){i?t(e,n,a,o):t===r?a(e):t(e,n).then(a,o)})},s()?c():e()}function s(){return p&&g}function c(){return new Promise(function(e,n){p().then(function(e){return f(e,t)},n).then(function(t){g(t).then(e,n)},n)})}function f(t,e){return new Promise(function(n,r){v(t,e.quality).then(function(n){return l(t,n,e)},r).then(n,r)})}function l(t,e,n){return new Promise(function(r,i){m.addEventListener("message",function(t){t.data&&t.data.base64URL?r(t.data.base64URL):i(t.data&&t.data.err?t.data.err:t)}),m.postMessage({params:n,base64URL:e,imageData:t,imageDataWidth:t.width,imageDataHeight:t.height})})}t=a(t);var p,g,m=new Worker(URL.createObjectURL(new Blob(['function fail(a){self.postMessage({err:a.message||a})}function success(a){self.postMessage({base64URL:a})}var isImageData=function(a){return a&&"number"==typeof a.width&&"number"==typeof a.height&&a.data&&"number"==typeof a.data.length&&"object"==typeof a.data},base64Chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",base64Map=base64Chars.split(""),reversedBase64Map$1={};base64Map.forEach(function(a,e){reversedBase64Map$1[a]=e});var maps={base64Map:base64Map,reversedBase64Map:reversedBase64Map$1},reversedBase64Map=maps.reversedBase64Map,base64ToByteArray=function(a){for(var e,s=[],t=23,r=a.length;t<r;t++){var i=reversedBase64Map[a.charAt(t)];switch((t-23)%4){case 1:s.push(e<<2|i>>4);break;case 2:s.push((15&e)<<4|i>>2);break;case 3:s.push((3&e)<<6|i)}e=i}return s},jpgHeaderLength=function(a){for(var e=417,s=0,t=a.length;s<t;s++)if(255===a[s]&&218===a[s+1]){e=s+2;break}return e},glitchByteArray=function(a,e,s,t){for(var r=jpgHeaderLength(a),i=a.length-r-4,p=s/100,n=e/100,h=0;h<t;h++){var g=i/t*h|0,o=g+((i/t*(h+1)|0)-g)*n|0;o>i&&(o=i),a[~~(r+o)]=~~(256*p)}return a},base64Map$1=maps.base64Map,byteArrayToBase64=function(a){for(var e,s,t=["data:image/jpeg;base64,"],r=0,i=a.length;r<i;r++){var p=a[r];switch(e=r%3){case 0:t.push(base64Map$1[p>>2]);break;case 1:t.push(base64Map$1[(3&s)<<4|p>>4]);break;case 2:t.push(base64Map$1[(15&s)<<2|p>>6]),t.push(base64Map$1[63&p])}s=p}return 0===e?(t.push(base64Map$1[(3&s)<<4]),t.push("==")):1===e&&(t.push(base64Map$1[(15&s)<<2]),t.push("=")),t.join("")},glitchImageData=function(a,e,s){if(isImageData(a)){var t=base64ToByteArray(e),r=glitchByteArray(t,s.seed,s.amount,s.iterations);return byteArrayToBase64(r)}throw new Error("glitchImageData: imageData seems to be corrupt.")};onmessage=function(a){var e=a.data.imageData,s=a.data.params,t=a.data.base64URL;if(e&&t&&s)try{void 0===e.width&&"number"==typeof a.data.imageDataWidth&&(e.width=a.data.imageDataWidth),void 0===e.height&&"number"==typeof a.data.imageDataHeight&&(e.height=a.data.imageDataHeight),success(glitchImageData(e,t,s))}catch(a){fail(a)}else fail(a.data.imageData?"Parameters are missing.":"ImageData is missing.");self.close()};'],{type:"text/javascript"}))),b={getParams:function(){return t},getInput:e,getOutput:n},y={fromImageData:function(t){return i(r,t)},fromImage:function(t){return i(u,t)}},_={toImage:function(t){return o(h,t,!0)},toDataURL:function(t){return o(r)},toImageData:function(t){return o(d,t,!0)}};return e()}});
