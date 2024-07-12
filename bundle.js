/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={89:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},248:t=>{t.exports=function(t){return t[1]}},365:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(248),o=n.n(r),i=n(89),a=n.n(i)()(o());a.push([t.id,"html{\n    font-family: system-ui;\n}\n\n\nbody{\n    margin: 0;\n    height: 100vh;\n    padding: 0 3rem;\n}\n\n.container{\n    height: 100%;\n    display: grid;\n    grid-template-columns: 802px 1fr 802px;\n    align-items: center;\n}\n\n.ship{\n    background: blue;\n    height: 80px;\n    width: 80px;\n    border: 1px solid black;\n    display: flex;\n}\n\n.ship.hover{\n    background: green;\n    cursor: pointer;\n    user-select: none;\n}\n\n.hit{\n    pointer-events: none;\n}\n\n\n.information{\n    text-align: center;\n    font-size: 3rem;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.hidden{\n    visibility: hidden;\n}\n\n.button{\n    padding: 0 1rem;\n}\n\nbutton{\n    width: 100%;\n    height: 100%;\n    border: 1px solid #265ba6;\n    border-radius: 1rem;\n    background: #265ba6;\n    padding: 1rem 2rem;\n    user-select: none;\n    font-size: 2rem;\n\n}\n\n\n.board-element{\n    border: solid 1px black;\n    width: 80px;\n    height: 80px;\n    box-sizing: border-box;\n    user-select: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.first-player,.second-player{\n    border: 1px solid black;\n    height: 800px;\n    display: flex;\n    flex-wrap: wrap;\n    box-sizing: border-box;\n}\n.turn{\n    opacity: 0.5;\n    pointer-events: none;\n\n }\n",""]);const c=a},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var h=n(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var d=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:d,references:1})}a.push(f)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=r(t,o),u=0;u<i.length;u++){var l=n(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}function r(t,e,n){return e=i(e),function(t,e){if(e&&("object"==c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,o()?Reflect.construct(e,n||[],i(t).constructor):e.apply(t,n))}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function l(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function f(t,e,n){return(e=h(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}function p(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function d(t,e){return Math.floor(Math.random()*(e-t))+t}function v(t,e,n,r){if("horizontal"===e){if(t.x+n-1>=10)return!1;for(var o=0;o<n;o++)if(r.getCoordinateFromCoordinateObj(new E(t.x+o,t.y)).ship)return!1}else{if(t.y+n-1>=10)return!1;for(var i=0;i<n;i++)if(r.getCoordinateFromCoordinateObj(new E(t.x,t.y+i)).ship)return!1}return!0}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0;var y=new WeakSet,m=function(){return l((function t(e,n){for(s(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(o=this,i=y),i.add(o),f(this,"length",void 0),f(this,"hitAmount",void 0),f(this,"isSunk",void 0),f(this,"coordinates",void 0),f(this,"direction",void 0),this.coordinates=[];;){var r;if(r=void 0!==n?n:d(1,5),this.createShip(r,e))break}var o,i;this.isSunk=!1,this.hitAmount=0}),[{key:"createShip",value:function(t,e){var n=new E(d(0,10),d(0,10));return Math.random()<.5&&v(n,"horizontal",t,e)?(p(y,this,g).call(this,"horizontal",e,n,t),this.direction="horizontal",!0):!!v(n,"vertical",t,e)&&(p(y,this,g).call(this,"vertical",e,n,t),this.direction="vertical",!0)}},{key:"set",value:function(t,e,n){var r=this;return this.coordinates.forEach((function(t){return t.ship=null})),v(e,n,this.length,t)?(this.coordinates=[],p(y,this,g).call(this,n,t,e,this.length),!0):(this.coordinates.forEach((function(t){return t.ship=r})),!1)}},{key:"hit",value:function(){this.hitAmount++,this.hitAmount===this.length&&(this.isSunk=!0)}}])}();function g(t,e,n,r){var o=e.getCoordinateFromCoordinateObj(n);if(o.ship=this,this.coordinates.push(o),"horizontal"===t)for(var i=1;i<r;i++){var a=e.getCoordinateFromCoordinateObj(new E(n.x+i,n.y));this.coordinates.push(a),a.ship=this}else for(var c=1;c<r;c++){var s=e.getCoordinateFromCoordinateObj(new E(n.x,n.y+c));this.coordinates.push(s),s.ship=this}this.length=r}var b=function(){return l((function t(e,n,r){s(this,t),f(this,"board",void 0),f(this,"length",void 0),f(this,"ships",void 0),f(this,"hits",void 0),this.board=[],this.ships=[],this.hits=[],this.length=e;for(var o=0;o<e;o++)for(var i=0;i<e;i++)this.board.push(new E(i,o));if(void 0!==r)for(var a=0;a<r.length;a++){var c=new m(this,r[a].length);this.ships.push(c)}else for(var u=0;u<n;u++){var l=new m(this);this.ships.push(l)}}),[{key:"receiveAttack",value:function(t){if(t.isHit)return null;var e=t.ship;return e&&e.hit(),this.hits.push({x:t.x,y:t.y,shipHit:null!==t.ship}),t.isHit=!0,this.ships.every((function(t){return t.isSunk}))?this.hits:this.hits[this.hits.length-1]}},{key:"getCoordinate",value:function(t,e){var n=e*this.length+t;return this.board[n]}},{key:"getCoordinateFromCoordinateObj",value:function(t){return null!==t&&"object"===c(t)?this.getCoordinate(t.x,t.y):null}}])}(),w=l((function t(e,n){s(this,t),f(this,"playerType",void 0),f(this,"gameBoard",void 0),this.playerType=e,this.gameBoard=new b(10,5,n.gameBoard.ships)})),x=function(t){function e(){return s(this,e),r(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(e,t),l(e,[{key:"makeRandomMove",value:function(t){var e=d(0,10),n=d(0,10);return t.getCoordinate(e,n)}}])}(w),E=function(){return l((function t(e,n){s(this,t),f(this,"x",void 0),f(this,"y",void 0),f(this,"isHit",void 0),f(this,"ship",void 0),this.x=e,this.y=n,this.isHit=!1,this.ship=null}),[{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}}])}(),L=n(72),j=n.n(L),S=n(825),k=n.n(S),O=n(659),T=n.n(O),C=n(56),P=n.n(C),A=n(540),_=n.n(A),M=n(113),F=n.n(M),B=n(365),N={};N.styleTagTransform=F(),N.setAttributes=P(),N.insert=T().bind(null,"head"),N.domAPI=k(),N.insertStyleElement=_(),j()(B.A,N),B.A&&B.A.locals&&B.A.locals;const H=n.p+"c8a47c9fb68631f23803.svg",I=n.p+"0211bf17270b34df1dc3.svg";function z(){z=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new P(r||[]);return o(a,"_invoke",{value:k(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",v="completed",y={};function m(){}function g(){}function b(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(A([])));E&&E!==n&&r.call(E,a)&&(w=E);var L=b.prototype=m.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==G(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,n,r){var o=h;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=O(c,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var u=f(e,n,r);if("normal"===u.type){if(o=r.done?v:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(G(e)+" is not iterable")}return g.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},j(S.prototype),u(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(L),u(L,s,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function R(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function q(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){R(i,r,o,a,c,"next",t)}function c(t){R(i,r,o,a,c,"throw",t)}a(void 0)}))}}function Y(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return $(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,J(r.key),r)}}function X(t,e,n){return e&&U(t.prototype,e),n&&U(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function D(t,e,n){return(e=J(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J(t){var e=function(t,e){if("object"!=G(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==G(e)?e:e+""}var W,K=document.querySelector(".first-player"),Q=document.querySelector(".second-player"),V=document.querySelector(".reset"),Z=document.querySelector(".start"),tt=document.querySelector(".text"),et=[],nt=!1,rt=X((function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,"player",void 0),D(this,"boardToElement",void 0),D(this,"elementToBoard",void 0),D(this,"container",void 0),this.player=e,this.boardToElement=new Map,this.elementToBoard=new Map,this.container=n}));function ot(t){t.container.innerHTML="",t.boardToElement=new Map,t.elementToBoard=new Map;var e,n=t.player.gameBoard,r=Y(n.board);try{var o=function(){var r=e.value,o=document.createElement("div"),i=r.ship;if(i&&"Human"===t.player.playerType){var a=document.createElement("div");a.classList.add("ship"),a.addEventListener("mouseenter",(function(e){it(e.target,i,n,t)})),a.addEventListener("mouseout",(function(e){it(e.target,i,n,t)})),a.addEventListener("mousedown",(function(e){!function(t,e,n,r){if(!nt){var o,i=[],a=t.pageX,c=t.pageY,s=!1,u=Y(e.coordinates);try{for(u.s();!(o=u.n()).done;){var l=o.value;i.push(r.boardToElement.get(l).firstElementChild)}}catch(t){u.e(t)}finally{u.f()}for(var f=function(){var o=p[h];function i(t,e){var n=t-a,r=e-c;o.style.transform="translate(".concat(n,"px,").concat(r,"px)")}function u(t){i(t.pageX,t.pageY)}i(t.pageX,t.pageY),document.addEventListener("mousemove",u),document.addEventListener("mouseup",(function t(i){if(!s){o.style.pointerEvents="none";var a=o.getBoundingClientRect(),c=document.elementFromPoint(a.left+40,a.top+40);if(c.classList.contains("board-element")&&c.parentElement.classList.contains("first-player")){var l=r.elementToBoard.get(c);e.set(n,l,e.direction)}ot(r),s=!0}document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",t)}))},h=0,p=i;h<p.length;h++)f()}}(e,i,n,t)})),o.appendChild(a)}o.addEventListener("click",(function(e){ct(e.target,n,r,t)})),o.classList.add("board-element"),t.container.appendChild(o),t.boardToElement.set(r,o),t.elementToBoard.set(o,r)};for(r.s();!(e=r.n()).done;)o()}catch(t){r.e(t)}finally{r.f()}}function it(t,e,n,r){var o,i=Y(e.coordinates);try{for(i.s();!(o=i.n()).done;){var a=o.value;r.boardToElement.get(n.getCoordinateFromCoordinateObj(a)).firstElementChild.classList.toggle("hover")}}catch(t){i.e(t)}finally{i.f()}}function at(){return(at=q(z().mark((function t(){return z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z.classList.remove("hidden"),tt.classList.add("hidden"),V.classList.add("hidden"),K.style.pointerEvents="auto",K.classList.remove("turn"),Q.classList.remove("turn"),et=[],t.next=9,lt();case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ct(t,e,n,r){if(!nt)return!1;if(null==t)return!1;if(null!==t.firstElementChild&&t.firstElementChild.classList.contains("ship")&&(t=t.firstElementChild),r===W)return!1;var o=e.receiveAttack(n);if(o){t.classList.add("hit");var i=document.createElement("img");return i.src=o.shipHit?H:I,void 0!==o.length?(i.src=H,tt.textContent=W.player.playerType+" won!",K.classList.add("turn"),Q.classList.add("turn"),tt.classList.remove("hidden"),V.classList.remove("hidden"),nt=!1,W=null,t.appendChild(i),!0):(t.appendChild(i),o.shipHit||st(W,W===et[0]?et[1]:et[0]),!0)}return!1}function st(t,e){null!==t&&t.container.classList.toggle("turn"),e.container.classList.toggle("turn"),W=e,"Computer"===e.player.playerType&&function(t){ut.apply(this,arguments)}(e)}function ut(){return(ut=q(z().mark((function t(e){var n,r,o,i,a,c,s;return z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=et[0].player.gameBoard,r=et[0];case 2:if(W!==e){t.next=22;break}if(o=e.player.makeRandomMove(n),i=r.boardToElement.get(o),a=ct(i,n,o,r),c=Math.random()<.5?"h":"v",s=Math.random()<.5?1:-1,!a||W!==e){t.next=20;break}return t.next=11,ht(250);case 11:if(W!==e||!a){t.next=20;break}if(o="h"===c?n.getCoordinateFromCoordinateObj(new E(o.x+1*s,o.y)):n.getCoordinateFromCoordinateObj(new E(o.x,o.y+1*s)),i=r.boardToElement.get(o),a=ct(i,n,o,r),W!==e){t.next=18;break}return t.next=18,ht(250);case 18:t.next=11;break;case 20:t.next=2;break;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function lt(){return ft.apply(this,arguments)}function ft(){return(ft=q(z().mark((function t(){var e,n,r,o;return z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=new w("Human"),n=new rt(e,K),r=new x("Computer",e),o=new rt(r,Q),ot(n),ot(o),et.push(n),et.push(o);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ht(t){return new Promise((function(e){return setTimeout(e,t)}))}V.addEventListener("click",(function(){return function(){return at.apply(this,arguments)}()})),Z.addEventListener("click",(function(){return nt=!0,t=et[0],e=et[1],Math.random()<.5?st(null,t):st(null,e),Z.classList.add("hidden"),void(K.style.pointerEvents="none");var t,e})),lt()})();