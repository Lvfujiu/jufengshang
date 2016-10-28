/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

////////////////////////////////////////////////////////////////////////////////////


/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));



///////////////////////////////////////////////////////////////////////////////////

// 弹出层类




(function($) {
	
	$.alerts = {
		
		// These properties can be read/written by accessing $.alerts.propertyName from your scripts at any time
		
		verticalOffset: -75,                // vertical offset of the dialog from center screen, in pixels
		horizontalOffset: 0,                // horizontal offset of the dialog from center screen, in pixels/
		repositionOnResize: true,           // re-centers the dialog on window resize
		overlayOpacity: .01,                // transparency level of overlay
		overlayColor: '#FFF',               // base color of overlay
		draggable: true,                    // make the dialogs draggable (requires UI Draggables plugin)
		okButton: '&nbsp;OK&nbsp;',         // text for the OK button
		cancelButton: '&nbsp;Cancel&nbsp;', // text for the Cancel button
		dialogClass: null,                  // if specified, this class will be applied to all dialogs
		
		// Public methods
		
		alert: function(message, title, callback) {
			if( title == null ) title = 'Alert';
			$.alerts._show(title, message, null, 'alert', function(result) {
				if( callback ) callback(result);
			});
		},
		
		confirm: function(message, title, callback) {
			if( title == null ) title = 'Confirm';
			$.alerts._show(title, message, null, 'confirm', function(result) {
				if( callback ) callback(result);
			});
		},
			
		prompt: function(message, value, title, callback) {
			if( title == null ) title = 'Prompt';
			$.alerts._show(title, message, value, 'prompt', function(result) {
				if( callback ) callback(result);
			});
		},
		
		// Private methods
		
		_show: function(title, msg, value, type, callback) {
			
			$.alerts._hide();
			$.alerts._overlay('show');
			
			$("BODY").append(
			  '<div id="popup_container">' +
			    '<h1 id="popup_title"></h1>' +
			    '<div id="popup_content">' +
			      '<div id="popup_message"></div>' +
				'</div>' +
			  '</div>');
			
			if( $.alerts.dialogClass ) $("#popup_container").addClass($.alerts.dialogClass);
			
			// IE6 Fix
			var pos = ($.browser.msie && parseInt($.browser.version) <= 6 ) ? 'absolute' : 'fixed'; 
			
			$("#popup_container").css({
				position: pos,
				zIndex: 99999,
				padding: 0,
				margin: 0
			});
			
			$("#popup_title").text(title);
			$("#popup_content").addClass(type);
			$("#popup_message").text(msg);
			$("#popup_message").html( $("#popup_message").text().replace(/\n/g, '<br />') );
			
			$("#popup_container").css({
				minWidth: $("#popup_container").outerWidth(),
				maxWidth: $("#popup_container").outerWidth()
			});
			
			$.alerts._reposition();
			$.alerts._maintainPosition(true);
			
			switch( type ) {
				case 'alert':
					$("#popup_message").after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" /></div>');
					$("#popup_ok").click( function() {
						$.alerts._hide();
						callback(true);
					});
					$("#popup_ok").focus().keypress( function(e) {
						if( e.keyCode == 13 || e.keyCode == 27 ) $("#popup_ok").trigger('click');
					});
				break;
				case 'confirm':
					$("#popup_message").after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
					$("#popup_ok").click( function() {
						$.alerts._hide();
						if( callback ) callback(true);
					});
					$("#popup_cancel").click( function() {
						$.alerts._hide();
						if( callback ) callback(false);
					});
					$("#popup_ok").focus();
					$("#popup_ok, #popup_cancel").keypress( function(e) {
						if( e.keyCode == 13 ) $("#popup_ok").trigger('click');
						if( e.keyCode == 27 ) $("#popup_cancel").trigger('click');
					});
				break;
				case 'prompt':
					$("#popup_message").append('<br /><input type="text" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
					$("#popup_prompt").width( $("#popup_message").width() );
					$("#popup_ok").click( function() {
						var val = $("#popup_prompt").val();
						$.alerts._hide();
						if( callback ) callback( val );
					});
					$("#popup_cancel").click( function() {
						$.alerts._hide();
						if( callback ) callback( null );
					});
					$("#popup_prompt, #popup_ok, #popup_cancel").keypress( function(e) {
						if( e.keyCode == 13 ) $("#popup_ok").trigger('click');
						if( e.keyCode == 27 ) $("#popup_cancel").trigger('click');
					});
					if( value ) $("#popup_prompt").val(value);
					$("#popup_prompt").focus().select();
				break;
			}
			
			// Make draggable
			if( $.alerts.draggable ) {
				try {
					$("#popup_container").draggable({ handle: $("#popup_title") });
					$("#popup_title").css({ cursor: 'move' });
				} catch(e) { /* requires jQuery UI draggables */ }
			}
		},
		
		_hide: function() {
			$("#popup_container").remove();
			$.alerts._overlay('hide');
			$.alerts._maintainPosition(false);
		},
		
		_overlay: function(status) {
			switch( status ) {
				case 'show':
					$.alerts._overlay('hide');
					$("BODY").append('<div id="popup_overlay"></div>');
					$("#popup_overlay").css({
						position: 'absolute',
						zIndex: 99998,
						top: '0px',
						left: '0px',
						width: '100%',
						height: $(document).height(),
						background: $.alerts.overlayColor,
						opacity: $.alerts.overlayOpacity
					});
				break;
				case 'hide':
					$("#popup_overlay").remove();
				break;
			}
		},
		
		_reposition: function() {
			var top = (($(window).height() / 2) - ($("#popup_container").outerHeight() / 2)) + $.alerts.verticalOffset;
			var left = (($(window).width() / 2) - ($("#popup_container").outerWidth() / 2)) + $.alerts.horizontalOffset;
			if( top < 0 ) top = 0;
			if( left < 0 ) left = 0;
			
			// IE6 fix
			if( $.browser.msie && parseInt($.browser.version) <= 6 ) top = top + $(window).scrollTop();
			
			$("#popup_container").css({
				top: top + 'px',
				left: left + 'px'
			});
			$("#popup_overlay").height( $(document).height() );
		},
		
		_maintainPosition: function(status) {
			if( $.alerts.repositionOnResize ) {
				switch(status) {
					case true:
						$(window).bind('resize', function() {
							$.alerts._reposition();
						});
					break;
					case false:
						$(window).unbind('resize');
					break;
				}
			}
		}
		
	}
	
	// Shortuct functions
	jAlert = function(message, title, callback) {
		$.alerts.alert(message, title, callback);
	}
	
	jConfirm = function(message, title, callback) {
		$.alerts.confirm(message, title, callback);
	};
		
	jPrompt = function(message, value, title, callback) {
		$.alerts.prompt(message, value, title, callback);
	};
	
})(jQuery);



////////////////////////////////////////////////////////////////////////////////////









function navclass(){

	/**
	 * [categorys description]
	 * @return {[type]} [description]
	 */
	this.categorys = function(){
		$('#categorys').hover(function(){
			$(this).children('.AllItem').show();
		},function(){
			$(this).children('.AllItem').hide();
		});
	}

	/**
	 * [items description]
	 * @return {[type]} [description]
	 */
	this.items = function(){
		var item = $('#categorys').find('.item');

		item.hover(function(){
			$(this).addClass('cur');
		},function(){
			$(this).removeClass('cur');
		});
	}

	this.nav = function(on){
		if(on==1){
			this.categorys();
		}else{
			$('#categorys').children('.AllItem').show();
		}
		this.items();
		this.treasure();
	}

	this.treasure = function(){
		var cart = $('#nav-cart');
		var user = $('#nav-user');

		cart.hover(function(){
			$(this).addClass('cur');
		},function(){
			$(this).removeClass('cur');
		});

		user.hover(function(){
			$(this).addClass('cur');
		},function(){
			$(this).removeClass('cur');
		});
	}
}

var navclass = new navclass();


function focusclass(id){

	this.startTimer = function(id){

		var defaultOpts = { interval: 5000, fadeInTime: 300, fadeOutTime: 200 };
		var _titles_bg  = $(id).find('.thumbs').children('li');
		var _bodies     = $(id).children('.slide').children('li');
		var _count      = _bodies.length;
		var _current    = 0;
		var _intervalID = null;
		var stop        = function () { window.clearInterval(_intervalID); };
		var slide       = function (opts) {
            if (opts) {
                _current = opts.current || 0;
            } else {
                _current = (_current >= (_count - 1)) ? 0 : (++_current);
            };
            _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function () {

            	// _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
             //    _bodies.removeClass("cur").eq(_current).addClass("cur");
                
            });
            _titles_bg.removeClass("cur").eq(_current).addClass("cur");

            _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
            _bodies.removeClass("cur").eq(_current).addClass("cur");
        };
        var go = function () {
            stop();
            _intervalID = window.setInterval(function () { slide(); }, defaultOpts.interval);
        };
        var itemMouseOver = function (target, items) {
            stop();
            var i = $.inArray(target, items);
            slide({ current: i });
        };
        // _titles_bg.hover(function () { if ($(this).attr('class') != 'cur') { itemMouseOver(this, _titles_bg); } else { stop(); } }, go);
        _titles_bg.click(function () { if ($(this).attr('class') != 'cur') { itemMouseOver(this, _titles_bg); } else { stop(); } }, go());
        _bodies.hover(stop, go);
        go();

	}

}
var focusclass = new focusclass();

function changeclass(){

	/**
	 * 首页
	 * @param {[type]} tab [description]
	 */
	this.WebTab = function(tab,body,isclick,action){

		var tabs  = $(tab).find('.tab').find('li');
		var bodys = $(tab).find(body);
		var picTimer;

		if(isclick=='click'){
			tabs.click(function(){

				var index = tabs.index(this);

				tabs.removeClass('cur');
				$(this).addClass('cur');

				bodys.removeClass('cur');
				bodys.eq(index).addClass('cur');

				if(action)eval(action);

			});
		}else{
			tabs.hover(function(){		

				var index = tabs.index(this);
				picTimer = setInterval(function() {					

					tabs.removeClass('cur');
					tabs.eq(index).addClass('cur');

					bodys.removeClass('cur');
					bodys.eq(index).addClass('cur');

					if(action)eval(action);
				
				},300); 
				
			},function(){
				clearInterval(picTimer);
			}).trigger("mouseleave");
		}
	}


	this.WebAjaxTab = function(id,body,page,contorller,action,url){		

		var bodys = $(body);
		var page  = $(page);

		bodys.html('<p style="text-align:center;"><img src="http://www.jufengshang.com/images/o_loading.gif"><p>');

		$.ajax({
			type: "POST",
			url: "/"+contorller+"/"+action,
			dataType: "json",
			data: url,
			success: function(msg){

				var datas = msg.data;

				$(id).parent().children('li').removeClass('cur');
				$(id).addClass('cur');

				bodys.html(datas.html);
				page.html(datas.page);			

			}
		});
	}


	this.GoodsTab = function(tab,body,id){

		var tabs  = $(tab).find('.sectionTitle').children('ul').find('li');
		var bodys = $(tab).find(body);

		tabs.click(function(){
			var now = tabs.index(this);

			tabs.removeClass('cur');
			$(this).addClass('cur');
			
			bodys.css('display','block');

			switch(now){
				case 0:
					bodys.eq(0).css('display','block');
					bodys.eq(1).css('display','none');
					bodys.eq(2).css('display','block');
					bodys.eq(3).css('display','none');
					break;
				case 1:
					bodys.eq(0).css('display','none');
					bodys.eq(1).css('display','block');
					bodys.eq(2).css('display','none');
					bodys.eq(3).css('display','none');
					break;
				case 2:
					bodys.eq(0).css('display','none');
					bodys.eq(1).css('display','none');
					bodys.eq(2).css('display','block');
					$('.commentList .commentSectionBody').addClass('cur');
					$('.commentList .consultationSectionBody').removeClass('cur');
					$('.commentList .title .tab li').removeClass('cur');
					$('.commentList .title .tab li.all').addClass('cur');
					bodys.eq(3).css('display','none');

					// changeclass.WebAjaxTab(this,
					// '.commentList .commentSectionBody .comment',
					// '.commentList .commentSectionBody .commentPage .page',
					// 'goods','get_comment',id);

					break;
				case 3:
					bodys.eq(0).css('display','none');
					bodys.eq(1).css('display','none');
					bodys.eq(2).css('display','block');
					$('.commentList .commentSectionBody').removeClass('cur');
					$('.commentList .consultationSectionBody').addClass('cur');
					$('.commentList .title .tab li').removeClass('cur');
					$('.commentList .title .tab li.consultation').addClass('cur');
					bodys.eq(3).css('display','none');
					break;
				case 4:
					bodys.eq(0).css('display','none');
					bodys.eq(1).css('display','none');
					bodys.eq(2).css('display','none');
					bodys.eq(3).css('display','block');
					break;
			}

			// bodys.removeClass('none');
			
			// tabs.each(function(index){

			// 	if(index<now)bodys.eq(index).addClass('none');
			// 	if(now!=1)bodys.eq(1).addClass('none');
			// 	if(now!=4)bodys.eq(4).addClass('none');


			// });

			offsettop = $('.goodsDesc').offset().top;
			$("html, body").animate({ scrollTop: offsettop }, 0);

		});
		
	}


	this.CatBrandList = function(){

		var BrandList = $('.CatBrand').find('.BrandList');

		var index =0;

		BrandList.find('.pre').click(function(){

			var indexs = $(this).parent().parent('.BrandList').index();
			var list   = $(this).parent();
			
			var ul  = list.find('ul');
			var li  = ul.children('li');
			var len = li.length;
			var sWidth = li.width();

			index++;
			if(index == len) {index = 0;}

			//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
			ul.css("width",sWidth * (len));

			var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
			ul.stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		});
	}

	this.BrandChang = function(tab,body1,body2){

		var tabs  = $(tab).find('.tab').find('li');
		var bodys1 = $(tab).find(body1);
		var bodys2 = $('.BSortList');


		tabs.click(function(){

			var index = tabs.index(this);

			tabs.removeClass('cur');
			$(this).addClass('cur');

			bodys1.removeClass('cur');
			bodys1.eq(index).addClass('cur');

			bodys2.removeClass('cur');
			bodys2.eq(index).addClass('cur');

			offsettop = $('.ShowBrand').offset().top - 110;
			$("html, body").animate({ scrollTop: offsettop }, 220);

		});
	}

	this.SlipTo = function(id,Offset){
		offsettop = $(id).offset().top - Offset;
		$("html, body").animate({ scrollTop: offsettop }, 220);
	}

	this.changeHomeBrand = function(id){

		var dd = $(id);

		dd.hover(function(){
			dd.removeClass('cur');
			$(this).addClass('cur');
		},function(){
			$(this).removeClass('cur');
		});

	}

}

var changeclass = new changeclass();



function shareclass(){

	this.countdown = function(id,style,startStrings,endStrings,action){

		var obj = $(id);
		var startTime = new Date(parseInt(obj.attr('data')) * 1000);
		var endTime   = new Date(parseInt(obj.attr('value')) * 1000);

		var status = 'NotStart';// 状态码

		var server_time = function(){
			var s_time = '';
	    	$.ajax({
	    		async: false,  // 设为同步请求
				type: "POST",
				url: "/api/server_time",
				dataType: "html",
				data:'',
				success: function(msg){				
					s_time = msg;
				}
			});
			return s_time;
	    }    

   	 	nowTime = new Date(parseInt(server_time()) * 1000);
  		var nowgetTime = nowTime.getTime();

		
		setInterval(function(){
			
			// var nowTime   = new Date();

			nowgetTime += 100;


			var msg = "已到期!";

			var nMS  = endTime.getTime() - nowgetTime;



			if(startStrings==null)startStrings='';
			if(endStrings==null)endStrings='';

			if(startStrings=='' && endStrings=='') strings='';

			// 还没有开始
			if(endTime.getTime()>startTime.getTime() && startTime.getTime()>nowgetTime){
				var nMS  = startTime.getTime() - nowgetTime;
				if(startStrings=='')strings='';
				else strings=startStrings;

				code = 'NotStart';
			}else{
				if(endStrings=='')strings='';
				else strings=endStrings;

				code = 'HasBegun';
			}

			var myD  = Math.floor(nMS/(1000 * 60 * 60 * 24));
			var myH  = Math.floor(nMS/(1000 * 60 * 60)) % 24; //小时 
			var myM  = Math.floor(nMS/(1000 * 60)) % 60; //分钟 
			var myS  = Math.floor(nMS/1000) % 60; //秒 
			var myMS = Math.floor(nMS/100) % 10; //拆分秒
			if(myD<10){var myD_a = '0'+myD;}else{var myD_a = myD;}
			if(myH<10){var myH_a = '0'+myH;}else{var myH_a = myH;}
			if(myM<10){var myM_a = '0'+myM;}else{var myM_a = myM;}
			if(myS<10){var myS_a = '0'+myS;}else{var myS_a = myS;}

			if(myD >= 0){

				if(style==1) var str = "<span class='day'>"+myD+"</span>天<span class='hour'>"+myH+"</span>时<span class='min'>"+myM+"</span>分<span class='second'>"+myS+"."+myMS+"</span>秒";
	        	else if(style==2) var str = "<span class='day'>"+myD+"</span>天<span class='hour'>"+myH+"</span>时<span class='min'>"+myM+"</span>分<span class='second'>"+myS+"</span>秒<span class='milliseconds'>"+myMS+"</span>";
	       		else if(style==3) var str = "<span class='day'>"+myD+"</span><span class='hour'>"+myH+"</span><span class='min'>"+myM+"</span><span class='second'>"+myS+"</span><span class='milliseconds'>"+myMS+"</span>";
	       		else if(style==4) var str = "<span class='day'>"+myD_a+"</span>天<span class='hour'>"+myH_a+"</span>时<span class='min'>"+myM_a+"</span>分<span class='second'>"+myS_a+"</span>秒";
	        	else var str = "<span class='day'>"+myD+"</span><span class='hour'>"+myH+"</span><span class='min'>"+myM+"</span><span class='second'>"+myS+"."+myMS+"</span>";
	        
	        }else{
				var str = msg;	
				code = 'HasEnded';
			}

			if(code!=status && action!=null && action){
				status = code;
				eval(action);
			}

			obj.html(strings+str);

		},100);	
	}
	// countdown
		
	
	this.ChangeImg = function(id){

		var ul = $(id).children('ul');
		var li = ul.children('li');

		var sWidth = li.width(); //获取焦点图的宽度（显示面积）
		var len    = li.length; //获取焦点图个数
		var index  = 0;

		ul.css("width",sWidth*(len));

		//上一个
		$(id+"_pre").click(function() {
			index -= 1;
			if(index < 0)index = 0;
			shareclass.showPics(ul,index,sWidth);
		});

		//下一个
		$(id+"_next").click(function() {
			index += 1;
			if(index > len-1) index = len-1;
			shareclass.showPics(ul,index,sWidth);
		});
	}

	this.showPics = function(id,index,sWidth) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		id.stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
	}
	// changethumbs

	this.ChangeGdListImg = function(id){

		var ids = $(id);
		var dl  = ids.find('dl');
		var dt  = dl.find('dt');
		var thumbs = dl.find('.sPhoto');
		
		var a = thumbs.find('a');

		a.hover(function(){
			var img = $(this).attr('alt');
			// $(this).parent().removeClass('cur');
			// $(this).parent().addClass('cur');
			$(this).parent().parent().parent().find('.bimg').attr('src',img);
		});

	}

	this.AttributeMore = function(id){
		var ids = $(id);
		var more = ids.find('.more');		

		more.each(function(index){
			if(index!=0){
				var value = $(this).parent('.AttributeValue').find('.value').children('a');
				var width = 0;
				value.each(function(index){
					width += $(this).width();
				});
				if(width<960) $(this).css('display','none');
			}
		});

		more.click(function(){

			var value = $(this).parent('.AttributeValue').parent('.AttributeList');
			if(value.hasClass('hide')) value.removeClass('hide');
			else value.addClass('hide');


			var value = $(this).parent('.chose').parent('.AttributeAction').parent('.AttributeValue').parent('.AttributeList');
			if(value.hasClass('hide')) value.removeClass('hide');
			else{
				value.addClass('hide');

				var tindex = $(this).index();
				if(tindex==0){

					var BrandBL       = $('#BrandBL');
					var Screening     = $('#Screening');

					var goBrandC      = $('#goBrandC');
					var dd            = goBrandC.find('dd');

					var goBrandLetter = $('#goBrandLetter');
					var li            = goBrandLetter.find('li');

					BrandBL.css('display','block');
					Screening.css('display','none');

					li.removeClass('cur');
					li.eq(0).addClass('cur');

					dd.removeClass('cur');
					dd.eq(0).addClass('cur');

				}

				
			} 

		});

	}

	this.ScreeningBrand = function(){

		var goBrandC      = $('#goBrandC');
		var dd            = goBrandC.find('dd');

		var goBrandLetter = $('#goBrandLetter');
		var li            = goBrandLetter.find('li');

		var BrandBL       = $('#BrandBL');
		var Screening     = $('#Screening');

		var attr = $('#attrs').val();

		$.ajax({
			type: "POST",
			url: "/channel/ajax_Screening_Brand2",
			dataType: "json",
			data: 'belong=17&attr='+attr,
			success: function(msg){						
				dd.click(function(){
					data = $(this).attr('data');

					if(data!='all'){
						BrandBL.css('display','none');
						Screening.css({'display':'block','min-height':'460px'});
						Screening.html(eval('msg.'+data));
					}else{
						BrandBL.css('display','block');
						Screening.css('display','none');
						Screening.html('');
					}

					dd.removeClass('cur');
					$(this).addClass('cur');

					li.removeClass('cur');
					li.eq(0).addClass('cur');
				});

				li.click(function(){
					data = $(this).attr('data');

					if(data!='all'){
						BrandBL.css('display','none');
						Screening.css({'display':'block','min-height':'460px'});
						Screening.html(eval('msg.'+data));
					}else{
						BrandBL.css('display','block');
						Screening.css('display','none');
						Screening.html('');
					}

					li.removeClass('cur');
					$(this).addClass('cur');

					dd.removeClass('cur');
					dd.eq(0).addClass('cur');
				});
			}
		});		

	}

	this.gscroll = function(id,fixed){
		$(window).scroll(function(){
			var scrolls   = $(this).scrollTop();
			var offsettop = $(fixed).offset().top
			if(scrolls>offsettop){
				$(id).addClass('fixed');
			}else{
				$(id).removeClass('fixed');
			}
		});
	}

	this.gscrolltocur = function(id){

		var len = $(id).length;

		$(window).scroll(function(){
			var scrolls   = $(this).scrollTop();

			var data0 = $(id).eq(0).attr('data');
			var offsettop0 = $('#'+data0).offset().top;

			$(id).each(function(){
				var datas = $(this).attr('data');
				var offsettop = $('#'+datas).offset().top;

				if(scrolls> offsettop ){
					
					$(id).removeClass('cur');
					$(this).addClass('cur');
				}	
							
			});
			
			if(scrolls<offsettop0)$(id).removeClass('cur');
		});
	}

	this.FormCur = function(id,mun){
		var li = $(id).find('li');
		li.click(function(){
			var index = li.index(this);
			if(index<3){
				li.removeClass('cur');
				$(this).addClass('cur');
			}
		});
	}

	this.NoHide = function(){
		var NoHide = $('.NoHide');
		NoHide.each(function(index){
			$(this).parent().removeClass('hide');
		});
	}

	this.SetMultipleChoice = function(){

		$.ajax({
			type: "POST",
			url: "/channel/SetMultipleChoice",
			dataType: "html",
			data: "",
			success: function(msg){
				location.reload();
			}
		});
	}

	this.submitSearch = function(frm,keyword){
		var keyword = $(frm).find(keyword).attr('value');
		if(keyword==''){
			shareclass.jAlert('关键字不能为空');
			return false;
		}

		return true;
	}

	this.search = function(id,url,Prompt){

		var id = $(id);
		var keyword = id.attr('value');


		var msg;

		if(Prompt==null)msg = '关键字不能为空.';
		else msg=Prompt;

		if(keyword==''){
			shareclass.jAlert(msg);
			return false;
		}
		
		location.href =url+"?keyword="+keyword;
	}

	this.Ajaxsearch = function(id,contorllers,action,Prompt){
		var id = $(id);
		var keyword = id.attr('value');

		var msg = '关键字不能为空.';
		if(Prompt!='') msg=Prompt;

		if(keyword==''){
			shareclass.jAlert(msg);
			return false;
		}

		$.ajax({
			type: "POST",
			url: "/"+contorllers+"/"+action,
			dataType: "json",
			data: {keyword:keyword,Ajaxsearch:1},
			success: function(msg){
				var str = msg.data;
				if(str.indexOf('failed') > '-1'){
					shareclass.jAlert('没有找到相关品牌');
				}else {
					eval(msg.action);
				}	
			}
		});
	}

	this.page = function(contorllers,action,url){

		var loads = $('.'+contorllers+'_'+action);
		loads.html('<p style="text-align:center;"><img src="http://www.jufengshang.com/images/o_loading.gif"><p>');

		$.ajax({
			type: "POST",
			url: "/"+contorllers+"/"+action,
			dataType: "json",
			data: url,
			success: function(msg){
				var str = msg.data;
				eval(msg.action);

				$("img.lazy").lazyload({
			        threshold:150,
			        effect:"fadeIn"
			    });

			    // shareclass.ChangeGdListImg('.GoodsList .gdList');

			}
		});
	}

	this.addurlfavorite = function()
	{
		var name = "聚风尚顶级银行名表商城";
		var url = location.href;
		
		if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt
			(navigator.appVersion) >= 4))
			window.external.AddFavorite(url, name);
		/*else if (navigator.appName == "Netscape")
			window.sidebar.addPanel(name, url, '');*/
		else
			alert("对不起,你的浏览器不支持本操作!");
	}
	
	this.baidushare = function(bdText,bdDesc,bdClass,bdUrl){

		var newUrl = 'http://cang.baidu.com/do/add?iu='+bdUrl+"&it="+bdText+"&dc="+bdDesc+"&tn="+bdClass;

		window.open(encodeURI(newUrl),"_blank"); 
	}


	/**
	* 购物车相关涵数\收藏商品
	*
	*/
	this.addfavorite = function(gid,attr){

		if($('.member').val()==0){window.location.href="/logins/index";return false;}
		$.ajax({
			url: '/user/addfavorite',
			type:'POST',
			dataType:'html',
			data:'gid='+gid,
			success:function(msg){

				var json=eval("("+msg+")");
				$('#id'+gid+'_attr_'+attr).html('');

				if(json.error=='true'||json.error=='ison'){
					// alert('商品已移入收藏夹中。');
					shareclass.jAlert('商品已移入收藏夹中。');
				}

			}
		});
	}

	this.jAlert = function(msg,title,action){
		$.alerts.dialogClass = 'alert_style_1'; // 设置自定义样式的Class
		if(title==null)title = '信息提示';
		jAlert(msg,title, function() {
			$.alerts.dialogClass = null; // 重置到默认值
			if(action!=null)eval(action);
		});
	}

	this.malert = function(settings){
		var defaultSettings = {
            msg: '',
            title:'信息提示',
            style:'alert_style_1',
            action:''
        }
        settings = $.extend(true, {}, defaultSettings, settings);
        var s = settings;
        $.alerts.dialogClass = s.style; // 设置自定义样式的Class
        jAlert(s.msg,s.title, function() {
			$.alerts.dialogClass = null; // 重置到默认值
			if(s.action!='')eval(s.action);
		});

	}

	this.coupon = function(settings){
		var defaultSettings = {
            bonus_id:0
        }
        settings = $.extend(true, {}, defaultSettings, settings);
        var s = settings;
		if(s.bonus_id==0){shareclass.malert({msg:'<div style="font-size:16px;">没有该优惠券或者该优惠卷已过期</div>'});return false;}

		$.ajax({
			type: "POST",
			url: "/api/coupon",
			dataType: "html",
			data: "bonus_type_id="+s.bonus_id,
			success: function(msg){

				switch(msg){
				case 'nobonus':
				  var data = '<div style="font-size:16px;">没有该优惠券或者该优惠卷已过期</div>';
				  break;
				case 'be_user_bonus':
				  var data = '<div style="font-size:16px;">您已经领取了该优惠券，<a target="_blank" href="http://www.jufengshang.com/user/bonus" style="color:#c40001;">点击查看</a></div>';
				  break;
				case 'nologin':
				  var data = '<div style="font-size:16px;"><p>需要登录后再领取优惠券.</p><p><a target="_blank" href="http://www.jufengshang.com/logins/index" style="color:#c40001;">马上登录</a>领取</p></div>';
				  break;
				default:
				  var data = '<div style="font-size:16px;"><p>优惠券:<span style="color:#c40001">'+msg+'</span></p><p>已成功发放到您的帐户，<a target="_blank" href="http://www.jufengshang.com/user/bonus" style="color:#c40001;">点击查看</a></p></div>';
				}
				shareclass.malert({msg:data});

			}
		});
	}

	this.links = function(){
		// $("#linkBody").

		$('#linkMore').toggle(function(){
	        $("#linkBody").slideDown();
	        $(this).html('收起>');
	    },
	    function(){
	        $("#linkBody").slideUp();
	        $(this).html('更多>');
	    });  


		// var value = $('.link .body').children('a');
		// var width = 0;
		// value.each(function(index){
		// 	width += $(this).width();
		// });
		// if(width<750) $('.link .more').css('display','none');


		// $('.link .more a').click(function(){
		// 	var value = $(this).parent().parent();
		// 	if(value.hasClass('hide')) value.removeClass('hide');
		// 	else value.addClass('hide');
		// });
	}

	this.nav_goods_promotion = function(){

		var Recommendation = $('#clstag-Recommendation-hot').children('.slide');
		var daofu          = $('#clstag-daofu-hot').children('.slide');

		Recommendation.html('<p style="text-align:center;"><img src="http://www.jufengshang.com/images/o_loading.gif"><p>');
		daofu.html('<p style="text-align:center;"><img src="http://www.jufengshang.com/images/o_loading.gif"><p>');

		$.ajax({
			type: "POST",
			url: "/api/nav_goods_promotion",
			dataType: "json",
			data: "",
			success: function(msg){

				Recommendation.html(msg.hot);
				daofu.html(msg.daofu);	

				channel.focus('#clstag-Recommendation-hot',3);
				channel.focus('#clstag-daofu-hot',3);	

			}
		});

	}

	this.advbox = function(id,startTime,endTime){

		var close = $(id).find('.close');
		var advbox_box = $(id).find('.advbox-box');

		$.ajax({
			type: "POST",
			url: "/home/advbox",
			dataType: "json",
			data: "",
			success: function(msg){

				if(msg.is_advbox!=2 && msg.imgStyle && msg.imgURL){

					var strHtml = '';
					strHtml += '<div style="'+msg.imgStyle+'">';
					strHtml += '<a target="_blank" href="'+msg.imgLink+'">';
					strHtml += '<p style="text-align:center;"><img src="'+msg.imgURL+'"></p>';
					strHtml += '</a>';
					strHtml += '</div>';


					// 参数: 图片地址, 尺寸就绪事件, 完全加载事件, 加载错误事件					
					imgReady(msg.imgURL,function(){},function(){

						// alert('size ready: width=' + this.width + '; height=' + this.height);
						if(this.height<580)strHtml = strHtml.replace('height:580px','height:'+this.height+'px');

						advbox_box.html(strHtml);

						if(this.height>=580){

							$(id).stop(true,false).delay(0).animate({'height':'80px'},0);

							if(msg.is_advbox==0){
								$(id).stop(true,false).delay(0).animate({'height':'580px'},1500,function(){
									close.html('收起');
									setTimeout(function(){									
										$(id).stop(true,false).animate({'height':'80px'},1500,function(){close.html('展开');});
									},endTime);
								});	
							}
						}else{
							close.html('');
							$(id).stop(true,false).delay(0).animate({'height':this.height+'px'},0);
						}

					});

					return false;

				}

			}
		});		

		close.click(function(){			

			var msg = $(this).html();
			if(msg=='展开'){
				$(this).html('收起');
				$(id).stop(true,false).delay(0).animate({'height':'580px'},1500,function(){
					setTimeout(function(){
						$(this).html('展开');
						$(id).stop(true,false).animate({'height':'80px'},1500);
					},endTime);
				});	
			}else{
				$(this).html('展开');
				$(id).stop(true,false).delay(0).animate({'height':'80px'},1500);
			}
			
		});
		
	}
	
}

var shareclass = new shareclass();


function glist(){

	this.sort = function(id,sort,path,attr,keyword){
		
		var GoodsList = $('.GoodsList');
		var gdList = GoodsList.children('.gdList');
		var pageTop = GoodsList.children('.title').find('.page');
		var page = GoodsList.children('#page');

		var desc = $(id).attr('value');

		gdList.html('<p style="text-align:center;"><img src="http://www.jufengshang.com/images/o_loading.gif"><p>');

		$.ajax({
			type: "POST",
			url: "/channel/ajax_glist_sort",
			dataType: "json",
			data: "path="+path+"&attr="+attr+"&sort="+sort+"&desc="+desc+"&keyword="+keyword,
			success: function(msg){

				var datas = msg.data;

				$(id).parent().children('a').removeClass('cur');
				$(id).parent().children('a').removeClass('asc');

				if(datas.desc=='asc')$(id).addClass('cur');
				else $(id).removeClass('cur');
				if(datas.desc=='desc')$(id).addClass('asc');
				else $(id).removeClass('asc');

				$(id).attr('value',datas.desc);

				gdList.html(datas.html);
				pageTop.html(datas.pageTop);
				page.html(datas.page);	

				$("img.lazy").lazyload({
			        threshold:150,
			        effect:"fadeIn"
			    });	

			    shareclass.ChangeGdListImg('.GoodsList .gdList');	

			}
		});
	}


	this.page = function(str){

		var listElement = $('.channelGlist .body');
	    var pageElementTop = $('.channelGlist .pageTop');
	    var pageElement = $('#page');
	    var selectionSort = $('.selectionSort li');

		listElement.html(str.html);
        pageElementTop.html(str.pageTop);
        pageElement.html(str.page);
        $('.channelGlist .body dl').addCurrentElement();  
	}

}

var glist = new glist();


function goods(){

	/*留言有用*/
	this.commentUseful = function(id,comment_id){

		$.ajax({
			type: "POST",
			url: "/comment/commentUseful",
			dataType: "html",
			data: "comment_id="+comment_id,
			success: function(msg){
				$(id).html('有用('+msg+')');
			}
		});		
	}

	this.commentpage = function(str){
	
		var commentBodyList = $('.commentSectionBody .comment');
		var page = $('.commentSectionBody .commentPage .page');

		commentBodyList.html(str.html);
		page.html(str.page);
		changeclass.SlipTo('.immediately',0);
	}

	this.consultationpage = function(str){

		var ConsultationBodyList = $('.consultationList .list');
		var page = $('.consultationList .commentPage .page');

		ConsultationBodyList.html(str.html);
		page.html(str.page);
		changeclass.SlipTo('.consultationSectionBody',0);
	}

	this.search_zixun = function(goods_id){

		var bodys = $('#ConsultationBodyList');
		var page = $('#ConsultationBodyPage');

		var value = $('#ConsultationKeyword').attr('value');

		if(value==''){
			shareclass.jAlert('请输入关键字');
			return false;
		}

		bodys.html('<p style="text-align:center;"><img src="http://www.jufengshang.com/images/o_loading.gif"><p>');

		$.ajax({
			type: "POST",
			url: "/goods/get_consultation",
			dataType: "json",
			data: "keyword="+value+"&goods_id="+goods_id,
			success: function(msg){

				var datas = msg.data;

				if(datas.html)bodys.html(datas.html);
				else bodys.html('<p style="color:#c40001;text-align:center;">没有找到相关内容,马上发表一个试试.</p>');
				page.html(datas.page);			

			}
		});
	}

	this.submitComment = function(frm,add_url){

		var islogin      = $('input[name="islogin"]:checked').val();
		// var title        = $('#title').val();
		var comment_rank = 5;
		// var comment_rank = $('input[name="comment_rank"]:checked').val();
		var content      = $('#content').val();
		var id_value     = $('#id_value').val();
		var imgcode      = $('#imgcode').val();
		var user_name    = $('#user_name').val();
		var tags         = [];
		$('input[name="tags"]:checked').each(function() {
            tags.push($(this).val());
        });


		/**************/
		//if(islogin==1 && !user_name){$('#region').html('<font color="#c40001">请登陆.</font>'); return false;}
		if(tags.length==0){$('#region').html('<font color="#c40001">请选择印象标签,有助于我们提高用户体验.</font>'); return false;}
		if(!content){ $('#region').html('<font color="#c40001">请输入留言内容.</font>'); return false;}
		if(!imgcode){ $('#region').html('<font color="#c40001">请输入验证码.</font>'); return false;}
		/*************/

		$('#region').html('<img src="/images/loader.gif" />');

		$.ajax({
		   type: "POST",
		   url: add_url,
		   dataType: "json",
		   data: "content="+content+"&id="+id_value+"&imgcode="+imgcode+"&comment_rank="+comment_rank+"&islogin="+islogin+"&user_name="+user_name+"&tags="+tags,
		   success: function(msg){

		   		
		   		var msgs = msg.msg;
		   		var datas = msg.data;

		   		if(msgs=="error_imgcode"){$('#region').html('<font color="#c40001">验证码错误！!</font>'); return false;}		   		
		   		if(msgs=="no_time"){$('#region').html('<font color="#c40001">发表太频繁,请休息一下在继续发表.</font>'); return false;}		   		
		   		if(msgs=="pingbi"){$('#region').html('<font color="#c40001">您已经给屏蔽发言.</font>'); return false;}		   		

			    $('#region').html('');				
				$('#content').attr('value','');
				$('#imgcode').attr('value','');
				$('#checkcode').attr('src','/service/imgcode?id='+Math.random()*5);

				$('#commentBodyList').html(datas.html);
				$('#commentBodyPage').html(datas.page);
				changeclass.SlipTo('#commentBodyList',200);			
		   } 
		}); 

		return false;
	}


	this.submitZiXun = function(frm,add_url){

		var consulting_type = $('input[name="consulting_type"]:checked').val();
		var quiz_content = $('#quiz_content').val();
		var imgcode      = $('#quiz_imgcode').val();
		var goods_id     = $('#goods_id').val();

		/**************/
		if(!quiz_content){ $('#zixunregion').html('<font color="#c40001">请输入咨询内容.</font>'); return false;}
		if(!imgcode){ $('#zixunregion').html('<font color="#c40001">请输入验证码.</font>'); return false;}
		/*************/

		$('#zixunregion').html('<img src="/images/loader.gif" />');

		$.ajax({
		   type: "POST",
		   url: add_url,
		   dataType: "json",
		   data: "quiz_content="+quiz_content+"&goods_id="+goods_id+"&imgcode="+imgcode+"&consulting_type="+consulting_type,
		   success: function(msg){

		   		var msgs = msg.msg;
		   		var datas = msg.data;

		   		if(msgs=="error_imgcode"){$('#zixunregion').html('<font color="#c40001">验证码错误！!</font>'); return false;}		   		
		   		if(msgs=="no_time"){$('#zixunregion').html('<font color="#c40001">发表太频繁,请休息一下在继续发表.</font>'); return false;}		   		
		   		if(msgs=="pingbi"){$('#zixunregion').html('<font color="#c40001">您已经给屏蔽发言.</font>'); return false;}		   		

			    $('#zixunregion').html('');				
				$('#quiz_content').attr('value','');
				$('#quiz_imgcode').attr('value','');
				$('#checkcode').attr('src','/service/imgcode?id='+Math.random()*5);

				$('#ConsultationBodyList').html(datas.html);
				$('#ConsultationBodyPage').html(datas.page);
				changeclass.SlipTo('#ConsultationBodyList',200);		
		   } 
		}); 
	}	

	this.showInputAction = function(obj){
		$(obj).parent().next().show();
	}

	this.changeImgcode = function(){
		$('.checkcode').attr('src','/service/imgcode?id='+Math.random()*5);
	}

	this.goods_state_info = function(goods_id){

		var gButton = $('#GoodsInfo').find('.gButton');
		var timing = $('#GoodsInfo').find('#timing');

		gButton.html('<img src="/images/loader.gif" />');

		$.ajax({
			type: "POST",
			url: "/goods/goods_state_info",
			dataType: "json",
			data: 'goods_id='+goods_id,
			success: function(msg){
				var button = msg.button;
				gButton.html(button.buy+button.cart);
				timing.attr('data',msg.start_time);
				timing.attr('value',msg.end_time);
			}
		});

	}

	this.goods_state = function(goods_id){

		var gprice  = $('#state_goods_price');
		var gprice_html  = $('#state_goods_price').html();
		var active_price  = $('#state_active_price');
        var staging = $('#state_staging');
        var gButton = $('#state_gbutton');

        $('.active_state').html('<img src="/images/loader.gif" />');
        gButton.html('<img src="/images/loader.gif" />');

        var count_down = function(nMS){
            var str = '';

            var down = setInterval(function(){
            	nMS -= 100;
            	if(nMS>0){  
                	var myD  = Math.floor(nMS/(1000 * 60 * 60 * 24));
	                var myH  = Math.floor(nMS/(1000 * 60 * 60)) % 24; //小时 
	                var myM  = Math.floor(nMS/(1000 * 60)) % 60; //分钟 
	                var myS  = Math.floor(nMS/1000) % 60; //秒 
	                var myMS = Math.floor(nMS/100) % 10; //拆分秒

	                myH_a = myH<10?('0'+myH):myH;
	                myM_a = myM<10?('0'+myM):myM;
	                myS_a = myS<10?('0'+myS):myS;

	                str = "<p>倒计时：<span class='day'>"+myD+"</span>天<span class='hour'>"+myH_a+"</span>时<span class='min'>"+myM_a+"</span>分<span class='second'>"+myS_a+"."+myMS+"</span>秒</p>";

	                $('#count_down').html(str);
                }else{
                	goods.goods_state(goods_id);
                	clearInterval(down);
                }                

            },100);            
		}

		$.ajax({
			type: "POST",
			url: "/json/goods_state",
			dataType: "json",
			data: 'goods_id='+goods_id,
			success: function(data){
				var state = data.state;							
				var goods = data.goods;							
				var error = data.error;							
				var button = data.button;				
				
				
				staging.html('￥'+Math.ceil(goods.shop_price/24)+'×24');
				gButton.html(button.buy + button.cart);	
				if(state.active==1){
					$('.active_state').css({'display':'block'});
					gprice.html('<s>'+gprice_html+'</s>');
					$('.active_state').html('<span class="lineHead"><b>限时抢</b></span><div id="state_active_price"><small>￥</small>'+goods.shop_price+'</div>');	
				}

				var endtime = goods.endtime;
				if(endtime){
					nMS = endtime * 1000;
					var myD  = Math.floor(nMS/(1000 * 60 * 60 * 24));
	                var myH  = Math.floor(nMS/(1000 * 60 * 60)) % 24; //小时 
	                var myM  = Math.floor(nMS/(1000 * 60)) % 60; //分钟 
	                var myS  = Math.floor(nMS/1000) % 60; //秒 
	                var myMS = Math.floor(nMS/100) % 10; //拆分秒

	                myH_a = myH<10?('0'+myH):myH;
	                myM_a = myM<10?('0'+myM):myM;
	                myS_a = myS<10?('0'+myS):myS;

	                str = "<p>倒计时：<span class='day'>"+myD+"</span>天<span class='hour'>"+myH_a+"</span>时<span class='min'>"+myM_a+"</span>分<span class='second'>"+myS_a+"</span>秒</p>";

	                $('#count_down').html(str);				
					
					count_down(endtime*1000);	
				}else{
					$('#count_down').html('');	
				}
			}
		});
	}


	this.tehui_goods_state_info = function(goods_id){
		var gprice  = $('#DiscountDay').find('#price_'+goods_id);

		gprice.html('<img src="/images/loader.gif" />');

		$.ajax({
			type: "POST",
			url: "/goods/goods_state_info",
			dataType: "json",
			data: 'goods_id='+goods_id,
			success: function(msg){

				var str ='特惠价:<b>￥'+msg.activities_price+'<!--('+msg.goods_discount+'折)--></b><s>￥'+Math.ceil(msg.market_price)+'</s>';
				gprice.html(str);
				
			}
		});
	}

	this.seckill_state_info = function(id,timing){

		var obj = $(timing);
		var startTime = new Date(parseInt(obj.attr('data')) * 1000);
		var endTime   = new Date(parseInt(obj.attr('value')) * 1000);
		var nowTime   = new Date();
		var nMS  = endTime.getTime() - nowTime.getTime();

		var msg = '距离本轮秒杀开始还剩：';
		if(nowTime.getTime()>startTime.getTime())msg = '距离本轮秒杀结束还剩：';

		$(id).html(msg);
	}
	this.seckill_state_info2 = function(id,timing){

		var obj = $(timing);
		var startTime = new Date(parseInt(obj.attr('data')) * 1000);
		var endTime   = new Date(parseInt(obj.attr('value')) * 1000);
		var nowTime   = new Date();
		var nMS  = endTime.getTime() - nowTime.getTime();

		var msg = '即将开始';
		if(nowTime.getTime()>startTime.getTime())msg = '立即秒杀';
		if($(id).html()!='已抢光啦'){
			$(id).attr('class','now');
			$(id).html(msg);
		}
	}
	
	this.history = function(obj,type,goods_id){
		if(obj==null){
			var container = $('.MyHistroy ul');
		}else {
			var container = $(obj);
		}
		container.html('<img src="/images/loader.gif" />');

		$.ajax({
			type: "POST",
			url: "/user/ajax_history",
			dataType: "html",
			data: {'type':type,'goods_id':goods_id},
			success: function(msg){

				container.html(msg);
				$('.goodsRecommendation .sectionBody dl').addCurrentElement();
			}
		});
	}

	this.guess_you_like = function(id){
		var container = $('#guess_you_like');
		container.html('<p style="padding:50px;text-align:center;"><img src="/images/loader.gif" /></p>');
		$.ajax({
			type: "POST",
			url: "/json/guess_you_like",
			dataType: "html",
			data: {'goods_id':id},
			success: function(msg){
				container.html(msg);
				$('#guess_you_like dl').addCurrentElement();
			}
		});
	}

	this.activeing = function(){
		var container = $('#activeing');
		container.html('<p style="padding:50px;text-align:center;"><img src="/images/loader.gif" /></p>');
		$.ajax({
			type: "POST",
			url: "/json/activeing",
			dataType: "html",
			data: {},
			success: function(msg){
				if(msg){
					$('.rec1 span').removeClass('cur');
					$('.rec1 span.activeing').addClass('cur');
					$('.rec1 .sectionBody .body').removeClass('cur');
					$('.rec1 .sectionBody .body').eq(2).addClass('cur');
					$('.activeing').css({display:'block'});
					container.html(msg);
					$('#activeing dl').addCurrentElement();
					$('#activeing dl dd .downtime').downtime();
				}				
			}
		});
	}
	
	this.preferential_information = function(id){
		var container = $('#promotional_information');
		$.ajax({
			type: "POST",
			url: "/json/goods_promotional_information",
			dataType: "html",
			data: {'goods_id':id},
			success: function(msg){
				if(msg!=""){
					container.css({'display':'block'});
					container.find('.info').html(msg);
				}				
			}
		});
	}
	
}

var goods = new goods();


function cart(){

	this.add = function(goods_id,source,number){
		var number = number?number:1;
		$.ajax({
			type: "POST",
			url: "/cart/deal",
			dataType: "html",
			data: 'action=add&qty='+number+'&gid='+goods_id+'&source='+source,
			success: function(msg){
				cart.info();
				shareclass.jAlert('商品已移入购物车中.');
			}
		});
	}

	this.buy = function(goods_id,number){
		var number = number?number:1;
		window.location = '/cart/deal/gid-'+goods_id+'-action-add-qty-'+number;
	}

	this.del = function(goods_id){
		$.ajax({
			type: "POST",
			url: "/cart/deal",
			dataType: "html",
			data: 'action=del&gid='+goods_id,
			success: function(msg){
				cart.info();
			}
		});
	}

	this.info = function(){

		var cart = $('#nav-cart');
		var nav_cart_total_munber = cart.find('#nav_cart_total_munber');
		var goods                 = cart.find('.goods');
		var cart_total_munber     = cart.find('.cart_total_munber');
		var cart_total_price      = cart.find('.cart_total_price');

		goods.html('<img src="/images/loader.gif" />');
		
		$.ajax({
			type: "POST",
			url: "/cart/getcart_info",
			dataType: "html",
			data: '',
			success: function(msg){

				var json=eval("("+msg+")");

				nav_cart_total_munber.html(json.cart_total_munber);
				cart_total_munber.html(json.cart_total_munber);
				goods.html(json.goods);
				cart_total_price.html('￥'+json.cart_total_price);
				
			}
		});
	}

	this.history = function(){
		var container = $('.MyHistroy ul');
		container.html('<img src="/images/loader.gif" />');

		$.ajax({
			type: "POST",
			url: "/user/ajax_history",
			dataType: "html",
			data: '',
			success: function(msg){

				container.html(msg);
			}
		});
	}

	this.userinfo = function(){
		var my_info = $('.MyInfo');
		var my_user_name = $('.myuser-title .my_user_name');
		var my_address   = $('.myuser-title .my_address');
		
		$.ajax({
			type: "POST",
			url: "/user/ajax_userinfo",
			dataType: "html",
			data: {type:1},
			success: function(msg){
				var json=eval("("+msg+")");
				//console.log(msg);
				if(msg != '[]'){
					my_user_name.html(json.user_name); 
					my_address.html(json.address); 
					my_info.html(json.myinfo);
					my_info.show();
				}
				
			}
		});
	}

	this.userlogin = function(obj,type){
		var login_span = $(obj);
		$.ajax({
			type: "POST",
			url: "/user/ajax_userinfo",
			dataType: "html",
			data: {type:type},
			success: function(msg){
				var json=eval("("+msg+")");
				// console.log(msg);
				if(msg != '[]'){
					login_span.html(json.myinfo+' <a title="我的订单" href="/user/myorder" rel="nofollow">我的订单</a>');
				}
				
			}
		});
	}

}

var cart = new cart();


function channel(){
	this.focus = function(id,margin){

		var focusid = $(id);
		var ul = focusid.children('.slide').children('ul');
		var li = ul.children('li');
		var btn_left = $(id+'-left');
		var btn_right = $(id+'-right');

		var sWidth = li.width() + margin; //获取焦点图的宽度（显示面积）
		var len = li.length; //获取焦点图个数
		var index = 0;
		var picTimer;

		var btn = "<div class='btnBg'></div><div class='btn'>";
		for(var i=0; i < len; i++) {
			btn += "<span></span>";
		}
		btn += "</div>";
		focusid.append(btn);

		var btn = focusid.children('.btn').children('span');		

		//上一页按钮
		btn_left.click(function() {
			index -= 1;
			if(index == -1) {index = len - 1;}
			channel.showPics(index,sWidth,ul,btn);
		});

		//下一页按钮
		btn_right.click(function() {
			index += 1;
			if(index == len) {index = 0;}
			channel.showPics(index,sWidth,ul,btn);

			// alert(index);
		});

		//为小按钮添加鼠标滑入事件，以显示相应的内容
		btn.mouseenter(function() {
			index = btn.index(this);
			channel.showPics(index,sWidth,ul,btn);			
		}).eq(0).trigger("mouseenter");

		ul.css("width",sWidth * (len));

		//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
		focusid.hover(function() {
			clearInterval(picTimer);
		},function() {
			picTimer = setInterval(function() {				
				index++;
				if(index > len-1) {index = 0;}
				channel.showPics(index,sWidth,ul,btn);
			},4000); //此4000代表自动播放的间隔，单位：毫秒
		}).trigger("mouseleave");		
	}

	this.showPics = function(index,sWidth,ul,btn){
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		ul.stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		btn.removeClass('cur').eq(index).addClass('cur');
	}

	this.brand_channel_pic = function(id){

		var fadeSpeed = 500;
		$(id).hover(function(){
			$(this).children('.brand-desc').fadeOut(fadeSpeed);		
		},function(){
			$(this).children('.brand-desc').fadeIn(fadeSpeed);
		});

	}
}

var channel = new channel();


/**
 * 图片头数据加载就绪事件 - 更快获取图片尺寸
 * @version	2011.05.27
 * @author	TangBin
 * @see		http://www.planeart.cn/?p=1121
 * @param	{String}	图片路径
 * @param	{Function}	尺寸就绪
 * @param	{Function}	加载完毕 (可选)
 * @param	{Function}	加载错误 (可选)
 * @example imgReady('http://www.google.com.hk/intl/zh-CN/images/logo_cn.png', function () {
		alert('size ready: width=' + this.width + '; height=' + this.height);
	});
 */
var imgReady = (function () {
	var list = [], intervalId = null,

	// 用来执行队列
	tick = function () {
		var i = 0;
		for (; i < list.length; i++) {
			list[i].end ? list.splice(i--, 1) : list[i]();
		};
		!list.length && stop();
	},

	// 停止所有定时器队列
	stop = function () {
		clearInterval(intervalId);
		intervalId = null;
	};

	return function (url, ready, load, error) {
		var onready, width, height, newWidth, newHeight,
			img = new Image();
		
		img.src = url;

		// 如果图片被缓存，则直接返回缓存数据
		if (img.complete) {
			ready.call(img);
			load && load.call(img);
			return;
		};
		
		width = img.width;
		height = img.height;
		
		// 加载错误后的事件
		img.onerror = function () {
			error && error.call(img);
			onready.end = true;
			img = img.onload = img.onerror = null;
		};
		
		// 图片尺寸就绪
		onready = function () {
			newWidth = img.width;
			newHeight = img.height;
			if (newWidth !== width || newHeight !== height ||
				// 如果图片已经在其他地方加载可使用面积检测
				newWidth * newHeight > 1024
			) {
				ready.call(img);
				onready.end = true;
			};
		};
		onready();
		
		// 完全加载完毕的事件
		img.onload = function () {
			// onload在定时器时间差范围内可能比onready快
			// 这里进行检查并保证onready优先执行
			!onready.end && onready();
		
			load && load.call(img);
			
			// IE gif动画会循环执行onload，置空onload即可
			img = img.onload = img.onerror = null;
		};

		// 加入队列中定期执行
		if (!onready.end) {
			list.push(onready);
			// 无论何时只允许出现一个定时器，减少浏览器性能损耗
			if (intervalId === null) intervalId = setInterval(tick, 40);
		};
	};
})();


/**
 * 图片延迟加载
 */
(function(a,b){$window=a(b),a.fn.lazyload=function(c){function f(){var b=0;d.each(function(){var c=a(this);if(e.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,e)&&!a.leftofbegin(this,e))if(!a.belowthefold(this,e)&&!a.rightoffold(this,e))c.trigger("appear");else if(++b>e.failure_limit)return!1})}var d=this,e={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return c&&(undefined!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),undefined!==c.effectspeed&&(c.effect_speed=c.effectspeed,delete c.effectspeed),a.extend(e,c)),$container=e.container===undefined||e.container===b?$window:a(e.container),0===e.event.indexOf("scroll")&&$container.bind(e.event,function(a){return f()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(e.appear){var f=d.length;e.appear.call(b,f,e)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(e.data_attribute))[e.effect](e.effect_speed),b.loaded=!0;var f=a.grep(d,function(a){return!a.loaded});d=a(f);if(e.load){var g=d.length;e.load.call(b,g,e)}}).attr("src",c.data(e.data_attribute))}}),0!==e.event.indexOf("scroll")&&c.bind(e.event,function(a){b.loaded||c.trigger("appear")})}),$window.bind("resize",function(a){f()}),f(),this},a.belowthefold=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.height()+$window.scrollTop():e=$container.offset().top+$container.height(),e<=a(c).offset().top-d.threshold},a.rightoffold=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.width()+$window.scrollLeft():e=$container.offset().left+$container.width(),e<=a(c).offset().left-d.threshold},a.abovethetop=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.scrollTop():e=$container.offset().top,e>=a(c).offset().top+d.threshold+a(c).height()},a.leftofbegin=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.scrollLeft():e=$container.offset().left,e>=a(c).offset().left+d.threshold+a(c).width()},a.inviewport=function(b,c){return!a.rightofscreen(b,c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(c){return a.belowthefold(c,{threshold:0,container:b})},"above-the-top":function(c){return!a.belowthefold(c,{threshold:0,container:b})},"right-of-screen":function(c){return a.rightoffold(c,{threshold:0,container:b})},"left-of-screen":function(c){return!a.rightoffold(c,{threshold:0,container:b})},"in-viewport":function(c){return!a.inviewport(c,{threshold:0,container:b})},"above-the-fold":function(c){return!a.belowthefold(c,{threshold:0,container:b})},"right-of-fold":function(c){return a.rightoffold(c,{threshold:0,container:b})},"left-of-fold":function(c){return!a.rightoffold(c,{threshold:0,container:b})}})})(jQuery,window);

// 倒计时
$.fn.countdown = function(settings){

    var defaultSettings = {
        style: 'default', //倒计时样式
        startStrings:'离开始:',
        endStrings:'离结束:',
        finish:'已到期!',
        action:'',
    }

    settings = $.extend(true, {}, defaultSettings, settings);

    var server_time = function(){
		var s_time = '';
    	$.ajax({
    		async: false,  // 设为同步请求
			type: "POST",
			url: "/api/server_time",
			dataType: "html",
			data:'',
			success: function(msg){				
				s_time = msg;
			}
		});
		return s_time;
    }    

 	nowTime = new Date(parseInt(server_time()) * 1000);
	var nowgetTime = nowTime.getTime();

    return this.each(function () {
        var _this = $(this), s = settings;

        var startTime = new Date(parseInt(_this.attr('startTime')) * 1000);
        var endTime   = new Date(parseInt(_this.attr('endTime')) * 1000);

        setInterval(function(){

            // var nowTime   = new Date();
            nowgetTime += 100;

            var nMS  = (startTime.getTime()>nowgetTime)?(startTime.getTime() - nowgetTime):(endTime.getTime() - nowgetTime);
            var str = '';

            if(nMS>0){
                var myD  = Math.floor(nMS/(1000 * 60 * 60 * 24));
                var myH  = Math.floor(nMS/(1000 * 60 * 60)) % 24; //小时 
                var myM  = Math.floor(nMS/(1000 * 60)) % 60; //分钟 
                var myS  = Math.floor(nMS/1000) % 60; //秒 
                var myMS = Math.floor(nMS/100) % 10; //拆分秒

                myH_a = myH<10?('0'+myH):myH;
                myM_a = myM<10?('0'+myM):myM;
                myS_a = myS<10?('0'+myS):myS;

                switch(s.style){
                case 'style1':
                    str = "<span class='day'>"+myD+"</span>天<span class='hour'>"+myH+"</span>时<span class='min'>"+myM+"</span>分<span class='second'>"+myS+"</span>秒<span class='milliseconds'>"+myMS+"</span>";
                    break;
                case 'style2':
                    str = "<span class='day'>"+myD+"</span><span class='hour'>"+myH+"</span><span class='min'>"+myM+"</span><span class='second'>"+myS+"</span><span class='milliseconds'>"+myMS+"</span>";
                    break;
                case 'style3':
                    str = "<span class='day'>"+myD+"</span>天<span class='hour'>"+myH_a+"</span>时<span class='min'>"+myM_a+"</span>分<span class='second'>"+myS_a+"</span>秒";
                    break;
                default:
                    str = "<span class='day'>"+myD+"</span>天<span class='hour'>"+myH_a+"</span>时<span class='min'>"+myM_a+"</span>分<span class='second'>"+myS_a+"."+myMS+"</span>秒";
                }
            }

            str = str?((startTime.getTime()>nowgetTime?s.startStrings:s.endStrings)+str):s.finish;

            if(s.action && nowgetTime>=endTime.getTime()) eval(s.action);
            _this.html(str);

        },100);

    });
}


$.fn.downtime = function(settings){
	var defaultSettings = {}
    settings = $.extend(true, {}, defaultSettings, settings);
    return this.each(function () {
    	var _this = $(this), s = settings;
    	var endtime = _this.attr('time-data') * 1000;
    	var nowgetTime = 0;
    	var down = setInterval(function(){
            nowgetTime += 100;
            var nMS  = (endtime>nowgetTime)?(endtime - nowgetTime):0;
            var str = '';
            if(nMS>0){
            	var myD  = Math.floor(nMS/(1000 * 60 * 60 * 24));
                var myH  = Math.floor(nMS/(1000 * 60 * 60)) % 24; //小时 
                var myM  = Math.floor(nMS/(1000 * 60)) % 60; //分钟 
                var myS  = Math.floor(nMS/1000) % 60; //秒 
                var myMS = Math.floor(nMS/100) % 10; //拆分秒

                myH_a = myH<10?('0'+myH):myH;
                myM_a = myM<10?('0'+myM):myM;
                myS_a = myS<10?('0'+myS):myS;

                str = "倒计时：<span class='day'>"+myD+"</span>天<span class='hour'>"+myH+"</span>时<span class='min'>"+myM+"</span>分<span class='second'>"+myS+"."+myMS+"</span>秒";
            	_this.html(str);
            }else{
            	clearInterval(down);
            }
        },100);
    })
}


$.fn.goodsAuthenticGuaranteed = function(){

    return this.each(function () {
        _self = $(this);
        var tab = $('.tab',_self);
        var li = $('li',tab);
        var tabBody = $('.tabBody',_self);
        var bods = $('.bods',tabBody);

        var thisHover = function(){
            li.hover(function(){
                if(!$(this).hasClass('cur'))$(this).stop().animate({top:-100});
            },function(){
                if(!$(this).hasClass('cur'))$(this).stop().animate({top:0});
            });
        }

        var thisClick = function(){
            li.click(function(){
                var index = $(this).index();
                li.eq(index).addClass('cur').siblings().animate({top:0}).removeClass('cur');
                bods.eq(index).addClass('cur').siblings().removeClass('cur');
            });
        }

        thisHover();
        thisClick();
    });
}



// 导航
function Navigation(){
    var contorlElements = $("#navigation nav ul li");
    contorlElements.hover(function(){
        contorlElements.removeClass("cur");
        $(this).addClass("cur");
    },function(){
        contorlElements.removeClass("cur");
    });
}

// 焦点图
function Focus(settings){
    this.defaultSettings = {
        controlElements:".homeFocus .contact .num ul li",// 操控元素
        changesBody:".homeFocus .pageSection li",// 变化主体
        event:"click"// mousemove
    }
    this.settings = $.extend(true, {}, this.defaultSettings, settings);
    // 淡入淡出
    this.fadeFocus = function(thisSettings){
        var defaultSet = {
            interval: 5000,
            fadeInTime: 300,
            fadeOutTime: 200,
            fade:"yes",
            single:"no"
        };
        defaultOpts = $.extend(true, {}, defaultSet, thisSettings);
        var changesBody = $(this.settings.changesBody);
        var controlElements = $(this.settings.controlElements);
        var count = changesBody.length;
        var current = 0;
        var intervalId = null;

        var stop = function () { window.clearInterval(intervalId); };
        var slide = function(opts){
            if (opts) {
                current = opts.current || 0;
                current = (current >=0 && current<count) ? current : 0;
            } else {
                current = (current >= (count - 1)) ? 0 : (++current);
            }

            // 遍历所有元素 并渐隐
            changesBody.fadeOut(defaultOpts.fadeOutTime,function(e){});
            changesBody.eq(current).fadeIn(defaultOpts.fadeInTime,function(e){});
            if(defaultOpts.single=="no") controlElements.eq(current).addClass("cur").siblings().removeClass("cur");
        }
        var go = function(){
            stop();
            intervalId = window.setInterval(function () { slide(); }, defaultOpts.interval);
        }
        var itemMouseOver = function (target, items) {
            stop();
            var i = $.inArray(target, items);
            slide({ current: i });
        };
        if(defaultOpts.single=="no"){
            controlElements.bind(this.settings.event,function(event){
                if ($(this).attr('class') != 'cur') {
                    itemMouseOver(this, controlElements);
                } else {
                    stop();
                }
            });
        }else if(defaultOpts.single=="yes"){
            controlElements.bind(this.settings.event,function(event){
                slide({ current:++current });
            });
        }

        if(defaultOpts.fade=="yes") changesBody.parent().hover(stop(), go());
    }
    // 左右移动
    this.moveFocus = function(){

    }
}

// 添加cur
function elementToggle(id){
	$(id).toggle();
}

function show_attr_list(){
    $('.moreArr').toggle(function(){
        $('.attrHiddenDiv').slideDown();
        $(this).html('收起');
    },
    function(){
        $('.attrHiddenDiv').slideUp();
        $(this).html('更多属性<i></i>');
    });  
}


function page_jaxa(obj){
    var listElement = $('.channelGlist .body');
    var pageElementTop = $('.channelGlist .pageTop');
    var pageElement = $('#page');
    var selectionSort = $('.selectionSort li');

    var desc = $(obj).attr('data-value');
    var page = $('#json_page').val();
    var path = $('#json_path').val();
    var attr = $('#json_attr').val();
    var keyword = $('#json_keyword').val();
    var sort = $(obj).attr('data');

    listElement.html('<p style="text-align:center;"><img src="http://www.jufengshang.com/images/o_loading.gif"><p>');


    selectionSort.removeClass('cur');
    $(obj).addClass('cur');

    selectionSort.removeClass('asc');
    selectionSort.removeClass('desc');

    $(obj).addClass(desc);
    $(obj).attr('data-value',desc=='desc'?'asc':'desc');

    $.ajax({
        type: "POST",
        url: "/json/glist",
        dataType: "json",
        data: "path="+path+"&attr="+attr+"&sort="+sort+"&desc="+desc+"&keyword="+keyword+"&is_json=1",
        success: function(msg){  
            var datas = msg.data;
            listElement.html(datas.html);
            pageElementTop.html(datas.pageTop);
            pageElement.html(datas.page);
            $('.channelGlist .body dl').addCurrentElement();  
            shareclass.ChangeGdListImg('.json_glist');
            $("img.lazy").lazyload({
		        threshold:150,
		        effect:"fadeIn",
		        skip_invisible : false,
		        failurelimit : 10, 
		    });
        }
    });
}


(function($){

    $.fn.movefocus = function(settings){

        var defaultSettings = {
            is_direction:true,
            is_botton:true,
            is_side:false,
            speed:4000
        }
        settings = $.extend(true, {}, defaultSettings, settings);

        return this.each(function () {
            var _this     = $(this);
            var ul        = _this.children();
            var li        = ul.children();
            var sWidth    = li.width(); //鑾峰彇鐒︾偣鍥剧殑瀹藉害锛堟樉绀洪潰绉級
            var len       = li.length; //鑾峰彇鐒︾偣鍥句釜鏁�
            var _current  = 0;
            var picTimer;

            //鏈緥涓哄乏鍙虫粴鍔紝鍗虫墍鏈塴i鍏冪礌閮芥槸鍦ㄥ悓涓€鎺掑悜宸︽诞鍔紝鎵€浠ヨ繖閲岄渶瑕佽绠楀嚭澶栧洿ul鍏冪礌鐨勫搴�
            ul.css("width",sWidth * (len));

            //浠ヤ笅浠ｇ爜娣诲姞鏁板瓧鎸夐挳鍜屾寜閽悗鐨勫崐閫忔槑鏉★紝杩樻湁涓婁竴椤点€佷笅涓€椤典袱涓寜閽�
            var btn = "";
            if(settings.is_botton){
                btn += "<div class='btns'>";
                for(var i=0; i < len; i++) {
                    btn += "<span></span>";
                }
                btn += "</div>";
            }

            if(settings.is_direction)btn += "<div class='gotoPre'></div><div class='gotoNext'></div>";

            if(settings.is_side)_this.parent().append(btn);
            else _this.append(btn);

            if(settings.is_side){
                var _btns = _this.parent().find('.btns');
                var _pre  = _this.parent().find('.gotoPre');
                var _next = _this.parent().find('.gotoNext');
            }else{
                var _btns = _this.find('.btns');
                var _pre  = _this.find('.gotoPre');
                var _next = _this.find('.gotoNext');
            }

            _btns.children().eq(0).addClass('cur');

            //涓婁竴椤点€佷笅涓€椤垫寜閽€忔槑搴﹀鐞�
            _pre.css("opacity",0.5).hover(function(){$(this).stop(true,false).animate({"opacity":"0.7"},300);},function() {$(this).stop(true,false).animate({"opacity":"0.5"},300);});
            _next.css("opacity",0.5).hover(function(){$(this).stop(true,false).animate({"opacity":"0.7"},300);},function() {$(this).stop(true,false).animate({"opacity":"0.5"},300);});

            var show = function(opts){
                _current = opts?(opts.current || 0):((_current >= (len - 1)) ? 0 : (++_current));
                var nowLeft = -_current*sWidth; //鏍规嵁index鍊艰绠梪l鍏冪礌鐨刲eft鍊�
                ul.stop(true,false).animate({"left":nowLeft},300); //閫氳繃animate()璋冩暣ul鍏冪礌婊氬姩鍒拌绠楀嚭鐨刾osition
                _btns.children().eq(_current).addClass('cur').siblings().removeClass('cur');
            };

            var auto = function(){
                _this.hover(function() {
                    clearInterval(picTimer);
                },function() {
                    picTimer = setInterval(function() {
                        show();
                    },settings.speed); //姝�4000浠ｈ〃鑷姩鎾斁鐨勯棿闅旓紝鍗曚綅锛氭绉�
                }).trigger("mouseleave");
            };

            _pre.click(function(){
                _current = (_current <= 0) ? (len - 1) : (--_current);
                show({current:_current});
            });
            _next.click(function(){show();});

            _btns.children().click(function(){
                var index = $(this).index();
                show({current:index});
            });

            auto();
        });
    };

    //底部诚信网站
    $.fn.footerTrust = function(){
        return this.each(function () {
            $(this).hover(function(){
                $(this).stop().animate({width:"1200px"});
            },function(){
                $(this).stop().animate({width:"108px"});
            });
        });
    };
    //底部诚信网站
    $.fn.footerLink = function(){
        return this.each(function () {
            $(this).hover(function(){
                $(this).children(".linkSon").addClass("cur");
            },function(){
                $(this).children(".linkSon").removeClass("cur");
            });
        });
    };
    //购物袋
    $.fn.shoppingBag = function(){
        return this.each(function () {
            $(this).hover(function(){
                $(this).addClass("cur");
            },function(){
                $(this).removeClass("cur");
            });
        });
    };
    //滚动
    $.fn.newFocusPlug = function(settings){
		var defaultSettings = {
			tabElement:'',
			bodyElement:'ul',
			trunLeftBtn:'.pre',
			trunRightBtn:'.next',
			paddingWidth:0,
			displayItems:1,
			isAuto:1,
			speed:6000,
		}
		settings = $.extend(true, {}, defaultSettings, settings);
		return this.each(function(){
			var bodyElement = $(this).find(settings.bodyElement);
			var length = bodyElement.children().length;
			var sWidth = bodyElement.children().width() + settings.paddingWidth;
			bodyElement.css({'width':length*sWidth,position:'absolute'});
			
			var current = 0;
			var picTimer;
			
			var stepLength = length-settings.displayItems;
			var leftStep  = 0;
			var rightStep = stepLength>0?stepLength:0;
			
			var trunLeftBtn = $(this).find(settings.trunLeftBtn);
			trunLeftBtn.click(function(){
				current--;
				animateElement();
			});			
			
			var trunRightBtn = $(this).find(settings.trunRightBtn);
			trunRightBtn.click(function(){
				current++;
				animateElement();
			});
			
			var step = function(leftst,rightst){
				leftStep = leftStep>0?leftStep:0;
				rightStep = rightStep>(length-settings.displayItems)?(length-settings.displayItems):rightStep;
			}
			
			var animateElement = function(){
				if(current<0){
					current = stepLength;
					step(stepLength,0);
				}
				else if(current>stepLength){
					current = 0;
					step(0,stepLength);
				}
				else{
					step(current,stepLength-current);
				}				
				var nowLeft = -current*sWidth;
				bodyElement.stop(true,false).animate({left:nowLeft},300);
			}
			
			var _thisbody = $(this);
			var auto = function(){
				_thisbody.hover(function() {
					clearInterval(picTimer);
				},function() {
					picTimer = setInterval(function() {
						current++;
						animateElement();
					},settings.speed);
				}).trigger("mouseleave");
			}
			
			if(settings.isAuto==1) auto();			
		});
	};
	// hover
	$.fn.addCurrentElement = function(){
		$(this).hover(function(){
			$(this).addClass('cur');
		},function(){
			$(this).removeClass('cur');
		});
	};
    // 添加 cur
    $.fn.tabChangeElement = function(settings){
        var defaultSettings = {
            tab:'.sectionTitle',
            body:'.sectionBody',
            'event':'click',//mouseover
        }
        settings = $.extend(true, {}, defaultSettings, settings);

        return this.each(function () {
            var tabElement = $(this).find(settings.tab).children();
            var bodyElement = $(this).find(settings.body).children();
            tabElement.bind(settings.event,function(){
                var index = tabElement.index(this);
                tabElement.removeClass('cur');
                $(this).addClass('cur');
                bodyElement.removeClass('cur');
                bodyElement.eq(index).addClass('cur');
            })
        });
    }

    $.fn.changeLi = function(){
        return this.each(function () {
            var _thisLI = $(this).children();
            _thisLI.hover(function(){
                _thisLI.removeClass('cur');
                $(this).addClass('cur');
            });
        });
    }

    // tab浮动
    $.fn.tabFixed = function(reference){
        tabid = $(this);
        $(window).scroll(function(){
            var scrolls   = $(this).scrollTop();
            var offsettop = $(reference).offset().top;
            if(scrolls>offsettop){
                tabid.addClass('fixed');
            }else{
                tabid.removeClass('fixed');
            }
        });
    }

    $.fn.goodsPageCommentTab = function(){
    	var _this = $(this);
		_this.click(function(){
			_this.removeClass('cur');
			$(this).addClass('cur');

			type = $(this).attr('data-value');
			data = $(this).attr('data');

			if(type=='comment'){
				changeclass.WebAjaxTab(this,
					'.commentList .commentSectionBody .comment',
					'.commentList .commentSectionBody .commentPage .page',
					'goods','get_comment',data);
				$('.commentSectionBody').addClass('cur');
				$('.consultationSectionBody').removeClass('cur');
			}else{
				$('.consultationSectionBody').addClass('cur');
				$('.commentSectionBody').removeClass('cur');
			}			
		});
    }

    $.fn.goodsPageZiXunTab = function(){
    	var _this = $(this);
    	_this.click(function(){
    		_this.removeClass('cur');
			$(this).addClass('cur');

			data = $(this).attr('data');

			changeclass.WebAjaxTab(this,
				'.consultationSectionBody .consultationList .list',
				'.consultationSectionBody .consultationList .commentPage .page',
				'goods','get_consultation',
				data);
    	});
    }
})(jQuery);

function addorminus(a){
	var c=Number($("#goods_number").val()),d=0;
	switch(a){
		case "add":
			d=parseInt(c)+1;
			$("#goods_number").val(d).siblings();
			$("#goods_number_html").html(d).siblings();
			break;
		case "minus":
			2<=c&&(d=parseInt(c)-1,$("#goods_number").val(d).siblings(),$("#goods_number_html").html(d).siblings())
			break;
	}
}

// 取得brand列表
function brand_get_html(obj,a){
	var strHtml = $(obj).html();
	var strLeve = $(obj).parent().attr('data');

	var dl = $('.brand-grid-list-dl');
	$('.ss span').removeClass('currentClick');
	$(obj).addClass('currentClick');
	dl.each(function(){
		var level  = $(this).attr('data-level');
		var letter = $(this).attr('data-letter');
		var area   = $(this).attr('data-area');

		if(strLeve=='level'){
			if(level==strHtml) $(this).addClass('block');
			else $(this).removeClass('block');
		}
		else if(strLeve=='area'){
			if(area==strHtml) $(this).addClass('block');
			else $(this).removeClass('block');
		}
		else if(strLeve=='letter'){
			letterArr = letter.split('|');
			if(letterArr.indexOf(strHtml)!=-1) $(this).addClass('block');
			else $(this).removeClass('block');
		}

		if(a=='all'){
			$(this).addClass('block');
		}

		dl.removeClass('end');
	});


	var dl_block = $('.brand-grid-list-dl.block');
	dl_block.each(function(){
		var index  = dl_block.index(this);
		if((index+3)%5==0) $(this).addClass('end');
	});

}
