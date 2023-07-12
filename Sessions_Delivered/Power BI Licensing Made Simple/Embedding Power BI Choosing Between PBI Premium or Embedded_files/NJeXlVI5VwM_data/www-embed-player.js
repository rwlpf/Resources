var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ja(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||la});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=na(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;qa=ta.a;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=pa;
function w(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.wa=b.prototype}
function va(){this.U=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.A=this.j=null}
function wa(a){if(a.U)throw new TypeError("Generator is already running");a.U=!0}
va.prototype.ja=function(a){this.i=a};
function xa(a,b){a.j={exception:b,qd:!0};a.h=a.s||a.m}
va.prototype.return=function(a){this.j={return:a};this.h=this.m};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.v=function(a){this.h=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function za(a,b){a.h=b;a.s=0}
function Aa(a){a.s=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){a.A=[a.j];a.s=0;a.m=0}
function Ca(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.qd?a.h=a.s||a.m:void 0!=b.v&&a.m<b.v?(a.h=b.v,a.j=null):a.h=a.m:a.h=0}
function Da(a){this.h=new va;this.i=a}
function Ea(a,b){wa(a.h);var c=a.h.l;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.U=!1,e;var f=e.value}catch(g){return a.h.l=null,xa(a.h,g),Ha(a)}a.h.l=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.U=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.U=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.qd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){wa(a.h);a.h.l?b=Fa(a,a.h.l.next,b,a.h.ja):(a.h.ja(b),b=Ha(a));return b};
this.throw=function(b){wa(a.h);a.h.l?b=Fa(a,a.h.l["throw"],b,a.h.ja):(xa(a.h,b),b=Ha(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ja(new Ia(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return oa});
u("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.U=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.X),reject:g(this.m)}};
b.prototype.X=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.W(g):this.s(g)}};
b.prototype.W=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ka(h,g):this.s(g)};
b.prototype.m=function(g){this.ja(2,g)};
b.prototype.s=function(g){this.ja(1,g)};
b.prototype.ja=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.aa();this.A()};
b.prototype.aa=function(){var g=this;e(function(){if(g.P()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.P=function(){if(this.U)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.ac(h.resolve,h.reject)};
b.prototype.ka=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.ac(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ac=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.U=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).ac(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(y){t[x]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).ac(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ka(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&ka(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.setPrototypeOf",function(a){return a||ua});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||ea});
var Ma=Ma||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.wa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ib(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a){for(var b in a)return!1;return!0}
function ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=sb(a[c]);return b}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){if(void 0===vb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){C.console&&C.console.error(c.message)}vb=a}else vb=a}return vb}
;function xb(a,b){this.j=a===yb&&b||""}
xb.prototype.i=!0;xb.prototype.h=function(){return this.j};
function zb(a){return new xb(yb,a)}
var yb={};zb("");var Ab={};function Bb(a){this.j=a;this.i=!0}
Bb.prototype.toString=function(){return this.j.toString()};
Bb.prototype.h=function(){return this.j.toString()};function Cb(a){this.j=a}
Cb.prototype.toString=function(){return this.j+""};
Cb.prototype.i=!0;Cb.prototype.h=function(){return this.j.toString()};
function Db(a){if(a instanceof Cb&&a.constructor===Cb)return a.j;Na(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Fb(a){var b=wb();a=b?b.createScriptURL(a):a;return new Cb(a,Eb)}
;var Gb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Hb(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())}
function Ib(a,b){return a<b?-1:a>b?1:0}
;function Jb(a){this.j=a}
Jb.prototype.toString=function(){return this.j.toString()};
Jb.prototype.i=!0;Jb.prototype.h=function(){return this.j.toString()};
function Kb(a){if(a instanceof Jb&&a.constructor===Jb)return a.j;Na(a);return"type_error:SafeUrl"}
var Lb;try{new URL("s://g"),Lb=!0}catch(a){Lb=!1}var Mb=Lb;function Nb(a){if(a instanceof Jb)return a;a="object"==typeof a&&a.i?a.h():String(a);a:{var b=a;if(Mb){try{var c=new URL(b)}catch(d){b="https:";break a}b=c.protocol}else b:{c=document.createElement("a");try{c.href=b}catch(d){b=void 0;break b}b=c.protocol;b=":"===b||""===b?"https:":b}}"javascript:"!==b||(a="about:invalid#zClosurez");return new Jb(a,Ob)}
var Ob={},Pb=new Jb("about:invalid#zClosurez",Ob);var Qb,Rb=E("CLOSURE_FLAGS"),Sb=Rb&&Rb[610401301];Qb=null!=Sb?Sb:!1;function Tb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Ub,Vb=C.navigator;Ub=Vb?Vb.userAgentData||null:null;function Wb(a){return Qb?Ub?Ub.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Tb().indexOf(a)}
;function Xb(){return Qb?!!Ub&&0<Ub.brands.length:!1}
function Yb(){return Xb()?!1:F("Opera")}
function Zb(){return Xb()?!1:F("Trident")||F("MSIE")}
function $b(){return Xb()?!1:F("Edge")}
function ac(){return Xb()?Wb("Microsoft Edge"):F("Edg/")}
function bc(){return F("Firefox")||F("FxiOS")}
function cc(){return F("Safari")&&!(dc()||(Xb()?0:F("Coast"))||Yb()||$b()||ac()||(Xb()?Wb("Opera"):F("OPR"))||bc()||F("Silk")||F("Android"))}
function dc(){return Xb()?Wb("Chromium"):(F("Chrome")||F("CriOS"))&&!$b()||F("Silk")}
function ec(){return F("Android")&&!(dc()||bc()||Yb()||F("Silk"))}
function fc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function hc(a){var b=Tb();if("Internet Explorer"===a){if(Zb())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=fc(c);
switch(a){case "Opera":if(Yb())return b(["Version","Opera"]);if(Xb()?Wb("Opera"):F("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if($b())return b(["Edge"]);if(ac())return b(["Edg"]);break;case "Chromium":if(dc())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&bc()||"Safari"===a&&cc()||"Android Browser"===a&&ec()||"Silk"===a&&F("Silk")?(b=c[2])&&b[1]||"":""}
function ic(a){if(Xb()&&"Silk"!==a){var b=Ub.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=hc(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])}
;function jc(a){this.j=a;this.i=!0}
jc.prototype.h=function(){return this.j.toString()};
jc.prototype.toString=function(){return this.j.toString()};function kc(a,b){b=b instanceof Jb?b:Nb(b);a.href=Kb(b)}
function lc(a,b){a.rel="stylesheet";Hb("stylesheet","stylesheet")?(a.href=Db(b).toString(),(b=mc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)):a.href=b instanceof Cb?Db(b).toString():b instanceof Jb?Kb(b):Kb(Nb(b))}
function nc(){return mc("script[nonce]")}
var oc=/^[\w+/_-]+[=]{0,2}$/;function mc(a,b){b=(b||C).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&oc.test(a)?a:"":""}
;function pc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var qc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rc(a){return a?decodeURI(a):a}
function sc(a,b){return b.match(qc)[a]||null}
function tc(a){return rc(sc(3,a))}
function uc(a){var b=a.match(qc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function vc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function wc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function xc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)xc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function yc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)xc(a[b],a[b+1],c);return c.join("&")}
function zc(a){var b=[],c;for(c in a)xc(c,a[c],b);return b.join("&")}
function Ac(a,b){var c=2==arguments.length?yc(arguments[1],0):yc(arguments,1);return wc(a,c)}
function Bc(a,b){b=zc(b);return wc(a,b)}
function Cc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return wc(a,b+c)}
function Dc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Ec=/#|$/,Fc=/[?&]($|#)/;function Gc(a,b){for(var c=a.search(Ec),d=0,e,f=[];0<=(e=Dc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Fc,"$1")}
;function Hc(a){this.ed=a}
;function Ic(a,b,c){this.i=a;this.l=b;this.h=c||[];this.sb=new Map}
m=Ic.prototype;m.Sd=function(a){var b=B.apply(1,arguments),c=this.Bc(b);c?c.push(new Hc(a)):this.Dd(a,b)};
m.Dd=function(a){var b=this.ld(B.apply(1,arguments));this.sb.set(b,[new Hc(a)])};
m.Bc=function(){var a=this.ld(B.apply(0,arguments));return this.sb.has(a)?this.sb.get(a):void 0};
m.ke=function(){var a=this.Bc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.sb.clear()};
m.ld=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Jc(a,b){Ic.call(this,a,3,b)}
w(Jc,Ic);Jc.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.ke(b);d&&(c=d.ed);this.Dd(c+a,b)};function Kc(a,b){Ic.call(this,a,2,b)}
w(Kc,Ic);Kc.prototype.record=function(a){this.Sd(a,B.apply(1,arguments))};function Lc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Mc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?Mc.apply(null,d):Lc(d)}}
;function G(){this.ja=this.ja;this.U=this.U}
G.prototype.ja=!1;G.prototype.h=function(){return this.ja};
G.prototype.dispose=function(){this.ja||(this.ja=!0,this.M())};
function Nc(a,b){Oc(a,Wa(Lc,b))}
function Oc(a,b){a.ja?b():(a.U||(a.U=[]),a.U.push(b))}
G.prototype.M=function(){if(this.U)for(;this.U.length;)this.U.shift()()};function Pc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Pc.prototype.stopPropagation=function(){this.j=!0};
Pc.prototype.preventDefault=function(){this.defaultPrevented=!0};function Qc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Rc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Sc[c])c=Sc[c];else{c=String(c);if(!Sc[c]){var f=/function\s+([^\(]+)/m.exec(c);Sc[c]=f?f[1]:"[Anonymous]"}c=Sc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Rc(a,b){b||(b={});b[Tc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Tc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Rc(a,b));return c}
function Tc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Sc={};var Uc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Vc(){return Qb?!!Ub&&!!Ub.platform:!1}
function Wc(){return Vc()?"Android"===Ub.platform:F("Android")}
function Xc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
function Yc(){return Xc()||F("iPad")||F("iPod")}
function Zc(){return Vc()?"macOS"===Ub.platform:F("Macintosh")}
function $c(){return Vc()?"Windows"===Ub.platform:F("Windows")}
function ad(){return Vc()?"Chrome OS"===Ub.platform:F("CrOS")}
function bd(){var a=Tb(),b="";$c()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Yc()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):Zc()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):Hb(Tb(),"KaiOS")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):Wc()?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):ad()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);a=0;b=Gb(String(b||"")).split(".");for(var c=
Gb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Ib(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Ib(0==f[2].length,0==g[2].length)||Ib(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function cd(a){cd[" "](a);return a}
cd[" "]=function(){};var dd=Yb(),ed=Zb(),fd=F("Edge"),gd=F("Gecko")&&!(Hb(Tb(),"WebKit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),hd=Hb(Tb(),"WebKit")&&!F("Edge");hd&&F("Mobile");Zc();$c();(Vc()?"Linux"===Ub.platform:F("Linux"))||ad();var id=C.navigator||null;id&&(id.appVersion||"").indexOf("X11");var jd=Wc();Xc();F("iPad");F("iPod");Yc();Hb(Tb(),"KaiOS");function kd(){var a=C.document;return a?a.documentMode:void 0}
var ld;a:{var md="",nd=function(){var a=Tb();if(gd)return/rv:([^\);]+)(\)|;)/.exec(a);if(fd)return/Edge\/([\d\.]+)/.exec(a);if(ed)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hd)return/WebKit\/(\S+)/.exec(a);if(dd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nd&&(md=nd?nd[1]:"");if(ed){var od=kd();if(null!=od&&od>parseFloat(md)){ld=String(od);break a}}ld=md}var pd=ld,qd;if(C.document&&ed){var rd=kd();qd=rd?rd:parseInt(pd,10)||void 0}else qd=void 0;var sd=qd;function td(a,b){Pc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(td,Pc);var ud={2:"touch",3:"pen",4:"mouse"};
td.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(gd){a:{try{cd(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ud[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&td.wa.preventDefault.call(this)};
td.prototype.stopPropagation=function(){td.wa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
td.prototype.preventDefault=function(){td.wa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vd="closure_listenable_"+(1E6*Math.random()|0);var wd=0;function xd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.fc=e;this.key=++wd;this.Rb=this.Zb=!1}
function yd(a){a.Rb=!0;a.listener=null;a.proxy=null;a.src=null;a.fc=null}
;function zd(a){this.src=a;this.listeners={};this.h=0}
zd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ad(a,b,d,e);-1<g?(b=a[g],c||(b.Zb=!1)):(b=new xd(b,this.src,f,!!d,e),b.Zb=c,a.push(b));return b};
zd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ad(e,b,c,d);return-1<b?(yd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Bd(a,b){var c=b.type;c in a.listeners&&ib(a.listeners[c],b)&&(yd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Ad(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Rb&&f.listener==b&&f.capture==!!c&&f.fc==d)return e}return-1}
;var Cd="closure_lm_"+(1E6*Math.random()|0),Dd={},Ed=0;function Fd(a,b,c,d,e){if(d&&d.once)Gd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Fd(a,b[f],c,d,e);else c=Hd(c),a&&a[vd]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):Id(a,b,c,!1,d,e)}
function Id(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=Jd(a);h||(a[Cd]=h=new zd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Kd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Uc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ld(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ed++}}
function Kd(){function a(c){return b.call(a.src,a.listener,c)}
var b=Md;return a}
function Gd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Gd(a,b[f],c,d,e);else c=Hd(c),a&&a[vd]?a.l.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):Id(a,b,c,!0,d,e)}
function Nd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Nd(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=Hd(c),a&&a[vd])?a.l.remove(String(b),c,d,e):a&&(a=Jd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ad(b,c,d,e)),(c=-1<a?b[a]:null)&&Od(c))}
function Od(a){if("number"!==typeof a&&a&&!a.Rb){var b=a.src;if(b&&b[vd])Bd(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ld(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ed--;(c=Jd(b))?(Bd(c,a),0==c.h&&(c.src=null,b[Cd]=null)):yd(a)}}}
function Ld(a){return a in Dd?Dd[a]:Dd[a]="on"+a}
function Md(a,b){if(a.Rb)a=!0;else{b=new td(b,this);var c=a.listener,d=a.fc||a.src;a.Zb&&Od(a);a=c.call(d,b)}return a}
function Jd(a){a=a[Cd];return a instanceof zd?a:null}
var Pd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Hd(a){if("function"===typeof a)return a;a[Pd]||(a[Pd]=function(b){return a.handleEvent(b)});
return a[Pd]}
;function Qd(){G.call(this);this.l=new zd(this);this.Kb=this;this.Qa=null}
Xa(Qd,G);Qd.prototype[vd]=!0;m=Qd.prototype;m.addEventListener=function(a,b,c,d){Fd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){Nd(this,a,b,c,d)};
function Rd(a,b){var c=a.Qa;if(c){var d=[];for(var e=1;c;c=c.Qa)d.push(c),++e}a=a.Kb;c=b.type||b;"string"===typeof b?b=new Pc(b,a):b instanceof Pc?b.target=b.target||a:(e=b,b=new Pc(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Sd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Sd(g,c,!0,b)&&e,b.j||(e=Sd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Sd(g,c,!1,b)&&e}
m.M=function(){Qd.wa.M.call(this);this.removeAllListeners();this.Qa=null};
m.listen=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.l){var b=this.l;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,yd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Sd(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Rb&&g.capture==c){var h=g.listener,k=g.fc||g.src;g.Zb&&Bd(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Td(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Td.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ud(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Vd(a,b){return a+Math.random()*(b-a)}
;function Wd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Wd.prototype;m.clone=function(){return new Wd(this.x,this.y)};
m.equals=function(a){return a instanceof Wd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Xd(a,b){this.width=a;this.height=b}
m=Xd.prototype;m.clone=function(){return new Xd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Yd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Zd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function $d(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var ae;function be(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Zd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Zb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.dd;c.dd=null;e()}};
return function(e){d.next={dd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function ce(a){C.setTimeout(function(){throw a;},0)}
;function de(){this.i=this.h=null}
de.prototype.add=function(a,b){var c=ee.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
de.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ee=new Td(function(){return new fe},function(a){return a.reset()});
function fe(){this.next=this.scope=this.fn=null}
fe.prototype.set=function(a,b){this.fn=a;this.scope=b;this.next=null};
fe.prototype.reset=function(){this.next=this.scope=this.fn=null};var ge,he=!1,ie=new de;function je(a,b){ge||ke();he||(ge(),he=!0);ie.add(a,b)}
function ke(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);ge=function(){a.then(le)}}else ge=function(){var b=le;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&!$b()&&C.Window.prototype.setImmediate==C.setImmediate?(ae||(ae=be()),ae(b)):C.setImmediate(b)}}
function le(){for(var a;a=ie.remove();){try{a.fn.call(a.scope)}catch(b){ce(b)}Ud(ee,a)}he=!1}
;function me(a){this.h=0;this.U=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){ne(b,2,c)},function(c){ne(b,3,c)})}catch(c){ne(this,3,c)}}
function oe(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
oe.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var pe=new Td(function(){return new oe},function(a){a.reset()});
function qe(a,b,c){var d=pe.get();d.i=a;d.h=b;d.context=c;return d}
function re(a){if(a instanceof me)return a;var b=new me(ab);ne(b,2,a);return b}
function se(a){return new me(function(b,c){c(a)})}
function te(a,b,c){ue(a,b,c,null)||je(Wa(b,a))}
function ve(a){return new me(function(b){var c=a.length,d=[];if(c)for(var e=function(h,k,l){c--;d[h]=k?{fulfilled:!0,value:l}:{fulfilled:!1,reason:l};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],te(g,Wa(e,f,!0),Wa(e,f,!1));
else b(d)})}
me.prototype.then=function(a,b,c){return we(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
me.prototype.$goog_Thenable=!0;m=me.prototype;m.qc=function(a,b){return we(this,null,a,b)};
m.catch=me.prototype.qc;m.cancel=function(a){if(0==this.h){var b=new xe(a);je(function(){ye(this,b)},this)}};
function ye(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ye(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ze(c),Ae(c,e,3,b)))}a.j=null}else ne(a,3,b)}
function Be(a,b){a.i||2!=a.h&&3!=a.h||Ce(a);a.l?a.l.next=b:a.i=b;a.l=b}
function we(a,b,c,d){var e=qe(null,null,null);e.child=new me(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof xe?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Be(a,e);return e.child}
m.af=function(a){this.h=0;ne(this,2,a)};
m.bf=function(a){this.h=0;ne(this,3,a)};
function ne(a,b,c){0==a.h&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.h=1,ue(c,a.af,a.bf,a)||(a.U=c,a.h=b,a.j=null,Ce(a),3!=b||c instanceof xe||De(a,c)))}
function ue(a,b,c,d){if(a instanceof me)return Be(a,qe(b||ab,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Pa(a))try{var f=a.then;if("function"===typeof f)return Ee(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Ee(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ce(a){a.s||(a.s=!0,je(a.de,a))}
function ze(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.de=function(){for(var a;a=ze(this);)Ae(this,a,this.h,this.U);this.s=!1};
function Ae(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,Fe(b,c,d);else try{b.j?b.i.call(b.context):Fe(b,c,d)}catch(e){Ge.call(null,e)}Ud(pe,b)}
function Fe(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function De(a,b){a.m=!0;je(function(){a.m&&Ge.call(null,b)})}
var Ge=ce;function xe(a){Za.call(this,a)}
Xa(xe,Za);xe.prototype.name="cancel";function He(a,b){Qd.call(this);this.j=a||1;this.i=b||C;this.m=Va(this.Ze,this);this.s=Date.now()}
Xa(He,Qd);m=He.prototype;m.enabled=!1;m.Ca=null;m.setInterval=function(a){this.j=a;this.Ca&&this.enabled?(this.stop(),this.start()):this.Ca&&this.stop()};
m.Ze=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.Ca=this.i.setTimeout(this.m,this.j-a):(this.Ca&&(this.i.clearTimeout(this.Ca),this.Ca=null),Rd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ca||(this.Ca=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
m.stop=function(){this.enabled=!1;this.Ca&&(this.i.clearTimeout(this.Ca),this.Ca=null)};
m.M=function(){He.wa.M.call(this);this.stop();delete this.i};
function Ie(a,b,c){if("function"===typeof a)c&&(a=Va(a,c));else if(a&&"function"==typeof a.handleEvent)a=Va(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function Je(a){G.call(this);this.P=a;this.j=new Map;this.A=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.i=new He(this.flushInterval);this.i.listen("tick",this.qb,!1,this);Nc(this,this.i);this.s=!1}
w(Je,G);m=Je.prototype;m.sendIsolatedPayload=function(a){this.s=a;this.m=1};
function Ke(a){a.i.enabled||a.i.start();a.l++;a.l>=a.m&&a.qb()}
m.qb=function(){var a=this.j.values();a=[].concat(ja(a)).filter(function(b){return b.sb.size});
a.length&&this.P.flush(a,this.s);Le(a);this.l=0;this.i.enabled&&this.i.stop()};
m.Yc=function(a){var b=B.apply(1,arguments);this.j.has(a)||this.j.set(a,new Jc(a,b))};
m.Zc=function(a){var b=B.apply(1,arguments);this.j.has(a)||this.j.set(a,new Kc(a,b))};
function Me(a,b){return a.A.has(b)?void 0:a.j.get(b)}
m.sc=function(a){this.Pd.apply(this,[a,1].concat(ja(B.apply(1,arguments))))};
m.Pd=function(a,b){var c=B.apply(2,arguments),d=Me(this,a);d&&d instanceof Jc&&(d.j(b,c),Ke(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=Me(this,a);d&&d instanceof Kc&&(d.record(b,c),Ke(this))};
function Le(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ne(a){this.h=a;this.h.Yc("/client_streamz/bg/fiec",{vb:3,ub:"rk"},{vb:2,ub:"ec"},{vb:3,ub:"em"})}
function Oe(a,b,c,d){a.h.sc("/client_streamz/bg/fiec",b,c,d)}
function Pe(a){this.h=a;this.h.Zc("/client_streamz/bg/fil",{vb:3,ub:"rk"})}
Pe.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function Qe(a){this.h=a;this.h.Yc("/client_streamz/bg/fsc",{vb:3,ub:"rk"})}
function Re(a){this.h=a;this.h.Zc("/client_streamz/bg/fsl",{vb:3,ub:"rk"})}
Re.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var Se={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Te(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Ue(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Ve(a,h),d+=Ve(a,h+4),e+=Ve(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Se.toString(e)}
function Ue(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Ve(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;bc();var We=Xc()||F("iPod"),Xe=F("iPad");ec();dc();var Ye=cc()&&!Yc();var Ze={},$e=null;function af(a,b){Oa(a);void 0===b&&(b=0);bf();b=Ze[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function cf(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;df(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function df(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=$e[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
bf();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function bf(){if(!$e){$e={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ze[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===$e[f]&&($e[f]=e)}}}}
;var ef="undefined"!==typeof Uint8Array,ff=!ed&&"function"===typeof btoa;function gf(a){if(!ff)return af(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var hf=/[-_.]/g,jf={"-":"+",_:"/",".":"="};function kf(a){return jf[a]||""}
function lf(a){return ef&&null!=a&&a instanceof Uint8Array}
var mf={};var nf;function of(a){if(a!==mf)throw Error("illegal external caller");}
function pf(a,b){of(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
pf.prototype.isEmpty=function(){return null==this.h};
pf.prototype.sizeBytes=function(){of(mf);var a=this.h;if(null!=a&&!lf(a))if("string"===typeof a)if(ff){hf.test(a)&&(a=a.replace(hf,kf));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=cf(a);else Na(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function qf(a){return Array.prototype.slice.call(a)}
;var rf="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ja(Object.values({Cf:1,Bf:2,Af:4,Ef:8,Df:16,sf:32,Ff:64,yf:128,xf:256,zf:512})));var sf=rf?function(a,b){a[rf]|=b}:function(a,b){void 0!==a.Aa?a.Aa|=b:Object.defineProperties(a,{Aa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function tf(a){var b=uf(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=qf(a)),vf(a,b|1));return a}
var wf=rf?function(a,b){a[rf]&=~b}:function(a,b){void 0!==a.Aa&&(a.Aa&=~b)},uf=rf?function(a){return a[rf]|0}:function(a){return a.Aa|0},xf=rf?function(a){return a[rf]}:function(a){return a.Aa},vf=rf?function(a,b){a[rf]=b}:function(a,b){void 0!==a.Aa?a.Aa=b:Object.defineProperties(a,{Aa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function yf(a,b){Object.isFrozen(a)&&(a=qf(a));vf(a,b);return a}
function zf(a){sf(a,1);return a}
function Af(a,b){vf(b,(a|0)&-51)}
function Bf(a,b){vf(b,(a|18)&-41)}
function Cf(a){a=a>>10&1023;return 0===a?536870912:a}
;var Df={};function Ef(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Ff,Gf,Hf=[];vf(Hf,23);Gf=Object.freeze(Hf);function If(a){if(a&2)throw Error();}
;function Jf(a){return a.displayName||a.name||"unknown type name"}
function Kf(a){if(null!=a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Na(a)+": "+a);a=!!a}return a}
function Lf(a){Na(a);return a}
function Mf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Nf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Jf(b)+" but got "+(a&&Jf(a.constructor)));}
function Of(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Lc===Df)return a;if(d){var e=d=uf(a);0===e&&(e|=c&16);e|=c&2;e!==d&&vf(a,e);return new b(a)}}
;function Pf(a,b){a=a.B;return Qf(a,xf(a),b)}
function Qf(a,b,c,d){if(-1===c)return null;if(c>=Cf(b)){if(b&128)return a[a.length-1][c]}else{var e=a.length;if(d&&b&128&&(d=a[e-1][c],null!=d))return d;b=c+((b>>8&1)-1);if(b<e)return a[b]}}
function K(a,b,c,d){var e=a.B,f=xf(e);If(f);Rf(e,f,b,c,d);return a}
function Rf(a,b,c,d,e){Ef(d);var f=Cf(b);if(c>=f||e){e=b;if(b&128)f=a[a.length-1];else{if(null==d)return;f=a[f+((b>>8&1)-1)]={};e|=128}f[c]=d;e&=-513;e!==b&&vf(a,e)}else a[c+((b>>8&1)-1)]=d,b&128&&(d=a[a.length-1],c in d&&delete d[c]),b&512&&vf(a,b&-513)}
function Sf(a){return void 0!==Tf(a,Uf,11,!1)}
function Vf(a,b,c,d){a=a.B;var e=xf(a);If(e);for(var f=0,g=0;g<c.length;g++){var h=c[g];null!=Qf(a,e,h)&&(0!==f&&Rf(a,e,f),f=h)}(c=f)&&c!==b&&null!=d&&Rf(a,e,c);Rf(a,e,b,d)}
function Tf(a,b,c,d){a=a.B;var e=xf(a),f=Qf(a,e,c,d);b=Of(f,b,e);b!==f&&null!=b&&Rf(a,e,c,b,d);return b}
function Wf(a,b,c,d){d=void 0===d?!1:d;b=Tf(a,b,c,d);if(null==b)return b;a=a.B;var e=xf(a);if(!(e&2)){var f=Xf(b);f!==b&&(b=f,Rf(a,e,c,b,d))}return b}
function Yf(a,b,c,d){null!=d?Nf(d,b):d=void 0;return K(a,c,d)}
function Zf(a,b,c,d){var e=a.B,f=xf(e);If(f);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];Nf(k,b);g=g&&!(uf(k.B)&2)}b=uf(d);h=b|1;h=(g?h|8:h&-9)|4;h!=b&&(d=yf(d,h))}null==d&&(d=void 0);Rf(e,f,c,d);return a}
function $f(){var a=new ag;return K(a,1,1)}
;var bg;function cg(a,b){uf(b);bg=b;a=new a(b);bg=void 0;return a}
function dg(a,b,c){null==a&&(a=bg);bg=void 0;if(null==a){var d=48;c?(a=[c],d|=256):a=[];b&&(d=d&-1047553|(b&1023)<<10)}else{if(!Array.isArray(a))throw Error();d=uf(a);if(d&32)return a;d|=32;if(c&&(d|=256,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Ef(g)){d|=128;b=(d>>8&1)-1;e=f-b;1024<=e&&(eg(c,b,g),e=1023);d=d&-1047553|(e&1023)<<10;break a}}b&&(g=(d>>8&1)-1,b=Math.max(b,e-g),1024<b&&(eg(c,g,{}),d|=128,b=1023),d=d&-1047553|(b&1023)<<10)}}vf(a,d);return a}
function eg(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function fg(a,b){return gg(b)}
function gg(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(lf(a))return gf(a);if(a instanceof pf){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=gf(b)}}}return a}
;function hg(a,b,c){a=qf(a);var d=a.length,e=b&128?a[d-1]:void 0;d+=e?-1:0;for(b=b&256?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function ig(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&uf(a)&1?void 0:f&&uf(a)&2?a:jg(a,b,c,void 0!==d,e,f);else if(Ef(a)){var g={},h;for(h in a)g[h]=ig(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function jg(a,b,c,d,e,f){var g=d||c?uf(a):0;d=d?!!(g&16):void 0;a=qf(a);for(var h=0;h<a.length;h++)a[h]=ig(a[h],b,c,d,e,f);c&&c(g,a);return a}
function kg(a){return a.Lc===Df?a.toJSON():gg(a)}
;function lg(a,b,c){c=void 0===c?Bf:c;if(null!=a){if(ef&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=uf(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return vf(a,d|18),a;a=jg(a,lg,d&4?Bf:c,!0,!1,!0);b=uf(a);b&4&&b&2&&Object.freeze(a);return a}a.Lc===Df&&(b=a.B,c=xf(b),a=c&2?a:mg(a,b,c,!0));return a}}
function mg(a,b,c,d){var e=d||c&2?Bf:Af,f=!!(c&16);b=hg(b,c,function(g){return lg(g,f,e)});
sf(b,16|(d?2:0));return cg(a.constructor,b)}
function Xf(a){var b=a.B,c=xf(b);if(!(c&2))return a;b=mg(a,b,c,!1);b.h=a;sf(b.B,512);return b}
;function ng(a,b,c){this.B=dg(a,b,c)}
m=ng.prototype;m.toJSON=function(){if(Ff)var a=og(this,this.B,!1);else a=jg(this.B,kg,void 0,void 0,!1,!1),a=og(this,a,!0);return a};
m.serialize=function(){Ff=!0;try{return JSON.stringify(this.toJSON(),fg)}finally{Ff=!1}};
m.clone=function(){var a=this.B;return mg(this,a,xf(a),!1)};
m.Lc=Df;m.toString=function(){return og(this,this.B,!1).toString()};
function og(a,b,c){var d=a.constructor.Va,e=xf(c?a.B:b),f=Cf(e);e=!1;if(d){if(!c){b=qf(b);var g;if(b.length&&Ef(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=xf(a.B);a=Cf(f);f=(f>>8&1)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var n=g[k];null==n?g[k]=c?Gf:zf([]):c&&n!==Gf&&tf(n)}else h||(n=void 0,g.length&&Ef(n=g[g.length-1])?h=n:g.push(h={})),n=h[k],null==h[k]?h[k]=c?Gf:zf([]):c&&n!==Gf&&tf(n)}d=b.length;if(!d)return b;var p;
if(Ef(h=b[d-1])){a:{var t=h;g={};c=!1;for(var r in t)a=t[r],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[r]=a:c=!0;if(c){for(var x in g){t=g;break a}t=null}}t!=h&&(p=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var y=!0}if(!p&&!y)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);t&&b.push(t);return b}
;function pg(a){this.B=dg(a)}
w(pg,ng);var qg=[1,2,3];function rg(a){this.B=dg(a)}
w(rg,ng);var sg=[1,2,3];function tg(a){this.B=dg(a)}
w(tg,ng);tg.Va=[1];function ug(a){this.B=dg(a)}
w(ug,ng);ug.Va=[3,6,4];function vg(a){this.B=dg(a)}
w(vg,ng);vg.Va=[1];function wg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function xg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],z=e[3],H=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var I=z^x&(y^z);var L=1518500249}else I=x^y^z,L=1859775393;else 60>r?(I=x&y|z&(x|y),L=2400959708):(I=x^y^z,L=3395469782);I=((p<<5|p>>>27)&4294967295)+I+H+L+t[r]&4294967295;H=z;z=y;y=(x<<30|x>>>2)&4294967295;x=p;p=I}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],x=0,y=p.length;x<y;++x)r.push(p.charCodeAt(x));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var x=24;0<=x;x-=8)p[t++]=e[r]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Zd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function yg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,zg(wg(d),a,c||null)].join(" "):null}
function zg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Ag(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Ag(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ag(a){var b=xg();b.update(a);return b.Zd().toLowerCase()}
;var Bg={};function Cg(a){this.h=a||{cookie:""}}
m=Cg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{jc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Wf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.jc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Gb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{jc:0,path:b,domain:c});return d};
m.Ec=function(){return Dg(this).keys};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=Dg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Dg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Gb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Fg=new Cg("undefined"==typeof document?null:document);function Gg(a){return!!Bg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Hg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Gg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Cg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Gg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Ig(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Cg(document)).get(b));return a?yg(a,c,d):null}
function Jg(a,b){b=void 0===b?!1:b;var c=wg(String(C.location.href)),d=[];if(Hg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Cg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?yg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Gg(b)&&((b=Ig("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Ig("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Kg(a){this.B=dg(a)}
w(Kg,ng);Kg.Va=[2];function Lg(a){this.h=this.i=this.j=a}
Lg.prototype.reset=function(){this.h=this.i=this.j};
Lg.prototype.getValue=function(){return this.i};function Mg(){}
Mg.prototype.serialize=function(a){var b=[];Ng(this,a,b);return b.join("")};
function Ng(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ng(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Og(d,c),c.push(":"),Ng(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Og(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Pg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Qg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Og(a,b){b.push('"',a.replace(Qg,function(c){var d=Pg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Pg[c]=d);return d}),'"')}
;function Rg(){}
Rg.prototype.h=null;Rg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Sg(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Tg;function Ug(){}
Xa(Ug,Rg);function Vg(a){return(a=Sg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Sg(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Tg=new Ug;function Wg(a){Qd.call(this);this.headers=new Map;this.X=a||null;this.i=!1;this.W=this.H=null;this.m=this.ka="";this.j=this.da=this.A=this.aa=!1;this.s=0;this.P=null;this.Ha="";this.xa=this.ya=!1}
Xa(Wg,Qd);var Xg=/^https?$/i,Yg=["POST","PUT"],Zg=[];function $g(a,b,c,d,e,f,g){var h=new Wg;Zg.push(h);b&&h.listen("complete",b);h.l.add("ready",h.Yd,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.ya=g);h.send(a,c,d,e)}
m=Wg.prototype;m.Yd=function(){this.dispose();ib(Zg,this)};
m.send=function(a,b,c,d){if(this.H)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ka+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ka=a;this.m="";this.aa=!1;this.i=!0;this.H=this.X?Vg(this.X):Vg(Tg);this.W=this.X?this.X.getOptions():Tg.getOptions();this.H.onreadystatechange=Va(this.ud,this);try{this.getStatus(),this.da=!0,this.H.open(b,String(a),!0),this.da=!1}catch(g){this.getStatus();ah(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=cb(Yg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.H.setRequestHeader(d,c);this.Ha&&(this.H.responseType=this.Ha);"withCredentials"in this.H&&this.H.withCredentials!==this.ya&&(this.H.withCredentials=this.ya);try{bh(this),0<this.s&&(this.xa=ch(this.H),this.getStatus(),this.xa?(this.H.timeout=this.s,this.H.ontimeout=Va(this.Id,
this)):this.P=Ie(this.Id,this.s,this)),this.getStatus(),this.A=!0,this.H.send(a),this.A=!1}catch(g){this.getStatus(),ah(this,g)}};
function ch(a){return ed&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Id=function(){"undefined"!=typeof Ma&&this.H&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),Rd(this,"timeout"),this.abort(8))};
function ah(a,b){a.i=!1;a.H&&(a.j=!0,a.H.abort(),a.j=!1);a.m=b;dh(a);eh(a)}
function dh(a){a.aa||(a.aa=!0,Rd(a,"complete"),Rd(a,"error"))}
m.abort=function(){this.H&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.H.abort(),this.j=!1,Rd(this,"complete"),Rd(this,"abort"),eh(this))};
m.M=function(){this.H&&(this.i&&(this.i=!1,this.j=!0,this.H.abort(),this.j=!1),eh(this,!0));Wg.wa.M.call(this)};
m.ud=function(){this.h()||(this.da||this.A||this.j?fh(this):this.Ce())};
m.Ce=function(){fh(this)};
function fh(a){if(a.i&&"undefined"!=typeof Ma)if(a.W[1]&&4==gh(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==gh(a))Ie(a.ud,0,a);else if(Rd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(hh(a))Rd(a,"complete"),Rd(a,"success");else{try{var b=2<gh(a)?a.H.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";dh(a)}}finally{eh(a)}}}
function eh(a,b){if(a.H){bh(a);var c=a.H,d=a.W[0]?function(){}:null;
a.H=null;a.W=null;b||Rd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function bh(a){a.H&&a.xa&&(a.H.ontimeout=null);a.P&&(C.clearTimeout(a.P),a.P=null)}
m.isActive=function(){return!!this.H};
m.isComplete=function(){return 4==gh(this)};
function hh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=sc(1,String(a.ka)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Xg.test(a?a.toLowerCase():"");c=b}return c}
function gh(a){return a.H?a.H.readyState:0}
m.getStatus=function(){try{return 2<gh(this)?this.H.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function ih(a){this.B=dg(a)}
w(ih,ng);function jh(a){this.B=dg(a)}
w(jh,ng);jh.Va=[1];function Uf(a){this.B=dg(a)}
w(Uf,ng);var kh=["platform","platformVersion","architecture","model","uaFullVersion"];new jh;function ag(a){this.B=dg(a)}
w(ag,ng);function lh(a){this.B=dg(a,33)}
w(lh,ng);lh.Va=[3,20,27];function mh(a){this.B=dg(a,19)}
w(mh,ng);mh.Va=[3,5];function nh(a){this.B=dg(a,6)}
w(nh,ng);var oh=function(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);sf(b,16);b=cg(a,b)}return b}}(nh);
nh.Va=[5];function ph(a){this.B=dg(a)}
w(ph,ng);var qh;qh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=Wf;this.defaultValue=void 0}(175237375,{Of:0},ph);function rh(a){Qd.call(this);var b=this;this.componentId="";this.j=[];this.ya="";this.Ha=this.ka=-1;this.xa=!1;this.W=this.experimentIds=null;this.A=this.P=0;this.Wb=1;this.timeoutMillis=0;this.X=!1;Qd.call(this);this.logSource=a.logSource;this.wb=a.wb||function(){};
this.m=new sh(a.logSource,a.fb);this.Cb=a.Cb;this.network=a.network;this.bufferSize=1E3;this.uc=Wa(Vd,0,1);this.da=a.cf||null;this.sessionIndex=a.sessionIndex||null;this.Nb=a.Nb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.hd;this.fb=a.fb||!1;!this.fb&&(65<=ic("Chromium")||45<=ic("Firefox")||12<=ic("Safari")||Yc()&&bd());var c=$f();th(this.m,c);this.s=new Lg(1E4);this.i=new He(this.s.getValue());Nc(this,this.i);a=uh(this,a.Ud);Fd(this.i,"tick",a,!1,this);this.aa=new He(6E5);
Nc(this,this.aa);Fd(this.aa,"tick",a,!1,this);this.Nb||this.aa.start();this.fb||(Fd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.zc()}),Fd(document,"pagehide",this.zc,!1,this))}
w(rh,Qd);function uh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=rh.prototype;m.M=function(){this.zc();Qd.prototype.M.call(this)};
function vh(a){a.da||(a.da=.01>a.uc()?"http://web.archive.org/web/20230627204555/https://www.google.com/log?format=json&hasfast=true":"http://web.archive.org/web/20230627204555/https://play.google.com/log?format=json&hasfast=true");return a.da}
function wh(a,b){a.s=new Lg(1>b?1:b);a.i.setInterval(a.s.getValue())}
m.log=function(a){a=a.clone();var b=this.Wb++;a=K(a,21,b);this.componentId&&K(a,26,Mf(this.componentId));if(!Pf(a,1)){b=a;var c=Date.now().toString();K(b,1,c)}null==Pf(a,15)&&K(a,15,60*(new Date).getTimezoneOffset());this.experimentIds&&(b=this.experimentIds.clone(),Yf(a,Kg,16,b));for(;this.j.length>=this.bufferSize;)this.j.shift(),++this.P;this.j.push(a);Rd(this,new xh(a));this.Nb||this.i.enabled||this.i.start()};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.X)yh(this.m,3),zh(this);else{var d=Date.now();if(this.Ha>d&&this.ka<d)b&&b("throttled");else{yh(this.m,1);var e=Ah(this.m,this.j,this.P,this.A);d={};var f=this.wb();f&&(d.Authorization=f);var g=vh(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=Cc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=Cc(g,"pageId",this.pageId));if(f&&this.ya===f)b&&b("stale-auth-token");else{this.j=
[];this.i.enabled&&this.i.stop();this.P=0;var h=e.serialize(),k;this.W&&this.W.isSupported(h.length)&&(k=this.W.compress(h));var l={url:g,body:h,Wd:1,Pc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.s.reset();c.i.setInterval(c.s.getValue());if(r){var x=null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));x=oh(y)}catch(H){}if(x){r=Number;y="-1";y=void 0===y?"0":y;var z=Pf(x,1);r=r(null!=z?z:y);0<r&&(c.ka=Date.now(),c.Ha=c.ka+
r);x=qh.ctor?qh.i(x,qh.ctor,qh.h,!0):qh.i(x,qh.h,null,!0);if(r=null===x?void 0:x){x=-1;x=void 0===x?0:x;a:if(r=Pf(r,1),null!=r){switch(typeof r){case "string":r=+r;break a;case "number":break a}r=void 0}x=null!=r?r:x;-1!==x&&(c.xa||wh(c,x))}}}a&&a();c.A=0},p=function(r,x){var y=e.B,z=xf(y),H=!!(z&2);
var I=H?1:2,L=!!(z&2);var P=z&2;var J=Qf(y,z,3);Array.isArray(J)||(J=Gf);var V=uf(J);V&1||zf(J);P?V&2||sf(J,18):V&16&&!(V&2)&&wf(J,16);P=J;if(P!==Gf&&uf(P)&4)3===I||L||(L=Object.isFrozen(P),1===I?L||Object.freeze(P):(I=uf(P),J=I&-19,L&&(P=qf(P),I=0,Rf(y,z,3,P)),I!==J&&vf(P,J))),y=P;else{J=P;L=!!(z&2);var Z=!!(uf(J)&2);P=J;!L&&Z&&(J=qf(J));V=z|(Z?2:0);Z=Z||void 0;for(var ca=0,ra=0;ca<J.length;ca++){var ma=Of(J[ca],lh,V);void 0!==ma&&(Z=Z||xf(ma.B)&2,J[ra++]=ma)}ra<ca&&(J.length=ra);Z=!Z;V=uf(J);ca=
V|5;Z=Z?ca|8:ca&-9;V!=Z&&(J=yf(J,Z));P!==J&&Rf(y,z,3,J);(L&&2!==I||1===I)&&Object.freeze(J);y=J}if(!(H||uf(y)&8)){for(H=0;H<y.length;H++)z=y[H],I=Xf(z),z!==I&&(y[H]=I);sf(y,8)}H=c.s;H.h=Math.min(3E5,2*H.h);H.i=Math.min(3E5,H.h+Math.round(.2*(Math.random()-.5)*H.h));c.i.setInterval(c.s.getValue());401===r&&f&&(c.ya=f);void 0===x&&(x=c.isRetryable(r));x&&(c.j=y.concat(c.j),c.Nb||c.i.enabled||c.i.start());b&&b("net-send-failed",r);++c.A},t=function(){c.network?c.network.send(l,n,p):c.Cb&&c.Cb(l,n,p)};
k?k.then(function(r){l.Pc["Content-Encoding"]="gzip";l.Pc["Content-Type"]="application/binary";l.body=r;l.Wd=2;t()},function(){t()}):t()}}}};
m.zc=function(){Bh(this.m,!0);this.flush();Bh(this.m,!1)};
function zh(a){Ch(a,function(b,c){b=Cc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.X&&!d&&(a.X=!1);return d})}
function Ch(a,b){if(0!==a.j.length){var c=Gc(vh(a),"format");c=Ac(c,"auth",a.wb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Ah(a.m,e,a.P,a.A);if(!b(c,f)){++a.A;break}a.P=0;a.A=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function xh(){Pc.call(this,"event-logged",void 0)}
w(xh,Pc);function sh(a,b){this.fb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new mh;K(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));th(this,new ag)}
function th(a,b){Yf(a.h,ag,1,b);var c=Pf(b,1);(null==c?c:c)||K(b,1,1);a.fb||(b=Dh(a),c=Pf(b,5),(null==c||"string"===typeof c)&&c||K(b,5,Mf(a.locale)));a.uach&&(b=Dh(a),Wf(b,jh,9)||Yf(b,jh,9,a.uach))}
function yh(a,b){Sf(Wf(a.h,ag,1))&&(a=Eh(a),K(a,1,b))}
function Bh(a,b){Sf(Wf(a.h,ag,1))&&(a=Eh(a),K(a,2,Kf(b)))}
function Fh(a,b){var c=void 0===c?kh:c;b(window,c).then(function(d){a.uach=d;d=Dh(a);Yf(d,jh,9,a.uach);return!0}).catch(function(){return!1})}
function Dh(a){a=Wf(a.h,ag,1);var b=Wf(a,Uf,11);b||(b=new Uf,Yf(a,Uf,11,b));return b}
function Eh(a){a=Dh(a);var b=Wf(a,ih,10);b||(b=new ih,K(b,2,Kf(!1)),Yf(a,ih,10,b));return b}
function Ah(a,b,c,d){c=void 0===c?0:c;d=void 0===d?0:d;if(Sf(Wf(a.h,ag,1))){var e=Eh(a);K(e,3,Lf(d))}a=a.h.clone();d=Date.now().toString();a=K(a,4,d);b=Zf(a,lh,3,b);c&&K(b,14,c);return b}
;function Gh(a,b,c){$g(a.url,function(d){d=d.target;if(hh(d)){try{var e=d.H?d.H.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Pc,a.timeoutMillis,a.withCredentials)}
;function Hh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.j="http://web.archive.org/web/20230627204555/https://play.google.com/log?format=json&hasfast=true";this.l=!1;this.componentId="";this.Cb=Gh}
w(Hh,G);Hh.prototype.hd=function(){this.aa=!0;return this};function Ih(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;G.call(this);f?a=f:(a=new Hh(a,"0"),a.componentId=b,Nc(this,a),""!=c&&(a.j=c),d&&(a.l=!0),e&&(a.i=e),b=new rh({logSource:a.logSource,wb:a.wb?a.wb:Jg,sessionIndex:a.sessionIndex,Cb:a.Cb,cf:a.j,fb:a.l,Nb:!1,hd:a.aa,pageId:void 0,Ud:void 0,network:a.network?a.network:void 0}),Nc(a,b),a.A&&th(b.m,a.A),a.i&&(c=a.i,d=Dh(b.m),K(d,7,Mf(c))),a.s&&(b.W=a.s),a.componentId&&(b.componentId=a.componentId),
a.m&&((c=a.m)?(b.experimentIds||(b.experimentIds=new Kg),c=c.serialize(),K(b.experimentIds,4,Mf(c))):b.experimentIds&&K(b.experimentIds,4,void 0,!1)),a.W&&(e=a.W,b.experimentIds||(b.experimentIds=new Kg),c=b.experimentIds.B,d=xf(c),If(d),e=null==e?Gf:tf(e),Rf(c,d,2,e)),a.P&&(c=a.P,b.xa=!0,wh(b,c)),a.X&&Fh(b.m,a.X),a=b);this.i=a}
w(Ih,G);
Ih.prototype.flush=function(a){var b=a||[];if(b.length){a=new vg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new ug;g=K(g,1,Mf(f.i));for(var h=f,k=[],l=0;l<h.h.length;l++)k.push(h.h[l].ub);h=g.B;l=xf(h);If(l);if(null==k)Rf(h,l,3);else{var n=uf(k);if(!(n&4)){if(n&2||Object.isFrozen(k))k=qf(k);for(var p=0;p<k.length;p++){var t=k,r=p,x=k[p];if("string"!==typeof x)throw Error();t[r]=x}vf(k,n|5)}Rf(h,l,3,k)}k=[];h=[];l=v(f.sb.keys());for(n=l.next();!n.done;n=l.next())h.push(n.value.split(","));for(l=
0;l<h.length;l++){n=h[l];p=f.l;t=f.Bc(n)||[];r=[];for(x=0;x<t.length;x++){var y=t[x],z=y&&y.ed;y=new rg;switch(p){case 3:Vf(y,1,sg,Number(z));break;case 2:var H=y;z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof z+": "+z);Vf(H,2,sg,z)}r.push(y)}p=r;for(t=0;t<p.length;t++){r=p[t];x=new tg;r=Yf(x,rg,2,r);x=n;y=[];H=f;z=[];for(var I=0;I<H.h.length;I++)z.push(H.h[I].vb);H=z;for(z=0;z<H.length;z++){I=H[z];var L=x[z],P=
new pg;switch(I){case 3:Vf(P,1,qg,Mf(String(L)));break;case 2:Vf(P,2,qg,Lf(Number(L)));break;case 1:Vf(P,3,qg,Kf("true"==L))}y.push(P)}Zf(r,pg,1,y);k.push(r)}}Zf(g,tg,4,k);c.push(g);e.clear()}Zf(a,ug,1,c);b=this.i;a instanceof lh?b.log(a):(c=new lh,a=a.serialize(),a=K(c,8,Mf(a)),b.log(a));this.i.flush()}};function Jh(a){this.U=Kh();this.m=new Ih(1828);this.h=new Je(this.m);this.s=new Pe(this.h);this.j=new Qe(this.h);this.l=new Re(this.h);this.i=new Ne(this.h);this.Oa=Te(a)}
function Kh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Lh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Mh(a){function b(r,x){Promise.resolve().then(function(){var y;null!=(y=c.qa)&&y.s.record(Kh()-y.U,y.Oa);g.resolve({Td:r,Ve:x})})}
var c=this;this.i=!1;var d=a.program;var e=a.me;if(a.Fe){var f;this.qa=null!=(f=a.qa)?f:new Jh(e)}var g=new Lh;this.j=g.promise;if(!C[e]){var h;null!=(h=this.qa)&&Oe(h.i,h.Oa,1,"");var k;null!=(k=this.qa)&&k.h.qb()}else if(!C[e].a){var l;null!=(l=this.qa)&&Oe(l.i,l.Oa,2,"");var n;null!=(n=this.qa)&&n.h.qb()}try{this.l=v((0,C[e].a)(d,b,!0)).next().value,this.Ue=g.promise.then(function(){})}catch(r){var p;
null!=(p=this.qa)&&Oe(p.i,p.Oa,4,r.message);var t;null!=(t=this.qa)&&t.h.qb();throw r;}}
Mh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Kh(),d;null!=(d=this.qa)&&d.j.h.sc("/client_streamz/bg/fsc",d.Oa);return this.j.then(function(e){var f=e.Td;return new Promise(function(g){f(function(h){var k;null!=(k=b.qa)&&k.l.record(Kh()-c,k.Oa);g(h)},[a.gd,
a.We,a.ef])})})};
Mh.prototype.Fd=function(a){if(this.i)throw Error("Already disposed");var b=Kh(),c;null!=(c=this.qa)&&c.j.h.sc("/client_streamz/bg/fsc",c.Oa);a=this.l([a.gd,a.We,a.ef]);var d;null!=(d=this.qa)&&d.l.record(Kh()-b,d.Oa);return a};
Mh.prototype.dispose=function(){var a;null!=(a=this.qa)&&a.h.qb();this.i=!0;this.j.then(function(b){(b=b.Ve)&&b()})};
Mh.prototype.h=function(){return this.i};var Nh=window;zb("csi.gstatic.com");zb("googleads.g.doubleclick.net");zb("partner.googleadservices.com");zb("pubads.g.doubleclick.net");zb("securepubads.g.doubleclick.net");zb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Oh;try{new URL("s://g"),Oh=!0}catch(a){Oh=!1}var Ph=Oh;function Qh(a){if(a instanceof Jb)a=Kb(a);else{b:if(Ph){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;var Rh={};function Sh(){}
function Th(a){this.h=a}
w(Th,Sh);Th.prototype.toString=function(){return this.h};function Uh(a){var b="true".toString(),c=[new Th(Vh[0].toLowerCase(),Rh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Th)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Wh(){throw Error("unknown trace type");}
;function Xh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Yh(a,b){a.src=Db(b);Xh(a)}
;(function(){return""}).toString().indexOf("`");function Zh(a){this.ue=a}
function $h(a){return new Zh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ai=[$h("data"),$h("http"),$h("https"),$h("mailto"),$h("ftp"),new Zh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function bi(a){var b=ci;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function di(){var a=[];bi(function(b){a.push(b)});
return a}
var ci={ff:"allow-forms",gf:"allow-modals",hf:"allow-orientation-lock",jf:"allow-pointer-lock",kf:"allow-popups",lf:"allow-popups-to-escape-sandbox",mf:"allow-presentation",nf:"allow-same-origin",pf:"allow-scripts",qf:"allow-top-navigation",rf:"allow-top-navigation-by-user-activation"},ei=bb(function(){return di()});
function fi(){var a=gi(),b={};db(ei(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function gi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function hi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ii=(new Date).getTime();var ji="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ja(ji),["client_dev_set_cookie"]);"undefined"!==typeof TextDecoder&&new TextDecoder;var ki="undefined"!==typeof TextEncoder?new TextEncoder:null,li=ki?function(a){return ki.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function mi(a){Qd.call(this);var b=this;this.A=this.j=0;this.Ba=null!=a?a:{la:function(e,f){return setTimeout(e,f)},
Ea:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return A(function(e){return e.yield(ni(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||oi(this)}
w(mi,Qd);function pi(){var a=qi;mi.h||(mi.h=new mi(a));return mi.h}
mi.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Ba.Ea(this.A);delete mi.h};
mi.prototype.ra=function(){return this.i};
function oi(a){a.A=a.Ba.la(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(ni(a),3):c.yield(ni(a),3);oi(a);c.h=0})},3E4)}
function ni(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Ba.la(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.s=void 0;a.j&&(a.Ba.Ea(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Rd(a,"networkstatus-online"):Rd(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.v(3)}})})}
;function ri(){this.data_=[];this.h=-1}
ri.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
ri.prototype.get=function(a){return!!this.data_[a]};
function si(a){-1===a.h&&(a.h=gb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ti(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
ti.prototype[Symbol.iterator]=function(){return this};
ti.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function ui(a,b){return new ti(a,b)}
;function vi(){this.blockSize=-1}
;function wi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(wi,vi);wi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function xi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
wi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)xi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){xi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){xi(this,e);f=0;break}}this.i=f;this.l+=b}};
wi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;xi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function yi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function zi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ai(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:yi(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function Bi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ai(a,"inverted-hdpi")&&zi(a,Array.prototype.filter.call(a.classList?a.classList:yi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ci(){}
Ci.prototype.next=function(){return Di};
var Di={done:!0,value:void 0};function Ei(a){return{value:a,done:!1}}
Ci.prototype.Da=function(){return this};function Fi(a){if(a instanceof Gi||a instanceof Hi||a instanceof Ii)return a;if("function"==typeof a.next)return new Gi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Gi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Da)return new Gi(function(){return a.Da()});
throw Error("Not an iterator or iterable.");}
function Gi(a){this.i=a}
Gi.prototype.Da=function(){return new Hi(this.i())};
Gi.prototype[Symbol.iterator]=function(){return new Ii(this.i())};
Gi.prototype.h=function(){return new Ii(this.i())};
function Hi(a){this.i=a}
w(Hi,Ci);Hi.prototype.next=function(){return this.i.next()};
Hi.prototype[Symbol.iterator]=function(){return new Ii(this.i)};
Hi.prototype.h=function(){return new Ii(this.i)};
function Ii(a){Gi.call(this,function(){return a});
this.j=a}
w(Ii,Gi);Ii.prototype.next=function(){return this.j.next()};function Ji(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ji)for(c=a.Ec(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Ji.prototype;m.Ec=function(){Ki(this);return this.h.concat()};
m.has=function(a){return Li(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Mi;Ki(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Mi(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Li(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&Ki(this),!0):!1};
function Ki(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Li(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Li(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Li(this.i,a)?this.i[a]:b};
m.set=function(a,b){Li(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Ec(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Ji(this)};
m.keys=function(){return Fi(this.Da(!0)).h()};
m.values=function(){return Fi(this.Da(!1)).h()};
m.entries=function(){var a=this;return ui(this.keys(),function(b){return[b,a.get(b)]})};
m.Da=function(a){Ki(this);var b=0,c=this.Xa,d=this,e=new Ci;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Di;var f=d.h[b++];return Ei(a?f:d.i[f])};
return e};
function Li(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function M(a){G.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Xa(M,G);m=M.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function Ni(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Jb(b)}}
m.Jb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&ib(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.cb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Oi(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Jb(c)}}return 0!=e}return!1};
function Oi(a,b,c){je(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Jb,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.M=function(){M.wa.M.call(this);this.clear();this.l.length=0};function Pi(a){this.h=a}
Pi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Mg).serialize(b))};
Pi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Pi.prototype.remove=function(a){this.h.remove(a)};function Qi(a){this.h=a}
Xa(Qi,Pi);function Ri(a){this.data=a}
function Si(a){return void 0===a||a instanceof Ri?a:new Ri(a)}
Qi.prototype.set=function(a,b){Qi.wa.set.call(this,a,Si(b))};
Qi.prototype.i=function(a){a=Qi.wa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Qi.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ti(a){this.h=a}
Xa(Ti,Qi);Ti.prototype.set=function(a,b,c){if(b=Si(b)){if(c){if(c<Date.now()){Ti.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ti.wa.set.call(this,a,b)};
Ti.prototype.i=function(a){var b=Ti.wa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ti.prototype.remove.call(this,a);else return b}};function Ui(){}
;function Vi(){}
Xa(Vi,Ui);Vi.prototype[Symbol.iterator]=function(){return Fi(this.Da(!0)).h()};
Vi.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Wi(a){this.h=a}
Xa(Wi,Vi);m=Wi.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Da=function(a){var b=0,c=this.h,d=new Ci;d.next=function(){if(b>=c.length)return Di;var e=c.key(b++);if(a)return Ei(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ei(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Xi(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Xa(Xi,Wi);function Yi(a,b){this.i=a;this.h=null;var c;if(c=ed)c=!(9<=Number(sd));if(c){Zi||(Zi=new Ji);this.h=Zi.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Zi.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(Yi,Vi);var $i={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Zi=null;function aj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return $i[b]})}
m=Yi.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(aj(a),b);bj(this)};
m.get=function(a){a=this.h.getAttribute(aj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(aj(a));bj(this)};
m.Da=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ci;d.next=function(){if(b>=c.length)return Di;var e=c[b++];if(a)return Ei(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ei(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);bj(this)};
function bj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function cj(a,b){this.i=a;this.h=b+"::"}
Xa(cj,Vi);cj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
cj.prototype.get=function(a){return this.i.get(this.h+a)};
cj.prototype.remove=function(a){this.i.remove(this.h+a)};
cj.prototype.Da=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ci;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ei(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},dj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Sc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var ej={rb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
kd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},fj={rb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
kd:function(a){return[].concat.apply([],a)}};
N.Te=function(){dj?(N.pb=Uint8Array,N.Ga=Uint16Array,N.Od=Int32Array,N.assign(N,ej)):(N.pb=Array,N.Ga=Array,N.Od=Array,N.assign(N,fj))};
N.Te();var gj=!0;try{new Uint8Array(1)}catch(a){gj=!1}
function hj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.pb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var ij={};ij=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var jj={},kj,lj=[],mj=0;256>mj;mj++){kj=mj;for(var nj=0;8>nj;nj++)kj=kj&1?3988292384^kj>>>1:kj>>>1;lj[mj]=kj}jj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^lj[(a^b[d])&255];return a^-1};var oj={};oj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function pj(a){for(var b=a.length;0<=--b;)a[b]=0}
var qj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],rj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],sj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],tj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],uj=Array(576);pj(uj);var vj=Array(60);pj(vj);var wj=Array(512);pj(wj);var xj=Array(256);pj(xj);var yj=Array(29);pj(yj);var zj=Array(30);pj(zj);function Aj(a,b,c,d,e){this.Gd=a;this.ge=b;this.ee=c;this.ae=d;this.ze=e;this.od=a&&a.length}
var Bj,Cj,Dj;function Ej(a,b){this.jd=a;this.Bb=0;this.Wa=b}
function Fj(a,b){a.T[a.pending++]=b&255;a.T[a.pending++]=b>>>8&255}
function Gj(a,b,c){a.ba>16-c?(a.ia|=b<<a.ba&65535,Fj(a,a.ia),a.ia=b>>16-a.ba,a.ba+=c-16):(a.ia|=b<<a.ba&65535,a.ba+=c)}
function Hj(a,b,c){Gj(a,c[2*b],c[2*b+1])}
function Ij(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Jj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Ij(d[e]++,e))}
function Kj(a){var b;for(b=0;286>b;b++)a.ma[2*b]=0;for(b=0;30>b;b++)a.eb[2*b]=0;for(b=0;19>b;b++)a.ea[2*b]=0;a.ma[512]=1;a.Na=a.Fb=0;a.ta=a.matches=0}
function Lj(a){8<a.ba?Fj(a,a.ia):0<a.ba&&(a.T[a.pending++]=a.ia);a.ia=0;a.ba=0}
function Mj(a,b,c){Lj(a);Fj(a,c);Fj(a,~c);N.rb(a.T,a.window,b,c,a.pending);a.pending+=c}
function Nj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Oj(a,b,c){for(var d=a.V[c],e=c<<1;e<=a.La;){e<a.La&&Nj(b,a.V[e+1],a.V[e],a.depth)&&e++;if(Nj(b,d,a.V[e],a.depth))break;a.V[c]=a.V[e];c=e;e<<=1}a.V[c]=d}
function Pj(a,b,c){var d=0;if(0!==a.ta){do{var e=a.T[a.Mb+2*d]<<8|a.T[a.Mb+2*d+1];var f=a.T[a.Ic+d];d++;if(0===e)Hj(a,f,b);else{var g=xj[f];Hj(a,g+256+1,b);var h=qj[g];0!==h&&(f-=yj[g],Gj(a,f,h));e--;g=256>e?wj[e]:wj[256+(e>>>7)];Hj(a,g,c);h=rj[g];0!==h&&(e-=zj[g],Gj(a,e,h))}}while(d<a.ta)}Hj(a,256,b)}
function Qj(a,b){var c=b.jd,d=b.Wa.Gd,e=b.Wa.od,f=b.Wa.ae,g,h=-1;a.La=0;a.yb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.V[++a.La]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.La;){var k=a.V[++a.La]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.Fb-=d[2*k+1])}b.Bb=h;for(g=a.La>>1;1<=g;g--)Oj(a,c,g);k=f;do g=a.V[1],a.V[1]=a.V[a.La--],Oj(a,c,1),d=a.V[1],a.V[--a.yb]=g,a.V[--a.yb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.V[1]=k++,Oj(a,c,1);while(2<=a.La);a.V[--a.yb]=
a.V[1];g=b.jd;k=b.Bb;d=b.Wa.Gd;e=b.Wa.od;f=b.Wa.ge;var l=b.Wa.ee,n=b.Wa.ze,p,t=0;for(p=0;15>=p;p++)a.Ia[p]=0;g[2*a.V[a.yb]+1]=0;for(b=a.yb+1;573>b;b++){var r=a.V[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ia[p]++;var x=0;r>=l&&(x=f[r-l]);var y=g[2*r];a.Na+=y*(p+x);e&&(a.Fb+=y*(d[2*r+1]+x))}}if(0!==t){do{for(p=n-1;0===a.Ia[p];)p--;a.Ia[p]--;a.Ia[p+1]+=2;a.Ia[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ia[p];0!==r;)d=a.V[--b],d>k||(g[2*d+1]!==p&&(a.Na+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}Jj(c,h,a.Ia)}
function Rj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ea[2*l]+=g:0!==l?(l!==e&&a.ea[2*l]++,a.ea[32]++):10>=g?a.ea[34]++:a.ea[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Sj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Hj(a,l,a.ea);while(0!==--g)}else 0!==l?(l!==e&&(Hj(a,l,a.ea),g--),Hj(a,16,a.ea),Gj(a,g-3,2)):10>=g?(Hj(a,17,a.ea),Gj(a,g-3,3)):(Hj(a,18,a.ea),Gj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Tj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ma[2*c])return 0;if(0!==a.ma[18]||0!==a.ma[20]||0!==a.ma[26])return 1;for(c=32;256>c;c++)if(0!==a.ma[2*c])return 1;return 0}
var Uj=!1;function Vj(a,b,c){a.T[a.Mb+2*a.ta]=b>>>8&255;a.T[a.Mb+2*a.ta+1]=b&255;a.T[a.Ic+a.ta]=c&255;a.ta++;0===b?a.ma[2*c]++:(a.matches++,b--,a.ma[2*(xj[c]+256+1)]++,a.eb[2*(256>b?wj[b]:wj[256+(b>>>7)])]++);return a.ta===a.Pb-1}
;function Wj(a,b){a.msg=oj[b];return b}
function Xj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Yj(a){var b=a.state,c=b.pending;c>a.J&&(c=a.J);0!==c&&(N.rb(a.output,b.T,b.Qb,c,a.Db),a.Db+=c,b.Qb+=c,a.Tc+=c,a.J-=c,b.pending-=c,0===b.pending&&(b.Qb=0))}
function Zj(a,b){var c=0<=a.oa?a.oa:-1,d=a.o-a.oa,e=0;if(0<a.level){2===a.G.yc&&(a.G.yc=Tj(a));Qj(a,a.ic);Qj(a,a.dc);Rj(a,a.ma,a.ic.Bb);Rj(a,a.eb,a.dc.Bb);Qj(a,a.bd);for(e=18;3<=e&&0===a.ea[2*tj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.Fb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Gj(a,b?1:0,3),Mj(a,c,d);else if(4===a.strategy||g===f)Gj(a,2+(b?1:0),3),Pj(a,uj,vj);else{Gj(a,4+(b?1:0),3);c=a.ic.Bb+1;d=a.dc.Bb+1;e+=1;Gj(a,c-257,5);Gj(a,d-1,5);Gj(a,e-4,4);for(f=0;f<e;f++)Gj(a,a.ea[2*
tj[f]+1],3);Sj(a,a.ma,c-1);Sj(a,a.eb,d-1);Pj(a,a.ma,a.eb)}Kj(a);b&&Lj(a);a.oa=a.o;Yj(a.G)}
function O(a,b){a.T[a.pending++]=b}
function ak(a,b){a.T[a.pending++]=b>>>8&255;a.T[a.pending++]=b&255}
function bk(a,b){var c=a.rd,d=a.o,e=a.sa,f=a.td,g=a.o>a.ga-262?a.o-(a.ga-262):0,h=a.window,k=a.Ya,l=a.Fa,n=a.o+258,p=h[d+e-1],t=h[d+e];a.sa>=a.nd&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.Ab=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function ck(a){var b=a.ga,c;do{var d=a.Md-a.u-a.o;if(a.o>=b+(b-262)){N.rb(a.window,a.window,b,b,0);a.Ab-=b;a.o-=b;a.oa-=b;var e=c=a.hc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Fa[--e],a.Fa[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.G.ha)break;e=a.G;c=a.window;f=a.o+a.u;var g=e.ha;g>d&&(g=d);0===g?c=0:(e.ha-=g,N.rb(c,e.input,e.ib,g,f),1===e.state.wrap?e.F=ij(e.F,c,g,f):2===e.state.wrap&&(e.F=jj(e.F,c,g,f)),e.ib+=g,e.mb+=g,c=g);a.u+=c;if(3<=a.u+a.na)for(d=a.o-a.na,a.I=a.window[d],
a.I=(a.I<<a.Ka^a.window[d+1])&a.Ja;a.na&&!(a.I=(a.I<<a.Ka^a.window[d+3-1])&a.Ja,a.Fa[d&a.Ya]=a.head[a.I],a.head[a.I]=d,d++,a.na--,3>a.u+a.na););}while(262>a.u&&0!==a.G.ha)}
function dk(a,b){for(var c;;){if(262>a.u){ck(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.I=(a.I<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Fa[a.o&a.Ya]=a.head[a.I],a.head[a.I]=a.o);0!==c&&a.o-c<=a.ga-262&&(a.K=bk(a,c));if(3<=a.K)if(c=Vj(a,a.o-a.Ab,a.K-3),a.u-=a.K,a.K<=a.Jc&&3<=a.u){a.K--;do a.o++,a.I=(a.I<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Fa[a.o&a.Ya]=a.head[a.I],a.head[a.I]=a.o;while(0!==--a.K);a.o++}else a.o+=a.K,a.K=0,a.I=a.window[a.o],a.I=(a.I<<a.Ka^a.window[a.o+1])&a.Ja;else c=Vj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Zj(a,!1),0===a.G.J))return 1}a.na=2>a.o?a.o:2;return 4===b?(Zj(a,!0),0===a.G.J?3:4):a.ta&&(Zj(a,!1),0===a.G.J)?1:2}
function ek(a,b){for(var c,d;;){if(262>a.u){ck(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.I=(a.I<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Fa[a.o&a.Ya]=a.head[a.I],a.head[a.I]=a.o);a.sa=a.K;a.wd=a.Ab;a.K=2;0!==c&&a.sa<a.Jc&&a.o-c<=a.ga-262&&(a.K=bk(a,c),5>=a.K&&(1===a.strategy||3===a.K&&4096<a.o-a.Ab)&&(a.K=2));if(3<=a.sa&&a.K<=a.sa){d=a.o+a.u-3;c=Vj(a,a.o-1-a.wd,a.sa-3);a.u-=a.sa-1;a.sa-=2;do++a.o<=d&&(a.I=(a.I<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Fa[a.o&a.Ya]=a.head[a.I],a.head[a.I]=a.o);
while(0!==--a.sa);a.gb=0;a.K=2;a.o++;if(c&&(Zj(a,!1),0===a.G.J))return 1}else if(a.gb){if((c=Vj(a,0,a.window[a.o-1]))&&Zj(a,!1),a.o++,a.u--,0===a.G.J)return 1}else a.gb=1,a.o++,a.u--}a.gb&&(Vj(a,0,a.window[a.o-1]),a.gb=0);a.na=2>a.o?a.o:2;return 4===b?(Zj(a,!0),0===a.G.J?3:4):a.ta&&(Zj(a,!1),0===a.G.J)?1:2}
function fk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){ck(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.K=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.K=258-(e-d);a.K>a.u&&(a.K=a.u)}3<=a.K?(c=Vj(a,1,a.K-3),a.u-=a.K,a.o+=a.K,a.K=0):(c=Vj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Zj(a,!1),0===a.G.J))return 1}a.na=0;return 4===b?(Zj(a,!0),0===a.G.J?3:4):
a.ta&&(Zj(a,!1),0===a.G.J)?1:2}
function gk(a,b){for(var c;;){if(0===a.u&&(ck(a),0===a.u)){if(0===b)return 1;break}a.K=0;c=Vj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Zj(a,!1),0===a.G.J))return 1}a.na=0;return 4===b?(Zj(a,!0),0===a.G.J?3:4):a.ta&&(Zj(a,!1),0===a.G.J)?1:2}
function hk(a,b,c,d,e){this.ne=a;this.ye=b;this.Be=c;this.xe=d;this.je=e}
var ik;ik=[new hk(0,0,0,0,function(a,b){var c=65535;for(c>a.va-5&&(c=a.va-5);;){if(1>=a.u){ck(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.oa+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Zj(a,!1),0===a.G.J)return 1;if(a.o-a.oa>=a.ga-262&&(Zj(a,!1),0===a.G.J))return 1}a.na=0;if(4===b)return Zj(a,!0),0===a.G.J?3:4;a.o>a.oa&&Zj(a,!1);return 1}),
new hk(4,4,8,4,dk),new hk(4,5,16,8,dk),new hk(4,6,32,32,dk),new hk(4,4,16,16,ek),new hk(8,16,32,32,ek),new hk(8,16,128,128,ek),new hk(8,32,128,256,ek),new hk(32,128,258,1024,ek),new hk(32,258,258,4096,ek)];
function jk(){this.G=null;this.status=0;this.T=null;this.wrap=this.pending=this.Qb=this.va=0;this.D=null;this.za=0;this.method=8;this.zb=-1;this.Ya=this.Vc=this.ga=0;this.window=null;this.Md=0;this.head=this.Fa=null;this.td=this.nd=this.strategy=this.level=this.Jc=this.rd=this.sa=this.u=this.Ab=this.o=this.gb=this.wd=this.K=this.oa=this.Ka=this.Ja=this.Fc=this.hc=this.I=0;this.ma=new N.Ga(1146);this.eb=new N.Ga(122);this.ea=new N.Ga(78);Xj(this.ma);Xj(this.eb);Xj(this.ea);this.bd=this.dc=this.ic=
null;this.Ia=new N.Ga(16);this.V=new N.Ga(573);Xj(this.V);this.yb=this.La=0;this.depth=new N.Ga(573);Xj(this.depth);this.ba=this.ia=this.na=this.matches=this.Fb=this.Na=this.Mb=this.ta=this.Pb=this.Ic=0}
function kk(a,b){if(!a||!a.state||5<b||0>b)return a?Wj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ha||666===c.status&&4!==b)return Wj(a,0===a.J?-5:-2);c.G=a;var d=c.zb;c.zb=b;if(42===c.status)if(2===c.wrap)a.F=0,O(c,31),O(c,139),O(c,8),c.D?(O(c,(c.D.text?1:0)+(c.D.Ta?2:0)+(c.D.Sa?4:0)+(c.D.name?8:0)+(c.D.comment?16:0)),O(c,c.D.time&255),O(c,c.D.time>>8&255),O(c,c.D.time>>16&255),O(c,c.D.time>>24&255),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,c.D.os&255),c.D.Sa&&c.D.Sa.length&&
(O(c,c.D.Sa.length&255),O(c,c.D.Sa.length>>8&255)),c.D.Ta&&(a.F=jj(a.F,c.T,c.pending,0)),c.za=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,3),c.status=113);else{var e=8+(c.Vc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;ak(c,e+(31-e%31));0!==c.o&&(ak(c,a.F>>>16),ak(c,a.F&65535));a.F=1}if(69===c.status)if(c.D.Sa){for(e=c.pending;c.za<(c.D.Sa.length&65535)&&(c.pending!==c.va||(c.D.Ta&&
c.pending>e&&(a.F=jj(a.F,c.T,c.pending-e,e)),Yj(a),e=c.pending,c.pending!==c.va));)O(c,c.D.Sa[c.za]&255),c.za++;c.D.Ta&&c.pending>e&&(a.F=jj(a.F,c.T,c.pending-e,e));c.za===c.D.Sa.length&&(c.za=0,c.status=73)}else c.status=73;if(73===c.status)if(c.D.name){e=c.pending;do{if(c.pending===c.va&&(c.D.Ta&&c.pending>e&&(a.F=jj(a.F,c.T,c.pending-e,e)),Yj(a),e=c.pending,c.pending===c.va)){var f=1;break}f=c.za<c.D.name.length?c.D.name.charCodeAt(c.za++)&255:0;O(c,f)}while(0!==f);c.D.Ta&&c.pending>e&&(a.F=jj(a.F,
c.T,c.pending-e,e));0===f&&(c.za=0,c.status=91)}else c.status=91;if(91===c.status)if(c.D.comment){e=c.pending;do{if(c.pending===c.va&&(c.D.Ta&&c.pending>e&&(a.F=jj(a.F,c.T,c.pending-e,e)),Yj(a),e=c.pending,c.pending===c.va)){f=1;break}f=c.za<c.D.comment.length?c.D.comment.charCodeAt(c.za++)&255:0;O(c,f)}while(0!==f);c.D.Ta&&c.pending>e&&(a.F=jj(a.F,c.T,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.D.Ta?(c.pending+2>c.va&&Yj(a),c.pending+2<=c.va&&(O(c,a.F&255),O(c,a.F>>
8&255),a.F=0,c.status=113)):c.status=113);if(0!==c.pending){if(Yj(a),0===a.J)return c.zb=-1,0}else if(0===a.ha&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Wj(a,-5);if(666===c.status&&0!==a.ha)return Wj(a,-5);if(0!==a.ha||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?gk(c,b):3===c.strategy?fk(c,b):ik[c.level].je(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.J&&(c.zb=-1),0;if(2===d&&(1===b?(Gj(c,2,3),Hj(c,256,uj),16===c.ba?(Fj(c,c.ia),c.ia=0,c.ba=0):8<=c.ba&&(c.T[c.pending++]=
c.ia&255,c.ia>>=8,c.ba-=8)):5!==b&&(Gj(c,0,3),Mj(c,0,0),3===b&&(Xj(c.head),0===c.u&&(c.o=0,c.oa=0,c.na=0))),Yj(a),0===a.J))return c.zb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(O(c,a.F&255),O(c,a.F>>8&255),O(c,a.F>>16&255),O(c,a.F>>24&255),O(c,a.mb&255),O(c,a.mb>>8&255),O(c,a.mb>>16&255),O(c,a.mb>>24&255)):(ak(c,a.F>>>16),ak(c,a.F&65535));Yj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var lk={};lk=function(){this.input=null;this.mb=this.ha=this.ib=0;this.output=null;this.Tc=this.J=this.Db=0;this.msg="";this.state=null;this.yc=2;this.F=0};var mk=Object.prototype.toString;
function nk(a){if(!(this instanceof nk))return new nk(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.G=new lk;this.G.J=0;var b=this.G;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Wj(b,-2);else{8===e&&(e=9);var k=new jk;b.state=k;k.G=b;k.wrap=h;k.D=null;k.Vc=e;k.ga=1<<k.Vc;k.Ya=k.ga-1;k.Fc=f+7;k.hc=1<<k.Fc;k.Ja=k.hc-1;k.Ka=~~((k.Fc+3-1)/3);k.window=new N.pb(2*k.ga);k.head=new N.Ga(k.hc);k.Fa=new N.Ga(k.ga);k.Pb=1<<f+6;k.va=4*k.Pb;k.T=new N.pb(k.va);k.Mb=1*k.Pb;k.Ic=3*k.Pb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.mb=b.Tc=0;b.yc=2;c=b.state;c.pending=0;c.Qb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.F=2===c.wrap?
0:1;c.zb=0;if(!Uj){d=Array(16);for(f=g=0;28>f;f++)for(yj[f]=g,e=0;e<1<<qj[f];e++)xj[g++]=f;xj[g-1]=f;for(f=g=0;16>f;f++)for(zj[f]=g,e=0;e<1<<rj[f];e++)wj[g++]=f;for(g>>=7;30>f;f++)for(zj[f]=g<<7,e=0;e<1<<rj[f]-7;e++)wj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)uj[2*e+1]=8,e++,d[8]++;for(;255>=e;)uj[2*e+1]=9,e++,d[9]++;for(;279>=e;)uj[2*e+1]=7,e++,d[7]++;for(;287>=e;)uj[2*e+1]=8,e++,d[8]++;Jj(uj,287,d);for(e=0;30>e;e++)vj[2*e+1]=5,vj[2*e]=Ij(e,5);Bj=new Aj(uj,qj,257,286,15);Cj=new Aj(vj,
rj,0,30,15);Dj=new Aj([],sj,0,19,7);Uj=!0}c.ic=new Ej(c.ma,Bj);c.dc=new Ej(c.eb,Cj);c.bd=new Ej(c.ea,Dj);c.ia=0;c.ba=0;Kj(c);c=0}else c=Wj(b,-2);0===c&&(b=b.state,b.Md=2*b.ga,Xj(b.head),b.Jc=ik[b.level].ye,b.nd=ik[b.level].ne,b.td=ik[b.level].Be,b.rd=ik[b.level].xe,b.o=0,b.oa=0,b.u=0,b.na=0,b.K=b.sa=2,b.gb=0,b.I=0);b=c}}else b=-2;if(0!==b)throw Error(oj[b]);a.header&&(b=this.G)&&b.state&&2===b.state.wrap&&(b.state.D=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=hj(a.dictionary):
"[object ArrayBuffer]"===mk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.G;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.F=ij(a.F,f,g,0));l.wrap=0;g>=l.ga&&(0===b&&(Xj(l.head),l.o=0,l.oa=0,l.na=0),c=new N.pb(l.ga),N.rb(c,f,g-l.ga,l.ga,0),f=c,g=l.ga);c=a.ha;d=a.ib;e=a.input;a.ha=g;a.ib=0;a.input=f;for(ck(l);3<=l.u;){f=l.o;g=l.u-2;do l.I=(l.I<<l.Ka^l.window[f+3-1])&l.Ja,l.Fa[f&l.Ya]=l.head[l.I],l.head[l.I]=f,f++;while(--g);
l.o=f;l.u=2;ck(l)}l.o+=l.u;l.oa=l.o;l.na=l.u;l.u=0;l.K=l.sa=2;l.gb=0;a.ib=d;a.input=e;a.ha=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(oj[b]);this.Gf=!0}}
nk.prototype.push=function(a,b){var c=this.G,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=hj(a):"[object ArrayBuffer]"===mk.call(a)?c.input=new Uint8Array(a):c.input=a;c.ib=0;c.ha=c.input.length;do{0===c.J&&(c.output=new N.pb(d),c.Db=0,c.J=d);a=kk(c,e);if(1!==a&&0!==a)return ok(this,a),this.ended=!0,!1;if(0===c.J||0===c.ha&&(4===e||2===e))if("string"===this.options.to){var f=N.Sc(c.output,c.Db);b=f;f=f.length;if(65537>f&&(b.subarray&&gj||!b.subarray))b=
String.fromCharCode.apply(null,N.Sc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Sc(c.output,c.Db),this.chunks.push(b)}while((0<c.ha||0===c.J)&&1!==a);if(4===e)return(c=this.G)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Wj(c,-2):(c.state=null,a=113===d?Wj(c,-3):0)):a=-2,ok(this,a),this.ended=!0,0===a;2===e&&(ok(this,0),c.J=0);return!0};
function ok(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):N.kd(a.chunks));a.chunks=[];a.err=b;a.msg=a.G.msg}
function pk(a,b){b=b||{};b.gzip=!0;b=new nk(b);b.push(a,!0);if(b.err)throw b.msg||oj[b.err];return b.result}
;function qk(a){return Fb(null===a?"null":void 0===a?"undefined":a)}
;function rk(a){this.name=a}
;var sk=new rk("rawColdConfigGroup");var tk=new rk("rawHotConfigGroup");var uk=new rk("commandExecutorCommand");function vk(a){this.B=dg(a)}
w(vk,ng);var wk=new rk("continuationCommand");var xk=new rk("signalAction");var yk=new rk("webCommandMetadata");var zk=new rk("signalServiceEndpoint");var Ak={wf:"EMBEDDED_PLAYER_MODE_UNKNOWN",tf:"EMBEDDED_PLAYER_MODE_DEFAULT",vf:"EMBEDDED_PLAYER_MODE_PFP",uf:"EMBEDDED_PLAYER_MODE_PFL"};var Bk=new rk("feedbackEndpoint");function Ck(a){this.B=dg(a)}
w(Ck,ng);var Dk=new rk("webPlayerShareEntityServiceEndpoint");var Ek=new rk("playlistEditEndpoint");var Fk=new rk("modifyChannelNotificationPreferenceEndpoint");var Gk=new rk("unsubscribeEndpoint");var Hk=new rk("subscribeEndpoint");function Ik(){var a=Jk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Kk(a){D("yt.ads.biscotti.lastId_",a)}
;function Lk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Mk=C.window,Nk,Ok,Pk=(null==Mk?void 0:null==(Nk=Mk.yt)?void 0:Nk.config_)||(null==Mk?void 0:null==(Ok=Mk.ytcfg)?void 0:Ok.data_)||{};D("yt.config_",Pk);function Qk(){Lk(Pk,arguments)}
function R(a,b){return a in Pk?Pk[a]:b}
function Rk(a){var b=Pk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Sk=[];function Tk(a){Sk.forEach(function(b){return b(a)})}
function Uk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Vk(b)}}:a}
function Vk(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Qk("ERRORS",b));Tk(a)}
function Wk(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Qk("ERRORS",f))}
;var Xk=/^[\w.]*$/,Yk={q:!0,search_query:!0};function Zk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=$k(f[0]||""),h=$k(f[1]||"");g in c?Array.isArray(c[g])?jb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Zk);k.args=[{key:l,value:f[1],query:a,method:al==n?"unchanged":n}];Yk.hasOwnProperty(l)||Wk(k)}}return c}
var al=String(Zk);function bl(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function cl(a){"?"==a.charAt(0)&&(a=a.substr(1));return Zk(a,"&")}
function dl(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),cl(1<a.length?a[1]:a[0])):{}}
function el(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=cl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Bc(a,e)+d}
function fl(a){if(!b)var b=window.location.href;var c=sc(1,a),d=tc(a);c&&d?(a=a.match(qc),b=b.match(qc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?tc(b)==d&&(Number(sc(4,b))||null)==(Number(sc(4,a))||null):!0;return a}
function $k(a){return a&&a.match(Xk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function gl(a){var b=hl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ii;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ga){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Nh:g;try{var h=g.history.length}catch(Ga){h=0}e.u_his=h;var k;e.u_h=null==(k=Nh.screen)?void 0:k.height;var l;e.u_w=null==(l=Nh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Nh.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Nh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Nh.screen)?void 0:t.colorDepth}catch(Ga){}h=b.h;try{var r=h.screenX;var x=h.screenY}catch(Ga){}try{var y=h.outerWidth;var z=h.outerHeight}catch(Ga){}try{var H=h.innerWidth;var I=h.innerHeight}catch(Ga){}try{var L=h.screenLeft;var P=h.screenTop}catch(Ga){}try{H=h.innerWidth,I=h.innerHeight}catch(Ga){}try{var J=h.screen.availWidth;var V=h.screen.availTop}catch(Ga){}r=[L,P,r,x,J,V,y,z,H,I];try{var Z=(b.h.top||window).document,ca="CSS1Compat"==
Z.compatMode?Z.documentElement:Z.body;var ra=(new Xd(ca.clientWidth,ca.clientHeight)).round()}catch(Ga){ra=new Xd(-12245933,-12245933)}Z=ra;ra={};var ma=void 0===ma?C:ma;ca=new ri;"SVGElement"in ma&&"createElementNS"in ma.document&&ca.set(0);x=fi();x["allow-top-navigation-by-user-activation"]&&ca.set(1);x["allow-popups-to-escape-sandbox"]&&ca.set(2);ma.crypto&&ma.crypto.subtle&&ca.set(3);"TextDecoder"in ma&&"TextEncoder"in ma&&ca.set(4);ma=si(ca);ra.bc=ma;ra.bih=Z.height;ra.biw=Z.width;ra.brdim=r.join();
b=b.i;b=(ra.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ra.wgl=!!Nh.WebGLRenderingContext,ra);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var hl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return bl(gl(a))});Date.now();navigator.userAgent.indexOf(" (CrKey ");function S(a){a=il(a);return"string"===typeof a&&"false"===a?!1:!!a}
function jl(a,b){a=il(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function il(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
function kl(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var ll="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function ml(){if(!ll)return null;var a=ll();return"open"in a?a:null}
function nl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ol(a,b){"function"===typeof a&&(a=Uk(a));return window.setTimeout(a,b)}
;var pl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},ql="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(ji)),rl=!1;
function sl(a,b){b=void 0===b?{}:b;var c=fl(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in pl){var f=R(pl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&tc(a)||d&&void 0!==b[e]||(!S("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}S("move_vss_away_from_login_info_cookie")&&c&&R("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==R("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!tc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!tc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&tc(a)||(b["X-YouTube-Ad-Signals"]=bl(gl()));return b}
function tl(a){var b=window.location.search,c=tc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&fl(a)&&(c=document.location.hostname);var d=rc(sc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=cl(b),f={};db(ql,function(g){e[g]&&(f[g]=e[g])});
return el(a,f||{},!1)}
function ul(a,b){var c=b.format||"JSON";a=vl(a,b);var d=wl(a,b),e=!1,f=xl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=nl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=yl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=ol(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function vl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=el(a,b||{},!0);return a}
function wl(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||tc(a)&&!b.withCredentials&&tc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=cl(e),ub(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):zc(e));f=e||f&&!nb(f);!rl&&f&&"POST"!=b.method&&(rl=!0,Vk(Error("AJAX request with postData should use POST")));return e}
function yl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Wk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?zl(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Al(g)})}d&&Bl(e);
return e}
function Bl(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=wb();d=e?e.createHTML(d):d;a[c]=new jc(d)}else Bl(a[b])}}
function zl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Al(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Cl(a,b){b.method="POST";b.postParams||(b.postParams={});return ul(a,b)}
function xl(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Uk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=ml();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=tl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=sl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Dl=[{Kc:function(a){return"Cannot read property '"+a.key+"'"},
kc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Kc:function(a){return"Cannot call '"+a.key+"'"},
kc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Kc:function(a){return a.key+" is not defined"},
kc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Fl={Ua:[],Ra:[{callback:El,weight:500}]};function El(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Gl(){this.Ra=[];this.Ua=[]}
var Hl;function Il(){if(!Hl){var a=Hl=new Gl;a.Ua.length=0;a.Ra.length=0;Fl.Ua&&a.Ua.push.apply(a.Ua,Fl.Ua);Fl.Ra&&a.Ra.push.apply(a.Ra,Fl.Ra)}return Hl}
;var Jl=new M;function Kl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ll(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ll(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ll(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ll(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ml(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Nl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Kl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Nl(e+".ve",f,g,h):0;d+=g;d+=Nl(e,a[e],b,c);if(500<d)break}}else c[b]=Ol(a),d+=c[b].length;else c[b]=Ol(a),d+=c[b].length;return d}
function Nl(a,b,c,d){c+="."+a;a=Ol(b);d[c]=a;return c.length+a.length}
function Ol(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Pl(){this.Xe=!0}
function Ql(){Pl.h||(Pl.h=new Pl);return Pl.h}
function Rl(a,b){a={};var c=Jg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Pk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Pk&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return a}
;var Sl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Tl(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Ul(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Vl(a,b,c,d,e){Fg.set(""+a,b,{jc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Wl(a){return Fg.get(""+a,void 0)}
function Xl(a,b,c){Fg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Yl(){if(!Fg.isEnabled())return!1;if(!Fg.isEmpty())return!0;Fg.set("TESTCOOKIESENABLED","1",{jc:60});if("1"!==Fg.get("TESTCOOKIESENABLED"))return!1;Fg.remove("TESTCOOKIESENABLED");return!0}
;var Zl=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Zl);function $l(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Wl(this.h);a&&this.parse(a)}
var am;function bm(){am||(am=new $l);return am}
m=$l.prototype;m.get=function(a,b){cm(a);dm(a);a=void 0!==Zl[a]?Zl[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){cm(a);dm(a);if(null==b)throw Error("ExpectedNotNull");Zl[a]=b.toString()};
function em(a){return!!((fm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){cm(a);dm(a);delete Zl[a]};
m.clear=function(){for(var a in Zl)delete Zl[a]};
function dm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function cm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function fm(a){a=void 0!==Zl[a]?Zl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Zl[d]=c.toString())}};var gm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},hm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function im(){var a=C.navigator;return a?a.connection:void 0}
function jm(){var a=im();if(a){var b=gm[a.type||"unknown"]||"CONN_UNKNOWN";a=gm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function km(){var a=im();if(null!=a&&a.effectiveType)return hm.hasOwnProperty(a.effectiveType)?hm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function lm(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
w(lm,Error);function mm(){try{return nm(),!0}catch(a){return!1}}
function nm(a){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new lm("Datasync ID not set",void 0===a?"unknown":a);}
;function om(){}
function pm(a,b){return qm(a,0,b)}
om.prototype.la=function(a,b){return qm(a,1,b)};
function rm(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function sm(){om.apply(this,arguments)}
w(sm,om);function tm(){sm.h||(sm.h=new sm);return sm.h}
function qm(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ol(a,c||0)}
sm.prototype.Ea=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
sm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
sm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var qi=tm();function um(a){var b=new Xi;(b=b.isAvailable()?a?new cj(b,a):b:null)||(a=new Yi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ti(a):null;this.i=document.domain||window.location.hostname}
um.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Mg).serialize(b))}catch(f){return}else e=escape(b);Vl(a,e,c,this.i)};
um.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Wl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
um.prototype.remove=function(a){this.h&&this.h.remove(a);Xl(a,"/",this.i)};var wm=function(){var a;return function(){a||(a=new um("ytidb"));return a}}();
function xm(){var a;return null==(a=wm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ym=[],zm,Am=!1;function Bm(){var a={};for(zm=new Cm(void 0===a.handleError?Dm:a.handleError,void 0===a.logEvent?Em:a.logEvent);0<ym.length;)switch(a=ym.shift(),a.type){case "ERROR":zm.handleError(a.payload);break;case "EVENT":zm.logEvent(a.eventType,a.payload)}}
function Fm(a){Am||(zm?zm.handleError(a):(ym.push({type:"ERROR",payload:a}),10<ym.length&&ym.shift()))}
function Gm(a,b){Am||(zm?zm.logEvent(a,b):(ym.push({type:"EVENT",eventType:a,payload:b}),10<ym.length&&ym.shift()))}
;function Hm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Im(a){return a.substr(0,a.indexOf(":"))||a}
;var Jm=We||Xe;function Km(a){var b=Tb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Lm={},Mm=(Lm.AUTH_INVALID="No user identifier specified.",Lm.EXPLICIT_ABORT="Transaction was explicitly aborted.",Lm.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Lm.MISSING_INDEX="Index not created.",Lm.MISSING_OBJECT_STORES="Object stores not created.",Lm.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Lm.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Lm.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Lm.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Lm.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Lm.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Lm.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Lm),Nm={},Om=(Nm.AUTH_INVALID="ERROR",Nm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Nm.EXPLICIT_ABORT="IGNORED",Nm.IDB_NOT_SUPPORTED="ERROR",Nm.MISSING_INDEX=
"WARNING",Nm.MISSING_OBJECT_STORES="ERROR",Nm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Nm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Nm.QUOTA_EXCEEDED="WARNING",Nm.QUOTA_MAYBE_EXCEEDED="WARNING",Nm.UNKNOWN_ABORT="WARNING",Nm.INCOMPATIBLE_DB_VERSION="WARNING",Nm),Pm={},Qm=(Pm.AUTH_INVALID=!1,Pm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Pm.EXPLICIT_ABORT=!1,Pm.IDB_NOT_SUPPORTED=!1,Pm.MISSING_INDEX=!1,Pm.MISSING_OBJECT_STORES=!1,Pm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Pm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Pm.QUOTA_EXCEEDED=!1,Pm.QUOTA_MAYBE_EXCEEDED=!0,Pm.UNKNOWN_ABORT=!0,Pm.INCOMPATIBLE_DB_VERSION=!1,Pm);function Rm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Mm[a]:c;d=void 0===d?Om[a]:d;e=void 0===e?Qm[a]:e;lm.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Rm.prototype)}
w(Rm,lm);function Sm(a,b){Rm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Mm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Sm.prototype)}
w(Sm,Rm);function Tm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Tm.prototype)}
w(Tm,Error);var Um=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Vm(a,b,c,d){b=Im(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Rm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Rm("QUOTA_EXCEEDED",a);if(Ye&&"UnknownError"===e.name)return new Rm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Tm)return new Rm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Um.some(function(f){return e.message.includes(f)}))return new Rm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Rm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",vd:e.name})];e.level="WARNING";return e}
function Wm(a,b,c){var d=xm();return new Rm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Xm(a){if(!a)throw Error();throw a;}
function Ym(a){return a}
function Zm(a){this.h=a}
function $m(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
$m.all=function(a){return new $m(new Zm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={nb:0};f.nb<a.length;f={nb:f.nb},++f.nb)$m.resolve(a[f.nb]).then(function(g){return function(h){d[g.nb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
$m.resolve=function(a){return new $m(new Zm(function(b,c){a instanceof $m?a.then(b,c):b(a)}))};
$m.reject=function(a){return new $m(new Zm(function(b,c){c(a)}))};
$m.prototype.then=function(a,b){var c=this,d=null!=a?a:Ym,e=null!=b?b:Xm;return new $m(new Zm(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){an(c,c,d,f,g)}),c.i.push(function(){bn(c,c,e,f,g)})):"FULFILLED"===c.state.status?an(c,c,d,f,g):"REJECTED"===c.state.status&&bn(c,c,e,f,g)}))};
$m.prototype.catch=function(a){return this.then(void 0,a)};
function an(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof $m?cn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function bn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof $m?cn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function cn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof $m?cn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function dn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function en(a){return new Promise(function(b,c){dn(a,b,c)})}
function fn(a){return new $m(new Zm(function(b,c){dn(a,b,c)}))}
;function gn(a,b){return new $m(new Zm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var hn=window,T=hn.ytcsi&&hn.ytcsi.now?hn.ytcsi.now:hn.performance&&hn.performance.timing&&hn.performance.now&&hn.performance.timing.navigationStart?function(){return hn.performance.timing.navigationStart+hn.performance.now()}:function(){return(new Date).getTime()};function jn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
m=jn.prototype;m.add=function(a,b,c){return kn(this,[a],{mode:"readwrite",fa:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return kn(this,[a],{mode:"readwrite",fa:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return kn(this,[a],{mode:"readonly",fa:!0},function(c){return c.objectStore(a).count(b)})};
function ln(a,b,c){a=a.h.createObjectStore(b,c);return new mn(a)}
m.delete=function(a,b){return kn(this,[a],{mode:"readwrite",fa:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return kn(this,[a],{mode:"readonly",fa:!0},function(c){return c.objectStore(a).get(b)})};
function nn(a,b,c){return kn(a,[b],{mode:"readwrite",fa:!0},function(d){d=d.objectStore(b);return fn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function kn(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,x,y;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",fa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.fa?3:1;g=0;case 2:if(h){z.v(4);break}g++;k=Math.round(T());ya(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var I=new on(l);I=pn(I,d);return H.call(z,I,7);case 7:return n=z.i,p=Math.round(T()),qn(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:t=Aa(z);r=Math.round(T());x=Vm(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof Rm&&!x.h)||g>=f)qn(a,k,r,g,x,b.join(),e),h=x;z.v(2);break;case 4:return z.return(Promise.reject(h))}})}
function qn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Rm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Gm("QUOTA_EXCEEDED",{dbName:Im(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Rm&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Gm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),rn(a,!1,d,f,b,g.tag),Fm(e)):rn(a,!0,d,f,b,g.tag)}
function rn(a,b,c,d,e,f){Gm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function mn(a){this.h=a}
m=mn.prototype;m.add=function(a,b){return fn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return fn(this.h.clear()).then(function(){})};
function sn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return fn(this.h.count(a))};
function tn(a,b){return un(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?tn(this,a):fn(this.h.delete(a))};
m.get=function(a){return fn(this.h.get(a))};
m.index=function(a){try{return new vn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Tm(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function un(a,b,c){a=a.h.openCursor(b.query,b.direction);return wn(a).then(function(d){return gn(d,c)})}
function on(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Rm;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function pn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
on.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Rm("EXPLICIT_ABORT");};
on.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new mn(a),this.i.set(a,b));return b};
function vn(a){this.h=a}
m=vn.prototype;m.count=function(a){return fn(this.h.count(a))};
m.delete=function(a){return xn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return fn(this.h.get(a))};
m.getKey=function(a){return fn(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function xn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return wn(a).then(function(d){return gn(d,c)})}
function yn(a,b){this.request=a;this.cursor=b}
function wn(a){return fn(a).then(function(b){return b?new yn(a,b):null})}
m=yn.prototype;m.advance=function(a){this.cursor.advance(a);return wn(this.request)};
m.continue=function(a){this.cursor.continue(a);return wn(this.request)};
m.delete=function(){return fn(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return fn(this.cursor.update(a))};function zn(a,b,c){return new Promise(function(d,e){function f(){t||(t=new jn(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Vd,k=c.blocking,l=c.Ye,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&Gm("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:Im(a)});var x=f(),y=new on(g.transaction);
n&&n(x,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){Gm("IDB_UNEXPECTEDLY_CLOSED",{dbName:Im(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function An(a,b,c){c=void 0===c?{}:c;return zn(a,b,c)}
function Bn(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Vd)&&c.addEventListener("blocked",function(){e()}),g.yield(en(c),4);
if(2!=g.h)return za(g,0);f=Aa(g);throw Vm(f,a,"",-1);})}
;function Cn(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
Cn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return An(a,b,c)};
Cn.prototype.delete=function(a){a=void 0===a?{}:a;return Bn(this.name,a)};
function Dn(a,b){return new Rm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function En(a,b){if(!b)throw Wm("openWithToken",Im(a.name));return a.open()}
Cn.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,x;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",ya(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,H=[],I=v(Object.keys(z.Eb)),L=I.next();!L.done;L=I.next()){L=L.value;var P=z.Eb[L],J=void 0===P.Ge?Number.MAX_VALUE:P.Ge;!(h.h.version>=P.Lb)||h.h.version>=J||h.h.objectStoreNames.contains(L)||H.push(L)}k=H;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Eb);n=h.objectStoreNames();
if(c.m<jl("ytidb_reopen_db_retries",0))return c.m++,h.close(),Fm(new Rm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<jl("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return Fm(new Rm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new Sm(n,l);case 5:return y.return(h);case 2:p=Aa(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,Dn(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Vm(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Dn(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ye:b,upgrade:this.options.upgrade};return this.h=d=a()};var Fn=new Cn("YtIdbMeta",{Eb:{databases:{Lb:1}},upgrade:function(a,b){b(1)&&ln(a,"databases",{keyPath:"actualName"})}});
function Gn(a,b){var c;return A(function(d){if(1==d.h)return d.yield(En(Fn,b),2);c=d.i;return d.return(kn(c,["databases"],{fa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return fn(f.h.put(a,void 0)).then(function(){})})}))})}
function Hn(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(En(Fn,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function In(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(En(Fn,b),2)):3!=e.h?(d=e.i,e.yield(kn(d,["databases"],{fa:!0,mode:"readonly"},function(f){c.length=0;return un(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Jn(a){return In(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Kn(a,b,c){return In(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Ln(a){var b,c;return A(function(d){if(1==d.h)return b=nm("YtIdbMeta hasAnyMeta other"),d.yield(In(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Mn,Nn=new function(){}(new function(){});
function On(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=xm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Jm)f=/WebKit\/([0-9]+)/.exec(Tb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Tb()),f=!(f&&602<=parseInt(f[1],10)));if(f||fd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Gn(d,Nn),4);case 4:return e.yield(Hn("yt-idb-test-do-not-use",Nn),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Pn(){if(void 0!==Mn)return Mn;Am=!0;return Mn=On().then(function(a){Am=!1;var b;if(null!=(b=wm())&&b.h){var c;b={hasSucceededOnce:(null==(c=xm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=wm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Qn(){return E("ytglobal.idbToken_")||void 0}
function Rn(){var a=Qn();return a?Promise.resolve(a):Pn().then(function(b){(b=b?Nn:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Sn=0;function Tn(a,b){Sn||(Sn=qi.la(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Rn(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(Kn(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(Bn(f.actualName),7);case 7:return h.yield(Hn(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),Fm(g),d=!1;case 4:qi.Ea(Sn),Sn=0,d&&Tn(a,b),h.h=0}})}))}
function Un(){var a;return A(function(b){return 1==b.h?b.yield(Rn(),2):(a=b.i)?b.return(Ln(a)):b.return(!1)})}
new Lh;function Vn(a){if(!mm())throw a=new Rm("AUTH_INVALID",{dbName:a}),Fm(a),a;var b=nm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Wn(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Rn(),2);case 2:g=n.i;if(!g)throw h=Wm("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Fm(h),h;Hm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Vn(a);ya(n,3);return n.yield(Gn(k,g),5);case 5:return n.yield(An(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Aa(n),ya(n,7),n.yield(Hn(k.actualName,
g),9);case 9:za(n,8);break;case 7:Aa(n);case 8:throw l;}})}
function Xn(a,b,c){c=void 0===c?{}:c;return Wn(a,b,!1,c)}
function Yn(a,b,c){c=void 0===c?{}:c;return Wn(a,b,!0,c)}
function Zn(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Rn(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Hm(a);d=Vn(a);return e.yield(Bn(d.actualName,b),3)}return e.yield(Hn(d.actualName,c),0)})}
function $n(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(Bn(d.actualName,b),2):e.yield(Hn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ao(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Rn(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Hm("LogsDatabaseV2");return d.yield(Jn(b),3)}c=d.i;return d.yield($n(c,a,b),0)})}
function bo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Rn(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Hm(a);return d.yield(Bn(a,b),3)}return d.yield(Hn(a,c),0)})}
;function co(a,b){Cn.call(this,a,b);this.options=b;Hm(a)}
w(co,Cn);function eo(a,b){var c;return function(){c||(c=new co(a,b));return c}}
co.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.pc?Yn:Xn)(a,b,Object.assign({},c))};
co.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.pc?bo:Zn)(this.name,a)};
function fo(a,b){return eo(a,b)}
;var go={},ho=fo("ytGcfConfig",{Eb:(go.coldConfigStore={Lb:1},go.hotConfigStore={Lb:1},go),pc:!1,upgrade:function(a,b){b(1)&&(sn(ln(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),sn(ln(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function io(a){return En(ho(),a)}
function jo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:T()},g.yield(io(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(nn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function ko(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:T()},h.yield(io(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(nn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function lo(a){var b,c;return A(function(d){return 1==d.h?d.yield(io(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(kn(b,["coldConfigStore"],{mode:"readwrite",fa:!0},function(e){return xn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function mo(a){var b,c;return A(function(d){return 1==d.h?d.yield(io(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(kn(b,["hotConfigStore"],{mode:"readwrite",fa:!0},function(e){return xn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function no(){G.apply(this,arguments);this.i=[]}
w(no,G);no.prototype.M=function(){this.i.length=0;G.prototype.M.call(this)};function oo(){this.h=0;this.i=new no}
function po(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("update_log_event_config")){g.v(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;D("yt.gcf.config.hotHashData",a.hotHashData||null);d=Qn();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(mo(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(jo(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.i),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function qo(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!S("update_log_event_config"))return h.v(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Qn())?c?h.v(4):h.yield(lo(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(ko(c,b,g,d),0)})}
;function ro(){return"INNERTUBE_API_KEY"in Pk&&"INNERTUBE_API_VERSION"in Pk}
function so(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),oe:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),pd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Nf:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),qe:R("INNERTUBE_CONTEXT_HL"),pe:R("INNERTUBE_CONTEXT_GL"),re:R("INNERTUBE_HOST_OVERRIDE")||"",te:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),se:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function to(a){var b={client:{hl:a.qe,gl:a.pe,clientName:a.pd,clientVersion:a.innertubeContextClientVersion,configInfo:a.oe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=kl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.pd;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Ul()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=jm())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&(a=km())&&
b&&(b.client.effectiveConnectionType=a);S("start_sending_config_hash")&&(oo.h||(a=new oo,oo.h=a),a=oo.h,f=T()-a.h,0!==a.h&&f<jl("send_config_hash_timer")?a=void 0:(f=E("yt.gcf.config.coldConfigData"),e=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData"),f&&e&&d&&(a.h=T()),a={coldConfigData:f,hotHashData:e,coldHashData:d}),e=a)&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=
f,b.client.configInfo.hotHashData=e));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(cl(R("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=
h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function uo(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Hf:(a=Rl(Ql()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function vo(a,b){this.version=a;this.args=b}
vo.prototype.serialize=function(){return{version:this.version,args:this.args}};function wo(a,b){this.topic=a;this.h=b}
wo.prototype.toString=function(){return this.topic};var xo=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Jb;M.prototype.publish=M.prototype.cb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",xo);var yo=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",yo);var zo=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",zo);var Ao=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Ao);
D("ytPubsub2Pubsub2SkipSubKey",null);function Bo(a,b){var c=Co();c&&c.publish.call(c,a.toString(),a,b)}
function Do(a){var b=Eo,c=Co();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(yo[d])try{if(f&&b instanceof wo&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var l=new h;h.Xa=l.version}var n=h.Xa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var x=Array(r);for(k=0;k<r;k++)x[k]=t[k];var y=x}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Vk(z)}},Ao[b.toString()]?E("yt.scheduler.instance")?qi.la(g):ol(g,0):g())});
yo[d]=!0;zo[b.toString()]||(zo[b.toString()]=[]);zo[b.toString()].push(d);return d}
function Fo(){var a=Go,b=Do(function(c){a.apply(void 0,arguments);Ho(b)});
return b}
function Ho(a){var b=Co();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete yo[c]}))}
function Co(){return E("ytPubsub2Pubsub2Instance")}
;function Io(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Bo("meta_logging_csi_event",{timerName:a,dg:b})}
;var Jo=jl("max_body_size_to_compress",5E5),Ko=jl("min_body_size_to_compress",500),Lo=!0,Mo=0,No=0,Oo=jl("compression_performance_threshold_lr",250),Po=jl("slow_compressions_before_abandon_count",4);
function Qo(a,b,c,d){var e=T(),f={startTime:e,ticks:{},infos:{}};if(Lo)try{var g=Ro(b);if(null==g||!(g>Jo||g<Ko)){var h=pk(li(b)),k=T();f.ticks.gelc=k;No++;S("disable_compression_due_to_performance_degredation")&&k-e>=Oo&&(Mo++,S("abandon_compression_after_N_slow_zips")?No===jl("compression_disable_point")&&Mo>Po&&(Lo=!1):Lo=!1);So(f);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0}d(a,c)}catch(l){Wk(l),d(a,c)}else d(a,c)}
function To(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=T(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Lo&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Ro(g);if(null!=h&&(h>Jo||h<Ko))return a;f=pk(li(g),b?{level:1}:void 0);var k=T();e.ticks.gelc=k;if(b){No++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Oo)if(Mo++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=Mo/No;var l=Po/jl("compression_disable_point");0<No&&0===No%jl("compression_disable_point")&&b>=l&&(Lo=!1)}else Lo=!1;So(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Wk(n),a}}else return a}
function Ro(a){try{return(new Blob(a.split(""))).size}catch(b){return Wk(b),null}}
function So(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||Io("gel_compression",a,{sampleRate:.1})}
;function Uo(a){a=Object.assign({},a);delete a.Authorization;var b=Jg();if(b){var c=new wi;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=af(c.digest(),3)}return a}
;var Vo;function Wo(){Vo||(Vo=new um("yt.innertube"));return Vo}
function Xo(a,b,c,d){if(d)return null;d=Wo().get("nextId",!0)||1;var e=Wo().get("requests",!0)||{};e[d]={method:a,request:b,authState:Uo(c),requestTime:Math.round(T())};Wo().set("nextId",d+1,86400,!0);Wo().set("requests",e,86400,!0);return d}
function Yo(a){var b=Wo().get("requests",!0)||{};delete b[a];Wo().set("requests",b,86400,!0)}
function Zo(a){var b=Wo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Uo(uo(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),$o(a,d.method,e,{}));delete b[c]}}Wo().set("requests",b,86400,!0)}}
;function ap(a){this.Yb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.xb=function(){};
this.now=Date.now;this.Ob=!1;var b;this.Hd=null!=(b=a.Hd)?b:100;var c;this.Bd=null!=(c=a.Bd)?c:1;var d;this.zd=null!=(d=a.zd)?d:2592E6;var e;this.xd=null!=(e=a.xd)?e:12E4;var f;this.Ad=null!=(f=a.Ad)?f:5E3;var g;this.R=null!=(g=a.R)?g:void 0;this.ec=!!a.ec;var h;this.cc=null!=(h=a.cc)?h:.1;var k;this.lc=null!=(k=a.lc)?k:10;a.handleError&&(this.handleError=a.handleError);a.xb&&(this.xb=a.xb);a.Ob&&(this.Ob=a.Ob);a.Yb&&(this.Yb=a.Yb);this.S=a.S;this.Ba=a.Ba;this.Z=a.Z;this.Y=a.Y;this.Pa=a.Pa;this.Nc=
a.Nc;this.Mc=a.Mc;bp(this)&&(!this.S||this.S("networkless_logging"))&&cp(this)}
function cp(a){bp(a)&&!a.Ob&&(a.h=!0,a.ec&&Math.random()<=a.cc&&a.Z.Xd(a.R),dp(a),a.Y.ra()&&a.Sb(),a.Y.listen(a.Nc,a.Sb.bind(a)),a.Y.listen(a.Mc,a.cd.bind(a)))}
m=ap.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(bp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Z.set(d,this.R).then(function(e){d.id=e;c.Y.ra()&&ep(c,d)}).catch(function(e){ep(c,d);
fp(c,e)})}else this.Pa(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(bp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.S&&this.S("nwl_skip_retry")&&(e.skipRetry=c);if(this.Y.ra()||this.S&&this.S("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.Z.set(e,d.R).catch(function(l){fp(d,l)}),2);
f(g,h);k.h=0})}}this.Pa(a,b,e.skipRetry)}else this.Z.set(e,this.R).catch(function(g){d.Pa(a,b,e.skipRetry);
fp(d,g)})}else this.Pa(a,b,this.S&&this.S("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(bp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.Z.tb(d.id,c.R):e=!0;c.Y.hb&&c.S&&c.S("vss_network_hint")&&c.Y.hb(!0);f(g,h)};
this.Pa(d.url,d.options);this.Z.set(d,this.R).then(function(g){d.id=g;e&&c.Z.tb(d.id,c.R)}).catch(function(g){fp(c,g)})}else this.Pa(a,b)};
m.Sb=function(){var a=this;if(!bp(this))throw Wm("throttleSend");this.i||(this.i=this.Ba.la(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.Z.md("NEW",a.R),2);if(3!=c.h)return b=c.i,b?c.yield(ep(a,b),3):(a.cd(),c.return());a.i&&(a.i=0,a.Sb());c.h=0})},this.Hd))};
m.cd=function(){this.Ba.Ea(this.i);this.i=0};
function ep(a,b){var c,d;return A(function(e){switch(e.h){case 1:if(!bp(a))throw c=Wm("immediateSend"),c;if(void 0===b.id){e.v(2);break}return e.yield(a.Z.we(b.id,a.R),3);case 3:(d=e.i)||a.xb(Error("The request cannot be found in the database."));case 2:if(gp(a,b,a.zd)){e.v(4);break}a.xb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return e.yield(a.Z.tb(b.id,a.R),5);case 5:return e.return();case 4:b.skipRetry||(b=hp(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return e.yield(a.Z.tb(b.id,a.R),8);case 8:a.Pa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function hp(a,b){if(!bp(a))throw Wm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=ip(f);(h=jp(f))&&a.S&&a.S("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.S&&a.S("nwl_consider_error_code")&&g||a.S&&!a.S("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.lc)){n.v(2);break}if(!a.Y.oc){n.v(3);break}return n.yield(a.Y.oc(),3);case 3:if(a.Y.ra()){n.v(2);break}c(e,f);if(!a.S||!a.S("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.Z.Qc(b.id,a.R,!1),6);case 6:return n.return();case 2:if(a.S&&a.S("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.lc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.Bd?n.yield(a.Z.Qc(b.id,a.R,!0,h?!1:void 0),12):n.yield(a.Z.tb(b.id,a.R),8);case 12:a.Ba.la(function(){a.Y.ra()&&a.Sb()},a.Ad);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.Z.tb(b.id,a.R),2);a.Y.hb&&a.S&&a.S("vss_network_hint")&&a.Y.hb(!0);d(e,f);h.h=0})};
return b}
function gp(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function dp(a){if(!bp(a))throw Wm("retryQueuedRequests");a.Z.md("QUEUED",a.R).then(function(b){b&&!gp(a,b,a.xd)?a.Ba.la(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.Z.Qc(b.id,a.R),2);dp(a);c.h=0})}):a.Y.ra()&&a.Sb()})}
function fp(a,b){a.Nd&&!a.Y.ra()?a.Nd(b):a.handleError(b)}
function bp(a){return!!a.R||a.Yb}
function ip(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function jp(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var kp;
function lp(){if(kp)return kp();var a={};kp=fo("LogsDatabaseV2",{Eb:(a.LogsRequestsStore={Lb:2},a),pc:!1,upgrade:function(b,c,d){c(2)&&ln(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),sn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return kp()}
;function mp(a){return En(lp(),a)}
function np(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(mp(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(nn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=T();op(c);return g.return(f)})}
function pp(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(mp(b),2);if(3!=l.h)return d=l.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(kn(d,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(n){return xn(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=T();op(c);return l.return(k)})}
function qp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(mp(b),2);c=d.i;return d.return(kn(c,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",fn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function rp(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(mp(b),2);e=f.i;return f.return(kn(e,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),fn(h.h.put(k,void 0)).then(function(){return k})):$m.resolve(void 0)})}))})}
function sp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(mp(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function tp(a){var b,c;return A(function(d){if(1==d.h)return d.yield(mp(a),2);b=d.i;c=T()-2592E6;return d.yield(kn(b,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(e){return un(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function up(){A(function(a){return a.yield(ao(),0)})}
function op(a){S("nwl_csi_killswitch")||Io("networkless_performance",a,{sampleRate:1})}
;var vp={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480};var wp={},xp=fo("ServiceWorkerLogsDatabase",{Eb:(wp.SWHealthLog={Lb:1},wp),pc:!0,upgrade:function(a,b){b(1)&&sn(ln(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function yp(a){return En(xp(),a)}
function zp(a){var b,c;A(function(d){if(1==d.h)return d.yield(yp(a),2);b=d.i;c=T()-2592E6;return d.yield(kn(b,["SWHealthLog"],{mode:"readwrite",fa:!0},function(e){return un(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ap(a){var b;return A(function(c){if(1==c.h)return c.yield(yp(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Bp={},Cp=0;function Dp(a){var b=new Image,c=""+Cp++;Bp[c]=b;b.onload=b.onerror=function(){delete Bp[c]};
b.src=a}
;function Ep(){this.h=new Map;this.i=!1}
function Fp(){if(!Ep.h){var a=E("yt.networkRequestMonitor.instance")||new Ep;D("yt.networkRequestMonitor.instance",a);Ep.h=a}return Ep.h}
Ep.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Ep.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Ep.prototype.removeParams=function(a){return a.split("?")[0]};
Ep.prototype.removeParams=Ep.prototype.removeParams;Ep.prototype.isEndpointCFR=Ep.prototype.isEndpointCFR;Ep.prototype.requestComplete=Ep.prototype.requestComplete;Ep.getInstance=Fp;var Gp;function Hp(){Gp||(Gp=new um("yt.offline"));return Gp}
function Ip(a){if(S("offline_error_handling")){var b=Hp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Hp().set("errors",b,2592E3,!0)}}
;function Jp(){Qd.call(this);var a=this;this.j=!1;this.i=pi();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=Hp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new lm(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Vk(d)}Hp().set("errors",{},2592E3,!0)}}})}
w(Jp,Qd);function Kp(){if(!Jp.h){var a=E("yt.networkStatusManager.instance")||new Jp;D("yt.networkStatusManager.instance",a);Jp.h=a}return Jp.h}
m=Jp.prototype;m.ra=function(){return this.i.ra()};
m.hb=function(a){this.i.i=a};
m.le=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.be=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.oc=function(a){a=ni(this.i,a);a.then(function(b){S("use_cfr_monitor")&&Fp().requestComplete("generate_204",b)});
return a};
Jp.prototype.sendNetworkCheckRequest=Jp.prototype.oc;Jp.prototype.listen=Jp.prototype.listen;Jp.prototype.enableErrorFlushing=Jp.prototype.be;Jp.prototype.getWindowStatus=Jp.prototype.le;Jp.prototype.networkStatusHint=Jp.prototype.hb;Jp.prototype.isNetworkAvailable=Jp.prototype.ra;Jp.getInstance=Kp;function Lp(a){a=void 0===a?{}:a;Qd.call(this);var b=this;this.i=this.s=0;this.j=Kp();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.nc?(this.nc=a.nc,c("networkstatus-online",function(){Mp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Mp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Rd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Rd(b,"publicytnetworkstatus-offline")})))}
w(Lp,Qd);Lp.prototype.ra=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Lp.prototype.hb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Lp.prototype.oc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Fp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.hb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ra())})):c?d.return(c(a)):d.return(!0)})};
function Mp(a,b){a.nc?a.i?(qi.Ea(a.s),a.s=qi.la(function(){a.m!==b&&(Rd(a,b),a.m=b,a.i=T())},a.nc-(T()-a.i))):(Rd(a,b),a.m=b,a.i=T()):Rd(a,b)}
;var Np;function Op(){var a=ap.call;Np||(Np=new Lp({Sf:!0,Lf:!0}));a.call(ap,this,{Z:{Xd:tp,tb:sp,md:pp,we:qp,Qc:rp,set:np},Y:Np,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Wk(new lm(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Vk(b)},
xb:Wk,Pa:Pp,now:T,Nd:Ip,Ba:tm(),Nc:"publicytnetworkstatus-online",Mc:"publicytnetworkstatus-offline",ec:!0,cc:.1,lc:jl("potential_esf_error_limit",10),S:S,Ob:!(mm()&&Qp())});this.j=new Lh;S("networkless_immediately_drop_all_requests")&&up();bo("LogsDatabaseV2")}
w(Op,ap);function Rp(){var a=E("yt.networklessRequestController.instance");a||(a=new Op,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&Rn().then(function(b){a.R=b;cp(a);a.j.resolve();a.ec&&Math.random()<=a.cc&&a.R&&zp(a.R);S("networkless_immediately_drop_sw_health_store")&&Sp(a)}));
return a}
Op.prototype.writeThenSend=function(a,b){b||(b={});mm()||(this.h=!1);ap.prototype.writeThenSend.call(this,a,b)};
Op.prototype.sendThenWrite=function(a,b,c){b||(b={});mm()||(this.h=!1);ap.prototype.sendThenWrite.call(this,a,b,c)};
Op.prototype.sendAndWrite=function(a,b){b||(b={});mm()||(this.h=!1);ap.prototype.sendAndWrite.call(this,a,b)};
Op.prototype.awaitInitialization=function(){return this.j.promise};
function Sp(a){var b;A(function(c){if(!a.R)throw b=Wm("clearSWHealthLogsDb"),b;return c.return(Ap(a.R).catch(function(d){a.handleError(d)}))})}
function Pp(a,b,c){b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Tp(a,b);if(S("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)xl(a,void 0,"POST",e);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))xl(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new $a({url:a});if(h.j&&h.i||h.l){var k=rc(sc(5,a)),l;if(!(l=!k||!k.endsWith("/aclk"))){var n=a.search(Ec),p=Dc(a,0,"ri",n);if(0>p)var t=null;else{var r=a.indexOf("&",p);if(0>r||r>n)r=n;t=decodeURIComponent(a.slice(p+3,-1!==r?r:0).replace(/\+/g," "))}l="1"!==t}var x=!l;break b}}catch(z){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(z){}y=!1}c=y?!0:!1}else c=!1;c||Dp(a)}}else b.compress?
b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Qo(a,b.postBody,b,ul)):Qo(a,JSON.stringify(b.postParams),b,Cl):ul(a,b)}
function Tp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Fp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Fp().requestComplete(a,!0);d(e,f)}}
function Qp(){return"www.youtube-nocookie.com"!==tc(document.location.toString())}
;var Up=!1,Vp=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Up};D("ytNetworklessLoggingInitializationOptions",Vp);function Wp(){var a;A(function(b){if(1==b.h)return b.yield(Rn(),2);a=b.i;if(!a||!mm()&&!S("nwl_init_require_datasync_id_killswitch")||!Qp())return b.v(0);Up=!0;Vp.isNwlInitialized=Up;return b.yield(Rp().awaitInitialization(),0)})}
;function Xp(a){var b=this;this.config_=null;a?this.config_=a:ro()&&(this.config_=so());pm(function(){Zo(b)},5E3)}
Xp.prototype.isReady=function(){!this.config_&&ro()&&(this.config_=so());return!!this.config_};
function $o(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Xo(b,c,l,k)),y)){var z=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(L,P){Yo(y);z(L,P)};
c.onFetchSuccess=function(L,P){Yo(y);H(L,P)}}try{if(x&&d.retry&&!d.sd.bypassNetworkless)g.method="POST",d.sd.writeThenSend?Rp().writeThenSend(r,g):Rp().sendAndWrite(r,g);
else if(d.compress)if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));Qo(r,I,g,ul)}else Qo(r,JSON.stringify(g.postParams),g,Cl);else S("web_all_payloads_via_jspb")?ul(r,g):Cl(r,g)}catch(L){if("InvalidAccessError"==L.name)y&&(Yo(y),y=0),Wk(Error("An extension is blocking network request."));else throw L;}y&&pm(function(){Zo(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Wk(new lm("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new lm("innertube xhrclient not ready",b,c,d);Vk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.re)&&(h=f);var k=a.config_.te||!1,l=uo(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.se&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=el(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Vp.isNwlInitialized:Up)?Pn().then(function(x){e(x)}):e(!1)}
;var Yp=0,Zp=hd?"webkit":gd?"moz":ed?"ms":dd?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Yp});var $p={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function aq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in $p||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function bq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
aq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
aq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
aq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",mb);var cq=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",cq);
function dq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var eq=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function fq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=dq(a,b,c,d);if(e)return e;e=++cq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new aq(h);if(!$d(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new aq(h);
h.currentTarget=a;return c.call(a,h)};
g=Uk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),eq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d];return e}
function gq(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?eq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
;function hq(a){this.P=a;this.i=null;this.m=0;this.A=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.X=fq(window,"mousemove",Va(this.aa,this));a=Va(this.W,this);"function"===typeof a&&(a=Uk(a));this.da=window.setInterval(a,25)}
Xa(hq,G);hq.prototype.aa=function(a){void 0===a.h&&bq(a);var b=a.h;void 0===a.i&&bq(a);this.i=new Wd(b,a.i)};
hq.prototype.W=function(){if(this.i){var a=T();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.P();this.s=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
hq.prototype.M=function(){window.clearInterval(this.da);gq(this.X)};var iq=new Set([174,173,175]),jq={};
function kq(a){var b=void 0===a?{}:a;a=void 0===b.De?!1:b.De;b=void 0===b.ce?!0:b.ce;if(null==E("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&lq();fq(document,"keydown",lq);fq(document,"keyup",lq);fq(document,"mousedown",lq);fq(document,"mouseup",lq);a?fq(window,"touchmove",function(){mq("touchmove",200)},{passive:!0}):(fq(window,"resize",function(){mq("resize",200)}),b&&fq(window,"scroll",function(){mq("scroll",
200)}));
new hq(function(){mq("mouse",100)});
fq(document,"touchstart",lq,{passive:!0});fq(document,"touchend",lq,{passive:!0})}}
function mq(a,b){jq[a]||(jq[a]=!0,qi.la(function(){lq();jq[a]=!1},b))}
function lq(a){var b;if(null!=(b=E("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!iq.has(null==a?void 0:a.keyCode))null==E("_lact",window)&&kq(),a=Date.now(),D("_lact",a,window),-1==E("_fact",window)&&D("_fact",a,window),(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function nq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var oq=C.ytPubsubPubsubInstance||new M,sq=C.ytPubsubPubsubSubscribedKeys||{},tq=C.ytPubsubPubsubTopicToKeys||{},uq=C.ytPubsubPubsubIsSynchronous||{};function vq(a,b){var c=wq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){sq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{uq[a]?f():ol(f,0)}catch(g){Vk(g)}},void 0);
sq[d]=!0;tq[a]||(tq[a]=[]);tq[a].push(d);return d}return 0}
function xq(a){var b=wq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete sq[c]}))}
function yq(a,b){var c=wq();c&&c.publish.apply(c,arguments)}
function zq(a){var b=wq();if(b)if(b.clear(a),a)Aq(a);else for(var c in tq)Aq(c)}
function wq(){return C.ytPubsubPubsubInstance}
function Aq(a){tq[a]&&(a=tq[a],db(a,function(b){sq[b]&&delete sq[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Jb;M.prototype.publish=M.prototype.cb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",oq);D("ytPubsubPubsubTopicToKeys",tq);D("ytPubsubPubsubIsSynchronous",uq);D("ytPubsubPubsubSubscribedKeys",sq);var Bq=Symbol("injectionDeps");function Cq(a){this.name=a}
Cq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Dq(a){this.key=a}
function Eq(){this.h=new Map;this.i=new Map}
Eq.prototype.resolve=function(a){return a instanceof Dq?Fq(this,a.key,[],!0):Fq(this,a,[])};
function Fq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Kd)var e=d.Kd;else if(d.df)e=d[Bq]?Gq(a,d[Bq],c):[],e=d.df.apply(d,ja(e));else if(d.Jd){e=d.Jd;var f=e[Bq]?Gq(a,e[Bq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ag||a.i.set(b,e);return e}
function Gq(a,b,c){return b?b.map(function(d){return d instanceof Dq?Fq(a,d.key,c,!0):Fq(a,d,c)}):[]}
;var Hq;function Iq(){Hq||(Hq=new Eq);return Hq}
;function Jq(){this.store={};this.h={}}
Jq.prototype.storePayload=function(a,b){a=Kq(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Jq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Lq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ja(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ja(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ja(this.smartExtractMatchingEntries(a))));return c};
Jq.prototype.extractMatchingEntries=function(a){a=Lq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
Jq.prototype.getSequenceCount=function(a){a=Lq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Lq(a,b){var c=Kq(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Kq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Mq(b.auth,g[0])){var h=b.isJspb;Mq(void 0===h?"undefined":h?"true":"false",g[1])&&Mq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Mq(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Mq(a,b){return void 0===a||"undefined"===a?!0:a===b}
Jq.prototype.getSequenceCount=Jq.prototype.getSequenceCount;Jq.prototype.extractMatchingEntries=Jq.prototype.extractMatchingEntries;Jq.prototype.smartExtractMatchingEntries=Jq.prototype.smartExtractMatchingEntries;Jq.prototype.storePayload=Jq.prototype.storePayload;function Kq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function U(a,b){if(a)return a[b.name]}
;var Nq=jl("initial_gel_batch_timeout",2E3),Oq=jl("gel_queue_timeout_max_ms",6E4),Pq=Math.pow(2,16)-1,Qq=void 0;function Rq(){this.j=this.h=this.i=0}
var Sq=new Rq,Tq=new Rq,Uq=new Rq,Vq=new Rq,Wq,Xq=!0,Yq=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Yq);var Zq={};function $q(){var a=E("yt.logging.ims");a||(a=new Jq,D("yt.logging.ims",a));return a}
function ar(a,b){if("log_event"===a.endpoint){var c=br(a);a:{var d=Object.keys(a.payload);d=v(d);for(var e=d.next();!e.done;e=d.next())if(e=e.value,vp[e]){d=e;break a}d=void 0}var f;a:if(S("enable_web_tiered_gel")){d=vp[d||""];var g;if(null==Iq().resolve(new Dq(oo)))var h=void 0;else e=null!=(h=E("yt.gcf.config.hotConfigGroup"))?h:null,h=null==e?void 0:null==(f=e.loggingHotConfig)?void 0:null==(g=f.eventLoggingConfig)?void 0:g.payloadPolicies;if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===
d){f=cr(f[g].tier);break a}f=200}else f=void 0;400===f?dr(a,b):(Zq[c]=!0,f={cttAuthInfo:c,isJspb:!1,tier:f},$q().storePayload(f,a.payload),er(b,c,f))}}
function er(a,b,c){function d(){fr({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,e,c.tier)}
var e=!1;e=void 0===e?!1:e;a&&(Qq=new a);a=jl("tvhtml5_logging_max_batch_ads_fork")||jl("web_logging_max_batch")||100;var f=T(),g=gr(e,c.tier),h=g.j,k=0;c&&(k=$q().getSequenceCount(c));1E3<=k&&S("web_logging_max_batch_hard_limit")?d():k>=a?Wq||(Wq=hr(function(){d();Wq=void 0},0)):10<=f-h&&(ir(e,c.tier),g.j=f)}
function dr(a,b){if("log_event"===a.endpoint){var c=br(a),d=new Map;d.set(c,[a.payload]);b&&(Qq=new b);return new me(function(e,f){Qq&&Qq.isReady()?jr(d,Qq,e,f,{bypassNetworkless:!0},!0):e()})}}
function br(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Yq[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function fr(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new me(function(e,f){var g=gr(c,d);kr(g.i);kr(g.h);g.h=0;Qq&&Qq.isReady()?void 0===d&&S("enable_web_tiered_gel")?lr(e,f,a,b,c,300):lr(e,f,a,b,c,d):(ir(c,d),e())})}
function lr(a,b,c,d,e,f){var g=Qq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;var h=new Map;var k={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=S("enable_web_tiered_gel")?$q().smartExtractMatchingEntries({keys:[k,e],sizeLimit:1E3}):$q().extractMatchingEntries(e),h.set(d,f);else for(d=v(Object.keys(Zq)),k=d.next();!k.done;k=d.next())k=k.value,e=S("enable_web_tiered_gel")?$q().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:k,tier:f},{isJspb:!1,cttAuthInfo:k}],
sizeLimit:1E3}):$q().extractMatchingEntries({isJspb:!1,cttAuthInfo:k}),0<e.length&&h.set(k,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Zq[k];jr(h,g,a,b,c)}
function ir(a,b){a=void 0===a?!1:a;b=void 0===b?200:b;var c=gr(a,b),d=c===Vq||c===Uq?5E3:Oq;S("web_gel_timeout_cap")&&!c.h&&(d=hr(function(){fr({writeThenSend:!0},void 0,a,b)},d),c.h=d);
kr(c.i);d=R("LOGGING_BATCH_TIMEOUT",jl("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Xq&&(d=Nq);d=hr(function(){fr({writeThenSend:!0},void 0,a,b)},d);
c.i=d}
function jr(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(T()),h=a.size;a=v(a);for(var k=a.next(),l={};!k.done;l={Tb:l.Tb,Za:l.Za,Hb:l.Hb,Vb:l.Vb,Ub:l.Ub},k=a.next()){var n=v(k.value);k=n.next().value;n=n.next().value;l.Za=sb({context:to(b.config_||so())});if(!Oa(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}l.Za.events=n;(n=Yq[k])&&mr(l.Za,k,n);delete Yq[k];l.Hb="visitorOnlyApprovedKey"===k;nr(l.Za,g,l.Hb);S("always_send_and_write")&&(e.writeThenSend=!1);l.Vb=function(p){S("update_log_event_config")&&
qi.la(function(){return A(function(t){return t.yield(or(p),0)})});
h--;h||c()};
l.Tb=0;l.Ub=function(p){return function(){p.Tb++;if(e.bypassNetworkless&&1===p.Tb)try{$o(b,"log_event",p.Za,pr({writeThenSend:!0},p.Hb,p.Vb,p.Ub,f)),Xq=!1}catch(t){Vk(t),d()}h--;h||c()}}(l);
try{$o(b,"log_event",l.Za,pr(e,l.Hb,l.Vb,l.Ub,f)),Xq=!1}catch(p){Vk(p),d()}}}
function pr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,sd:a,dangerousLogToVisitorSession:b,If:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};qr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function nr(a,b,c){qr()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Pq/2)),c++,c>Pq&&(c=1),Qk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function mr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function qr(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function hr(a,b){return S("transport_use_scheduler")?pm(a,b):ol(a,b)}
function kr(a){S("transport_use_scheduler")?qi.Ea(a):window.clearTimeout(a)}
function or(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=U(d,tk),g=null==(f=d)?void 0:f.hotHashData,h=U(d,sk),l=null==(k=d)?void 0:k.coldHashData,(n=Iq().resolve(new Dq(oo)))?g?e?p.yield(po(n,g,e),2):p.yield(po(n,g),2):p.v(2):p.return()):l?h?p.yield(qo(n,l,h),0):p.yield(qo(n,l),0):p.v(0)})}
function gr(a,b){b=void 0===b?200:b;return a?300===b?Vq:Tq:300===b?Uq:Sq}
function cr(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var rr=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",rr);
function sr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=nq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};S("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,rr[b]=b in rr?rr[b]+1:0,a.sequence={index:rr[b],groupKey:b},d.endOfSequence&&delete rr[d.sequenceGroup]);(d.sendIsolatedPayload?dr:ar)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Em(a,b,c){c=void 0===c?{}:c;var d=Xp;R("ytLoggingEventsDefaultDisabled",!1)&&Xp===Xp&&(d=null);S("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=nq(),c.timestamp=T());sr(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var tr=new Set,ur=0,vr=0,wr=0,xr=[],yr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Dm(a){zr(a)}
function Ar(a){zr(a,"WARNING")}
function Br(a){a instanceof Error?zr(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new lm(a),a.name="RejectedPromiseError",Ar(a))}
function zr(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=ur))){d=xr;var k=Qc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=Ml(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var x="params."+t,y=Ol(r[t]);c[x]=y;p+=x.length+y.length;if(500<p)break}}else c.params=Ol(r)}if(d.length)for(t=0;t<d.length&&!(p=Ml(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Il();c=v(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.Tf)){a=d.weight;break a}a=v(a.Ra);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(Dl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.kc[t.name])for(e=v(c.kc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Kc(f);break}t.params||(t.params={});a=Il();t.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Ra.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));zb("sample").constructor!==xb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!tr.has(t.message)){if(g&&S("web_enable_error_204"))Cr(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Jl.cb("handleError",t),S("record_app_crashed_web")&&0===wr&&1===t.sampleWeight&&(wr++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),Em("appCrashed",g)),vr++):"WARNING"===b&&Jl.cb("handleWarning",t);if(S("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(yr);for(c=a.next();!c.done;c=a.next())if(Km(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));e=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Rk("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Em("clientError",h),("ERROR"===g||S("errors_flush_gel_always_killswitch"))&&fr(void 0,void 0,!1))}S("suppress_error_204_logging")||Cr(b,t)}try{tr.add(t.message)}catch(z){}ur++}}}
function Cr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}ul(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Dr(){this.register=new Map}
function Er(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Vf("ABORTED")}
Dr.prototype.clear=function(){Er(this);this.register.clear()};
var Fr=new Dr;var Gr=Date.now().toString();
function Hr(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Gr)for(a=1,b=0;b<Gr.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Gr.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Ir,Jr=C.ytLoggingDocDocumentNonce_;Jr||(Jr=Hr(),D("ytLoggingDocDocumentNonce_",Jr));Ir=Jr;function Kr(a){this.h=a}
m=Kr.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Ck;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new pf(b,mf):nf||(nf=new pf(null,mf));else if(b.constructor!==pf)if(lf(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new pf(new Uint8Array(b),mf):nf||(nf=new pf(null,mf));else throw Error();K(a,1,b)}else void 0!==this.h.veType&&K(a,2,Lf(this.h.veType)),void 0!==this.h.veCounter&&K(a,6,Lf(this.h.veCounter)),void 0!==this.h.elementIndex&&K(a,3,Lf(this.h.elementIndex)),
this.h.isCounterfactual&&K(a,5,Kf(!0));void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),Yf(a,Ck,7,b));void 0!==this.h.youtubeData&&Yf(a,vk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function Lr(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Mr(a){a=void 0===a?0:a;return S("new_csn_storage_design")?R("client-screen-nonce-store",{})[a]:R(Lr(a))}
function Nr(a,b){b=void 0===b?0:b;if(S("new_csn_storage_design")){var c=R("client-screen-nonce-store");c||(c={},Qk("client-screen-nonce-store",c));c[b]=a}Qk(Lr(b),a)}
function Or(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Pr(a){return R(Or(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",Pr);function Qr(){var a=R("csn-to-ctt-auth-info");a||(a={},Qk("csn-to-ctt-auth-info",a));return a}
function Rr(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function Sr(a){a=Mr(void 0===a?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Sr);function Tr(a,b,c){var d=Qr();(c=Sr(c))&&delete d[c];b&&(d[a]=b)}
function Ur(a){return Qr()[a]}
D("yt_logging_screen.getCttAuthInfo",Ur);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Mr(c)||b!==R(Or(c)))if(Tr(a,d,c),Nr(a,c),Qk(Or(c),b),b=function(){setTimeout(function(){a&&Em("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ir,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Vr=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Vr);function Wr(a){Lk(Vr,arguments)}
;function Xr(){var a=rb(Yr),b;return(new me(function(c,d){a.onSuccess=function(e){nl(e)?c(new Zr(e)):d(new $r("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new $r("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new $r("Request timed out","net.timeout",e))};
b=ul("//web.archive.org/web/20230627204555/https://googleads.g.doubleclick.net/pagead/id",a)})).qc(function(c){c instanceof xe&&b.abort();
return se(c)})}
function $r(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w($r,Za);function Zr(a){this.xhr=a}
;function as(){this.h=0;this.i=null}
as.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:bs(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:cs(a):this};
as.prototype.getValue=function(){return this.i};
as.prototype.isRejected=function(){return 2==this.h};
as.prototype.$goog_Thenable=!0;function cs(a){var b=new as;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function bs(a){var b=new as;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function ds(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:fl(a)?"same-origin":"cors",credentials:fl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function es(){return Hg()||(We||Xe)&&Km("applewebkit")&&!Km("version")&&(!Km("safari")||Km("gsa/"))||jd&&Km("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function gs(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Ak)if(Ak[d]==c.embeddedPlayerMode){b=Ak[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function hs(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof is;this.isTimeout=a instanceof $r&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof xe}
w(hs,Za);hs.prototype.name="BiscottiError";function is(){Za.call(this,"Biscotti ID is missing from server")}
w(is,Za);is.prototype.name="BiscottiMissingError";var Yr={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},js=null;function ks(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!es())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if("1"==pb(a))return Error("Biscotti ID is not available in private embed mode");if(gs(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Jk(){var a=ks();if(void 0!==a)return se(a);js||(js=Xr().then(ls).qc(function(b){return ms(2,b)}));
return js}
function ls(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new is;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new is;a=a.id;Kk(a);js=bs(a);ns(18E5,2);return a}
function ms(a,b){b=new hs(b);Kk("");js=cs(b);0<a&&ns(12E4,a-1);throw b;}
function ns(a,b){ol(function(){Xr().then(ls,function(c){return ms(b,c)}).qc(ab)},a)}
function ps(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Jk()}catch(b){return se(b)}}
;function qs(a){if("1"!=pb(R("PLAYER_VARS",{}))){a&&Ik();try{ps().then(function(){},function(){}),ol(qs,18E5)}catch(b){Vk(b)}}}
;function rs(){var a=bm(),b=em(119),c=1<window.devicePixelRatio;if(document.body&&Ai(document.body,"exp-invert-logo"))if(c&&!Ai(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ai(d,"inverted-hdpi")){var e=yi(d);zi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ai(document.body,"inverted-hdpi")&&Bi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=fm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Zl[b]:(c=d.toString(16),Zl[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Zl)Zl.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Zl[f])));var f=d.join("&");Vl(b,f,63072E3,a.i,c)}}
;var ss=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function ts(){var a=void 0===a?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;rc(sc(5,a));try{var b=dl(a).theme;return ss.get(b)||null}catch(c){}return null}
;function us(){this.h={};if(this.i=Yl()){var a=Wl("CONSISTENCY");a&&vs(this,{encryptedTokenJarContents:a})}}
us.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Ma.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];vs(this,a)}};
function vs(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Vl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var ws=window.location.hostname.split(".").slice(-2).join(".");function xs(){var a=R("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===R("INNERTUBE_CLIENT_NAME")&&(this.h=ys(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var zs;function As(){zs=E("yt.clientLocationService.instance");zs||(zs=new xs,D("yt.clientLocationService.instance",zs));return zs}
m=xs.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===R("INNERTUBE_CLIENT_NAME")?(this.h=ys(this))&&this.h.set("yt-location-playability-token",a,15552E3):Vl("YT_CL",JSON.stringify({loctok:a}),15552E3,ws,!0))};
function ys(a){return void 0===a.h?new um("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=ys(this))&&this.h.remove("yt-location-playability-token"):Xl("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===R("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Bs(a,b){if(!a)return!1;var c,d=null==(c=U(a,zk))?void 0:c.signal;if(d&&b.lb)return!!b.lb[d];var e;if((c=null==(e=U(a,wk))?void 0:e.request)&&b.xc)return!!b.xc[c];for(var f in a)if(b.wc[f])return!0;return!1}
function Cs(a,b){var c,d=null==(c=U(a,zk))?void 0:c.signal;if(d&&b.lb&&(c=b.lb[d]))return c();var e;if((c=null==(e=U(a,wk))?void 0:e.request)&&b.xc&&(e=b.xc[c]))return e();for(var f in a)if(b.wc[f]&&(a=b.wc[f]))return a()}
;function Ds(a){return function(){return new a}}
;var Es={},Fs=(Es.WEB_UNPLUGGED="^unplugged/",Es.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Es.WEB_UNPLUGGED_OPS="^unplugged/",Es.WEB_UNPLUGGED_PUBLIC="^unplugged/",Es.WEB_CREATOR="^creator/",Es.WEB_KIDS="^kids/",Es.WEB_EXPERIMENTS="^experiments/",Es.WEB_MUSIC="^music/",Es.WEB_REMIX="^music/",Es.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Es.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Es);
function Gs(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Fs[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Fs).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Hs(){}
Hs.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Sl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=sb(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;bm();var l="USER_INTERFACE_THEME_LIGHT";em(165)?l="USER_INTERFACE_THEME_DARK":em(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:ts()||l;h.userInterfaceTheme=k;if(!f){if(k=jm())h.connectionType=
k;S("web_log_effective_connection_type")&&(k=km())&&(g.client.effectiveConnectionType=k)}var n;if(S("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}p=dl(C.location.href);!S("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&Tl.h&&
(p=Tl.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Ul(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!S("web_lr_app_quality_killswitch")&&(p=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));
if(!S("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(V){}t=void 0}t&&(h.timeZone=t)}(t=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=t:delete h.experimentsToken;t=kl();us.h||(us.h=new us);h=us.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!S("web_prequest_context_killswitch")&&(r=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=r);t=bm();r=em(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?e&&(f=Sr())&&(g.clientScreenNonce=f):!f&&(f=Sr())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;As().setLocationOnInnerTubeContext(g);try{var x=gl(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(x));
for(var H=z.next();!H.done;H=z.next()){var I=v(H.value),L=I.next().value,P=I.next().value;x=L;y=P;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}}catch(V){zr(V)}z=g}else zr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(H=this.h(a)){this.i(z,H,b);var J;b="/youtubei/v1/"+Gs(this.j());(H=null==(J=U(a.commandMetadata,yk))?void 0:J.apiUrl)&&(b=H);J=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(J=String(b)+String(uc(J)));b={};b.key=R("INNERTUBE_API_KEY");
S("json_condensed_response")&&(b.prettyPrint="false");J=el(J,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:J,jb:ds(J),Ma:z,config:a};a.config.Xb?a.config.Xb.identity=c:a.config.Xb={identity:c};return a}zr(new lm("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(Hs.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Is(){}
w(Is,Hs);Is.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",jb:ds("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
Is.prototype.j=function(){return[]};
Is.prototype.h=function(){};
Is.prototype.i=function(){};var Js={},Ks=(Js.GET_DATASYNC_IDS=Ds(Is),Js);function Ls(a,b){var c=void 0===c?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=tc(window.location.href);e&&d.push(e);e=tc(a);if(0<=cb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),kc(d,a),a=d.href)if(a=uc(a),a=vc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Sr()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&Ms(a,b,f)}else Ms(a,b)}
function Ms(a,b,c){a="ST-"+pc(a).toString(36);b=b?zc(b):"";c=c||5;es()&&Vl(a,b,c)}
;function Ns(){try{return!!self.localStorage}catch(a){return!1}}
;function Os(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Ps(a){if(Ns()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Os(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Qs(){if(!Ns())return!1;var a=nm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Os(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Rs(a){if(Hg()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=tc(window.location.href);c&&b.push(c);c=tc(a);0<=cb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=uc(a),(b=vc(b))?(b="ST-"+pc(b).toString(36),b=(b=Wl(b)||null)?cl(b):{}):b=null):b=null;null==b&&(b={});c=R("LOGIN_INFO");S("copy_login_info_to_st_cookie")&&c&&(b.session_logininfo=c);Ls(a,b)}}
;function Ss(a){var b=B.apply(1,arguments);if(!Ts(a)||b.some(function(d){return!Ts(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Us(a,c.value);return a}
function Us(a,b){for(var c in b)if(Ts(b[c])){if(c in a&&!Ts(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Us(a[c],b[c])}else if(Vs(b[c])){if(c in a&&!Vs(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ws(a[c],b[c])}else a[c]=b[c];return a}
function Ws(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Ts(c)?a.push(Us({},c)):Vs(c)?a.push(Ws([],c)):a.push(c);return a}
function Ts(a){return"object"===typeof a&&!Array.isArray(a)}
function Vs(a){return"object"===typeof a&&Array.isArray(a)}
;function Xs(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Ys(){var a=Xs();a.info||(a.info={});return a.info}
function Zs(a){a=Xs(a);a.metadata||(a.metadata={});return a.metadata}
function $s(a){a=Xs(a);a.tick||(a.tick={});return a.tick}
function at(a){a=Xs(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function bt(a){a=at(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ct(a){var b=Xs(a).nonce;b||(b=Hr(),Xs(a).nonce=b);return b}
;function dt(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function et(a){a=a||"";var b=E("ytcsi.reference");b||(dt(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=dt(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},ft=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",
W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",
W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]=
"LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",
W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher=
"LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",
W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",
W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),X={},gt=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",
X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.aida="appInstallDataAgeMs",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.ctop="creatorInfo.topEntityType",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="requestIds",X.GetSearch_rid="requestIds",X.GetPlayer_rid="requestIds",X.GetWatchNext_rid="requestIds",X.GetBrowse_rid="requestIds",X.GetLibrary_rid=
"requestIds",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.nav_type="kabukiInfo.navigationType",X.prev_browse_id="kabukiInfo.prevBrowseId",X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.pnt="performanceNavigationTiming",
X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.rc="resourceInfo.resourceCache",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.ssdm="shellStartupDurationMs",X.br_trs=
"tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.aac_type="tvInfo.authAccessCredentialType",X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",
X.GetSettings_rid="requestIds",X.GetTrending_rid="requestIds",X.GetMusicSearchSuggestions_rid="requestIds",X.REQUEST_ID="requestIds",X),ht="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),jt={},kt=(jt.ccs="CANARY_STATE_",
jt.mver="MEASUREMENT_VERSION_",jt.pis="PLAYER_INITIALIZED_STATE_",jt.yt_pt="LATENCY_PLAYER_",jt.pa="LATENCY_ACTION_",jt.ctop="TOP_ENTITY_TYPE_",jt.yt_vst="VIDEO_STREAM_TYPE_",jt),lt="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function mt(a,b,c){c=at(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in gt){c=gt[a];0<=cb(ht,c)&&(b=!!b);a in kt&&"string"===typeof b&&(b=kt[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Ss({},d)}0<=cb(lt,a)||Ar(new lm("Unknown label logged with GEL CSI",a))}
;function nt(a,b){vo.call(this,1,arguments);this.timer=b}
w(nt,vo);var ot=new wo("aft-recorded",nt);var pt=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",pt);function qt(){this.h=0}
function rt(){qt.h||(qt.h=new qt);return qt.h}
qt.prototype.tick=function(a,b,c,d){st(this,"tick_"+a+"_"+b)||Em("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
qt.prototype.info=function(a,b,c){var d=Object.keys(a).join("");st(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Em("latencyActionInfo",a,{cttAuthInfo:c}))};
qt.prototype.jspbInfo=function(){};
qt.prototype.span=function(a,b,c){var d=Object.keys(a).join("");st(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Em("latencyActionSpan",a,{cttAuthInfo:c}))};
function st(a,b){pt[b]=pt[b]||{count:0};var c=pt[b];c.count++;c.time=T();a.h||(a.h=pm(function(){var d=T(),e;for(e in pt)pt[e]&&6E4<d-pt[e].time&&delete pt[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new lm("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ar(c)),!0):!1}
;var tt=window;function ut(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function vt(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=wt(e.requestStart),e.responseEnd=wt(e.responseEnd),e.redirectStart=wt(e.redirectStart),e.redirectEnd=wt(e.redirectEnd),e.domainLookupEnd=wt(e.domainLookupEnd),e.connectStart=wt(e.connectStart),e.connectEnd=
wt(e.connectEnd),e.responseStart=wt(e.responseStart),e.secureConnectionStart=wt(e.secureConnectionStart),e.domainLookupStart=wt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function wt(a){return Math.round(xt()+a)}
function xt(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=tt.performance||tt.mozPerformance||tt.msPerformance||tt.webkitPerformance||new ut;var zt=!1,At={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Va(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||ab,Y);function Bt(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;Zs(c).loadType=d}(a=mt(a,b,c))&&Ct(a,c)}}
function Ct(a,b){var c=et(b||"");Ss(c.info,a);a.loadType&&(c=a.loadType,Zs(b).loadType=c);Ss(bt(b),a);c=ct(b);b=Xs(b).cttAuthInfo;rt().info(a,c,b)}
function Dt(a,b,c){if(!b&&"_"!==a[0]){var d=a;Y.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Y.mark(d))}d=et(c||"");d.tick[a]=b||T();if(d.callback&&d.callback[a]){d=v(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=at(c);d.gelTicks&&(d.gelTicks[a]=!0);e=$s(c);d=b||T();S("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=ct(c);var f=Xs(c).cttAuthInfo;"_start"===a?(a=rt(),st(a,"baseline_"+e)||Em("latencyActionBaselined",{clientActionNonce:e},{timestamp:b,
cttAuthInfo:f})):rt().tick(a,e,b,f);Et(c);return d}
function Ft(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Zp+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Gt(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);nc()&&a.setAttribute("nonce",nc());return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=xt(),Dt("rsf_"+b,c+Math.round(a.fetchStart)),Dt("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Ht(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//web.archive.org/web/20230627204555/https://fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Dt("wffs",wt(b.startTime)),Dt("wffe",wt(b.responseEnd)))}
function It(a){var b=Jt("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Jt(b[d],a);if(e)return e}return NaN}
function Jt(a,b){if(a=$s(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Et(a){var b=Jt("_start",a),c=It(a);b&&c&&!zt&&(Bo(ot,new nt(Math.round(c-b),a)),zt=!0)}
function Kt(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Kt(a[d],b[d]))return!1;return!0}
function Lt(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=hb(a,function(b){return"first-paint"===b.name}))return wt(a.startTime)}a=Y.timing;
return a.Ae?Math.max(0,a.Ae):0}
;function Mt(a,b){Uk(function(){et("").info.actionType=a;b&&Qk("TIMING_AFT_KEYS",b);Qk("TIMING_ACTION",a);var c=R("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&Bt(d,c[d]);c={isNavigation:!0,actionType:ft[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=R("PREVIOUS_ACTION"))c.previousAction=ft[d]||"LATENCY_ACTION_UNKNOWN";if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Sr())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=Ft();if(1===d||-1===d)c.isVisible=
!0;Zs();Ys();c.loadType="cold";d=Ys();var e=vt(),f=xt(),g=R("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Dt("srt",e.responseStart),1!==d.prerender&&Dt("_start",f,void 0));d=Lt();0<d&&Dt("fpt",d);d=vt();d.isPerformanceNavigationTiming&&Ct({performanceNavigationTiming:!0});Dt("nreqs",d.requestStart,void 0);Dt("nress",d.responseStart,void 0);Dt("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Dt("nrs",d.redirectStart,void 0),Dt("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Dt("ndnss",d.domainLookupStart,void 0),Dt("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Dt("ntcps",d.connectStart,void 0),Dt("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=xt()&&0<d.connectEnd-d.secureConnectionStart&&(Dt("nstcps",d.secureConnectionStart,void 0),Dt("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Ht();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in At)At.hasOwnProperty(h)&&
(e=At[h],Gt(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Ct(c);c=Ys();h=bt();if("cold"===Zs().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=$s();e=at();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Dt(k,Jt(k));else if(S("log_repeated_ytcsi_ticks"))for(f=v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Dt(k.slice(1),g);k={};d=!1;e=v(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=mt(f,c[f]))&&!Kt(bt(),f)&&(Ss(h,f),Ss(k,f),d=!0);d&&Ct(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Nt()&&It()&&Et()})()}
function Ot(a,b,c,d){Uk(Bt)(a,b,c,d)}
function Pt(a,b,c){return Uk(Dt)(a,b,c)}
function Nt(){return Uk(function(){return"_start"in $s()})()}
function Qt(){Uk(function(){var a=ct();requestAnimationFrame(function(){setTimeout(function(){a===ct()&&Pt("ol",void 0,void 0)},0)})})()}
var Rt=window;Rt.ytcsi&&(Rt.ytcsi.info=Ot,Rt.ytcsi.tick=Pt);var St="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Tt=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Ut(a,b,c,d){this.j=a;this.Y=b;this.m=c;this.l=d;this.i=void 0;this.h=new Map;a.lb||(a.lb={});a.lb=Object.assign({},Ks,a.lb)}
function Vt(a,b,c,d){if(void 0!==Ut.h){if(d=Ut.h,a=[a!==d.j,b!==d.Y,c!==d.m,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new lm("InnerTubeTransportService is already initialized",a);
}else Ut.h=new Ut(a,b,c,d)}
function Wt(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Sl:c;var d=Cs(b,a.j);if(!d)return se(new lm("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(Rs(e.input),new me(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.jb)?void 0:g.mode)?"cors":void 0;if(a.m.Xe){var n=e.config,p;n=null==n?void 0:null==(p=n.Xb)?void 0:p.sessionIndex;p=Rl(0,{sessionIndex:n});k=Object.assign({},Xt(h),p);return l.v(2)}return l.yield(Yt(e.config,
h),3)}2!=l.h&&(k=l.i);f(Zt(a,e,k));l.h=0})})):se(new lm("Error: Failed to build request for command.",b))}
function $t(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Xf)?0:d.cg)&&a.l){d=v(St);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function Zt(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,x,y,z,H,I,L,P,J,V,Z,ca,ra,ma,Ga,Eg,pq,qq,rq;return A(function(ha){switch(ha.h){case 1:ha.v(2);break;case 3:if((d=ha.i)&&!d.isExpired())return ha.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Ma)?0:f.context)){ha.v(4);break}g=b.Ma.context;ha.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ha.v(4);break}l=k.value;return ha.yield(l.Uf(g),8);case 8:k=h.next();ha.v(7);break;case 4:if(null==(n=a.i)||!n.Yf(b.input,b.Ma)){ha.v(11);
break}return ha.yield(a.i.Rf(b.input,b.Ma),12);case 12:return p=ha.i,S("kevlar_process_local_innertube_responses_killswitch")||$t(a,p,b),ha.return(p);case 11:return(x=null==(r=b.config)?void 0:r.Oa)&&a.h.has(x)&&S("web_memoize_inflight_requests")?t=a.h.get(x):(y=JSON.stringify(b.Ma),I=null!=(H=null==(z=b.jb)?void 0:z.headers)?H:{},b.jb=Object.assign({},b.jb,{headers:Object.assign({},I,c)}),L=Object.assign({},b.jb),"POST"===b.jb.method&&(L=Object.assign({},L,{body:y})),(null==(P=b.config)?0:P.He)&&
Pt(b.config.He),J=function(){return a.Y.fetch(b.input,L,b.config)},t=J(),x&&a.h.set(x,t)),ha.yield(t,13);
case 13:if((V=ha.i)&&"error"in V&&(null==(Z=V)?0:null==(ca=Z.error)?0:ca.details))for(ra=V.error.details,ma=v(ra),Ga=ma.next();!Ga.done;Ga=ma.next())Eg=Ga.value,(pq=Eg["@type"])&&-1<Tt.indexOf(pq)&&(delete Eg["@type"],V=Eg);x&&a.h.has(x)&&a.h.delete(x);(null==(qq=b.config)?0:qq.Ie)&&Pt(b.config.Ie);if(V||null==(rq=a.i)||!rq.Jf(b.input,b.Ma)){ha.v(14);break}return ha.yield(a.i.Qf(b.input,b.Ma),15);case 15:V=ha.i;case 14:return $t(a,V,b),ha.return(V||void 0)}})}
function Yt(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Xb)?void 0:d.sessionIndex;var h=g.yield;var k=re(Rl(0,{sessionIndex:e}));return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Xt(b),f)))})}
function Xt(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);"cors"!==a&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var au=new Cq("INNERTUBE_TRANSPORT_TOKEN");var bu=["share/get_web_player_share_panel"],cu=["feedback"],du=["notification/modify_channel_preference"],eu=["browse/edit_playlist"],fu=["subscription/subscribe"],gu=["subscription/unsubscribe"];function hu(){}
w(hu,Hs);hu.prototype.j=function(){return fu};
hu.prototype.h=function(a){return U(a,Hk)||void 0};
hu.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(hu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function iu(){}
w(iu,Hs);iu.prototype.j=function(){return gu};
iu.prototype.h=function(a){return U(a,Gk)||void 0};
iu.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(iu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ju(){}
w(ju,Hs);ju.prototype.j=function(){return cu};
ju.prototype.h=function(a){return U(a,Bk)||void 0};
ju.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(ju.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ku(){}
w(ku,Hs);ku.prototype.j=function(){return du};
ku.prototype.h=function(a){return U(a,Fk)||void 0};
ku.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function lu(){}
w(lu,Hs);lu.prototype.j=function(){return eu};
lu.prototype.h=function(a){return U(a,Ek)||void 0};
lu.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function mu(){}
w(mu,Hs);mu.prototype.j=function(){return bu};
mu.prototype.h=function(a){return U(a,Dk)};
mu.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var nu=new Cq("NETWORK_SLI_TOKEN");function ou(a){this.h=a}
ou.prototype.fetch=function(a,b){var c=this,d,e,f;return A(function(g){c.h&&(d=rc(sc(5,Gc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;S("wug_networking_gzip_request")&&(e=To(b));f=new window.Request(a,e);return S("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Ar(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Ar(h)}))})};
ou.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Mf(),b=b.then(function(c){Ar(new lm("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
ou[Bq]=[new Dq(nu)];var pu=new Cq("NETWORK_MANAGER_TOKEN");var qu;function ru(){var a=su,b=tu,c=uu;this.l=vu;this.navigate=a;this.i=b;this.j=c;this.h=new Set}
function wu(a,b,c){if(xu(b))yu(a,b,c);else{var d=a.l(b,c);if(null==c?0:c.vc)d.vc=c.vc;0===d.type?a.navigate?zu(d.command)?Au(a,d.command)||(b=a.navigate(d)||[],ve(b).then(function(){a.h.delete(d.command)})):zr(Error("Error: Command handler page requests need to specify a url.")):zr(Error("Error: Command handler navigate function was called but not set.")):1===d.type?a.i?Au(a,d.command)||(b=a.i(d),ve(b).then(function(){a.h.delete(d.command)})):zr(Error("Error: Command handler handle service request function was called but not set.")):
2===d.type&&(a.j?a.j(d):zr(Error("Error: Command handler send action was called but not set.")))}}
function Au(a,b){if(a.h.has(b))return!0;a.h.add(b);return!1}
function xu(a){var b=!!U(a,uk),c;a="CLIENT_SIGNAL"===(null==(c=U(a,zk))?void 0:c.signal);return b||a}
function yu(a,b,c){var d=U(b,uk);if(d)var e=(null==d?void 0:d.commands)||[];else{var f;if("CLIENT_SIGNAL"===(null==(f=U(b,zk))?void 0:f.signal)){var g;e=(null==(g=U(b,zk))?void 0:g.actions)||[]}}if(e)for(b=v(e),e=b.next();!e.done;e=b.next()){e=e.value;try{wu(a,e,c)}catch(h){h instanceof Error&&zr(h)}}else zr(Error("Could not handle the meta command."))}
function zu(a){var b;return!(null==(b=U(null==a?void 0:a.commandMetadata,yk))||!b.url)}
;function Bu(){var a,b,c;return A(function(d){if(1==d.h)return a=Iq().resolve(au),a?d.yield(Wt(a),2):(Ar(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Ar(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Kf;return d.return(c)}Ar(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Cu=C.caches,Du;function Eu(a){var b=a.indexOf(":");return-1===b?{vd:a}:{vd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Fu(){return A(function(a){if(void 0!==Du)return a.return(Du);Du=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return ya(d,2),d.yield(Cu.open("test-only"),4);case 4:return d.yield(Cu.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Du)})}
function Gu(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(Fu(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Cu.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Eu(f),h=g.datasyncId,!h||a.includes(h)||b.push(Cu.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Hu(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(Fu(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=nm("cache contains other");return h.yield(Cu.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Eu(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Iu(){Bu().then(function(a){a&&(Tn(a),Gu(a),Ps(a))})}
function Ju(){var a=new Lp;qi.la(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=nm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Tn(g);Gu(g);Ps(g);return f.return()}c=Qs();return f.yield(Hu(),3);case 3:return d=f.i,f.yield(Un(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.ra()?Iu():a.l.add("publicytnetworkstatus-online",Iu,!0,void 0,void 0),f.h=0}})})}
;var Vh=ia(["data-"]);function Ku(a){a&&(a.dataset?a.dataset[Lu("loaded")]="true":Uh(a))}
function Mu(a,b){return a?a.dataset?a.dataset[Lu(b)]:a.getAttribute("data-"+b):null}
var Nu={};function Lu(a){return Nu[a]||(Nu[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ou=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Pu=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Qu(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ou,""),c=c.replace(Pu,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ru(a,b,c)}
function Ru(a,b,c){c=void 0===c?null:c;var d=Su(a),e=document.getElementById(d),f=e&&Mu(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=vq(d,b),b=""+Qa(b),Tu[b]=f),g||(e=Uu(a,d,function(){if(!Mu(e,"loaded")){Ku(e);yq(d);var h=Wa(zq,d);ol(h,0)}},c)))}
function Uu(a,b,c,d){d=void 0===d?null:d;var e=Zd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Yh(e,qk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Vu(a){a=Su(a);var b=document.getElementById(a);b&&(zq(a),b.parentNode.removeChild(b))}
function Wu(a,b){a&&b&&(a=""+Qa(b),(a=Tu[a])&&xq(a))}
function Su(a){var b=document.createElement("a");kc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+pc(a)}
var Tu={};var Xu=[],Yu=!1;function Zu(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&es()){var a=R("PLAYER_VARS",{});if("1"!=pb(a)&&!gs(a)){var b=function(){Yu=!0;"google_ad_status"in window?Qk("DCLKSTAT",1):Qk("DCLKSTAT",2)};
try{Qu("//web.archive.org/web/20230627204555/https://static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Xu.push(qi.la(function(){if(!(Yu||"google_ad_status"in window)){try{Wu("//web.archive.org/web/20230627204555/https://static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Yu=!0;Qk("DCLKSTAT",3)}},5E3))}}}
function $u(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;var av=window;function bv(){var a,b;return"h5vcc"in av&&(null==(a=av.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=av.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in av&&av.performance.mark&&av.performance.measure?2:0}
function cv(a){switch(bv()){case 1:av.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:av.performance.mark(a+"-start");break;case 0:break;default:Wh()}}
function dv(a){switch(bv()){case 1:av.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";av.performance.mark(c);av.performance.measure(a,b,c);break;case 0:break;default:Wh()}}
;var ev=S("web_enable_lifecycle_monitoring")&&0!==bv();function fv(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?tm():d;this.j=c;this.scheduler=d;this.i=new Lh;this.h=a;for(a={ab:0};a.ab<this.h.length;a={Ib:a.Ib,ab:a.ab},a.ab++)a.Ib=this.h[a.ab],c=function(e){return function(){e.Ib.Hc();b.h[e.ab].mc=!0;b.h.every(function(f){return!0===f.mc})&&b.i.resolve()}}(a),d=this.getPriority(a.Ib),d=qm(c,d),this.h[a.ab]=Object.assign({},a.Ib,{Hc:c,
jobId:d})}
function gv(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.mc||(a.scheduler.Ea(c.jobId),qm(c.Hc,10))}
fv.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.mc||this.scheduler.Ea(b.jobId),b.mc=!0;this.i.resolve()};
fv.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function hv(a){this.state=a;this.plugins=[];this.s=void 0;this.U={};ev&&cv(this.state)}
m=hv.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;ev&&dv(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(gv(this.j),this.j=void 0);iv(this,a,b);this.state=a;ev&&cv(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(jv(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function jv(a,b){var c=b.filter(function(e){return 10===kv(a,e)}),d=b.filter(function(e){return 10!==kv(a,e)});
return a.U.Zf?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Je.apply(a,[c].concat(ja(e))),2);a.Ed.apply(a,[d].concat(ja(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Ke.apply(a,[c].concat(ja(e)));a.Ed.apply(a,[d].concat(ja(e)))}}
m.Ke=function(a){var b=B.apply(1,arguments);tm();for(var c=v(a),d=c.next(),e={};!d.done;e={ob:e.ob},d=c.next())e.ob=d.value,rm(function(f){return function(){lv(f.ob.name);f.ob.callback.apply(f.ob,ja(b));mv(f.ob.name)}}(e))};
m.Je=function(a){var b=B.apply(1,arguments),c,d,e,f;return A(function(g){1==g.h&&(tm(),c=v(a),d=c.next(),e={});if(3!=g.h){if(d.done)return g.v(0);e.bb=d.value;e.Gb=void 0;f=function(h){return function(){lv(h.bb.name);var k=h.bb.callback.apply(h.bb,ja(b));"function"===typeof(null==k?void 0:k.then)?h.Gb=k.then(function(){mv(h.bb.name)}):mv(h.bb.name)}}(e);
rm(f);return e.Gb?g.yield(e.Gb,3):g.v(3)}e={bb:e.bb,Gb:e.Gb};d=c.next();return g.v(2)})};
m.Ed=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Hc:function(){lv(e.name);e.callback.apply(e,ja(b));mv(e.name)},
priority:kv(c,e)}});
d.length&&(this.j=new fv(d))};
function kv(a,b){var c,d;return null!=(d=null!=(c=a.s)?c:b.priority)?d:0}
function lv(a){ev&&a&&cv(a)}
function mv(a){ev&&a&&dv(a)}
function iv(a,b,c){ev&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(hv.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function nv(a){hv.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.ja},{from:"document_active",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(nv,hv);nv.prototype.ja=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
nv.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
nv.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
nv.prototype.i=function(){this.h=new Map};function ov(a){hv.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.l},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.l},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.l},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(ov,hv);ov.prototype.i=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
ov.prototype.h=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
ov.prototype.l=function(a,b){a(null==b?void 0:b.event)};
ov.prototype.m=function(a,b){a(null==b?void 0:b.event)};function pv(){this.l=new nv;this.m=new ov}
pv.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function qv(a){vo.call(this,1,arguments);this.csn=a}
w(qv,vo);var Eo=new wo("screen-created",qv),rv=[],sv=0;function tv(a,b,c,d){var e=d.filter(function(h){h.csn!==b?(h.csn=b,h=!0):h=!1;return h}),f={cttAuthInfo:Ur(b)||void 0,
sequenceGroup:b};d=v(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(nb(g)||!g.trackingParams&&!g.veType)&&Ar(Error("Child VE logged with no data"));c={csn:b,parentVe:c.getAsJson(),childVes:fb(e,function(h){return h.getAsJson()})};
"UNDEFINED_CSN"===b?uv("visualElementAttached",f,c):a?sr("visualElementAttached",c,a,f):Em("visualElementAttached",c,f)}
function uv(a,b,c){rv.push({payloadName:a,payload:c,Pf:void 0,options:b});sv||(sv=Fo())}
function Go(a){if(rv){for(var b=v(rv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Em(c.payloadName,c.payload,c.options));rv.length=0}sv=0}
;function vv(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
vv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Sr(void 0===c?0:c)){a=this.client;var e=new Kr({trackingParams:d});d={cttAuthInfo:Ur(c)||void 0,sequenceGroup:c};e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};b&&(e.clientData=b);"UNDEFINED_CSN"===c?uv("visualElementGestured",d,e):a?sr("visualElementGestured",e,a,d):Em("visualElementGestured",e,d);b=!0}else b=!1;else b=!1;return b};
vv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=Sr(d);a||(a=(a=Pr(void 0===d?0:d))?new Kr({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d={cttAuthInfo:Ur(c)||void 0,sequenceGroup:c},b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?uv("visualElementStateChanged",d,b):a?sr("visualElementStateChanged",b,a,d):Em("visualElementStateChanged",b,d))}};
function wv(a,b){if(void 0===b)for(var c=Rr(),d=0;d<c.length;d++)void 0!==c[d]&&wv(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&tv(a.client,b,f,e)}),a.i.clear(),a.h.clear(),a.m=void 0}
;function xv(){pv.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(xv,pv);xv.prototype.j=function(){Em("finalPayload",{csn:Sr()})};
xv.prototype.h=function(){Er(Fr)};
xv.prototype.i=function(){var a=wv;vv.h||(vv.h=new vv);a(vv.h)};function yv(){}
function zv(){var a=E("ytglobal.storage_");a||(a=new yv,D("ytglobal.storage_",a));return a}
yv.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Av()):d.return()})};
function Av(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",yv);function Cm(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=jl("ytidb_transaction_ended_event_rate_limit_session",.2)}
Cm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Bv(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=jl("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Bv(a,b){zv().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Cv(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Cv(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Cv(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Dv(a){this.args=void 0===a?null:a;this.returnValue=[]}
;var Ev=new Map;function Fv(a,b){if(!a)return null;a=Object.keys(a);a=v(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.toLowerCase();if(-1<d.indexOf(b,d.length-b.length))return c}return null}
;function Gv(a,b,c){var d;d||(d={bubbles:!0,cancelable:!1,composed:!0});null!==c&&void 0!==c&&(d.detail=c);b=new CustomEvent(b,d);a.dispatchEvent(b)}
;function Hv(a,b){b=new Dv(b);Gv(a,"yt-action",b);return b.returnValue}
function Iv(a,b,c,d){b&&b.length&&b.forEach(function(e){var f=Fv(e,"action")||Fv(e,"command")||Fv(e,"endpoint");if(f){var g="yt"+f;var h=Ev.get(g);h?g=h:(f="yt-"+f.replace(/([A-Z])/g,"-$1").toLowerCase(),Ev.set(g,f),g=f);U(e,xk)&&(g+="-"+U(e,xk).signal.toLowerCase().replace(/_/g,"-"))}else g=null;g&&(S("handle_service_request_actions")&&e.commandMetadata&&e.commandMetadata.webCommandMetadata&&e.commandMetadata.webCommandMetadata.sendPost?c&&S("use_source_element_if_present_for_actions")?Jv(c,[e]):
Jv(a,[e]):Hv(a,[e,c,d]))})}
function Jv(a,b){var c=[a];b&&c.push.apply(c,b);b=Hv(a,c);return 0<b.length&&(b=b[0],Gv(a,"yt-service-request-sent",b),b&&b.ajaxPromise)?(b.ajaxPromise.then(function(d){Gv(a,"yt-service-request-completed",d)},function(d){Gv(a,"yt-service-request-error",{error:d,
params:c})},a),b.ajaxPromise):re()}
;function vu(a,b,c){b=void 0===b?{}:b;var d,e=null==(d=U(a.commandMetadata,yk))?void 0:d.url;d=b.form||{};!c||d.element||d.skipDefaultElement||(b.form=b.form||{},b.form.element=c);if(e&&"/service_ajax"!==e)return{type:0,command:a,form:b.form};if(S("kevlar_service_command_check")){if(c=Iq().resolve(au),Bs(a,c.j))return Object.assign({},{type:1,command:a},b)}else{var f;if(null==(f=U(a.commandMetadata,yk))?0:f.apiUrl)return Object.assign({},{type:1,command:a},b)}return{type:2,command:a,form:b.form}}
function tu(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);if(b)return[Jv(b,[a.command,c,a.vc])]}return[]}
function uu(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);b&&Iv(b,[a.command],b,c)}}
;function Kv(a,b,c){G.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.targetOrigin="*";this.l=c;this.sessionId=null;this.channel="widget";this.P=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.P&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.targetOrigin=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.s||0<=cb(d.s,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.s=this.i=this.m=null;window.addEventListener("message",this.A)}
w(Kv,G);Kv.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Wk(d)}}};
Kv.prototype.M=function(){window.removeEventListener("message",this.A);G.prototype.M.call(this)};function Lv(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Kv(!!R("WIDGET_ID_ENFORCE")),b=this.Ee.bind(this);a.m=b;a.s=null;this.h.channel="widget";if(a=R("WIDGET_ID"))this.h.sessionId=a}
m=Lv.prototype;m.Ee=function(a,b,c){"addEventListener"===a&&b?this.Gc(b[0],c):this.Wc(a,b,c)};
m.Wc=function(){};
m.Ac=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Gc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.Ac(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.he=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Dc());this.sendMessage("onReady");db(this.i,this.Cd,this);this.i=[]};
m.Dc=function(){return null};
function Mv(a,b){a.sendMessage("infoDelivery",b)}
m.Cd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Cd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Nv={},Ov=(Nv["api.invalidparam"]=2,Nv.auth=150,Nv["drm.auth"]=150,Nv["heartbeat.net"]=150,Nv["heartbeat.servererror"]=150,Nv["heartbeat.stop"]=150,Nv["html5.unsupportedads"]=5,Nv["fmt.noneavailable"]=5,Nv["fmt.decode"]=5,Nv["fmt.unplayable"]=5,Nv["html5.missingapi"]=5,Nv["html5.unsupportedlive"]=5,Nv["drm.unavailable"]=5,Nv["mrm.blocked"]=151,Nv);var Pv=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Qv(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Rv(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Pv);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Sv(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Tv(a){Lv.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Qe.bind(this));this.addEventListener("onVolumeChange",this.Re.bind(this));this.addEventListener("onApiChange",this.Le.bind(this));this.addEventListener("onPlaybackQualityChange",this.Ne.bind(this));this.addEventListener("onPlaybackRateChange",this.Oe.bind(this));this.addEventListener("onStateChange",this.Pe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Se.bind(this))}
w(Tv,Lv);m=Tv.prototype;
m.Wc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Qv(a)){var d=b;if(Pa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Rv(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Rv(e);break;case "loadPlaylist":case "cuePlaylist":e=Sv(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Qv(a)&&Mv(this,this.Dc())}};
m.Gc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Lv.prototype.Gc.call(this,a,b)};
m.Ac=function(a,b){var c=this,d=Lv.prototype.Ac.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.he.bind(this);this.h.i=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Ov[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Dc=function(){if(!this.api)return null;var a=this.api.getApiInterface();ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Pe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Mv(this,a)};
m.Ne=function(a){Mv(this,{playbackQuality:a})};
m.Oe=function(a){Mv(this,{playbackRate:a})};
m.Le=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Re=function(){Mv(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Qe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Mv(this,a)};
m.Se=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Mv(this,a)};
m.dispose=function(){Lv.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Uv(a){G.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.yd,this)}
w(Uv,G);m=Uv.prototype;m.start=function(){this.started||this.h()||(this.started=!0,this.connection.kb("RECEIVING"))};
m.kb=function(a,b){this.started&&!this.h()&&this.connection.kb(a,b)};
m.yd=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Vv(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Wv(a,c))&&this.kb(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Me.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Me=function(a,b){this.started&&!this.h()&&this.connection.kb(a,this.Cc(a,b))};
m.Cc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.M=function(){var a=this.connection;a.h()||Ni(a.i,"command",this.yd,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);G.prototype.M.call(this)};function Xv(a,b){Uv.call(this,b);this.api=a;this.start()}
w(Xv,Uv);Xv.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Xv.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Vv(a,b){switch(a){case "loadVideoById":return a=Rv(b),[a];case "cueVideoById":return a=Rv(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Sv(b),[a];case "cuePlaylist":return a=Sv(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Wv(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Xv.prototype.Cc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Uv.prototype.Cc.call(this,a,b)};
Xv.prototype.M=function(){Uv.prototype.M.call(this);delete this.api};function Yv(a){a=void 0===a?!1:a;G.call(this);this.i=new M(a);Nc(this,this.i)}
Xa(Yv,G);Yv.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Yv.prototype.m=function(a,b){this.h()||this.i.cb.apply(this.i,arguments)};function Zv(a,b,c){Yv.call(this);this.l=a;this.j=b;this.id=c}
w(Zv,Yv);Zv.prototype.kb=function(a,b){this.h()||this.l.kb(this.j,this.id,a,b)};
Zv.prototype.M=function(){this.j=this.l=null;Yv.prototype.M.call(this)};function $v(a,b,c){G.call(this);this.i=a;this.origin=c;this.j=fq(window,"message",this.l.bind(this));this.connection=new Zv(this,a,b);Nc(this,this.connection)}
w($v,G);$v.prototype.kb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
$v.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
$v.prototype.M=function(){gq(this.j);this.i=null;G.prototype.M.call(this)};function aw(){this.state=1;this.h=null}
m=aw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=wb();d=f?f.createScript(d):d;d=new Bb(d,Ab)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,zb("From proto message. b/166824318"),e=Fb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());bw(this,d,e,a.program,b,c)}else Ar(Error("Cannot initialize botguard without program"))};
function bw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Qu(c,function(){window[g]?cw(a,d,g,e):(a.state=3,Vu(c),Ar(new lm("Unable to load Botguard","from "+c)))},f)):b?(f=Zd("SCRIPT"),b instanceof Bb?(b instanceof Bb&&b.constructor===Bb?b=b.j:(Na(b),b="type_error:SafeScript"),f.textContent=b,Xh(f)):f.textContent=b,f.nonce=nc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?cw(a,d,g,e):(a.state=4,Ar(new lm("Unable to load Botguard from JS")))):Ar(new lm("Unable to load VM; no url or JS provided"))}
function cw(a,b,c,d){a.state=5;try{var e=new Mh({program:b,me:c,Fe:S("att_web_record_metrics")});e.Ue.then(function(){a.state=6;d&&d(b)});
a.Rc(e)}catch(f){a.state=7,f instanceof Error&&Ar(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Uc()?this.Ld({gd:a}):null};
m.dispose=function(){this.Xc()};
m.Xc=function(){this.Rc(null);this.state=8};
m.Uc=function(){return!!this.h};
m.Ld=function(a){return this.h.Fd(a)};
m.Rc=function(a){Lc(this.h);this.h=a};function dw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function ew(){aw.apply(this,arguments)}
w(ew,aw);ew.prototype.Xc=function(){this.state=8};
ew.prototype.Rc=function(a){var b;null==(b=dw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Fd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
ew.prototype.Uc=function(){return!!dw()};
ew.prototype.Ld=function(a){return dw().bgvmc(a)};var fw=new ew;function gw(){return fw.Uc()}
function hw(a){a=void 0===a?{}:a;return fw.invoke(a)}
;function iw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||rb(b);this.assets=a.assets||{};this.attrs=a.attrs||rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
iw.prototype.clone=function(){var a=new iw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=rb(c):a[b]=c}return a};var jw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function kw(a){a=a||"";if(window.spf){var b=a.match(jw);spf.style.load(a,b?b[1]:"",void 0)}else lw(a)}
function lw(a){var b=mw(a),c=document.getElementById(b),d=c&&Mu(c,"loaded");d||c&&!d||(c=nw(a,b,function(){if(!Mu(c,"loaded")){Ku(c);yq(b);var e=Wa(zq,b);ol(e,0)}}))}
function nw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=qk(a);lc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function mw(a){var b=Zd("A");kc(b,new Jb(a,Ob));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+pc(a)}
;function ow(){G.call(this);this.i=[]}
w(ow,G);ow.prototype.M=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}G.prototype.M.call(this)};function pw(){ow.apply(this,arguments)}
w(pw,ow);function qw(a,b,c,d,e){G.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.uc=e;this.Ha=!1;this.api={};this.Qa=this.s=null;this.X=new M;this.i={};this.da=this.xa=this.elementId=this.Kb=this.config=null;this.aa=!1;this.l=this.P=null;this.ya={};this.Qd=["onReady"];this.lastError=null;this.Wb=NaN;this.W={};this.Rd=new pw(this);this.ka=0;this.j=this.m=a;Nc(this,this.X);rw(this);sw(this);Nc(this,this.Rd);c?this.ka=ol(function(){f.loadNewVideoConfig(c)},0):d&&(tw(this),uw(this))}
w(qw,G);m=qw.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.h()){this.ka&&(window.clearTimeout(this.ka),this.ka=0);var b=a||{};b instanceof iw||(b=new iw(b));this.config=b;this.setConfig(a);uw(this);this.isReady()&&vw(this)}};
function tw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Kb=a;this.config=ww(a);tw(this);if(!this.xa){var b;this.xa=xw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=hi(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=hi(Number(a)||a))};
function vw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function yw(a){var b=!0,c=zw(a);c&&a.config&&(a=Aw(a),b=Mu(c,"version")===a);return b&&!!E("yt.player.Application.create")}
function uw(a){if(!a.h()&&!a.aa){var b=yw(a);if(b&&"html5"===(zw(a)?"html5":null))a.da="html5",a.isReady()||Bw(a);else if(Cw(a),a.da="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Bw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.P=function(){c=!0;var d=Dw(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?ww(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.uc);Bw(a)};
a.aa=!0;b?a.P():(Qu(Aw(a),a.P),(b=Ew(a))&&kw(b),Fw(a)&&!c&&D("yt.player.Application.create",null))}}}
function zw(a){var b=Yd(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Bw(a){if(!a.h()){var b=zw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.aa=!1;if(!Dw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Gw(a)}else a.Wb=ol(function(){Bw(a)},50)}}
function Gw(a){rw(a);a.Ha=!0;var b=zw(a);if(b){a.s=Hw(a,b,"addEventListener");a.Qa=Hw(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Hw(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);vw(a);a.xa&&a.xa(a.api);a.X.cb("onReady",a.api)}
function Hw(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Ar(f))}}}
function rw(a){a.Ha=!1;if(a.Qa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Qa(b,a.i[b]);for(var c in a.W)a.W.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.W={};a.s=null;a.Qa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Kb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ha};
function sw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){yq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){yq("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=xw(this,b);d&&(0<=cb(this.Qd,a)||this.i[a]||(b=Iw(this,a),this.s&&this.s(a,b)),this.X.subscribe(a,d),"onReady"===a&&this.isReady()&&ol(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h()||(b=xw(this,b))&&Ni(this.X,a,b)};
function xw(a,b){var c=b;if("string"===typeof b){if(a.ya[b])return a.ya[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){zr(f)}};
a.ya[b]=c}return c?c:null}
function Iw(a,b){var c="ytPlayer"+b+a.A;a.i[b]=c;C[c]=function(d){var e=ol(function(){if(!a.h()){try{a.X.cb(b,null!=d?d:void 0)}catch(h){Ar(new lm("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.A,data:d}))}var f=a.W,g=String(e);g in f&&delete f[g]}},0);
ob(a.W,String(e))};
return c}
m.getPlayerType=function(){return this.da||(zw(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Cw(a){a.cancel();rw(a);a.da=null;a.config&&(a.config.loaded=!1);var b=zw(a);b&&(yw(a)||!Fw(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.P&&Wu(Aw(this),this.P);window.clearTimeout(this.Wb);this.aa=!1};
m.M=function(){Cw(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){zr(b)}this.ya=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(C[this.i[a]]=null);this.Kb=this.config=this.api=null;delete this.m;delete this.j;G.prototype.M.call(this)};
function Fw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Aw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Ew(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Dw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Zk(c||"","&")[b]}
function ww(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?rb(e):e}return b}
;var Jw={},Kw="player_uid_"+(1E9*Math.random()>>>0);function Lw(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Yd(c):c;var e=Kw+"_"+Qa(c),f=Jw[e];if(f&&d)return Mw(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new qw(c,e,a,b,void 0);Jw[e]=f;yq("player-added",f.api);Oc(f,function(){delete Jw[f.getId()]});
return f.api}
function Mw(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Nw=null,Ow=null,Pw=null;function Qw(){Rw()}
function Sw(){Rw()}
function Rw(){var a=Nw.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function su(a){var b,c;if(a=null==(b=a.command)?void 0:null==(c=b.urlEndpoint)?void 0:c.url)b=window,c=Qh(a),void 0!==c&&b.open(c,void 0,void 0);return[]}
function Tw(){Nw&&Nw.sendAbandonmentPing&&Nw.sendAbandonmentPing();R("PL_ATT")&&fw.dispose();for(var a=qi,b=0,c=Xu.length;b<c;b++)a.Ea(Xu[b]);Xu.length=0;Vu("//web.archive.org/web/20230627204555/https://static.doubleclick.net/instream/ad_status.js");Yu=!1;Qk("DCLKSTAT",0);Mc(Pw,Ow);Nw&&(Nw.removeEventListener("onVideoDataChange",Qw),Nw.destroy())}
;function Uw(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Ls(a,b);if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;b=g.location;a=Bc(a,e)+f;var h=void 0===h?ai:h;a:{h=void 0===h?ai:h;for(e=0;e<h.length;++e)if(f=h[e],f instanceof Zh&&f.ue(a)){h=new Jb(a,Ob);break a}h=void 0}h=Qh(h||Pb);void 0!==h&&(b.href=h)}return!0}
;D("yt.setConfig",Qk);D("yt.config.set",Qk);D("yt.setMsg",Wr);D("yt.msgs.set",Wr);D("yt.logging.errors.log",zr);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}qs(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Mt("embed",["ol"]);c=R("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=dl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Mt("watch",["pbs","pbu","pbp"]);Nw=Lw(a,c);S("embeds_enable_server_driven_watch_again_on_youtube")&&!ru.h&&(ru.h=new ru);Nw.addEventListener("onVideoDataChange",Qw);Nw.addEventListener("onReady",Sw);S("embeds_enable_server_driven_watch_again_on_youtube")&&Nw.addEventListener("innertubeCommand",function(f){wu(ru.h,f)});
a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Pw=new Tv(Nw):R("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Ow=new $v(window.parent,a,b),Pw=new Xv(Nw,Ow.connection));Zu();S("ytidb_create_logger_embed_killswitch")||Bm();a={};xv.h||(xv.h=new xv);xv.h.install((a.flush_logs={callback:function(){fr()}},a));
Wp();S("ytidb_clear_embedded_player")&&qi.la(function(){var f,g;if(!qu){var h=Iq(),k={Oc:pu,Jd:ou};h.h.set(k.Oc,k);k={wc:{feedbackEndpoint:Ds(ju),modifyChannelNotificationPreferenceEndpoint:Ds(ku),playlistEditEndpoint:Ds(lu),subscribeEndpoint:Ds(hu),unsubscribeEndpoint:Ds(iu),webPlayerShareEntityServiceEndpoint:Ds(mu)}};var l=As(),n={};l&&(n.client_location=l);void 0===f&&(f=Ql());void 0===g&&(g=h.resolve(pu));Vt(k,g,f,n);f={Oc:au,Kd:Ut.h};h.h.set(f.Oc,f);qu=h.resolve(au)}Ju()})});
var Vw=Uk(function(){Qt();rs()}),Ww=Uk(function(a){a.persisted||(Qt(),rs())}),Xw=Uk(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Tw():a.persisted||Tw()}),Yw=Uk(Tw);
window.addEventListener?(window.addEventListener("load",Vw),window.addEventListener("pageshow",Ww),window.addEventListener("pagehide",Xw)):window.attachEvent&&(window.attachEvent("onload",Vw),window.attachEvent("onunload",Yw));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Rk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new lm(g),e.name="UnhandledWindowError",e.message=
g,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?zr(e):Ar(e))};
Ge=Br;window.addEventListener("unhandledrejection",function(a){Br(a.reason)});
db(R("ERRORS")||[],function(a){zr.apply(null,a)});
Qk("ERRORS",[]);D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||gw);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||hw);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||$u);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Uw);D("yt.util.activity.init",E("yt.util.activity.init")||kq);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||nq);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||lq);}).call(this);


}
/*
     FILE ARCHIVED ON 20:45:55 Jun 27, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:14:16 Jul 12, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 61.717
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.062
  RedisCDXSource: 0.673
  esindex: 0.02
  LoadShardBlock: 44.072 (3)
  PetaboxLoader3.datanode: 120.277 (4)
  load_resource: 127.845
  PetaboxLoader3.resolve: 38.678
*/