/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);(function($){var abs=Math.abs,max=Math.max,min=Math.min,round=Math.round;function div(){return $('<div/>')}$.imgAreaSelect=function(img,options){var $img=$(img),imgLoaded,$box=div(),$area=div(),$border=div().add(div()).add(div()).add(div()),$outer=div().add(div()).add(div()).add(div()),$handles=$([]),$areaOpera,left,top,imgOfs={left:0,top:0},imgWidth,imgHeight,$parent,parOfs={left:0,top:0},zIndex=0,position='absolute',startX,startY,scaleX,scaleY,resize,minWidth,minHeight,maxWidth,maxHeight,aspectRatio,shown,x1,y1,x2,y2,selection={x1:0,y1:0,x2:0,y2:0,width:0,height:0},docElem=document.documentElement,$p,d,i,o,w,h,adjusted;function viewX(x){return x+imgOfs.left-parOfs.left}function viewY(y){return y+imgOfs.top-parOfs.top}function selX(x){return x-imgOfs.left+parOfs.left}function selY(y){return y-imgOfs.top+parOfs.top}function evX(event){return event.pageX-parOfs.left}function evY(event){return event.pageY-parOfs.top}function getSelection(noScale){var sx=noScale||scaleX,sy=noScale||scaleY;return{x1:round(selection.x1*sx),y1:round(selection.y1*sy),x2:round(selection.x2*sx),y2:round(selection.y2*sy),width:round(selection.x2*sx)-round(selection.x1*sx),height:round(selection.y2*sy)-round(selection.y1*sy)}}function setSelection(x1,y1,x2,y2,noScale){var sx=noScale||scaleX,sy=noScale||scaleY;selection={x1:round(x1/sx||0),y1:round(y1/sy||0),x2:round(x2/sx||0),y2:round(y2/sy||0)};selection.width=selection.x2-selection.x1;selection.height=selection.y2-selection.y1}function adjust(){if(!$img.width())return;imgOfs={left:round($img.offset().left),top:round($img.offset().top)};imgWidth=$img.innerWidth();imgHeight=$img.innerHeight();imgOfs.top+=($img.outerHeight()-imgHeight)>>1;imgOfs.left+=($img.outerWidth()-imgWidth)>>1;minWidth=round(options.minWidth/scaleX)||0;minHeight=round(options.minHeight/scaleY)||0;maxWidth=round(min(options.maxWidth/scaleX||1<<24,imgWidth));maxHeight=round(min(options.maxHeight/scaleY||1<<24,imgHeight));if($().jquery=='1.3.2'&&position=='fixed'&&!docElem['getBoundingClientRect']){imgOfs.top+=max(document.body.scrollTop,docElem.scrollTop);imgOfs.left+=max(document.body.scrollLeft,docElem.scrollLeft)}parOfs=/absolute|relative/.test($parent.css('position'))?{left:round($parent.offset().left)-$parent.scrollLeft(),top:round($parent.offset().top)-$parent.scrollTop()}:position=='fixed'?{left:$(document).scrollLeft(),top:$(document).scrollTop()}:{left:0,top:0};left=viewX(0);top=viewY(0);if(selection.x2>imgWidth||selection.y2>imgHeight)doResize()}function update(resetKeyPress){if(!shown)return;$box.css({left:viewX(selection.x1),top:viewY(selection.y1)}).add($area).width(w=selection.width).height(h=selection.height);$area.add($border).add($handles).css({left:0,top:0});$border.width(max(w-$border.outerWidth()+$border.innerWidth(),0)).height(max(h-$border.outerHeight()+$border.innerHeight(),0));$($outer[0]).css({left:left,top:top,width:selection.x1,height:imgHeight});$($outer[1]).css({left:left+selection.x1,top:top,width:w,height:selection.y1});$($outer[2]).css({left:left+selection.x2,top:top,width:imgWidth-selection.x2,height:imgHeight});$($outer[3]).css({left:left+selection.x1,top:top+selection.y2,width:w,height:imgHeight-selection.y2});w-=$handles.outerWidth();h-=$handles.outerHeight();switch($handles.length){case 8:$($handles[4]).css({left:w>>1});$($handles[5]).css({left:w,top:h>>1});$($handles[6]).css({left:w>>1,top:h});$($handles[7]).css({top:h>>1});case 4:$handles.slice(1,3).css({left:w});$handles.slice(2,4).css({top:h})}if(resetKeyPress!==false){if($.imgAreaSelect.keyPress!=docKeyPress)$(document).unbind($.imgAreaSelect.keyPress,$.imgAreaSelect.onKeyPress);if(options.keys)$(document)[$.imgAreaSelect.keyPress]($.imgAreaSelect.onKeyPress=docKeyPress)}if($.browser.msie&&$border.outerWidth()-$border.innerWidth()==2){$border.css('margin',0);setTimeout(function(){$border.css('margin','auto')},0)}}function doUpdate(resetKeyPress){adjust();update(resetKeyPress);x1=viewX(selection.x1);y1=viewY(selection.y1);x2=viewX(selection.x2);y2=viewY(selection.y2)}function hide($elem,fn){options.fadeSpeed?$elem.fadeOut(options.fadeSpeed,fn):$elem.hide()}function areaMouseMove(event){var x=selX(evX(event))-selection.x1,y=selY(evY(event))-selection.y1;if(!adjusted){adjust();adjusted=true;$box.one('mouseout',function(){adjusted=false})}resize='';if(options.resizable){if(y<=options.resizeMargin)resize='n';else if(y>=selection.height-options.resizeMargin)resize='s';if(x<=options.resizeMargin)resize+='w';else if(x>=selection.width-options.resizeMargin)resize+='e'}$box.css('cursor',resize?resize+'-resize':options.movable?'move':'');if($areaOpera)$areaOpera.toggle()}function docMouseUp(event){$('body').css('cursor','');if(options.autoHide||selection.width*selection.height==0)hide($box.add($outer),function(){$(this).hide()});$(document).unbind('mousemove',selectingMouseMove);$box.mousemove(areaMouseMove);options.onSelectEnd(img,getSelection())}function areaMouseDown(event){if(event.which!=1)return false;adjust();if(resize){$('body').css('cursor',resize+'-resize');x1=viewX(selection[/w/.test(resize)?'x2':'x1']);y1=viewY(selection[/n/.test(resize)?'y2':'y1']);$(document).mousemove(selectingMouseMove).one('mouseup',docMouseUp);$box.unbind('mousemove',areaMouseMove)}else if(options.movable){startX=left+selection.x1-evX(event);startY=top+selection.y1-evY(event);$box.unbind('mousemove',areaMouseMove);$(document).mousemove(movingMouseMove).one('mouseup',function(){options.onSelectEnd(img,getSelection());$(document).unbind('mousemove',movingMouseMove);$box.mousemove(areaMouseMove)})}else $img.mousedown(event);return false}function fixAspectRatio(xFirst){if(aspectRatio)if(xFirst){x2=max(left,min(left+imgWidth,x1+abs(y2-y1)*aspectRatio*(x2>x1||-1)));y2=round(max(top,min(top+imgHeight,y1+abs(x2-x1)/aspectRatio*(y2>y1||-1))));x2=round(x2)}else{y2=max(top,min(top+imgHeight,y1+abs(x2-x1)/aspectRatio*(y2>y1||-1)));x2=round(max(left,min(left+imgWidth,x1+abs(y2-y1)*aspectRatio*(x2>x1||-1))));y2=round(y2)}}function doResize(){x1=min(x1,left+imgWidth);y1=min(y1,top+imgHeight);if(abs(x2-x1)<minWidth){x2=x1-minWidth*(x2<x1||-1);if(x2<left)x1=left+minWidth;else if(x2>left+imgWidth)x1=left+imgWidth-minWidth}if(abs(y2-y1)<minHeight){y2=y1-minHeight*(y2<y1||-1);if(y2<top)y1=top+minHeight;else if(y2>top+imgHeight)y1=top+imgHeight-minHeight}x2=max(left,min(x2,left+imgWidth));y2=max(top,min(y2,top+imgHeight));fixAspectRatio(abs(x2-x1)<abs(y2-y1)*aspectRatio);if(abs(x2-x1)>maxWidth){x2=x1-maxWidth*(x2<x1||-1);fixAspectRatio()}if(abs(y2-y1)>maxHeight){y2=y1-maxHeight*(y2<y1||-1);fixAspectRatio(true)}selection={x1:selX(min(x1,x2)),x2:selX(max(x1,x2)),y1:selY(min(y1,y2)),y2:selY(max(y1,y2)),width:abs(x2-x1),height:abs(y2-y1)};update();options.onSelectChange(img,getSelection())}function selectingMouseMove(event){x2=/w|e|^$/.test(resize)||aspectRatio?evX(event):viewX(selection.x2);y2=/n|s|^$/.test(resize)||aspectRatio?evY(event):viewY(selection.y2);doResize();return false}function doMove(newX1,newY1){x2=(x1=newX1)+selection.width;y2=(y1=newY1)+selection.height;$.extend(selection,{x1:selX(x1),y1:selY(y1),x2:selX(x2),y2:selY(y2)});update();options.onSelectChange(img,getSelection())}function movingMouseMove(event){x1=max(left,min(startX+evX(event),left+imgWidth-selection.width));y1=max(top,min(startY+evY(event),top+imgHeight-selection.height));doMove(x1,y1);event.preventDefault();return false}function startSelection(){$(document).unbind('mousemove',startSelection);adjust();x2=x1;y2=y1;doResize();resize='';if(!$outer.is(':visible'))$box.add($outer).hide().fadeIn(options.fadeSpeed||0);shown=true;$(document).unbind('mouseup',cancelSelection).mousemove(selectingMouseMove).one('mouseup',docMouseUp);$box.unbind('mousemove',areaMouseMove);options.onSelectStart(img,getSelection())}function cancelSelection(){$(document).unbind('mousemove',startSelection).unbind('mouseup',cancelSelection);hide($box.add($outer));setSelection(selX(x1),selY(y1),selX(x1),selY(y1));if(!this instanceof $.imgAreaSelect){options.onSelectChange(img,getSelection());options.onSelectEnd(img,getSelection())}}function imgMouseDown(event){if(event.which!=1||$outer.is(':animated'))return false;adjust();startX=x1=evX(event);startY=y1=evY(event);$(document).mousemove(startSelection).mouseup(cancelSelection);return false}function windowResize(){doUpdate(false)}function imgLoad(){imgLoaded=true;setOptions(options=$.extend({classPrefix:'imgareaselect',movable:true,parent:'body',resizable:true,resizeMargin:10,onInit:function(){},onSelectStart:function(){},onSelectChange:function(){},onSelectEnd:function(){}},options));$box.add($outer).css({visibility:''});if(options.show){shown=true;adjust();update();$box.add($outer).hide().fadeIn(options.fadeSpeed||0)}setTimeout(function(){options.onInit(img,getSelection())},0)}var docKeyPress=function(event){var k=options.keys,d,t,key=event.keyCode;d=!isNaN(k.alt)&&(event.altKey||event.originalEvent.altKey)?k.alt:!isNaN(k.ctrl)&&event.ctrlKey?k.ctrl:!isNaN(k.shift)&&event.shiftKey?k.shift:!isNaN(k.arrows)?k.arrows:10;if(k.arrows=='resize'||(k.shift=='resize'&&event.shiftKey)||(k.ctrl=='resize'&&event.ctrlKey)||(k.alt=='resize'&&(event.altKey||event.originalEvent.altKey))){switch(key){case 37:d=-d;case 39:t=max(x1,x2);x1=min(x1,x2);x2=max(t+d,x1);fixAspectRatio();break;case 38:d=-d;case 40:t=max(y1,y2);y1=min(y1,y2);y2=max(t+d,y1);fixAspectRatio(true);break;default:return}doResize()}else{x1=min(x1,x2);y1=min(y1,y2);switch(key){case 37:doMove(max(x1-d,left),y1);break;case 38:doMove(x1,max(y1-d,top));break;case 39:doMove(x1+min(d,imgWidth-selX(x2)),y1);break;case 40:doMove(x1,y1+min(d,imgHeight-selY(y2)));break;default:return}}return false};function styleOptions($elem,props){for(option in props)if(options[option]!==undefined)$elem.css(props[option],options[option])}function setOptions(newOptions){if(newOptions.parent)($parent=$(newOptions.parent)).append($box.add($outer));$.extend(options,newOptions);adjust();if(newOptions.handles!=null){$handles.remove();$handles=$([]);i=newOptions.handles?newOptions.handles=='corners'?4:8:0;while(i--)$handles=$handles.add(div());$handles.addClass(options.classPrefix+'-handle').css({position:'absolute',fontSize:0,zIndex:zIndex+1||1});if(!parseInt($handles.css('width'))>=0)$handles.width(5).height(5);if(o=options.borderWidth)$handles.css({borderWidth:o,borderStyle:'solid'});styleOptions($handles,{borderColor1:'border-color',borderColor2:'background-color',borderOpacity:'opacity'})}scaleX=options.imageWidth/imgWidth||1;scaleY=options.imageHeight/imgHeight||1;if(newOptions.x1!=null){setSelection(newOptions.x1,newOptions.y1,newOptions.x2,newOptions.y2);newOptions.show=!newOptions.hide}if(newOptions.keys)options.keys=$.extend({shift:1,ctrl:'resize'},newOptions.keys);$outer.addClass(options.classPrefix+'-outer');$area.addClass(options.classPrefix+'-selection');for(i=0;i++<4;)$($border[i-1]).addClass(options.classPrefix+'-border'+i);styleOptions($area,{selectionColor:'background-color',selectionOpacity:'opacity'});styleOptions($border,{borderOpacity:'opacity',borderWidth:'border-width'});styleOptions($outer,{outerColor:'background-color',outerOpacity:'opacity'});if(o=options.borderColor1)$($border[0]).css({borderStyle:'solid',borderColor:o});if(o=options.borderColor2)$($border[1]).css({borderStyle:'dashed',borderColor:o});$box.append($area.add($border).add($areaOpera).add($handles));if($.browser.msie){if(o=$outer.css('filter').match(/opacity=(\d+)/))$outer.css('opacity',o[1]/100);if(o=$border.css('filter').match(/opacity=(\d+)/))$border.css('opacity',o[1]/100)}if(newOptions.hide)hide($box.add($outer));else if(newOptions.show&&imgLoaded){shown=true;$box.add($outer).fadeIn(options.fadeSpeed||0);doUpdate()}aspectRatio=(d=(options.aspectRatio||'').split(/:/))[0]/d[1];$img.add($outer).unbind('mousedown',imgMouseDown);if(options.disable||options.enable===false){$box.unbind('mousemove',areaMouseMove).unbind('mousedown',areaMouseDown);$(window).unbind('resize',windowResize)}else{if(options.enable||options.disable===false){if(options.resizable||options.movable)$box.mousemove(areaMouseMove).mousedown(areaMouseDown);$(window).resize(windowResize)}if(!options.persistent)$img.add($outer).mousedown(imgMouseDown)}options.enable=options.disable=undefined}this.remove=function(){setOptions({disable:true});$box.add($outer).remove()};this.getOptions=function(){return options};this.setOptions=setOptions;this.getSelection=getSelection;this.setSelection=setSelection;this.cancelSelection=cancelSelection;this.update=doUpdate;$p=$img;while($p.length){zIndex=max(zIndex,!isNaN($p.css('z-index'))?$p.css('z-index'):zIndex);if($p.css('position')=='fixed')position='fixed';$p=$p.parent(':not(body)')}zIndex=options.zIndex||zIndex;if($.browser.msie)$img.attr('unselectable','on');$.imgAreaSelect.keyPress=$.browser.msie||$.browser.safari?'keydown':'keypress';if($.browser.opera)$areaOpera=div().css({width:'100%',height:'100%',position:'absolute',zIndex:zIndex+2||2});$box.add($outer).css({visibility:'hidden',position:position,overflow:'hidden',zIndex:zIndex||'0'});$box.css({zIndex:zIndex+2||2});$area.add($border).css({position:'absolute',fontSize:0});img.complete||img.readyState=='complete'||!$img.is('img')?imgLoad():$img.one('load',imgLoad);if($.browser.msie&&$.browser.version>=7)img.src=img.src};$.fn.imgAreaSelect=function(options){options=options||{};this.each(function(){if($(this).data('imgAreaSelect')){if(options.remove){$(this).data('imgAreaSelect').remove();$(this).removeData('imgAreaSelect')}else $(this).data('imgAreaSelect').setOptions(options)}else if(!options.remove){if(options.enable===undefined&&options.disable===undefined)options.enable=true;$(this).data('imgAreaSelect',new $.imgAreaSelect(this,options))}});if(options.instance)return $(this).data('imgAreaSelect');return this}})(jQuery);eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(m($){1k W=2v.4N,D=2v.4M,F=2v.4L,u=2v.4K;m V(){C $("<4J/>")};$.N=m(T,c){1k O=$(T),2E,A=V(),1i=V(),I=V().r(V()).r(V()).r(V()),B=V().r(V()).r(V()).r(V()),E=$([]),1J,G,l,17={v:0,l:0},Q,M,1j,1f={v:0,l:0},12=0,1I="1G",2k,2j,1s,1r,S,1A,1z,2o,2n,14,1O,a,b,j,g,f={a:0,b:0,j:0,g:0,H:0,L:0},2u=R.4I,$p,d,i,o,w,h,2p;m 1m(x){C x+17.v-1f.v};m 1l(y){C y+17.l-1f.l};m 1a(x){C x-17.v+1f.v};m 19(y){C y-17.l+1f.l};m 1y(3H){C 3H.4H-1f.v};m 1x(3G){C 3G.4G-1f.l};m 13(30){1k 1h=30||1s,1g=30||1r;C{a:u(f.a*1h),b:u(f.b*1g),j:u(f.j*1h),g:u(f.g*1g),H:u(f.j*1h)-u(f.a*1h),L:u(f.g*1g)-u(f.b*1g)}};m 23(a,b,j,g,2Z){1k 1h=2Z||1s,1g=2Z||1r;f={a:u(a/1h||0),b:u(b/1g||0),j:u(j/1h||0),g:u(g/1g||0)};f.H=f.j-f.a;f.L=f.g-f.b};m 1e(){9(!O.H()){C}17={v:u(O.2t().v),l:u(O.2t().l)};Q=O.2X();M=O.3F();17.l+=(O.2Y()-M)>>1;17.v+=(O.2q()-Q)>>1;1A=u(c.4F/1s)||0;1z=u(c.4E/1r)||0;2o=u(F(c.4D/1s||1<<24,Q));2n=u(F(c.4C/1r||1<<24,M));9($().4B=="1.3.2"&&1I=="21"&&!2u["4A"]){17.l+=D(R.1p.2r,2u.2r);17.v+=D(R.1p.2s,2u.2s)}1f=/1G|4z/.1V(1j.q("1o"))?{v:u(1j.2t().v)-1j.2s(),l:u(1j.2t().l)-1j.2r()}:1I=="21"?{v:$(R).2s(),l:$(R).2r()}:{v:0,l:0};G=1m(0);l=1l(0);9(f.j>Q||f.g>M){1S()}};m 1T(3D){9(!1O){C}A.q({v:1m(f.a),l:1l(f.b)}).r(1i).H(w=f.H).L(h=f.L);1i.r(I).r(E).q({v:0,l:0});I.H(D(w-I.2q()+I.2X(),0)).L(D(h-I.2Y()+I.3F(),0));$(B[0]).q({v:G,l:l,H:f.a,L:M});$(B[1]).q({v:G+f.a,l:l,H:w,L:f.b});$(B[2]).q({v:G+f.j,l:l,H:Q-f.j,L:M});$(B[3]).q({v:G+f.a,l:l+f.g,H:w,L:M-f.g});w-=E.2q();h-=E.2Y();2N(E.3b){15 8:$(E[4]).q({v:w>>1});$(E[5]).q({v:w,l:h>>1});$(E[6]).q({v:w>>1,l:h});$(E[7]).q({l:h>>1});15 4:E.3E(1,3).q({v:w});E.3E(2,4).q({l:h})}9(3D!==Y){9($.N.1Z!=2Q){$(R).U($.N.1Z,$.N.3C)}9(c.1R){$(R)[$.N.1Z]($.N.3C=2Q)}}9($.1b.1E&&I.2q()-I.2X()==2){I.q("3B",0);3u(m(){I.q("3B","4y")},0)}};m 22(3A){1e();1T(3A);a=1m(f.a);b=1l(f.b);j=1m(f.j);g=1l(f.g)};m 27(2W,2w){c.1N?2W.4x(c.1N,2w):2W.1q()};m 1c(2V){1k x=1a(1y(2V))-f.a,y=19(1x(2V))-f.b;9(!2p){1e();2p=11;A.1F("4w",m(){2p=Y})}S="";9(c.2C){9(y<=c.1U){S="n"}X{9(y>=f.L-c.1U){S="s"}}9(x<=c.1U){S+="w"}X{9(x>=f.H-c.1U){S+="e"}}}A.q("2U",S?S+"-18":c.26?"4v":"");9(1J){1J.4u()}};m 2R(4t){$("1p").q("2U","");9(c.4s||f.H*f.L==0){27(A.r(B),m(){$(J).1q()})}$(R).U("P",2l);A.P(1c);c.2f(T,13())};m 2B(1W){9(1W.3w!=1){C Y}1e();9(S){$("1p").q("2U",S+"-18");a=1m(f[/w/.1V(S)?"j":"a"]);b=1l(f[/n/.1V(S)?"g":"b"]);$(R).P(2l).1F("1w",2R);A.U("P",1c)}X{9(c.26){2k=G+f.a-1y(1W);2j=l+f.b-1x(1W);A.U("P",1c);$(R).P(2S).1F("1w",m(){c.2f(T,13());$(R).U("P",2S);A.P(1c)})}X{O.1M(1W)}}C Y};m 1v(3z){9(14){9(3z){j=D(G,F(G+Q,a+W(g-b)*14*(j>a||-1)));g=u(D(l,F(l+M,b+W(j-a)/14*(g>b||-1))));j=u(j)}X{g=D(l,F(l+M,b+W(j-a)/14*(g>b||-1)));j=u(D(G,F(G+Q,a+W(g-b)*14*(j>a||-1))));g=u(g)}}};m 1S(){a=F(a,G+Q);b=F(b,l+M);9(W(j-a)<1A){j=a-1A*(j<a||-1);9(j<G){a=G+1A}X{9(j>G+Q){a=G+Q-1A}}}9(W(g-b)<1z){g=b-1z*(g<b||-1);9(g<l){b=l+1z}X{9(g>l+M){b=l+M-1z}}}j=D(G,F(j,G+Q));g=D(l,F(g,l+M));1v(W(j-a)<W(g-b)*14);9(W(j-a)>2o){j=a-2o*(j<a||-1);1v()}9(W(g-b)>2n){g=b-2n*(g<b||-1);1v(11)}f={a:1a(F(a,j)),j:1a(D(a,j)),b:19(F(b,g)),g:19(D(b,g)),H:W(j-a),L:W(g-b)};1T();c.2g(T,13())};m 2l(2T){j=/w|e|^$/.1V(S)||14?1y(2T):1m(f.j);g=/n|s|^$/.1V(S)||14?1x(2T):1l(f.g);1S();C Y};m 1u(3y,3x){j=(a=3y)+f.H;g=(b=3x)+f.L;$.2c(f,{a:1a(a),b:19(b),j:1a(j),g:19(g)});1T();c.2g(T,13())};m 2S(2m){a=D(G,F(2k+1y(2m),G+Q-f.H));b=D(l,F(2j+1x(2m),l+M-f.L));1u(a,b);2m.4r();C Y};m 2h(){$(R).U("P",2h);1e();j=a;g=b;1S();S="";9(!B.2y(":4q")){A.r(B).1q().2D(c.1N||0)}1O=11;$(R).U("1w",1L).P(2l).1F("1w",2R);A.U("P",1c);c.3v(T,13())};m 1L(){$(R).U("P",2h).U("1w",1L);27(A.r(B));23(1a(a),19(b),1a(a),19(b));9(!J 4p $.N){c.2g(T,13());c.2f(T,13())}};m 2z(2i){9(2i.3w!=1||B.2y(":4o")){C Y}1e();2k=a=1y(2i);2j=b=1x(2i);$(R).P(2h).1w(1L);C Y};m 2A(){22(Y)};m 2x(){2E=11;25(c=$.2c({1Q:"4n",26:11,20:"1p",2C:11,1U:10,3t:m(){},3v:m(){},2g:m(){},2f:m(){}},c));A.r(B).q({36:""});9(c.2F){1O=11;1e();1T();A.r(B).1q().2D(c.1N||0)}3u(m(){c.3t(T,13())},0)};1k 2Q=m(16){1k k=c.1R,d,t,2M=16.4m;d=!1K(k.2O)&&(16.2e||16.3q.2e)?k.2O:!1K(k.2a)&&16.3r?k.2a:!1K(k.2b)&&16.3s?k.2b:!1K(k.2P)?k.2P:10;9(k.2P=="18"||(k.2b=="18"&&16.3s)||(k.2a=="18"&&16.3r)||(k.2O=="18"&&(16.2e||16.3q.2e))){2N(2M){15 37:d=-d;15 39:t=D(a,j);a=F(a,j);j=D(t+d,a);1v();1t;15 38:d=-d;15 40:t=D(b,g);b=F(b,g);g=D(t+d,b);1v(11);1t;3p:C}1S()}X{a=F(a,j);b=F(b,g);2N(2M){15 37:1u(D(a-d,G),b);1t;15 38:1u(a,D(b-d,l));1t;15 39:1u(a+F(d,Q-1a(j)),b);1t;15 40:1u(a,b+F(d,M-19(g)));1t;3p:C}}C Y};m 1P(3o,2L){3m(2d 4l 2L){9(c[2d]!==1X){3o.q(2L[2d],c[2d])}}};m 25(K){9(K.20){(1j=$(K.20)).3g(A.r(B))}$.2c(c,K);1e();9(K.2K!=3n){E.1n();E=$([]);i=K.2K?K.2K=="4k"?4:8:0;3c(i--){E=E.r(V())}E.29(c.1Q+"-4j").q({1o:"1G",34:0,1H:12+1||1});9(!4i(E.q("H"))>=0){E.H(5).L(5)}9(o=c.2J){E.q({2J:o,2G:"3j"})}1P(E,{3k:"2I-28",3i:"2H-28",3l:"1d"})}1s=c.4h/Q||1;1r=c.4g/M||1;9(K.a!=3n){23(K.a,K.b,K.j,K.g);K.2F=!K.1q}9(K.1R){c.1R=$.2c({2b:1,2a:"18"},K.1R)}B.29(c.1Q+"-4f");1i.29(c.1Q+"-4e");3m(i=0;i++<4;){$(I[i-1]).29(c.1Q+"-2I"+i)}1P(1i,{4d:"2H-28",4c:"1d"});1P(I,{3l:"1d",2J:"2I-H"});1P(B,{4b:"2H-28",4a:"1d"});9(o=c.3k){$(I[0]).q({2G:"3j",3h:o})}9(o=c.3i){$(I[1]).q({2G:"49",3h:o})}A.3g(1i.r(I).r(1J).r(E));9($.1b.1E){9(o=B.q("3f").3e(/1d=(\\d+)/)){B.q("1d",o[1]/1Y)}9(o=I.q("3f").3e(/1d=(\\d+)/)){I.q("1d",o[1]/1Y)}}9(K.1q){27(A.r(B))}X{9(K.2F&&2E){1O=11;A.r(B).2D(c.1N||0);22()}}14=(d=(c.48||"").47(/:/))[0]/d[1];O.r(B).U("1M",2z);9(c.1D||c.1C===Y){A.U("P",1c).U("1M",2B);$(3d).U("18",2A)}X{9(c.1C||c.1D===Y){9(c.2C||c.26){A.P(1c).1M(2B)}$(3d).18(2A)}9(!c.46){O.r(B).1M(2z)}}c.1C=c.1D=1X};J.1n=m(){25({1D:11});A.r(B).1n()};J.45=m(){C c};J.31=25;J.44=13;J.43=23;J.42=1L;J.41=22;$p=O;3c($p.3b){12=D(12,!1K($p.q("z-3a"))?$p.q("z-3a"):12);9($p.q("1o")=="21"){1I="21"}$p=$p.20(":3Z(1p)")}12=c.1H||12;9($.1b.1E){O.3Y("3X","3W")}$.N.1Z=$.1b.1E||$.1b.3V?"3U":"3T";9($.1b.3S){1J=V().q({H:"1Y%",L:"1Y%",1o:"1G",1H:12+2||2})}A.r(B).q({36:"35",1o:1I,3R:"35",1H:12||"0"});A.q({1H:12+2||2});1i.r(I).q({1o:"1G",34:0});T.33||T.3Q=="33"||!O.2y("3P")?2x():O.1F("3O",2x);9($.1b.1E&&$.1b.3N>=7){T.32=T.32}};$.2w.N=m(Z){Z=Z||{};J.3M(m(){9($(J).1B("N")){9(Z.1n){$(J).1B("N").1n();$(J).3L("N")}X{$(J).1B("N").31(Z)}}X{9(!Z.1n){9(Z.1C===1X&&Z.1D===1X){Z.1C=11}$(J).1B("N",3K $.N(J,Z))}}});9(Z.3J){C $(J).1B("N")}C J}})(3I);',62,298,'|||||||||if|x1|y1|_7|||_23|y2|||x2||top|function||||css|add|||_4|left|||||_a|_d|return|_2|_e|_3|_10|width|_c|this|_53|height|_13|imgAreaSelect|_8|mousemove|_12|document|_1c|_6|unbind|_5|_1|else|false|_54||true|_16|_2c|_21|case|_4f|_11|resize|_29|_28|browser|_39|opacity|_30|_15|sy|sx|_b|_14|var|_27|_26|remove|position|body|hide|_1b|_1a|break|_44|_41|mouseup|evY|evX|_1e|_1d|data|enable|disable|msie|one|absolute|zIndex|_17|_f|isNaN|_49|mousedown|fadeSpeed|_22|_50|classPrefix|keys|_31|_32|resizeMargin|test|_3f|undefined|100|keyPress|parent|fixed|_35|_2e||_4e|movable|_37|color|addClass|ctrl|shift|extend|option|altKey|onSelectEnd|onSelectChange|_48|_4b|_19|_18|_3d|_47|_20|_1f|_25|outerWidth|scrollTop|scrollLeft|offset|_24|Math|fn|_4d|is|_4a|_4c|_3e|resizable|fadeIn|_9|show|borderStyle|background|border|borderWidth|handles|_52|key|switch|alt|arrows|_34|_3b|_40|_43|cursor|_3a|_38|innerWidth|outerHeight|_2f|_2d|setOptions|src|complete|fontSize|hidden|visibility||||index|length|while|window|match|filter|append|borderColor|borderColor2|solid|borderColor1|borderOpacity|for|null|_51|default|originalEvent|ctrlKey|shiftKey|onInit|setTimeout|onSelectStart|which|_46|_45|_42|_36|margin|onKeyPress|_33|slice|innerHeight|_2b|_2a|jQuery|instance|new|removeData|each|version|load|img|readyState|overflow|opera|keypress|keydown|safari|on|unselectable|attr|not||update|cancelSelection|setSelection|getSelection|getOptions|persistent|split|aspectRatio|dashed|outerOpacity|outerColor|selectionOpacity|selectionColor|selection|outer|imageHeight|imageWidth|parseInt|handle|corners|in|keyCode|imgareaselect|animated|instanceof|visible|preventDefault|autoHide|_3c|toggle|move|mouseout|fadeOut|auto|relative|getBoundingClientRect|jquery|maxHeight|maxWidth|minHeight|minWidth|pageY|pageX|documentElement|div|round|min|max|abs'.split('|')))
var mouseState = false;
var curTarget = null;
var mouseOffset = null;
var isMousedownOnRefCanvas = false;

var RefBG = "#eff3ff";
var RefBG_rgb = "rgb(239, 243, 255)";
var RefBGhover = "#bdd7e7";
var RefBGhover_rgb = "rgb(189, 215, 231)";

// Variants background
var ppBG = "#ffffd4";
var ppBG_rgb = "rgb(255, 255, 212)";
var ppBGhover = "#fed98e";
var ppBGhover_rgb = "rgb(254, 217, 142)";

// Molecular traits background 
var pmBG = "#fee5d9";
var pmBG_rgb = "rgb(254, 229, 217)";
var pmBGhover = "#fcae91";
var pmBGhover_rgb = "rgb(252, 174, 145)";

// Phenotype background 
var pdBG = "#c7e9c0";
var pdBG_rgb = "rgb(199, 233, 192)";
var pdBGhover = "#a1d99b";
var pdBGhover_rgb = "rgb(161, 217, 155)";

Number.prototype.NaN0 = function() {
	return isNaN(this) ? 0 : this;
}
$(document).ready(function() {
	var trackTable = document.getElementById("tableTrack");
	var trackNameNodes = trackTable.getElementsByClassName("trackName");
	for(var i = 0; i < trackNameNodes.length; i++) {
		//thNodes[i].onmouseover = mouseOver;
		//thNodes[i].onmouseout = mouseOut;
		//thNodes[i].onmousedown = mouseDown;

		trackNameNodes[i].childNodes[0].onmouseover = mouseOver;
		trackNameNodes[i].childNodes[0].onmouseout = mouseOut;
		trackNameNodes[i].childNodes[0].onmousedown = mouseDown;
	}

	document.onmouseup = mouseUp;
	document.onmousemove = mouseMove;

	document.getElementById("refTrack1").addEventListener("mouseover", refSeqMouseover, true);
	
	$(document).bind("mousedown", function(){
		isMousedownOnRefCanvas = true;
		var verticalLine = $(document.getElementById("verticalLine"));
		var indexSpan = $(document.getElementById("indexSpan"));
		verticalLine.css("display", "none");
		indexSpan.css("display", "none");
	});
	$(document).bind("mouseup", function(){
		isMousedownOnRefCanvas = false;
	});

	/*add handle mouseover & mousemove event
	 *in order to set the display-value  of
	 * some html elements whose positon is
	 * sbsolute to none-value */
	document.getElementsByTagName("body")[0].addEventListener("mousemove", bodyMousemove, true);
	document.getElementsByTagName("body")[0].addEventListener("mouseover", bodyMouseover, true);
});
function mouseOver(ev) {
	if(mouseState == false) {
		ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		target = target.parentNode;
		var trNode = target.parentNode;
		var tdNodes = trNode.getElementsByTagName("td");
		if((/^_/).test(trNode.getAttribute(xmlAttributeId))){
			if(trNode.getAttribute(xmlAttributeId) == personalPannel.Pvar.id){
				trNode.style.background = ppBGhover;
				tdNodes[0].style.background = ppBGhover;
				tdNodes[1].firstChild.style.background = ppBGhover;
				tdNodes[2].firstChild.style.background = ppBGhover;
			}else if(personalPannel.Pfanno.id && trNode.getAttribute(xmlAttributeId) == personalPannel.Pfanno.id || personalPannel.Panno.id && trNode.getAttribute(xmlAttributeId) == personalPannel.Panno.id){
				trNode.style.background = pmBGhover;
				tdNodes[0].style.background = pmBGhover;
				tdNodes[1].firstChild.style.background = pmBGhover;
				tdNodes[2].firstChild.style.background = pmBGhover;
			}else{
				trNode.style.background = pdBGhover;
				tdNodes[0].style.background = pdBGhover;
				tdNodes[1].firstChild.style.background = pdBGhover;
				tdNodes[2].firstChild.style.background = pdBGhover;
			}
		}else{
			trNode.style.background = RefBGhover;
			tdNodes[0].style.background = RefBGhover;
			tdNodes[1].firstChild.style.background = RefBGhover;
			tdNodes[2].firstChild.style.background = RefBGhover;
		}
	}
}

function mouseOut(ev) {
	if(mouseState == false) {
		ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		target = target.parentNode;
		var trNode = target.parentNode;
		var tdNodes = trNode.getElementsByTagName("td");
		if((/^_/).test(trNode.getAttribute(xmlAttributeId))){
			if(trNode.getAttribute(xmlAttributeId) == personalPannel.Pvar.id){
				trNode.style.background = ppBG;
				tdNodes[0].style.background = ppBG;
				tdNodes[1].firstChild.style.background = ppBG;
				tdNodes[2].firstChild.style.background = ppBG;
			}else if(personalPannel.Pfanno.id && trNode.getAttribute(xmlAttributeId) == personalPannel.Pfanno.id || personalPannel.Panno.id && trNode.getAttribute(xmlAttributeId) == personalPannel.Panno.id){
				trNode.style.background = pmBG;
				tdNodes[0].style.background = pmBG;
				tdNodes[1].firstChild.style.background = pmBG;
				tdNodes[2].firstChild.style.background = pmBG;
			}else{
				trNode.style.background = pdBG;
				tdNodes[0].style.background = pdBG;
				tdNodes[1].firstChild.style.background = pdBG;
				tdNodes[2].firstChild.style.background = pdBG;
			}
		}else{
			trNode.style.background = RefBG;
			tdNodes[0].style.background = RefBG;
			tdNodes[1].firstChild.style.background = RefBG;
			tdNodes[2].firstChild.style.background = RefBG;
		}
	}
}

function mouseDown(ev) {
	ev = ev || window.event;
	var target = ev.target || ev.srcElement;
	var trackNameNode = target.parentNode;
	curTarget = trackNameNode.parentNode;
	mouseOffset = getMouseOffset(curTarget, ev);
	document.body.onselectstart = function() {
		return false;
	};
	mouseState = true;
}

function mouseUp() {
	mouseState = false;
	if(curTarget != null) {
		if(curTarget.getElementsByTagName("td")[1].firstChild.style.background.indexOf(ppBGhover_rgb)>=0){
			curTarget.style.background = ppBG;
			curTarget.getElementsByTagName("td")[0].style.background = ppBG;
			curTarget.getElementsByTagName("td")[1].firstChild.style.background = ppBG;
			curTarget.getElementsByTagName("td")[2].firstChild.style.background = ppBG;
		}else if(curTarget.getElementsByTagName("td")[1].firstChild.style.background.indexOf(pmBGhover_rgb)>=0){
			curTarget.style.background = pmBG;
			curTarget.getElementsByTagName("td")[0].style.background = pmBG;
			curTarget.getElementsByTagName("td")[1].firstChild.style.background = pmBG;
			curTarget.getElementsByTagName("td")[2].firstChild.style.background = pmBG;
		}else if(curTarget.getElementsByTagName("td")[1].firstChild.style.background.indexOf(pdBGhover_rgb)>=0){
			curTarget.style.background = pdBG;
			curTarget.getElementsByTagName("td")[0].style.background = pdBG;
			curTarget.getElementsByTagName("td")[1].firstChild.style.background = pdBG;
			curTarget.getElementsByTagName("td")[2].firstChild.style.background = pdBG;
		}else{
			curTarget.style.background = RefBG;
			curTarget.getElementsByTagName("td")[0].style.background = RefBG;
			curTarget.getElementsByTagName("td")[1].firstChild.style.background = RefBG;
			curTarget.getElementsByTagName("td")[2].firstChild.style.background = RefBG;
		}
	}
	document.body.onselectstart = function() {
		return true;
	};
	curTarget = null;
	//the bext code is about the mouseup event in the File "dragToZoomin.js"
	tracksImgareaselect.setOptions({
		disable : true
	});
	ppTracksImgareaselect.setOptions({
		disable : true
	});
}

function mouseCoords(ev) {
	if(ev.pageX || ev.pageY) {
		return {
			x : ev.pageX,
			y : ev.pageY
		};
	}
	return {
		x : ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y : ev.clientY + document.body.scrollTop - document.body.clientTop
	};
}

function getPosition(e) {
	var left = 0;
	var top = 0;
	while(e.offsetParent) {
		left += e.offsetLeft + (e.currentStyle ? (parseInt(e.currentStyle.borderLeftWidth)).NaN0() : 0);
		top += e.offsetTop + (e.currentStyle ? (parseInt(e.currentStyle.borderTopWidth)).NaN0() : 0);
		e = e.offsetParent;
	}
	left += e.offsetLeft + (e.currentStyle ? (parseInt(e.currentStyle.borderLeftWidth)).NaN0() : 0);
	top += e.offsetTop + (e.currentStyle ? (parseInt(e.currentStyle.borderTopWidth)).NaN0() : 0);

	return {
		x : left,
		y : top
	};

}

function getMouseOffset(target, ev) {
	ev = ev || window.event;

	var docPos = getPosition(target);
	var mousePos = mouseCoords(ev);
	return {
		x : mousePos.x - docPos.x,
		y : mousePos.y - docPos.y
	};
}

function mouseMove(ev) {
	ev = ev || window.event;
	var mousePos = mouseCoords(ev);
	if(curTarget != null) {
		if(curTarget.getElementsByTagName("td")[1].firstChild.style.background.indexOf(ppBG_rgb)>=0
		|| curTarget.getElementsByTagName("td")[1].firstChild.style.background.indexOf(ppBGhover_rgb)>=0){
			curTarget.style.background = ppBGhover;
			curTarget.getElementsByTagName("td")[0].style.background = ppBGhover;
			curTarget.getElementsByTagName("td")[1].firstChild.style.background = ppBGhover;
			curTarget.getElementsByTagName("td")[2].firstChild.style.background = ppBGhover;
		}else if(curTarget.getElementsByTagName("td")[1].firstChild.style.background.indexOf(pmBG_rgb)>=0
		|| curTarget.getElementsByTagName("td")[1].firstChild.style.background.indexOf(pmBGhover_rgb)>=0){
			curTarget.style.background = pmBGhover;
			curTarget.getElementsByTagName("td")[0].style.background = pmBGhover;
			curTarget.getElementsByTagName("td")[1].firstChild.style.background = pmBGhover;
			curTarget.getElementsByTagName("td")[2].firstChild.style.background = pmBGhover;
		}else if(curTarget.getElementsByTagName("td")[1].firstChild.style.background.indexOf(pdBG_rgb)>=0
		|| curTarget.getElementsByTagName("td")[1].firstChild.style.background.indexOf(pdBGhover_rgb)>=0){
			curTarget.style.background = pdBGhover;
			curTarget.getElementsByTagName("td")[0].style.background = pdBGhover;
			curTarget.getElementsByTagName("td")[1].firstChild.style.background = pdBGhover;
			curTarget.getElementsByTagName("td")[2].firstChild.style.background = pdBGhover;
		}else{
			curTarget.style.background = RefBGhover;
			curTarget.getElementsByTagName("td")[0].style.background = RefBGhover;
			curTarget.getElementsByTagName("td")[1].firstChild.style.background = RefBGhover;
			curTarget.getElementsByTagName("td")[2].firstChild.style.background = RefBGhover;
		}

		var container = document.getElementById("tableTrack").childNodes[1];
		var trNodes = container.getElementsByTagName("tr");
		for(var i = 0; i < trNodes.length; i++) {
			with(trNodes[i]) {
				var pos = getPosition(trNodes[i]);

				setAttribute('startWidth', parseInt(offsetWidth));
				setAttribute('startHeight', parseInt(offsetHeight));
				setAttribute('startLeft', pos.x);
				setAttribute('startTop', pos.y);
			}
		}
		var beforeNode = null;
		var yPos = mousePos.y - mouseOffset.y + (parseInt(curTarget.getAttribute('startHeight')) / 2);
		for(var i = trNodes.length - 1; i >= 0; i--) {
			with(trNodes[i]) {
				if(nodeName == "#text")
					continue;
				if(curTarget != trNodes[i] && ((parseInt(getAttribute('startTop')) + parseInt(getAttribute('startHeight'))) > yPos)) {
					beforeNode = trNodes[i];
				}
			}
		}
		if(beforeNode) {
			if(beforeNode != curTarget.nextSibling) {
				container.insertBefore(curTarget, beforeNode);
			}
		} else {
			if((curTarget.nextSibling)) {
				container.appendChild(curTarget);
			}
		}

	}
}

function refSeqMouseover(ev) {
	ev = ev || window.event;
	var mouseCoordinates = mouseCoords(ev);
	var refSeqCanvas = $(document.getElementById("refTrack1"));
	var divTrack = $(document.getElementById("divTrack"));
	var div_ppContent = $(document.getElementById("ppContent"));
	var verticalLine = $(document.getElementById("verticalLine"));
	var verticalLine2 = $(document.getElementById("verticalLine2"));
	var indexSpan = $(document.getElementById("indexSpan"));
	var divTrackHeight = divTrack.height();
	var refSeqCanvasTop = refSeqCanvas.position().top;
	var refSeqCanvasLeft = refSeqCanvas.position().left;
	var refSeqCanvasWidth = refSeqCanvas.width();
	var div_ppContent_top = $("#personalPannel").position().top + $("#personalPannelTitle").height()+ 5;
	var div_ppContent_height = div_ppContent.height();
	verticalLine.css("top", divTrack.position().top);
	verticalLine.css("left", mouseCoordinates.x - 2);
	verticalLine.width(1);
	verticalLine.height(divTrackHeight);
	
	verticalLine2.css("top", div_ppContent_top);
	verticalLine2.css("left", mouseCoordinates.x - 2);
	verticalLine2.width(1);
	verticalLine2.height(div_ppContent_height);
	/*when the shift key is down, verticalLine & indexSpan are none in dispaly css*/
	if(shiftKeyState == false && isMousedownOnRefCanvas == false) {
		verticalLine.css("display", "block");
		verticalLine2.css("display", "block");
	} else {
		verticalLine.css("display", "none");
		verticalLine2.css("display", "none");
	}

	var refSeqIndex = Math.round((mouseCoordinates.x - refSeqCanvasLeft - refSeqCanvasWidth / (searchLength * 2)) / refSeqCanvasWidth * searchLength + startIndex);
	indexSpan.html(addCommas(refSeqIndex));
	indexSpan.css("top", refSeqCanvasTop);
	indexSpan.css("left", mouseCoordinates.x - indexSpan.width() / 2);
	if(shiftKeyState == false && isMousedownOnRefCanvas == false) {
		indexSpan.css("display", "block");
	} else {
		indexSpan.css("display", "none");
	}
	document.getElementById("refTrack1").addEventListener("mousemove", refSeqMousemove, true);
	document.getElementById("refTrack1").parentNode.addEventListener("mouseout", refSeqMouseout, true);
}

function refSeqMousemove(ev) {
	ev = ev || window.event;
	var mouseCoordinates = mouseCoords(ev);
	var refSeqCanvas = $(document.getElementById("refTrack1"));
	var divTrack = $(document.getElementById("divTrack"));
	var div_ppContent = $(document.getElementById("ppContent"));
	var verticalLine = $(document.getElementById("verticalLine"));
	var verticalLine2 = $(document.getElementById("verticalLine2"));
	var indexSpan = $(document.getElementById("indexSpan"));
	var divTrackHeight = divTrack.height();
	var refSeqCanvasTop = refSeqCanvas.position().top;
	var refSeqCanvasLeft = refSeqCanvas.position().left;
	var refSeqCanvasWidth = refSeqCanvas.width();
	var div_ppContent_top = $("#personalPannel").position().top + $("#personalPannelTitle").height()+ 5;
	var div_ppContent_height = div_ppContent.height();
	if(shiftKeyState == false && isMousedownOnRefCanvas == false) {
		verticalLine.css("display", "block");
		verticalLine2.css("display", "block");
	} else {
		verticalLine.css("display", "none");
		verticalLine2.css("display", "none");
	}
	verticalLine.css("top", divTrack.position().top);
	verticalLine.css("left", mouseCoordinates.x - 2);
	verticalLine.width(1);
	verticalLine.height(divTrackHeight);
	
	verticalLine2.css("top", div_ppContent_top);
	verticalLine2.css("left", mouseCoordinates.x - 2);
	verticalLine2.width(1);
	verticalLine2.height(div_ppContent_height);

	var refSeqIndex = Math.round((mouseCoordinates.x - refSeqCanvasLeft - refSeqCanvasWidth / (searchLength * 2)) / refSeqCanvasWidth * searchLength + startIndex);
	indexSpan.html(addCommas(refSeqIndex));
	indexSpan.css("top", refSeqCanvasTop);
	indexSpan.css("left", mouseCoordinates.x - indexSpan.width() / 2);
	if(shiftKeyState == false && isMousedownOnRefCanvas == false) {
		indexSpan.css("display", "block");
	} else {
		indexSpan.css("display", "none");
	}
}

function refSeqMouseout(evt) {
	evt = evt || window.event;
	var eventTarget = evt.target || evt.srcElement;

	if(eventTarget === document.getElementById("refTrack1").parentNode) {
		var verticalLine = $(document.getElementById("verticalLine"));
		var verticalLine2 = $(document.getElementById("verticalLine2"));
		var indexSpan = $(document.getElementById("indexSpan"));

		verticalLine.css("display", "none");
		verticalLine2.css("display", "none");
		indexSpan.css("display", "none");
		document.getElementById("refTrack1").removeEventListener("mousemove", refSeqMousemove, true);
	}

}

/*bodyMouseover & bodyMousemove function
 *are used to set the display-value  of
 * some html elements whose positon is
 * sbsolute to none-value */
function bodyMouseover(evt) {
	evt = evt || window.event;
	var evtMouseCoods = mouseCoords(evt);
	var refSeqCanvas = $(document.getElementById("refTrack1"));
	var refSeqCanvasTop = refSeqCanvas.position().top;
	var refSeqCanvasLeft = parseInt(refSeqCanvas.position().left) + trackLength/3;
	var refSeqCanvasHeight = refSeqCanvas.height();
	var refSeqCanvasWidth = parseInt(refSeqCanvas.width())/3;
	if(evtMouseCoods.x < refSeqCanvasLeft || evtMouseCoods.x > refSeqCanvasLeft + refSeqCanvasWidth || evtMouseCoods.y < refSeqCanvasTop || evtMouseCoods.y > refSeqCanvasTop + refSeqCanvasHeight) {
		var verticalLine = $(document.getElementById("verticalLine"));
		var verticalLine2 = $(document.getElementById("verticalLine2"));
		var indexSpan = $(document.getElementById("indexSpan"));

		verticalLine.css("display", "none");
		verticalLine2.css("display", "none");
		indexSpan.css("display", "none");
		document.getElementById("refTrack1").removeEventListener("mousemove", refSeqMousemove, true);
	}
	/*in order to makesure that refseq track can handle the mouse event
	 * when the mouse hover on the refseq track,because when the mouse
	 * moves quickly,the mouseover event may not happen */
	if(evtMouseCoods.x >= refSeqCanvasLeft && evtMouseCoods.x <= refSeqCanvasLeft + refSeqCanvasWidth && evtMouseCoods.y >= refSeqCanvasTop && evtMouseCoods.y <= refSeqCanvasTop + refSeqCanvasHeight) {
		document.getElementById("refTrack1").addEventListener("mousemove", refSeqMousemove, true);
		document.getElementById("refTrack1").parentNode.addEventListener("mouseout", refSeqMouseout, true);
	}
}

function bodyMousemove(evt) {
	evt = evt || window.event;
	var evtMouseCoods = mouseCoords(evt);
	var refSeqCanvas = $(document.getElementById("refTrack1"));
	var refSeqCanvasTop = refSeqCanvas.position().top;
	var refSeqCanvasLeft = parseInt(refSeqCanvas.position().left) + trackLength/3;
	var refSeqCanvasHeight = refSeqCanvas.height();
	var refSeqCanvasWidth = parseInt(refSeqCanvas.width())/3;
	if(evtMouseCoods.x < refSeqCanvasLeft || evtMouseCoods.x > refSeqCanvasLeft + refSeqCanvasWidth || evtMouseCoods.y < refSeqCanvasTop || evtMouseCoods.y > refSeqCanvasTop + refSeqCanvasHeight) {
		var verticalLine = $(document.getElementById("verticalLine"));
		var verticalLine2 = $(document.getElementById("verticalLine2"));
		var indexSpan = $(document.getElementById("indexSpan"));

		verticalLine.css("display", "none");
		verticalLine2.css("display", "none");
		indexSpan.css("display", "none");
		document.getElementById("refTrack1").removeEventListener("mousemove", refSeqMousemove, true);
	}
	/*in order to makesure that refseq track can handle the mouse event
	 * when the mouse hover on the refseq track,because when the mouse
	 * moves quickly,the mouseover event may not happen */
	if(evtMouseCoods.x >= refSeqCanvasLeft && evtMouseCoods.x <= refSeqCanvasLeft + refSeqCanvasWidth && evtMouseCoods.y >= refSeqCanvasTop && evtMouseCoods.y <= refSeqCanvasTop + refSeqCanvasHeight) {
		document.getElementById("refTrack1").addEventListener("mousemove", refSeqMousemove, true);
		document.getElementById("refTrack1").parentNode.addEventListener("mouseout", refSeqMouseout, true);
	}
}

function canvasMousemove(evt) {
	evt = evt || window.event;
	var evtMouseCoods = mouseCoords(evt);
	var eventTarget = evt.target || evt.srcElement;
	var trNode = eventTarget.parentNode.parentNode;
	var trackId = trNode.id;
	//add by Liran for Pfanno and Pclns track details
	if(trackId==null || trackId==""){
		trackId=trNode.parentNode.id;
	}
	//add by Liran for Pfanno and Pclns track details
	var i, j;
	var evtCanvasX, evtCanvasY;
	for( i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			break;
		}
	}
	evtCanvasX = evtMouseCoods.x - $(eventTarget).position().left;
	evtCanvasY = evtMouseCoods.y - $(eventTarget).position().top;

	//add by Liran for Pfanno and Pclns track details
	var Pfanno_Pclns_Node=null;
	if(trackId.substring(0,1)=="_"){
		if(trackId==personalPannel.Pfanno.id){
			Pfanno_Pclns_Node=-1;
		} else {
			for(var Pclns_idx=0;Pclns_idx<personalPannel.Pclns.length;Pclns_idx++){
				if(trackId==personalPannel.Pclns[Pclns_idx].id){
					Pfanno_Pclns_Node=Pclns_idx;
				}
			}
		}

		if(!personalPinned){
			evtCanvasX = evtCanvasX - $("#personalPannel").position().left;
			evtCanvasY = evtCanvasY - $("#personalPannel").position().top;
		}
	}
	//add by Liran for Pfanno and Pclns track details

	if(i < trackItems.length) {
		for( j = 0; j < trackItems[i].details.length; j++) {
			if(evtCanvasX >= trackItems[i].details[j].left && evtCanvasX <= trackItems[i].details[j].right && evtCanvasY >= trackItems[i].details[j].top && evtCanvasY <= trackItems[i].details[j].bottom) {
				//document.body.style.cursor = "pointer";
				$(eventTarget).css("cursor", "pointer");
				break;
			}
		}
		if(j >= trackItems[i].details.length) {
			$(eventTarget).css("cursor", "url(./image/Grabber.cur),auto");
			//document.body.style.cursor = "auto";
		}
	}

	//add by Liran for Pfanno and Pclns track details
	if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node==-1){
		for( j = 0; j < personalPannel.Pfanno.details.length; j++) {
			if(evtCanvasX >= personalPannel.Pfanno.details[j].left && evtCanvasX <= personalPannel.Pfanno.details[j].right && evtCanvasY >= personalPannel.Pfanno.details[j].top && evtCanvasY <= personalPannel.Pfanno.details[j].bottom) {
				//document.body.style.cursor = "pointer";
				$(eventTarget).css("cursor", "pointer");
				break;
			}
		}
		if(j >= personalPannel.Pfanno.details.length) {
			$(eventTarget).css("cursor", "url(./image/Grabber.cur),auto");
		}
	} else if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node>=0){
		for( j = 0; j < personalPannel.Pclns[Pfanno_Pclns_Node].details.length; j++) {
			if(evtCanvasX >= personalPannel.Pclns[Pfanno_Pclns_Node].details[j].left && evtCanvasX <= personalPannel.Pclns[Pfanno_Pclns_Node].details[j].right && evtCanvasY >= personalPannel.Pclns[Pfanno_Pclns_Node].details[j].top && evtCanvasY <= personalPannel.Pclns[Pfanno_Pclns_Node].details[j].bottom) {
				//document.body.style.cursor = "pointer";
				$(eventTarget).css("cursor", "pointer");
				break;
			}
		}
		if(j >= personalPannel.Pclns[Pfanno_Pclns_Node].details.length) {
			$(eventTarget).css("cursor", "url(./image/Grabber.cur),auto");
		}
	}
	//add by Liran for Pfanno and Pclns track details
}

function canvasClick(evt) {
	evt = evt || window.event;
	var evtMouseCoods = mouseCoords(evt);
	var evtCanvasX, evtCanvasY;

	var eventTarget = evt.target || evt.srcElement;
	var trNode = eventTarget.parentNode.parentNode;
	var trackId = trNode.id;
	var i, j,k;
	
	evtCanvasX = evtMouseCoods.x - $(eventTarget).position().left;
	evtCanvasY = evtMouseCoods.y - $(eventTarget).position().top;

	for( i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			break;
		}
	}

	if(i < trackItems.length) {
		for( j = 0; j < trackItems[i].details.length; j++) {
			if(evtCanvasX >= trackItems[i].details[j].left && evtCanvasX <= trackItems[i].details[j].right && evtCanvasY >= trackItems[i].details[j].top && evtCanvasY <= trackItems[i].details[j].bottom) {
				//show details
				break;
			}
		}
		if(j < trackItems[i].details.length) {
			//draw the pointer
//			drawDecoriteminfopointer("decoriteminfopointer");
			//set the position & display
			$(document.getElementById("decoriteminfo")).css("top", evtMouseCoods.y+380>document.body.clientHeight+document.body.scrollTop?document.body.clientHeight+document.body.scrollTop-380:evtMouseCoods.y);
			$(document.getElementById("decoriteminfo")).css("left", evtMouseCoods.x+310>document.body.clientWidth+document.body.scrollLeft?document.body.clientWidth+document.body.scrollLeft-320:evtMouseCoods.x-10);
			$(document.getElementById("decoriteminfo")).css("display", "block");
			//set the cursor style & event handler
			$(eventTarget).css("cursor", "auto");
			$(document.getElementById("decoriteminfo")).css("cursor", "auto");
			//document.body.style.cursor = "auto";
			$(document.getElementById("decoriteminfo")).unbind("mouseenter");
			$(document.getElementById("decoriteminfo")).mouseenter(function() {
				document.body.style.cursor = "auto";
			});
			document.body.addEventListener("mousedown", mousedownOutsideTooltip, false);
						
			//Ajax to get the gene details
			getDetailHttpRequest(trackId, trackItems[i].details[j].id, trackItems[i].details[j].from, trackItems[i].details[j].to);
		}
	}

}

function getDetailHttpRequest(trackId, id, from, to){
	var url = "servlet/test.do?" + "action=getDetail&tracks=" + trackId + "&id=" + id + "&start=" + from + "&end=" + to;
	XMLHttpReq3.onreadystatechange = handle_getDetailHttpRequest;
	XMLHttpReq3.open("GET", url, true);
	XMLHttpReq3.send(null);
}
function handle_getDetailHttpRequest(){
	if(XMLHttpReq3.readyState == 4) {
		if(XMLHttpReq3.status == 200) {
			var XMLDoc = XMLHttpReq3.responseXML;
			var geneNode = XMLDoc.getElementsByTagName(xmlTagElement)[0];
			var geneSymbol = geneNode.getAttribute(xmlAttributeSymbol) ? geneNode.getAttribute(xmlAttributeSymbol):"NO Symbol";
			var geneId = geneNode.getAttribute(xmlAttributeId);
			var geneFrom = geneNode.getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
			var geneTo = geneNode.getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
			var geneDirection = geneNode.getElementsByTagName(xmlTagDirection)[0].childNodes[0].nodeValue;
			var subElementNodes = geneNode.getElementsByTagName(xmlTagSubElement);
			var i,k;
			var subElementLength;
			var exons = [];
			var intros = [];
			var UTRs = [];
			for(i=0;i<subElementNodes.length;i++){
				if(subElementNodes[i].getAttribute(xmlAttributeType) == subElementTypeLineValue){
					intros[intros.length] = [];
					intros[intros.length - 1].from = subElementNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
					intros[intros.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
				}else{
					if(i > 0){
						if(subElementNodes[i-1].getAttribute(xmlAttributeType) == subElementTypeBoxValue || subElementNodes[i-1].getAttribute(xmlAttributeType) == subElementTypeBandValue){
							exons[exons.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
						}else{
							exons[exons.length] = [];
							exons[exons.length - 1].from = subElementNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
							exons[exons.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
						}
					}else{
						exons[exons.length] = [];
						exons[exons.length - 1].from = subElementNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
						exons[exons.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
					}
				}
			}
			/*for(i=0;i<subElementNodes.length;i++){
				if(subElementNodes[i].getAttribute(xmlAttributeType) == subElementTypeBoxValue){
					exons[exons.length] = [];
					exons[exons.length - 1].from = subElementNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
					exons[exons.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
				}else if(subElementNodes[i].getAttribute(xmlAttributeType) == subElementTypeBandValue){
					UTRs[UTRs.length] = [];
					UTRs[UTRs.length - 1].from = subElementNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
					UTRs[UTRs.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
				}else{
					intros[intros.length] = [];
					intros[intros.length - 1].from = subElementNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
					intros[intros.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
				}
			}*/
			
			var trackId = XMLDoc.getElementsByTagName(xmlTagElements)[0].getAttribute(xmlAttributeId);
			var geneType,url;
			if(trackId == "knownGene"){
				geneType = "UCSC";
				url = "http://genome.ucsc.edu/cgi-bin/hgGene?hgg_type=knownGene&db=hg19&hgg_gene=" + geneId;
			}else if(trackId == "ensemblGene"){
				geneType = "Ensembl";
				url = "http://asia.ensembl.org/Homo_sapiens/Gene/Summary?g=" + geneId;
			}else if(trackId == "refGene"){
				geneType = "RefSeq";
				url = "http://www.ncbi.nlm.nih.gov/nuccore/" + geneId;
			}

			
			//output the information to tooltip
			document.getElementById("tooltip_symbol").innerHTML = geneSymbol;
			document.getElementById("tooltip_id").innerHTML = geneId;
			document.getElementById("tooltip_geneType").innerHTML = geneType + "<span style=\"font-size:14px\">↗<\/span>";
			document.getElementById("tooltip_geneType").onclick = function(){
				window.open(url);
			};
			document.getElementById("tooltip_scale").innerHTML = chrNum + ":" + geneFrom + "-" + geneTo + " " + geneDirection;
			
			var structureDetails1 = "", structureDetails2 = "";
			structureDetails1 = structureDetails1 + exons.length +" exons"+"<br>" + intros.length + " introns";
			//structureDetails1 = structureDetails1 + exons.length +" exons"+"<br>" + intros.length + " intros" + "<br>" + UTRs.length + " UTRs";
			structureDetails2 = structureDetails2 + "<div style=\"color:#D6B8CE;height:260px;overflow-y:scroll; font-size: 12px\">";
			if(exons.length>0){
				structureDetails2 = structureDetails2 + "exons:"+"<ol>";
				for(k=0; k < exons.length; k++){
					structureDetails2 = structureDetails2 + "<li>";
					subElementLength = exons[k].to - exons[k].from +1;
					structureDetails2 = structureDetails2 + subElementLength + "bp, " + exons[k].from + "-" + exons[k].to + "<\/li>";
				}
				structureDetails2 = structureDetails2 + "<\/ol>";
			}
			if(intros.length > 0){
				structureDetails2 = structureDetails2 + "introns:"+"<ol>";
				for(k=0;k < intros.length; k++){
					structureDetails2 = structureDetails2 + "<li>";
					subElementLength = intros[k].to - intros[k].from + 1;
					structureDetails2 = structureDetails2 + subElementLength + "bp, " + intros[k].from + "-" + intros[k].to + "<\/li>";
				}
				structureDetails2 = structureDetails2 + "<\/ol>";
			}
			if(UTRs.length>0){
				structureDetails2 = structureDetails2 + "UTRs:"+"<ol>";
				for(k=0;k < UTRs.length; k++){
					structureDetails2 = structureDetails2 + "<li>";
					subElementLength = UTRs[k].to - UTRs[k].from+1;
					structureDetails2 = structureDetails2 + subElementLength + "bp, " + UTRs[k].from + "-" + UTRs[k].to + "<\/li>";
				}
				structureDetails2 = structureDetails2 + "<\/ol>";
			}
			structureDetails2 = structureDetails2 + "<\/div>";
			document.getElementById("bait39").innerHTML = structureDetails1 + structureDetails2;
			
			$(document.getElementById("detailInforLoading")).css("display","none");
			$(document.getElementById("decoriteminfosays")).css("display","block");;
		}
	}
}

function canvasClickForPersonalGene(evt) {
	evt = evt || window.event;
	var evtMouseCoods = mouseCoords(evt);
	var evtCanvasX, evtCanvasY;

	var eventTarget = evt.target || evt.srcElement;
	var trNode = eventTarget.parentNode.parentNode.parentNode;
	var trackId = trNode.id;
	var j;
	
	if(personalPinned){
		evtCanvasX = evtMouseCoods.x - $(eventTarget).position().left;
		evtCanvasY = evtMouseCoods.y - $(eventTarget).position().top;
	}else{
		evtCanvasX = evtMouseCoods.x - $("#personalPannel").position().left - $(eventTarget).position().left;
		evtCanvasY = evtMouseCoods.y - $("#personalPannel").position().top - $(eventTarget).position().top;
	}
	
	if(trackId == personalPannel.Panno.id){
		for( j = 0; j < personalPannel.Panno.details.length; j++) {
			if(evtCanvasX >= personalPannel.Panno.details[j].left && evtCanvasX <= personalPannel.Panno.details[j].right && evtCanvasY >= personalPannel.Panno.details[j].top && evtCanvasY <= personalPannel.Panno.details[j].bottom) {
				break;
			}
		}
		if(j < personalPannel.Panno.details.length){
			//draw the pointer
		//	drawDecoriteminfopointer("personalGeneDetailPointer");
			//set the position & display
		//	var orginal_position_y = evtCanvasY + $(eventTarget).position().top - 3;
		//	var orginal_position_x = evtCanvasX + $(eventTarget).position().left - 15;
		//	if(orginal_position_y+$("#personalPannel").position().top + 380 > document.body.clientHeight+document.body.scrollTop){
		//		orginal_position_y = document.body.clientHeight+document.body.scrollTop-$("#personalPannel").position().top - 380
		//	} 
		//	if(orginal_position_x+$("#personalPannel").position().left + 310 > document.body.clientWidth+document.body.scrollLeft){
		//		orginal_position_x = document.body.clientWidth+document.body.scrollLeft-$("#personalPannel").position().left - 310
		//	}
		//	$(document.getElementById("personalGeneDetail")).css("top", orginal_position_y);
		//	$(document.getElementById("personalGeneDetail")).css("left", orginal_position_x);
			$(document.getElementById("personalGeneDetail")).css("top", evtMouseCoods.y+380>document.body.clientHeight+document.body.scrollTop?document.body.clientHeight+document.body.scrollTop-380:evtMouseCoods.y);
			$(document.getElementById("personalGeneDetail")).css("left", evtMouseCoods.x+310>document.body.clientWidth+document.body.scrollLeft?document.body.clientWidth+document.body.scrollLeft-320:evtMouseCoods.x-10);
			$(document.getElementById("personalGeneDetail")).css("display", "block");
			//set the cursor style & event handler
			$(eventTarget).css("cursor", "auto");
			$(document.getElementById("personalGeneDetail")).css("cursor", "auto");
			//document.body.style.cursor = "auto";
			$(document.getElementById("personalGeneDetail")).unbind("mouseenter");
			$(document.getElementById("personalGeneDetail")).mouseenter(function() {
				document.body.style.cursor = "auto";
			});
			document.body.addEventListener("mousedown", mousedownOutsideTooltipForPersonalGene, false);
			//冗余代码：在detail box之外单击，让其消失，而在之内单击不消失
			/*$(document.getElementById("personalGeneDetail")).mouseout(function(){
				document.body.addEventListener('mousedown', mouseLeftPersonalGeneDetailClickHide, false);
			});
			$(document.getElementById("personalGeneDetail")).mouseover(function(){
				document.body.removeEventListener('mousedown', mouseLeftPersonalGeneDetailClickHide, false);
			});*/
						
			//Ajax to get the gene details
			getPersonalGeneDetailRequest(trackId, personalPannel.Panno.details[j].id, personalPannel.Panno.details[j].from, personalPannel.Panno.details[j].to);
		}
	}

}

function mousedownOutsideTooltipForPersonalGene(evt) {
	evt = evt || window.event;
	var eventTarget = evt.target || evt.srcElement;
	var flag=0;
	while(eventTarget){
		if(eventTarget==document.getElementById("personalGeneDetail")){
			flag=1;
			break;
		}else{
			eventTarget = eventTarget.parentNode;
		}
	}
	if(flag==0) {
		document.getElementById("personalGeneDetail").style.display = "none";
	}
}

function mouseLeftPersonalGeneDetailClickHide(event) {
	event.preventDefault();
	document.getElementById("personalGeneDetail").style.display = "none";
}

function getPersonalGeneDetailRequest(trackId, id, from, to){
	var url = "servlet/test.do?" + "action=getDetail&tracks=" + trackId + "&id=" + id + "&start=" + from + "&end=" + to;
	XMLHttpReq3.onreadystatechange = handle_getPersonalGeneDetailRequest;
	XMLHttpReq3.open("GET", url, true);
	XMLHttpReq3.send(null);
}

function handle_getPersonalGeneDetailRequest(){
	if(XMLHttpReq3.readyState == 4) {
		if(XMLHttpReq3.status == 200) {
			var XMLDoc = XMLHttpReq3.responseXML;
			var geneNode = XMLDoc.getElementsByTagName(xmlTagElement)[0];
			var geneSymbol = geneNode.getAttribute(xmlAttributeSymbol) ? geneNode.getAttribute(xmlAttributeSymbol):"NO Symbol";
			var geneId = geneNode.getAttribute(xmlAttributeId);
			var geneFrom = geneNode.getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
			var geneTo = geneNode.getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
			var geneDirection = geneNode.getElementsByTagName(xmlTagDirection)[0].childNodes[0].nodeValue;
			var subElementNodes = geneNode.getElementsByTagName(xmlTagSubElement);
			var variantNodes = XMLDoc.getElementsByTagName(xmlTagVariant);
			var statusNodes = XMLDoc.getElementsByTagName(xmlTagStatus);
			var exons = [];
			var introns = [];
			var variants = [];
			var statuses = [];
			var i, j, k;
			for(i=0;i<subElementNodes.length;i++){
				if(subElementNodes[i].getAttribute(xmlAttributeType) == subElementTypeLineValue){
					introns[introns.length] = [];
					introns[introns.length - 1].from = subElementNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
					introns[introns.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
				}else{
					if(i > 0){
						if(subElementNodes[i-1].getAttribute(xmlAttributeType) == subElementTypeBoxValue || subElementNodes[i-1].getAttribute(xmlAttributeType) == subElementTypeBandValue){
							exons[exons.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
						}else{
							exons[exons.length] = [];
							exons[exons.length - 1].from = subElementNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
							exons[exons.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
						}
					}else{
						exons[exons.length] = [];
						exons[exons.length - 1].from = subElementNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
						exons[exons.length - 1].to = subElementNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
					}
				}
			}
			if(variantNodes.length > 0){
				for(i=0; i<variantNodes.length; i++){
					var variantLetters = (variantNodes[i].getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue + "").split(":");
					var Amino_Acid_variantType = null;
					if(variantLetters.length == 1){
						if(variantLetters[0] == "^"){
							Amino_Acid_variantType = "Initiator lost";
						}else if(variantLetters[0] == "#"){
							Amino_Acid_variantType = "Frame shift";
						}else if(variantLetters[0] == "("){
							Amino_Acid_variantType = "DSS lost";
						}else if(variantLetters[0] == ")"){
							Amino_Acid_variantType = "ASS lost";
						}
					}else{
						if((variantLetters[0] + "").indexOf("$")!= -1 && (variantLetters[1] + "").indexOf("$")==-1){
							Amino_Acid_variantType = "Terminator loss";
						}else if((variantLetters[1] + "").indexOf("$")!= -1 && (variantLetters[0] + "").indexOf("$")==-1){
							Amino_Acid_variantType = "Terminator gain";
						}else if((variantLetters[0] + "").length > (variantLetters[1] + "").length || (variantLetters[1] + "").indexOf("_") != -1){
							Amino_Acid_variantType = "Amino acid deletion: " + variantLetters[0] + "->" + variantLetters[1];
						}else if((variantLetters[0] + "").length < (variantLetters[1] + "").length || (variantLetters[0] + "").indexOf("_") != -1){
							Amino_Acid_variantType = "Amino acid insertion: " + variantLetters[0] + "->" + variantLetters[1];
						}else if(variantLetters[0] != variantLetters[1]){
							Amino_Acid_variantType = "Amino acid variant: "+ variantLetters[0] + "->" + variantLetters[1];
						}
					}
					if(Amino_Acid_variantType){
						variants[variants.length] = [];
						variants[variants.length - 1].from = variantNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
						variants[variants.length - 1].to = variantNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
						variants[variants.length - 1].type = Amino_Acid_variantType;
					}
					if(variants.length > 1){
						for(j = 0; j < variants.length - 1; j++ ){
							last_ele_in_vars = variants[variants.length - 1].type + "" + variants[variants.length - 1].from + variants[variants.length - 1].to;
							if(variants[j].type + "" + variants[j].from + variants[j].to == last_ele_in_vars){
								variants[variants.length - 1].type = variants[variants.length - 1].type + "(allele2)";
								break;
							}
						}
					}
				}
			}
			if(statusNodes.length > 0){
				for(i=0; i < statusNodes.length; i++){
					var temp_statues = (statusNodes[i].childNodes[0].nodeValue + "").split(";");
					for(j=0; j < temp_statues.length; j++){
						var is_same_flag = false;
						for(k = 0; k < statuses.length; k++){
							if(statuses[k] == temp_statues[j]){
								is_same_flag = true;
								break;
							}
						}
						if(is_same_flag){
							statuses[statuses.length] = temp_statues[j] + "(allele2)";
						}else{
							statuses[statuses.length] = temp_statues[j];
						}
					}
				}
			}

			var trackId = XMLDoc.getElementsByTagName(xmlTagElements)[0].getAttribute(xmlAttributeId);
			var geneType,url;
			if(trackId == "knownGene"){
				geneType = "UCSC";
				url = "http://genome.ucsc.edu/cgi-bin/hgGene?hgg_type=knownGene&db=hg19&hgg_gene=" + geneId;
			}else if(trackId == "ensemblGene"){
				geneType = "Ensembl";
				url = "http://asia.ensembl.org/Homo_sapiens/Gene/Summary?g=" + geneId;
			}else if(trackId == "refGene"){
				geneType = "RefSeq";
				url = "http://www.ncbi.nlm.nih.gov/nuccore/" + geneId;
			}

			document.getElementById("personalGeneDetailSymbol").innerHTML = geneSymbol;
			document.getElementById("personalGeneDetail-ID").innerHTML = geneId;
			document.getElementById("personalGeneDetail-Type").innerHTML = geneType + "<span style=\"font-size:14px\">↗<\/span>";
			document.getElementById("personalGeneDetail-Type").onclick = function(){
				window.open(url);
			};
			document.getElementById("personalGeneDetailScale").innerHTML = chrNum + ":" + geneFrom + "-" + geneTo + " " + geneDirection;
			
			var structureDetails1 = "", structureDetails2 = "";
			structureDetails1 = structureDetails1 + exons.length +" exons"+"<br>" + introns.length + " introns";
			structureDetails2 = structureDetails2 + "<div style=\"color:#D6B8CE; font-size: 12px\">";
			if(exons.length>0){
				structureDetails2 = structureDetails2 + "exons:"+"<ol>";
				for(k=0; k < exons.length; k++){
					structureDetails2 = structureDetails2 + "<li>";
					subElementLength = exons[k].to - exons[k].from +1;
					structureDetails2 = structureDetails2 + subElementLength + "bp, " + exons[k].from + "-" + exons[k].to + "<\/li>";
				}
				structureDetails2 = structureDetails2 + "<\/ol>";
			}
			if(introns.length > 0){
				structureDetails2 = structureDetails2 + "introns:"+"<ol>";
				for(k=0;k < introns.length; k++){
					structureDetails2 = structureDetails2 + "<li>";
					subElementLength = introns[k].to - introns[k].from + 1;
					structureDetails2 = structureDetails2 + subElementLength + "bp, " + introns[k].from + "-" + introns[k].to + "<\/li>";
				}
				structureDetails2 = structureDetails2 + "<\/ol>";
			}
			structureDetails2 = structureDetails2 + "<\/div>";
			document.getElementById("personalGeneDetail-geneStruct").innerHTML = structureDetails1 + structureDetails2;
			
			var variantDetails1 = "", variantDetails2 = "";
			if(variants.length > 0){
				$("#personalGeneDetailVariantTrnode").css("display","table-row");
				variantDetails1 = variantDetails1 + variants.length + " variants";
				variantDetails2 = variantDetails2 + "<div style=\"color:#D6B8CE; font-size: 12px\">" + "<ol>";
				for(k = 0; k < variants.length; k++){
					variantDetails2 = variantDetails2 + "<li>";
					variantDetails2 = variantDetails2 + variants[k].type + "<br\/>" + variants[k].from + "-" + variants[k].to + "<\/li>";
				}
				variantDetails2 = variantDetails2 + "<\/ol><\/div>";
				document.getElementById("personalGeneDetail-variants").innerHTML = variantDetails1 + variantDetails2;
			}else{
				$("#personalGeneDetailVariantTrnode").css("display","none");
			}
			
			var statusDetails1 = "", statusDetails2 = "";
			if(statuses.length > 0){
				$("#personalGeneDetailStatusTrnode").css("display","table-row");
				statusDetails1 = statusDetails1 + statuses.length + " effects";
				statusDetails2 = statusDetails2 + "<div style=\"color:#D6B8CE; font-size: 12px\">" + "<ol>";
				for(k = 0; k < statuses.length; k++){
					statusDetails2 = statusDetails2 + "<li>";
					statusDetails2 = statusDetails2 + statuses[k] + "<\/li>";
				}
				statusDetails2 = statusDetails2 + "<\/ol><\/div>";
				document.getElementById("personalGeneDetail-status").innerHTML = statusDetails1 + statusDetails2;
			}else{
				$("#personalGeneDetailStatusTrnode").css("display","none");
			}
			
			$(document.getElementById("personalGeneDetailLoading")).css("display","none");
			$(document.getElementById("personalGeneDetailInfor")).css("display","block");
		}
	}
}
/*in order to make sure that the tooltip box is disappear when click outside the tooltip box;
 because sometimes the function decorCanvasLeftclickHide is failed;
 decorCanvasLeftclickHide function is bind to mouseout event which does not always exactly happen. */
function mousedownOutsideTooltip(evt) {
	evt = evt || window.event;
	var eventTarget = evt.target || evt.srcElement;
	var flag=0;
	while(eventTarget){
		if(eventTarget==document.getElementById("decoriteminfo")){
			flag=1;
			break;
		}else{
			eventTarget = eventTarget.parentNode;
		}
	}
	if(flag==0) {
		document.getElementById("decoriteminfo").style.display = "none";
		document.body.removeEventListener("mousedown", mousedownOutsideTooltip, false);
		document.body.removeEventListener("mousedown", decorCanvasLeftclickHide, false);
		$(document.getElementById("decoriteminfo")).unbind("mouseenter");
	}
}

function toggle39() {
	var hook = document.getElementById('hook39');
	var bait = document.getElementById('bait39');
	if(bait.style.display == 'none') {
		bait.style.display = 'block';
		hook.innerHTML = '&#8863; Hide';
	} else {
		bait.style.display = 'none';
		hook.innerHTML = '&#8862; Show Gene Structure';
	}
}

function personalGeneStructureShow() {
	var hook = document.getElementById('personalGeneDetail-showGeneStructBtn');
	var bait = document.getElementById('personalGeneDetail-geneStruct');
	if(bait.style.display == 'none') {
		bait.style.display = 'block';
		hook.innerHTML = '&#8863; Hide';
	} else {
		bait.style.display = 'none';
		hook.innerHTML = '&#8862; Show Gene Structure';
	}
}

function personalGeneVariantShow() {
	var hook = document.getElementById('personalGeneDetail-showVariantsBtn');
	var bait = document.getElementById('personalGeneDetail-variants');
	if(bait.style.display == 'none') {
		bait.style.display = 'block';
		hook.innerHTML = '&#8863; Hide';
	} else {
		bait.style.display = 'none';
		hook.innerHTML = '&#8862; Show AA Variants';
	}
}

function personalGeneStatusShow() {
	var hook = document.getElementById('personalGeneDetail-showStatusBtn');
	var bait = document.getElementById('personalGeneDetail-status');
	if(bait.style.display == 'none') {
		bait.style.display = 'block';
		hook.innerHTML = '&#8863; Hide';
	} else {
		bait.style.display = 'none';
		hook.innerHTML = '&#8862; Show Other Effects';
	}
}

function decorCanvasLeftclickHide(event) {
	event.preventDefault();
	document.getElementById("decoriteminfo").style.display = "none";
	document.body.removeEventListener("mousedown", decorCanvasLeftclickHide, false);
	document.body.removeEventListener("mousedown", mousedownOutsideTooltip, false);
	$(document.getElementById("decoriteminfo")).unbind("mouseenter");
}

function drawDecoriteminfopointer(canvasId) {
	c = document.getElementById(canvasId);
	ctx = c.getContext("2d");
	ctx.fillStyle = "rgba(0,0,0,0.75)";
	ctx.beginPath();
	ctx.moveTo(0, 9);
	ctx.lineTo(9, 0);
	ctx.lineTo(17, 9);
	ctx.fill();
}

function canvasClickForVariant(evt){
	evt = evt || window.event;
	var evtMouseCoods = mouseCoords(evt);
	var evtCanvasX, evtCanvasY;

	var eventTarget = evt.target || evt.srcElement;
	var trNode = eventTarget.parentNode.parentNode;
	var trackId = trNode.id, trackSuperId;
	var i, j,k;
	
	evtCanvasX = evtMouseCoods.x - $(eventTarget).position().left;
	evtCanvasY = evtMouseCoods.y - $(eventTarget).position().top;

	for( i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			trackSuperId = trackItems[i].superid ? trackItems[i].superid : trackId;
			break;
		}
	}
	
	if(i < trackItems.length) {
		for( j = 0; j < trackItems[i].details.length; j++) {
			if(evtCanvasX >= trackItems[i].details[j].left && evtCanvasX <= trackItems[i].details[j].right && evtCanvasY >= trackItems[i].details[j].top && evtCanvasY <= trackItems[i].details[j].bottom) {
				//show details
				break;
			}
		}
		if(j < trackItems[i].details.length) {
			//alert(""+trackId + trackItems[i].details[j].id + trackItems[i].details[j].from + trackItems[i].details[j].to);
			
			//draw the pointer
	//		drawDecoriteminfopointer("variantDetailTooltipPointer");
			//set the position & display
			$(document.getElementById("variantDetailTooltip")).css("top", evtMouseCoods.y+380>document.body.clientHeight+document.body.scrollTop?document.body.clientHeight+document.body.scrollTop-380:evtMouseCoods.y);
			$(document.getElementById("variantDetailTooltip")).css("left", evtMouseCoods.x+310>document.body.clientWidth+document.body.scrollLeft?document.body.clientWidth+document.body.scrollLeft-320:evtMouseCoods.x-10);
			$(document.getElementById("variantDetailTooltip")).css("display", "block");
			//set the cursor style & event handler
			$(eventTarget).css("cursor", "auto");
			$(document.getElementById("variantDetailTooltip")).css("cursor", "auto");
			//document.body.style.cursor = "auto";
			$(document.getElementById("variantDetailTooltip")).unbind("mouseenter");
			$(document.getElementById("variantDetailTooltip")).mouseenter(function() {
				document.body.style.cursor = "auto";
			});
			$(document).bind("mousedown", mousedownOutsideVariantTooltip);
						
			//Ajax to get the gene details
			var requestId = trackId;
			if (trackId!=trackSuperId){
				requestId+="@"+trackSuperId;
			}
			getVariantDetailHttpRequest(requestId, trackItems[i].details[j].id, trackItems[i].details[j].from, trackItems[i].details[j].to);
			
		}
	}
}

function getVariantDetailHttpRequest(trackId, id, from, to){
	var url = "servlet/test.do?" + "action=getDetail&tracks=" + trackId + "&id=" + id + "&start=" + from + "&end=" + to;
	XMLHttpReq3.onreadystatechange = handle_getVariantDetailHttpRequest;
	XMLHttpReq3.open("GET", url, true);
	XMLHttpReq3.send(null);
}

function handle_getVariantDetailHttpRequest(){
	if(XMLHttpReq3.readyState == 4) {
		if(XMLHttpReq3.status == 200) {
			var XMLDoc = XMLHttpReq3.responseXML;
			var variantNode =  XMLDoc.getElementsByTagName(xmlTagVariant)[0];
			var variantId = variantNode.getAttribute(xmlAttributeId);
			var variantType = variantNode.getAttribute(xmlAttributeType);
			var variantFrom = variantNode.getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
			var variantTo = variantNode.getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
			var variantLetter = null;

			if(variantNode.getElementsByTagName(xmlTagLetter).length > 0){
				variantLetter = variantNode.getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue;
			}
			var variantDescription = variantNode.getElementsByTagName(xmlTagDescription)[0].childNodes[0].nodeValue + "";
			$("#variantDetailContent_id").html(variantId);
			if(variantId!="."&&(/^rs/).test(variantId)){
				$("#variantDetailContent_link").html("dbSNP" + "<span style=\"font-size:14px\">↗</span>");
				document.getElementById("variantDetailContent_link").onclick = function(){
					window.open("http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?searchType=adhoc_search&type=rs&rs=" + variantId);
				};
			}else{
				$("#variantDetailContent_link").html("");
				document.getElementById("variantDetailContent_link").onclick = function(){};
			}
			$("#variantDetailContent_scale").html(chrNum + ":" + variantFrom + "-" + variantTo);
			$("#variantDetailContent_Type_Content").html(variantType);
			if(variantLetter){
				$("#variantDetailContent_Letter_trNode").css("display","table-row");
				$("#variantDetailContent_Letter_Content").html(variantLetter);
			}else{
				$("#variantDetailContent_Letter_trNode").css("display","none");
			}
			var infohtml = "";
			var variantInfos = variantDescription.split(";");
			infohtml+="<tr><td colspan=\"2\"><b>Detail in VCF/GVF Fields:</b></td></tr>";
			for(var infoidx = 0;infoidx < variantInfos.length;infoidx++){
				infohtml+=vcfTag2meaning(variantInfos[infoidx]);
			}
			if(variantNode.getElementsByTagName("SampleInfo").length > 0){
				infohtml+="<tr><td colspan=\"2\"><b>Detail in Sample Field:</b></td></tr>";
				var variantFormat = variantNode.getElementsByTagName("SampleInfo")[0].childNodes[0].nodeValue + "";
				var variantSinfos= variantFormat.split(";");
				for(var infoidx = 0;infoidx < variantSinfos.length;infoidx++){
					infohtml+=vcfTag2meaning(variantSinfos[infoidx]);
				}
			}
			if(variantNode.getElementsByTagName("Dbsnp").length > 0){
				infohtml+="<tr><td colspan=\"2\"><b>Detail in Dbsnp:</b></td></tr>";
				var variantDbsnp = variantNode.getElementsByTagName("Dbsnp")[0].childNodes[0].nodeValue + "";
				var variantDinfos= variantDbsnp.split(";");
				for(var infoidx = 0;infoidx < variantDinfos.length;infoidx++){
					infohtml+=vcfTag2meaning(variantDinfos[infoidx]);
				}
			}
			$("#variantDetailContent_INFO_table").html(infohtml);

			$("#variantDetailLoading").css("display","none");
			$("#variantDetailContent").css("display","block");
		}
	}
}

function vcfTag2meaning(tag_value){
	var tag = "";
	var value = "";
	if(tag_value.indexOf("=")>0){
		tag = tag_value.split("=")[0];
		value = tag_value.split("=")[1];
	} else if(tag_value.indexOf(":")>0){
		tag = tag_value.split(":")[0];
		value = tag_value.split(":")[1];
	} else {
		tag = tag_value;
		value = null;
	}
	if(tag == "QUAL"){
		tag = "Quality";
	} else if(tag == "FILTER"){
		tag = "Filter";
	} else if(tag == "AA"){
		tag = "Ancestral Allele";
	} else if(tag == "AC"){
		tag = "Allele Count";
	} else if(tag == "AF"){
		tag = "Allele Frequency";
	} else if(tag == "AN"){
		tag = "Allele Number";
	} else if(tag == "BQ"){
		tag = "Base Quality";
	} else if(tag == "CIGAR"){
		tag = "CIGAR";
	} else if(tag == "H2"){
		tag = "HapMap2";
	} else if(tag == "H3"){
		tag = "HapMap3";
	} else if(tag == "MQ"){
		tag = "Mapping Quality";
	} else if(tag == "SB"){
		tag = "Strand Bias";
	} else if(tag == "SOMATIC"){
		tag = "Somatic Mutation";
	} else if(tag == "GMAF"){
		tag = "GMAF";
	} else if(tag == "GENEINFO"){
		tag = "Located Gene";
	} else if(tag == "dbSNPBuildID"){
		tag = "First dbSNP Build";
	} else if(tag == "NSF"){
		tag = "Non-synonymous Frameshift Allele";
	} else if(tag == "NSM"){
		tag = "Non-synonymous Missense Allele";
	} else if(tag == "NSN"){
		tag = "Non-synonymous Nonsense Allele";
	} else if(tag == "SYN"){
		tag = "Synonymous Allele";
	} else if(tag == "U3"){
		tag = "In 3'UTR Location";
	} else if(tag == "U5"){
		tag = "In 5'UTR Location";
	} else if(tag == "ASS"){
		tag = "In Acceptor Splice Site";
	} else if(tag == "DSS"){
		tag = "In Donor Splice Site";
	} else if(tag == "INT"){
		tag = "In Intron";
	} else if(tag == "R3"){
		tag = "In 3'Gene Region";
	} else if(tag == "R5"){
		tag = "In 5'Gene Region";
	} else if(tag == "MUT"){
		tag = "Mutation (Low Frequency)";
	} else if(tag == "G5A"){
		tag = "> 5% MAF In All Population";
	} else if(tag == "G5"){
		tag = "> 5% MAF In 1+ Population";
	} else if(tag == "GT"){
		tag = "Genotype";
	} else if(tag == "DP"){
		tag = "Read Depth";
	} else if(tag == "DS"){
		tag = "Genotype Dosage from MaCH/Thunder";
	} else if(tag == "FT"){
		tag = "Sample Genotype Filter";
	} else if(tag == "GL"){
		tag = "Genotype Likelihoods";
	} else if(tag == "GLE"){
		tag = "Genotype Likelihoods of Heterogenerous Ploidy";
	} else if(tag == "PL"){
		tag = "Phred-scaled Genotype Likelihoods";
	} else if(tag == "GP"){
		tag = "Phred-scaled Genotype Posterior Probabilities";
	} else if(tag == "GQ"){
		tag = "Conditional Genotype Quality";
	} else if(tag == "HQ"){
		tag = "Haplotype Qualities";
	} else if(tag == "PS"){
		tag = "Phase Set";
	} else if(tag == "PQ"){
		tag = "Phasing Quality";
	} else if(tag == "EC"){
		tag = "Expected Alternative Allele Counts";
	} else if(tag == "ID"){
		tag = "ID";
	} else if(tag == "Variant_seq"){
		tag = "Variant_seq";
	} else if(tag == "Genotype"){
		tag = "Genotype";
	} else if(tag == "Zygosity"){
		tag = "Zygosity";
	} else if(tag == "Dbxref"){
		tag = "Dbxref";
	} else if(tag == "Reference_seq"){
		tag = "Reference_seq";
	} else if(tag.indexOf("_AF")>0){
		tag = tag;
	} else {
		tag = null;
	}
	var infohtml = "";
	if(tag != null && value !=null){
		infohtml = "<tr width=\"280px\"><td width=\"50%\">"+tag+":</td><td width=\"50%\">"+value+"</td></tr>";
	} else if (tag != null){
		infohtml = "<tr><td colspan=\"2\">"+tag+"</td></tr>";
	}
	return infohtml;
}
function mousedownOutsideVariantTooltip(evt){
	evt = evt || window.event;
	var eventTarget = evt.target || evt.srcElement;
	var flag=0;
	while(eventTarget){
		if(eventTarget==document.getElementById("variantDetailTooltip")){
			flag=1;
			break;
		}else{
			eventTarget = eventTarget.parentNode;
		}
	}
	if(flag==0) {
		document.getElementById("variantDetailTooltip").style.display = "none";
	}
}

function canvasClickForRead(evt){
	evt = evt || window.event;
	var evtMouseCoods = mouseCoords(evt);
	var evtCanvasX, evtCanvasY;

	var eventTarget = evt.target || evt.srcElement;
	var trNode = eventTarget.parentNode.parentNode;
	var trackId = trNode.id, trackSuperId;
	var i, j,k;
	
	evtCanvasX = evtMouseCoods.x - $(eventTarget).position().left;
	evtCanvasY = evtMouseCoods.y - $(eventTarget).position().top;

	for( i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			trackSuperId = trackItems[i].superid ? trackItems[i].superid : trackId;
			break;
		}
	}
	
	if(i < trackItems.length) {
		for( j = 0; j < trackItems[i].details.length; j++) {
			if(evtCanvasX >= trackItems[i].details[j].left && evtCanvasX <= trackItems[i].details[j].right && evtCanvasY >= trackItems[i].details[j].top && evtCanvasY <= trackItems[i].details[j].bottom) {
				//show details
				break;
			}
		}
		if(j < trackItems[i].details.length) {
			//draw the pointer
		//	drawDecoriteminfopointer("readDetailTooltipPointer");
			//set the position & display
			$(document.getElementById("readDetailTooltip")).css("top", evtMouseCoods.y+285>document.body.clientHeight+document.body.scrollTop?document.body.clientHeight+document.body.scrollTop-285:evtMouseCoods.y);
			$(document.getElementById("readDetailTooltip")).css("left", evtMouseCoods.x+290>document.body.clientWidth+document.body.scrollLeft?document.body.clientWidth+document.body.scrollLeft-300:evtMouseCoods.x-10);
			$(document.getElementById("readDetailTooltip")).css("display", "block");
			//set the cursor style & event handler
			$(eventTarget).css("cursor", "auto");
			$(document.getElementById("readDetailTooltip")).css("cursor", "auto");
			//document.body.style.cursor = "auto";
			$(document.getElementById("readDetailTooltip")).unbind("mouseenter");
			$(document.getElementById("readDetailTooltip")).mouseenter(function() {
				document.body.style.cursor = "auto";
			});
			$(document).bind("mousedown", mousedownOutsideReadTooltip);
						
			//Ajax to get the gene details
			getReadDetailHttpRequest(trackSuperId, trackItems[i].details[j].id, trackItems[i].details[j].from, trackItems[i].details[j].to);
			
		}
	}
}
function getReadDetailHttpRequest(trackId, id, from, to){
	var url = "servlet/test.do?" + "action=getDetail&tracks=" + trackId + "&id=" + id + "&start=" + from + "&end=" + to;
	XMLHttpReq3.onreadystatechange = handle_getReadDetailHttpRequest;
	XMLHttpReq3.open("GET", url, true);
	XMLHttpReq3.send(null);
}
function handle_getReadDetailHttpRequest(){
	if(XMLHttpReq3.readyState == 4) {
		if(XMLHttpReq3.status == 200) {
			var XMLDoc = XMLHttpReq3.responseXML;
			var readNode =  XMLDoc.getElementsByTagName(xmlTagRead)[0];
			var readId = readNode.getAttribute(xmlAttributeId);
			var readFrom = readNode.getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
			var readTo = readNode.getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
			var readScale = chrNum + ":" + readFrom + "-" + readTo;
			$("#readDetailContentTable").html("");
			$("#readDetailContentTable").append("<tr><td style=\"color:white;font:italic bold 12px Georgia;\" colspan=\"2\">" + readId + "<\/td><\/tr>");
			$("#readDetailContentTable").append("<tr style=\"color:white;font-size: 12px\"><td valign=\"top\">Scale:<\/td><td valign=\"top\">" + readScale + "<\/td><\/tr>");
			
			var i;
			for(i = 0; i < readNode.childNodes.length; i++){
				if(readNode.childNodes[i].nodeName != xmlTagFrom && readNode.childNodes[i].nodeName != xmlTagTo){
					$("#readDetailContentTable").append("<tr style=\"color:white;font-size: 12px;\"><td valign=\"top\">" + readNode.childNodes[i].nodeName + ":" + "<\/td><td valign=\"top\" style=\"width: 300px; word-break: break-all;\">" + readNode.childNodes[i].childNodes[0].nodeValue + "<\/td><\/tr>");
				}
			}
			
			$("#readDetailLoading").css("display","none");
			$("#readDetailContent").css("display","block");
		}
	}
}

function mousedownOutsideReadTooltip(evt){
	evt = evt || window.event;
	var eventTarget = evt.target || evt.srcElement;
	var flag=0;
	while(eventTarget){
		if(eventTarget==document.getElementById("readDetailTooltip")){
			flag=1;
			break;
		}else{
			eventTarget = eventTarget.parentNode;
		}
	}
	if(flag==0) {
		document.getElementById("readDetailTooltip").style.display = "none";
	}
}

function canvasMousemoveOnPP(evt) {
	evt = evt || window.event;
	var evtMouseCoods = mouseCoords(evt);
	var eventTarget = evt.target || evt.srcElement;
	var trNode = eventTarget.parentNode.parentNode.parentNode;
	var trackId = trNode.id;
	var i, j;
	var evtCanvasX, evtCanvasY;
	for( i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			break;
		}
	}
	if(personalPinned){
		evtCanvasX = evtMouseCoods.x - $(eventTarget).position().left;
		evtCanvasY = evtMouseCoods.y - $(eventTarget).position().top;
	}else{
		evtCanvasX = evtMouseCoods.x - $("#personalPannel").position().left - $(eventTarget).position().left;
		evtCanvasY = evtMouseCoods.y - $("#personalPannel").position().top - $(eventTarget).position().top;
	}

	if(i < trackItems.length) {
		for( j = 0; j < trackItems[i].details.length; j++) {
			if(evtCanvasX >= trackItems[i].details[j].left && evtCanvasX <= trackItems[i].details[j].right && evtCanvasY >= trackItems[i].details[j].top && evtCanvasY <= trackItems[i].details[j].bottom) {
				//document.body.style.cursor = "pointer";
				$(eventTarget).css("cursor", "pointer");
				break;
			}
		}
	}else{
		if(trackId == personalPannel.Pvar.id){
			for( j = 0; j < personalPannel.Pvar.details.length; j++) {
				if(evtCanvasX >= personalPannel.Pvar.details[j].left && evtCanvasX <= personalPannel.Pvar.details[j].right && evtCanvasY >= personalPannel.Pvar.details[j].top && evtCanvasY <= personalPannel.Pvar.details[j].bottom) {
					//document.body.style.cursor = "pointer";
					$(eventTarget).css("cursor", "pointer");
					break;
				}
			}
		}
		if(trackId == personalPannel.Panno.id){
			for( j = 0; j < personalPannel.Panno.details.length; j++) {
				if(evtCanvasX >= personalPannel.Panno.details[j].left && evtCanvasX <= personalPannel.Panno.details[j].right && evtCanvasY >= personalPannel.Panno.details[j].top && evtCanvasY <= personalPannel.Panno.details[j].bottom) {
					//document.body.style.cursor = "pointer";
					$(eventTarget).css("cursor", "pointer");
					break;
				}
			}
		}
	}
	
	if(i < trackItems.length) {
		if(j >= trackItems[i].details.length) {
			$(eventTarget).css("cursor", "url(./image/Grabber.cur),auto");
		}
	}else{
		if(trackId == personalPannel.Pvar.id){
			if(j >= personalPannel.Pvar.details.length) {
				$(eventTarget).css("cursor", "url(./image/Grabber.cur),auto");
			}
		}
		if(trackId == personalPannel.Panno.id){
			if(j >= personalPannel.Panno.details.length) {
				$(eventTarget).css("cursor", "url(./image/Grabber.cur),auto");
			}
		}
	}
}

function canvasClickForVariantOnPP(evt){
	evt = evt || window.event;
	var evtMouseCoods = mouseCoords(evt);
	var evtCanvasX, evtCanvasY;

	var eventTarget = evt.target || evt.srcElement;
	var trNode = eventTarget.parentNode.parentNode.parentNode;
	var trackId = trNode.id, trackSuperId;
	var i, j, k;
	
	if(personalPinned){
		evtCanvasX = evtMouseCoods.x - $(eventTarget).position().left;
		evtCanvasY = evtMouseCoods.y - $(eventTarget).position().top;
	}else{
		evtCanvasX = evtMouseCoods.x - $("#personalPannel").position().left - $(eventTarget).position().left;
		evtCanvasY = evtMouseCoods.y - $("#personalPannel").position().top - $(eventTarget).position().top;
	}

	for( i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			trackSuperId = trackItems[i].superid ? trackItems[i].superid : trackId;
			break;
		}
	}
	
	if(trackSuperId + "." == "undefined."){
		trackSuperId = initPvar_superid;
	}
	
	if(i < trackItems.length || trackId == personalPannel.Pvar.id) {
		if(i < trackItems.length){
			for( j = 0; j < trackItems[i].details.length; j++) {
				if(evtCanvasX >= trackItems[i].details[j].left && evtCanvasX <= trackItems[i].details[j].right && evtCanvasY >= trackItems[i].details[j].top && evtCanvasY <= trackItems[i].details[j].bottom) {
					//show details
					break;
				}
			}
		}else{
			for(k = 0; k < trackItems.length; k++){
				if("_" + trackItems[k].id == trackId){
					trackSuperId = trackItems[k].superid ? "_"+trackItems[k].superid : trackId;
				}
			}
			for( j = 0; j < personalPannel.Pvar.details.length; j++) {
				if(evtCanvasX >= personalPannel.Pvar.details[j].left && evtCanvasX <= personalPannel.Pvar.details[j].right && evtCanvasY >= personalPannel.Pvar.details[j].top && evtCanvasY <= personalPannel.Pvar.details[j].bottom) {
					break;
				}
			}
		}
		
		if((i < trackItems.length && j < trackItems[i].details.length )|| (personalPannel.Pvar.details.length && j < personalPannel.Pvar.details.length)) {
			//draw the pointer
		//	drawDecoriteminfopointer("variantDetailTooltipPointerOnPP");
			//set the position & display

		//	var orginal_position_y = evtCanvasY + $(eventTarget).position().top - 3;
		//	var orginal_position_x = evtCanvasX + $(eventTarget).position().left - 15;
		//	if(orginal_position_y+$("#personalPannel").position().top + 380 > document.body.clientHeight+document.body.scrollTop){
		//		orginal_position_y = document.body.clientHeight+document.body.scrollTop-$("#personalPannel").position().top - 380
		//	} 
		//	if(orginal_position_x+$("#personalPannel").position().left + 320 > document.body.clientWidth+document.body.scrollLeft){
		//		orginal_position_x = document.body.clientWidth+document.body.scrollLeft-$("#personalPannel").position().left - 320
		//	}
		//	$(document.getElementById("variantDetailTooltipOnPP")).css("top", orginal_position_y);
		//	$(document.getElementById("variantDetailTooltipOnPP")).css("left", orginal_position_x);
			$(document.getElementById("variantDetailTooltipOnPP")).css("top", evtMouseCoods.y+380>document.body.clientHeight+document.body.scrollTop?document.body.clientHeight+document.body.scrollTop-380:evtMouseCoods.y);
			$(document.getElementById("variantDetailTooltipOnPP")).css("left", evtMouseCoods.x+310>document.body.clientWidth+document.body.scrollLeft?document.body.clientWidth+document.body.scrollLeft-320:evtMouseCoods.x-10);

			$(document.getElementById("variantDetailTooltipOnPP")).css("display", "block");
			//set the cursor style & event handler
			$(eventTarget).css("cursor", "auto");
			$(document.getElementById("variantDetailTooltipOnPP")).css("cursor", "auto");
			//document.body.style.cursor = "auto";
			$(document.getElementById("variantDetailTooltipOnPP")).unbind("mouseenter");
			$(document.getElementById("variantDetailTooltipOnPP")).mouseenter(function() {
				document.body.style.cursor = "auto";
			});
			$(document).bind("mousedown", mousedownOutsideVariantTooltipOnPP);
			
			//Ajax to get the gene details
			if(/^_/.test(trackSuperId)){
				trackSuperId = trackSuperId.substring(1);
			}
			if(i < trackItems.length){
				getVariantDetailHttpRequest(trackId+"@"+trackSuperId, trackItems[i].details[j].id, trackItems[i].details[j].from, trackItems[i].details[j].to);
			}else{
				getVariantDetailHttpRequestOnPP(trackId+"@"+trackSuperId, personalPannel.Pvar.details[j].id, personalPannel.Pvar.details[j].from, personalPannel.Pvar.details[j].to);
			}
		}
	}
}

function getVariantDetailHttpRequestOnPP(trackId, id, from, to){
	if(!(/^_/).test(trackId)){
		trackId="_"+trackId;
	}
	var url = "servlet/test.do?" + "action=getDetail&tracks=" + trackId + "&id=" + id + "&start=" + from + "&end=" + to;
	XMLHttpReq3.onreadystatechange = handle_getVariantDetailHttpRequestOnPP;
	XMLHttpReq3.open("GET", url, true);
	XMLHttpReq3.send(null);
}

function handle_getVariantDetailHttpRequestOnPP(){
	if(XMLHttpReq3.readyState == 4) {
		if(XMLHttpReq3.status == 200) {
			var XMLDoc = XMLHttpReq3.responseXML;
			var variantNode =  XMLDoc.getElementsByTagName(xmlTagVariant)[0];
			var variantId = variantNode.getAttribute(xmlAttributeId);
			var variantType = variantNode.getAttribute(xmlAttributeType);
			var variantFrom = variantNode.getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
			var variantTo = variantNode.getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
			var variantLetter = null;
			var variant_dbSNPID = null;
			var variant_BLS_mate = null;

			if(variantNode.getElementsByTagName(xmlTagLetter).length > 0){
				variantLetter = variantNode.getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue;
			}
			if(variantNode.getAttribute(xmlAttribute_dbSNPID)){
				variant_dbSNPID = variantNode.getAttribute(xmlAttribute_dbSNPID);
			}
			if(variantNode.getElementsByTagName(xmlTagMate).length > 0){
				variant_BLS_mate = variantNode.getElementsByTagName(xmlTagMate)[0].childNodes[0].nodeValue;
			}
			var variantDescription = variantNode.getElementsByTagName(xmlTagDescription)[0].childNodes[0].nodeValue + "";

			$("#variantDetailContent_idOnPP").html(variantId);
			if(variantId!="."&&(/^rs/).test(variantId)){
				$("#variantDetailContent_linkOnPP").html("dbSNP" + "<span style=\"font-size:14px\">↗</span>");
				document.getElementById("variantDetailContent_linkOnPP").onclick = function(){
					window.open("http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?searchType=adhoc_search&type=rs&rs=" + variantId);
				};
			}else if(variant_dbSNPID&&(/^rs/).test(variant_dbSNPID)){
				$("#variantDetailContent_linkOnPP").html("dbSNP" + "<span style=\"font-size:14px\">↗</span>");
				document.getElementById("variantDetailContent_linkOnPP").onclick = function(){
					window.open("http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?searchType=adhoc_search&type=rs&rs=" + variant_dbSNPID);
				};

			}else{
				$("#variantDetailContent_linkOnPP").html("");
				document.getElementById("variantDetailContent_linkOnPP").onclick = function(){};
			}
			$("#variantDetailContent_scaleOnPP").html(chrNum + ":" + variantFrom + "-" + variantTo);
			$("#variantDetailContent_Type_ContentOnPP").html(variantType);
			if(variantLetter){
				$("#variantDetailContent_Letter_trNodeOnPP").css("display","table-row");
				$("#variantDetailContent_Letter_ContentOnPP").html(variantLetter);
			}else{
				$("#variantDetailContent_Letter_trNodeOnPP").css("display","none");
			}
			if(variant_dbSNPID){
				$("#variantDetailContent_dbSNPID_trNodeOnPP").css("display","table-row");
				$("#variantDetailContent_dbSNPID_ContentOnPP").html(variant_dbSNPID);
			}else{
				$("#variantDetailContent_dbSNPID_trNodeOnPP").css("display","none");
			}
			if(variant_BLS_mate){
				$("#variantDetailContent_Mate_trNodeOnPP").css("display","table-row");
				$("#variantDetailContent_Mate_ContentOnPP").html(variant_BLS_mate);
			}else{
				$("#variantDetailContent_Mate_trNodeOnPP").css("display","none");
			}

			var infohtml = "";
			var variantInfos = variantDescription.split(";");
			infohtml+="<tr><td colspan=\"2\"><b>Detail in VCF/GVF fields:</b></td></tr>";
			for(var infoidx = 0;infoidx < variantInfos.length;infoidx++){
				infohtml+=vcfTag2meaning(variantInfos[infoidx]);
			}
			if(variantNode.getElementsByTagName("SampleInfo").length > 0){
				infohtml+="<tr><td colspan=\"2\"><b>Detail in Sample field:</b></td></tr>";
				var variantFormat = variantNode.getElementsByTagName("SampleInfo")[0].childNodes[0].nodeValue + "";
				var variantSinfos= variantFormat.split(";");
				for(var infoidx = 0;infoidx < variantSinfos.length;infoidx++){
					infohtml+=vcfTag2meaning(variantSinfos[infoidx]);
				}
			}
			if(variantNode.getElementsByTagName("Dbsnp").length > 0){
				infohtml+="<tr><td colspan=\"2\"><b>Detail in Dbsnp:</b></td></tr>";
				var variantDbsnp = variantNode.getElementsByTagName("Dbsnp")[0].childNodes[0].nodeValue + "";
				var variantDinfos= variantDbsnp.split(";");
				for(var infoidx = 0;infoidx < variantDinfos.length;infoidx++){
					infohtml+=vcfTag2meaning(variantDinfos[infoidx]);
				}
			}

			$("#variantDetailContent_INFO_ContentOnPP").html(infohtml);
				
			$("#variantDetailLoadingOnPP").css("display","none");
			$("#variantDetailContentOnPP").css("display","block");
		}
	}
}

function mousedownOutsideVariantTooltipOnPP(evt){
	evt = evt || window.event;
	var eventTarget = evt.target || evt.srcElement;
	var flag=0;
	while(eventTarget){
		if(eventTarget==document.getElementById("variantDetailTooltipOnPP")){
			flag=1;
			break;
		}else{
			eventTarget = eventTarget.parentNode;
		}
	}
	if(flag==0) {
		document.getElementById("variantDetailTooltipOnPP").style.display = "none";
	}
}

function canvasClickForRepeat(evt) {
	evt = evt || window.event;
	var evtMouseCoods = mouseCoords(evt);
	var evtCanvasX, evtCanvasY;

	var eventTarget = evt.target || evt.srcElement;
	var trNode = eventTarget.parentNode.parentNode;
	var trackId = trNode.id;

	//add by Liran for Pfanno and Pclns track details
	if(trackId==null || trackId==""){
		trackId=trNode.parentNode.id;
	}
	//add by Liran for Pfanno and Pclns track details
	var i, j,k;
	
	for( i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			break;
		}
	}
	evtCanvasX = evtMouseCoods.x - $(eventTarget).position().left;
	evtCanvasY = evtMouseCoods.y - $(eventTarget).position().top;

	//add by Liran for Pfanno and Pclns track details
	var Pfanno_Pclns_Node=null;
	if(trackId.substring(0,1)=="_"){
		if(trackId==personalPannel.Pfanno.id){
			Pfanno_Pclns_Node=-1;
		} else {
			for(var Pclns_idx=0;Pclns_idx<personalPannel.Pclns.length;Pclns_idx++){
				if(trackId==personalPannel.Pclns[Pclns_idx].id){
					Pfanno_Pclns_Node=Pclns_idx;
				}
			}
		}

		if(!personalPinned){
			evtCanvasX = evtCanvasX - $("#personalPannel").position().left;
			evtCanvasY = evtCanvasY - $("#personalPannel").position().top;
		}
	}
	//add by Liran for Pfanno and Pclns track details


	if(i < trackItems.length) {
		for( j = 0; j < trackItems[i].details.length; j++) {
			if(evtCanvasX >= trackItems[i].details[j].left && evtCanvasX <= trackItems[i].details[j].right && evtCanvasY >= trackItems[i].details[j].top && evtCanvasY <= trackItems[i].details[j].bottom) {
				//show details
				break;
			}
		}
		if(j < trackItems[i].details.length) {
			//draw the pointer
		//	drawDecoriteminfopointer("repeatMaskDetailTooltipPointer");
			//set the position & display
			//
			$(document.getElementById("repeatMaskDetailTooltip")).css("top", evtMouseCoods.y+150>document.body.clientHeight+document.body.scrollTop?document.body.clientHeight+document.body.scrollTop-150:evtMouseCoods.y);
			$(document.getElementById("repeatMaskDetailTooltip")).css("left", evtMouseCoods.x+310>document.body.clientWidth+document.body.scrollLeft?document.body.clientWidth+document.body.scrollLeft-320:evtMouseCoods.x-10);

			$(document.getElementById("repeatMaskDetailTooltip")).css("display", "block");
			//set the cursor style & event handler
			$(eventTarget).css("cursor", "auto");
			$(document.getElementById("repeatMaskDetailTooltip")).css("cursor", "auto");
			//document.body.style.cursor = "auto";
			$(document.getElementById("repeatMaskDetailTooltip")).unbind("mouseenter");
			$(document.getElementById("repeatMaskDetailTooltip")).mouseenter(function() {
				document.body.style.cursor = "auto";
			});
			document.body.addEventListener("mousedown", mousedownOutsideRepeatTooltip, false);
						
			//Ajax to get the gene details
			getRepeatDetailHttpRequest(trackId, trackItems[i].details[j].id, trackItems[i].details[j].from, trackItems[i].details[j].to);
		}
	}
	if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node==-1) {
		for( j = 0; j < personalPannel.Pfanno.details.length; j++) {
			if(evtCanvasX >= personalPannel.Pfanno.details[j].left && evtCanvasX <= personalPannel.Pfanno.details[j].right && evtCanvasY >= personalPannel.Pfanno.details[j].top && evtCanvasY <= personalPannel.Pfanno.details[j].bottom) {
				//show details
				break;
			}
		}
		if(j < personalPannel.Pfanno.details.length) {
			//draw the pointer
		//	drawDecoriteminfopointer("repeatMaskDetailTooltipPointer");
			//set the position & display
			//
			$(document.getElementById("repeatMaskDetailTooltip")).css("top", evtMouseCoods.y+150>document.body.clientHeight+document.body.scrollTop?document.body.clientHeight+document.body.scrollTop-150:evtMouseCoods.y);
			$(document.getElementById("repeatMaskDetailTooltip")).css("left", evtMouseCoods.x+310>document.body.clientWidth+document.body.scrollLeft?document.body.clientWidth+document.body.scrollLeft-320:evtMouseCoods.x-10);

			$(document.getElementById("repeatMaskDetailTooltip")).css("display", "block");
			//set the cursor style & event handler
			$(eventTarget).css("cursor", "auto");
			$(document.getElementById("repeatMaskDetailTooltip")).css("cursor", "auto");
			//document.body.style.cursor = "auto";
			$(document.getElementById("repeatMaskDetailTooltip")).unbind("mouseenter");
			$(document.getElementById("repeatMaskDetailTooltip")).mouseenter(function() {
				document.body.style.cursor = "auto";
			});
			document.body.addEventListener("mousedown", mousedownOutsideRepeatTooltip, false);
						
			//Ajax to get the gene details
			getRepeatDetailHttpRequest(trackId, personalPannel.Pfanno.details[j].id, personalPannel.Pfanno.details[j].from, personalPannel.Pfanno.details[j].to);
		}
	} else if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node>=0) {
		for( j = 0; j < personalPannel.Pclns[Pfanno_Pclns_Node].details.length; j++) {
			if(evtCanvasX >= personalPannel.Pclns[Pfanno_Pclns_Node].details[j].left && evtCanvasX <= personalPannel.Pclns[Pfanno_Pclns_Node].details[j].right && evtCanvasY >= personalPannel.Pclns[Pfanno_Pclns_Node].details[j].top && evtCanvasY <= personalPannel.Pclns[Pfanno_Pclns_Node].details[j].bottom) {
				//show details
				break;
			}
		}
		if(j < personalPannel.Pclns[Pfanno_Pclns_Node].details.length) {
			//draw the pointer
		//	drawDecoriteminfopointer("repeatMaskDetailTooltipPointer");
			//set the position & display
			//
			$(document.getElementById("repeatMaskDetailTooltip")).css("top", evtMouseCoods.y+150>document.body.clientHeight+document.body.scrollTop?document.body.clientHeight+document.body.scrollTop-150:evtMouseCoods.y);
			$(document.getElementById("repeatMaskDetailTooltip")).css("left", evtMouseCoods.x+310>document.body.clientWidth+document.body.scrollLeft?document.body.clientWidth+document.body.scrollLeft-320:evtMouseCoods.x-10);

			$(document.getElementById("repeatMaskDetailTooltip")).css("display", "block");
			//set the cursor style & event handler
			$(eventTarget).css("cursor", "auto");
			$(document.getElementById("repeatMaskDetailTooltip")).css("cursor", "auto");
			//document.body.style.cursor = "auto";
			$(document.getElementById("repeatMaskDetailTooltip")).unbind("mouseenter");
			$(document.getElementById("repeatMaskDetailTooltip")).mouseenter(function() {
				document.body.style.cursor = "auto";
			});
			document.body.addEventListener("mousedown", mousedownOutsideRepeatTooltip, false);
						
			//Ajax to get the gene details
			getRepeatDetailHttpRequest(trackId, personalPannel.Pclns[Pfanno_Pclns_Node].details[j].id, personalPannel.Pclns[Pfanno_Pclns_Node].details[j].from, personalPannel.Pclns[Pfanno_Pclns_Node].details[j].to);
		}
	}
}

function getRepeatDetailHttpRequest(trackId, id, from, to){
	var url = "servlet/test.do?" + "action=getDetail&tracks=" + trackId + "&id=" + id + "&start=" + from + "&end=" + to;
	XMLHttpReq3.onreadystatechange = handle_getRepeatDetailHttpRequest;
	XMLHttpReq3.open("GET", url, true);
	XMLHttpReq3.send(null);
}

function handle_getRepeatDetailHttpRequest(){
	if(XMLHttpReq3.readyState == 4) {
		if(XMLHttpReq3.status == 200) {
			var XMLDoc = XMLHttpReq3.responseXML;
			var repeatsNode =  XMLDoc.getElementsByTagName(xmlTagElements)[0];
			var trackId = repeatsNode.getAttribute(xmlAttributeId);
			var repeatNode =  XMLDoc.getElementsByTagName(xmlTagElement)[0];
			var repeatId = repeatNode.getAttribute(xmlAttributeId);
			var repeatFrom = repeatNode.getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
			var repeatTo = repeatNode.getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
			
			$("#repeatMaskDetailContent_id").html(repeatId);
			$("#repeatMaskDetailContent_scale").html(chrNum + ":" + repeatFrom + "-" + repeatTo);
			if(repeatNode.getElementsByTagName(xmlTagDirection).length > 0){
				var repeatDirection = repeatNode.getElementsByTagName(xmlTagDirection)[0].childNodes[0].nodeValue;
				$("#repeatMaskDetailContent_direction_trNode").css("display","table-row");
				$("#repeatMaskDetailContent_direction_Content").html(repeatDirection);
			}else{
				$("#repeatMaskDetailContent_direction_trNode").css("display","none");
			}
//			if(repeatNode.getElementsByTagName(xmlTagColor).length > 0){
//				var repeatColor = repeatNode.getElementsByTagName(xmlTagColor)[0].childNodes[0].nodeValue;
//				$("#repeatMaskDetail_color_trNode").css("display","table-row");
//				$("#repeatMaskDetail_color_content").html(repeatColor);
//			}else{
				$("#repeatMaskDetail_color_trNode").css("display","none");
//			}
			if(repeatNode.getElementsByTagName(xmlTagDescription).length > 0){
				var repeatDes = repeatNode.getElementsByTagName(xmlTagDescription)[0].childNodes[0].nodeValue;
				$("#repeatMaskDetail_Des_trNode").css("display","table-row");
				$("#repeatMaskDetail_Des_content").html(repeatDes);
			}else{
				$("#repeatMaskDetail_Des_trNode").css("display","none");
			}
			if(trackId == "OMIM" || trackId =="_OMIM" ){
				var patternOMIM = /^.*,.*(\d{6}).*$/;
				if(patternOMIM.test(repeatId)){
					var OMIMentry = RegExp.$1;
					$("#repeatMaskDetailContent_link").css("display","block");
					document.getElementById("repeatMaskDetailContent_link").onclick = function(){
						window.open("http://omim.org/entry/"+OMIMentry);
					};
				}else{
					$("#repeatMaskDetailContent_link").css("display","none");
				//	document.getElementById("repeatMaskDetailContent_link").onclick = function(){};
				}
			}else{
					$("#repeatMaskDetailContent_link").css("display","none");
			}
			
			$("#repeatMaskDetailLoading").css("display","none");
			$("#repeatMaskDetailContent").css("display","block");
		}
	}
}
function mousedownOutsideRepeatTooltip(evt){
	evt = evt || window.event;
	var eventTarget = evt.target || evt.srcElement;
	var flag=0;
	while(eventTarget){
		if(eventTarget==document.getElementById("repeatMaskDetailTooltip")){
			flag=1;
			break;
		}else{
			eventTarget = eventTarget.parentNode;
		}
	}
	if(flag==0) {
		document.getElementById("repeatMaskDetailTooltip").style.display = "none";
	}
}
/**
 * @author Hao Yafeng
 */
/*global variants stand for element tags of data-exchange xml */
var xmlTagAssembly = "Assembly";
var xmlTagChrNum = "Chromosome";
var xmlTagChrLength = "Length";
var xmlTagChrStart = "Start";
var xmlTagChrEnd = "End";
var xmlTagSequence = "Sequence";
var xmlTagSeq = "Seq";
var xmlTagCytobands = "Cbs";
var xmlTagElements = "Es";
var xmlTagReads = "Rs";
var xmlTagValues = "Values";
var xmlTagVariants = "Vs";
var xmlTagError = "Error";
var xmlTagRead = "R";
var xmlTagVariant = "V";
var xmlTagValueList = "ValueList";
var xmlTagCytoBand = "Cb";
var xmlTagElement = "E";
var xmlTagSubElement = "S";
var xmlTagAnnotationList = "AnnotationList";
var xmlTagFrom = "F";
var xmlTagTo = "T";
var xmlTagDirection = "s";
var xmlTagType = "Type";
var xmlTagStep = "Step";
var xmlTagColor = "Color";
var xmlTagLetter = "B";
var xmlTagDescription = "Des";
var xmlTagParameters = "Parameters";
var xmlTagParameter = "Parameter"
var xmlTagOptions = "Options";
var xmlTagDbsnp = "Dbsnp";
var xmlTagSampleInfo = "SampleInfo";
var xmlTagMate = "Mate";
var xmlTagStatus = "status";

var xmlGroupIG= "Personal Genome";
var xmlParamSample= "Samples";

var xmlAttributeId = "id";
var xmlAttributeType = "Y";
var xmlAttributeEffect = "e";//added by Liran for recording variant effect
var xmlAttribute_gieStain = "gS";
var xmlAttributeSymbol = "Symbol";
var xmlAttribute_dbSNPID = "dd";

var trackDisplayModeHide = "hide";
var trackDispalyModeDense = "dense";
var trackDisplayModeSquish = "squish";
var trackDisplayModePack = "pack";
var trackDisplayModeFull = "full";

var subElementTypeBoxValue = "X";
var subElementTypeBandValue = "D";
var subElementTypeLineValue = "L";

var variantType_SNV = "SNV";
var variantType_CNV = "CNV";
var variantType_BLS = "BLS";
var variantType_DUPLICATION = "DUP";
var variantType_INSERTION = "INS";
var variantType_INVERSION = "INV";
var variantType_DELETION = "DEL";
var variantType_MUTIPLE = "MUL";
var variantType_OTHERS = "OTH";

var fileFormat_BED = "BED";
var fileFormat_BIGBED = "BB";
var fileFormat_BEDGRAPH = "BG";
var fileFormat_VCF = "VCF";
var fileFormat_WIG = "WIG";
var fileFormat_BIGWIG = "BW";
var fileFormat_BEDGZ = "BEDGZ";
var fileFormat_FASTA = "FASTA";
var fileFormat_REF = "REF";
var fileFormat_BAM = "BAM";
var fileFormat_GFF = "GFF";
var fileFormat_GTF = "GTF";
var fileFormat_GVF = "GVF";
var fileFormat_GDF = "GDF";
var fileFormat_GRF = "GRF";
var fileFormat_CYTO = "CYTO";
var fileFormat_ANNO = "ANNO";
var fileFormat_FUNCTIONANNO = "FANNO";
/*END of the definition about element tags' global variants*/

/*the constants of glyph about its' size*/
var height_gene_box = 10;
var height_gene_band = 5;
var height_variant = 10;
var height_read = 10;
var height_cytoband = 15;
var width_cytoband = 1000;
var space_vertical = 3;
// the horizontal space between two elements is determined by there position in the genome, so here is minimum value
var space_horizontal_min = 5;
var space_id_glyph = 3;
/*end of the glyphs's size constants' definition*/

/*style constants:color、font*/

/*end of style contants' definition*/
var start_user,end_user,searchLength_user;
var trackLength_user = 950;
var startIndex, endIndex, chrNum, assemblyNum, searchLength;
var trackLength = trackLength_user * 3;
//the search does or not occure in browser.html page
var pageFlag = 0;
//the length of chrosome
var chrLength = 123456789456;
var chrImgLength;
var chr_Lengths = [];
//record the show mode of tracks
var trackItems = [];
var loadingId;
var ppLoadingId;
var initPvar_superid;

var personalPannel = {};
personalPannel.Pvar = {
	id : "",
	mode : "",
};
personalPannel.Panno = {
	id : "",
	mode : "",
	num : 0
};
personalPannel.Pfanno = {
	id : "",
	mode : ""
};
personalPannel.Pclns = [];
var personalTrackItems = {};
personalTrackItems.Pvars = [];
personalTrackItems.Pannos = [];
personalTrackItems.Pfannos = [];
personalTrackItems.Pclnss = [];
personalPannel.personalTrackItems = personalTrackItems;

var personalPinned = false;


var scoremethPvar = "PGB"; // added by Liran for recording current scoring method
var score_filter = 0;
var score_filter_ceil = 0;

var control_scanning=0;//for stop scanning when close BrowseJumpWindow
var control_upexternal=0;//to prevent indset window close while there is a file uploading
/*$(function(){
	window.onunload = function(){
		window.location.href = window.location.href;
	};
});*/

$(function(){
	$("#backward").bind("click", historyback);
	$("#forward").bind("click", historyforward);
});
//$.ajaxSetup({cache:false});

function historyback(){
	history.back();
	var urlParameter = QueryString();
	assemblyNum = urlParameter["Assembly"];
	chrNum = urlParameter["Chr"];
	startIndex = parseInt(urlParameter["Start"]);
	endIndex = parseInt(urlParameter["End"]);
	if(startIndex > endIndex) {
		var start2end;
		start2end = endIndex;
		endIndex = startIndex;
		startIndex = start2end;
	}
	if(endIndex - startIndex + 1 < parseInt(trackLength / 10)) {
		var temp_d = parseInt(trackLength / 10) - (endIndex - startIndex + 1);
		if(temp_d % 2 == 0) {
			endIndex = endIndex + temp_d / 2;
			startIndex = startIndex - temp_d / 2;
		} else {
			endIndex = endIndex + parseInt(temp_d / 2);
			startIndex = startIndex - (parseInt(temp_d / 2) + 1)
		}
	}
	searchLength = endIndex - startIndex + 1;
	searchLength_user = Math.round(searchLength / 3);
	start_user = startIndex + searchLength_user;
	end_user = endIndex - searchLength_user;
		
	if(start_user < 1) {
		start_user = 1;
	}
	if(end_user > parseInt(chr_Lengths[chrNum])) {
		end_user = parseInt(chr_Lengths[chrNum]);
	}
	searchLength_user = end_user - start_user + 1;
	if(searchLength_user< trackLength_user/10){
		if(start_user ==1){
			end_user = trackLength_user/10;
		}else{
			start_user = end_user - trackLength_user/10 + 1;
		}
	}
	searchLength_user = end_user - start_user + 1;
	startIndex = start_user - searchLength_user;
	endIndex = end_user + searchLength_user;
	searchLength = searchLength_user * 3;
	showRefForHistory();
}

function historyforward(){
	history.forward();
	var urlParameter = QueryString();
	assemblyNum = urlParameter["Assembly"];
	chrNum = urlParameter["Chr"];
	startIndex = parseInt(urlParameter["Start"]);
	endIndex = parseInt(urlParameter["End"]);
	if(startIndex > endIndex) {
		var start2end;
		start2end = endIndex;
		endIndex = startIndex;
		startIndex = start2end;
	}
	if(endIndex - startIndex + 1 < parseInt(trackLength / 10)) {
		var temp_d = parseInt(trackLength / 10) - (endIndex - startIndex + 1);
		if(temp_d % 2 == 0) {
			endIndex = endIndex + temp_d / 2;
			startIndex = startIndex - temp_d / 2;
		} else {
			endIndex = endIndex + parseInt(temp_d / 2);
			startIndex = startIndex - (parseInt(temp_d / 2) + 1)
		}
	}
	searchLength = endIndex - startIndex + 1;
	searchLength_user = Math.round(searchLength / 3);
	start_user = startIndex + searchLength_user;
	end_user = endIndex - searchLength_user;
		
	if(start_user < 1) {
		start_user = 1;
	}
	if(end_user > parseInt(chr_Lengths[chrNum])) {
		end_user = parseInt(chr_Lengths[chrNum]);
	}
	searchLength_user = end_user - start_user + 1;
	if(searchLength_user< trackLength_user/10){
		if(start_user ==1){
			end_user = trackLength_user/10;
		}else{
			start_user = end_user - trackLength_user/10 + 1;
		}
	}
	searchLength_user = end_user - start_user + 1;
	startIndex = start_user - searchLength_user;
	endIndex = end_user + searchLength_user;
	searchLength = searchLength_user * 3;
	showRefForHistory();
}

function jump() {
	pageFlag = 0;
	var searchItemPattern = /chr([1-9]|1[0-9]|2[0-2]|X|Y|M):[0-9]+-[0-9]+$/;
	var searchInputNode = document.getElementById("search_field");
	var str = searchInputNode.value;
	str = str.replace(/\s+/g,"");
	str = str.replace(/(,)+/g,"");
	str = str.replace(/chrx/,"chrx");
	str = str.replace(/chry/,"chrY");
	str = str.replace(/chrm/,"chrM");
	if(!searchItemPattern.exec(str)) {
		alert("Please input correct format of your search item.\nIf you are navigating by gene symbol, please input \nthe prefix/full name (case independent) of it and \nclick one of the candidates.");
		searchInputNode.value = "";
	} else {
		var strArray = str.split(/-|:/);
		chrNum = strArray[0];
		chrLength = chr_Lengths[chrNum];
		start_user = parseInt(strArray[1]);
		end_user = parseInt(strArray[2]);
		if(start_user > end_user){
			var temp_start2end = end_user;
			end_user = start_user;
			start_user = temp_start2end;
		}
		searchLength_user = end_user - start_user + 1;
		if(searchLength_user < parseInt(trackLength_user/10)){
			var temp_d = parseInt(trackLength_user/10) - searchLength_user;
			if(temp_d%2==0){
				start_user = start_user - temp_d/2;
				end_user = end_user + temp_d/2;
			}else{
				end_user = end_user + parseInt(temp_d/2);
				start_user = start_user - (parseInt(temp_d/2) + 1)
			}
		}
		if(start_user<1 || end_user> parseInt(chr_Lengths[chrNum])){
			if(start_user < 1){
				start_user = 1;
			}
			if(end_user > parseInt(chr_Lengths[chrNum])){
				end_user = parseInt(chr_Lengths[chrNum]);
			}
			searchLength_user = end_user - start_user + 1;
			if(searchLength_user < trackLength_user/10){
				if(start_user ==1){
					end_user = trackLength_user/10;
				}else{
					start_user = end_user - trackLength_user/10 + 1;
				}
				searchLength_user = end_user - start_user + 1;
			}
		}
		searchLength_user = end_user - start_user + 1;
		startIndex = start_user - searchLength_user;
		endIndex = end_user + searchLength_user;
		searchLength = searchLength_user * 3;
		
		setSliderMax();
		setSliderValue(searchLength_user);
		
		searchInputNode.value = "" + chrNum + ":" + addCommas(start_user) + "-" + addCommas(end_user);
		showuserSearchIndex(start_user, end_user);

		showRef();
	}
}

function showRefForHistory(){
	var url;
	url = "servlet/test.do?";
	url = url + "action=update";
	url = url + "&chr=";
	url = url + chrNum;
	url = url + "&start=";
	url = url + startIndex;
	url = url + "&end=";
	url = url + endIndex;
	url = url + "&width=";
	url = url + trackLength;
	
	window.localStorage.clear();

	updateRequest(url);
}

function showRef() {
	var url;
	url = "servlet/test.do?";
	url = url + "action=update";
	url = url + "&chr=";
	url = url + chrNum;
	url = url + "&start=";
	url = url + startIndex;
	url = url + "&end=";
	url = url + endIndex;
	url = url + "&width=";
	url = url + trackLength;
	
	var tempHref = "browser.html?Chr=";
	tempHref = tempHref + chrNum;
	tempHref = tempHref + "&Start=";
	tempHref = tempHref + startIndex;
	tempHref = tempHref + "&End=";
	tempHref = tempHref + endIndex;
//	tempHref = tempHref + "&width=" + trackLength;
	window.history.pushState("", "title", tempHref);

	window.localStorage.clear();

	updateRequest(url);
}

function createXMLHttpRequest() {
	var xmlHttp = null;
	try {
		// Firefox, Opera 8.0+, Safari
		xmlHttp = new XMLHttpRequest();
	} catch (e) {
		// Internet Explorer
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

var XMLHttpReq = createXMLHttpRequest();
var XMLHttpReq2 = createXMLHttpRequest();//for getDetail
var XMLHttpReq3 = createXMLHttpRequest();
var XMLHttpReq4 = createXMLHttpRequest();
var XMLHttpReq5 = createXMLHttpRequest();
var XMLHttpReq6 = createXMLHttpRequest();//for individual setting.
var XMLHttpReq7 = createXMLHttpRequest();//for browse jump
var XMLHttpReq8 = createXMLHttpRequest();//for BJW_upStat
var XMLHttpReq10 = createXMLHttpRequest();//for BJW_scan
var XMLHttpReq11 = createXMLHttpRequest();//for addExIndividual
var XMLHttpReq12 = createXMLHttpRequest();//for getCheck 
var XMLHttpReq13 = createXMLHttpRequest();//for getScoreMethod
var showType;

function updateRequest(url) {
	if(document.getElementById(loadingId)) {
		hideLoadingImage(loadingId);
	}
	loadingId = showLoadingImage("tableTrack", "body");
	
	if(document.getElementById(ppLoadingId)){
		hideLoadingImage(ppLoadingId);
	}
	if($("#personalPannel").css("display") != "none"){
		ppLoadingId = showLoadingImage("ppContent", "#personalPannel");
	}

	/*$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
		$(arrayele).width(trackLength);
		$(arrayele).css("left", - trackLength_user);
	});*/

	XMLHttpReq13.open("GET","servlet/test.do?action=getScoreMethod",false);
	XMLHttpReq13.send(null);
	var pattern = /<.*?>/g;
	scoremethPvar = XMLHttpReq13.responseText.replace(pattern,""); // added by Liran for restoring current scoring method when the whole page reload

	XMLHttpReq4.onreadystatechange = handleUpdateStateChange;
	XMLHttpReq4.open("GET", url, false);
	XMLHttpReq4.send(null);
}

function handleUpdateStateChange() {
	if(XMLHttpReq4.readyState == 4) {
		if(XMLHttpReq4.status == 200) {
			var XMLDoc = XMLHttpReq4.responseXML;
			var Errors = XMLDoc.getElementsByTagName(xmlTagError);
			if(Errors.length != 0) {
				var errorInfor = Errors[0].childNodes[0].nodeValue;
				var warnBox = document.getElementById("errorDiv");
				warnBox.style.display = "";
				if(pageFlag == 1) {
					document.getElementById("hiddenButton").style.display = "none";
					document.getElementById("returnButton").style.display = "";
				} else {
					document.getElementById("hiddenButton").style.display = "";
					document.getElementById("returnButton").style.display = "none";
				}
				var tempInnerHTML = "<li>";
				tempInnerHTML = tempInnerHTML + errorInfor;
				tempInnerHTML = tempInnerHTML + "</li>";
				document.getElementById("warnList").innerHTML = tempInnerHTML;
			} else {
				chrNum = XMLDoc.getElementsByTagName(xmlTagChrNum)[0].childNodes[0].nodeValue;
				chrLength = parseInt(XMLDoc.getElementsByTagName(xmlTagChrLength)[0].childNodes[0].nodeValue);
				searchLength = endIndex - startIndex + 1;
				if(end_user> chrLength){
					end_user = chrLength;
					searchLength_user = end_user - start_user + 1;
					startIndex = start_user - searchLength_user;
					endIndex = end_user + searchLength_user;
					searchLength = searchLength_user * 3;
				}
				
				setSliderValue(searchLength_user);
				
				drawScaleboxOnCytobandsImg(searchLength_user, start_user);
				
				showuserSearchIndex(start_user, end_user);
				
				tracksImgareaselect.setOptions({
					disable : true
				});

				var cytobandsNode = XMLDoc.getElementsByTagName(xmlTagCytobands)[0];
				if(cytobandsNode) {
					var cytobandsCanvas = document.getElementById("cytobandsCanvas");
					document.getElementById("chrNumTd").childNodes[0].nodeValue = chrNum;
					showCytoband(cytobandsCanvas, cytobandsNode);
				}

				var canvas = document.getElementById('thRefTrack1');
				var thCanvasWidth = canvas.width;

				if(canvas.getContext) {
					var ctx = canvas.getContext('2d');
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					ctx.fillStyle = "#000000";
					var textWidth = ctx.measureText(chrNum);
					if(searchLength <= trackLength/10) {
						ctx.fillText(chrNum, thCanvasWidth - textWidth.width, 35);
					}else if(searchLength > trackLength/10 && searchLength <= trackLength/2){
						ctx.fillText(chrNum, thCanvasWidth - textWidth.width, 38);
					}else {
						ctx.fillText(chrNum, thCanvasWidth - textWidth.width, 27);
					}
				}

				var refSeq = null;

				var widthOfOneBase = trackLength / searchLength;
				if(searchLength <= trackLength/10) {//处理第一种显示情况
					refSeq = XMLDoc.getElementsByTagName(xmlTagSequence)[0].childNodes[0].nodeValue;
					drawRefSeq(widthOfOneBase, refSeq);
				} else if(searchLength > trackLength/10 && searchLength <= trackLength/2) {//处理第二种显示情况
					refSeq = XMLDoc.getElementsByTagName(xmlTagSequence)[0].childNodes[0].nodeValue;
					drawRefColor(widthOfOneBase, refSeq);
				} else {//处理第三种显示情况
					drawRefAxis();
				}
				var trackItem_i;
				for( trackItem_i = 0; trackItem_i < trackItems.length; trackItem_i++) {
					if(trackItems[trackItem_i].mode != "hide") {
						if(trackItems[trackItem_i].dataType == "FASTA"){
							var fastaNodes = XMLDoc.getElementsByTagName(xmlTagSeq);
							var fastaId;
							var fastaNode;
							var fastaTrackNode = document.getElementById(trackItems[trackItem_i].id);
							var fastaCanvasNode = fastaTrackNode.getElementsByTagName("canvas");
							var i;
							for(i=0;i<fastaNodes.length;i++){
								fastaId = fastaNodes[i].getAttribute("id");
								if(fastaId == trackItems[trackItem_i].id){
									fastaNode = fastaNodes[i];
									break;
								}
							}
							var fastaSeq = "";
							if(fastaNode.childNodes[0]){
								fastaSeq = fastaNode.childNodes[0].nodeValue;
							}
							showFastaSeq(fastaCanvasNode[1],fastaCanvasNode[0],widthOfOneBase,fastaSeq,fastaId);
						} else if(trackItems[trackItem_i].dataType == "BAM") {
							var readNodes = XMLDoc.getElementsByTagName(xmlTagReads);
							var readsNode;
							var readsId;
							var i;
							var refSeqTrackNode = document.getElementById(trackItems[trackItem_i].id);
							var refSeqCanvasNodes = refSeqTrackNode.getElementsByTagName("canvas");
							for( i = 0; i < readNodes.length; i++) {
								readsId = readNodes[i].getAttribute("id");
								if(readsId == trackItems[trackItem_i].id) {
									readsNode = readNodes[i];
									break;
								}
							}
							if(i == readNodes.length) {
								readNodes = XMLDoc.getElementsByTagName(xmlTagValues);
								for( i = 0; i < readNodes.length; i++) {
									readsId = readNodes[i].getAttribute("id");
									if(readsId == trackItems[trackItem_i].id) {
										readsNode = readNodes[i];
										break;
									}
								}
								showPositiveValueCombine(refSeqCanvasNodes[0], refSeqCanvasNodes[1], readsNode, trackItems[trackItem_i].mode, "topdown", 70, 50);
							} else {
								showRead(refSeqCanvasNodes[0], refSeqCanvasNodes[1], readsNode, trackItems[trackItem_i].mode, false);
							}
						} else if(trackItems[trackItem_i].dataType == "VCF" || trackItems[trackItem_i].dataType == "GVF") {
							var variantsNodes = XMLDoc.getElementsByTagName(xmlTagVariants);
							var variantsId;
							var variantsNode = null;
							if(variantsNodes.length > 0) {
								for(var i = 0; i < variantsNodes.length; i++) {
									variantsId = variantsNodes[i].getAttribute("id");
									if(variantsId == trackItems[trackItem_i].id) {
										variantsNode = variantsNodes[i];
										break;
									}
								}
								if(variantsNode != null) {
									var trackNode = document.getElementById(trackItems[trackItem_i].id);
									var canvasNodes = trackNode.getElementsByTagName("canvas");
									showVariant(canvasNodes[0], canvasNodes[1], variantsNode, trackItems[trackItem_i].mode);
								} else {
									var overScaleFlag = true;
									for(var i = 0; i < variantsNodes.length; i++) {
										if(variantsNodes[i].getAttribute("superid")) {
											if(variantsNodes[i].getAttribute("superid") == trackItems[trackItem_i].id) {
												if(document.getElementById(trackItems[trackItem_i].id)) {
													removeTrack(trackItems[trackItem_i].id);
												}
												var tt;
												for( tt = 0; tt < trackItems.length; tt++) {
													if(trackItems[tt].id == variantsNodes[i].getAttribute("id")) {
														break;
													}
												}
												if(tt >= trackItems.length) {
													var subtrackObj = [];
													subtrackObj.id = variantsNodes[i].getAttribute("id");
													subtrackObj.superid = variantsNodes[i].getAttribute("superid");
													subtrackObj.mode = trackItems[trackItem_i].mode;
													subtrackObj.dataType = trackItems[trackItem_i].dataType;
													subtrackObj.group = trackItems[trackItem_i].group;
													subtrackObj.isServer = trackItems[trackItem_i].isServer;
													subtrackObj.details = [];
													trackItems.push(subtrackObj);
													createTrack(subtrackObj.id,subtrackObj.mode);
												}
												overScaleFlag = false;
											}
											personalPannel.personalTrackItems.Pvars.push("_" + variantsNodes[i].getAttribute("id"));
											var Pvars_index;
											for( Pvars_index = 0; Pvars_index < personalPannel.personalTrackItems.Pvars.length; Pvars_index++) {
												if(personalPannel.personalTrackItems.Pvars[Pvars_index] == ("_" + variantsNodes[i].getAttribute("superid"))) {
													personalPannel.personalTrackItems.Pvars.splice(Pvars_index, 1);
													break;
												}
											}
										}
									}
									if(!overScaleFlag) {
										trackItems.splice(trackItem_i, 1);
										trackItem_i--;
									}
									if(overScaleFlag) {
										overScaleShow(trackItems[trackItem_i].id);
									}
								}
							} else {
								overScaleShow(trackItems[trackItem_i].id);
							}
						} else if(trackItems[trackItem_i].dataType == "BED" || trackItems[trackItem_i].dataType == "BEDGZ" || trackItems[trackItem_i].dataType == "ANNO" || trackItems[trackItem_i].dataType == "GRF" || trackItems[trackItem_i].dataType == "GDF") {
							var elementsNodes = XMLDoc.getElementsByTagName(xmlTagElements);
							var geneNode;
							var elementsId;
							for(var i = 0; i < elementsNodes.length; i++) {
								elementsId = elementsNodes[i].getAttribute("id");
								if(elementsId == trackItems[trackItem_i].id) {
									geneNode = elementsNodes[i];
									break;
								}
							}
							var refSeqTrackNode = document.getElementById(trackItems[trackItem_i].id);
							var refSeqCanvasNodes = refSeqTrackNode.getElementsByTagName("canvas");
							showGene(refSeqCanvasNodes[0], refSeqCanvasNodes[1], geneNode, trackItems[trackItem_i].mode);
						} else if(trackItems[trackItem_i].dataType == "BW" || trackItems[trackItem_i].dataType == "WIG") {
							var elementsNodes = XMLDoc.getElementsByTagName(xmlTagValues);
							var geneNode;
							var elementsId;
							for(var i = 0; i < elementsNodes.length; i++) {
								elementsId = elementsNodes[i].getAttribute("id");
								if(elementsId == trackItems[trackItem_i].id) {
									geneNode = elementsNodes[i];
									break;
								}
							}
							var refSeqTrackNode = document.getElementById(trackItems[trackItem_i].id);
							var refSeqCanvasNodes = refSeqTrackNode.getElementsByTagName("canvas");
							showValueCombine(refSeqCanvasNodes[0], refSeqCanvasNodes[1], geneNode, trackItems[trackItem_i].mode, "downtop", 100, 50);
						}
					}
				}

				hideLoadingImage(loadingId);
				
				if(personalPannel.Pvar.id){
					var element_nodes = XMLDoc.getElementsByTagName(xmlTagElements);
					var canvasNodes;
					//show personal genome
					var Pvar_node = null, variant_nodes = XMLDoc.getElementsByTagName(xmlTagVariants);
					for(var i = 0; i < variant_nodes.length; i++){
						if(personalPannel.Pvar.id == variant_nodes[i].getAttribute("id")){
							Pvar_node = variant_nodes[i];
							break;
						}
					}
					if(Pvar_node){
						canvasNodes = document.getElementById(personalPannel.Pvar.id).getElementsByTagName("canvas");
						showVariantByImg(canvasNodes[0], canvasNodes[1], Pvar_node, personalPannel.Pvar.mode);
					}else{
						overScaleShow(personalPannel.Pvar.id);
					}
					//show Pfanno
					if(personalPannel.Pfanno.id) {
						var personal_fanno_node = null;
						for(var i = 0; i < element_nodes.length; i++) {
							if(personalPannel.Pfanno.id == element_nodes[i].getAttribute("id")) {
								personal_fanno_node = element_nodes[i];
								break;
							}
						}
						if(personal_fanno_node){
							canvasNodes = document.getElementById(personalPannel.Pfanno.id).getElementsByTagName("canvas");
							showGene(canvasNodes[0], canvasNodes[1], personal_fanno_node, personalPannel.Pfanno.mode);
						}else{
							overScaleShow(personalPannel.Pfanno.id);
						}
					}
					//show Panno
					if(personalPannel.Panno.id) {
						var personal_anno_nodes = [];
						for(var i = 0; i < element_nodes.length; i++) {
							if(element_nodes[i].getAttribute("id") == personalPannel.Panno.id) {
								personal_anno_nodes.push(element_nodes[i]);
							}
						}
						canvasNodes = document.getElementById(personalPannel.Panno.id).getElementsByTagName("canvas");
						if(personal_anno_nodes.length == 1) {
							showPersonalGeneByImg_OneNode(canvasNodes[0], canvasNodes[1], personal_anno_nodes[0], personalPannel.Panno.mode);
						} else if(personal_anno_nodes.length == 2) {
							showPersonalGeneByImg_TwoNode(canvasNodes[0], canvasNodes[1], personal_anno_nodes[0], personal_anno_nodes[1], personalPannel.Panno.mode);
						}else{
							overScaleShow(personalPannel.Panno.id);
						}
					}
					//Pclns tracks
					if(personalPannel.Pclns.length > 0) {
						var pclns_flag;
						for(var i = 0; i < personalPannel.Pclns.length; i++) {
							pclns_flag = false;
							for(var j = 0; j < element_nodes.length; j++) {
								if(element_nodes[j].getAttribute("id") == personalPannel.Pclns[i].id) {
									pclns_flag = true;
									canvasNodes = document.getElementById(personalPannel.Pclns[i].id).getElementsByTagName("canvas");
									showGene(canvasNodes[0], canvasNodes[1], element_nodes[j], personalPannel.Pclns[i].mode);
									break;
								}
							}
							if(!pclns_flag){
								overScaleShow(personalPannel.Pclns[i].id);
							}
						}
					}
//					var ppTop = (document.body.clientHeight + document.body.scrollTop - $("#personalPannel").height() - 10);
//					ppTop = ppTop > 50 ? ppTop : 50;
					$(window).resize();
//					$("#personalPannel").animate({top:ppTop});
					$("#ppTrackTable tbody").sortable({axis:"y" ,cancel:".cannotSortable"});
				}
				
				if(document.getElementById(ppLoadingId)) {
					hideLoadingImage(ppLoadingId);
				}

				$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
					$(arrayele).width(trackLength);
					$(arrayele).css("left", -trackLength_user);
				});
			}
		}
	}
	$( ".canvasTrackcontent" ).draggable({ 
		axis: "x" ,
		cursor: "url(./image/Grabber.cur),auto" ,
		drag : function(event, ui) {
			$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
				$(arrayele).css("left", ui.position.left);
			});
			dragDragHandler(ui.position.left);
		},
		stop : function(event, ui){
			dragStopHandler(ui.position.left);
		}
	});
	trackItems_setting2();
}

function drawRefSeq(widthOfOneBase, refSeq) {
	var canvas = document.getElementById('refTrack1');
	var startIndex_axis, endIndex_axis;
	if(startIndex<1){
		startIndex_axis = 1;
	}else{
		startIndex_axis = startIndex;
	}
	if(endIndex> chrLength){
		endIndex_axis = chrLength;
	}else{
		endIndex_axis = endIndex;
	}
	if(canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#000000";
		//ctx.font = "10px Arial";
		ctx.textBaseline = "alphabetic";
		//y is the base coordinate in y axis,textBaseline is bootom(default)
		//bg_y is the y coordinate of the base_background
		//coordinate_y and coordiante_tag_y are the y coordinate of the coordinate
		var i, x, y = 35, bg_x, bg_x_next, bg_y = 26;
		var coordinate_tag_y = 14, coordinate_y = 23;
		var coordinate_refSeq = startIndex_axis, width_coordinate = ctx.measureText(addCommas(endIndex_axis)).width;
		//1.5 is a coefficient(>=1)
		var baseNumOftwoCoordinate = width_coordinate * 1.5 / widthOfOneBase;
		var x_coordinate;
		if(baseNumOftwoCoordinate <= 1) {
			baseNumOftwoCoordinate = 1;
		} else if(baseNumOftwoCoordinate <= 5) {
			baseNumOftwoCoordinate = 5;
		} else {
			baseNumOftwoCoordinate = parseInt(baseNumOftwoCoordinate / 10) * 10 + 10;
		}
		var coordinate_refSeq_first;
		if(baseNumOftwoCoordinate == 1) {
			coordinate_refSeq_first = startIndex_axis;
		} else if(baseNumOftwoCoordinate == 5) {
			i = 0;
			while(i < searchLength) {
				coordinate_refSeq = startIndex_axis + i;
				if(coordinate_refSeq % 5 == 0 && width_coordinate < (i + 1) * widthOfOneBase - 4) {
					coordinate_refSeq_first = coordinate_refSeq;
					break;
				}
				i++;
			}
		} else {
			i = 0;
			while(i < searchLength) {
				coordinate_refSeq = startIndex_axis + i;
				if(coordinate_refSeq % 10 == 0 && width_coordinate < (i + 1) * widthOfOneBase - 4) {
					coordinate_refSeq_first = coordinate_refSeq;
					break;
				}
				i++;
			}
		}
		coordinate_refSeq = coordinate_refSeq_first;
		while(coordinate_refSeq <= endIndex_axis) {
			x_coordinate = Math.round((coordinate_refSeq - startIndex + 1) * widthOfOneBase) - 1;
			ctx.fillRect(x_coordinate, coordinate_tag_y, 1, 9);
			ctx.fillStyle = "#000";
			ctx.textAlign = "right";
			ctx.fillText(addCommas(coordinate_refSeq), x_coordinate - 2, coordinate_y);
			coordinate_refSeq = coordinate_refSeq + baseNumOftwoCoordinate;
		}
		var length_beforeCoordinate = (startIndex_axis - startIndex)/ searchLength * trackLength;
		for( i = 0; i < refSeq.length; i++) {
			bg_x = Math.round(i * widthOfOneBase);
			bg_x_next = Math.round((i + 1) * widthOfOneBase);
			if(refSeq[i] == 'A' || refSeq[i] == 'a') {
				ctx.fillStyle = "rgb(249,194,56)";
			} else if(refSeq[i] == 'C' || refSeq[i] == 'c') {
				ctx.fillStyle = "rgb(236,95,75)";
			} else if(refSeq[i] == 'G' || refSeq[i] == 'g') {
				ctx.fillStyle = "rgb(122,197,131)";
			} else if(refSeq[i] == 'T' || refSeq[i] == 't'){
				ctx.fillStyle = "rgb(133,122,185)";
			}else{
				ctx.fillStyle = "rgb(163,165,167)";
			}
			ctx.fillRect(bg_x + length_beforeCoordinate, bg_y, bg_x_next - bg_x, 10);
			//plot the bases,textAlign is "center" mode
			x = Math.round((bg_x_next + bg_x) / 2);
			ctx.fillStyle = "#000";
			ctx.textAlign = "center";
			ctx.fillText(refSeq[i], x + length_beforeCoordinate, y);
		}
	}
}

function showFastaSeq(canvas, canvas2, widthOfOneBase, fastaSeq, fastaId) {
	var startIndex_axis, endIndex_axis;
	if(startIndex<1){
		startIndex_axis = 1;
	}else{
		startIndex_axis = startIndex;
	}
	if(endIndex> chrLength){
		endIndex_axis = chrLength;
	}else{
		endIndex_axis = endIndex;
	}
	if(canvas.getContext && canvas2.getContext) {
		canvas.height = 10;
		canvas.style.height = 10;
		canvas2.height = 10;
		canvas2.style.height = 10;
		var ctx2 = canvas2.getContext('2d');
		ctx2.clearRect(0, 0, canvas.width, canvas.height);
		ctx2.strokeStyle = "#000";
		ctx2.fillStyle = "#000";
		ctx2.fillText(fastaId, canvas2.width - ctx2.measureText(fastaId).width, 8);

		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#000000";

//		ctx.font = "12px Consolas,andale mono,courier,mono";
		ctx.textBaseline = "alphabetic";
		//y is the base coordinate in y axis,textBaseline is bootom(default)
		//bg_y is the y coordinate of the base_background
		//coordinate_y and coordiante_tag_y are the y coordinate of the coordinate
		var i, x, y = 10, bg_x, bg_x_next, bg_y = 1;
		var length_beforeCoordinate = (startIndex_axis - startIndex)/ searchLength * trackLength;
		if(searchLength <= trackLength/10) {
			for( i = 0; i < fastaSeq.length; i++) {
				bg_x = Math.round(i * widthOfOneBase);
				bg_x_next = Math.round((i + 1) * widthOfOneBase);
				x = Math.round((bg_x_next + bg_x) / 2);
				ctx.fillStyle = "#000";
				ctx.textAlign = "center";
				ctx.fillText(fastaSeq[i], x + length_beforeCoordinate, y);
			}
		}
	}
}

function insertSettingBtn(trackId, ifParam, superId) {
	if(ifParam == "true") {
		var trackNode = document.getElementById(trackId);
		var trackOperatorNode = trackNode.getElementsByClassName("trackOperator")[0];
		if(trackOperatorNode.getElementsByClassName("setting").length == 0) {
			var spanNode = document.createElement("span");
			spanNode.setAttribute("class", "setting thickbox");
			spanNode.setAttribute("title", "track parameters setting");
			spanNode.setAttribute("alt", "#TB_inline?height=300;width=650;inlineId=tracksettingDIV");
			spanNode.setAttribute("id", "servlet/test.do?action=getParams&tracks=" + superId);
			trackOperatorNode.appendChild(spanNode);
			tb_init(spanNode);
		}
	}
}

function drawRefColor(widthOfOneBase, refSeq) {
	var canvas = document.getElementById('refTrack1');
	var startIndex_axis, endIndex_axis;
	if(startIndex<1){
		startIndex_axis = 1;
	}else{
		startIndex_axis = startIndex;
	}
	if(endIndex> chrLength){
		endIndex_axis = chrLength;
	}else{
		endIndex_axis = endIndex;
	}
	if(canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		var i, x, y = 21, height = 24;

		var coordinate_tag_y = 8, coordinate_y = 8;
		var coordinate_refSeq = startIndex_axis, width_coordinate = ctx.measureText(addCommas(endIndex_axis)).width;
		//1.5 is a coefficient(>=1)
		var baseNumOftwoCoordinate = width_coordinate * 1.5 / widthOfOneBase;
		if(baseNumOftwoCoordinate <= 1) {
			baseNumOftwoCoordinate = 1;
		} else if(baseNumOftwoCoordinate <= 5) {
			baseNumOftwoCoordinate = 5;
		} else {
			baseNumOftwoCoordinate = parseInt(baseNumOftwoCoordinate / 10) * 10 + 10;
		}
		//找开始坐标
		var coordinate_refSeq_first;
		if(baseNumOftwoCoordinate == 1) {
			coordinate_refSeq_first = startIndex_axis;
		} else if(baseNumOftwoCoordinate == 5) {
			i = 0;
			while(i < searchLength) {
				coordinate_refSeq = startIndex_axis + i;
				if(coordinate_refSeq % 5 == 0 && width_coordinate < (i + 1) * widthOfOneBase - 4) {
					coordinate_refSeq_first = coordinate_refSeq;
					break;
				}
				i++;
			}
		} else {
			i = 0;
			while(i < searchLength) {
				coordinate_refSeq = startIndex_axis + i;
				if(coordinate_refSeq % 10 == 0 && width_coordinate < (i + 1) * widthOfOneBase - 4) {
					coordinate_refSeq_first = coordinate_refSeq;
					break;
				}
				i++;
			}
		}
		//画坐标
		var x_coordinate;
		coordinate_refSeq = coordinate_refSeq_first;
		while(coordinate_refSeq <= endIndex_axis) {
			x_coordinate = Math.round((coordinate_refSeq - startIndex + 1) * widthOfOneBase) - 1;
			ctx.fillStyle = "#000";
			ctx.fillRect(x_coordinate, coordinate_tag_y, 1, 10);
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText(addCommas(coordinate_refSeq), x_coordinate - 2, coordinate_y);
			coordinate_refSeq = coordinate_refSeq + baseNumOftwoCoordinate;
		}
		//画剪辑颜色条
		var length_beforeCoordinate = (startIndex_axis - startIndex)/ searchLength * trackLength;
		for(i=0; i< refSeq.length;i++){
			x = Math.round(i * widthOfOneBase);
			if(refSeq[i] == 'A') {
				ctx.fillStyle = "rgb(249,194,56)";
			} else if(refSeq[i] == 'C') {
				ctx.fillStyle = "rgb(236,95,75)";
			} else if(refSeq[i] == 'G') {
				ctx.fillStyle = "rgb(122,197,131)";
			} else if(refSeq[i] == 'T'){
				ctx.fillStyle = "rgb(133,122,185)";
			}else{
				ctx.fillStyle = "rgb(163,165,167)"
			}
			ctx.fillRect(x + length_beforeCoordinate, y, Math.round((i + 1) * widthOfOneBase) - x, height);
		}
	}
}

function drawRefAxis() {//规定最小显示粒度为10个pixel
	var canvas = document.getElementById('refTrack1');
	var startIndex_axis, endIndex_axis;
	if(startIndex<1){
		startIndex_axis = 1;
	}else{
		startIndex_axis = startIndex;
	}
	if(endIndex> chrLength){
		endIndex_axis = chrLength;
	}else{
		endIndex_axis = endIndex;
	}
	if(canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#000000";
		var minPixels = 5;
		var n = trackLength / minPixels;
		var bpNumPer = searchLength / n;
		var bitNumOfbpNumPer = calcBitNum(bpNumPer);

		var bpNumResult;
		if(Math.pow(10, bitNumOfbpNumPer - 1) != bpNumPer) {
			bpNumResult = Math.pow(10, bitNumOfbpNumPer);
		} else {
			bpNumResult = Math.pow(10, bitNumOfbpNumPer - 1);
		}
		//找到第一个小格的起始位置
		var width = trackLength / searchLength * bpNumResult;
		var bpNumFromStartToFirst = bpNumResult - startIndex % bpNumResult;
		var firstX = bpNumFromStartToFirst / bpNumResult * width;

		var widthOfAxis = trackLength;
		var yOfAxis = 25;
		
		var axis_start_in_canvas = (startIndex_axis - startIndex) / searchLength * trackLength;
		var axis_end_in_canvas = (endIndex_axis - startIndex + 1) / searchLength * trackLength;
		var axis_width_in_canvas = axis_end_in_canvas - axis_start_in_canvas + 1;

		ctx.fillRect(axis_start_in_canvas, yOfAxis, axis_width_in_canvas, 1);

		var temp_x = firstX;
		var i = 0;
		var indexOfAxis = startIndex + bpNumFromStartToFirst;
		var index_str = "";
		while(temp_x< widthOfAxis){	
			if(temp_x >= axis_start_in_canvas && temp_x <= axis_end_in_canvas) {
				if(indexOfAxis % (10 * bpNumResult) == 0) {
					ctx.beginPath();
					ctx.moveTo(temp_x + 0.5, yOfAxis - 10);
					ctx.lineTo(temp_x + 0.5, yOfAxis);
					ctx.closePath();
					ctx.stroke();
					index_str = "";
					index_str = index_str + scientificNotation(indexOfAxis, 10 * bpNumResult);
					ctx.textAlign = "center";
					ctx.fillText(index_str, temp_x, yOfAxis + 12);
					ctx.textAlign = "start";
				} else {
					ctx.beginPath();
					ctx.moveTo(temp_x + 0.5, yOfAxis - 4);
					ctx.lineTo(temp_x + 0.5, yOfAxis);
					ctx.closePath();
					ctx.stroke();
				}
			}
			i++;
			temp_x = parseInt(i * width + firstX);
			indexOfAxis = indexOfAxis + bpNumResult;
		}
	}
}

function calcBitNum(x) {
	var bitNum = 0;
	while(parseInt(x / Math.pow(10, bitNum))) {
		bitNum++;
	}
	return bitNum;
}

function addCommas(nStr) {
	nStr += '';
	var x = nStr.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while(rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function clearComma(strNum) {
	return strNum.replace(/,/g, "");
}

function scientificNotation(num, measurement){
	var result = num;
	switch(measurement) {
		case 10:
			result = addCommas(num);
			break;
		case 100:
		case 1000:
		case 10000:
			result = addCommas(num / 1000) + "K";
			break;
		case 100000:
		case 1000000:
		case 10000000:
			result = addCommas(num / 1000000) + "M";
			break;
		default:
			result = addCommas(num / 100000000) + "G";
	}
	return result;
}

function showRead(canvas1, canvas2, readNode, mode, isShowId) {
	var readNodeName = readNode.getAttribute(xmlAttributeId);
	var readNodes = readNode.getElementsByTagName(xmlTagRead);
	var readIds = [], readFroms = [], readTos = [], readDireactions = [], readMapqs = [];
	var readRelativeFroms = [], readRelativeTos = [], readRelativeWidth;
	var variantNodes = [], variantIds = [], variantTypes = [];
	var variantFroms = [], variantTos = [], variantLetters = [], variantDescriptions = [];
	var variantRelativeFroms = [], variantRelativeTos = [];

	var i, j, k, y;
	var trackItemIndex;
	
	for( i = 0; i < trackItems.length; i++) {
		if(readNodeName == trackItems[i].id) {
			trackItemIndex = i;
			break;
		}
	}
	
	if(trackItemIndex< trackItems.length){
		trackItems[trackItemIndex].details = [];
	}
	
	for( i = 0; i < readNodes.length; i++) {
		readFroms[i] = (readNodes[i].firstChild.childNodes[0].nodeValue).split(',');
		readTos[i] = (readNodes[i].childNodes[1].childNodes[0].nodeValue).split(',');
		readDireactions[i] = readNodes[i].childNodes[2].childNodes[0].nodeValue;
		readMapqs[i] = readNodes[i].childNodes[3].childNodes[0].nodeValue;
		readIds[i] = readNodes[i].getAttribute(xmlAttributeId);

		readRelativeFroms[i] = [];
		readRelativeTos[i] = [];
		for( j = 0; j < readFroms[i].length; j++) {
			readRelativeFroms[i][j] = parseInt((parseInt(readFroms[i][j]) - startIndex) / searchLength * trackLength);
			readRelativeTos[i][j] = parseInt((parseInt(readTos[i][j]) - startIndex + 1) / searchLength * trackLength);
		}
		
		if(trackItemIndex< trackItems.length){
			trackItems[trackItemIndex].details[i] = [];
			trackItems[trackItemIndex].details[i].id = readIds[i];
			trackItems[trackItemIndex].details[i].from = readFroms[i][0];
			trackItems[trackItemIndex].details[i].to = readTos[i][readTos[i].length - 1];
			trackItems[trackItemIndex].details[i].left = readRelativeFroms[i][0];
			trackItems[trackItemIndex].details[i].right = readRelativeTos[i][readRelativeTos[i].length - 1];
		}

		variantNodes[i] = readNodes[i].getElementsByTagName(xmlTagVariant);
		variantIds[i] = [];
		variantTypes[i] = [];
		variantFroms[i] = [];
		variantTos[i] = [];
		variantLetters[i] = [];
		variantDescriptions[i] = [];
		variantRelativeFroms[i] = [];
		variantRelativeTos[i] = [];

		for( j = 0; j < variantNodes[i].length; j++) {
			variantFroms[i][j] = parseInt(variantNodes[i][j].firstChild.childNodes[0].nodeValue);
			variantTos[i][j] = parseInt(variantNodes[i][j].childNodes[1].childNodes[0].nodeValue);

			if(variantFroms[i][j] >= startIndex && variantTos[i][j] <= endIndex) {
				variantIds[i][j] = variantNodes[i][j].getAttribute("id");
				variantTypes[i][j] = variantNodes[i][j].getAttribute(xmlAttributeType);
				if(variantTypes[i][j] == variantType_DELETION) {
					//variantDescriptions[i][j] = variantNodes[i][j].childNodes[2].childNodes[0].nodeValue;
					variantLetters[i][j] = "×";
				} else {//other Type:SNV,INS
					variantLetters[i][j] = variantNodes[i][j].childNodes[2].childNodes[0].nodeValue;
					//variantDescriptions[i][j] = variantNodes[i][j].childNodes[3].childNodes[0].nodeValue;
				}

				variantRelativeFroms[i][j] = parseInt((variantFroms[i][j] - startIndex ) / searchLength * trackLength);
				variantRelativeTos[i][j] = parseInt((variantTos[i][j] - startIndex + 1) / searchLength * trackLength);
			}
		}
	}

	if(canvas1.getContext && canvas2.getContext) {
		var ctx1 = canvas1.getContext('2d');
		var ctx2 = canvas2.getContext('2d');
		if(readNodes.length == 0) {
			canvas1.height = 10;
			canvas1.style.height = 10;
			canvas2.height = 10;
			canvas2.style.height = 10;
			ctx1.strokeStyle = "#000";
			ctx1.fillStyle = "#000";
			ctx1.fillText(readNodeName, canvas1.width - ctx1.measureText(readNodeName).width, 8);
		} else {
			if(mode == "dense") {
				canvas1.height = 10;
				canvas2.height = 10;
				canvas1.style.height = 10;
				canvas2.style.height = 10;

				ctx1.strokeStyle = "#000";
				ctx1.fillStyle = "#000";
				ctx1.fillText(readNodeName, canvas1.width - ctx1.measureText(readNodeName).width, 8);

				for( i = 0; i < readNodes.length; i++) {
					if(readDireactions[i] == "+") {
						if(parseInt(readMapqs[i]) == 0) {
							ctx2.strokeStyle = "#6ff9f";
							ctx2.fillStyle = "#6fff9f";
						} else if(0 < parseInt(readMapqs[i]) <= 10) {
							ctx2.strokeStyle = "#4eee94";
							ctx2.fillStyle = "#4eee94";
						} else if(10 < parseInt(readMapqs[i]) <= 20) {
							ctx2.strokeStyle = "#43cd80";
							ctx2.fillStyle = "#43cd80";
						} else if(20 < parseInt(readMapqs[i]) <= 30) {
							ctx2.strokeStyle = "#5fa080";
							ctx2.fillStyle = "#5fa080";
						} else {//  >30的情况，一般最大到40
							ctx2.strokeStyle = "#458b74";
							ctx2.fillStyle = "#458b74";
						}
					} else {
						if(parseInt(readMapqs[i]) == 0) {
							ctx2.strokeStyle = "#8deeff";
							ctx2.fillStyle = "#8deeff";
						} else if(0 < parseInt(readMapqs[i]) <= 10) {
							ctx2.strokeStyle = "#70caee";
							ctx2.fillStyle = "#70caee";
						} else if(10 < parseInt(readMapqs[i]) <= 20) {
							ctx2.strokeStyle = "#48acff";
							ctx2.fillStyle = "#48acff";
						} else if(20 < parseInt(readMapqs[i]) <= 30) {
							ctx2.strokeStyle = "#3a85ff";
							ctx2.fillStyle = "#3a85ff";
						} else {//  >30的情况，一般最大到40
							ctx2.strokeStyle = "#3a6acd";
							ctx2.fillStyle = "#3a6acd";
						}
					}
					ctx2.fillRect(readRelativeFroms[i][0], 0, Math.abs(readRelativeTos[i][0] - readRelativeFroms[i][0] + 1), 10);
					for( j = 1; j < readRelativeFroms[i].length; j++) {
						ctx2.fillRect(readRelativeTos[i][j - 1], 5, Math.abs(readRelativeFroms[i][j] - readRelativeTos[i][j - 1] + 1), 1);
						ctx2.fillRect(readRelativeFroms[i][j], 0, Math.abs(readRelativeTos[i][j] - readRelativeFroms[i][j] + 1), 10);
					}
					for( j = 0; j < variantNodes[i].length; j++) {
						if(variantFroms[i][j] >= startIndex && variantTos[i][j] <= endIndex) {
							if(variantTypes[i][j] == variantType_SNV) {
								ctx2.strokeStyle = "#ffff00";
								ctx2.fillStyle = "#ffff00";
							} else if(variantTypes[i][j] == variantType_INSERTION) {
								ctx2.strokeStyle = "#000";
								ctx2.fillStyle = "#000";
							} else {
								ctx2.fillStyle = "#FF0000";
								ctx2.strokeStyle = "#FF0000";
							}
							if(variantTypes[i][j] == variantType_INSERTION) {//triangle is used to express insertion
								ctx2.beginPath();
								ctx2.moveTo((variantRelativeFroms[i][j] + variantRelativeTos[i][j]) / 2, 0);
								ctx2.lineTo((variantFroms[i][j] + 1 + 0.5 * variantLetters[i][j].length - startIndex) / searchLength * trackLength, 10);
								ctx2.lineTo((variantFroms[i][j] + 1 - 0.5 * variantLetters[i][j].length - startIndex) / searchLength * trackLength, 10);
								ctx2.closePath();
								ctx2.fill();
							} else {
								ctx2.fillRect(variantRelativeFroms[i][j], 0, Math.abs(variantRelativeTos[i][j] - variantRelativeFroms[i][j] + 1), 10);
							}
						}
					}
				}
			} else {
				var packReads = [], squishReads = [];
				if((mode == "pack") && (readNodes.length <= parseInt(trackLength / 50 * 50))) {
					packReads[packReads.length] = [];
					packReads[0][0] = 0;
					if(isShowId == true) {
						for( i = 1; i < readNodes.length; i++) {
							for( j = 0; j < packReads.length; j++) {
								if((readRelativeFroms[i][0] - ctx2.measureText(readIds[i]).width - 8) > readRelativeTos[packReads[j][packReads[j].length - 1]][readRelativeTos[packReads[j][packReads[j].length - 1]].length - 1]) {
									packReads[j][packReads[j].length] = i;
									break;
								}
							}
							if(j == packReads.length) {
								packReads[packReads.length] = [];
								packReads[j][0] = i;
							}
						}
						if(packReads.length <= 50) {
							canvas1.height = 10 * packReads.length + 3*(packReads.length-1);
							canvas1.style.height = 10 * packReads.length + 3*(packReads.length-1);
							canvas2.height = 10 * packReads.length + 3*(packReads.length-1);
							canvas2.style.height = 10 * packReads.length + 3*(packReads.length-1);

							ctx1.fillStyle = "#000";
							ctx1.strokeStyle = "#000";
							ctx1.fillText(readNodeName, canvas1.width - ctx1.measureText(readNodeName).width, 8);
							
							y = 10;
							for( i = 0; i < packReads.length; i++) {
								for( j = 0; j < packReads[i].length; j++) {
									if(trackItemIndex< trackItems.length){
										trackItems[trackItemIndex].details[packReads[i][j]].left = readRelativeFroms[packReads[i][j]][0] - ctx2.measureText(readIds[packReads[i][j]]).width - 3;
										trackItems[trackItemIndex].details[packReads[i][j]].right = readRelativeTos[packReads[i][j]][readRelativeTos[packReads[i][j]].length - 1];
										trackItems[trackItemIndex].details[packReads[i][j]].top = y - 10;
										trackItems[trackItemIndex].details[packReads[i][j]].bottom = y;
									}
									
									ctx2.fillStyle = "#000";
									ctx2.strokeStyle = "#000";
									ctx2.fillText(readIds[packReads[i][j]], readRelativeFroms[packReads[i][j]][0] - ctx2.measureText(readIds[packReads[i][j]]).width - 3, y-2);
									
									if(readDireactions[packReads[i][j]] == "+") {
										if(parseInt(readMapqs[packReads[i][j]]) == 0) {
											ctx2.strokeStyle = "#6ff9f";
											ctx2.fillStyle = "#6fff9f";
										} else if(0 < parseInt(readMapqs[packReads[i][j]]) <= 10) {
											ctx2.strokeStyle = "#4eee94";
											ctx2.fillStyle = "#4eee94";
										} else if(10 < parseInt(readMapqs[packReads[i][j]]) <= 20) {
											ctx2.strokeStyle = "#43cd80";
											ctx2.fillStyle = "#43cd80";
										} else if(20 < parseInt(readMapqs[packReads[i][j]]) <= 30) {
											ctx2.strokeStyle = "#5fa080";
											ctx2.fillStyle = "#5fa080";
										} else {//  >30的情况，一般最大到40
											ctx2.strokeStyle = "#458b74";
											ctx2.fillStyle = "#458b74";
										}
									} else {
										if(parseInt(readMapqs[packReads[i][j]]) == 0) {
											ctx2.strokeStyle = "#8deeff";
											ctx2.fillStyle = "#8deeff";
										} else if(0 < parseInt(readMapqs[packReads[i][j]]) <= 10) {
											ctx2.strokeStyle = "#70caee";
											ctx2.fillStyle = "#70caee";
										} else if(10 < parseInt(readMapqs[packReads[i][j]]) <= 20) {
											ctx2.strokeStyle = "#48acff";
											ctx2.fillStyle = "#48acff";
										} else if(20 < parseInt(readMapqs[packReads[i][j]]) <= 30) {
											ctx2.strokeStyle = "#3a85ff";
											ctx2.fillStyle = "#3a85ff";
										} else {//  >30的情况，一般最大到40
											ctx2.strokeStyle = "#3a6acd";
											ctx2.fillStyle = "#3a6acd";
										}
									}
									ctx2.fillRect(readRelativeFroms[packReads[i][j]][0], y - 10, Math.abs(readRelativeTos[packReads[i][j]][0] - readRelativeFroms[packReads[i][j]][0] + 1), 10);
									for( k = 1; k < readRelativeFroms[packReads[i][j]].length; k++) {
										ctx2.fillRect(readRelativeTos[packReads[i][j]][k - 1], y - 5, Math.abs(readRelativeFroms[packReads[i][j]][k] - readRelativeTos[packReads[i][j]][k - 1] + 1), 1);
										ctx2.fillRect(readRelativeFroms[packReads[i][j]][k], y - 10, Math.abs(readRelativeTos[packReads[i][j]][k] - readRelativeFroms[packReads[i][j]][k] + 1), 10);
									}
									for( k = 0; k < variantNodes[packReads[i][j]].length; k++) {
										if(variantFroms[packReads[i][j]][k] >= startIndex && variantTos[packReads[i][j]][k] <= endIndex) {
											if(variantTypes[packReads[i][j]][k] == variantType_SNV) {
												ctx2.strokeStyle = "#ffff00";
												ctx2.fillStyle = "#ffff00";
											} else if(variantTypes[packReads[i][j]][k] == variantType_INSERTION) {
												ctx2.strokeStyle = "#000";
												ctx2.fillStyle = "#000";
											} else {
												ctx2.fillStyle = "#FF0000";
												ctx2.strokeStyle = "#FF0000";
											}

											if(variantTypes[packReads[i][j]][k] == variantType_INSERTION) {//triangle is used to express insertion
												ctx2.beginPath();
												ctx2.moveTo((variantRelativeFroms[packReads[i][j]][k] + variantRelativeTos[packReads[i][j]][k]) / 2, y - 10);
												ctx2.lineTo((variantFroms[packReads[i][j]][k] + 1 + 0.5 * variantLetters[packReads[i][j]][k].length - startIndex) / searchLength * trackLength, y);
												ctx2.lineTo((variantFroms[packReads[i][j]][k] + 1 - 0.5 * variantLetters[packReads[i][j]][k].length - startIndex) / searchLength * trackLength, y);
												ctx2.closePath();
												ctx2.fill();
											} else {
												ctx2.fillRect(variantRelativeFroms[packReads[i][j]][k], y - 10, Math.abs(variantRelativeTos[packReads[i][j]][k] - variantRelativeFroms[packReads[i][j]][k] + 1), 10);
											}

											if(searchLength <= trackLength / 10) {
												if(variantTypes[packReads[i][j]][k] == variantType_INSERTION) {
													ctx2.fillStyle = "#ffffff";
													ctx2.strokeStyle = "#ffffff";
												} else {
													if(readDireactions[packReads[i][j]] == "+") {
														ctx2.fillStyle = "#458b74";
														ctx2.strokeStyle = "#458b74";
													} else {
														ctx2.fillStyle = "#3a6acd";
														ctx2.strokeStyle = "#3a6acd";
													}
												}
												if(variantTypes[packReads[i][j]][k] != variantType_INSERTION) {
													ctx2.textAlign = "center";
													ctx2.fillText(variantLetters[packReads[i][j]][k], (variantRelativeTos[packReads[i][j]][k] + variantRelativeFroms[packReads[i][j]][k] + 1) / 2, y-2);
													ctx2.textAlign = "start";
												}
											}
										}
									}
								}
								y = y + 13;
							}
							canvas2.addEventListener("mousemove", canvasMousemove, false);
							canvas2.addEventListener("click", canvasClickForRead, false);
						}
					} else {
						for( i = 1; i < readNodes.length; i++) {
							for( j = 0; j < packReads.length; j++) {
								if((readRelativeFroms[i][0] - 5) > readRelativeTos[packReads[j][packReads[j].length - 1]][readRelativeTos[packReads[j][packReads[j].length - 1]].length - 1]) {
									packReads[j][packReads[j].length] = i;
									break;
								}
							}
							if(j == packReads.length) {
								packReads[packReads.length] = [];
								packReads[j][0] = i;
							}
						}
						if(packReads.length <= 50) {
							canvas1.height = 10 * packReads.length + 3*(packReads.length-1);
							canvas1.style.height = 10 * packReads.length + 3*(packReads.length-1);
							canvas2.height = 10 * packReads.length + 3*(packReads.length-1);
							canvas2.style.height = 10 * packReads.length + 3*(packReads.length-1);

							ctx1.fillStyle = "#000";
							ctx1.strokeStyle = "#000";
							ctx1.fillText(readNodeName, canvas1.width - ctx1.measureText(readNodeName).width, 8);
							
							y = 10;
							for( i = 0; i < packReads.length; i++) {
								for( j = 0; j < packReads[i].length; j++) {
									if(trackItemIndex< trackItems.length){
										trackItems[trackItemIndex].details[packReads[i][j]].top = y - 10;
										trackItems[trackItemIndex].details[packReads[i][j]].bottom = y;
									}
									
									if(readDireactions[packReads[i][j]] == "+") {
										if(parseInt(readMapqs[packReads[i][j]]) == 0) {
											ctx2.strokeStyle = "#6ff9f";
											ctx2.fillStyle = "#6fff9f";
										} else if(0 < parseInt(readMapqs[packReads[i][j]]) <= 10) {
											ctx2.strokeStyle = "#4eee94";
											ctx2.fillStyle = "#4eee94";
										} else if(10 < parseInt(readMapqs[packReads[i][j]]) <= 20) {
											ctx2.strokeStyle = "#43cd80";
											ctx2.fillStyle = "#43cd80";
										} else if(20 < parseInt(readMapqs[packReads[i][j]]) <= 30) {
											ctx2.strokeStyle = "#5fa080";
											ctx2.fillStyle = "#5fa080";
										} else {//  >30的情况，一般最大到40
											ctx2.strokeStyle = "#458b74";
											ctx2.fillStyle = "#458b74";
										}
									} else {
										if(parseInt(readMapqs[packReads[i][j]]) == 0) {
											ctx2.strokeStyle = "#8deeff";
											ctx2.fillStyle = "#8deeff";
										} else if(0 < parseInt(readMapqs[packReads[i][j]]) <= 10) {
											ctx2.strokeStyle = "#70caee";
											ctx2.fillStyle = "#70caee";
										} else if(10 < parseInt(readMapqs[packReads[i][j]]) <= 20) {
											ctx2.strokeStyle = "#48acff";
											ctx2.fillStyle = "#48acff";
										} else if(20 < parseInt(readMapqs[packReads[i][j]]) <= 30) {
											ctx2.strokeStyle = "#3a85ff";
											ctx2.fillStyle = "#3a85ff";
										} else {//  >30的情况，一般最大到40
											ctx2.strokeStyle = "#3a6acd";
											ctx2.fillStyle = "#3a6acd";
										}
									}
									ctx2.fillRect(readRelativeFroms[packReads[i][j]][0], y - 10, Math.abs(readRelativeTos[packReads[i][j]][0] - readRelativeFroms[packReads[i][j]][0] + 1), 10);
									for( k = 1; k < readRelativeFroms[packReads[i][j]].length; k++) {
										ctx2.fillRect(readRelativeTos[packReads[i][j]][k - 1], y - 5, Math.abs(readRelativeFroms[packReads[i][j]][k] - readRelativeTos[packReads[i][j]][k - 1] + 1), 1);
										ctx2.fillRect(readRelativeFroms[packReads[i][j]][k], y - 10, Math.abs(readRelativeTos[packReads[i][j]][k] - readRelativeFroms[packReads[i][j]][k] + 1), 10);
									}
									for( k = 0; k < variantNodes[packReads[i][j]].length; k++) {
										if(variantFroms[packReads[i][j]][k] >= startIndex && variantTos[packReads[i][j]][k] <= endIndex) {
											if(variantTypes[packReads[i][j]][k] == variantType_SNV) {
												ctx2.strokeStyle = "#ffff00";
												ctx2.fillStyle = "#ffff00";
											} else if(variantTypes[packReads[i][j]][k] == variantType_INSERTION) {
												ctx2.strokeStyle = "#000";
												ctx2.fillStyle = "#000";
											} else {
												ctx2.fillStyle = "#FF0000";
												ctx2.strokeStyle = "#FF0000";
											}
											if(variantTypes[packReads[i][j]][k] == variantType_INSERTION) {//triangle is used to express insertion
												ctx2.beginPath();
												ctx2.moveTo((variantRelativeFroms[packReads[i][j]][k] + variantRelativeTos[packReads[i][j]][k]) / 2, y - 10);
												ctx2.lineTo((variantFroms[packReads[i][j]][k] + 1 + 0.5 * variantLetters[packReads[i][j]][k].length - startIndex) / searchLength * trackLength, y);
												ctx2.lineTo((variantFroms[packReads[i][j]][k] + 1 - 0.5 * variantLetters[packReads[i][j]][k].length - startIndex) / searchLength * trackLength, y);
												ctx2.closePath();
												ctx2.fill();
											} else {
												ctx2.fillRect(variantRelativeFroms[packReads[i][j]][k], y - 10, Math.abs(variantRelativeTos[packReads[i][j]][k] - variantRelativeFroms[packReads[i][j]][k] + 1), 10);
											}
											//ctx2.fillRect(variantRelativeFroms[packReads[i][j]][k], y - 10, Math.abs(variantRelativeTos[packReads[i][j]][k] - variantRelativeFroms[packReads[i][j]][k] + 1), 10);

											if(searchLength <= trackLength / 10) {
												if(variantTypes[packReads[i][j]][k] == variantType_INSERTION) {
													ctx2.fillStyle = "#ffffff";
													ctx2.strokeStyle = "#ffffff";
												} else {
													if(readDireactions[packReads[i][j]] == "+") {
														ctx2.fillStyle = "#458b74";
														ctx2.strokeStyle = "#458b74";
													} else {
														ctx2.fillStyle = "#3a6acd";
														ctx2.strokeStyle = "#3a6acd";
													}
												}
												if(variantTypes[packReads[i][j]][k] != variantType_INSERTION) {
													ctx2.textAlign = "center";
													ctx2.fillText(variantLetters[packReads[i][j]][k], (variantRelativeTos[packReads[i][j]][k] + variantRelativeFroms[packReads[i][j]][k] + 1) / 2, y-2);
													ctx2.textAlign = "start";
												}
											}
										}
									}
								}
								y = y + 13;
							}
							canvas2.addEventListener("mousemove", canvasMousemove, false);
							canvas2.addEventListener("click", canvasClickForRead, false);
						}
					}
				}
				if(mode == "squish" || ((mode == "pack") && (packReads.length > 50 || readNodes.length > parseInt(trackLength / 50) * 50))) {
					squishReads[squishReads.length] = [];
					squishReads[0][0] = 0;
					for( i = 1; i < readNodes.length; i++) {
						for( j = 0; j < squishReads.length; j++) {
							if(readRelativeFroms[i][0] > readRelativeTos[squishReads[j][squishReads[j].length - 1]][readRelativeTos[squishReads[j][squishReads[j].length - 1]].length - 1]) {
								squishReads[j][squishReads[j].length] = i;
								break;
							}
						}
						if(j == squishReads.length) {
							squishReads[squishReads.length] = [];
							squishReads[j][0] = i;
						}
					}
					
					if(squishReads.length <= 300){
						canvas1.height = 5 * squishReads.length + 3*(squishReads.length - 1);
						canvas1.style.height = 5 * squishReads.length + 3*(squishReads.length - 1);
						canvas2.height = 5 * squishReads.length + 3*(squishReads.length - 1);
						canvas2.style.height = 5 * squishReads.length + 3*(squishReads.length - 1);
						
						ctx1.fillStyle = "#000";
						ctx1.strokeStyle = "#000";
						ctx1.fillText(readNodeName, canvas1.width - ctx1.measureText(readNodeName).width, 8);
	
						y = 0;
						for( i = 0; i < squishReads.length; i++) {
							for( j = 0; j < squishReads[i].length; j++) {
								if(readDireactions[squishReads[i][j]] == "+") {
									if(parseInt(readMapqs[squishReads[i][j]]) == 0) {
										ctx2.strokeStyle = "#6ff9f";
										ctx2.fillStyle = "#6fff9f";
									} else if(0 < parseInt(readMapqs[squishReads[i][j]]) <= 10) {
										ctx2.strokeStyle = "#4eee94";
										ctx2.fillStyle = "#4eee94";
									} else if(10 < parseInt(readMapqs[squishReads[i][j]]) <= 20) {
										ctx2.strokeStyle = "#43cd80";
										ctx2.fillStyle = "#43cd80";
									} else if(20 < parseInt(readMapqs[squishReads[i][j]]) <= 30) {
										ctx2.strokeStyle = "#5fa080";
										ctx2.fillStyle = "#5fa080";
									} else {//  >30的情况，一般最大到40
										ctx2.strokeStyle = "#458b74";
										ctx2.fillStyle = "#458b74";
									}
								} else {
									if(parseInt(readMapqs[squishReads[i][j]]) == 0) {
										ctx2.strokeStyle = "#8deeff";
										ctx2.fillStyle = "#8deeff";
									} else if(0 < parseInt(readMapqs[squishReads[i][j]]) <= 10) {
										ctx2.strokeStyle = "#70caee";
										ctx2.fillStyle = "#70caee";
									} else if(10 < parseInt(readMapqs[squishReads[i][j]]) <= 20) {
										ctx2.strokeStyle = "#48acff";
										ctx2.fillStyle = "#48acff";
									} else if(20 < parseInt(readMapqs[squishReads[i][j]]) <= 30) {
										ctx2.strokeStyle = "#3a85ff";
										ctx2.fillStyle = "#3a85ff";
									} else {//  >30的情况，一般最大到40
										ctx2.strokeStyle = "#3a6acd";
										ctx2.fillStyle = "#3a6acd";
									}
								}
								ctx2.fillRect(readRelativeFroms[squishReads[i][j]][0], y, Math.abs(readRelativeTos[squishReads[i][j]][0] - readRelativeFroms[squishReads[i][j]][0] + 1), 5);
								for( k = 1; k < readRelativeFroms[squishReads[i][j]].length; k++) {
									ctx2.fillRect(readRelativeTos[squishReads[i][j]][k - 1], y + 2, Math.abs(readRelativeFroms[squishReads[i][j]][k] - readRelativeTos[squishReads[i][j]][k - 1] + 1), 1);
									ctx2.fillRect(readRelativeFroms[squishReads[i][j]][k], y, Math.abs(readRelativeTos[squishReads[i][j]][k] - readRelativeFroms[squishReads[i][j]][k] + 1), 5);
								}
								for( k = 0; k < variantNodes[squishReads[i][j]].length; k++) {
									if(variantFroms[squishReads[i][j]][k] >= startIndex && variantTos[squishReads[i][j]][k] <= endIndex) {
										if(variantTypes[squishReads[i][j]][k] == variantType_SNV) {
											ctx2.strokeStyle = "#ffff00";
											ctx2.fillStyle = "#ffff00";
										} else if(variantTypes[squishReads[i][j]][k] == variantType_INSERTION) {
											ctx2.strokeStyle = "#000";
											ctx2.fillStyle = "#000";
										} else {
											ctx2.fillStyle = "#FF0000";
											ctx2.strokeStyle = "#FF0000";
										}
										if(variantTypes[squishReads[i][j]][k] == variantType_INSERTION) {//triangle is used to express insertion
											ctx2.beginPath();
											ctx2.moveTo((variantRelativeFroms[squishReads[i][j]][k] + variantRelativeTos[squishReads[i][j]][k]) / 2, y);
											ctx2.lineTo((variantFroms[squishReads[i][j]][k] + 1 + 0.5 * variantLetters[squishReads[i][j]][k].length - startIndex) / searchLength * trackLength, y + 5);
											ctx2.lineTo((variantFroms[squishReads[i][j]][k] + 1 - 0.5 * variantLetters[squishReads[i][j]][k].length - startIndex) / searchLength * trackLength, y + 5);
											ctx2.closePath();
											ctx2.fill();
										} else {
											ctx2.fillRect(variantRelativeFroms[squishReads[i][j]][k], y, Math.abs(variantRelativeTos[squishReads[i][j]][k] - variantRelativeFroms[squishReads[i][j]][k] + 1), 5);
										}
									}
								}
							}
							y = y + 8;
						}
					}else{
						canvas1.height = 10;
						canvas2.height = 10;
						canvas1.style.height = 10;
						canvas2.style.height = 10;
		
						ctx1.strokeStyle = "#000";
						ctx1.fillStyle = "#000";
						ctx1.fillText(readNodeName, canvas1.width - ctx1.measureText(readNodeName).width, 8);
		
						for( i = 0; i < readNodes.length; i++) {
							if(readDireactions[i] == "+") {
								if(parseInt(readMapqs[i]) == 0) {
									ctx2.strokeStyle = "#6ff9f";
									ctx2.fillStyle = "#6fff9f";
								} else if(0 < parseInt(readMapqs[i]) <= 10) {
									ctx2.strokeStyle = "#4eee94";
									ctx2.fillStyle = "#4eee94";
								} else if(10 < parseInt(readMapqs[i]) <= 20) {
									ctx2.strokeStyle = "#43cd80";
									ctx2.fillStyle = "#43cd80";
								} else if(20 < parseInt(readMapqs[i]) <= 30) {
									ctx2.strokeStyle = "#5fa080";
									ctx2.fillStyle = "#5fa080";
								} else {//  >30的情况，一般最大到40
									ctx2.strokeStyle = "#458b74";
									ctx2.fillStyle = "#458b74";
								}
							} else {
								if(parseInt(readMapqs[i]) == 0) {
									ctx2.strokeStyle = "#8deeff";
									ctx2.fillStyle = "#8deeff";
								} else if(0 < parseInt(readMapqs[i]) <= 10) {
									ctx2.strokeStyle = "#70caee";
									ctx2.fillStyle = "#70caee";
								} else if(10 < parseInt(readMapqs[i]) <= 20) {
									ctx2.strokeStyle = "#48acff";
									ctx2.fillStyle = "#48acff";
								} else if(20 < parseInt(readMapqs[i]) <= 30) {
									ctx2.strokeStyle = "#3a85ff";
									ctx2.fillStyle = "#3a85ff";
								} else {//  >30的情况，一般最大到40
									ctx2.strokeStyle = "#3a6acd";
									ctx2.fillStyle = "#3a6acd";
								}
							}
							ctx2.fillRect(readRelativeFroms[i][0], 0, Math.abs(readRelativeTos[i][0] - readRelativeFroms[i][0] + 1), 10);
							for( j = 1; j < readRelativeFroms[i].length; j++) {
								ctx2.fillRect(readRelativeTos[i][j - 1], 5, Math.abs(readRelativeFroms[i][j] - readRelativeTos[i][j - 1] + 1), 1);
								ctx2.fillRect(readRelativeFroms[i][j], 0, Math.abs(readRelativeTos[i][j] - readRelativeFroms[i][j] + 1), 10);
							}
							for( j = 0; j < variantNodes[i].length; j++) {
								if(variantFroms[i][j] >= startIndex && variantTos[i][j] <= endIndex) {
									if(variantTypes[i][j] == variantType_SNV) {
										ctx2.strokeStyle = "#ffff00";
										ctx2.fillStyle = "#ffff00";
									} else if(variantTypes[i][j] == variantType_INSERTION) {
										ctx2.strokeStyle = "#000";
										ctx2.fillStyle = "#000";
									} else {
										ctx2.fillStyle = "#FF0000";
										ctx2.strokeStyle = "#FF0000";
									}
									if(variantTypes[i][j] == variantType_INSERTION) {//triangle is used to express insertion
										ctx2.beginPath();
										ctx2.moveTo((variantRelativeFroms[i][j] + variantRelativeTos[i][j]) / 2, 0);
										ctx2.lineTo((variantFroms[i][j] + 1 + 0.5 * variantLetters[i][j].length - startIndex) / searchLength * trackLength, 10);
										ctx2.lineTo((variantFroms[i][j] + 1 - 0.5 * variantLetters[i][j].length - startIndex) / searchLength * trackLength, 10);
										ctx2.closePath();
										ctx2.fill();
									} else {
										ctx2.fillRect(variantRelativeFroms[i][j], 0, Math.abs(variantRelativeTos[i][j] - variantRelativeFroms[i][j] + 1), 10);
									}
								}
							}
						}
					}
				}
			}
		}
	}
}


function showPositiveValue(canvas1, canvas2, valueNode, mode, direaction, canvasHeight, logRatioValue) {//direaction :topdown downtop;ratioMode:logRatio normalRatio
	var valueId = valueNode.getAttribute(xmlAttributeId);
	var valueType = valueNode.getAttribute(xmlAttributeType);
	var valueFrom = valueNode.getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
	var valueTo = valueNode.getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
	var valueStep = parseInt(valueNode.getElementsByTagName(xmlTagStep)[0].childNodes[0].nodeValue);
	var valueList = getNodeText(valueNode.getElementsByTagName(xmlTagValueList)[0]).split(";");
	
	//var valueDescription = valueNode.getElementsByTagName(xmlTagDescription)[0].childNodes[0].nodeValue;
	var valueMax = parseFloat(valueList[0]), valueMin = parseFloat(valueList[0]);
	var valueMax_axisIndex = 0;
	var i = 0;

	if(valueList[0] == "") {// no values,the length of valueList is zero
		canvas1.height = 10;
		canvas2.height = 10;
		canvas1.style.height = 10;
		canvas2.style.height = 10;
		if(canvas1.getContext) {
			var ctx1 = canvas1.getContext('2d');
			ctx1.strokeStyle = "#000";
			ctx1.fillStyle = "#000";
			ctx1.fillText(valueId, canvas1.width - ctx1.measureText(valueId).width, 8);
		}
		return;
	}
	
	var startIndex_axis, endIndex_axis, trackLength_axis, searchLength_axis;
	var offsetWidth;
	if(startIndex<1){
		startIndex_axis = 1;
	}else{
		startIndex_axis = startIndex;
	}
	if(endIndex > chrLength){
		endIndex_axis = chrLength;
	}else{
		endIndex_axis = endIndex;
	}
	searchLength_axis = endIndex_axis - startIndex_axis + 1;
	trackLength_axis = Math.round((endIndex_axis - startIndex_axis + 1) / searchLength * trackLength);
	offsetWidth = (startIndex_axis - startIndex) / searchLength * trackLength;
	
	
	for( i = 0; i < valueList.length; i++) {
		if(parseFloat(valueList[i]) > valueMax) {
			valueMax = parseFloat(valueList[i]);
		}
		if(parseFloat(valueList[i]) < valueMin) {
			valueMin = parseFloat(valueList[i]);
		}
	}
	valueMax_axisIndex = valueMax;
	if(logRatioValue){
		if(valueMin >= 1){
			valueMax = Math.round(Math.log(valueMax) / Math.log(logRatioValue));
			for( i = 0; i < valueList.length; i++) {
				valueList[i] = Math.round(Math.log(valueList[i]) / Math.log(logRatioValue));
			}
		}
	}
	if(valueMax>0){
		for( i = 0; i < valueList.length; i++) {
			valueList[i] = Math.round(valueList[i] * canvasHeight / valueMax);
		}
	}
	if(canvas1.getContext && canvas2.getContext) {
		var ctx1 = canvas1.getContext('2d');
		var ctx2 = canvas2.getContext('2d');
		
		if(valueMax > 0) {
			canvas1.height = canvasHeight;
			canvas2.height = canvasHeight;
			canvas1.style.height = canvasHeight;
			canvas2.style.height = canvasHeight;
			
			ctx1.strokeStyle = "#000";
			ctx1.fillStyle = "#000";
			if(canvasHeight >= 30) {
				ctx1.fillRect(canvas1.width - 5, 0, 4, 1);
				ctx1.fillRect(canvas1.width - 2, 0, 1, canvasHeight);
				ctx1.fillRect(canvas1.width - 5, canvasHeight - 1, 4, 1);
				if(direaction == "downtop") {
					ctx1.fillText("0", canvas1.width - ctx1.measureText("0").width - 6, canvasHeight - 2);
					ctx1.fillText(valueMax_axisIndex, canvas1.width - ctx1.measureText(valueMax_axisIndex).width - 6, 8);
				} else {
					ctx1.textBaseline = "top";
					ctx1.fillText("0", canvas1.width - ctx1.measureText("0").width - 6, 0);
					ctx1.textBaseline = "alphabetic";
					ctx1.fillText(valueMax_axisIndex, canvas1.width - ctx1.measureText(valueMax_axisIndex).width - 6, canvasHeight - 2);
				}
				ctx1.fillText(valueId, canvas1.width - ctx1.measureText(valueId).width - ctx1.measureText(valueMax_axisIndex).width - 6, 8);
			} else {
				ctx1.fillText(valueId, canvas1.width - ctx1.measureText(valueId).width, 8);
			}

			ctx2.fillStyle = "#A2CD5A";
			ctx2.strokeStyle = "#A2CD5A";
			if(direaction == "downtop") {
				for( i = 0; i < valueList.length; i++) {
					ctx2.fillRect(1 + i * valueStep + offsetWidth, canvasHeight - parseInt(valueList[i]), valueStep, parseInt(valueList[i]));
				}
			} else {
				for( i = 0; i < valueList.length; i++) {
					ctx2.fillRect(1 + i * valueStep + offsetWidth, 0, valueStep, parseInt(valueList[i]));
				}
			}
		}else{
			canvas1.height = 10;
			canvas2.height = 10;
			canvas1.style.height = 10;
			canvas2.style.height = 10;
			ctx1.strokeStyle = "#000";
			ctx1.fillStyle = "#000";
			ctx1.fillText(valueId, canvas1.width - ctx1.measureText(valueId).width, 8);
		}
		
	}
}

function getNodeText(node) {
	var r = "";
	for(var x = 0; x < node.childNodes.length; x++) {
		r = r + node.childNodes[x].nodeValue;
	}
	return r;
}

function showPositiveValueCombine(canvas1, canvas2, valueNode, mode, direaction, canvasHeight, heatmapHeight, logRatioValue) {
	if(mode == "dense"){
		showValuesByHeatmap(canvas1, canvas2, valueNode, heatmapHeight, logRatioValue);
	}else{
		showPositiveValue(canvas1, canvas2, valueNode, mode, direaction, canvasHeight, logRatioValue);
	}
}

function showValue(canvas1, canvas2, valueNode, mode, direction, canvasHeight, logRatioValue) {
	var valueId = valueNode.getAttribute(xmlAttributeId);
	var valueType = valueNode.getAttribute(xmlAttributeType);
	var valueFrom = valueNode.getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
	var valueTo = valueNode.getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
	var valueStep = parseInt(valueNode.getElementsByTagName(xmlTagStep)[0].childNodes[0].nodeValue);
	var valueList = getNodeText(valueNode.getElementsByTagName(xmlTagValueList)[0]).split(";");
	//var valueList = (valueNode.getElementsByTagName("ValueList")[0].childNodes[0].nodeValue).split(";");
	//var valueDescription = valueNode.getElementsByTagName(xmlTagDescription)[0].childNodes[0].nodeValue;
	var valueMax = parseFloat(valueList[0]), valueMin = parseFloat(valueList[0]), valueMinAbs = Math.abs(parseFloat(valueList[0]));
	var valueMax_axisIndex, valueMin_axisIndex;
	var ratioValueMax = 0, valueStep = 2;
	var i = 0;

	var colorStyle = "RGB(8,117,184)";

	if(valueList[0] == "") {
		canvas1.height = 10;
		canvas2.height = 10;
		canvas1.style.height = 10;
		canvas2.style.height = 10;
		if(canvas1.getContext) {
			var ctx1 = canvas1.getContext('2d');
			ctx1.strokeStyle = "#000";
			ctx1.fillStyle = "#000";
			ctx1.fillText(valueId, canvas1.width - ctx1.measureText(valueId).width, 8);
		}
		return;
	}
	
	var startIndex_axis, endIndex_axis, trackLength_axis, searchLength_axis;
	var offsetWidth;
	if(startIndex<1){
		startIndex_axis = 1;
	}else{
		startIndex_axis = startIndex;
	}
	if(endIndex > chrLength){
		endIndex_axis = chrLength;
	}else{
		endIndex_axis = endIndex;
	}
	searchLength_axis = endIndex_axis - startIndex_axis + 1;
	trackLength_axis = Math.round((endIndex_axis - startIndex_axis + 1) / searchLength * trackLength);
	offsetWidth = (startIndex_axis - startIndex) / searchLength * trackLength;
	
	if(valueList.length < trackLength_axis / 2) {
		valueStep = trackLength_axis / valueList.length;
	}
	
	for( i = 0; i < valueList.length; i++) {
		if(parseFloat(valueList[i]) > valueMax) {
			valueMax = parseFloat(valueList[i]);
		}
		if(parseFloat(valueList[i]) < valueMin) {
			valueMin = parseFloat(valueList[i]);
		}
		if(Math.abs(valueList[i]) < valueMinAbs) {
			valueMinAbs = Math.abs(valueList[i]);
		}
	}
	valueMax_axisIndex = valueMax;
	valueMin_axisIndex = valueMin;
	if(logRatioValue){
		if(valueMinAbs >= 1){
			valueMax = Math.round(Math.log(valueMax) / Math.log(logRatioValue));
			valueMin = Math.round(Math.log(-valueMin) / Math.log(logRatioValue));
			for( i = 0; i < valueList.length; i++) {
				if(valueList[i] > 0)
					valueList[i] = Math.round(Math.log(valueList[i]) / Math.log(logRatioValue));
				else
					valueList[i] = -Math.round(Math.log(-valueList[i]) / Math.log(logRatioValue));
			}
		}
	}
	if(valueMin >= 0 && valueMax >= 0){
		if(valueMax>0){
			for( i = 0; i < valueList.length; i++) {
				valueList[i] = Math.round(valueList[i] * canvasHeight / valueMax);
			}
		}
		if(canvas1.getContext && canvas2.getContext) {
			var ctx1 = canvas1.getContext('2d');
			var ctx2 = canvas2.getContext('2d');

			if(valueMax > 0) {
				canvas1.height = canvasHeight;
				canvas2.height = canvasHeight;
				canvas1.style.height = canvasHeight;
				canvas2.style.height = canvasHeight;

				ctx1.strokeStyle = "#000";
				ctx1.fillStyle = "#000";		
				ctx1.fillText(valueId, canvas1.width - ctx1.measureText(valueId).width, 8);
				
				ctx2.fillStyle = colorStyle;
				ctx2.strokeStyle = colorStyle;
				
				if(direction == "topdown") {
					for( i = 0; i < valueList.length; i++) {
						ctx2.fillRect(Math.round(i * valueStep) + offsetWidth, 0, Math.round((i+1)*valueStep) - Math.round(i * valueStep), parseFloat(valueList[i]));
					}
				} else {
					for( i = 0; i < valueList.length; i++) {
						ctx2.fillRect(Math.round(i * valueStep) + offsetWidth, canvasHeight - parseFloat(valueList[i]), Math.round((i+1)*valueStep) - Math.round(i * valueStep), parseFloat(valueList[i]));
					}
				}
			} else {
				canvas1.height = 10;
				canvas2.height = 10;
				canvas1.style.height = 10;
				canvas2.style.height = 10;
				ctx1.strokeStyle = "#000";
				ctx1.fillStyle = "#000";
				ctx1.fillText(valueId, canvas1.width - ctx1.measureText(valueId).width, 8);
			}
		}

	}else if(valueMin < 0 && valueMax > 0){
		var valueScale = valueMax - valueMin;
		valueMax = Math.round(valueMax * canvasHeight / valueScale);
		valueMin = Math.round(valueMin * canvasHeight / valueScale);
		for( i = 0; i < valueList.length; i++) {
			valueList[i] = Math.round(valueList[i] * canvasHeight / valueScale);
		}
		
		if(canvas1.getContext && canvas2.getContext) {
			var ctx1 = canvas1.getContext('2d');
			var ctx2 = canvas2.getContext('2d');

			canvas1.height = canvasHeight;
			canvas2.height = canvasHeight;
			canvas1.style.height = canvasHeight;
			canvas2.style.height = canvasHeight;
			
			ctx1.strokeStyle = "#000";
			ctx1.fillStyle = "#000";		
			ctx1.fillText(valueId, canvas1.width - ctx1.measureText(valueId).width, 8);
			
			ctx2.fillStyle = "#8B5A2B";
			ctx2.fillRect(0, valueMax + 1, trackLength, 1);

			ctx2.fillStyle = colorStyle;
			ctx2.strokeStyle = colorStyle;
			
			for( i = 0; i < valueList.length; i++) {
				if(valueList[i] > 0) {
					ctx2.fillRect(Math.round(i * valueStep) + offsetWidth, valueMax + 1 - parseFloat(valueList[i]), Math.round((i+1)*valueStep) - Math.round(i * valueStep), parseFloat(valueList[i]));
				} else {
					ctx2.fillRect(Math.round(i * valueStep) + offsetWidth, canvasHeight + valueMin + 1, Math.round((i+1)*valueStep) - Math.round(i * valueStep), Math.abs(parseFloat(valueList[i])));
				}
			}
		}
	}else{
		for( i = 0; i < valueList.length; i++) {
			valueList[i] = Math.abs(Math.round(valueList[i] * canvasHeight / valueMin));
		}
		if(canvas1.getContext && canvas2.getContext) {
			var ctx1 = canvas1.getContext('2d');
			var ctx2 = canvas2.getContext('2d');
			canvas1.height = canvasHeight;
			canvas2.height = canvasHeight;
			canvas1.style.height = canvasHeight;
			canvas2.style.height = canvasHeight;
			
			ctx1.strokeStyle = "#000";
			ctx1.fillStyle = "#000";		
			ctx1.fillText(valueId, canvas1.width - ctx1.measureText(valueId).width, 8);
				
			ctx2.fillStyle = colorStyle;
			ctx2.strokeStyle = colorStyle;
			if(direction == "topdown") {
				for( i = 0; i < valueList.length; i++) {
					ctx2.fillRect(Math.round(i * valueStep) + offsetWidth, 0, Math.round((i+1)*valueStep) - Math.round(i * valueStep), parseFloat(valueList[i]));
				}
			} else {
				for( i = 0; i < valueList.length; i++) {
					ctx2.fillRect(Math.round(i * valueStep) + offsetWidth, canvasHeight - parseFloat(valueList[i]), Math.round((i+1)*valueStep) - Math.round(i * valueStep), parseFloat(valueList[i]));
				}
			}
		}
	}
}

function showValuesByHeatmap(canvas1, canvas2, valueNode, heatmapHeight, logRatioValue) {
	var valueId = valueNode.getAttribute(xmlAttributeId);
	var valueType = valueNode.getAttribute(xmlAttributeType);
	var valueFrom = valueNode.getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
	var valueTo = valueNode.getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
	var valueStep = parseInt(valueNode.getElementsByTagName(xmlTagStep)[0].childNodes[0].nodeValue);
	var valueList = getNodeText(valueNode.getElementsByTagName(xmlTagValueList)[0]).split(";");

	var Lvalue_of_HSL_inheatmap = 50;
	var valueMax = parseFloat(valueList[0]), valueMin = parseFloat(valueList[0]);
	var valueMinAbs = Math.abs(parseFloat(valueList[0])), valueMaxAbs;
	var Lvalue_per_maxValue = 0;
	var valueStep = 2;
	var i = 0;

	var H_P = 0, H_N = 120;
	var hh, ss, ll;
	
	var startIndex_axis, endIndex_axis, trackLength_axis, searchLength_axis;
	var offsetWidth;
	if(startIndex<1){
		startIndex_axis = 1;
	}else{
		startIndex_axis = startIndex;
	}
	if(endIndex > chrLength){
		endIndex_axis = chrLength;
	}else{
		endIndex_axis = endIndex;
	}
	searchLength_axis = endIndex_axis - startIndex_axis + 1;
	trackLength_axis = Math.round((endIndex_axis - startIndex_axis + 1) / searchLength * trackLength);
	offsetWidth = (startIndex_axis - startIndex) / searchLength * trackLength;

	if(valueList.length < trackLength_axis / 2) {
		valueStep = trackLength_axis / valueList.length;
	}

	for( i = 0; i < valueList.length; i++) {
		if(parseFloat(valueList[i]) > valueMax) {
			valueMax = parseFloat(valueList[i]);
		}
		if(parseFloat(valueList[i]) < valueMin) {
			valueMin = parseFloat(valueList[i]);
		}
		if(Math.abs(valueList[i]) < valueMinAbs) {
			valueMinAbs = Math.abs(valueList[i]);
		}
	}
	valueMaxAbs = Math.abs(valueMax) > Math.abs(valueMin) ? Math.abs(valueMax) : Math.abs(valueMin);
	Lvalue_per_maxValue = Lvalue_of_HSL_inheatmap / valueMaxAbs;
	
	if(logRatioValue && (valueMinAbs > 1)){
		Lvalue_per_maxValue = Lvalue_of_HSL_inheatmap / (Math.round(Math.log(valueMaxAbs) / Math.log(logRatioValue)));
		for( i = 0; i < valueList.length; i++) {
			if(valueList[i] > 0)
				valueList[i] = Math.round(Math.log(valueList[i]) / Math.log(logRatioValue));
			else
				valueList[i] = -Math.round(Math.log(-valueList[i]) / Math.log(logRatioValue));
		}
	}
	if(canvas1.getContext && canvas2.getContext) {
		var ctx1 = canvas1.getContext('2d');
		var ctx2 = canvas2.getContext('2d');
		canvas1.height = heatmapHeight;
		canvas2.height = heatmapHeight;
		canvas1.style.height = heatmapHeight;
		canvas2.style.height = heatmapHeight;
		ctx1.fillText(valueId, canvas1.width - ctx1.measureText(valueId).width, 8);

		for( i = 0; i < valueList.length; i++) {
			if(valueList[i] >= 0) {
				hh = H_P;
			} else {
				hh = H_N;
			}
			ss = Math.abs(valueList[i]) * Lvalue_per_maxValue * 2;
			ll = 100 - Math.abs(valueList[i]) * Lvalue_per_maxValue;
			ctx2.fillStyle = HSL2RGB(hh, ss, ll);
			ctx2.fillRect(Math.round(i * valueStep) + offsetWidth, 0, Math.round((i + 1) * valueStep) - Math.round(i * valueStep), heatmapHeight);
		}
	}
}

function HSL2RGB(h, s, l) {
	var r, g, b;
	var q, p;
	var Tc = [0, 0, 0];
	var Color = [0, 0, 0];
	var i = 0;
	h = h / 360;
	s = s / 100;
	l = l / 100;
	//规范到[0,1]
	if(s == 0) {
		r = 1;
		g = 1;
		b = 1;
	} else {
		if(l < 0.5) {
			q = l * (1 + s);
		} else {
			q = l + s - (l * s);
		}
		p = 2 * l - q;

		Tc[0] = h + 1 / 3;
		Tc[1] = h;
		Tc[2] = h - 1 / 3;

		for( i = 0; i < Tc.length; i++) {
			if(Tc[i] < 0) {
				Tc[i] = Tc[i] + 1.0;
			}
			if(Tc[i] > 1) {
				Tc[i] = Tc[i] - 1.0;
			}
		}
		for( i = 0; i < Color.length; i++) {
			if(Tc[i] < 1 / 6) {
				Color[i] = p + ((q - p) * 6 * Tc[i]);
			} else if(Tc[i] >= 1 / 6 && Tc[i] < 1 / 2) {
				Color[i] = q;
			} else if(Tc[i] >= 1 / 2 && Tc[i] < 2 / 3) {
				Color[i] = p + ((q - p) * 6 * (2 / 3 - Tc[i]));
			} else {
				Color[i] = p;
			}
		}
		r = Color[0];
		g = Color[1];
		b = Color[2];
	}
	r = Math.round(r * 255);
	g = Math.round(g * 255);
	b = Math.round(b * 255);
	return "rgb(" + r + "," + g + "," + b + ")";
}

function showValueCombine(canvas1, canvas2, valueNode, mode, direction, canvasHeight, heatmapHeight,logRatioValue){
	if(mode == "dense"){
		showValuesByHeatmap(canvas1, canvas2, valueNode, heatmapHeight, logRatioValue);
	}else{
		showValue(canvas1, canvas2, valueNode, mode, direction, canvasHeight, logRatioValue);
	}
}

function showVariantByImg(canvas1, canvas2, variantNode, mode) {
	var fromNodes = variantNode.getElementsByTagName(xmlTagFrom);
	var toNodes = variantNode.getElementsByTagName(xmlTagTo);
	var variantNodes = variantNode.getElementsByTagName(xmlTagVariant);
	var variantIds = [];
	var variantTypes = [];
	var variantName = variantNode.getAttribute(xmlAttributeId);
	var relativeFroms = [], relativeTos = [], imgFroms = [];
	var relativeWidth;
	var i, j, y;
	var trackItemIndex;
	var variantName_show = variantName;

	if(!((/^_/).test(variantName))){
		var ifParam = variantNode.getAttribute("ifParam");
		var variantsSuperId = variantNode.getAttribute("superid") || variantName;
		insertSettingBtn(variantName, ifParam, variantsSuperId);
	}
	
	for( i = 0; i < trackItems.length; i++) {
		if(variantName == trackItems[i].id) {
			trackItemIndex = i;
			break;
		}
	}
	
	if(trackItemIndex< trackItems.length){
		trackItems[trackItemIndex].details = [];
	}else{
		if(variantName == personalPannel.Pvar.id){
			personalPannel.Pvar.details = [];
		}
	}

	var imgWidth = 21, imgHeight = 30;
	var imgDEL, imgINS, imgSNV, imgCNV, imgDUP, imgINV, imgBLS, imgOTH, imgSNV_A, imgSNV_C, imgSNV_G, imgSNV_T;
	imgINS = document.getElementById("imgINS");
	imgDEL = document.getElementById("imgDEL");
	imgCNV = document.getElementById("imgCNV");
	imgDUP = document.getElementById("imgDUP");
	imgINV = document.getElementById("imgINV");
	imgBLS = document.getElementById("imgBLS");
	imgOTH = document.getElementById("imgOTH");
	imgSNV_A = document.getElementById("imgSNV_A");
	imgSNV_C = document.getElementById("imgSNV_C");
	imgSNV_G = document.getElementById("imgSNV_G");
	imgSNV_T = document.getElementById("imgSNV_T");
/////color code variant by effect --Liran
	var imgDELe, imgINSe, imgSNVe, imgCNVe, imgDUPe, imgINVe, imgBLSe, imgOTHe, imgSNV_Ae, imgSNV_Ce, imgSNV_Ge, imgSNV_Te;
	imgINSe = document.getElementById("imgINSe");
	imgDELe = document.getElementById("imgDELe");
	imgCNVe = document.getElementById("imgCNVe");
	imgDUPe = document.getElementById("imgDUPe");
	imgINVe = document.getElementById("imgINVe");
	imgBLSe = document.getElementById("imgBLSe");
	imgOTHe = document.getElementById("imgOTHe");
	imgSNV_Ae = document.getElementById("imgSNV_Ae");
	imgSNV_Ce = document.getElementById("imgSNV_Ce");
	imgSNV_Ge = document.getElementById("imgSNV_Ge");
	imgSNV_Te = document.getElementById("imgSNV_Te");
/////color code variant by effect --Liran

	for( i = 0; i < variantNodes.length; i++) {
		variantIds[i] = variantNodes[i].getAttribute(xmlAttributeId);
		variantTypes[i] = variantNodes[i].getAttribute(xmlAttributeType);
		relativeFroms[i] = parseInt((parseInt(fromNodes[i].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
		relativeTos[i] = parseInt((parseInt(toNodes[i].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
		imgFroms[i] = (relativeFroms[i] + relativeTos[i] - imgWidth) / 2;
		
		/*if(trackItemIndex< trackItems.length){
			trackItems[trackItemIndex].details[i] = [];
			trackItems[trackItemIndex].details[i].id = variantIds[i];
			trackItems[trackItemIndex].details[i].from = parseInt(fromNodes[i].childNodes[0].nodeValue);
			trackItems[trackItemIndex].details[i].to = parseInt(toNodes[i].childNodes[0].nodeValue);
			if(mode == "pack"){
				trackItems[trackItemIndex].details[i].left = imgFroms[i];
				trackItems[trackItemIndex].details[i].right = imgFroms[i] + imgWidth;
			}
		}*/
		
		if(mode != "dense" && mode != "squish") {
			if(relativeTos[i] - relativeFroms[i] + 1 < imgWidth) {
				relativeFroms[i] = imgFroms[i];
				relativeTos[i] = imgFroms[i] + imgWidth;
			}
		}
	}
	if(((/^_/).test(variantName))){
		variantName_show = (variantName + "").replace("_","");
	}
	if(canvas1.getContext && canvas2.getContext) {
		var ctx1 = canvas1.getContext('2d');
		var ctx2 = canvas2.getContext('2d');
		if(mode == "dense") {
			canvas1.height = 10;
			canvas1.style.height = 10;
			canvas2.height = 10;
			canvas2.style.height = 10;
			ctx1.fillStyle = "#000";
			ctx1.fillText(variantName_show, canvas1.width - ctx1.measureText(variantName_show).width, 8);

			//y = 13;
			for( i = 0; i < fromNodes.length; i++) {
				relativeWidth = Math.abs(relativeTos[i] - relativeFroms[i] + 1);
				switch(variantTypes[i]) {
					case variantType_DELETION:
						ctx2.fillStyle = "rgb(0,255,0)";
						break;
					case variantType_INSERTION:
						ctx2.fillStyle = "rgb(255,0,0)";
						break;
					case variantType_SNV:
						ctx2.fillStyle = "rgb(0,0,0)";
						break;
					case variantType_CNV:
						ctx2.fillStyle = "rgb(20,177,75)";
						break;
					case variantType_DUPLICATION:
						ctx2.fillStyle = "rgb(19,165,157)";
						break;
					case variantType_INVERSION:
						ctx2.fillStyle = "rgb(19,127,165)";
						break;
					case variantType_BLS:
						ctx2.fillStyle = "rgb(85,19,165)";
						break;
					default:
						ctx2.fillStyle = "#0000FF";
				}
				ctx2.fillRect(relativeFroms[i], 0, relativeWidth, 10);
				/*switch(variantTypes[i]) {
					case variantType_DELETION:
						ctx2.drawImage(imgDEL, imgFroms[i], y);
						break;
					case variantType_INSERTION:
						ctx2.drawImage(imgINS, imgFroms[i], y);
						break;
					case variantType_SNV:						
						switch(variantNodes[i].getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue) {
							case "A":
								imgSNV = imgSNV_A;
								break;
							case "C":
								imgSNV = imgSNV_C;
								break;
							case "G":
								imgSNV = imgSNV_G
								break;
							default:
								imgSNV = imgSNV_T;
						}
						//ctx2.drawImage(imgSNV, imgFroms[i], y);
						break;
					case variantType_CNV:
						ctx2.drawImage(imgCNV, imgFroms[i], y);
						break;
					case variantType_DUPLICATION:
						ctx2.drawImage(imgDUP, imgFroms[i], y);
						break;
					case variantType_INVERSION:
						ctx2.drawImage(imgINV, imgFroms[i], y);
						break;
					case variantType_BLS:
						ctx2.drawImage(imgBLS, imgFroms[i], y);
						break;
					default:
						ctx2.drawImage(imgOTH, imgFroms[i], y);
				}*/
			}
		}else {
			var packVariants = [], squishVariants = [];
			if((mode == "pack") && (variantNodes.length <= parseInt(trackLength / 60) * 10)) {
				if(variantNodes.length > 0) {//the situation: not contain the variant
					packVariants[packVariants.length] = [];
					packVariants[0][0] = 0;
				}
				for( i = 1; i < variantNodes.length; i++) {
					for( j = 0; j < packVariants.length; j++) {
						if((relativeFroms[i] - ctx1.measureText(variantIds[i]).width - 5) > relativeTos[packVariants[j][packVariants[j].length - 1]]) {
							packVariants[j][packVariants[j].length] = i;
							break;
						}
					}
					if(j == packVariants.length) {
						packVariants[packVariants.length] = [];
						packVariants[j][0] = i;
					}
				}
				if(packVariants.length <= 10) {
					canvas1.height = imgHeight * packVariants.length + 3*(packVariants.length - 1) > 10 ? imgHeight * packVariants.length + 3*(packVariants.length - 1) : 10;
					canvas1.style.height = imgHeight * packVariants.length + 3*(packVariants.length - 1) > 10 ? imgHeight * packVariants.length + 3*(packVariants.length - 1) : 10;
					canvas2.height = imgHeight * packVariants.length + 3*(packVariants.length - 1) > 10 ? imgHeight * packVariants.length + 3*(packVariants.length - 1) : 10;
					canvas2.style.height = imgHeight * packVariants.length + 3*(packVariants.length - 1) > 10 ? imgHeight * packVariants.length + 3*(packVariants.length - 1) : 10;
					
					ctx1.fillStyle = "#000";
					ctx1.fillText(variantName_show, canvas1.width - ctx1.measureText(variantName_show).width, 8);

					y = 0;
					for( i = 0; i < packVariants.length; i++) {
						for( j = 0; j < packVariants[i].length; j++) {
							if(trackItemIndex< trackItems.length){
								trackItems[trackItemIndex].details[packVariants[i][j]] = [];
								trackItems[trackItemIndex].details[packVariants[i][j]].id = variantIds[packVariants[i][j]];
								trackItems[trackItemIndex].details[packVariants[i][j]].from = parseInt(fromNodes[packVariants[i][j]].childNodes[0].nodeValue);
								trackItems[trackItemIndex].details[packVariants[i][j]].to = parseInt(toNodes[packVariants[i][j]].childNodes[0].nodeValue);
								
								trackItems[trackItemIndex].details[packVariants[i][j]].left = imgFroms[packVariants[i][j]];
								trackItems[trackItemIndex].details[packVariants[i][j]].right = imgFroms[packVariants[i][j]] + imgWidth;
								
								trackItems[trackItemIndex].details[packVariants[i][j]].top = y;
								trackItems[trackItemIndex].details[packVariants[i][j]].bottom = y + imgHeight;
							}else{
								if(variantName == personalPannel.Pvar.id){
									personalPannel.Pvar.details[packVariants[i][j]] = [];
									personalPannel.Pvar.details[packVariants[i][j]].id = variantIds[packVariants[i][j]];
									personalPannel.Pvar.details[packVariants[i][j]].from = parseInt(fromNodes[packVariants[i][j]].childNodes[0].nodeValue);
									personalPannel.Pvar.details[packVariants[i][j]].to = parseInt(toNodes[packVariants[i][j]].childNodes[0].nodeValue);
									
									personalPannel.Pvar.details[packVariants[i][j]].left = imgFroms[packVariants[i][j]];
									personalPannel.Pvar.details[packVariants[i][j]].right = imgFroms[packVariants[i][j]] + imgWidth;
									
									personalPannel.Pvar.details[packVariants[i][j]].top = y;
									personalPannel.Pvar.details[packVariants[i][j]].bottom = y + imgHeight;
								}
							}
							var variantEffect = variantNodes[packVariants[i][j]].getAttribute(xmlAttributeEffect);
							if (!variantEffect){
								variantEffect = 0;
							}
							if (scoremethPvar != "PGB") {
								variantEffect = variantEffect - 10;
							}
							if(variantTypes[packVariants[i][j]] == variantType_SNV) {
								switch(variantNodes[packVariants[i][j]].getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue) {
									case "A":
										imgSNV = variantEffect>2 ? imgSNV_Ae : imgSNV_A;
										break;
									case "C":
										imgSNV = variantEffect>2 ? imgSNV_Ce : imgSNV_C;
										break;
									case "G":
										imgSNV = variantEffect>2 ? imgSNV_Ge : imgSNV_G;
										break;
									default:
										imgSNV = variantEffect>2 ? imgSNV_Te : imgSNV_T;
								}
								ctx2.drawImage(imgSNV, imgFroms[packVariants[i][j]], y);
							} else if(variantTypes[packVariants[i][j]] == variantType_INSERTION) {
								ctx2.drawImage(variantEffect>2 ? imgINSe : imgINS, imgFroms[packVariants[i][j]], y);
							} else if(variantTypes[packVariants[i][j]] == variantType_DELETION) {
								ctx2.drawImage(variantEffect>2 ? imgDELe : imgDEL, imgFroms[packVariants[i][j]], y);
							} else if(variantTypes[packVariants[i][j]] == variantType_CNV) {
								ctx2.drawImage(variantEffect>2 ? imgCNVe : imgCNV, imgFroms[packVariants[i][j]], y);
							} else if(variantTypes[packVariants[i][j]] == variantType_DUPLICATION) {
								ctx2.drawImage(variantEffect>2 ? imgDUPe : imgDUP, imgFroms[packVariants[i][j]], y);
							} else if(variantTypes[packVariants[i][j]] == variantType_INVERSION) {
								ctx2.drawImage(variantEffect>2 ? imgINVe : imgINV, imgFroms[packVariants[i][j]], y);
							} else if(variantTypes[packVariants[i][j]] == variantType_BLS) {
								ctx2.drawImage(variantEffect>2 ? imgBLSe : imgBLS, imgFroms[packVariants[i][j]], y);
							} else {
								ctx2.drawImage(variantEffect>2 ? imgOTHe : imgOTH, imgFroms[packVariants[i][j]], y);
							}
							
							ctx2.fillText(variantIds[packVariants[i][j]], imgFroms[packVariants[i][j]] - ctx2.measureText(variantIds[packVariants[i][j]]).width, y + imgHeight - 2);
							/////added by Liran for effect block
							var vee = 0;
							if (scoremethPvar != "PGB") {
								vee = (variantEffect - 3) / 5 + 1;
							} else {
								if(variantEffect == 3){
									variantEffect++;
								}
								vee = variantEffect - 3;
							}

							ctx2.fillStyle="rgb(133,122,185)";
							var minuss = 0;
							while(minuss < vee && minuss < 10){
								ctx2.fillRect(imgFroms[packVariants[i][j]]+imgWidth-3, y+imgHeight-minuss-1, 4, 1);
								minuss = minuss + 2;
							}
							ctx2.fillStyle="rgb(0,0,0)";
							/////added by Liran for effect block
						}
						y = y + imgHeight + 3;
					}
					canvas2.addEventListener("mousemove", canvasMousemoveOnPP, false);
					canvas2.addEventListener("click", canvasClickForVariantOnPP, false);
				}
			}
			if(mode == "squish" || ( mode == "pack" && (packVariants.length > 10 || variantNodes.length > parseInt(trackLength / 60) * 10))) {
				if(variantNodes.length > 0) {
					squishVariants[squishVariants.length] = [];
					squishVariants[0][0] = 0;
				}
				for( i = 0; i < variantNodes.length; i++) {
					relativeFroms[i] = parseInt((parseInt(fromNodes[i].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
					relativeTos[i] = parseInt((parseInt(toNodes[i].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
				}
				for( i = 1; i < variantNodes.length; i++) {
					for( j = 0; j < squishVariants.length; j++) {
						if(relativeFroms[i] > relativeTos[squishVariants[j][squishVariants[j].length - 1]]) {
							squishVariants[j][squishVariants[j].length] = i;
							break;
						}
					}
					if(j == squishVariants.length) {
						squishVariants[squishVariants.length] = [];
						squishVariants[j][0] = i;
					}
				}
				canvas1.height = 5 * squishVariants.length + 3*(squishVariants.length - 1);
				canvas1.style.height = 5 * squishVariants.length + 3*(squishVariants.length - 1);
				canvas2.height = 5 * squishVariants.length + 3*(squishVariants.length - 1);
				canvas2.style.height = 5 * squishVariants.length + 3*(squishVariants.length - 1);
				
				ctx1.fillStyle = "#000";
				ctx1.fillText(variantName_show, canvas1.width - ctx1.measureText(variantName_show).width, 8);

				y = 0;
				for( i = 0; i < squishVariants.length; i++) {
					for( j = 0; j < squishVariants[i].length; j++) {
						relativeWidth = Math.abs(relativeTos[squishVariants[i][j]] - relativeFroms[squishVariants[i][j]] + 1);
						switch(variantTypes[squishVariants[i][j]]) {
							case variantType_DELETION:
								ctx2.fillStyle = "rgb(0,255,0)";
								break;
							case variantType_INSERTION:
								ctx2.fillStyle = "rgb(255,0,0)";
								break;
							case variantType_SNV:
								ctx2.fillStyle = "rgb(0,0,0)";
								break;
							case variantType_CNV:
								ctx2.fillStyle = "rgb(20,177,75)";
								break;
							case variantType_DUPLICATION:
								ctx2.fillStyle = "rgb(19,165,157)";
								break;
							case variantType_INVERSION:
								ctx2.fillStyle = "rgb(19,127,165)";
								break;
							case variantType_BLS:
								ctx2.fillStyle = "rgb(85,19,165)";
								break;
							default:
								ctx2.fillStyle = "#0000FF";
						}
						ctx2.fillRect(relativeFroms[squishVariants[i][j]], y, relativeWidth, 5);
					}
					y = y + 8;
				}
			}
		}
	}
}

function showVariant(canvas1, canvas2, variantNode, mode) {
	var fromNodes = variantNode.getElementsByTagName(xmlTagFrom);
	var toNodes = variantNode.getElementsByTagName(xmlTagTo);
	var variantNodes = variantNode.getElementsByTagName(xmlTagVariant);
	var variantIds = [];
	var variantTypes = [];
	var variantName = variantNode.getAttribute(xmlAttributeId);
	var relativeFroms = [], relativeTos = [];
	var relativeWidth;
	var i, j, y;
	var trackItemIndex;
	
	for( i = 0; i < trackItems.length; i++) {
		if(variantName == trackItems[i].id) {
			trackItemIndex = i;
			break;
		}
	}
	
	if(trackItemIndex< trackItems.length){
		trackItems[trackItemIndex].details = [];
	}

	var ifParam = variantNode.getAttribute("ifParam");
	var variantsSuperId = variantNode.getAttribute("superid") || variantName;
	insertSettingBtn(variantName, ifParam, variantsSuperId);

	for( i = 0; i < variantNodes.length; i++) {
		variantIds[i] = variantNodes[i].getAttribute(xmlAttributeId);
		variantTypes[i] = variantNodes[i].getAttribute(xmlAttributeType);
		relativeFroms[i] = parseInt((parseInt(fromNodes[i].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
		relativeTos[i] = parseInt((parseInt(toNodes[i].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
		if(trackItemIndex< trackItems.length){
			trackItems[trackItemIndex].details[i] = [];
			trackItems[trackItemIndex].details[i].id = variantIds[i];
			trackItems[trackItemIndex].details[i].from = parseInt(fromNodes[i].childNodes[0].nodeValue);
			trackItems[trackItemIndex].details[i].to = parseInt(toNodes[i].childNodes[0].nodeValue);
		}
	}
	
	if(canvas1.getContext && canvas2.getContext) {
		var ctx1 = canvas1.getContext('2d');
		var ctx2 = canvas2.getContext('2d');
		if(mode == "dense") {
			canvas1.height = 10;
			canvas1.style.height = 10;
			canvas2.height = 10;
			canvas2.style.height = 10;
			ctx1.fillStyle = "#000";
			ctx1.fillText(variantName, canvas1.width - ctx1.measureText(variantName).width, 8);

			for( i = 0; i < fromNodes.length; i++) {
				relativeWidth = Math.abs(relativeTos[i] - relativeFroms[i] + 1);
				if(variantTypes[i] == variantType_SNV || variantTypes[i] == variantType_OTHERS) {
					ctx2.fillStyle = "#000";
				} else if(variantTypes[i] == variantType_INSERTION) {
					ctx2.fillStyle = "#FF0000";
				} else if(variantTypes[i] == variantType_DELETION) {
					ctx2.fillStyle = "#00FF00";
				} else {
					ctx2.fillStyle = "#0000FF";
				}
				ctx2.fillRect(relativeFroms[i], 0, relativeWidth, 10);
			}
		} else {
			var packVariants = [], squishVariants = [];
			if((mode == "pack") && (variantNodes.length <= parseInt(trackLength / 60) * 50)) {
				if(variantNodes.length > 0) {//the situation: not contain the variant
					packVariants[packVariants.length] = [];
					packVariants[0][0] = 0;
				}
				for( i = 1; i < variantNodes.length; i++) {
					for( j = 0; j < packVariants.length; j++) {
						if((relativeFroms[i] - ctx1.measureText(variantIds[i]).width - 8) > relativeTos[packVariants[j][packVariants[j].length - 1]]) {
							packVariants[j][packVariants[j].length] = i;
							break;
						}
					}
					if(j == packVariants.length) {
						packVariants[packVariants.length] = [];
						packVariants[j][0] = i;
					}
				}
				if(packVariants.length <= 50) {
					canvas1.height = 10 * packVariants.length + 3*(packVariants.length - 1) > 10 ? 10 * packVariants.length + 3*(packVariants.length - 1) : 10;
					canvas1.style.height = 10 * packVariants.length + 3*(packVariants.length - 1) > 10 ? 10 * packVariants.length + 3*(packVariants.length - 1) : 10;
					canvas2.height = 10 * packVariants.length + 3*(packVariants.length - 1) > 10 ? 10 * packVariants.length + 3*(packVariants.length - 1) : 10;
					canvas2.style.height = 10 * packVariants.length + 3*(packVariants.length - 1) > 10 ? 10 * packVariants.length + 3*(packVariants.length - 1) : 10;
					
					ctx1.fillStyle = "#000";
					ctx1.fillText(variantName, canvas1.width - ctx1.measureText(variantName).width, 8);

					y = 10;
					for( i = 0; i < packVariants.length; i++) {
						for( j = 0; j < packVariants[i].length; j++) {
							if(trackItemIndex< trackItems.length){
								trackItems[trackItemIndex].details[packVariants[i][j]].left = relativeFroms[packVariants[i][j]] - ctx2.measureText(variantIds[packVariants[i][j]]).width - 3;
								trackItems[trackItemIndex].details[packVariants[i][j]].right = relativeTos[packVariants[i][j]];
								trackItems[trackItemIndex].details[packVariants[i][j]].top = y - 10;
								trackItems[trackItemIndex].details[packVariants[i][j]].bottom = y;
							}
							relativeWidth = Math.abs(relativeTos[packVariants[i][j]] - relativeFroms[packVariants[i][j]] + 1);
							if(variantTypes[packVariants[i][j]] == variantType_SNV || variantTypes[packVariants[i][j]] == variantType_OTHERS) {
								ctx1.fillStyle = "#000";
								ctx2.fillStyle = "#000";
							} else if(variantTypes[packVariants[i][j]] == variantType_INSERTION) {
								ctx1.fillStyle = "#FF0000";
								ctx2.fillStyle = "#FF0000";
							} else if(variantTypes[packVariants[i][j]] == variantType_DELETION) {
								ctx1.fillStyle = "#00FF00";
								ctx2.fillStyle = "#00FF00";
							} else {
								ctx1.fillStyle = "#0000FF";
								ctx2.fillStyle = "#0000FF";
							}
							ctx2.fillText(variantIds[packVariants[i][j]], relativeFroms[packVariants[i][j]] - ctx2.measureText(variantIds[packVariants[i][j]]).width - 3, y - 2);
							ctx2.fillRect(relativeFroms[packVariants[i][j]], y - 10, relativeWidth, 10);
						}
						y = y + 13;
					}
					canvas2.addEventListener("mousemove", canvasMousemove, false);
					canvas2.addEventListener("click", canvasClickForVariant, false);
				}
			}
			if(mode == "squish" || ((mode == "pack") && (packVariants.length > 50 || variantNodes.length > parseInt(trackLength / 60) * 50))) {
				if(variantNodes.length > 0) {
					squishVariants[squishVariants.length] = [];
					squishVariants[0][0] = 0;
				}
				for( i = 1; i < variantNodes.length; i++) {
					for( j = 0; j < squishVariants.length; j++) {
						if(relativeFroms[i] > relativeTos[squishVariants[j][squishVariants[j].length - 1]]) {
							squishVariants[j][squishVariants[j].length] = i;
							break;
						}
					}
					if(j == squishVariants.length) {
						squishVariants[squishVariants.length] = [];
						squishVariants[j][0] = i;
					}
				}
				canvas1.height = 5 * squishVariants.length + 3*(squishVariants.length - 1);
				canvas1.style.height = 5 * squishVariants.length + 3*(squishVariants.length - 1);
				canvas2.height = 5 * squishVariants.length + 3*(squishVariants.length - 1);
				canvas2.style.height = 5 * squishVariants.length + 3*(squishVariants.length - 1);
				
				ctx1.fillStyle = "#000";
				ctx1.fillText(variantName, canvas1.width - ctx1.measureText(variantName).width, 8);
				
				y = 0;
				for( i = 0; i < squishVariants.length; i++) {
					for( j = 0; j < squishVariants[i].length; j++) {
						relativeWidth = Math.abs(relativeTos[squishVariants[i][j]] - relativeFroms[squishVariants[i][j]] + 1);
						switch(variantTypes[squishVariants[i][j]]) {
							case variantType_DELETION:
								ctx2.fillStyle = "#00FF00";
								break;
							case variantType_INSERTION:
								ctx2.fillStyle = "#FF0000";
								break;
							case variantType_MUTIPLE:
								ctx2.fillStyle = "#0000FF";
								break;
							default:
								ctx2.fillStyle = "#000";
						}
						ctx2.fillRect(relativeFroms[squishVariants[i][j]], y, relativeWidth, 5);
					}
					y = y + 8;
				}
			}
		}
	}
}

function overScaleShow(trackId) {
	var trackNode = document.getElementById(trackId);
	var canvasNodes = trackNode.getElementsByTagName("canvas");
	var canvas1 = canvasNodes[0], canvas2 = canvasNodes[1];
	if(canvas1.getContext && canvas2.getContext) {
		var ctx1 = canvas1.getContext('2d');
		var ctx2 = canvas2.getContext('2d');
		canvas1.height = 10;
		canvas1.style.height = 10;
		canvas2.height = 10;
		canvas2.style.height = 10;
		ctx1.fillStyle = "#000";
		var trackId_show;
		if(trackId.substring(0,1) == "_"){
			trackId_show=trackId.substring(1);
		} else {
			trackId_show=trackId;
		}
		ctx1.fillText(trackId_show, canvas1.width - ctx1.measureText(trackId_show).width, 8);
		ctx2.fillStyle = "#000";
		var tempStr = "The request range is too large for this track OR the track data are currently unavailable";//"zoom in to <= 1,000,000 bases to view items";
		ctx2.fillText(tempStr, (canvas2.width - ctx2.measureText(tempStr).width) / 2, 8);
	}
	if(document.getElementById(trackId).getElementsByClassName("thickbox").length > 0){
		$(document.getElementById(trackId).getElementsByClassName("thickbox")[0]).remove();
	}
	canvas2.removeEventListener("mousemove", canvasMousemove, false);
	canvas2.removeEventListener("click", canvasClickForVariant, false);
}

function showPersonalGeneByImg_TwoNode(canvas1, canvas2, geneNode, geneNode2, mode) {
	var geneNodes = geneNode.getElementsByTagName(xmlTagElement);
	var elementFroms = [], elementTos = [], elementIds = [], elementDirections = [], elementColors = [];
	var elementRelativeFroms = [], elementRelativeTos = [];
	var geneNodeName = geneNode.getAttribute(xmlAttributeId);
	var subElements = [], subElementRelativeFroms = [], subElemnetRelativeTos = [], subElementTypes = [];
	var variants = [], variantRelativeFroms = [], variantRelativeTos = [], variantTypes = [], variantIds = [], variantLetters = [];
	var subElementWidth, elementRelativeWidth;
	
	var geneNodes2 = geneNode2.getElementsByTagName(xmlTagElement);
	var elementFroms2 = [], elementTos2 = [], elementIds2 = [], elementDirections2 = [], elementColors2 = [];
	var elementRelativeFroms2 = [], elementRelativeTos2 = [];
	var geneNodeName2 = geneNode2.getAttribute(xmlAttributeId);
	var subElements2 = [], subElementRelativeFroms2 = [], subElemnetRelativeTos2 = [], subElementTypes2 = [];
	var variants2 = [], variantRelativeFroms2 = [], variantRelativeTos2 = [], variantTypes2 = [], variantIds2 = [], variantLetters2 = [];
	var subElementWidth, elementRelativeWidth;
	var geneNodeName_show = geneNodeName;
	var elementStatus = [], elementStatus2 = [];
	
	var i, j, k, m;
	var extend_width = 10;
	var img_height = 30, img_width = 21;
	
	var img_Letter_Array = [];
	var imgDEL_AA, imgINS_AA, imgOTH_AA;
	var imgStart, imgStart2, imgStop, imgStop2, imgASS, imgDSS, imgShift;
	var bkgImg_shift, bkgImg_pshift;
	img_Letter_Array["A"] = document.getElementById("img_A");
	img_Letter_Array["B"] = document.getElementById("img_B");
	img_Letter_Array["C"] = document.getElementById("img_C");
	img_Letter_Array["D"] = document.getElementById("img_D");
	img_Letter_Array["E"] = document.getElementById("img_E");
	img_Letter_Array["F"] = document.getElementById("img_F");
	img_Letter_Array["G"] = document.getElementById("img_G");
	img_Letter_Array["H"] = document.getElementById("img_H");
	img_Letter_Array["I"] = document.getElementById("img_I");
	img_Letter_Array["J"] = document.getElementById("img_J");
	img_Letter_Array["K"] = document.getElementById("img_K");
	img_Letter_Array["L"] = document.getElementById("img_L");
	img_Letter_Array["M"] = document.getElementById("img_M");
	img_Letter_Array["N"] = document.getElementById("img_N");
	img_Letter_Array["O"] = document.getElementById("img_O");
	img_Letter_Array["P"] = document.getElementById("img_P");
	img_Letter_Array["Q"] = document.getElementById("img_Q");
	img_Letter_Array["R"] = document.getElementById("img_R");
	img_Letter_Array["S"] = document.getElementById("img_S");
	img_Letter_Array["T"] = document.getElementById("img_T");
	img_Letter_Array["U"] = document.getElementById("img_U");
	img_Letter_Array["V"] = document.getElementById("img_V");
	img_Letter_Array["W"] = document.getElementById("img_W");
	img_Letter_Array["Y"] = document.getElementById("img_Y");
	img_Letter_Array["Z"] = document.getElementById("img_Z");

	imgDEL_AA = document.getElementById("imgDEL_AA");
	imgINS_AA = document.getElementById("imgINS_AA");
	imgOTH_AA = document.getElementById("imgOTH_AA");
	imgStart = document.getElementById("imgStart");
	imgStart2 = document.getElementById("imgStart2");
	imgStop = document.getElementById("imgStop");
	imgStop2 = document.getElementById("imgStop2");
	imgASS = document.getElementById("imgASS");
	imgDSS = document.getElementById("imgDSS");
	imgShift = document.getElementById("imgShift");
	imgStatus = document.getElementById("imgStatus");
	bkgImg_shift = document.getElementById("bkgImg_shift");
	bkgImg_pshift = document.getElementById("bkgImg_pshift");

	var colorStyle = "#000";
	if(geneNodeName == "_refGene") {
		colorStyle = "#8B8B00";
	} else if(geneNodeName == "_ensemblGene") {
		colorStyle = "RGB(109,115,243)";
	} else if(geneNodeName == "_knownGene") {
		colorStyle = "RGB(163,17,90)";
	} else {
		colorStyle = "#000";
	}

	for( i = 0; i < geneNodes.length; i++) {
		elementIds[i] = geneNodes[i].getAttribute(xmlAttributeId);
		elementFroms[i] = geneNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
		elementTos[i] = geneNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
		elementDirections[i] = geneNodes[i].getElementsByTagName(xmlTagDirection)[0].childNodes[0].nodeValue;
		if(geneNodes[i].getElementsByTagName(xmlTagColor).length > 0) {
			elementColors[i] = "RGB(" + geneNodes[i].getElementsByTagName(xmlTagColor)[0].firstChild.nodeValue + ")";
		} else {
			elementColors[i] = colorStyle;
		}
		elementRelativeFroms[i] = parseInt((parseInt(elementFroms[i]) - startIndex) / searchLength * trackLength);
		elementRelativeTos[i] = parseInt((parseInt(elementTos[i]) - startIndex + 1) / searchLength * trackLength);
		
		if(geneNodes[i].getElementsByTagName(xmlTagStatus).length > 0){
			elementStatus[i] = true;
		}else{
			elementStatus[i] = false;
		}

		subElements[i] = geneNodes[i].getElementsByTagName(xmlTagSubElement);
		subElementRelativeFroms[i] = [];
		subElemnetRelativeTos[i] = [];
		subElementTypes[i] = [];

		variants[i] = [];
		variantIds[i] = [];
		variantTypes[i] = [];
		variantRelativeFroms[i] = [];
		variantRelativeTos[i] = [];
		variantLetters[i] = [];

		if(subElements[i].length == 0) {
			subElements[i] = [];
			subElements[i][0] = " ";
			//virtual subElement Node
			subElementTypes[i][0] = subElementTypeBoxValue;
			subElementRelativeFroms[i][0] = elementRelativeFroms[i];
			subElemnetRelativeTos[i][0] = elementRelativeTos[i];

			variants[i][0] = geneNodes[i].getElementsByTagName(xmlTagVariant);
			variantIds[i][0] = [];
			variantTypes[i][0] = [];
			variantRelativeFroms[i][0] = [];
			variantRelativeTos[i][0] = [];
			variantLetters[i][0] = [];
			for( k = 0; k < variants[i][0].length; k++) {
				variantIds[i][0][k] = variants[i][0][k].getAttribute(xmlAttributeId);
				variantTypes[i][0][k] = variants[i][0][k].getAttribute(xmlAttributeType);
				variantRelativeFroms[i][0][k] = parseInt((parseInt(variants[i][0][k].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
				variantRelativeTos[i][0][k] = parseInt((parseInt(variants[i][0][k].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
				variantLetters[i][0][k] = variants[i][0][k].getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue;
			}
		} else {
			for( j = 0; j < subElements[i].length; j++) {
				subElementTypes[i][j] = subElements[i][j].getAttribute(xmlAttributeType);
				subElementRelativeFroms[i][j] = parseInt((parseInt(subElements[i][j].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
				subElemnetRelativeTos[i][j] = parseInt((parseInt(subElements[i][j].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
				variants[i][j] = subElements[i][j].getElementsByTagName(xmlTagVariant);
				variantIds[i][j] = [];
				variantTypes[i][j] = [];
				variantRelativeFroms[i][j] = [];
				variantRelativeTos[i][j] = [];
				variantLetters[i][j] = [];
				for( k = 0; k < variants[i][j].length; k++) {
					variantIds[i][j][k] = variants[i][j][k].getAttribute(xmlAttributeId);
					variantTypes[i][j][k] = variants[i][j][k].getAttribute(xmlAttributeType);
					variantRelativeFroms[i][j][k] = parseInt((parseInt(variants[i][j][k].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
					variantRelativeTos[i][j][k] = parseInt((parseInt(variants[i][j][k].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
					variantLetters[i][j][k] = variants[i][j][k].getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue;
				}
			}
		}
	}
	
	for( i = 0; i < geneNodes2.length; i++) {
		elementIds2[i] = geneNodes2[i].getAttribute(xmlAttributeId);
		elementFroms2[i] = geneNodes2[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
		elementTos2[i] = geneNodes2[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
		elementDirections2[i] = geneNodes2[i].getElementsByTagName(xmlTagDirection)[0].childNodes[0].nodeValue;
		if(geneNodes2[i].getElementsByTagName(xmlTagColor).length > 0) {
			elementColors2[i] = "RGB(" + geneNodes2[i].getElementsByTagName(xmlTagColor)[0].firstChild.nodeValue + ")";
		} else {
			elementColors2[i] = colorStyle;
		}
		elementRelativeFroms2[i] = parseInt((parseInt(elementFroms2[i]) - startIndex) / searchLength * trackLength);
		elementRelativeTos2[i] = parseInt((parseInt(elementTos2[i]) - startIndex + 1) / searchLength * trackLength);
		
		if(geneNodes2[i].getElementsByTagName(xmlTagStatus).length > 0){
			elementStatus2[i] = true;
		}else{
			elementStatus2[i] = false;
		}

		subElements2[i] = geneNodes2[i].getElementsByTagName(xmlTagSubElement);
		subElementRelativeFroms2[i] = [];
		subElemnetRelativeTos2[i] = [];
		subElementTypes2[i] = [];

		variants2[i] = [];
		variantIds2[i] = [];
		variantTypes2[i] = [];
		variantRelativeFroms2[i] = [];
		variantRelativeTos2[i] = [];
		variantLetters2[i] = [];

		if(subElements2[i].length == 0) {
			subElements2[i] = [];
			subElements2[i][0] = " ";
			//virtual subElement Node
			subElementTypes2[i][0] = subElementTypeBoxValue;
			subElementRelativeFroms2[i][0] = elementRelativeFroms2[i];
			subElemnetRelativeTos2[i][0] = elementRelativeTos2[i];

			variants2[i][0] = geneNodes2[i].getElementsByTagName(xmlTagVariant);
			variantIds2[i][0] = [];
			variantTypes2[i][0] = [];
			variantRelativeFroms2[i][0] = [];
			variantRelativeTos2[i][0] = [];
			variantLetters2[i][0] = [];
			for( k = 0; k < variants2[i][0].length; k++) {
				variantIds2[i][0][k] = variants2[i][0][k].getAttribute(xmlAttributeId);
				variantTypes2[i][0][k] = variants2[i][0][k].getAttribute(xmlAttributeType);
				variantRelativeFroms2[i][0][k] = parseInt((parseInt(variants2[i][0][k].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
				variantRelativeTos2[i][0][k] = parseInt((parseInt(variants2[i][0][k].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
				variantLetters2[i][0][k] = variants2[i][0][k].getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue;
			}
		} else {
			for( j = 0; j < subElements2[i].length; j++) {
				subElementTypes2[i][j] = subElements2[i][j].getAttribute(xmlAttributeType);
				subElementRelativeFroms2[i][j] = parseInt((parseInt(subElements2[i][j].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
				subElemnetRelativeTos2[i][j] = parseInt((parseInt(subElements2[i][j].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
				variants2[i][j] = subElements2[i][j].getElementsByTagName(xmlTagVariant);
				variantIds2[i][j] = [];
				variantTypes2[i][j] = [];
				variantRelativeFroms2[i][j] = [];
				variantRelativeTos2[i][j] = [];
				variantLetters2[i][j] = [];
				for( k = 0; k < variants2[i][j].length; k++) {
					variantIds2[i][j][k] = variants2[i][j][k].getAttribute(xmlAttributeId);
					variantTypes2[i][j][k] = variants2[i][j][k].getAttribute(xmlAttributeType);
					variantRelativeFroms2[i][j][k] = parseInt((parseInt(variants2[i][j][k].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
					variantRelativeTos2[i][j][k] = parseInt((parseInt(variants2[i][j][k].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
					variantLetters2[i][j][k] = variants2[i][j][k].getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue;
				}
			}
		}
	}
	
	if(((/^_/).test(geneNodeName))){
		geneNodeName_show = (geneNodeName + "").replace("_","");
	}
	
	personalPannel.Panno.details = [];

	if(canvas1.getContext && canvas2.getContext) {
		var ctx1 = canvas1.getContext('2d');
		var ctx2 = canvas2.getContext('2d');
		if(geneNodes.length == 0 && geneNodes2.length == 0) {
			canvas1.height = 10;
			canvas1.style.height = 10;
			canvas2.height = 10;
			canvas2.style.height = 10;
			ctx1.strokeStyle = "#000";
			ctx1.fillStyle = "#000";
			ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);
			
			return;
		}
		if(mode == "dense") {
			canvas1.height = (img_height + 10)* 2 + 3;
			canvas1.style.height = (img_height + 10)* 2 + 3;
			canvas2.height = (img_height + 10)* 2 + 3;
			canvas2.style.height = (img_height + 10)* 2 + 3;
			ctx1.strokeStyle = "#000";
			ctx1.fillStyle = "#000";
			ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);

			for( i = 0; i < subElements.length; i++) {
				ctx2.fillStyle = elementColors[i];
				for( j = 0; j < subElements[i].length; j++) {
					subElementWidth = Math.abs(subElemnetRelativeTos[i][j] - subElementRelativeFroms[i][j] + 1);
					switch(subElementTypes[i][j]) {
						case subElementTypeBoxValue:
							ctx2.fillRect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							break;
						case subElementTypeBandValue:
							ctx2.fillRect(subElementRelativeFroms[i][j], 3 + img_height, subElementWidth, 5);
							break;
						case subElementTypeLineValue:
							ctx2.fillRect(subElementRelativeFroms[i][j], 5 + img_height, subElementWidth, 1);
							break;
						case "eBox":
							ctx2.fillRect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							if(elementDirections[i] == "+"){
								ctx2.rect(subElemnetRelativeTos[i][j], img_height, extend_width, 10);
							}else{
								ctx2.rect(subElementRelativeFroms[i][j] - extend_width, img_height, extend_width, 10);
							}
							
							break;
						case "sBand":
							ctx2.rect(subElementRelativeFroms[i][j], 3 + img_height, subElementWidth, 5);
							ctx2.fillRect(subElementRelativeFroms[i][j], 5 + img_height, subElementWidth, 1);
							
							break;
						case "shBox":
							var drawImage_eleWidth = subElementWidth;
							//var drawImage_imgWidth = $(bkgImg_shift).width();
							var drawImage_imgWidth = 1496;
							var drawImage_from = subElementRelativeFroms[i][j];
							var drawImage_drawWidth;
							while(drawImage_eleWidth > 0){
								drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
								ctx2.drawImage(bkgImg_shift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height, drawImage_drawWidth, 10);
								drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
								drawImage_from = drawImage_from + drawImage_drawWidth;
							}
							//ctx2.drawImage(bkgImg_shift, 0, 0, subElementWidth, 10, subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							
							break;
						case "lBox":
							ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							ctx2.fillRect(subElementRelativeFroms[i][j], 3 + img_height, subElementWidth, 5);
							
							break;
						case "skBox":
							ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							ctx2.fillRect(subElementRelativeFroms[i][j], 5 + img_height, subElementWidth, 1);
							
							break;
						case "psBox":
							var drawImage_eleWidth = subElementWidth;
							//var drawImage_imgWidth = $(bkgImg_pshift).width();
							var drawImage_imgWidth = 1494;
							var drawImage_from = subElementRelativeFroms[i][j];
							var drawImage_drawWidth;
							while(drawImage_eleWidth > 0){
								drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
								ctx2.drawImage(bkgImg_pshift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height, drawImage_drawWidth, 10);
								drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
								drawImage_from = drawImage_from + drawImage_drawWidth;
							}
							//ctx2.drawImage(bkgImg_pshift, 0, 0, subElementWidth, 10, subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							break;
						case "eBand":
							ctx2.fillRect(subElementRelativeFroms[i][j], 3 + img_height, subElementWidth, 5);
							if(elementDirections[i] == "+"){
								ctx2.rect(subElemnetRelativeTos[i][j], 3 + img_height, extend_width, 5);
							}else{
								ctx2.rect(subElementRelativeFroms[i][j] - extend_width, 3 + img_height, extend_width, 5);
							}
							
							
							break;
						case "seBox":
							var drawImage_eleWidth = subElementWidth;
							//var drawImage_imgWidth = $(bkgImg_shift).width();
							var drawImage_imgWidth = 1496;
							var drawImage_from = subElementRelativeFroms[i][j];
							var drawImage_drawWidth;
							while(drawImage_eleWidth > 0){
								drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
								ctx2.drawImage(bkgImg_shift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height, drawImage_drawWidth, 10);
								drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
								drawImage_from = drawImage_from + drawImage_drawWidth;
							}
							//ctx2.drawImage(bkgImg_shift, 0, 0, subElementWidth, 10, subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							if(elementDirections[i] == "+"){
								ctx2.rect(subElemnetRelativeTos[i][j], img_height, extend_width, 10);
							}else{
								ctx2.rect(subElementRelativeFroms[i][j] - extend_width, img_height, extend_width, 10);
							}
							
							break;
						case "pseBox":
							var drawImage_eleWidth = subElementWidth;
							//var drawImage_imgWidth = $(bkgImg_pshift).width();
							var drawImage_imgWidth = 1494;
							var drawImage_from = subElementRelativeFroms[i][j];
							var drawImage_drawWidth;
							while(drawImage_eleWidth > 0){
								drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
								ctx2.drawImage(bkgImg_pshift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height, drawImage_drawWidth, 10);
								drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
								drawImage_from = drawImage_from + drawImage_drawWidth;
							}
							//ctx2.drawImage(bkgImg_pshift, 0, 0, subElementWidth, 10, subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
							if(elementDirections[i] == "+"){
								ctx2.rect(subElemnetRelativeTos[i][j], img_height, extend_width, 10);
							}else{
								ctx2.rect(subElementRelativeFroms[i][j] - extend_width, img_height, extend_width, 10);
							}
							
							break;
					}
					for( k = 0; k < variants[i][j].length; k++) {
						var geneVariantLetters = variantLetters[i][j][k].split(":");
						if(geneVariantLetters.length == 1) {
							if(geneVariantLetters[0] == "^") {
								if(elementDirections[i] == "+"){
									ctx2.drawImage(imgStart, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								}else{
									ctx2.drawImage(imgStart2, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								}
							} else if(geneVariantLetters[0] == "#") {
								ctx2.drawImage(imgShift, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
							} else if(geneVariantLetters[0] == "(") {
								if(elementDirections[i] == "+") {
									ctx2.drawImage(imgASS, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								} else {
									ctx2.drawImage(imgDSS, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								}
							} else if(geneVariantLetters[0] == ")") {
								if(elementDirections[i] == "+") {
									ctx2.drawImage(imgDSS, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								} else {
									ctx2.drawImage(imgASS, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								}
							}
						} else {
							if((variantLetters[i][j][k] + "").indexOf("$") != -1) {
								if((geneVariantLetters[0] + "").indexOf("$") != -1 && (geneVariantLetters[1] + "").indexOf("$") == -1) {
									ctx2.drawImage(imgStop2, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								} else if ((geneVariantLetters[1] + "").indexOf("$") != -1 && (geneVariantLetters[0] + "").indexOf("$") == -1) {
									ctx2.drawImage(imgStop, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								}
							} else {
								if((geneVariantLetters[0] + "").length > (geneVariantLetters[1] + "").length || (geneVariantLetters[1] + "").indexOf("_") != -1) {
									ctx2.drawImage(imgDEL_AA, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								} else if((geneVariantLetters[0] + "").length < (geneVariantLetters[1] + "").length || (geneVariantLetters[0] + "").indexOf("_") != -1) {
									ctx2.drawImage(imgINS_AA, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								} else {
									if(variantLetters[i][j][k].split(":")[1] != variantLetters[i][j][k].split(":")[0]){
										ctx2.drawImage(img_Letter_Array[variantLetters[i][j][k].split(":")[1]], (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}
								}
							}
						}
					}
				}
			}
			/*********************************************************************************************************/
			for( i = 0; i < subElements2.length; i++) {
				ctx2.fillStyle = elementColors2[i];
				for( j = 0; j < subElements2[i].length; j++) {
					subElementWidth2 = Math.abs(subElemnetRelativeTos2[i][j] - subElementRelativeFroms2[i][j] + 1);
					switch(subElementTypes2[i][j]) {
						case subElementTypeBoxValue:
							ctx2.fillRect(subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							break;
						case subElementTypeBandValue:
							ctx2.fillRect(subElementRelativeFroms2[i][j], 3 + img_height + 10 + 3 + img_height, subElementWidth2, 5);
							break;
						case subElementTypeLineValue:
							ctx2.fillRect(subElementRelativeFroms2[i][j], 5 + img_height + 10 + 3 + img_height, subElementWidth2, 1);
							break;
						case "eBox":
							ctx2.fillRect(subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							if(elementDirections2[i] == "+"){
								ctx2.rect(subElemnetRelativeTos2[i][j], img_height + 10 + 3 + img_height, extend_width, 10);
							}else{
								ctx2.rect(subElementRelativeFroms2[i][j] + extend_width, img_height + 10 + 3 + img_height, extend_width, 10);
							}
							
							break;
						case "sBand":
							ctx2.rect(subElementRelativeFroms2[i][j], 3 + img_height + 10 + 3 + img_height, subElementWidth2, 5);
							ctx2.fillRect(subElementRelativeFroms2[i][j], 5 + img_height + 10 + 3 + img_height, subElementWidth2, 1);
							
							break;
						case "shBox":
							var drawImage_eleWidth = subElementWidth2;
							//var drawImage_imgWidth = $(bkgImg_shift).width();
							var drawImage_imgWidth = 1496;
							var drawImage_from = subElementRelativeFroms2[i][j];
							var drawImage_drawWidth;
							while(drawImage_eleWidth > 0){
								drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
								ctx2.drawImage(bkgImg_shift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height + 10 + 3 + img_height, drawImage_drawWidth, 10);
								drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
								drawImage_from = drawImage_from + drawImage_drawWidth;
							}
							//ctx2.drawImage(bkgImg_shift, 0, 0, subElementWidth2, 10, subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							ctx2.rect(subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							
							break;
						case "lBox":
							ctx2.rect(subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							ctx2.fillRect(subElementRelativeFroms2[i][j], 3 + img_height + 10 + 3 + img_height, subElementWidth2, 5);
							
							break;
						case "skBox":
							ctx2.rect(subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							ctx2.fillRect(subElementRelativeFroms2[i][j], 5 + img_height + 10 + 3 + img_height, subElementWidth2, 1);
							
							break;
						case "psBox":
							var drawImage_eleWidth = subElementWidth2;
							//var drawImage_imgWidth = $(bkgImg_pshift).width();
							var drawImage_imgWidth = 1494;
							var drawImage_from = subElementRelativeFroms2[i][j];
							var drawImage_drawWidth;
							while(drawImage_eleWidth > 0){
								drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
								ctx2.drawImage(bkgImg_pshift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height + 10 + 3 + img_height, drawImage_drawWidth, 10);
								drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
								drawImage_from = drawImage_from + drawImage_drawWidth;
							}
							//ctx2.drawImage(bkgImg_pshift, 0, 0, subElementWidth2, 10, subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							ctx2.rect(subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							break;
						case "eBand":
							ctx2.fillRect(subElementRelativeFroms2[i][j], 3 + img_height + 10 + 3 + img_height, subElementWidth2, 5);
							if(elementDirections2[i] == "+"){
								ctx2.rect(subElemnetRelativeTos2[i][j], 3 + img_height + 10 + 3 + img_height, extend_width, 5);
							}else{
								ctx2.rect(subElementRelativeFroms2[i][j] - extend_width, 3 + img_height + 10 + 3 + img_height, extend_width, 5);
							}
							
							break;
						case "seBox":
							var drawImage_eleWidth = subElementWidth2;
							//var drawImage_imgWidth = $(bkgImg_shift).width();
							var drawImage_imgWidth = 1496;
							var drawImage_from = subElementRelativeFroms2[i][j];
							var drawImage_drawWidth;
							while(drawImage_eleWidth > 0){
								drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
								ctx2.drawImage(bkgImg_shift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height + 10 + 3 + img_height, drawImage_drawWidth, 10);
								drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
								drawImage_from = drawImage_from + drawImage_drawWidth;
							}
							//ctx2.drawImage(bkgImg_shift, 0, 0, subElementWidth2, 10, subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							ctx2.rect(subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							if(elementDirections2[i] == "+"){
								ctx2.rect(subElemnetRelativeTos2[i][j], img_height + 10 + 3 + img_height, extend_width, 10);
							}else{
								ctx2.rect(subElementRelativeFroms2[i][j] - extend_width, img_height + 10 + 3 + img_height, extend_width, 10);
							}
							
							break;
						case "pseBox":
							var drawImage_eleWidth = subElementWidth2;
							//var drawImage_imgWidth = $(bkgImg_pshift).width();
							var drawImage_imgWidth = 1494;
							var drawImage_from = subElementRelativeFroms2[i][j];
							var drawImage_drawWidth;
							while(drawImage_eleWidth > 0){
								drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
								ctx2.drawImage(bkgImg_pshift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height + 10 + 3 + img_height, drawImage_drawWidth, 10);
								drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
								drawImage_from = drawImage_from + drawImage_drawWidth;
							}
							//ctx2.drawImage(bkgImg_pshift, 0, 0, subElementWidth2, 10, subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							ctx2.rect(subElementRelativeFroms2[i][j], img_height + 10 + 3 + img_height, subElementWidth2, 10);
							if(elementDirections2[i] == "+"){
								ctx2.rect(subElemnetRelativeTos2[i][j], img_height + 10 + 3 + img_height, extend_width, 10);
							}else{
								ctx2.rect(subElementRelativeFroms2[i][j] - extend_width, img_height + 10 + 3 + img_height, extend_width, 10);
							}
							
							break;
					}
					for( k = 0; k < variants2[i][j].length; k++) {
						var geneVariantLetters = variantLetters2[i][j][k].split(":");
						if(geneVariantLetters.length == 1) {
							if(geneVariantLetters[0] == "^") {
								if(elementDirections2[i] == "+"){
									ctx2.drawImage(imgStart, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
								}else{
									ctx2.drawImage(imgStart2, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
								}
							} else if(geneVariantLetters[0] == "#") {
								ctx2.drawImage(imgShift, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
							} else if(geneVariantLetters[0] == "(") {
								if(elementDirections2[i] == "+") {
									ctx2.drawImage(imgASS, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
								} else {
									ctx2.drawImage(imgDSS, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
								}
							} else if(geneVariantLetters[0] == ")") {
								if(elementDirections2[i] == "+") {
									ctx2.drawImage(imgDSS, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
								} else {
									ctx2.drawImage(imgASS, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
								}
							}
						} else {
							if((variantLetters2[i][j][k] + "").indexOf("$") != -1) {
								if((geneVariantLetters[0] + "").indexOf("$") != -1 && (geneVariantLetters[1] + "").indexOf("$")==-1) {
									ctx2.drawImage(imgStop2, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
								} else if((geneVariantLetters[1] + "").indexOf("$") != -1 && (geneVariantLetters[0] + "").indexOf("$")==-1) {
									ctx2.drawImage(imgStop, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
								}
							} else {
								if((geneVariantLetters[0] + "").length > (geneVariantLetters[1] + "").length || (geneVariantLetters[1] + "").indexOf("_") != -1) {
									ctx2.drawImage(imgDEL_AA, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
								} else if((geneVariantLetters[0] + "").length < (geneVariantLetters[1] + "").length || (geneVariantLetters[0] + "").indexOf("_") != -1) {
									ctx2.drawImage(imgINS_AA, (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
								} else {
									if(variantLetters2[i][j][k].split(":")[1] !=variantLetters2[i][j][k].split(":")[0]){
										ctx2.drawImage(img_Letter_Array[variantLetters2[i][j][k].split(":")[1]], (variantRelativeFroms2[i][j][k] + variantRelativeTos2[i][j][k] - img_width) / 2, 10 + 3 + img_height);
									}
								}
							}
						}
					}
				}
			}
			
		} else {
			var packVariants = [], squishVariants = [];
			var packVariants2 = [], squishVariants2 = [];
			if((mode == "pack") && ((geneNodes.length + geneNodes2.length) <= parseInt(trackLength / 50) * 50)) {//geneNodes.length <= parseInt(trackLength / 50   此判断是假定一个gene最小占位为50，则宽为trackLength，高为50的track可放的最多gene数目
				packVariants[packVariants.length] = [];
				packVariants[0][0] = 0;
				for( i = 1; i < geneNodes.length; i++) {
					for( j = 0; j < packVariants.length; j++) {
						if(elementIds[i] != ".") {
							if((elementRelativeFroms[i] - ctx1.measureText(elementIds[i]).width - 8) > elementRelativeTos[packVariants[j][packVariants[j].length - 1]]) {
								packVariants[j][packVariants[j].length] = i;
								break;
							}
						} else {
							if((elementRelativeFroms[i] - 5) > elementRelativeTos[packVariants[j][packVariants[j].length - 1]]) {
								packVariants[j][packVariants[j].length] = i;
								break;
							}
						}
					}
					if(j == packVariants.length) {
						packVariants[packVariants.length] = [];
						packVariants[j][0] = i;
					}
				}
				/***************************************************************/
				packVariants2[packVariants2.length] = [];
				packVariants2[0][0] = 0;
				for( i = 1; i < geneNodes2.length; i++) {
					for( j = 0; j < packVariants2.length; j++) {
						if(elementIds2[i] != ".") {
							if((elementRelativeFroms2[i] - ctx1.measureText(elementIds2[i]).width - 8) > elementRelativeTos2[packVariants2[j][packVariants2[j].length - 1]]) {
								packVariants2[j][packVariants2[j].length] = i;
								break;
							}
						} else {
							if((elementRelativeFroms2[i] - 5) > elementRelativeTos2[packVariants2[j][packVariants2[j].length - 1]]) {
								packVariants2[j][packVariants2[j].length] = i;
								break;
							}
						}
					}
					if(j == packVariants2.length) {
						packVariants2[packVariants2.length] = [];
						packVariants2[j][0] = i;
					}
				}
				
				
				if(packVariants.length + packVariants2.length<= 50) {
					canvas1.height = (13 + img_height) * (packVariants.length + packVariants2.length) - 3;
					canvas1.style.height = (13 + img_height) * (packVariants.length + packVariants2.length) - 3;
					canvas2.height = (13 + img_height) * (packVariants.length + packVariants2.length) - 3;
					canvas2.style.height = (13 + img_height) *(packVariants.length + packVariants2.length) - 3;
					
					ctx1.strokeStyle = "#000";
					ctx1.fillStyle = "#000";
					ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);

					y = 10 + img_height;
					for( i = 0; i < packVariants.length; i++) {
						for( j = 0; j < packVariants[i].length; j++) {
							personalPannel.Panno.details[packVariants[i][j]] = [];
							personalPannel.Panno.details[packVariants[i][j]].id = elementIds[packVariants[i][j]];
							personalPannel.Panno.details[packVariants[i][j]].from = elementFroms[packVariants[i][j]];
							personalPannel.Panno.details[packVariants[i][j]].to = elementTos[packVariants[i][j]];
							personalPannel.Panno.details[packVariants[i][j]].left = elementRelativeFroms[packVariants[i][j]];
							personalPannel.Panno.details[packVariants[i][j]].right = elementRelativeTos[packVariants[i][j]];
							personalPannel.Panno.details[packVariants[i][j]].top = y - 10;
							personalPannel.Panno.details[packVariants[i][j]].bottom = y;
							
							if(elementIds[i] != ".") {
								ctx2.fillStyle = elementColors[packVariants[i][j]];
								ctx2.strokeStyle = elementColors[packVariants[i][j]];
								ctx2.fillText(elementIds[packVariants[i][j]], elementRelativeFroms[packVariants[i][j]] - ctx2.measureText(elementIds[packVariants[i][j]]).width - 3, y - 2);
								if(elementStatus[packVariants[i][j]]){
									ctx2.drawImage(imgStatus, elementRelativeFroms[packVariants[i][j]] - 21, y - 10 - img_height);
								}
							}

							ctx2.fillStyle = elementColors[packVariants[i][j]];
							ctx2.strokeStyle = elementColors[packVariants[i][j]];

							if(geneNodes[packVariants[i][j]].getElementsByTagName(xmlTagSubElement).length == 0) {
								elementRelativeWidth = elementRelativeTos[packVariants[i][j]] - elementRelativeFroms[packVariants[i][j]] + 1;
								drawGeneByDirectionBox(elementRelativeFroms[packVariants[i][j]], elementRelativeTos[packVariants[i][j]], elementRelativeWidth, elementDirections[packVariants[i][j]], y, ctx2);
								m = 0;
								for( k = 0; k < variants[packVariants[i][j]][m].length; k++) {
									var geneVariantLetters = variantLetters[packVariants[i][j]][m][k].split(":");
									if(geneVariantLetters.length == 1) {
										if(geneVariantLetters[0] == "^") {
											if(elementDirections[packVariants[i][j]] == "+"){
												ctx2.drawImage(imgStart, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}else{
												ctx2.drawImage(imgStart2, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}
										} else if(geneVariantLetters[0] == "#") {
											ctx2.drawImage(imgShift, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
										} else if(geneVariantLetters[0] == "(") {
											if(elementDirections[packVariants[i][j]] == "+") {
												ctx2.drawImage(imgASS, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											} else {
												ctx2.drawImage(imgDSS, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}
										} else if(geneVariantLetters[0] == ")") {
											if(elementDirections[packVariants[i][j]] == "+") {
												ctx2.drawImage(imgDSS, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											} else {
												ctx2.drawImage(imgASS, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}
										}
									} else {
										if((variantLetters[packVariants[i][j]][m][k] + "").indexOf("$") != -1) {
											if((geneVariantLetters[0] + "").indexOf("$") != -1 && (geneVariantLetters[1] + "").indexOf("$") == -1) {
												ctx2.drawImage(imgStop2, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											} else if((geneVariantLetters[1] + "").indexOf("$") != -1 && (geneVariantLetters[0] + "").indexOf("$") == -1) {
												ctx2.drawImage(imgStop, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}
										} else {
											if((geneVariantLetters[0] + "").length > (geneVariantLetters[1] + "").length || (geneVariantLetters[1] + "").indexOf("_") != -1) {
												ctx2.drawImage(imgDEL_AA, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											} else if((geneVariantLetters[0] + "").length < (geneVariantLetters[1] + "").length || (geneVariantLetters[0] + "").indexOf("_") != -1) {
												ctx2.drawImage(imgINS_AA, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											} else {
												if(variantLetters[packVariants[i][j]][k][m].split(":")[1] != variantLetters[packVariants[i][j]][k][m].split(":")[0]){
													ctx2.drawImage(img_Letter_Array[variantLetters[packVariants[i][j]][k][m].split(":")[1]], (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}
											}
										}
									}
								}
							} else {
								for( k = 0; k < subElements[packVariants[i][j]].length; k++) {
									subElementWidth = Math.abs(subElemnetRelativeTos[packVariants[i][j]][k] - subElementRelativeFroms[packVariants[i][j]][k] + 1);
									//save time and memory by Liran
									if(subElemnetRelativeTos[packVariants[i][j]][k]<0 || subElementRelativeFroms[packVariants[i][j]][k]>trackLength){
										continue;
									}
									//save time and memory by Liran
									var preType = " ";
									if(k > 0) {
										preType = subElementTypes[packVariants[i][j]][k - 1];
									}
									drawPersonalGeneSubElement(subElementRelativeFroms[packVariants[i][j]][k], subElemnetRelativeTos[packVariants[i][j]][k], subElementWidth, subElementTypes[packVariants[i][j]][k], elementDirections[packVariants[i][j]], y, elementColors[packVariants[i][j]], preType, ctx2);
									for( m = 0; m < variants[packVariants[i][j]][k].length; m++) {
										var geneVariantLetters = variantLetters[packVariants[i][j]][k][m].split(":");
										if(geneVariantLetters.length == 1) {
											if(geneVariantLetters[0] == "^") {
												if(elementDirections[packVariants[i][j]] == "+"){
													ctx2.drawImage(imgStart, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}else{
													ctx2.drawImage(imgStart2, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}	
											} else if(geneVariantLetters[0] == "#") {
												ctx2.drawImage(imgShift, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
											} else if(geneVariantLetters[0] == "(") {
												if(elementDirections[packVariants[i][j]] == "+") {
													ctx2.drawImage(imgASS, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												} else {
													ctx2.drawImage(imgDSS, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}
											} else if(geneVariantLetters[0] == ")") {
												if(elementDirections[packVariants[i][j]] == "+") {
													ctx2.drawImage(imgDSS, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												} else {
													ctx2.drawImage(imgASS, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}
											}
										} else {
											if((variantLetters[packVariants[i][j]][k][m] + "").indexOf("$") != -1) {
												if((geneVariantLetters[0] + "").indexOf("$") != -1 && (geneVariantLetters[1] + "").indexOf("$")==-1) {
													ctx2.drawImage(imgStop2, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												} else if((geneVariantLetters[1] + "").indexOf("$") != -1 && (geneVariantLetters[0] + "").indexOf("$")==-1) {
													ctx2.drawImage(imgStop, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}
											} else {
												if((geneVariantLetters[0] + "").length > (geneVariantLetters[1] + "").length || (geneVariantLetters[1] + "").indexOf("_") != -1) {
													ctx2.drawImage(imgDEL_AA, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												} else if((geneVariantLetters[0] + "").length < (geneVariantLetters[1] + "").length || (geneVariantLetters[0] + "").indexOf("_") != -1) {
													ctx2.drawImage(imgINS_AA, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												} else {
													if(variantLetters[packVariants[i][j]][k][m].split(":")[1] != variantLetters[packVariants[i][j]][k][m].split(":")[0]){
														ctx2.drawImage(img_Letter_Array[variantLetters[packVariants[i][j]][k][m].split(":")[1]], (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}
												}
											}
										}
									}
								}
							}
						}
						y = y + 13 + img_height;
					}
					/**********************************************************************************/
					for( i = 0; i < packVariants2.length; i++) {
						for( j = 0; j < packVariants2[i].length; j++) {
							var personalPannel_Panno_details_length = personalPannel.Panno.details.length;
							personalPannel.Panno.details[personalPannel_Panno_details_length] = [];
							personalPannel.Panno.details[personalPannel_Panno_details_length].id = elementIds2[packVariants2[i][j]];
							personalPannel.Panno.details[personalPannel_Panno_details_length].from = elementFroms2[packVariants2[i][j]];
							personalPannel.Panno.details[personalPannel_Panno_details_length].to = elementTos2[packVariants2[i][j]];
							personalPannel.Panno.details[personalPannel_Panno_details_length].left = elementRelativeFroms2[packVariants2[i][j]];
							personalPannel.Panno.details[personalPannel_Panno_details_length].right = elementRelativeTos2[packVariants2[i][j]];
							personalPannel.Panno.details[personalPannel_Panno_details_length].top = y - 10;
							personalPannel.Panno.details[personalPannel_Panno_details_length].bottom = y;
							
							if(elementIds2[i] != ".") {
								ctx2.fillStyle = elementColors2[packVariants2[i][j]];
								ctx2.strokeStyle = elementColors2[packVariants2[i][j]];
								ctx2.fillText(elementIds2[packVariants2[i][j]], elementRelativeFroms2[packVariants2[i][j]] - ctx2.measureText(elementIds2[packVariants2[i][j]]).width - 3, y - 2);
								if(elementStatus2[packVariants2[i][j]]){
									ctx2.drawImage(imgStatus, elementRelativeFroms2[packVariants2[i][j]] - 21, y - 10 - img_height);
								}
							}

							ctx2.fillStyle = elementColors2[packVariants2[i][j]];
							ctx2.strokeStyle = elementColors2[packVariants2[i][j]];

							if(geneNodes2[packVariants2[i][j]].getElementsByTagName(xmlTagSubElement).length == 0) {
								elementRelativeWidth2 = elementRelativeTos2[packVariants2[i][j]] - elementRelativeFroms2[packVariants2[i][j]] + 1;
								drawGeneByDirectionBox(elementRelativeFroms2[packVariants2[i][j]], elementRelativeTos2[packVariants2[i][j]], elementRelativeWidth2, elementDirections2[packVariants2[i][j]], y, ctx2);
								m = 0;
								for( k = 0; k < variants2[packVariants2[i][j]][m].length; k++) {
									var geneVariantLetters = variantLetters2[packVariants2[i][j]][m][k].split(":");
									if(geneVariantLetters.length == 1) {
										if(geneVariantLetters[0] == "^") {
											if(elementDirections2[packVariants2[i][j]] == "+"){
												ctx2.drawImage(imgStart, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}else{
												ctx2.drawImage(imgStart2, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}
										} else if(geneVariantLetters[0] == "#") {
											ctx2.drawImage(imgShift, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
										} else if(geneVariantLetters[0] == "(") {
											if(elementDirections2[packVariants2[i][j]] == "+") {
												ctx2.drawImage(imgASS, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											} else {
												ctx2.drawImage(imgDSS, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}
										} else if(geneVariantLetters[0] == ")") {
											if(elementDirections2[packVariants2[i][j]] == "+") {
												ctx2.drawImage(imgDSS, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											} else {
												ctx2.drawImage(imgASS, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}
										}
									} else {
										if((variantLetters2[packVariants2[i][j]][m][k] + "").indexOf("$") != -1) {
											if((geneVariantLetters[0] + "").indexOf("$") != -1 && (geneVariantLetters[1] + "").indexOf("$")==-1) {
												ctx2.drawImage(imgStop2, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											} else if((geneVariantLetters[1] + "").indexOf("$") != -1 && (geneVariantLetters[0] + "").indexOf("$")==-1) {
												ctx2.drawImage(imgStop, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}
										} else {
											if((geneVariantLetters[0] + "").length > (geneVariantLetters[1] + "").length || (geneVariantLetters[1] + "").indexOf("_") != -1) {
												ctx2.drawImage(imgDEL_AA, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											} else if((geneVariantLetters[0] + "").length < (geneVariantLetters[1] + "").length || (geneVariantLetters[0] + "").indexOf("_") != -1) {
												ctx2.drawImage(imgINS_AA, (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											} else {
												if(variantLetters2[packVariants2[i][j]][m][k].split(":")[1] != variantLetters2[packVariants2[i][j]][m][k].split(":")[0]){
													ctx2.drawImage(img_Letter_Array[variantLetters2[packVariants2[i][j]][m][k].split(":")[1]], (variantRelativeFroms2[packVariants2[i][j]][m][k] + variantRelativeTos2[packVariants2[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}
											}
										}
									}
								}
							} else {
								for( k = 0; k < subElements2[packVariants2[i][j]].length; k++) {
									subElementWidth2 = Math.abs(subElemnetRelativeTos2[packVariants2[i][j]][k] - subElementRelativeFroms2[packVariants2[i][j]][k] + 1);
									//save time and memory by Liran
									if(subElemnetRelativeTos2[packVariants2[i][j]][k]<0 || subElementRelativeFroms2[packVariants2[i][j]][k]>trackLength){
										continue;
									}
									//save time and memory by Liran
									var preType = " ";
									if(k > 0) {
										preType = subElementTypes2[packVariants2[i][j]][k - 1];
									}
									drawPersonalGeneSubElement(subElementRelativeFroms2[packVariants2[i][j]][k], subElemnetRelativeTos2[packVariants2[i][j]][k], subElementWidth2, subElementTypes2[packVariants2[i][j]][k], elementDirections2[packVariants2[i][j]], y, elementColors2[packVariants2[i][j]], preType, ctx2);
									for( m = 0; m < variants2[packVariants2[i][j]][k].length; m++) {
										var geneVariantLetters = variantLetters2[packVariants2[i][j]][k][m].split(":");
										if(geneVariantLetters.length == 1) {
											if(geneVariantLetters[0] == "^") {
												if(elementDirections2[packVariants2[i][j]] == "+") {
													ctx2.drawImage(imgStart, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}else{
													ctx2.drawImage(imgStart2, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}
											} else if(geneVariantLetters[0] == "#") {
												ctx2.drawImage(imgShift, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
											} else if(geneVariantLetters[0] == "(") {
												if(elementDirections2[packVariants2[i][j]] == "+") {
													ctx2.drawImage(imgASS, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												} else {
													ctx2.drawImage(imgDSS, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}
											} else if(geneVariantLetters[0] == ")") {
												if(elementDirections2[packVariants2[i][j]] == "+") {
													ctx2.drawImage(imgDSS, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												} else {
													ctx2.drawImage(imgASS, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}
											}
										} else {
											if((variantLetters2[packVariants2[i][j]][k][m] + "").indexOf("$") != -1) {
												if((geneVariantLetters[0] + "").indexOf("$") != -1 && (geneVariantLetters[1] + "").indexOf("$")==-1) {
													ctx2.drawImage(imgStop2, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												} else if((geneVariantLetters[1] + "").indexOf("$") != -1 && (geneVariantLetters[0] + "").indexOf("$")==-1) {
													ctx2.drawImage(imgStop, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}
											} else {
												if((geneVariantLetters[0] + "").length > (geneVariantLetters[1] + "").length || (geneVariantLetters[1] + "").indexOf("_") != -1) {
													ctx2.drawImage(imgDEL_AA, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												} else if((geneVariantLetters[0] + "").length < (geneVariantLetters[1] + "").length || (geneVariantLetters[0] + "").indexOf("_") != -1) {
													ctx2.drawImage(imgINS_AA, (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												} else {
													if(variantLetters2[packVariants2[i][j]][k][m].split(":")[1] != variantLetters2[packVariants2[i][j]][k][m].split(":")[0]){
														ctx2.drawImage(img_Letter_Array[variantLetters2[packVariants2[i][j]][k][m].split(":")[1]], (variantRelativeFroms2[packVariants2[i][j]][k][m] + variantRelativeTos2[packVariants2[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}
												}
											}
										}
									}
								}
							}
						}
						y = y + 13 + img_height;
					}
					canvas2.addEventListener("mousemove", canvasMousemoveOnPP, false);
					canvas2.addEventListener("click", canvasClickForPersonalGene, false);
				}
			}
			if(mode == "squish" || ((mode == "pack") && (packVariants.length + packVariants2.length > 50 || (geneNodes.length + geneNodes2.length) > parseInt(trackLength / 50) * 50))) {
				squishVariants[squishVariants.length] = [];
				squishVariants[0][0] = 0;
				for( i = 1; i < geneNodes.length; i++) {
					for( j = 0; j < squishVariants.length; j++) {
						if(elementRelativeFroms[i] > elementRelativeTos[squishVariants[j][squishVariants[j].length - 1]]) {
							squishVariants[j][squishVariants[j].length] = i;
							break;
						}
					}
					if(j == squishVariants.length) {
						squishVariants[squishVariants.length] = [];
						squishVariants[j][0] = i;
					}
				}
				/***************************************************************************************************/
				squishVariants2[squishVariants2.length] = [];
				squishVariants2[0][0] = 0;
				for( i = 1; i < geneNodes2.length; i++) {
					for( j = 0; j < squishVariants2.length; j++) {
						if(elementRelativeFroms2[i] > elementRelativeTos2[squishVariants2[j][squishVariants2[j].length - 1]]) {
							squishVariants2[j][squishVariants2[j].length] = i;
							break;
						}
					}
					if(j == squishVariants2.length) {
						squishVariants2[squishVariants2.length] = [];
						squishVariants2[j][0] = i;
					}
				}
				
				canvas1.height = 8 * (squishVariants.length + squishVariants2.length) - 3;
				canvas1.style.height = 8 * (squishVariants.length + squishVariants2.length) - 3;
				canvas2.height = 8 * (squishVariants.length + squishVariants2.length) - 3;
				canvas2.style.height = 8 * (squishVariants.length + squishVariants2.length) - 3;
				ctx1.strokeStyle = "#000";
				ctx1.fillStyle = "#000";
				ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);
				
				y = 0;
				for( i = 0; i < squishVariants.length; i++) {
					for( j = 0; j < squishVariants[i].length; j++) {
						ctx2.fillStyle = elementColors[squishVariants[i][j]];
						for( k = 0; k < subElements[squishVariants[i][j]].length; k++) {
							subElementWidth = Math.abs(subElemnetRelativeTos[squishVariants[i][j]][k] - subElementRelativeFroms[squishVariants[i][j]][k] + 1);
							if(subElementTypes[squishVariants[i][j]][k] == subElementTypeLineValue) {
								ctx2.fillRect(subElementRelativeFroms[squishVariants[i][j]][k], y + 2, subElementWidth, 1);
							} else {
								ctx2.fillRect(subElementRelativeFroms[squishVariants[i][j]][k], y, subElementWidth, 5);
							}
						}
					}
					y = y + 8;
				}
				
				/****************************************************************************/
				for( i = 0; i < squishVariants2.length; i++) {
					for( j = 0; j < squishVariants2[i].length; j++) {
						ctx2.fillStyle = elementColors2[squishVariants2[i][j]];
						for( k = 0; k < subElements2[squishVariants2[i][j]].length; k++) {
							subElementWidth2 = Math.abs(subElemnetRelativeTos2[squishVariants2[i][j]][k] - subElementRelativeFroms2[squishVariants2[i][j]][k] + 1);
							if(subElementTypes2[squishVariants2[i][j]][k] == subElementTypeLineValue) {
								ctx2.fillRect(subElementRelativeFroms2[squishVariants2[i][j]][k], y + 2, subElementWidth2, 1);
							} else {
								ctx2.fillRect(subElementRelativeFroms2[squishVariants2[i][j]][k], y, subElementWidth2, 5);
							}
						}
					}
					y = y + 8;
				}
			}

		}		
	}
}

function showPersonalGeneByImg_OneNode(canvas1, canvas2, geneNode, mode) {
	var geneNodes = geneNode.getElementsByTagName(xmlTagElement);
	var elementFroms = [], elementTos = [], elementIds = [], elementDirections = [], elementColors = [];
	var elementRelativeFroms = [], elementRelativeTos = [];
	var geneNodeName = geneNode.getAttribute(xmlAttributeId);
	var subElements = [], subElementRelativeFroms = [], subElemnetRelativeTos = [], subElementTypes = [];
	var variants = [], variantRelativeFroms = [], variantRelativeTos = [], variantTypes = [], variantIds = [], variantLetters = [];
	var subElementWidth, elementRelativeWidth;
	var geneNodeName_show = geneNodeName;
	var elementStatus = [];
	
	var i, j, k, m;
	var extend_width = 10;
	var img_height = 30, img_width = 21;
	//var img_A, img_B, img_C, img_D, img_E, img_F, img_G, img_H, img_I, img_J, img_K, img_L, img_M, img_N, img_O, img_P, img_Q, img_R, img_S, img_T, img_U, img_V, img_W, img_Y, img_Z;
	var img_Letter_Array = [];
	var imgDEL_AA, imgINS_AA, imgOTH_AA;
	var imgStart, imgStart2, imgStop, imgStop2, imgASS, imgDSS, imgShift, imgStatus;
	var bkgImg_shift, bkgImg_pshift;
	img_Letter_Array["A"] = document.getElementById("img_A");
	img_Letter_Array["B"] = document.getElementById("img_B");
	img_Letter_Array["C"] = document.getElementById("img_C");
	img_Letter_Array["D"] = document.getElementById("img_D");
	img_Letter_Array["E"] = document.getElementById("img_E");
	img_Letter_Array["F"] = document.getElementById("img_F");
	img_Letter_Array["G"] = document.getElementById("img_G");
	img_Letter_Array["H"] = document.getElementById("img_H");
	img_Letter_Array["I"] = document.getElementById("img_I");
	img_Letter_Array["J"] = document.getElementById("img_J");
	img_Letter_Array["K"] = document.getElementById("img_K");
	img_Letter_Array["L"] = document.getElementById("img_L");
	img_Letter_Array["M"] = document.getElementById("img_M");
	img_Letter_Array["N"] = document.getElementById("img_N");
	img_Letter_Array["O"] = document.getElementById("img_O");
	img_Letter_Array["P"] = document.getElementById("img_P");
	img_Letter_Array["Q"] = document.getElementById("img_Q");
	img_Letter_Array["R"] = document.getElementById("img_R");
	img_Letter_Array["S"] = document.getElementById("img_S");
	img_Letter_Array["T"] = document.getElementById("img_T");
	img_Letter_Array["U"] = document.getElementById("img_U");
	img_Letter_Array["V"] = document.getElementById("img_V");
	img_Letter_Array["W"] = document.getElementById("img_W");
	img_Letter_Array["Y"] = document.getElementById("img_Y");
	img_Letter_Array["Z"] = document.getElementById("img_Z");

	imgDEL_AA = document.getElementById("imgDEL_AA");
	imgINS_AA = document.getElementById("imgINS_AA");
	imgOTH_AA = document.getElementById("imgOTH_AA");
	imgStart = document.getElementById("imgStart");
	imgStart2 = document.getElementById("imgStart2");
	imgStop = document.getElementById("imgStop");
	imgStop2 = document.getElementById("imgStop2");
	imgASS = document.getElementById("imgASS");
	imgDSS = document.getElementById("imgDSS");
	imgShift = document.getElementById("imgShift");
	imgStatus = document.getElementById("imgStatus");
	bkgImg_shift = document.getElementById("bkgImg_shift");
	bkgImg_pshift = document.getElementById("bkgImg_pshift");

	var colorStyle = "#000";
	if(geneNodeName == "_refGene") {
		colorStyle = "#8B8B00";
	} else if(geneNodeName == "_ensemblGene") {
		colorStyle = "RGB(109,115,243)";
	} else if(geneNodeName == "_knownGene") {
		colorStyle = "RGB(163,17,90)";
	} else {
		colorStyle = "#000";
	}
	
	personalPannel.Panno.details = [];

	for( i = 0; i < geneNodes.length; i++) {
		elementIds[i] = geneNodes[i].getAttribute(xmlAttributeId);
		elementFroms[i] = geneNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
		elementTos[i] = geneNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
		elementDirections[i] = geneNodes[i].getElementsByTagName(xmlTagDirection)[0].childNodes[0].nodeValue;
		if(geneNodes[i].getElementsByTagName(xmlTagColor).length > 0) {
			elementColors[i] = "RGB(" + geneNodes[i].getElementsByTagName(xmlTagColor)[0].firstChild.nodeValue + ")";
		} else {
			elementColors[i] = colorStyle;
		}
		elementRelativeFroms[i] = parseInt((parseInt(elementFroms[i]) - startIndex) / searchLength * trackLength);
		elementRelativeTos[i] = parseInt((parseInt(elementTos[i]) - startIndex + 1) / searchLength * trackLength);
		
		if(geneNodes[i].getElementsByTagName(xmlTagStatus).length > 0){
			elementStatus[i] = true;
		}else{
			elementStatus[i] = false;
		}

		subElements[i] = geneNodes[i].getElementsByTagName(xmlTagSubElement);
		subElementRelativeFroms[i] = [];
		subElemnetRelativeTos[i] = [];
		subElementTypes[i] = [];

		variants[i] = [];
		variantIds[i] = [];
		variantTypes[i] = [];
		variantRelativeFroms[i] = [];
		variantRelativeTos[i] = [];
		variantLetters[i] = [];

		if(subElements[i].length == 0) {
			subElements[i][0] = " ";
			//virtual subElement Node
			subElementTypes[i][0] = subElementTypeBoxValue;
			subElementRelativeFroms[i][0] = elementRelativeFroms[i];
			subElemnetRelativeTos[i][0] = elementRelativeTos[i];

			variants[i][0] = geneNodes[i].getElementsByTagName(xmlTagVariant);
			variantIds[i][0] = [];
			variantTypes[i][0] = [];
			variantRelativeFroms[i][0] = [];
			variantRelativeTos[i][0] = [];
			variantLetters[i][0] = [];
			for( k = 0; k < variants[i][0].length; k++) {
				variantIds[i][0][k] = variants[i][0][k].getAttribute(xmlAttributeId);
				variantTypes[i][0][k] = variants[i][0][k].getAttribute(xmlAttributeType);
				variantRelativeFroms[i][0][k] = parseInt((parseInt(variants[i][0][k].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
				variantRelativeTos[i][0][k] = parseInt((parseInt(variants[i][0][k].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
				variantLetters[i][0][k] = variants[i][0][k].getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue;
			}
		} else {
			for( j = 0; j < subElements[i].length; j++) {
				subElementTypes[i][j] = subElements[i][j].getAttribute(xmlAttributeType);
				subElementRelativeFroms[i][j] = parseInt((parseInt(subElements[i][j].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
				subElemnetRelativeTos[i][j] = parseInt((parseInt(subElements[i][j].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
				variants[i][j] = subElements[i][j].getElementsByTagName(xmlTagVariant);
				variantIds[i][j] = [];
				variantTypes[i][j] = [];
				variantRelativeFroms[i][j] = [];
				variantRelativeTos[i][j] = [];
				variantLetters[i][j] = [];
				for( k = 0; k < variants[i][j].length; k++) {
					variantIds[i][j][k] = variants[i][j][k].getAttribute(xmlAttributeId);
					variantTypes[i][j][k] = variants[i][j][k].getAttribute(xmlAttributeType);
					variantRelativeFroms[i][j][k] = parseInt((parseInt(variants[i][j][k].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
					variantRelativeTos[i][j][k] = parseInt((parseInt(variants[i][j][k].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
					variantLetters[i][j][k] = variants[i][j][k].getElementsByTagName(xmlTagLetter)[0].childNodes[0].nodeValue;
				}
			}
		}
	}

	if(((/^_/).test(geneNodeName))){
		geneNodeName_show = (geneNodeName + "").replace("_","");
	}
	
	if(canvas1.getContext && canvas2.getContext) {
		var ctx1 = canvas1.getContext('2d');
		var ctx2 = canvas2.getContext('2d');
		if(geneNodes.length == 0) {
			canvas1.height = 10;
			canvas1.style.height = 10;
			canvas2.height = 10;
			canvas2.style.height = 10;
			ctx1.strokeStyle = "#000";
			ctx1.fillStyle = "#000";
			ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);
		} else {
			if(mode == "dense") {
				canvas1.height = img_height + 10;
				canvas1.style.height = img_height + 10;
				canvas2.height = img_height + 10;
				canvas2.style.height = img_height + 10;
				ctx1.strokeStyle = "#000";
				ctx1.fillStyle = "#000";
				ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);

				for( i = 0; i < subElements.length; i++) {
					ctx2.fillStyle = elementColors[i];
					for( j = 0; j < subElements[i].length; j++) {
						subElementWidth = Math.abs(subElemnetRelativeTos[i][j] - subElementRelativeFroms[i][j] + 1);
						switch(subElementTypes[i][j]) {
							case subElementTypeBoxValue:
								ctx2.fillRect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								break;
							case subElementTypeBandValue:
								ctx2.fillRect(subElementRelativeFroms[i][j], 3 + img_height, subElementWidth, 5);
								break;
							case subElementTypeLineValue:
								ctx2.fillRect(subElementRelativeFroms[i][j], 5 + img_height, subElementWidth, 1);
								break;
							case "eBox":
								ctx2.fillRect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								if(elementDirections[i] == "+"){
									ctx2.rect(subElemnetRelativeTos[i][j], img_height, extend_width, 10);
								}else{
									ctx2.rect(subElementRelativeFroms[i][j] - extend_width, img_height, extend_width, 10);
								}
								
								//ctx2.drawImage(imgASS, subElemnetRelativeTos[i][j] - img_width / 2, 0);
								break;
							case "sBand":
								ctx2.rect(subElementRelativeFroms[i][j], 3 + img_height, subElementWidth, 5);
								ctx2.fillRect(subElementRelativeFroms[i][j], 5 + img_height, subElementWidth, 1);
								//ctx2.drawImage(imgDSS, subElemnetRelativeFroms[i][j] - img_width / 2, 0);
								break;
							case "shBox":
								var drawImage_eleWidth = subElementWidth;
								//var drawImage_imgWidth = $(bkgImg_shift).width();
								var drawImage_imgWidth = 1496;
								var drawImage_from = subElementRelativeFroms[i][j];
								var drawImage_drawWidth;
								while(drawImage_eleWidth > 0){
									drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
									ctx2.drawImage(bkgImg_shift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height, drawImage_drawWidth, 10);
									drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
									drawImage_from = drawImage_from + drawImage_drawWidth;
								}
								//ctx2.drawImage(bkgImg_shift, 0, 0, subElementWidth, 10, subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								if(j == 0 || (j > 0 && subElementTypes[i][j - 1] != "shBox" && subElementTypes[i][j - 1] != "seBox")) {
									ctx2.drawImage(imgShift, subElemnetRelativeFroms[i][j] - img_width / 2, 0);
								}
								break;
							case "lBox":
								ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								ctx2.fillRect(subElementRelativeFroms[i][j], 3 + img_height, subElementWidth, 5);
								/*if(j == 0 || (j > 0 && subElementTypes[i][j - 1] != "lBox")) {
									ctx2.drawImage(imgStop, subElemnetRelativeFroms[i][j] - img_width / 2, 0);
								}*/
								break;
							case "skBox":
								ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								ctx2.fillRect(subElementRelativeFroms[i][j], 5 + img_height, subElementWidth, 1);
								//ctx2.drawImage(imgDSS, subElemnetRelativeFroms[i][j] - img_width / 2, 0);
								break;
							case "psBox":
								var drawImage_eleWidth = subElementWidth;
								//var drawImage_imgWidth = $(bkgImg_shift).width();
								var drawImage_imgWidth = 1496;
								var drawImage_from = subElementRelativeFroms[i][j];
								var drawImage_drawWidth;
								while(drawImage_eleWidth > 0){
									drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
									ctx2.drawImage(bkgImg_shift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height, drawImage_drawWidth, 10);
									drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
									drawImage_from = drawImage_from + drawImage_drawWidth;
								}
								//ctx2.drawImage(bkgImg_pshift, 0, 0, subElementWidth, 10, subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								break;
							case "eBand":
								ctx2.fillRect(subElementRelativeFroms[i][j], 3 + img_height, subElementWidth, 5);
								if(elementDirections[i] == "+"){
									ctx2.rect(subElemnetRelativeTos[i][j], 3 + img_height, extend_width, 5);
								}else{
									ctx2.rect(subElementRelativeFroms[i][j] - extend_width, 3 + img_height, extend_width, 5);
								}
								
								//ctx2.drawImage(imgASS, subElemnetRelativeTos[i][j] - img_width / 2, 0);
								break;
							case "seBox":
								var drawImage_eleWidth = subElementWidth;
								//var drawImage_imgWidth = $(bkgImg_shift).width();
								var drawImage_imgWidth = 1496;
								var drawImage_from = subElementRelativeFroms[i][j];
								var drawImage_drawWidth;
								while(drawImage_eleWidth > 0){
									drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
									ctx2.drawImage(bkgImg_shift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height, drawImage_drawWidth, 10);
									drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
									drawImage_from = drawImage_from + drawImage_drawWidth;
								}
								//ctx2.drawImage(bkgImg_shift, 0, 0, subElementWidth, 10, subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								/*if(j == 0 || (j > 0 && subElementTypes[i][j - 1] != "shBox" && subElementTypes[i][j - 1] != "seBox")) {
									ctx2.drawImage(imgShift, subElemnetRelativeFroms[i][j] - img_width / 2, 0);
								}*/
								if(elementDirections[i] == "+"){
									ctx2.rect(subElemnetRelativeTos[i][j], img_height, extend_width, 10);
								}else{
									ctx2.rect(subElementRelativeFroms[i][j] - extend_width, img_height, extend_width, 10);
								}
								
								//ctx2.drawImage(imgASS, subElemnetRelativeTos[i][j] - img_width / 2, 0);
								break;
							case "pseBox":
								var drawImage_eleWidth = subElementWidth;
								//var drawImage_imgWidth = $(bkgImg_shift).width();
								var drawImage_imgWidth = 1496;
								var drawImage_from = subElementRelativeFroms[i][j];
								var drawImage_drawWidth;
								while(drawImage_eleWidth > 0){
									drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
									ctx2.drawImage(bkgImg_shift, 0, 0, drawImage_drawWidth, 10, drawImage_from, img_height, drawImage_drawWidth, 10);
									drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
									drawImage_from = drawImage_from + drawImage_drawWidth;
								}
								//ctx2.drawImage(bkgImg_pshift, 0, 0, subElementWidth, 10, subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								ctx2.rect(subElementRelativeFroms[i][j], img_height, subElementWidth, 10);
								if(elementDirections[i] == "+"){
									ctx2.rect(subElemnetRelativeTos[i][j], img_height, extend_width, 10);
								}else{
									ctx2.rect(subElementRelativeFroms[i][j] - extend_width, img_height, extend_width, 10);
								}
								
								//ctx2.drawImage(imgASS, subElemnetRelativeTos[i][j] - img_width / 2, 0);
								break;
						}
						for( k = 0; k < variants[i][j].length; k++) {
							var geneVariantLetters = variantLetters[i][j][k].split(":");
							if(geneVariantLetters.length == 1){
								if(geneVariantLetters[0] == "^"){
									if(elementDirections[i] == "+"){
										ctx2.drawImage(imgStart, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}else{
										ctx2.drawImage(imgStart2, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}
								}else if(geneVariantLetters[0] == "#"){
									ctx2.drawImage(imgShift, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
								}else if(geneVariantLetters[0] == "("){
									if(elementDirections[i] == "+"){
										ctx2.drawImage(imgASS, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}else{
										ctx2.drawImage(imgDSS, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}
								}else if(geneVariantLetters[0] == ")"){
									if(elementDirections[i] == "+"){
										ctx2.drawImage(imgDSS, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}else{
										ctx2.drawImage(imgASS, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}
								}
							}else{
								if((variantLetters[i][j][k]+"").indexOf("$")!= -1){
									if((geneVariantLetters[0] + "").indexOf("$")!= -1 && (geneVariantLetters[1] + "").indexOf("$")==-1){
										ctx2.drawImage(imgStop2, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}else if((geneVariantLetters[1] + "").indexOf("$") != -1 && (geneVariantLetters[0] + "").indexOf("$")==-1) {
										ctx2.drawImage(imgStop, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}
								}else{
									if((geneVariantLetters[0] + "").length > (geneVariantLetters[1] + "").length || (geneVariantLetters[1] + "").indexOf("_") != -1){
										ctx2.drawImage(imgDEL_AA, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}else if((geneVariantLetters[0] + "").length < (geneVariantLetters[1] + "").length || (geneVariantLetters[0] + "").indexOf("_") != -1){
										ctx2.drawImage(imgINS_AA, (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
									}else{
										if(variantLetters[i][j][k].split(":")[1] != variantLetters[i][j][k].split(":")[0]){
											ctx2.drawImage(img_Letter_Array[variantLetters[i][j][k].split(":")[1]], (variantRelativeFroms[i][j][k] + variantRelativeTos[i][j][k] - img_width) / 2, 0);
										}
									}
								}
							}
						}
					}
				}
			}else{
				var packVariants = [], squishVariants = [];
				if((mode == "pack" || (mode == "full" && geneNodes.length > 50)) && (geneNodes.length <= parseInt(trackLength / 50) * 50)) {//geneNodes.length <= parseInt(trackLength / 50   此判断是假定一个gene最小占位为50，则宽为trackLength，高为50的track可放的最多gene数目
					packVariants[packVariants.length] = [];
					packVariants[0][0] = 0;
					for( i = 1; i < geneNodes.length; i++) {
						for( j = 0; j < packVariants.length; j++) {
							if(elementIds[i] != ".") {
								if((elementRelativeFroms[i] - ctx1.measureText(elementIds[i]).width - 8) > elementRelativeTos[packVariants[j][packVariants[j].length - 1]]) {
									packVariants[j][packVariants[j].length] = i;
									break;
								}
							} else {
								if((elementRelativeFroms[i] - 5) > elementRelativeTos[packVariants[j][packVariants[j].length - 1]]) {
									packVariants[j][packVariants[j].length] = i;
									break;
								}
							}
						}
						if(j == packVariants.length) {
							packVariants[packVariants.length] = [];
							packVariants[j][0] = i;
						}
					}
					if(packVariants.length <= 50) {
						canvas1.height = (13 + img_height) * packVariants.length - 3;
						canvas1.style.height = (13 + img_height) * packVariants.length - 3;
						canvas2.height = (13 + img_height) * packVariants.length - 3;
						canvas2.style.height = (13 + img_height) * packVariants.length - 3;
						
						ctx1.strokeStyle = "#000";
						ctx1.fillStyle = "#000";
						ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);

						y = 10 + img_height;
						for( i = 0; i < packVariants.length; i++) {
							for( j = 0; j < packVariants[i].length; j++) {
								personalPannel.Panno.details[packVariants[i][j]] = [];
								personalPannel.Panno.details[packVariants[i][j]].id = elementIds[packVariants[i][j]];
								personalPannel.Panno.details[packVariants[i][j]].from = elementFroms[packVariants[i][j]];
								personalPannel.Panno.details[packVariants[i][j]].to = elementTos[packVariants[i][j]];
								personalPannel.Panno.details[packVariants[i][j]].left = elementRelativeFroms[packVariants[i][j]];
								personalPannel.Panno.details[packVariants[i][j]].right = elementRelativeTos[packVariants[i][j]];
								personalPannel.Panno.details[packVariants[i][j]].top = y - 10;
								personalPannel.Panno.details[packVariants[i][j]].bottom = y;
								
								if(elementIds[i] != ".") {
									ctx2.fillStyle = elementColors[packVariants[i][j]];
									ctx2.strokeStyle = elementColors[packVariants[i][j]];
									ctx2.fillText(elementIds[packVariants[i][j]], elementRelativeFroms[packVariants[i][j]] - ctx2.measureText(elementIds[packVariants[i][j]]).width - 3, y - 2);
									if(elementStatus[packVariants[i][j]]){
										ctx2.drawImage(imgStatus, elementRelativeFroms[packVariants[i][j]] - 21, y - 10 - img_height);
									}
								}
								
								ctx2.fillStyle = elementColors[packVariants[i][j]];
								ctx2.strokeStyle = elementColors[packVariants[i][j]];

								if(geneNodes[packVariants[i][j]].getElementsByTagName(xmlTagSubElement).length == 0) {
									elementRelativeWidth = elementRelativeTos[packVariants[i][j]] - elementRelativeFroms[packVariants[i][j]] + 1;
									drawGeneByDirectionBox(elementRelativeFroms[packVariants[i][j]], elementRelativeTos[packVariants[i][j]], elementRelativeWidth, elementDirections[packVariants[i][j]], y, ctx2);									
									m = 0;
									for( k = 0; k < variants[packVariants[i][j]][m].length; k++) {
										var geneVariantLetters = variantLetters[packVariants[i][j]][m][k].split(":");
										if(geneVariantLetters.length == 1){
											if(geneVariantLetters[0] == "^"){
												if(elementDirections[packVariants[i][j]] == "+"){
													ctx2.drawImage(imgStart, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}else{
													ctx2.drawImage(imgStart2, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}
											}else if(geneVariantLetters[0] == "#"){
												ctx2.drawImage(imgShift, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
											}else if(geneVariantLetters[0] == "("){
												if(elementDirections[packVariants[i][j]] == "+"){
													ctx2.drawImage(imgASS, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}else{
													ctx2.drawImage(imgDSS, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}
											}else if(geneVariantLetters[0] == ")"){
												if(elementDirections[packVariants[i][j]] == "+"){
													ctx2.drawImage(imgDSS, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}else{
													ctx2.drawImage(imgASS, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}
											}
										}else{
											if(( variantLetters[packVariants[i][j]][m][k]+"").indexOf("$")!= -1){
												if((geneVariantLetters[0] + "").indexOf("$")!= -1 && (geneVariantLetters[1] + "").indexOf("$")==-1){
													ctx2.drawImage(imgStop2, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}else if((geneVariantLetters[1] + "").indexOf("$") != -1 && (geneVariantLetters[0] + "").indexOf("$")==-1) {
													ctx2.drawImage(imgStop, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}
											}else{
												if((geneVariantLetters[0] + "").length > (geneVariantLetters[1] + "").length || (geneVariantLetters[1] + "").indexOf("_") != -1){
													ctx2.drawImage(imgDEL_AA, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}else if((geneVariantLetters[0] + "").length < (geneVariantLetters[1] + "").length || (geneVariantLetters[0] + "").indexOf("_") != -1){
													ctx2.drawImage(imgINS_AA, (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
												}else{
													if(variantLetters[packVariants[i][j]][k][m].split(":")[1] != variantLetters[packVariants[i][j]][k][m].split(":")[0]){
														ctx2.drawImage(img_Letter_Array[variantLetters[packVariants[i][j]][k][m].split(":")[1]], (variantRelativeFroms[packVariants[i][j]][m][k] + variantRelativeTos[packVariants[i][j]][m][k] - img_width) / 2, y - 10 - img_height);
													}
												}
											}
										}
									}
								} else {
									for( k = 0; k < subElements[packVariants[i][j]].length; k++) {
										subElementWidth = Math.abs(subElemnetRelativeTos[packVariants[i][j]][k] - subElementRelativeFroms[packVariants[i][j]][k] + 1);
										//save time and memory by Liran
										if(subElemnetRelativeTos[packVariants[i][j]][k]<0 || subElementRelativeFroms[packVariants[i][j]][k]>trackLength){
											continue;
										}
										//save time and memory by Liran
										var preType = " ";
										if(k>0){
											preType = subElementTypes[packVariants[i][j]][k-1];
										}
										drawPersonalGeneSubElement(subElementRelativeFroms[packVariants[i][j]][k], subElemnetRelativeTos[packVariants[i][j]][k], subElementWidth, subElementTypes[packVariants[i][j]][k], elementDirections[packVariants[i][j]], y, elementColors[packVariants[i][j]], preType, ctx2);
										for(m = 0; m < variants[packVariants[i][j]][k].length; m++){
											var geneVariantLetters = variantLetters[packVariants[i][j]][k][m].split(":");
											if(geneVariantLetters.length == 1){
												if(geneVariantLetters[0] == "^"){
													if(elementDirections[packVariants[i][j]] == "+"){
														ctx2.drawImage(imgStart, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}else{
														ctx2.drawImage(imgStart2, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}
												}else if(geneVariantLetters[0] == "#"){
													ctx2.drawImage(imgShift, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
												}else if(geneVariantLetters[0] == "("){
													if(elementDirections[packVariants[i][j]] == "+"){
														ctx2.drawImage(imgASS, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}else{
														ctx2.drawImage(imgDSS, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}
												}else if(geneVariantLetters[0] == ")"){
													if(elementDirections[packVariants[i][j]] == "+"){
														ctx2.drawImage(imgDSS, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}else{
														ctx2.drawImage(imgASS, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}
												}
											}else{
												if(( variantLetters[packVariants[i][j]][k][m]+"").indexOf("$")!= -1){
													if((geneVariantLetters[0] + "").indexOf("$")!= -1 && (geneVariantLetters[1] + "").indexOf("$")==-1){
														ctx2.drawImage(imgStop2, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}else if((geneVariantLetters[1] + "").indexOf("$") != -1 && (geneVariantLetters[0] + "").indexOf("$")==-1) {
														ctx2.drawImage(imgStop, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}
												}else{
													if((geneVariantLetters[0] + "").length > (geneVariantLetters[1] + "").length || (geneVariantLetters[1] + "").indexOf("_") != -1){
														ctx2.drawImage(imgDEL_AA, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}else if((geneVariantLetters[0] + "").length < (geneVariantLetters[1] + "").length || (geneVariantLetters[0] + "").indexOf("_") != -1){
														ctx2.drawImage(imgINS_AA, (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
													}else{
														if(variantLetters[packVariants[i][j]][k][m].split(":")[1] != variantLetters[packVariants[i][j]][k][m].split(":")[0]){
															ctx2.drawImage(img_Letter_Array[variantLetters[packVariants[i][j]][k][m].split(":")[1]], (variantRelativeFroms[packVariants[i][j]][k][m] + variantRelativeTos[packVariants[i][j]][k][m] - img_width) / 2, y - 10 - img_height);
														}
													}
												}
											}
										}
									}
								}
							}
							y = y + 13 + img_height;
						}
						canvas2.addEventListener("mousemove", canvasMousemoveOnPP, false);
						canvas2.addEventListener("click", canvasClickForPersonalGene, false);

					}
				}
				if(mode == "squish" || ((mode == "pack") && (packVariants.length > 50 || geneNodes.length > parseInt(trackLength / 50) * 50))) {
					squishVariants[squishVariants.length] = [];
					squishVariants[0][0] = 0;
					for( i = 1; i < geneNodes.length; i++) {
						for( j = 0; j < squishVariants.length; j++) {
							if(elementRelativeFroms[i] > elementRelativeTos[squishVariants[j][squishVariants[j].length - 1]]) {
								squishVariants[j][squishVariants[j].length] = i;
								break;
							}
						}
						if(j == squishVariants.length) {
							squishVariants[squishVariants.length] = [];
							squishVariants[j][0] = i;
						}
					}
					canvas1.height = 8 * squishVariants.length  - 3;
					canvas1.style.height = 8 * squishVariants.length - 3;
					canvas2.height = 8 * squishVariants.length - 3;
					canvas2.style.height = 8 * squishVariants.length - 3;
					
					ctx1.strokeStyle = "#000";
					ctx1.fillStyle = "#000";
					ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);

					y = 0;
					for( i = 0; i < squishVariants.length; i++) {
						for( j = 0; j < squishVariants[i].length; j++) {
							ctx2.fillStyle = elementColors[squishVariants[i][j]];
							for( k = 0; k < subElements[squishVariants[i][j]].length; k++) {
								subElementWidth = Math.abs(subElemnetRelativeTos[squishVariants[i][j]][k] - subElementRelativeFroms[squishVariants[i][j]][k] + 1);
								if(subElementTypes[squishVariants[i][j]][k] == subElementTypeLineValue) {
									ctx2.fillRect(subElementRelativeFroms[squishVariants[i][j]][k], y + 2, subElementWidth, 1);
								} else {
									ctx2.fillRect(subElementRelativeFroms[squishVariants[i][j]][k], y, subElementWidth, 5);
								}
							}
						}
						y = y + 8;
					}
				}

			}
		}
	}
}

function drawPersonalGeneSubElement(from, to, width, type, direction, y, colorStyle, preType, ctx){
	var extend_width = 10;
	var img_width = 21;
	var img_height = 30;
	var imgStart, imgStart2, imgStop, imgASS, imgDSS, imgShift;
	var bkgImg_shift, bkgImg_pshift;
	imgStart = document.getElementById("imgStart");
	imgStart2 = document.getElementById("imgStart2");
	imgStop = document.getElementById("imgStop");
	imgASS = document.getElementById("imgASS");
	imgDSS = document.getElementById("imgDSS");
	imgShift = document.getElementById("imgShift");
	bkgImg_shift = document.getElementById("bkgImg_shift");
	bkgImg_pshift = document.getElementById("bkgImg_pshift");
	
	switch(type) {
		case subElementTypeBoxValue:
			ctx.fillRect(from, y - 10, width, 10);
			break;
		case subElementTypeBandValue:
			ctx.fillRect(from, y - 7, width, 5);
			break;
		case subElementTypeLineValue:
			drawIntro(from, to, width, y, direction, colorStyle, ctx);
			break;
		case "eBox":
			ctx.fillRect(from, y - 10, width, 10);
			if(direction == "+"){
				ctx.rect(to, y - 9.5, extend_width, 9);
			}else{
				ctx.rect(from - extend_width, y - 9.5, extend_width, 9);
			}
			
			//ctx.drawImage(imgASS, to - img_width / 2, y - img_height - 10);
			break;
		case "sBand":
			ctx.rect(from, y - 6.5, width, 4);
			ctx.fillRect(from, y - 5, width, 1);
			//ctx.drawImage(imgDSS, from - img_width / 2, y - img_height - 10);
			break;
		case "shBox":
			var drawImage_eleWidth = width;
			//var drawImage_imgWidth = $(bkgImg_shift).width();
			var drawImage_imgWidth = 1496;
			var drawImage_from = from;
			var drawImage_drawWidth;
			while(drawImage_eleWidth > 0){
				drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
				ctx.drawImage(bkgImg_shift, 0, 0, drawImage_drawWidth, 10, drawImage_from, y - 10, drawImage_drawWidth, 10);
				drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
				drawImage_from = drawImage_from + drawImage_drawWidth;
			}
			//ctx.drawImage(bkgImg_shift, 0, 0, width, 10, from, y - 10, width, 10);
			ctx.rect(from, y - 9.5, width, 9);
			/*if(preType != "shBox" && preType != "seBox") {
				ctx.drawImage(imgShift, from - img_width / 2, y - img_height - 10);
			}*/
			break;
		case "lBox":
			ctx.rect(from, y - 9.5, width, 9);
			ctx.fillRect(from, y - 7, width, 5);
			/*if(idx == 0 || (preType != "lBox")) {
				ctx.drawImage(imgStop, from - img_width / 2, y - img_height - 10);
			}*/
			break;
		case "skBox":
			ctx.rect(from, y - 9.5, width, 9);
			ctx.fillRect(from, y - 5, width, 1);
			//ctx.drawImage(imgDSS, from - img_width / 2, y - img_height - 10);
			break;
		case "psBox":
			var drawImage_eleWidth = width;
			//var drawImage_imgWidth = $(bkgImg_pshift).width();
			var drawImage_imgWidth = 1494;
			var drawImage_from = from;
			var drawImage_drawWidth;
			while(drawImage_eleWidth > 0){
				drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
				ctx.drawImage(bkgImg_pshift, 0, 0, drawImage_drawWidth, 10, drawImage_from, y - 10, drawImage_drawWidth, 10);
				drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
				drawImage_from = drawImage_from + drawImage_drawWidth;
			}
			//ctx.drawImage(bkgImg_pshift, 0, 0, width, 10, from, y - 10, width, 10);
			ctx.rect(from, y - 9.5, width, 9);
			break;
		case "eBand":
			ctx.fillRect(from, y - 7, width, 5);
			if(direction == "+"){
				ctx.rect(to, y - 6.5, extend_width, 4);
			}else{
				ctx.rect(from - extend_width, y - 6.5, extend_width, 4);
			}
			
			//ctx.drawImage(imgASS, to - img_width / 2, y - img_height - 10);
			break;
		case "seBox":
			var drawImage_eleWidth = width;
			//var drawImage_imgWidth = $(bkgImg_shift).width();
			var drawImage_imgWidth = 1496;
			var drawImage_from = from;
			var drawImage_drawWidth;
			while(drawImage_eleWidth > 0){
				drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
				ctx.drawImage(bkgImg_shift, 0, 0, drawImage_drawWidth, 10, drawImage_from, y - 10, drawImage_drawWidth, 10);
				drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
				drawImage_from = drawImage_from + drawImage_drawWidth;
			}
			//ctx.drawImage(bkgImg_shift, 0, 0, width, 10, from, y - 10, width, 10);
			ctx.rect(from, y - 9.5, width, 9);
			
			/*if(preType != "shBox" && preType != "seBox") {
				ctx.drawImage(imgShift, from - img_width / 2, y - img_height - 10);
			}*/
			if(direction == "+"){
				ctx.rect(to, y - 9.5, extend_width, 9);
			}else{
				ctx.rect(from - extend_width, y - 9.5, extend_width, 9);
			}
			
			//ctx.drawImage(imgASS, to - img_width / 2, y - img_height - 10);
			break;
		case "pseBox":
			var drawImage_eleWidth = width;
			//var drawImage_imgWidth = $(bkgImg_pshift).width();
			var drawImage_imgWidth = 1494;
			var drawImage_from = from;
			var drawImage_drawWidth;
			while(drawImage_eleWidth > 0){
				drawImage_drawWidth = drawImage_eleWidth < drawImage_imgWidth ? drawImage_eleWidth : drawImage_imgWidth;
				ctx.drawImage(bkgImg_pshift, 0, 0, drawImage_drawWidth, 10, drawImage_from, y - 10, drawImage_drawWidth, 10);
				drawImage_eleWidth = drawImage_eleWidth - drawImage_drawWidth;
				drawImage_from = drawImage_from + drawImage_drawWidth;
			}
			//ctx.drawImage(bkgImg_pshift, 0, 0, width, 10, from, y - 10, width, 10);
			ctx.rect(from, y - 9.5, width, 9);
			if(direction == "+"){
				ctx.rect(to, y - 9.5, extend_width, 9);
			}else{
				ctx.rect(from - extend_width, y - 9.5, extend_width, 9);
			}
			
			//ctx.drawImage(imgASS, to - img_width / 2, y - img_height - 10);
			break;
	}
	ctx.stroke();
}

function drawIntro(from, to, width, y, direction, colorStyle, ctx) {//y is bottom of the gene
	var directionIndex;
	ctx.fillRect(from, y - 5, width, 1);
	ctx.strokeStyle = colorStyle;
	if(direction == "+") {
	//	directionIndex = to;
	//	while(directionIndex - 2 > from) {
		//save time and memory by Liran
		directionIndex = to<(trackLength+3)?to:(trackLength+3);
		while(directionIndex - 2 > (from>-3?from:-3)) {
		//save time and memory by Liran
			ctx.beginPath();
			ctx.moveTo(directionIndex, y - 5);
			ctx.lineTo(directionIndex - 2, y - 7);
			ctx.closePath();
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(directionIndex + 1, y - 5);
			ctx.lineTo(directionIndex - 2, y - 2);
			ctx.closePath();
			ctx.stroke();
			directionIndex = directionIndex - 5;
		}
	} else {
	//	directionIndex = from;
	//	while(directionIndex + 2 < to) {
		//save time and memory by Liran
		directionIndex = from>-3?from:-3;
		while(directionIndex + 2 < (to<(trackLength+3)?to:(trackLength+3))) {
		//save time and memory by Liran
			ctx.beginPath();
			ctx.moveTo(directionIndex, y - 5);
			ctx.lineTo(directionIndex + 2, y - 7);
			ctx.closePath();
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(directionIndex - 1, y - 5);
			ctx.lineTo(directionIndex + 2, y - 2);
			ctx.closePath();
			ctx.stroke();
			directionIndex = directionIndex + 5;
		}
	}
}

function drawGeneByDirectionBox(from, to, width, direction, y, ctx) {
	if(direction == "+") {
		if(width > 5) {
			ctx.fillRect(from, y - 10, width - 5, 10);
			ctx.beginPath();
			ctx.moveTo(to - 4, y - 10);
			ctx.lineTo(to, y - 5);
			ctx.lineTo(to - 4, y);
			ctx.fill();
		} else {
			ctx.beginPath();
			ctx.moveTo(from, y - 10);
			ctx.lineTo(to, y - 5);
			ctx.lineTo(from, y);
			ctx.fill();
		}
	} else {
		if(width > 5) {
			ctx.fillRect(from + 5, y - 10, width - 5, 10);
			ctx.beginPath();
			ctx.moveTo(from + 5, y - 10);
			ctx.lineTo(from, y - 5);
			ctx.lineTo(from + 5, y);
			ctx.fill();
		} else {
			ctx.beginPath();
			ctx.moveTo(to, y - 10);
			ctx.lineTo(from, y - 5);
			ctx.lineTo(to, y);
			ctx.fill();
		}
	}
}

function drawEndOfGene(from, to, y, ctx) {
	if(from < 0) {
		ctx.fillStyle = "#ffffff";
		ctx.strokeStyle = "#000";
		ctx.beginPath();
		ctx.moveTo(0.5, y - 5);
		ctx.lineTo(5.5, y);
		ctx.lineTo(5.5, y - 10);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(5.5, y - 5);
		ctx.lineTo(10.5, y);
		ctx.lineTo(10.5, y - 10);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
	if(to > trackLength) {
		ctx.fillStyle = "#ffffff";
		ctx.strokeStyle = "#000";
		ctx.beginPath();
		ctx.moveTo(trackLength - 0.5, y - 5);
		ctx.lineTo(trackLength - 5.5, y);
		ctx.lineTo(trackLength - 5.5, y - 10);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(trackLength - 5.5, y - 5);
		ctx.lineTo(trackLength - 10.5, y);
		ctx.lineTo(trackLength - 10.5, y - 10);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
}

function showGene(canvas1, canvas2, geneNode, mode) {
	var geneNodes = geneNode.getElementsByTagName(xmlTagElement);
	var elementFroms = [], elementTos = [], elementIds = [], elementDirections = [], elementColors = [];
	var elementRelativeFroms = [], elementRelativeTos = [], elementRelativeWidth;
	var geneNodeName = geneNode.getAttribute(xmlAttributeId);
	var subElements = [], subElementRelativeFroms = [], subElemnetRelativeTos = [], subElementTypes = [];
	var subElementWidth;
	var i, j, k, trackItemIndex;
	var localStorageJsonObj;
	var geneNodeName_show = geneNodeName;

	var Pfanno_Pclns_Node=null;//add by Liran for Pfanno/Pclns detail, null: not Personalpannel track, -1:Pfanno, 0,1,2... Pclns index.

	var colorStyle = "#000";
	if(geneNodeName == "refGene") {
		colorStyle = "#8B8B00";
	} else if(geneNodeName == "ensemblGene") {
		colorStyle = "RGB(109,115,243)";
	} else if(geneNodeName == "knownGene") {
		colorStyle = "RGB(163,17,90)";
	} else {
		colorStyle = "#000";
	}

	for( i = 0; i < trackItems.length; i++) {
		if(geneNodeName == trackItems[i].id) {
			trackItemIndex = i;
			break;
		}
	}
	
	if(((/^_/).test(geneNodeName))){
		geneNodeName_show = (geneNodeName + "").replace("_","");
		//add by Liran for Pfanno/Pclns detail
		if(geneNodeName==personalPannel.Pfanno.id){
			Pfanno_Pclns_Node=-1;
			personalPannel.Pfanno.details = [];
		} else{
			for(var Pclns_idx=0;Pclns_idx<personalPannel.Pclns.length;Pclns_idx++){
				if(geneNodeName==personalPannel.Pclns[Pclns_idx].id){
					Pfanno_Pclns_Node=Pclns_idx;
					personalPannel.Pclns[Pclns_idx].details = [];
				}
			}
		}
		//add by Liran for Pfanno/Pclns detail
	}
	
	if(trackItemIndex< trackItems.length){
		trackItems[trackItemIndex].details = [];
	}

	if(geneNode.getElementsByTagName(xmlTagSubElement).length == 0) {
		for( i = 0; i < geneNodes.length; i++) {
			elementFroms[i] = geneNodes[i].firstChild;
			elementTos[i] = geneNodes[i].childNodes[1];
			if(geneNodes[i].getElementsByTagName(xmlTagDirection).length == 0) {
				elementDirections[i] = '.';
			} else {
				elementDirections[i] = geneNodes[i].getElementsByTagName(xmlTagDirection)[0].firstChild.nodeValue;
			}
			if(geneNodes[i].getElementsByTagName(xmlTagColor).length > 0) {
				elementColors[i] = "RGB(" + geneNodes[i].getElementsByTagName(xmlTagColor)[0].firstChild.nodeValue + ")";
			} else if(geneNodes[i].getAttribute(xmlTagVariant)=="true"){
				elementColors[i] = "#FF0000";
			}else{
				elementColors[i] = colorStyle;
			}
			elementIds[i] = geneNodes[i].getAttribute(xmlAttributeId);
			elementRelativeFroms[i] = parseInt((parseInt(elementFroms[i].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
			elementRelativeTos[i] = parseInt((parseInt(elementTos[i].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);

			if(trackItemIndex< trackItems.length){
				trackItems[trackItemIndex].details[i] = [];
				trackItems[trackItemIndex].details[i].id = elementIds[i];
				trackItems[trackItemIndex].details[i].left = elementRelativeFroms[i];
				trackItems[trackItemIndex].details[i].right = elementRelativeTos[i];
				trackItems[trackItemIndex].details[i].from = elementFroms[i].childNodes[0].nodeValue;
				trackItems[trackItemIndex].details[i].to = elementTos[i].childNodes[0].nodeValue;
			}
			//add by Liran for Pfanno/Pclns details
			if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node==-1){
				personalPannel.Pfanno.details[i] = [];
				personalPannel.Pfanno.details[i].id = elementIds[i];
				personalPannel.Pfanno.details[i].left = elementRelativeFroms[i];
				personalPannel.Pfanno.details[i].right = elementRelativeTos[i];
				personalPannel.Pfanno.details[i].from = elementFroms[i].childNodes[0].nodeValue;
				personalPannel.Pfanno.details[i].to = elementTos[i].childNodes[0].nodeValue;
			} else if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node>=0){
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i] = [];
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i].id = elementIds[i];
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i].left = elementRelativeFroms[i];
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i].right = elementRelativeTos[i];
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i].from = elementFroms[i].childNodes[0].nodeValue;
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i].to = elementTos[i].childNodes[0].nodeValue;
			}
			//add by Liran for Pfanno/Pclns details
		}
		if(canvas1.getContext && canvas2.getContext) {
			var ctx1 = canvas1.getContext('2d');
			var ctx2 = canvas2.getContext('2d');
			if(geneNodes.length == 0) {
				canvas1.height = 10;
				canvas1.style.height = 10;
				canvas2.height = 10;
				canvas2.style.height = 10;
				ctx1.strokeStyle = "#000";
				ctx1.fillStyle = "#000";
				ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);
			} else {
				if(mode == "dense") {
					canvas1.height = 10;
					canvas1.style.height = 10;
					canvas2.height = 10;
					canvas2.style.height = 10;
					ctx1.strokeStyle = "#000";
					ctx1.fillStyle = "#000";
					ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);

					for( i = 0; i < geneNodes.length; i++) {
						ctx2.fillStyle = elementColors[i];
						elementRelativeWidth = Math.abs(parseInt(elementRelativeTos[i] - elementRelativeFroms[i] + 1));
						if(elementDirections[i] == "." || elementRelativeWidth <= 5) {
							ctx2.fillRect(elementRelativeFroms[i], 0, elementRelativeWidth, 10);
						} else {
							if(elementDirections[i] == "+") {
								ctx2.fillRect(elementRelativeFroms[i], 0, elementRelativeWidth - 5, 10);
								ctx2.beginPath();
								ctx2.moveTo(elementRelativeTos[i] - 4, 0);
								ctx2.lineTo(elementRelativeTos[i], 5);
								ctx2.lineTo(elementRelativeTos[i] - 4, 10);
								ctx2.fill();
							} else {
								ctx2.fillRect(elementRelativeFroms[i] + 5, 0, elementRelativeWidth - 5, 10);
								ctx2.beginPath();
								ctx2.moveTo(elementRelativeFroms[i] + 5, 0);
								ctx2.lineTo(elementRelativeFroms[i], 5);
								ctx2.lineTo(elementRelativeFroms[i] + 5, 10);
								ctx2.fill();
							}
						}
						if(trackItemIndex< trackItems.length){
							trackItems[trackItemIndex].details[i].top = 0;
							trackItems[trackItemIndex].details[i].bottom = 10;
						}
						//add by Liran for Pfanno/Pclns details
						if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node==-1){
							personalPannel.Pfanno.details[i].top = 0;
							personalPannel.Pfanno.details[i].bottom = 10;
						} else if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node>=0){
							personalPannel.Pclns[Pfanno_Pclns_Node].details[i].top = 0;
							personalPannel.Pclns[Pfanno_Pclns_Node].details[i].bottom = 10;
						}
						//add by Liran for Pfanno/Pclns details
					}
				} else {
					var packVariants = [], squishVariants = [];
					if((mode == "pack") && (geneNodes.length <= parseInt(trackLength / 50) * 50)) {//geneNodes.length <= parseInt(trackLength / 50   此判断是假定一个gene最小占位为50，则宽为trackLength，高为50的track可放的最多gene数目
						packVariants[packVariants.length] = [];
						packVariants[0][0] = 0;
						for( i = 1; i < geneNodes.length; i++) {
							for( j = 0; j < packVariants.length; j++) {
								if(elementIds[i] != ".") {
									if((elementRelativeFroms[i] - ctx1.measureText(elementIds[i]).width - 8) > elementRelativeTos[packVariants[j][packVariants[j].length - 1]]) {
										packVariants[j][packVariants[j].length] = i;
										break;
									}
								} else {
									if((elementRelativeFroms[i] - 5) > elementRelativeTos[packVariants[j][packVariants[j].length - 1]]) {
										packVariants[j][packVariants[j].length] = i;
										break;
									}
								}
							}
							if(j == packVariants.length) {
								packVariants[packVariants.length] = [];
								packVariants[j][0] = i;
							}
						}
						if(packVariants.length <= 50) {
							canvas1.height = 13 * packVariants.length - 3;
							canvas1.style.height = 13 * packVariants.length - 3;
							canvas2.height = 13 * packVariants.length - 3;
							canvas2.style.height = 13 * packVariants.length - 3;
							
							ctx1.strokeStyle = "#000";
							ctx1.fillStyle = "#000";
							ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);

							y = 10;
							for( i = 0; i < packVariants.length; i++) {
								for( j = 0; j < packVariants[i].length; j++) {
									if(trackItemIndex< trackItems.length){
										trackItems[trackItemIndex].details[packVariants[i][j]].left = elementRelativeFroms[packVariants[i][j]] - ctx2.measureText(elementIds[packVariants[i][j]]).width - 3;
										trackItems[trackItemIndex].details[packVariants[i][j]].top = y - 10;
										trackItems[trackItemIndex].details[packVariants[i][j]].bottom = y;
									}
									//add by Liran for Pfanno/Pclns details
									if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node==-1){
										personalPannel.Pfanno.details[packVariants[i][j]].left = elementRelativeFroms[packVariants[i][j]] - ctx2.measureText(elementIds[packVariants[i][j]]).width - 3;
										personalPannel.Pfanno.details[packVariants[i][j]].top = y - 10;
										personalPannel.Pfanno.details[packVariants[i][j]].bottom = y;
									} else if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node>=0){
										personalPannel.Pclns[Pfanno_Pclns_Node].details[packVariants[i][j]].left = elementRelativeFroms[packVariants[i][j]] - ctx2.measureText(elementIds[packVariants[i][j]]).width - 3;
										personalPannel.Pclns[Pfanno_Pclns_Node].details[packVariants[i][j]].top = y - 10;
										personalPannel.Pclns[Pfanno_Pclns_Node].details[packVariants[i][j]].bottom = y;
									}
									//add by Liran for Pfanno/Pclns details
									if(elementIds[i] != ".") {
										ctx2.fillStyle = elementColors[packVariants[i][j]];
										ctx2.strokeStyle = elementColors[packVariants[i][j]];
										ctx2.fillText(elementIds[packVariants[i][j]], elementRelativeFroms[packVariants[i][j]] - ctx2.measureText(elementIds[packVariants[i][j]]).width - 3, y - 2);
									}
									ctx2.fillStyle = elementColors[packVariants[i][j]];
									ctx2.strokeStyle = elementColors[packVariants[i][j]];
									elementRelativeWidth = Math.abs(parseInt(elementRelativeTos[packVariants[i][j]] - elementRelativeFroms[packVariants[i][j]] + 1));
									if(elementDirections[packVariants[i][j]] == "." || elementRelativeWidth <= 5) {
										ctx2.fillRect(elementRelativeFroms[packVariants[i][j]], y - 10, elementRelativeWidth, 10);
									} else {
										if(elementDirections[packVariants[i][j]] == "+") {
											ctx2.fillRect(elementRelativeFroms[packVariants[i][j]], y - 10, elementRelativeWidth - 5, 10);
											ctx2.beginPath();
											ctx2.moveTo(elementRelativeTos[packVariants[i][j]] - 4, y - 10);
											ctx2.lineTo(elementRelativeTos[packVariants[i][j]], y - 5);
											ctx2.lineTo(elementRelativeTos[packVariants[i][j]] - 4, y);
											ctx2.fill();
										} else {
											ctx2.fillRect(elementRelativeFroms[packVariants[i][j]] + 5, y - 10, elementRelativeWidth - 5, 10);
											ctx2.beginPath();
											ctx2.moveTo(elementRelativeFroms[packVariants[i][j]] + 5, y - 10);
											ctx2.lineTo(elementRelativeFroms[packVariants[i][j]], y - 5);
											ctx2.lineTo(elementRelativeFroms[packVariants[i][j]] + 5, y);
											ctx2.fill();
										}
									}
								}
								y = y + 13;
							}
							canvas2.addEventListener("mousemove", canvasMousemove, false);
							canvas2.addEventListener("click", canvasClickForRepeat, false);
						}
					}
					if(mode == "squish" || ((mode == "pack") && (packVariants.length > 50 || geneNodes.length > parseInt(trackLength / 50) * 50))) {
						squishVariants[squishVariants.length] = [];
						squishVariants[0][0] = 0;
						for( i = 1; i < geneNodes.length; i++) {
							for( j = 0; j < squishVariants.length; j++) {
								if(elementRelativeFroms[i] > elementRelativeTos[squishVariants[j][squishVariants[j].length - 1]]) {
									squishVariants[j][squishVariants[j].length] = i;
									break;
								}
							}
							if(j == squishVariants.length) {
								squishVariants[squishVariants.length] = [];
								squishVariants[j][0] = i;
							}
						}
						canvas1.height = 8 * squishVariants.length - 3;
						canvas1.style.height = 8 * squishVariants.length - 3;
						canvas2.height = 8 * squishVariants.length - 3;
						canvas2.style.height = 8 * squishVariants.length - 3;
						
						ctx1.strokeStyle = "#000";
						ctx1.fillStyle = "#000";
						ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);
						
						y = 0;
						for( i = 0; i < squishVariants.length; i++) {
							for( j = 0; j < squishVariants[i].length; j++) {
								ctx2.fillStyle = elementColors[squishVariants[i][j]];

								if(trackItemIndex< trackItems.length){
									trackItems[trackItemIndex].details[squishVariants[i][j]].top = y;
									trackItems[trackItemIndex].details[squishVariants[i][j]].bottom = y + 5;
								}
								//add by Liran for Pfanno/Pclns details
								if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node==-1){
									personalPannel.Pfanno.details[squishVariants[i][j]].top = y;
									personalPannel.Pfanno.details[squishVariants[i][j]].bottom = y + 5;
								} else if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node>=0){
									personalPannel.Pclns[Pfanno_Pclns_Node].details[squishVariants[i][j]].top = y;
									personalPannel.Pclns[Pfanno_Pclns_Node].details[squishVariants[i][j]].bottom = y + 5;
								}
								//add by Liran for Pfanno/Pclns details
								elementRelativeWidth = Math.abs(parseInt(elementRelativeTos[squishVariants[i][j]] - elementRelativeFroms[squishVariants[i][j]] + 1));
								if(elementDirections[squishVariants[i][j]] == "." || elementRelativeWidth <= 3) {
									ctx2.fillRect(elementRelativeFroms[squishVariants[i][j]], y, elementRelativeWidth, 5);
								} else {
									if(elementDirections[squishVariants[i][j]] == "+") {
										ctx2.fillRect(elementRelativeFroms[squishVariants[i][j]], y, elementRelativeWidth - 3, 5);
										ctx2.beginPath();
										ctx2.moveTo(elementRelativeTos[squishVariants[i][j]] - 2, y);
										ctx2.lineTo(elementRelativeTos[squishVariants[i][j]], y + 2);
										ctx2.lineTo(elementRelativeTos[squishVariants[i][j]] - 2, y + 5);
										ctx2.fill();
									} else {
										ctx2.fillRect(elementRelativeFroms[squishVariants[i][j]] + 3, y, elementRelativeWidth - 3, 5);
										ctx2.beginPath();
										ctx2.moveTo(elementRelativeFroms[squishVariants[i][j]] + 3, y);
										ctx2.lineTo(elementRelativeFroms[squishVariants[i][j]], y + 2);
										ctx2.lineTo(elementRelativeFroms[squishVariants[i][j]] + 3, y + 5);
										ctx2.fill();
									}
								}
							}
							y = y + 8;
						}
					}
				}
			}
		}
	} else {
		for( i = 0; i < geneNodes.length; i++) {
			elementFroms[i] = geneNodes[i].firstChild;
			elementTos[i] = geneNodes[i].childNodes[1];
			elementDirections[i] = elementTos[i].nextSibling.childNodes[0].nodeValue;
			if(geneNodes[i].getElementsByTagName(xmlTagColor).length > 0) {
				elementColors[i] = "RGB(" + geneNodes[i].getElementsByTagName(xmlTagColor)[0].firstChild.nodeValue + ")";
			} else {
				elementColors[i] = colorStyle;
			}
			elementIds[i] = geneNodes[i].getAttribute(xmlAttributeId);
			elementRelativeFroms[i] = parseInt((parseInt(elementFroms[i].childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
			elementRelativeTos[i] = parseInt((parseInt(elementTos[i].childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);

			subElements[i] = geneNodes[i].getElementsByTagName(xmlTagSubElement);
			subElementRelativeFroms[i] = [];
			subElemnetRelativeTos[i] = [];
			subElementTypes[i] = [];

			if(geneNodes[i].getElementsByTagName(xmlTagSubElement).length == 0) {
				subElements[i] = [];
				subElements[i][0] = " ";
				//virtual subElement Node
				subElementTypes[i][0] = subElementTypeBoxValue;
				subElementRelativeFroms[i][0] = elementRelativeFroms[i];
				subElemnetRelativeTos[i][0] = elementRelativeTos[i];
			} else {
				for( j = 0; j < subElements[i].length; j++) {
					subElementTypes[i][j] = subElements[i][j].getAttribute(xmlAttributeType);
					subElementRelativeFroms[i][j] = parseInt((parseInt(subElements[i][j].firstChild.childNodes[0].nodeValue) - startIndex) / searchLength * trackLength);
					subElemnetRelativeTos[i][j] = parseInt((parseInt(subElements[i][j].lastChild.childNodes[0].nodeValue) - startIndex + 1) / searchLength * trackLength);
				}
			}

			if(trackItemIndex< trackItems.length){
				trackItems[trackItemIndex].details[i] = [];
				trackItems[trackItemIndex].details[i].id = elementIds[i];
				trackItems[trackItemIndex].details[i].left = elementRelativeFroms[i];
				trackItems[trackItemIndex].details[i].right = elementRelativeTos[i];
				trackItems[trackItemIndex].details[i].from = elementFroms[i].childNodes[0].nodeValue;
				trackItems[trackItemIndex].details[i].to = elementTos[i].childNodes[0].nodeValue;
			}
			//add by Liran for Pfanno/Pclns details
			if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node==-1){
				personalPannel.Pfanno.details[i] = [];
				personalPannel.Pfanno.details[i].id = elementIds[i];
				personalPannel.Pfanno.details[i].left = elementRelativeFroms[i];
				personalPannel.Pfanno.details[i].right = elementRelativeTos[i];
				personalPannel.Pfanno.details[i].from = elementFroms[i].childNodes[0].nodeValue;
				personalPannel.Pfanno.details[i].to = elementTos[i].childNodes[0].nodeValue;
			} else if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node>=0){
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i] = [];
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i].id = elementIds[i];
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i].left = elementRelativeFroms[i];
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i].right = elementRelativeTos[i];
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i].from = elementFroms[i].childNodes[0].nodeValue;
				personalPannel.Pclns[Pfanno_Pclns_Node].details[i].to = elementTos[i].childNodes[0].nodeValue;
			}
			//add by Liran for Pfanno/Pclns details
		}

		if(canvas1.getContext && canvas2.getContext) {
			var ctx1 = canvas1.getContext('2d');
			var ctx2 = canvas2.getContext('2d');
			if(geneNodes.length == 0) {
				canvas1.height = 10;
				canvas1.style.height = 10;
				canvas2.height = 10;
				canvas2.style.height = 10;
				ctx1.strokeStyle = "#000";
				ctx1.fillStyle = "#000";
				ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);
			} else {
				if(mode == "dense") {
					canvas1.height = 10;
					canvas1.style.height = 10;
					canvas2.height = 10;
					canvas2.style.height = 10;
					ctx1.strokeStyle = "#000";
					ctx1.fillStyle = "#000";
					ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);

					for( i = 0; i < subElements.length; i++) {
						ctx2.fillStyle = elementColors[i];
						///
						for( j = 0; j < subElements[i].length; j++) {
							subElementWidth = Math.abs(subElemnetRelativeTos[i][j] - subElementRelativeFroms[i][j] + 1);
							if(subElementTypes[i][j] == subElementTypeBoxValue) {
								ctx2.fillRect(subElementRelativeFroms[i][j], 0, subElementWidth, 10);
							} else if(subElementTypes[i][j] == subElementTypeLineValue) {
								ctx2.fillRect(subElementRelativeFroms[i][j], 5, subElementWidth, 1);
							} else {
								ctx2.fillRect(subElementRelativeFroms[i][j], 3, subElementWidth, 5);
							}
						}
					}
					for( i = 0; i < geneNodes.length; i++) {
						trackItems[trackItemIndex].details[i].top = 0;
						trackItems[trackItemIndex].details[i].bottom = 10;
					}
					//add by Liran for Pfanno/Pclns details
					if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node==-1){
						personalPannel.Pfanno.details[i].top = 0;
						personalPannel.Pfanno.details[i].bottom = 10;
					} else if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node>=0){
						personalPannel.Pclns[Pfanno_Pclns_Node].details[i].top = 0;
						personalPannel.Pclns[Pfanno_Pclns_Node].details[i].bottom = 10;
					}
					//add by Liran for Pfanno/Pclns details
				} else {
					var packVariants = [], squishVariants = [];
					if((mode == "pack") && (geneNodes.length <= parseInt(trackLength / 50) * 50)) {//geneNodes.length <= parseInt(trackLength / 50   此判断是假定一个gene最小占位为50，则宽为trackLength，高为50的track可放的最多gene数目
						packVariants[packVariants.length] = [];
						packVariants[0][0] = 0;
						for( i = 1; i < geneNodes.length; i++) {
							for( j = 0; j < packVariants.length; j++) {
								if(elementIds[i] != ".") {
									if((elementRelativeFroms[i] - ctx1.measureText(elementIds[i]).width - 8) > elementRelativeTos[packVariants[j][packVariants[j].length - 1]]) {
										packVariants[j][packVariants[j].length] = i;
										break;
									}
								} else {
									if((elementRelativeFroms[i] - 5) > elementRelativeTos[packVariants[j][packVariants[j].length - 1]]) {
										packVariants[j][packVariants[j].length] = i;
										break;
									}
								}
							}
							if(j == packVariants.length) {
								packVariants[packVariants.length] = [];
								packVariants[j][0] = i;
							}
						}
						if(packVariants.length <= 50) {
							canvas1.height = 13 * packVariants.length - 3;
							canvas1.style.height = 13 * packVariants.length - 3;
							canvas2.height = 13 * packVariants.length - 3;
							canvas2.style.height = 13 * packVariants.length - 3;
							
							ctx1.strokeStyle = "#000";
							ctx1.fillStyle = "#000";
							ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);

							y = 10;
							for( i = 0; i < packVariants.length; i++) {
								for( j = 0; j < packVariants[i].length; j++) {
									if(trackItemIndex< trackItems.length){
										trackItems[trackItemIndex].details[packVariants[i][j]].left = elementRelativeFroms[packVariants[i][j]] - ctx2.measureText(elementIds[packVariants[i][j]]).width - 3;
										trackItems[trackItemIndex].details[packVariants[i][j]].top = y - 10;
										trackItems[trackItemIndex].details[packVariants[i][j]].bottom = y;
									}
									//add by Liran for Pfanno/Pclns details
									if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node==-1){
										personalPannel.Pfanno.details[packVariants[i][j]].left = elementRelativeFroms[packVariants[i][j]] - ctx2.measureText(elementIds[packVariants[i][j]]).width - 3;
										personalPannel.Pfanno.details[packVariants[i][j]].top = y - 10;
										personalPannel.Pfanno.details[packVariants[i][j]].bottom = y;
									} else if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node>=0){
										personalPannel.Pclns[Pfanno_Pclns_Node].details[packVariants[i][j]].left = elementRelativeFroms[packVariants[i][j]] - ctx2.measureText(elementIds[packVariants[i][j]]).width - 3;
										personalPannel.Pclns[Pfanno_Pclns_Node].details[packVariants[i][j]].top = y - 10;
										personalPannel.Pclns[Pfanno_Pclns_Node].details[packVariants[i][j]].bottom = y;
									}
									//add by Liran for Pfanno/Pclns details
									if(elementIds[i] != ".") {
										ctx2.fillStyle = elementColors[packVariants[i][j]];
										ctx2.strokeStyle = elementColors[packVariants[i][j]];
										ctx2.fillText(elementIds[packVariants[i][j]], elementRelativeFroms[packVariants[i][j]] - ctx2.measureText(elementIds[packVariants[i][j]]).width - 3, y - 2);
									}
									ctx2.fillStyle = elementColors[packVariants[i][j]];
									//
									ctx2.strokeStyle = elementColors[packVariants[i][j]];

									if(geneNodes[packVariants[i][j]].getElementsByTagName(xmlTagSubElement).length == 0) {
										elementRelativeWidth = elementRelativeTos[packVariants[i][j]] - elementRelativeFroms[packVariants[i][j]] + 1;
										if(elementRelativeWidth <= 5){
											ctx2.fillRect(elementRelativeFroms[packVariants[i][j]], y - 10, elementRelativeWidth, 10);
										}else{
											if(elementDirections[packVariants[i][j]] == "+") {
												ctx2.fillRect(elementRelativeFroms[packVariants[i][j]], y - 10, elementRelativeWidth - 5, 10);
												ctx2.beginPath();
												ctx2.moveTo(elementRelativeTos[packVariants[i][j]] - 4, y - 10);
												ctx2.lineTo(elementRelativeTos[packVariants[i][j]], y - 5);
												ctx2.lineTo(elementRelativeTos[packVariants[i][j]] - 4, y);
												ctx2.fill();
											} else {
												ctx2.fillRect(elementRelativeFroms[packVariants[i][j]] + 5, y - 10, elementRelativeWidth - 5, 10);
												ctx2.beginPath();
												ctx2.moveTo(elementRelativeFroms[packVariants[i][j]] + 5, y - 10);
												ctx2.lineTo(elementRelativeFroms[packVariants[i][j]], y - 5);
												ctx2.lineTo(elementRelativeFroms[packVariants[i][j]] + 5, y);
												ctx2.fill();
											}
										}
										
									} else {
										for( k = 0; k < subElements[packVariants[i][j]].length; k++) {
											subElementWidth = Math.abs(subElemnetRelativeTos[packVariants[i][j]][k] - subElementRelativeFroms[packVariants[i][j]][k] + 1);
											//save time and memory by Liran
											if(subElemnetRelativeTos[packVariants[i][j]][k]<0 || subElementRelativeFroms[packVariants[i][j]][k]>trackLength){
												continue;
											}
											//save time and memory by Liran
											if(subElementTypes[packVariants[i][j]][k] == subElementTypeBoxValue) {
												ctx2.fillRect(subElementRelativeFroms[packVariants[i][j]][k], y - 10, subElementWidth, 10);
											} else if(subElementTypes[packVariants[i][j]][k] == subElementTypeLineValue) {
												ctx2.fillRect(subElementRelativeFroms[packVariants[i][j]][k], y - 5, subElementWidth, 1);
												ctx2.strokeStyle = elementColors[packVariants[i][j]];
												var directionIndex;
												if(elementDirections[packVariants[i][j]] == "+") {
												//	directionIndex = subElemnetRelativeTos[packVariants[i][j]][k];
												//	while(directionIndex - 2 > subElementRelativeFroms[packVariants[i][j]][k]) {
														//save time and memory by Liran
													directionIndex = subElemnetRelativeTos[packVariants[i][j]][k]<(trackLength+3)?subElemnetRelativeTos[packVariants[i][j]][k]:(trackLength+3);
													while(directionIndex - 2 > (subElementRelativeFroms[packVariants[i][j]][k]>-3?subElementRelativeFroms[packVariants[i][j]][k]:-3)) {
														//save time and memory by Liran
														ctx2.beginPath();
														ctx2.moveTo(directionIndex, y - 5);
														ctx2.lineTo(directionIndex - 2, y - 7);
														ctx2.closePath();
														ctx2.stroke();

														ctx2.beginPath();
														ctx2.moveTo(directionIndex + 1, y - 5);
														ctx2.lineTo(directionIndex - 2, y - 2);
														ctx2.closePath();
														ctx2.stroke();
														directionIndex = directionIndex - 5;
													}
												} else {
												//	directionIndex = subElementRelativeFroms[packVariants[i][j]][k];
												//	while(directionIndex + 2 < subElemnetRelativeTos[packVariants[i][j]][k]) {
														//save time and memory by Liran
													directionIndex = subElementRelativeFroms[packVariants[i][j]][k]>-3?subElementRelativeFroms[packVariants[i][j]][k]:-3;
													while(directionIndex + 2 < (subElemnetRelativeTos[packVariants[i][j]][k]<(trackLength+3)?subElemnetRelativeTos[packVariants[i][j]][k]:(trackLength+3))) {
														//save time and memory by Liran
														ctx2.beginPath();
														ctx2.moveTo(directionIndex, y - 5);
														ctx2.lineTo(directionIndex + 2, y - 7);
														ctx2.closePath();
														ctx2.stroke();

														ctx2.beginPath();
														ctx2.moveTo(directionIndex - 1, y - 5);
														ctx2.lineTo(directionIndex + 2, y - 2);
														ctx2.closePath();
														ctx2.stroke();
														directionIndex = directionIndex + 5;
													}
												}
											} else {
												ctx2.fillRect(subElementRelativeFroms[packVariants[i][j]][k], y - 7, subElementWidth, 5);
											}
										}
									}
								}
								y = y + 13;
							}
							canvas2.addEventListener("mousemove", canvasMousemove, false);
							canvas2.addEventListener("click", canvasClick, false);
						}
					}
					if(mode == "squish" || ((mode == "pack") && (packVariants.length > 50 || geneNodes.length > parseInt(trackLength / 50) * 50))) {
						squishVariants[squishVariants.length] = [];
						squishVariants[0][0] = 0;
						for( i = 1; i < geneNodes.length; i++) {
							for( j = 0; j < squishVariants.length; j++) {
								if(elementRelativeFroms[i] > elementRelativeTos[squishVariants[j][squishVariants[j].length - 1]]) {
									squishVariants[j][squishVariants[j].length] = i;
									break;
								}
							}
							if(j == squishVariants.length) {
								squishVariants[squishVariants.length] = [];
								squishVariants[j][0] = i;
							}
						}
						canvas1.height = 8 * squishVariants.length - 3;
						canvas1.style.height = 8 * squishVariants.length - 3;
						canvas2.height = 8 * squishVariants.length - 3;
						canvas2.style.height = 8 * squishVariants.length - 3;
						
						ctx1.strokeStyle = "#000";
						ctx1.fillStyle = "#000";
						ctx1.fillText(geneNodeName_show, canvas1.width - ctx1.measureText(geneNodeName_show).width, 8);

						y = 0;
						for( i = 0; i < squishVariants.length; i++) {
							for( j = 0; j < squishVariants[i].length; j++) {
								ctx2.fillStyle = elementColors[squishVariants[i][j]];
								if(trackItemIndex< trackItems.length){
									trackItems[trackItemIndex].details[squishVariants[i][j]].top = y;
									trackItems[trackItemIndex].details[squishVariants[i][j]].bottom = y + 5;
								}
								//add by Liran for Pfanno/Pclns details
								if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node==-1){
									personalPannel.Pfanno.details[squishVariants[i][j]].top = y;
									personalPannel.Pfanno.details[squishVariants[i][j]].bottom = y + 5;
								} else if(Pfanno_Pclns_Node!=null && Pfanno_Pclns_Node>=0){
									personalPannel.Pclns[Pfanno_Pclns_Node].details[squishVariants[i][j]].top = y;
									personalPannel.Pclns[Pfanno_Pclns_Node].details[squishVariants[i][j]].bottom = y + 5;
								}
								//add by Liran for Pfanno/Pclns details
								for( k = 0; k < subElements[squishVariants[i][j]].length; k++) {
									subElementWidth = Math.abs(subElemnetRelativeTos[squishVariants[i][j]][k] - subElementRelativeFroms[squishVariants[i][j]][k] + 1);
									if(subElementTypes[squishVariants[i][j]][k] == subElementTypeLineValue) {
										ctx2.fillRect(subElementRelativeFroms[squishVariants[i][j]][k], y + 2, subElementWidth, 1);
									} else {
										ctx2.fillRect(subElementRelativeFroms[squishVariants[i][j]][k], y, subElementWidth, 5);
									}
								}
							}
							y = y + 8;
						}
					}
				}
			}
		}
	}
}

function QueryString() {
	var name, value, i;
	var str = window.location.href;
	var num = str.indexOf("?")
	str = str.substr(num + 1);
	var arrtmp = str.split("&");
	for( i = 0; i < arrtmp.length; i++) {
		num = arrtmp[i].indexOf("=");
		if(num > 0) {
			name = arrtmp[i].substring(0, num);
			value = arrtmp[i].substr(num + 1);
			this[name] = value;
		}
	}
	return this;
}

function setAssemblyRequest() {
	var assemblySelect = document.getElementById("assemblySelect");
	var assemblyIndex = assemblySelect.selectedIndex;
	assemblyNum = assemblySelect.options[assemblyIndex].value;
	var url = "servlet/test.do?action=setAssembly&assembly=";
	url = url + assemblyNum;

	XMLHttpReq.onreadystatechange = null;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}

function removeAnnotations() {
	var tableNode = document.getElementById("trackListTable");
	var trNodeNum = tableNode.getElementsByTagName("tr").length;
	while(trNodeNum > 2) {
		tableNode.deleteRow(-1);
		trNodeNum--;
	}
}
function getChrLengthRequest() {
	var url = "servlet/test.do?action=getChromosomes";
	XMLHttpReq.onreadystatechange = handleGetChrLengthStateChange;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}
function handleGetChrLengthStateChange(){
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var XMLDoc = XMLHttpReq.responseXML;
			var text = XMLHttpReq.responseText;
			var chrLengthList = getNodeText(XMLDoc.getElementsByTagName("ChromosomeList")[0]).split(",");
			var i, chrNum_temp, chrLength_temp;
			for(i =0; i< chrLengthList.length;i++){
				chrNum_temp = chrLengthList[i].split(":")[0] + "";
				chrLength_temp = chrLengthList[i].split(":")[1] + "";
				chr_Lengths[chrNum_temp] = chrLength_temp;
			}
			chrLength = chr_Lengths[chrNum];
			setSliderMax();
			var url = "./browser.html";
			if(start_user < 1 || end_user > parseInt(chr_Lengths[chrNum])) {
				if(start_user < 1) {
					start_user = 1;
				}
				if(end_user > parseInt(chr_Lengths[chrNum])) {
					end_user = parseInt(chr_Lengths[chrNum]);
				}
				searchLength_user = end_user - start_user + 1;
				if(searchLength_user< trackLength_user/10){
					if(start_user ==1){
						end_user = trackLength_user/10;
					}else{
						start_user = end_user - trackLength_user/10 + 1;
					}
				}
				searchLength_user = end_user - start_user + 1;
				startIndex = start_user - searchLength_user;
				endIndex = end_user + searchLength_user;
//				url = url + assemblyNum;
				url = url + "?Chr=";
				url = url + chrNum;
				url = url + "&Start=";
				url = url + startIndex;
				url = url + "&End=";
				url = url + endIndex;
//				url = url + "&width=";
//				url = url + "2850";
				window.location.href = url;
				return;
			}
			showuserSearchIndex(start_user, end_user);
			getAnnotationsRequest();
		}
	}
}

function getAnnotationsRequest() {
	var url = "servlet/test.do?action=getAnnotations";
	XMLHttpReq.onreadystatechange = handleGetgetAnnotationsStateChange;
	XMLHttpReq.open("GET", url, false);
	XMLHttpReq.send(null);
}

//use regular expression to trim the blank and '\' in the string
function allTrim(ui) {
	var notValid = /\s|\x2F/;
	while(notValid.test(ui)) {
		ui = ui.replace(notValid, "");
	}
	return ui;
}

function handleGetgetAnnotationsStateChange() {
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var XMLDoc = XMLHttpReq.responseXML;
			var tracks = XMLDoc.getElementsByTagName(xmlTagAnnotationList)[0].childNodes[0].nodeValue;
			var trackList = tracks.split(/,/);
			var trackId;
			var h_idx = 0, pclns_idx = 0;
			for(var i = 0; i < trackList.length; i++) {
				if(trackList[i].split(/:/)[0] == "Pvar"){
					var temp_id_superid = trackList[i].split(/:/)[1];
					personalPannel.Pvar.id = temp_id_superid.split(/@/)[0];
					initPvar_superid = temp_id_superid.split(/@/)[1];
					//personalPannel.Pvar.id = trackList[i].split(/:/)[1];
					personalPannel.Pvar.mode = trackList[i].split(/:/)[2];
				}else if(trackList[i].split(/:/)[0] == "Pfanno"){
					personalPannel.Pfanno.id = trackList[i].split(/:/)[1];
					personalPannel.Pfanno.mode = trackList[i].split(/:/)[2];
				}else if(trackList[i].split(/:/)[0] == "Panno"){
					personalPannel.Panno.id = trackList[i].split(/:/)[1];
					personalPannel.Panno.mode = trackList[i].split(/:/)[2];
				}else if(trackList[i].split(/:/)[0] == "Pclns"){
					personalPannel.Pclns[pclns_idx] = [];
					personalPannel.Pclns[pclns_idx].id = trackList[i].split(/:/)[1];
					personalPannel.Pclns[pclns_idx].mode = trackList[i].split(/:/)[2];
					pclns_idx++;
				}else{
					trackItems[h_idx] = [];
					trackItems[h_idx].group = trackList[i].split(/:/)[0];
					trackItems[h_idx].id = trackList[i].split(/:/)[1];
					trackItems[h_idx].mode = trackList[i].split(/:/)[2];
					trackItems[h_idx].dataType = trackList[i].split(/:/)[3];
					trackItems[h_idx].isServer = 1;
					trackItems[h_idx].details = [];
				
					if(trackItems[h_idx].dataType == "VCF" || trackItems[h_idx].dataType == "GVF") {
						personalPannel.personalTrackItems.Pvars.push("_" + trackItems[h_idx].id);
					}
			//		if(trackItems[h_idx].group == "Disease"){
					if(trackItems[h_idx].dataType == "GDF"){
						personalPannel.personalTrackItems.Pclnss.push("_" + trackItems[h_idx].id);
					}
			//		if(trackItems[h_idx].group == "Regulation"){
					if(trackItems[h_idx].dataType == "GRF"){
						personalPannel.personalTrackItems.Pfannos.push("_" + trackItems[h_idx].id);
					}
			//		if(trackItems[h_idx].group == "Gene"){
					if(trackItems[h_idx].dataType == "ANNO"){
						personalPannel.personalTrackItems.Pannos.push("_" + trackItems[h_idx].id);
					}		
					if(trackItems[h_idx].mode != "hide") {
						createTrack(trackItems[h_idx].id,trackItems[h_idx].mode);
					}
					h_idx++;
				}
			}
			//personal pannel initialize: add tr&canvas
			if(personalPannel.Pvar.id){
				createPPGTrack(personalPannel.Pvar.id, personalPannel.Pvar.mode);
				
				if(personalPannel.Pfanno.id){
					createPPOtherTrack(personalPannel.Pfanno.id, personalPannel.Pfanno.mode);
				}
				if(personalPannel.Panno.id){
					createPPOtherTrack(personalPannel.Panno.id, personalPannel.Panno.mode);
				}
				for(i = 0; i < personalPannel.Pclns.length; i++){
					createPPOtherTrack(personalPannel.Pclns[i].id, personalPannel.Pclns[i].mode);
				}
				
				var PP_top = (document.body.clientHeight + document.body.scrollTop - $("#personalPannel").height() - 10);
			//	var PP_top = (document.body.clientHeight + document.body.scrollTop - $("#personalPannel").height())/2;
				PP_top = PP_top > 100 ? PP_top : 100;//added by Liran
				var PP_left = $("#divTrack").position().left;
				$(document.getElementById("personalPannel")).css("display", "block");
				$(document.getElementById("personalPannel")).css("top", PP_top);
				$(document.getElementById("personalPannel")).css("left", PP_left);
				
				$(document.getElementById("ppCloseBtn")).unbind();
				$(document.getElementById("ppMin")).unbind();
				$(document.getElementById("ppSet")).unbind();
				$(document.getElementById("ppPin")).unbind();
				$(document.getElementById("ppCloseBtn")).click(removePvar);
				$(document.getElementById("ppMin")).click(miniPersonalPannel);
				$(document.getElementById("ppSet")).click(setPersonalPannel);
				$(document.getElementById("ppPin")).click(pinPersonalPannel);
			}
			//custom track initialize
			if($.cookie("customTrackList")) {
				var customTrackList = $.cookie("customTrackList").split(",");
				var j = trackItems.length, k;
				
				for( k = 0; k < customTrackList.length; k++, j++) {
					trackItems[j] = [];
					trackItems[j].id = customTrackList[k].split(/:/)[0];
					trackItems[j].mode = customTrackList[k].split(/:/)[1];
					trackItems[j].dataType = customTrackList[k].split(/:/)[2];
					trackItems[j].isServer = 0;
					
					if(trackItems[j].dataType == "VCF" || trackItems[j].dataType == "GVF") {
						personalPannel.personalTrackItems.Pvars.push("_" + trackItems[j].id);
					}
					
					/* add by Liran to enable customized tracks appear in personal track setting*/
					if(trackItems[j].dataType == "GDF"){
						personalPannel.personalTrackItems.Pclnss.push("_" + trackItems[j].id);
					}
					if(trackItems[j].dataType == "GRF"){
						personalPannel.personalTrackItems.Pfannos.push("_" + trackItems[j].id);
					}
					if(trackItems[j].dataType == "ANNO"){
						personalPannel.personalTrackItems.Pannos.push("_" + trackItems[j].id);
					}		
					/* add by Liran to enable customized tracks appear in personal track setting*/
					if(trackItems[j].mode != "hide") {
						createTrack(trackItems[j].id,trackItems[j].mode);
					}
				}
			}
			showRef();
		}
	}
}
var deleteTrackArray;
function removeTrack2(trackId) {
	return function() {
		var trackItemIndex;
		var i;

		for( i = 0; i < trackItems.length; i++) {
			if(trackItems[i].id == trackId) {
				trackItemIndex = i;
				break;
			}
		}

		if(trackItems[trackItemIndex].superid) {
			removeTrack(trackId);
			
			deleteTrackArray = trackItems.splice(trackItemIndex, 1);
			
			//删除personalPannel.personalTrackItems.Pvars中的的个人基因组记录
			for(var Pvars_i = 0; Pvars_i < personalPannel.personalTrackItems.Pvars.length; Pvars_i++) {
				if(personalPannel.personalTrackItems.Pvars[Pvars_i] == ("_" + deleteTrackArray[0].id)) {
					personalPannel.personalTrackItems.Pvars.splice(Pvars_i, 1);
					break;
				}
			}

			removesubtrackGetparamsRequest(deleteTrackArray[0].superid);

			//trackItems.splice(trackItemIndex,1);

			/*for(i=0 ; i<trackItems.length; i++){
			 if(trackItems[i].superid == deleteTrackArray[0].superid){
			 break;
			 }
			 }
			 if(i >= trackItems.length){
			 var trackItemObj=[];
			 trackItemObj.id = deleteTrackArray[0].superid;
			 trackItemObj.mode = "hide";//先设置为hide，随后在trackModeOnchange中修改
			 trackItemObj.dataType = deleteTrackArray[0].dataType;
			 trackItemObj.group = deleteTrackArray[0].group;
			 trackItemObj.isServer = deleteTrackArray[0].isServer;
			 trackItemObj.details = [];
			 trackItems.push(trackItemObj);

			 //创建super track，并且向后端发送请求获取这条数据进行展示
			 trackModeOnchange(trackItemObj.id,deleteTrackArray[0].mode);
			 }*/
		} else {
			var mode = "hide";
			
			/*
			//为了区别与track table中的tr的id，所以在原有的track的id之上加上“select”来做select元素的id
			var trackSlelectObj = document.getElementById(trackId + "select");

			for( i = 0; i < trackSlelectObj.options.length; i++) {
				if(trackSlelectObj.options[i].text == mode) {
					trackSlelectObj.options[i].selected = true;
					break;
				}
			}*/
			trackModeOnchange(trackId, mode);
		}
	};
}

function removesubtrackGetparamsRequest(superid) {
	var url = "servlet/test.do?" + "action=getParams&tracks=" + superid;
	XMLHttpReq.onreadystatechange = handleRemoveSubtrackGetparamsRequest;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}

function handleRemoveSubtrackGetparamsRequest() {
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var XMLDoc = XMLHttpReq.responseXML;
			var paramNodes = XMLDoc.getElementsByTagName(xmlTagParameter);
			var params = "", values = "", tempvalues = "";
			for(var i = 0; i < paramNodes.length; i++) {
				if(paramNodes[i].getAttribute(xmlAttributeType) == "STRING") {
					if(paramNodes[i].childNodes[0].nodeValue) {
						params = params + paramNodes[i].getAttribute("id") + ";";
						values = values + paramNodes[i].childNodes[0].nodeValue + ";";
					}
				} else if(paramNodes[i].getAttribute(xmlAttributeType) == "CHECKBOX") {
					var options = getNodeText(paramNodes[i].getElementsByTagName(xmlTagOptions)[0]).split(";");
					var option;
					tempvalues = "";
					for(var j = 0; j < options.length; j++) {
						option = options[j].split(':');
						if(option[1] == "1") {
							tempvalues = tempvalues + option[0] + ":";
						}
					}
					if(tempvalues != "") {
						tempvalues = tempvalues.substr(0, tempvalues.length - 1);
					} else {
						tempvalues = "0";
					}
					params = params + paramNodes[i].getAttribute("id") + ";";
					values = values + tempvalues + ";";
				} else if(paramNodes[i].getAttribute(xmlAttributeType) == "VCFSAMPLE") {
					var options = getNodeText(paramNodes[i].getElementsByTagName(xmlTagOptions)[0]).split(";");
					var option;
					tempvalues = "";
					for(var j = 0; j < options.length; j++) {
						option = options[j].split(':');
						if(option[1] == "1") {
							tempvalues = tempvalues + option[0] + ":";
						}
					}
					if(tempvalues != "") {
						tempvalues = tempvalues.substr(0, tempvalues.length - 1);
					} else {
						tempvalues = "0";
					}
					params = params + paramNodes[i].getAttribute("id") + ";";
					values = values + tempvalues + ";";
				}
			}
			params = params.substr(0, params.length - 1);
			values = values.substr(0, values.length - 1);
			values = values.replace(deleteTrackArray[0].id, "0");

			var url = "servlet/test.do?" + "action=setParams&tracks=" + deleteTrackArray[0].superid + "&modes=" + deleteTrackArray[0].mode + "&params=" + params + "&values=" + values;

			XMLHttpReq2.onreadystatechange = function() {
				//do nothing
				if(XMLHttpReq2.readyState == 4) {
					if(XMLHttpReq2.status == 200) {
						var ii;
						for( ii = 0; ii < trackItems.length; ii++) {
							if(trackItems[ii].superid == deleteTrackArray[0].superid) {
								break;
							}
						}
						if(ii >= trackItems.length) {
							trackItems[trackItems.length] = [];
							trackItems[trackItems.length - 1].id = deleteTrackArray[0].superid;
							trackItems[trackItems.length - 1].mode = "hide";
							trackItems[trackItems.length - 1].dataType = deleteTrackArray[0].dataType;
							trackItems[trackItems.length - 1].group = deleteTrackArray[0].group;
							trackItems[trackItems.length - 1].isServer = deleteTrackArray[0].isServer;
							trackItems[trackItems.length - 1].details = [];
							
							/*var trackItemObj = [];
							trackItemObj.id = deleteTrackArray[0].superid;
							trackItemObj.mode = "hide";
							//先设置为hide，随后在trackModeOnchange中修改
							trackItemObj.dataType = deleteTrackArray[0].dataType;
							trackItemObj.group = deleteTrackArray[0].group;
							trackItemObj.isServer = deleteTrackArray[0].isServer;
							trackItemObj.details = [];
							trackItems[trackItems.length] = trackItemObj;*/
							//trackItems.push(trackItemObj);

							//创建super track，并且向后端发送请求获取这条数据进行展示
							trackModeOnchange(deleteTrackArray[0].superid, deleteTrackArray[0].mode);

							//将super track的id加入个人基因组数组Pvars中
							personalPannel.personalTrackItems.Pvars.push("_" + deleteTrackArray[0].superid);
						}
						trackItems_setting2();
					}
				}
			};
			XMLHttpReq2.open("GET", url, true);
			XMLHttpReq2.send(null);

		}
	}
}

var current_superid_mode;
var current_superid;
function trackModeOnchange_superid(trackSuperid, mode){
	var i;
	var old_mode_class,new_mode_class;
	if(mode == "dense"){
		old_mode_class = "packmode";
		new_mode_class = "densemode";
	}else{
		old_mode_class = "densemode";
		new_mode_class = "packmode";
	}
	for(i=0; i< trackItems.length;i++){
		if(trackItems[i].superid){
			if(trackItems[i].superid == trackSuperid){
				trackItems[i].mode = mode;
				document.getElementById(trackItems[i].id).getElementsByClassName(old_mode_class)[0].className = new_mode_class;
			}
		}
	}
	current_superid_mode = mode;
	current_superid = trackSuperid;
	url = "servlet/test.do?action=modiTracks&tracks=" + trackSuperid + "&modes=" + mode;
	XMLHttpReq.onreadystatechange = handle_trackModeOnchange_superid;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}

function handle_trackModeOnchange_superid(){
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var XMLDoc = XMLHttpReq.responseXML;
			var variantNodes = XMLDoc.getElementsByTagName(xmlTagVariants);
			var i, j, variantNode_temp, canvasNodes;
			if(variantNodes.length == 0){
				for(i =0; i < trackItems.length;i++){
					if(trackItems[i].superid && trackItems[i].superid == current_superid){
						overScaleShow(trackItems[i].id);
					}
				}
			}else{
				for(i = 0; i < trackItems.length; i++){
					if(trackItems[i].superid && trackItems[i].superid == current_superid){
						variantNode_temp = null;
						for(j = 0; j < variantNodes.length; j++){
							if(variantNodes[j].getAttribute(xmlAttributeId) == trackItems[i].id){
								variantNode_temp = variantNodes[j];
								break;
							}
						}
						if(variantNode_temp){
							canvasNodes = document.getElementById(trackItems[i].id).getElementsByTagName("canvas");
							showVariant(canvasNodes[0], canvasNodes[1], variantNode_temp, trackItems[i].mode);
						}else{
							overScaleShow(trackItems[i].id);
						}
					}
				}
			}
		}
	}
}

//dense转pack，pack转dense
function changeTrackModeByBtn(trackId){
	return function(){
		var i;
		var trackMode;
		var trNode = document.getElementById(trackId);
		var modechangeBtnSpanObj;
		for(i=0;i<trackItems.length;i++){
			if(trackId == trackItems[i].id){
				trackMode = trackItems[i].mode;
				break;
			}
		}
		if(trackItems[i].superid){
			if(trackMode == "dense"){
				trackModeOnchange_superid(trackItems[i].superid, "pack");
			}else{
				trackModeOnchange_superid(trackItems[i].superid, "dense");
			}
		}else{
			if(trackMode=="dense"){
				trackModeOnchange(trackId,"pack");
				modechangeBtnSpanObj = trNode.getElementsByClassName("densemode")[0];
				modechangeBtnSpanObj.className = "packmode";
			}else{
				trackModeOnchange(trackId,"dense");
				modechangeBtnSpanObj = trNode.getElementsByClassName("packmode")[0];
				modechangeBtnSpanObj.className = "densemode";
			}
		}
	}
}

function createTrack(trackId, mode) {
	var trackTable = document.getElementById("tableTrack");
	var trNode = trackTable.insertRow(-1);
	trNode.id = trackId;
	var modechangeBtnSpan_str = "";
	if(mode){
		if(mode=="pack"){
			modechangeBtnSpan_str = "<span class=\"packmode\"></span>";
		}else if(mode == "dense"){
			modechangeBtnSpan_str = "<span class=\"densemode\"></span>";
		}else{
			modechangeBtnSpan_str = "";
		}
	}
	//<span class=\"setting thickbox\" title=\"setting\" alt=\"#TB_inline?height=300;width=650;inlineId=tracksettingDIV\"></span>
	trNode.style.background = RefBG;
	trNode.innerHTML = "<td class=\"trackOperator\"><span class=\"close\"></span>"+ modechangeBtnSpan_str +"</td><td class=\"trackName\"><canvas width=\"100\" height=\"50\" style=\"background: "+RefBG+"\"></canvas></td><td class=\"trackContent\"><canvas width=\""+ trackLength +"\" height=\"50\" class=\"canvasTrackcontent\" title=\"shift+click and drag to zoom in\"></canvas></td>";
	var canvasNodes = trNode.getElementsByTagName("canvas");
	canvasNodes[0].onmouseover = mouseOver;
	canvasNodes[0].onmouseout = mouseOut;
	canvasNodes[0].onmousedown = mouseDown;

	canvasNodes[1].onmousedown = mouseDownRightCanvas;
	
	addMousewheelEvent(canvasNodes[1], mousewheelHandler);
	
	$(canvasNodes[1]).draggable({ 
		axis: "x" ,
		cursor: "url(./image/Grabber.cur),auto" ,
		drag : function(event, ui) {
			$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
				$(arrayele).css("left", ui.position.left);
			});
			dragDragHandler(ui.position.left);
		},
		stop : function(event, ui){
			dragStopHandler(ui.position.left);
		}
	});
	
	$(canvasNodes[1]).css("left" , $("#refTrack1").css("left"));

	var removeTrackIconObj = trNode.getElementsByClassName("close")[0];

	//通过闭包传递参数
	removeTrackIconObj.onclick = removeTrack2(trackId);
	
	var modechangeIconObj;
	if(mode){
		if(mode=="dense"){
			modechangeIconObj = trNode.getElementsByClassName("densemode")[0];
			modechangeIconObj.onclick = changeTrackModeByBtn(trackId);
		}else if(mode=="pack"){
			modechangeIconObj = trNode.getElementsByClassName("packmode")[0];
			modechangeIconObj.onclick = changeTrackModeByBtn(trackId);
		}
	}

	for(var i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			if(trackItems[i].dataType == "VCF" || trackItems[i].dataType == "GVF") {
				$(canvasNodes[1]).dblclick(function(event) {
					var target = event.target || event.srcElement;
					var trParentNode = target.parentNode.parentNode;
					var trackId = trParentNode.getAttribute("id");
					if(personalPinned){
					}else{
						var trTop = $(trParentNode).position().top - document.body.scrollTop;
						var trLeft = $(trParentNode).position().left;
						if(isMini_personalpannel == 1){
							// if the personal pannel is mini
							var trackTable_width = $("#divTrack").width();
							$(document.getElementById("personalPannel")).css("height", "auto");
							$(document.getElementById("personalPannel")).css("width", trackTable_width);
							$('#showWindowBtn').remove();
						}
						$(document.getElementById("personalPannel")).css("display", "block");
						$(document.getElementById("personalPannel")).css("top", trTop);
						$(document.getElementById("personalPannel")).css("left", trLeft - 1);
						document.getElementById("ppTrackTable").innerHTML = "";
						$(document.getElementById("ppCloseBtn")).unbind();
						$(document.getElementById("ppMin")).unbind();
						$(document.getElementById("ppPin")).unbind();
						$(document.getElementById("ppSet")).unbind();
						$(document.getElementById("ppCloseBtn")).click(removePvar);
						$(document.getElementById("ppMin")).click(miniPersonalPannel);
						$(document.getElementById("ppPin")).click(pinPersonalPannel);
						$(document.getElementById("ppSet")).click(setPersonalPannel);
					}
					addPvarHttpRequest(trackId);
				});
			}
			break;
		}
	}

	//这个function调用的是thickbox.js中的方法
	//tb_init('a.thickbox, area.thickbox, input.thickbox, span.thickbox');
}

/************************************move the personal pannel*****************************/
$(document).ready(function() {
	$("#personalPannelTitle").bind("mousedown", modesedown_in_personalpannel_title);
});

function modesedown_in_personalpannel_title(ev){
	$(document.body).bind("mousemove", mousemove_for_personalpannel);
	$(document.body).bind("mouseup", mouseup_for_personalpannel);
	document.body.onselectstart = function() {
		return false;
	};
	$(document.body).css("-moz-user-select","none");
	$(document.body).css("-webkit-user-select","none");
}

function mouseup_for_personalpannel(ev){
	document.body.onselectstart = function() {
		return true;
	};
	$(document.body).css("-moz-user-select","auto");
	$(document.body).css("-webkit-user-select","auto");
	$(document.body).unbind("mousemove", mousemove_for_personalpannel);
	$(document.body).unbind("mouseup", mouseup_for_personalpannel);
}

function mousemove_for_personalpannel(ev){
	var mouseCoordinates = mouseCoords_in_clientWindow(ev);
	$("#personalPannel").css("top", mouseCoordinates.y);
}
function mouseCoords_in_clientWindow(ev) {
	if(ev.clientX || ev.clientY) {
		return {
			x : ev.clientX + document.body.scrollLeft,
			y : ev.clientY + document.body.scrollTop
		};
	}
	return {
		x : ev.pageX - document.body.scrollLeft + document.body.clientLeft,
		y : ev.pageY - document.body.scrollTop + document.body.clientTop
	};
}
/**************************************************************************************/

function removePvar() {
	if(personalPinned){
		var ppTrackTable = document.getElementById("tableTrack");
		var ptracks=[];
		var j=0;
		for(var i = 0; i<ppTrackTable.rows.length; i++){
			if(ppTrackTable.rows[i].id && ppTrackTable.rows[i].id.substring(0,1)=="_"){
				ptracks[j]=ppTrackTable.rows[i].id;
				j++;
			}
		}
		if(j>0){
			for(j=0;j<ptracks.length;j++){
				removeTrack(ptracks[j]);
			}
		}
		$('#ppBtns').remove();
		isPpBtns=false;
	}else{
		$(document.getElementById("personalPannel")).css("display", "none");
		$(document.getElementById("ppCloseBtn")).unbind();
		$(document.getElementById("ppMin")).unbind();
		$(document.getElementById("ppPin")).unbind();
		$(document.getElementById("ppSet")).unbind();
		if(isMini_personalpannel == 1){
			$('#showWindowBtn').remove();
			isMini_personalpannel = 0;
		}
	}
	XMLHttpReq.onreadystatechange = function() {
		personalPannel.Pvar.id="";
		personalPannel.Pvar.mode="";
		initPvar_superid="";
	};
	document.getElementById("ppTrackTable").innerHTML="";
	XMLHttpReq.open("GET", "servlet/test.do?action=removePvar", false);
	XMLHttpReq.send(null);
}
var isMini_personalpannel = 0;
function miniPersonalPannel() {
	//$(document.getElementById("personalPannel")).css("display", "none");
	var _personalPanel = $('#personalPannel');
	var _width = _personalPanel.css('width');
	var _height = _personalPanel.css('height');
	var _top = _personalPanel.css('top');
	var _left = _personalPanel.css('left');
	isMini_personalpannel = 1;
	
	_personalPanel.animate(
			{ 
            width: 0, 
            height: 0,
            top: $(window).height() / 3,
            left: ($("#divTrack").position().left+1110>$(window).width()-32?$(window).width()-32:$("#divTrack").position().left+1110),
      },
			{
				complete: function(){
						$('body').append('<input type="button" id="showWindowBtn"'
							+ ' style="height:31px; width:32px; border-style:none; background: url(image/mouse-out-32.png); top:'
							+ ($(window).height() / 3 - 16) + 'px; left:' + ($("#divTrack").position().left+1110>$(window).width()-32?$(window).width()-32:$("#divTrack").position().left+1110)
							+ 'px; position:fixed;" />');
						showWindowBtn = $('#showWindowBtn');
						showWindowBtn.mousemove(function(e){
							showWindowBtn.css('background', 'url(image/mouse-over-32.png)');
						});
						showWindowBtn.mouseout(function(e){
							showWindowBtn.css('background', 'url(image/mouse-out-32.png)');
						});
						showWindowBtn.click(function(e){
								_left = $("#divTrack").position().left;
								showWindowBtn.remove();
								_personalPanel.css("display","block");
								_personalPanel.animate(
										{ 
												width: _width, 
												height: "auto",
												top: _top,
												left: _left,
										}
								);
								_personalPanel.css("height","auto");
								isMini_personalpannel = 0;
								//$(window).resize();
						});
						_personalPanel.css("display","none");
				}
			}
	);
}

function setPersonalPannel(){
	var overlayDIV = document.getElementById("overlayDIV");
	$(overlayDIV).css("display","block");
	var ppsLeft = (document.body.clientWidth - $("#personalPannelSetting").width())/2;
	var ppsTop = (document.body.clientHeight - $("#personalPannelSetting").height())/2;
	$("#personalPannelSetting").css("left", ppsLeft);
	$("#personalPannelSetting").css("top", ppsTop);
	$("#personalPannelSetting").css("display","block");
	document.getElementById("ppsCloseBtn").onclick = overlayHide;
	overlayDIV.onclick = overlayHide;
	var PvarTable = document.getElementById("PvarTable");
	var PfannoTable = document.getElementById("PfannoTable");
	var PannoTable = document.getElementById("PannoTable");
	var PclnsTable = document.getElementById("PclnsTable");
	var trNode, tdNode;
	var radioObj, labelObj;
	var i;
	////modified by Liran for scoring method setting
	PvarTable.innerHTML = "";
	var pattern = /<.*?>/g;
	var XMLHttpReq9 = createXMLHttpRequest();
	XMLHttpReq9.open("GET","servlet/test.do?action=getScoreMethods",false);
	XMLHttpReq9.send(null);
	var scoremethlist=XMLHttpReq9.responseText.replace(pattern,"");
	var scoremeths_temp=scoremethlist.split(",");

	for(i = 0; i<scoremeths_temp.length; i++){
		if(i % 4 == 0) {
			trNode = PvarTable.insertRow(-1);
		}
		tdNode = trNode.insertCell(-1);
		radioObj = document.createElement("input");
		radioObj.id = scoremeths_temp[i] + "radio";
		radioObj.type = "radio";
		radioObj.name = "personalVar";
		radioObj.value = scoremeths_temp[i];
		if(scoremeths_temp[i] == scoremethPvar){
			radioObj.checked = true;
		}
		tdNode.appendChild(radioObj);
		labelObj = document.createElement("label");
		labelObj.setAttribute("for", scoremeths_temp[i] + "radio");
		labelObj.innerHTML = scoremeths_temp[i];
		tdNode.appendChild(labelObj);
	
		radioObj.onclick = function(event){
			var target = event.target || event.srcElement;
			scoremethPvar = target.getAttribute("value");

			setScoreMethHttpRequest();
		};
	}
	////modified by Liran for scoring method setting
	PfannoTable.innerHTML = "";
	for(i = 0; i<personalPannel.personalTrackItems.Pfannos.length; i++){
		if(i % 4 == 0) {
			trNode = PfannoTable.insertRow(-1);
		}
		tdNode = trNode.insertCell(-1);
		radioObj = document.createElement("input");
		radioObj.id = personalPannel.personalTrackItems.Pfannos[i] + "radio";
		radioObj.type = "radio";
		radioObj.name = "personalFanno";
		radioObj.value = personalPannel.personalTrackItems.Pfannos[i];
		if(personalPannel.personalTrackItems.Pfannos[i] == personalPannel.Pfanno.id){
			radioObj.checked = true;
		}
		tdNode.appendChild(radioObj);
		labelObj = document.createElement("label");
		labelObj.setAttribute("for", personalPannel.personalTrackItems.Pfannos[i] + "radio");
		labelObj.innerHTML = personalPannel.personalTrackItems.Pfannos[i].substring(1);
		tdNode.appendChild(labelObj);
		
		radioObj.onclick = function(event){
			var target = event.target || event.srcElement;
			var Pfanno_id = target.getAttribute("value").replace("_","");
			
			addPfannoHttpRequest(Pfanno_id);
		};
	}
	PannoTable.innerHTML = "";
	for(i = 0; i<personalPannel.personalTrackItems.Pannos.length; i++){
		if(i % 4 == 0) {
			trNode = PannoTable.insertRow(-1);
		}
		tdNode = trNode.insertCell(-1);
		radioObj = document.createElement("input");
		radioObj.id = personalPannel.personalTrackItems.Pannos[i] + "radio";
		radioObj.type = "radio";
		radioObj.name = "personalAnno";
		radioObj.value = personalPannel.personalTrackItems.Pannos[i];
		if(personalPannel.personalTrackItems.Pannos[i] == personalPannel.Panno.id){
			radioObj.checked = true;
		}
		tdNode.appendChild(radioObj);
		labelObj = document.createElement("label");
		labelObj.setAttribute("for", personalPannel.personalTrackItems.Pannos[i] + "radio");
		labelObj.innerHTML = personalPannel.personalTrackItems.Pannos[i].substring(1);
		tdNode.appendChild(labelObj);
		
		radioObj.onclick = function(event){
			var target = event.target || event.srcElement;
			var Panno_id = target.getAttribute("value").replace("_","");
			
			addPannoHttpRequest(Panno_id);
		};
	}
	PclnsTable.innerHTML = "";
	for(i = 0; i<personalPannel.personalTrackItems.Pclnss.length; i++){
		if(i % 4 == 0) {
			trNode = PclnsTable.insertRow(-1);
		}
		tdNode = trNode.insertCell(-1);
		radioObj = document.createElement("input");
		radioObj.id = personalPannel.personalTrackItems.Pclnss[i] + "chk";
		radioObj.type = "checkbox";
		radioObj.name = "personalClns";
		radioObj.value = personalPannel.personalTrackItems.Pclnss[i];
		for(var j=0; j< personalPannel.Pclns.length;j++){
			if(personalPannel.personalTrackItems.Pclnss[i] == personalPannel.Pclns[j].id){
				radioObj.checked = true;
				break;
			}
		}
		tdNode.appendChild(radioObj);
		labelObj = document.createElement("label");
		labelObj.setAttribute("for", personalPannel.personalTrackItems.Pclnss[i] + "chk");
		labelObj.innerHTML = personalPannel.personalTrackItems.Pclnss[i].substring(1);
		tdNode.appendChild(labelObj);
		
		radioObj.onclick = function(event){
			if(personalPannel.Panno.id && personalPannel.Pfanno.id){
				var target = event.target || event.srcElement;
				var Pclns_id = target.getAttribute("value").replace("_","");
				
				if($(target).attr("checked")){
					addPclnsHttpRequest(Pclns_id);
				}else{
					removePclnsHttpRequest(Pclns_id);
				}
			}else{
				$(pclns_checkboxs[i]).attr("checked", false);
				alert("Please select Pfanno&Panno first!");
			}
		};
	}
}
/******************************************clear button function************************************/
$(document).ready(function() {
	$("#PclnsSetClrBtn").bind("click",remove_all_pclns);
	$("#PfannoSetClrBtn").bind("click", remove_pfanno);
	$("#PannoSetClrBtn").bind("click", remove_panno);
});
function remove_all_pclns(){
	var pclns_checkboxs = document.getElementsByName("personalClns");
	var i;
	for(i=0;i<pclns_checkboxs.length;i++){
		if($(pclns_checkboxs[i]).attr("checked")){
			$(pclns_checkboxs[i]).attr("checked", false);
			$(pclns_checkboxs[i]).click();
			$(pclns_checkboxs[i]).attr("checked", false);
		}
	}
}

function remove_pfanno(){
	if(personalPannel.Pfanno.id){
		if(personalPannel.Pclns.length == 0){
			$(document.getElementById(personalPannel.Pfanno.id + "radio")).attr("checked",false);
			var ppTrackTable;
			if(personalPinned){
				ppTrackTable = document.getElementById("tableTrack");
			}else{
				ppTrackTable = document.getElementById("ppTrackTable");
			}
			var trNode = document.getElementById(personalPannel.Pfanno.id);
			var rowIndex = trNode.rowIndex;
			ppTrackTable.deleteRow(rowIndex);
			var url = "servlet/test.do?action=removePfanno"
			XMLHttpReq.onreadystatechange = function(){};
			XMLHttpReq.open("GET", url, true);
			XMLHttpReq.send(null);
			personalPannel.Pfanno.id = "";
		}else{
			alert("Please delete all Phenotype tracks first!");
		}
	}
}

function remove_panno(){
	if(personalPannel.Panno.id){
		if(personalPannel.Pclns.length == 0){
			$(document.getElementById(personalPannel.Panno.id + "radio")).attr("checked", false);
			var ppTrackTable;
			if(personalPinned){
				ppTrackTable = document.getElementById("tableTrack");
			}else{
				ppTrackTable = document.getElementById("ppTrackTable");
			}
			var trNode = document.getElementById(personalPannel.Panno.id);
			var rowIndex = trNode.rowIndex;
			ppTrackTable.deleteRow(rowIndex);
			var url = "servlet/test.do?action=removePanno"
			XMLHttpReq.onreadystatechange = function(){};
			XMLHttpReq.open("GET", url, true);
			XMLHttpReq.send(null);
			personalPannel.Panno.id = "";
		}else{
			alert("Please delete all Phenotype tracks first!");
		}
	}
}
/***************************************************************************************************/

function removeTrackByCloseBtn_in_personalpannel(trackId){
	return function(){
		if(trackId == personalPannel.Pfanno.id){
			remove_pfanno();
		}else if(trackId == personalPannel.Panno.id){
			remove_panno();
		}else{
			removePclnsHttpRequest((trackId+"").replace(/^_/,""));
		}
//		var ppTop = (document.body.clientHeight + document.body.scrollTop - $("#personalPannel").height() - 10);
//		ppTop = ppTop > 50 ? ppTop : 50;
//		$("#personalPannel").animate({top:ppTop});
		$("#ppTrackTable tbody").sortable({axis:"y" ,cancel:".cannotSortable"});
	};
}

function overlayHide() {
	$("#overlayDIV").css("display","none");
	$("#personalPannelSetting").css("display","none");
}

/*************personal pannel tracks setting toggle function**********/

function pvarSetToggle() {
	$("#PvarSetContent").slideToggle();
}

function pfannoSetToggle() {
	$("#PfannoSetContent").slideToggle();
}

function pannoSetToggle() {
	$("#PannoSetContent").slideToggle();
}

function pclnsSetToggle() {
	$("#PclnsSetContent").slideToggle();
}

/***************************End***************************************/

function setScoreMethHttpRequest() {
	////added by Liran for scoring method setting
	var url = "servlet/test.do?action=setScoreMethod&scoremeth="+scoremethPvar;
	XMLHttpReq.onreadystatechange = handle_addPvar_Request;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}
function addPvarHttpRequest(trackId) {
	var url = "servlet/test.do?action=addPvar&tracks=";
	var P_id, P_track, P_mode;
	var i;
	for(i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			P_id = trackId;
			P_track = trackItems[i].superid ? trackItems[i].superid : trackId;
			P_mode = trackItems[i].mode;
			break;
		}
	}
	
	initPvar_superid = P_track;
	if(P_mode == "hide" || P_mode == ""){
		P_mode = "pack";
	}
	
	url = url + P_track + "&modes=" + P_mode + "&id=" + P_id;

	personalPannel.Pvar.id = "_" + trackId;
	personalPannel.Pvar.mode = P_mode;

	if(personalPinned){
		loadingId = showLoadingImage("tableTrack", "body");
		if(!isPpBtns){
			generate_ppBtns();
		}
	}
	XMLHttpReq.onreadystatechange = handle_addPvar_Request;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}
function addPvarHttpRequest2(PvarID,trackId) {//for add individual directly
	var url = "servlet/test.do?action=addPvar&tracks=";
	var P_mode;
	
	initPvar_superid = trackId;
	P_mode=personalPannel.Pvar.mode;
	if(P_mode == "hide" || P_mode == ""){
		P_mode = "pack";
	}
	
	url = url + trackId + "&modes=" + P_mode + "&id=" + PvarID;

	personalPannel.Pvar.id = "_" + PvarID;
	personalPannel.Pvar.mode = P_mode;

	if(personalPinned){
		loadingId = showLoadingImage("tableTrack", "body");
		if(!isPpBtns){
			generate_ppBtns();
		}
	}
	XMLHttpReq.onreadystatechange = handle_addPvar_Request;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}

function handle_addPvar_Request() {
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var XMLDoc = XMLHttpReq.responseXML;
			var personal_genome_node = XMLDoc.getElementsByTagName(xmlTagVariants)[0];
			var elementNodes = XMLDoc.getElementsByTagName(xmlTagElements);
			var i, j;
			//personal genome
			createPPGTrack(personalPannel.Pvar.id, personalPannel.Pvar.mode);
			var canvasNodes = document.getElementById(personalPannel.Pvar.id).getElementsByTagName("canvas");
			if(personal_genome_node){//Liran to fix bugs in scenario "zoom out larger than 1M, load individual, then zoom in smaller than 1M".
				showVariantByImg(canvasNodes[0], canvasNodes[1], personal_genome_node, personalPannel.Pvar.mode);
			} else {
				overScaleShow(personalPannel.Pvar.id);
			}
			//Pfanno track
			if(personalPannel.Pfanno.id){
				var personal_fanno_node;
				createPPOtherTrack(personalPannel.Pfanno.id, personalPannel.Pfanno.mode);
				for(i=0;i<elementNodes.length;i++){
					if(personalPannel.Pfanno.id == elementNodes[i].getAttribute("id")){
						personal_fanno_node = elementNodes[i];
						break;
					}
				}
				if(personal_fanno_node){//Liran to fix bugs in scenario "zoom out larger than 1M, load individual, then zoom in smaller than 1M".
					canvasNodes = document.getElementById(personalPannel.Pfanno.id).getElementsByTagName("canvas");
					showGene(canvasNodes[0], canvasNodes[1], personal_fanno_node, personalPannel.Pfanno.mode);
				} else {
					overScaleShow(personalPannel.Pfanno.id);
				}
			}
			if(personalPannel.Panno.id){
				var personal_anno_nodes = [];
				for(i=0;i<elementNodes.length;i++){
					if(elementNodes[i].getAttribute("id") == personalPannel.Panno.id){
						personal_anno_nodes.push(elementNodes[i]);
					}
				}
				createPPOtherTrack(personalPannel.Panno.id, personalPannel.Panno.mode);
				canvasNodes = document.getElementById(personalPannel.Panno.id).getElementsByTagName("canvas");
				if(personal_anno_nodes.length == 1){
					showPersonalGeneByImg_OneNode(canvasNodes[0], canvasNodes[1], personal_anno_nodes[0], personalPannel.Panno.mode);
				}else if(personal_anno_nodes.length == 2){
					showPersonalGeneByImg_TwoNode(canvasNodes[0], canvasNodes[1], personal_anno_nodes[0], personal_anno_nodes[1], personalPannel.Panno.mode);
				}else{//Liran to fix bugs in scenario "zoom out larger than 1M, load individual, then zoom in smaller than 1M".
					overScaleShow(personalPannel.Panno.id);
				}
			}
			//Pclns tracks
			if(personalPannel.Pclns.length > 0){
				var pclns_flag;//Liran to fix bugs in scenario "zoom out larger than 1M, load individual, then zoom in smaller than 1M".
				for(i=0;i<personalPannel.Pclns.length;i++){
					pclns_flag = false;
					createPPOtherTrack(personalPannel.Pclns[i].id, personalPannel.Pclns[i].mode);
					for(j=0;j<elementNodes.length;j++){
						if(elementNodes[j].getAttribute("id")==personalPannel.Pclns[i].id){
							pclns_flag = true;
							canvasNodes = document.getElementById(personalPannel.Pclns[i].id).getElementsByTagName("canvas");
							showGene(canvasNodes[0], canvasNodes[1], elementNodes[j], personalPannel.Pclns[i].mode);
							break;
						}
					}
					if(!pclns_flag){
						overScaleShow(personalPannel.Pclns[i].id);
					}
				}
			}
			
			if(personalPinned){
				if(document.getElementById(loadingId)) {
					hideLoadingImage(loadingId);
				}
			}else{
				if(document.getElementById(ppLoadingId)){
					hideLoadingImage(ppLoadingId);
				}
				var ppTop = (document.body.clientHeight + document.body.scrollTop - $("#personalPannel").height() - 10);
				ppTop = ppTop > 100 ? ppTop : 100;
				$("#personalPannel").animate({top:ppTop});
				$("#ppTrackTable tbody").sortable({axis:"y" ,cancel:".cannotSortable"});
			}
		}else{
			var pattern = /<.*?>/g;
			XMLHttpReq12.open("GET","servlet/test.do?action=getCheck&tracks=_"+initPvar_superid,false);
			XMLHttpReq12.send(null);
			var err_text=XMLHttpReq12.responseText.replace(pattern,"");
			if(err_text==null||err_text==""){
				alert("An error occurred while executing the query!\nPlease check the data format and data index.");
			}else{
				alert(err_text);
			}
		}
	}
}

function addPfannoHttpRequest(trackId){
	var url = "servlet/test.do?action=addPfanno&tracks=";
	var P_track, P_mode;
	var i;
	for(i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			P_track = trackId;
			P_mode = trackItems[i].mode;
			break;
		}
	}
	
	if(P_mode == "hide"){
		P_mode = "dense";
	}
	
	url = url + P_track + "&modes=" + P_mode;

	personalPannel.Pfanno.id = "_" + trackId;
	personalPannel.Pfanno.mode = P_mode;

	XMLHttpReq.onreadystatechange = handle_addPfanno_Request;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}

function handle_addPfanno_Request(){
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var XMLDoc = XMLHttpReq.responseXML;
			var elementNodes = XMLDoc.getElementsByTagName(xmlTagElements);
			var i, j;
			
			var ppTrackTable;
			if(personalPinned){
				ppTrackTable = document.getElementById("tableTrack");
			}else{
				ppTrackTable = document.getElementById("ppTrackTable");
			}
			
			for( j = 0; j < personalPannel.personalTrackItems.Pfannos.length; j++) {
				var trNode_Pfanno = document.getElementById(personalPannel.personalTrackItems.Pfannos[j]);
				if(trNode_Pfanno) {
					i = trNode_Pfanno.rowIndex;
					ppTrackTable.deleteRow(i);
					break;
				}
			}
	
			var trNode_Pfanno = document.getElementById(personalPannel.Pfanno.id);
			if(trNode_Pfanno){
				i = trNode_Pfanno.rowIndex;
				ppTrackTable.deleteRow(i);
			}
			var trNode_Panno = document.getElementById(personalPannel.Panno.id);
			if(trNode_Panno){
				i = trNode_Panno.rowIndex;
				ppTrackTable.deleteRow(i);
			}
			for(j=0;j<personalPannel.Pclns.length;j++){
				var trNode_Pclns = document.getElementById(personalPannel.Pclns[j].id);
				if(trNode_Pclns){
					i = trNode_Pclns.rowIndex;
					ppTrackTable.deleteRow(i);
				}
			}
			
			//Pfanno track
			if(personalPannel.Pfanno.id){
				var personal_fanno_node;
				for(i=0;i<elementNodes.length;i++){
					if(personalPannel.Pfanno.id == elementNodes[i].getAttribute("id")){
						personal_fanno_node = elementNodes[i];
						createPPOtherTrack(personalPannel.Pfanno.id, personalPannel.Pfanno.mode);
						canvasNodes = document.getElementById(personalPannel.Pfanno.id).getElementsByTagName("canvas");
						showGene(canvasNodes[0], canvasNodes[1], personal_fanno_node, personalPannel.Pfanno.mode);
						break;
					}
				}
			}
			if(personalPannel.Panno.id){
				var personal_anno_nodes = [];
				for(i=0;i<elementNodes.length;i++){
					if(elementNodes[i].getAttribute("id") == personalPannel.Panno.id){
						personal_anno_nodes.push(elementNodes[i]);
					}
				}
				createPPOtherTrack(personalPannel.Panno.id, personalPannel.Panno.mode);
				canvasNodes = document.getElementById(personalPannel.Panno.id).getElementsByTagName("canvas");
				if(personal_anno_nodes.length == 1){
					showPersonalGeneByImg_OneNode(canvasNodes[0], canvasNodes[1], personal_anno_nodes[0], personalPannel.Panno.mode);
				}else if(personal_anno_nodes.length == 2){
					showPersonalGeneByImg_TwoNode(canvasNodes[0], canvasNodes[1], personal_anno_nodes[0], personal_anno_nodes[1], personalPannel.Panno.mode);
				}
			}
			//Pclns tracks
			if(personalPannel.Pclns.length > 0){
				for(i=0;i<personalPannel.Pclns.length;i++){
					for(j=0;j<elementNodes.length;j++){
						if(elementNodes[j].getAttribute("id")==personalPannel.Pclns[i].id){
							createPPOtherTrack(personalPannel.Pclns[i].id, personalPannel.Pclns[i].mode);
							canvasNodes = document.getElementById(personalPannel.Pclns[i].id).getElementsByTagName("canvas");
							showGene(canvasNodes[0], canvasNodes[1], elementNodes[j], personalPannel.Pfanno.mode);
							break;
						}
					}
				}
			}
//			var ppTop = (document.body.clientHeight + document.body.scrollTop - $("#personalPannel").height() - 10);
//			ppTop = ppTop > 50 ? ppTop : 50;
//			$("#personalPannel").animate({top:ppTop});
		}
	}
}

function addPannoHttpRequest(trackId){
	var url = "servlet/test.do?action=addPanno&tracks=";
	var P_track, P_mode;
	var i;
	for(i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			P_track = trackId;
			P_mode = trackItems[i].mode;
			break;
		}
	}
	
	if(P_mode == "hide"){
		P_mode = "dense";
	}
	
	url = url + P_track + "&modes=" + P_mode;

	personalPannel.Panno.id = "_" + trackId;
	personalPannel.Panno.mode = P_mode;

	XMLHttpReq.onreadystatechange = handle_addPanno_Request;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}

function handle_addPanno_Request(){
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var XMLDoc = XMLHttpReq.responseXML;
			var elementNodes = XMLDoc.getElementsByTagName(xmlTagElements);
			var i, j;
			
			var ppTrackTable;
			if(personalPinned){
				ppTrackTable = document.getElementById("tableTrack");
			}else{
				ppTrackTable = document.getElementById("ppTrackTable");
			}
			for( j = 0; j < personalPannel.personalTrackItems.Pannos.length; j++) {
				var trNode_Panno = document.getElementById(personalPannel.personalTrackItems.Pannos[j]);
				if(trNode_Panno) {
					i = trNode_Panno.rowIndex;
					ppTrackTable.deleteRow(i);
					break;
				}
			}
			for(j=0;j<personalPannel.Pclns.length;j++){
				var trNode_Pclns = document.getElementById(personalPannel.Pclns[j].id);
				if(trNode_Pclns){
					i = trNode_Pclns.rowIndex;
					ppTrackTable.deleteRow(i);
				}
			}
			
			if(personalPannel.Panno.id){
				var personal_anno_nodes = [];
				for(i=0;i<elementNodes.length;i++){
					if(elementNodes[i].getAttribute("id") == personalPannel.Panno.id){
						personal_anno_nodes.push(elementNodes[i]);
					}
				}
				createPPOtherTrack(personalPannel.Panno.id, personalPannel.Panno.mode);
				canvasNodes = document.getElementById(personalPannel.Panno.id).getElementsByTagName("canvas");
				if(personal_anno_nodes.length == 1){
					showPersonalGeneByImg_OneNode(canvasNodes[0], canvasNodes[1], personal_anno_nodes[0], personalPannel.Panno.mode);
				}else if(personal_anno_nodes.length == 2){
					showPersonalGeneByImg_TwoNode(canvasNodes[0], canvasNodes[1], personal_anno_nodes[0], personal_anno_nodes[1], personalPannel.Panno.mode);
				}
			}
			//Pclns tracks
			if(personalPannel.Pclns.length > 0){
				for(i=0;i<personalPannel.Pclns.length;i++){
					for(j=0;j<elementNodes.length;j++){
						if(elementNodes[j].getAttribute("id")==personalPannel.Pclns[i].id){
							createPPOtherTrack(personalPannel.Pclns[i].id, personalPannel.Pclns[i].mode);
							canvasNodes = document.getElementById(personalPannel.Pclns[i].id).getElementsByTagName("canvas");
							showGene(canvasNodes[0], canvasNodes[1], elementNodes[j], personalPannel.Pfanno.mode);
							break;
						}
					}
				}
			}
//			var ppTop = (document.body.clientHeight + document.body.scrollTop - $("#personalPannel").height() - 10);
//			ppTop = ppTop > 50 ? ppTop : 50;
//			$("#personalPannel").animate({top:ppTop});
		}
	}
}


function addPclnsHttpRequest(trackId){
	var url = "servlet/test.do?action=addPclns&tracks=";
	var P_track, P_mode;
	var i;
	for(i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == trackId) {
			P_track = trackId;
			P_mode = trackItems[i].mode;
			break;
		}
	}
	
	if(P_mode == "hide"){
		P_mode = "dense";
	}
	
	url = url + P_track + "&modes=" + P_mode;
	
	personalPannel.Pclns[personalPannel.Pclns.length] = [];
	personalPannel.Pclns[personalPannel.Pclns.length - 1].id = "_" + trackId;
	personalPannel.Pclns[personalPannel.Pclns.length - 1].mode = P_mode;

	XMLHttpReq.onreadystatechange = handle_addPclns_Request;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}
function handle_addPclns_Request(){
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var XMLDoc = XMLHttpReq.responseXML;
			var elementNode = XMLDoc.getElementsByTagName(xmlTagElements)[0];
			
			createPPOtherTrack(personalPannel.Pclns[personalPannel.Pclns.length - 1].id, personalPannel.Pclns[personalPannel.Pclns.length - 1].mode);
			canvasNodes = document.getElementById(personalPannel.Pclns[personalPannel.Pclns.length - 1].id).getElementsByTagName("canvas");
			showGene(canvasNodes[0], canvasNodes[1], elementNode, personalPannel.Pclns[personalPannel.Pclns.length - 1].mode);
			
//			var ppTop = (document.body.clientHeight + document.body.scrollTop - $("#personalPannel").height() - 10);
//			ppTop = ppTop > 50 ? ppTop : 50;
//			$("#personalPannel").animate({top:ppTop});
		}
	}
}

function removePclnsHttpRequest(trackId){
	var url = "servlet/test.do?action=removePclns&tracks=" + trackId;
	for(var i=0;i<personalPannel.Pclns.length;i++){
		if(personalPannel.Pclns[i].id == "_"+trackId){
			personalPannel.Pclns.splice(i,1);
			break;
		}
	}
	
	var ppTrackTable;
	if(personalPinned){
		ppTrackTable = document.getElementById("tableTrack");
	}else{
		ppTrackTable = document.getElementById("ppTrackTable");
	}
	var trNode = document.getElementById("_" + trackId);
	var rowIndex = trNode.rowIndex;
	ppTrackTable.deleteRow(rowIndex);
	
	XMLHttpReq.onreadystatechange = function(){};
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}
var current_personal_track, current_personal_track_group, current_personal_track_mode;
function ppTrackModeChangeRequest(trackId, mode){
	var temp_track = (trackId + "").replace(/^_/,"");
	var param_tracks,param_id,param_action;
	var url = "servlet/test.do?action=";
	var group;
	var i;
	if(trackId == personalPannel.Pvar.id){
		for(i=0; i< trackItems.length; i++){
			if(trackItems[i].id == temp_track){
				param_id = temp_track;
				param_tracks = trackItems[i].superid ? trackItems[i].superid : temp_track;
				break;
			}
		}
		if(param_id + "." == "undefined." || param_tracks + "." == "undefined."){
			param_id = temp_track;
			param_tracks = initPvar_superid;
		}
		personalPannel.Pvar.mode = mode;
		param_action = "modiPvar";
		url = url + param_action + "&tracks=" + param_tracks + "&modes=" + mode + "&id=" + param_id;
		group = "Pvar";
	}else{
		if(trackId == personalPannel.Pfanno.id){
			personalPannel.Pfanno.mode = mode;
			param_action = "modiPfanno";
			group = "Pfanno";
		}else if(trackId == personalPannel.Panno.id){
			personalPannel.Panno.mode = mode;
			param_action = "modiPanno";
			group = "Panno";
		}else{
			for(i = 0;i<personalPannel.Pclns.length;i++){
				if(personalPannel.Pclns[i].id == trackId){
					personalPannel.Pclns[i].mode = mode;
					break;
				}
			}
			param_action = "modiPclns";
			group = "Pclns";
		}
		param_tracks = temp_track;
		url = url + param_action + "&tracks=" + param_tracks + "&modes=" + mode;
	}
	current_personal_track = trackId;
	current_personal_track_group = group;
	current_personal_track_mode = mode;
	XMLHttpReq.onreadystatechange = handle_ppTrackModeChangeRequest;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}

function handle_ppTrackModeChangeRequest(){
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var group = current_personal_track_group;
			var trackId = current_personal_track;
			var mode = current_personal_track_mode;
			var XMLDoc = XMLHttpReq.responseXML;
			var canvasNodes = document.getElementById(trackId).getElementsByTagName("canvas");
			var elementNodes = XMLDoc.getElementsByTagName(xmlTagElements);
			var i;
			if(group == "Pvar") {
				var personal_genome_node = XMLDoc.getElementsByTagName(xmlTagVariants)[0];
				showVariantByImg(canvasNodes[0], canvasNodes[1], personal_genome_node, mode);
			} else if(group == "Pfanno") {
				var personal_fanno_node;
				for( i = 0; i < elementNodes.length; i++) {
					if(personalPannel.Pfanno.id == elementNodes[i].getAttribute("id")) {
						personal_fanno_node = elementNodes[i];
						showGene(canvasNodes[0], canvasNodes[1], personal_fanno_node, mode);
						break;
					}
				}
			} else if(group == "Panno") {
				var personal_anno_nodes = [];
				for( i = 0; i < elementNodes.length; i++) {
					if(elementNodes[i].getAttribute("id") == personalPannel.Panno.id) {
						personal_anno_nodes.push(elementNodes[i]);
					}
				}
				if(personal_anno_nodes.length == 1) {
					showPersonalGeneByImg_OneNode(canvasNodes[0], canvasNodes[1], personal_anno_nodes[0], mode);
				} else if(personal_anno_nodes.length == 2) {
					showPersonalGeneByImg_TwoNode(canvasNodes[0], canvasNodes[1], personal_anno_nodes[0], personal_anno_nodes[1], mode);
				}
			} else {
				var personal_clns_node;
				for( i = 0; i < elementNodes.length; i++) {
					if(elementNodes[i].getAttribute("id") == trackId) {
						personal_clns_node = elementNodes[i];
						showGene(canvasNodes[0], canvasNodes[1], personal_clns_node, mode);
						break;
					}
				}
			}
//			var ppTop = (document.body.clientHeight + document.body.scrollTop - $("#personalPannel").height() - 10);
//			ppTop = ppTop > 50 ? ppTop : 50;
//			$("#personalPannel").animate({top:ppTop});
			$("#ppTrackTable tbody").sortable({axis:"y" ,cancel:".cannotSortable"});
		}
	}
}

function changePPTrackModeByBtn(trackId){
	return function(){
		var trNode = document.getElementById(trackId);
		var modechangeBtnSpanObj;
		if(trNode.getElementsByClassName("densemode").length>0){
			ppTrackModeChangeRequest(trackId, "pack");
			modechangeBtnSpanObj = trNode.getElementsByClassName("densemode")[0];
			modechangeBtnSpanObj.className = "packmode";
		}else{
			ppTrackModeChangeRequest(trackId, "dense");
			modechangeBtnSpanObj = trNode.getElementsByClassName("packmode")[0];
			modechangeBtnSpanObj.className = "densemode";
		}
	}
}

function createPPGTrack(trackId, mode) {

	var ppTrackTable;
	var trNode;
	if(personalPinned){
		ppTrackTable = document.getElementById("tableTrack");
		var ptracks=[];
		var j=0;
		for(var i = 0; i<ppTrackTable.rows.length; i++){
			if(ppTrackTable.rows[i].id && ppTrackTable.rows[i].id.substring(0,1)=="_"){
				ptracks[j]=ppTrackTable.rows[i].id;
				j++;
			}
		}
		if(j>0){
			for(j=0;j<ptracks.length;j++){
				removeTrack(ptracks[j]);
			}
		}
		trNode = ppTrackTable.insertRow(1);
	}else{
		ppTrackTable = document.getElementById("ppTrackTable");
		document.getElementById("ppTrackTable").innerHTML = "";
		trNode = ppTrackTable.insertRow(-1);
	}
	trNode.id = trackId;
	var modechangeBtnSpan_str = "";
	if(mode){
		if(mode=="pack"){
			modechangeBtnSpan_str = "<span class=\"packmode\"></span>";
		}else if(mode == "dense"){
			modechangeBtnSpan_str = "<span class=\"densemode\"></span>";
		}else{
			modechangeBtnSpan_str = "";
		}
	}
	trNode.style.background = ppBG;
	if(personalPinned){
		trNode.innerHTML = "<td class=\"trackOperator\"><div style=\"width:50px;margin:0;padding:0;border:0;\">"+ modechangeBtnSpan_str +"</div></td><td class=\"trackName\"><canvas width=\"100\" height=\"50\" style=\"background: "+ppBG+"\"></canvas></td><td class=\"trackContent\"><div style=\"width:940px;overflow:hidden;padding:0;margin:0;border:0;\"><canvas width=\""+ trackLength +"\" height=\"50\" class=\"canvasTrackcontent\" title=\"shift+click and drag to zoom in\"></canvas></div></td>";
	}else{
		trNode.innerHTML = "<td class=\"trackOperator cannotSortable\"><div style=\"width:50px;margin:0;padding:0;border:0;\">"+ modechangeBtnSpan_str +"</div></td><td class=\"trackName\"><canvas width=\"100\" height=\"50\" style=\"background: "+ppBG+"\"></canvas></td><td class=\"trackContent cannotSortable\"><div style=\"width:940px;overflow:hidden;padding:0;margin:0;border:0;\"><canvas width=\""+ trackLength +"\" height=\"50\" class=\"canvasTrackcontent\" title=\"shift+click and drag to zoom in\"></canvas></div></td>";
	}
	var canvasNodes = trNode.getElementsByTagName("canvas");
	canvasNodes[0].onmouseover = mouseOver;
	canvasNodes[0].onmouseout = mouseOut;

	if(personalPinned){
		canvasNodes[0].onmousedown =  mouseDown;
		canvasNodes[1].onmousedown =  mouseDownRightCanvas;
	}else{
		canvasNodes[1].onmousedown =  mouseDownRightCanvasInPP;
	}
	//$(canvasNodes[1]).bind("mousedown", mouseDownRightCanvasInPP);
	
	addMousewheelEvent(canvasNodes[1], mousewheelHandler);
	
	$(canvasNodes[1]).css("left" , $("#refTrack1").css("left"));
	
	$(canvasNodes[1]).draggable({ 
		axis: "x" ,
		cursor: "url(./image/Grabber.cur),auto" ,
		drag : function(event, ui) {
			$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
				$(arrayele).css("left", ui.position.left);
			});
			dragDragHandler(ui.position.left);
		},
		stop : function(event, ui){
			dragStopHandler(ui.position.left);
		}
	});
	
	var modechangeIconObj;
	if(mode){
		if(mode=="dense"){
			modechangeIconObj = trNode.getElementsByClassName("densemode")[0];
			modechangeIconObj.onclick = changePPTrackModeByBtn(trackId);
		}else if(mode=="pack"){
			modechangeIconObj = trNode.getElementsByClassName("packmode")[0];
			modechangeIconObj.onclick = changePPTrackModeByBtn(trackId);
		}
	}
}

function createPPOtherTrack(trackId, mode) {
	var ppTrackTable;
	var trNode;
	if(personalPinned){
		ppTrackTable = document.getElementById("tableTrack");
		var roww = 2;
		if(personalPannel.Pfanno.id && personalPannel.Pfanno.id == trackId){
			roww = 2;
		} else if (personalPannel.Panno.id && trackId == personalPannel.Panno.id){
			roww = 3;
		} else {
			roww = 4;
		}
		if(personalPannel.Pfanno.id == null){
			roww --;
		}
		trNode = ppTrackTable.insertRow(roww);
	}else{
		ppTrackTable = document.getElementById("ppTrackTable");
		trNode = ppTrackTable.insertRow(-1);
	}
	trNode.id = trackId;
	var modechangeBtnSpan_str = "";
	if(mode){
		if(mode=="pack"){
			modechangeBtnSpan_str = "<span class=\"packmode\"></span>";
		}else if(mode == "dense"){
			modechangeBtnSpan_str = "<span class=\"densemode\"></span>";
		}else{
			modechangeBtnSpan_str = "";
		}
	}
	var colorUsed = ppBG;
	if(personalPannel.Pfanno.id && personalPannel.Pfanno.id == trackId){
		trNode.style.background = pmBG;
		colorUsed = pmBG;
	} else if (personalPannel.Panno.id && trackId == personalPannel.Panno.id){
		trNode.style.background = pmBG;
		colorUsed = pmBG;
	} else {
		trNode.style.background = pdBG;
		colorUsed = pdBG;
	}
	if(personalPinned){
		trNode.innerHTML = "<td class=\"trackOperator\"><div style=\"width:50px;margin:0;padding:0;border:0;\">"+ modechangeBtnSpan_str +"<span class=\"close\"></span></div></td><td class=\"trackName\"><canvas width=\"100\" height=\"50\" style=\"background: "+colorUsed+"\"></canvas></td><td class=\"trackContent\"><div style=\"width:940px;overflow:hidden;padding:0;margin:0;border:0;\"><canvas width=\""+ trackLength+"\" height=\"50\" class=\"canvasTrackcontent\" title=\"shift+click and drag to zoom in\"></canvas></div></td>";
	}else{
		trNode.innerHTML = "<td class=\"trackOperator cannotSortable\"><div style=\"width:50px;margin:0;padding:0;border:0;\">"+ modechangeBtnSpan_str +"<span class=\"close\"></span></div></td><td class=\"trackName\"><canvas width=\"100\" height=\"50\" style=\"background: "+colorUsed+"\"></canvas></td><td class=\"trackContent cannotSortable\"><div style=\"width:940px;overflow:hidden;padding:0;margin:0;border:0;\"><canvas width=\""+ trackLength+"\" height=\"50\" class=\"canvasTrackcontent\" title=\"shift+click and drag to zoom in\"></canvas></div></td>";
	}
	var canvasNodes = trNode.getElementsByTagName("canvas");
	canvasNodes[0].onmouseover = mouseOver;
	canvasNodes[0].onmouseout = mouseOut;

	if(personalPinned){
		canvasNodes[0].onmousedown =  mouseDown;
		canvasNodes[1].onmousedown =  mouseDownRightCanvas;
	}else{
		canvasNodes[1].onmousedown =  mouseDownRightCanvasInPP;
	}
	//$(canvasNodes[1]).bind("mousedown", mouseDownRightCanvasInPP);
	
	addMousewheelEvent(canvasNodes[1], mousewheelHandler);
	
	$(canvasNodes[1]).css("left" , $("#refTrack1").css("left"));
	
	$(canvasNodes[1]).draggable({
		axis : "x",
		cursor : "url(./image/Grabber.cur),auto",
		drag : function(event, ui) {
			$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
				$(arrayele).css("left", ui.position.left);
			});
			dragDragHandler(ui.position.left);
		},
		stop : function(event, ui){
			dragStopHandler(ui.position.left);
		}
	});
	
	var modechangeIconObj;
	if(mode){
		if(mode=="dense"){
			modechangeIconObj = trNode.getElementsByClassName("densemode")[0];
			modechangeIconObj.onclick = changePPTrackModeByBtn(trackId);
		}else if(mode=="pack"){
			modechangeIconObj = trNode.getElementsByClassName("packmode")[0];
			modechangeIconObj.onclick = changePPTrackModeByBtn(trackId);
		}
	}
	
	var removeTrackIconObj = trNode.getElementsByClassName("close")[0];
	removeTrackIconObj.onclick = removeTrackByCloseBtn_in_personalpannel(trackId);
}

function removeTrack(trackId) {
	var trackTable = document.getElementById("tableTrack");
	var trNode = document.getElementById(trackId);
	if(trNode != null){
		var rowIndex = trNode.rowIndex;
		trackTable.deleteRow(rowIndex);
	}
}

var currentTrackItem;
function trackModeOnchange(track_Id, trackMode) {
	var trackItemIndex;
	for(var i = 0; i < trackItems.length; i++) {
		if(trackItems[i].id == track_Id) {
			trackItemIndex = i;
			break;
		}
	}
	if(trackItems[trackItemIndex].isServer == 0) {
		if($.cookie("customTrackList")) {
			var customTrackListCookie = $.cookie("customTrackList");
			var replaceStr = trackItems[trackItemIndex].id + ":" + trackMode;
			var replacedStr = trackItems[trackItemIndex].id + ":" + trackItems[trackItemIndex].mode;
			customTrackListCookie = customTrackListCookie.replace(replacedStr, replaceStr);
			$.cookie("customTrackList", customTrackListCookie, {
				expires : 10 / 24
			});
		} else {
			alert("Your custom track is invalid,you can refresh page then add your custom track again!");
			return;
		}
	}

	var url = "servlet/test.do?action=";
	if(trackMode == "hide") {
		trackItems[trackItemIndex].mode = "hide";
		removeTrack(trackItems[trackItemIndex].id);
		url = url + "removeTracks&tracks=" + trackItems[trackItemIndex].id;
		XMLHttpReq.onreadystatechange = null;
		trackItems_setting2();
	} else {
		if(trackItems[trackItemIndex].mode == "hide") {
			url = url + "addTracks&tracks=" + trackItems[trackItemIndex].id + "&modes=";
			createTrack(trackItems[trackItemIndex].id, trackMode);
		} else {
			url = url + "modiTracks&tracks=" + trackItems[trackItemIndex].id + "&modes=";
		}
		if(document.getElementById(loadingId)) {
			hideLoadingImage(loadingId);
		}
		loadingId = showLoadingImage(trackItems[trackItemIndex].id, "body");
		url = url + trackMode;
		trackItems[trackItemIndex].mode = trackMode;
		currentTrackItem = trackItems[trackItemIndex];
		XMLHttpReq.onreadystatechange = function() {
			handleOnchange(currentTrackItem);
		};
	}
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}

function handleOnchange(currentTrackItem) {
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var pattern = /<.*?>/g;
			XMLHttpReq12.open("GET","servlet/test.do?action=getCheck&tracks="+currentTrackItem.id,false);
			XMLHttpReq12.send(null);
			var err_text=XMLHttpReq12.responseText.replace(pattern,"");
			if(err_text != null && err_text != ""){
				alert(err_text);
				if(currentTrackItem.mode != "hide"){
					trackModeOnchange(currentTrackItem.id, "hide");
				}
			}else{
				var XMLDoc = XMLHttpReq.responseXML;
				if(currentTrackItem.mode != "hide") {
					if(currentTrackItem.dataType == "FASTA"){
						var widthOfOneBase = trackLength / searchLength;
						var fastaNodes = XMLDoc.getElementsByTagName(xmlTagSeq);
						var fastaId;
						var fastaNode;
						var fastaTrackNode = document.getElementById(currentTrackItem.id);
						var fastaCanvasNode = fastaTrackNode.getElementsByTagName("canvas");
						var i;
						for(i=0;i<fastaNodes.length;i++){
							fastaId = fastaNodes[i].getAttribute("id");
							if(fastaId == currentTrackItem.id){
								fastaNode = fastaNodes[i];
								break;
							}
						}

						if(searchLength <= trackLength/10) {
							showFastaSeq(fastaCanvasNode[1],fastaCanvasNode[0],widthOfOneBase, fastaNode.childNodes[0].nodeValue,fastaId);
						}
						else{
							overScaleShow(fastaId);
						}
					}else if(currentTrackItem.dataType == "BAM") {
						var readNodes = XMLDoc.getElementsByTagName(xmlTagReads);
						var readsNode;
						var readsId;
						var i;
						var refSeqTrackNode = document.getElementById(currentTrackItem.id);
						var refSeqCanvasNodes = refSeqTrackNode.getElementsByTagName("canvas");
						for( i = 0; i < readNodes.length; i++) {
							readsId = readNodes[i].getAttribute(xmlAttributeId);
							if(readsId == currentTrackItem.id) {
								readsNode = readNodes[i];
								break;
							}
						}
						if(i == readNodes.length) {
							readNodes = XMLDoc.getElementsByTagName(xmlTagValues);
							for( i = 0; i < readNodes.length; i++) {
								readsId = readNodes[i].getAttribute(xmlAttributeId);
								if(readsId == currentTrackItem.id) {
									readsNode = readNodes[i];
									break;
								}
							}
							showPositiveValueCombine(refSeqCanvasNodes[0], refSeqCanvasNodes[1], readsNode, currentTrackItem.mode, "topdown", 70, 50);
						} else {
							showRead(refSeqCanvasNodes[0], refSeqCanvasNodes[1], readsNode, currentTrackItem.mode, false);
						}
					} else if(currentTrackItem.dataType == "VCF" || currentTrackItem.dataType == "GVF") {
						var variantsNodes = XMLDoc.getElementsByTagName(xmlTagVariants);
						var variantsId;
						var variantsNode = null;
						if(variantsNodes.length > 0) {
							for(var i = 0; i < variantsNodes.length; i++) {
								variantsId = variantsNodes[i].getAttribute(xmlAttributeId);
								if(variantsId == currentTrackItem.id) {
									variantsNode = variantsNodes[i];
									break;
								}
							}
							if(variantsNode != null) {
								var trackNode = document.getElementById(currentTrackItem.id);
								var canvasNodes = trackNode.getElementsByTagName("canvas");
								showVariant(canvasNodes[0], canvasNodes[1], variantsNode, currentTrackItem.mode);
							} else {
								overScaleShow(currentTrackItem.id);
							}
						} else {
							overScaleShow(currentTrackItem.id);
						}
					} else if(currentTrackItem.dataType == "BED" || currentTrackItem.dataType == "BEDGZ" || currentTrackItem.dataType == "ANNO" || currentTrackItem.dataType == "GRF" || currentTrackItem.dataType == "GDF") {
						var elementsNodes = XMLDoc.getElementsByTagName(xmlTagElements);
						var geneNode;
						var elementsId;
						for(var i = 0; i < elementsNodes.length; i++) {
							elementsId = elementsNodes[i].getAttribute(xmlAttributeId);
							if(elementsId == currentTrackItem.id) {
								geneNode = elementsNodes[i];
								break;
							}
						}
						var refSeqTrackNode = document.getElementById(currentTrackItem.id);
						var refSeqCanvasNodes = refSeqTrackNode.getElementsByTagName("canvas");
						showGene(refSeqCanvasNodes[0], refSeqCanvasNodes[1], geneNode, currentTrackItem.mode);
					} else if(currentTrackItem.dataType == "BW" || currentTrackItem.dataType == "WIG") {
						var elementsNodes = XMLDoc.getElementsByTagName(xmlTagValues);
						var geneNode;
						var elementsId;
						for(var i = 0; i < elementsNodes.length; i++) {
							elementsId = elementsNodes[i].getAttribute(xmlAttributeId);
							if(elementsId == currentTrackItem.id) {
								geneNode = elementsNodes[i];
								break;
							}
						}
						var refSeqTrackNode = document.getElementById(currentTrackItem.id);
						var refSeqCanvasNodes = refSeqTrackNode.getElementsByTagName("canvas");
						showValueCombine(refSeqCanvasNodes[0], refSeqCanvasNodes[1], geneNode, currentTrackItem.mode, "downtop", 100, 50);
					}
				}

				hideLoadingImage(loadingId);
			}
		}else{
			var pattern = /<.*?>/g;
			XMLHttpReq12.open("GET","servlet/test.do?action=getCheck&tracks="+currentTrackItem.id,false);
			XMLHttpReq12.send(null);
			var err_text=XMLHttpReq12.responseText.replace(pattern,"");
//			XMLHttpReq12.open("GET","servlet/test.do?action=removeExternals&tracks="+trackId,false);
//			XMLHttpReq12.send(null);
			if(err_text==null||err_text==""){
				alert("An error occurred while executing the query!\nPlease check the data format and data index.");
			}else{
				alert(err_text);
			}
			if(currentTrackItem.mode != "hide"){
				trackModeOnchange(currentTrackItem.id, "hide");
			}
		}
	}
}

function showLoadingImage(id, selector) {
	// Show a loading image above the given id; return's id of div added (so it can be removed when loading is finished).
	// This code was mostly directly copied from hgHeatmap.js, except I also added the "overlay.appendTo("body");"
	// If absolute is TRUE, then we use and absolute reference for the src tag.
	var loadingId = id + "LoadingOverlay";
	// make an opaque overlay to partially hide the image
	var overlay = $("<div></div>").attr("id", loadingId).css("position", "absolute");
	var ele = $(document.getElementById(id));
	overlay.appendTo(selector);
	overlay.css("top", ele.position().top);
	var divLeft = ele.position().left;
	overlay.css("left", divLeft);
	//var width = ele.width() - 5;
	var width = $("#divTrack").width();
	var height = ele.height();
	overlay.width(width);
	overlay.height(height);
	overlay.css("background", "white");
	overlay.css("opacity", 0.55);
	// now add the overlay image itself in the center of the overlay.
	var imgWidth = 220;
	// hardwired based on width of loading.gif
	var imgLeft = (width / 2) - (imgWidth / 2);
	var imgTop = (height / 2 ) - 10;
	var src = "./image/loading.gif";
	$("<img src='" + src + "'/>").css("position", "relative").css('left', imgLeft).css('top', imgTop).appendTo(overlay);
	return loadingId;
}

function hideLoadingImage(id) {
	$(document.getElementById(id)).remove();
}

var chrSelectList = [];
function initialChrSelectList() {
	var i;
	for( i = 0; i <= 24; i++) {
		chrSelectList[i] = [];
		if(i <= 21) {
			chrSelectList[i].num = i + 1;
		} else if(i == 22) {
			chrSelectList[22].num = 'X';
		} else if(i == 23) {
			chrSelectList[23].num = 'Y';
		} else if(i == 24) {
			chrSelectList[24].num = 'M';
		}
		chrSelectList[i].selected = 0;
	}
}

function addExternalUrl() {
	var flag1 = 0, flag2 = 1;
	var chrCheckBoxInput;
	var i;
	if($("#urlInfo tr").length == 1) {
		$("<tr><td><input type=\"text\" style=\"width: 250px;background: #E5E5E5\"\/><\/td><td><input type=\"text\" name=\"chrCheckBoxInput\" readonly=\"readonly\" onclick=\"currentChrSelectInput=this;chrSelectInputClick()\" style=\"width: 150px;background: #E5E5E5\"\/><\/td><td><img alt=\"pic\" src=\"./image/delete.png\" style=\"cursor: pointer\" onclick=\"$(this).parent().parent().remove();opBeforeDelUrl( $(this).parent().parent());\"\/><\/td><\/tr>").appendTo("#urlInfo");
	} else {
		for( i = 0; i <= 24; i++) {
			if(chrSelectList[i].selected == 0) {
				flag1 = 1;
				break;
			}
		}
		chrCheckBoxInput = document.getElementsByName("chrCheckBoxInput");
		for( i = 0; i < chrCheckBoxInput.length; i++) {
			if(chrCheckBoxInput[i].value == "") {
				flag2 = 0;
				break;
			}
		}
		if(flag1 == 1 && flag2 == 1) {
			$("<tr><td><input type=\"text\" style=\"width: 250px;background: #E5E5E5\"\/><\/td><td><input type=\"text\" name=\"chrCheckBoxInput\" readonly=\"readonly\" onclick=\"currentChrSelectInput=this;chrSelectInputClick()\" style=\"width: 150px;background: #E5E5E5\"\/><\/td><td><img alt=\"pic\" src=\"./image/delete.png\" style=\"cursor: pointer\" onclick=\"$(this).parent().parent().remove();opBeforeDelUrl( $(this).parent().parent());\"\/><\/td><\/tr>").appendTo("#urlInfo");
		} else {
			if(flag1 == 0) {
				alert("there is not chromosome number to select!");
			} else {
				alert("Please select the chromosome number in the existed input box!");
			}
		}
	}
}

function opBeforeDelUrl(trNode) {
	var chrInputNode = trNode.find("input")[1];
	var result = chrInputNode.value.split(',');
	for(var i = 0; i < result.length; i++) {
		if(result[i] == 'X') {
			chrSelectList[22].selected = 0;
		} else if(result[i] == 'Y') {
			chrSelectList[23].selected = 0;
		} else if(result[i] == 'M') {
			chrSelectList[24].selected = 0;
		} else {
			chrSelectList[result[i] - 1].selected = 0;
		}
	}
}

function isMemInArray(mem, array) {
	for(var i = 0; i < array.length; i++) {
		if(mem == array[i]) {
			return true;
		}
	}
	return false;
}

var currentChrSelectInput;
function chrSelectInputClick() {
	var divNode = document.getElementById("chrSelectDiv");
	var tableNode = document.getElementById("chrSelectTable");
	var trNode, tdNode, tdInnerHTML;
	var selectedValues;
	var i, j;
	selectedValues = currentChrSelectInput.value.split(',');
	//alert(currentChrSelectInput.value);
	tableNode.innerHTML = "";
	for( i = 0, j = 0; i <= 24; i++) {
		if(chrSelectList[i].selected == 0 || isMemInArray(chrSelectList[i].num, selectedValues)) {
			if(j % 5 == 0) {
				trNode = tableNode.insertRow(-1);
			}
			tdNode = trNode.insertCell(-1);
			tdNode.align = "left";
			tdNode.style.width = 38;
			if(chrSelectList[i].selected == 1) {
				tdInnerHTML = "<input type=\"checkbox\" name=\"chk\" value=\"" + chrSelectList[i].num + "\" checked=\"true\"\/>" + chrSelectList[i].num;
			} else {
				tdInnerHTML = "<input type=\"checkbox\" name=\"chk\" value=\"" + chrSelectList[i].num + "\"\/>" + chrSelectList[i].num;
			}
			tdNode.innerHTML = tdInnerHTML;
			j++;
		}
	}
	document.getElementById("checkAll").checked = false;
	$(divNode).css("top", $(currentChrSelectInput).position().top + 20);
	$(divNode).css("left", $(currentChrSelectInput).position().left);
	$(divNode).css("display", "block");
}

function chrSelectDivOkButton() {
	var i;
	var result = [];
	var chk = document.getElementsByName("chk");
	for( i = 0; i < chk.length; i++) {
		if(chk[i].checked) {
			result.push(chk[i].value);
			if(chk[i].value == 'X') {
				chrSelectList[22].selected = 1;
			} else if(chk[i].value == 'Y') {
				chrSelectList[23].selected = 1;
			} else if(chk[i].value == 'M') {
				chrSelectList[24].selected = 1;
			} else {
				chrSelectList[chk[i].value - 1].selected = 1;
			}
		} else {
			if(chk[i].value == 'X') {
				chrSelectList[22].selected = 0;
			} else if(chk[i].value == 'Y') {
				chrSelectList[23].selected = 0;
			} else if(chk[i].value == 'M') {
				chrSelectList[24].selected = 0;
			} else {
				chrSelectList[chk[i].value - 1].selected = 0;
			}
		}
	}
	currentChrSelectInput.value = result.join(",");
	document.getElementById("chrSelectDiv").style.display = "none";
}

function chrSelectDivCancelButton() {
	document.getElementById("chrSelectDiv").style.display = "none";
}

function chrCheckAll() {
	var chrCheckList = document.getElementsByName("chk");
	if($("#checkAll").attr("checked")){
		for(var i = 0; i < chrCheckList.length; i++) {
			chrCheckList[i].checked = true;
		}
	}else{
		for(var i = 0; i < chrCheckList.length; i++) {
			chrCheckList[i].checked = false;
		}
	}
}

function clearAllInput() {
	var i;
	var urlInfoTableNode = document.getElementById("urlInfo");
	var trLength = urlInfoTableNode.getElementsByTagName("tr").length;
	document.getElementById("customTrackId").value = "";
	for( i = 0; i <= 24; i++) {
		chrSelectList[i].selected = 0;
	}
	i = trLength;
	while(i > 2) {
		urlInfoTableNode.deleteRow(-1);
		i--;
	}
	var inputNodes = urlInfoTableNode.getElementsByTagName("input");
	for( i = 0; i < inputNodes.length; i++) {
		inputNodes[i].value = "";
	}
	document.getElementById("checkAll").checked = "false";
}

function customTrackSubmit() {
	var customTrackId = document.getElementById("customTrackId").value;
	var customTrackDisplayModeNode = document.getElementById("customTrackDisplayMode");
	var customTrackDataTypeNode = document.getElementById("customTrackDataType");
	var urlInfoTableNode = document.getElementById("urlInfo");
	var customTrackDisplayMode = customTrackDisplayModeNode.options[customTrackDisplayModeNode.selectedIndex].childNodes[0].nodeValue;
	var customTrackDataType = customTrackDataTypeNode.options[customTrackDataTypeNode.selectedIndex].childNodes[0].nodeValue;
	var urlInfoInputNodes = urlInfoTableNode.getElementsByTagName("input");
	var urlInfoTableTrNodes = urlInfoTableNode.getElementsByTagName("tr");
	var urlStr, chrArray;
	var i, j, flag = 0;
	if(/^_(.|\n)*/.test(customTrackId)){
		alert("track name cannot start with \"_\"!");
		return;
	}
	for( i = 0; i < urlInfoInputNodes.length; i++) {
		if(urlInfoInputNodes[i].value == "") {
			flag = 1;
			break;
		}
	}
	if(customTrackId == "" || flag == 1) {
		alert("Please input complete information or delete useless url item!");
		return;
	}

	for( i = 0; i < trackItems.length; i++) {
		if(customTrackId == trackItems[i].id) {
			alert("Your custom track name is existed, please input another name which is not used!");
			return;
		}
	}

	var temp_trackItemsLength = trackItems.length;
	trackItems[temp_trackItemsLength] = [];
	trackItems[temp_trackItemsLength].id = customTrackId;
	trackItems[temp_trackItemsLength].mode = customTrackDisplayMode;
	trackItems[temp_trackItemsLength].dataType = customTrackDataType;
	trackItems[temp_trackItemsLength].isServer = 0;

	var cookieStr, serverParaStr, urls = "";
	if(urlInfoTableTrNodes.length == 2 && urlInfoTableTrNodes[1].getElementsByTagName("input")[1].value.split(",").length == 25) {
		urls = urlInfoTableTrNodes[1].getElementsByTagName("input")[0].value;
	} else {
		for( i = 1; i < urlInfoTableTrNodes.length; i++) {
			urlStr = urlInfoTableTrNodes[i].getElementsByTagName("input")[0].value;
			chrArray = urlInfoTableTrNodes[i].getElementsByTagName("input")[1].value.split(",");
			for( j = 0; j < chrArray.length; j++) {
				urls = urls + "chr";
				urls = urls + chrArray[j];
				urls = urls + ":";
				urls = urls + urlStr;
				urls = urls + ";";
			}
		}
	}
	serverParaStr = "action=addExternals&" + "tracks=" + customTrackId + "&modes=" + customTrackDisplayMode + "&types=" + customTrackDataType + "&links=" + urls;
	if($.cookie("customTrackList")) {
		cookieStr = $.cookie("customTrackList") + ",";
	} else {
		cookieStr = "";
	}
	cookieStr = cookieStr + customTrackId;
	cookieStr = cookieStr + ":";
	cookieStr = cookieStr + customTrackDisplayMode;
	cookieStr = cookieStr + ":";
	cookieStr = cookieStr + customTrackDataType;
	$.cookie("customTrackList", cookieStr, {
		expires : 10 / 24
	});
	

	if(trackItems[temp_trackItemsLength].mode != "hide") {
		createTrack(trackItems[temp_trackItemsLength].id, trackItems[temp_trackItemsLength].mode);
	}
	currentTrackItem = trackItems[temp_trackItemsLength];
	XMLHttpReq.onreadystatechange = function() {
		handleOnchange(currentTrackItem);
	};
	XMLHttpReq.open("GET", "servlet/test.do?" + serverParaStr, true);
	XMLHttpReq.send(null);

	tb_remove();
	trackItems_setting2();
}

$(document).ready(function(){
	$("#customtrackByconfigSubmitBtn").bind("click", customtrack_submit_byConfiguretext);
	$("#customtrackByConfigClearBtn").bind("click", customtrack_clear_byConfiguretext);
});
$(document).ready(function(){
	$("#customtrackconfigformat").tooltip();
});
var customtracks_configtext = "";
var customtracks_index_in_trackItems;
function customtrack_submit_byConfiguretext(){
	var configText = document.getElementById("uploadfile_configureText").value;
	if(configText){
		var test_configText = test_customTrackConfigureText(configText);
		if(test_configText.pass){
			customtracks_configtext = configText;
			customtracks_configtext_setHTMLandJS(configText);
			customtracks_configtext_HttpRequest(configText);
		}else{
			var errorStr = "";
			if(!test_configText.items.num){
				errorStr = errorStr + "the number of the parameters is mismatch!\n";
			}else if(! test_configText.items.format){
				errorStr = errorStr + "the format of the parameters is wrong!\n";
			}else if(! test_configText.items.tracks.tracks_set){
				errorStr = errorStr + "the format of parameter tracks is wrong!\n";
			}else if(! test_configText.items.tracks.tracks_value){
				if(test_configText.items.tracks.errorDescription != ""){
					errorStr = errorStr + test_configText.items.tracks.errorDescription;
				}else{
					errorStr = errorStr + "the value of parameter tracks is wrong!\n";
				}
			}else if(! test_configText.items.modes.modes_set){
				errorStr = errorStr + "the format of parameter modes is wrong!\n";
			}else if(! test_configText.items.modes.modes_value){
				errorStr = errorStr + "the value of parameter modes is wrong!\n";
			}else if(! test_configText.items.Types.Types_set){
				errorStr = errorStr + "the format of parameter types is wrong!\n";
			}else if(! test_configText.items.Types.Types_value){
				errorStr = errorStr + "the value of parameter types is wrong!\n";
			}else if(! test_configText.items.Links.Links_set){
				errorStr = errorStr + "the format of parameter links is wrong!\n";
			}else if(! test_configText.items.Links.Links_value){
				errorStr = errorStr + "the value of parameter links is wrong!\n";
			}
			alert(errorStr);
		}
	}else{
		alert("Please input your configure text!");
	}
}

function customtracks_configtext_HttpRequest(configtext){
	var url = "servlet/test.do?action=addExternals&" + configtext;
	XMLHttpReq.onreadystatechange = handle_customtracks_configtext_HttpRequest;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}

function handle_customtracks_configtext_HttpRequest(){
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var XMLDoc = XMLHttpReq.responseXML;
			for(var i = customtracks_index_in_trackItems; i < trackItems.length; i++) {
				show_trackItem(trackItems[i], XMLDoc);
			}
		}
	}
}

function show_trackItem(currentTrackItem,XMLDoc) {
	if(currentTrackItem.mode != "hide") {
		if(currentTrackItem.dataType == "BAM") {
			var readNodes = XMLDoc.getElementsByTagName(xmlTagReads);
			var readsNode;
			var readsId;
			var i;
			var refSeqTrackNode = document.getElementById(currentTrackItem.id);
			var refSeqCanvasNodes = refSeqTrackNode.getElementsByTagName("canvas");
			for( i = 0; i < readNodes.length; i++) {
				readsId = readNodes[i].getAttribute(xmlAttributeId);
				if(readsId == currentTrackItem.id) {
					readsNode = readNodes[i];
					break;
				}
			}
			if(i == readNodes.length) {
				readNodes = XMLDoc.getElementsByTagName(xmlTagValues);
				for( i = 0; i < readNodes.length; i++) {
					readsId = readNodes[i].getAttribute(xmlAttributeId);
					if(readsId == currentTrackItem.id) {
						readsNode = readNodes[i];
						break;
					}
				}
				showPositiveValueCombine(refSeqCanvasNodes[0], refSeqCanvasNodes[1], readsNode, currentTrackItem.mode, "topdown", "normalRatio", 70, 50);
			} else {
				showRead(refSeqCanvasNodes[0], refSeqCanvasNodes[1], readsNode, currentTrackItem.mode, false);
			}
		} else if(currentTrackItem.dataType == "VCF" || currentTrackItem.dataType == "GVF") {
			var variantsNodes = XMLDoc.getElementsByTagName(xmlTagVariants);
			var variantsId;
			var variantsNode = null;
			if(variantsNodes.length > 0) {
				for(var i = 0; i < variantsNodes.length; i++) {
					variantsId = variantsNodes[i].getAttribute(xmlAttributeId);
					if(variantsId == currentTrackItem.id) {
						variantsNode = variantsNodes[i];
						break;
					}
				}
				if(variantsNode != null) {
					var trackNode = document.getElementById(currentTrackItem.id);
					var canvasNodes = trackNode.getElementsByTagName("canvas");
					showVariant(canvasNodes[0], canvasNodes[1], variantsNode, currentTrackItem.mode);
				} else {
					overScaleShow(currentTrackItem.id);
				}
			} else {
				overScaleShow(currentTrackItem.id);
			}
		} else if(currentTrackItem.dataType == "BED" || currentTrackItem.dataType == "BEDGZ" || currentTrackItem.dataType == "ANNO" || currentTrackItem.dataType == "GRF" || currentTrackItem.dataType == "GDF") {
			var elementsNodes = XMLDoc.getElementsByTagName(xmlTagElements);
			var geneNode;
			var elementsId;
			for(var i = 0; i < elementsNodes.length; i++) {
				elementsId = elementsNodes[i].getAttribute(xmlAttributeId);
				if(elementsId == currentTrackItem.id) {
					geneNode = elementsNodes[i];
					break;
				}
			}
			var refSeqTrackNode = document.getElementById(currentTrackItem.id);
			var refSeqCanvasNodes = refSeqTrackNode.getElementsByTagName("canvas");
			showGene(refSeqCanvasNodes[0], refSeqCanvasNodes[1], geneNode, currentTrackItem.mode);
		} else if(currentTrackItem.dataType == "BW" || currentTrackItem.dataType == "WIG") {
			var elementsNodes = XMLDoc.getElementsByTagName(xmlTagValues);
			var geneNode;
			var elementsId;
			for(var i = 0; i < elementsNodes.length; i++) {
				elementsId = elementsNodes[i].getAttribute(xmlAttributeId);
				if(elementsId == currentTrackItem.id) {
					geneNode = elementsNodes[i];
					break;
				}
			}
			var refSeqTrackNode = document.getElementById(currentTrackItem.id);
			var refSeqCanvasNodes = refSeqTrackNode.getElementsByTagName("canvas");
			showValueCombine(refSeqCanvasNodes[0], refSeqCanvasNodes[1], geneNode, currentTrackItem.mode, "downtop", 100, 50);
		}
	}
}

function customtracks_configtext_setHTMLandJS(configText){
	var trackItems_length = trackItems.length;
	customtracks_index_in_trackItems = trackItems.length;
	var paramsset_array = configText.split('&');
	var tracks_array, modes_array, Types_array, Links_array;
	var i;
	for(i=0; i<paramsset_array.length;i++){
		if(paramsset_array[i].indexOf("tracks")!=-1){
			tracks_array = paramsset_array[i].split("=")[1].split(",");
		}else if(paramsset_array[i].indexOf("modes")!=-1){
			modes_array = paramsset_array[i].split("=")[1].split(",");
		}else if(paramsset_array[i].indexOf("types")!=-1){
			Types_array = paramsset_array[i].split("=")[1].split(",");
		}else if(paramsset_array[i].indexOf("links")!=-1){
			Links_array = paramsset_array[i].split("=")[1].split(",");
		}
	}
	var cookieStr;
	if($.cookie("customTrackList")) {
		cookieStr = $.cookie("customTrackList") + ",";
	} else {
		cookieStr = "";
	}
	for(i=0; i<tracks_array.length; i++){
		trackItems[trackItems.length] = [];
		trackItems[trackItems.length - 1].id = tracks_array[i];
		trackItems[trackItems.length - 1].mode = modes_array[i];
		trackItems[trackItems.length - 1].dataType = Types_array[i];
		trackItems[trackItems.length - 1].isServer = 0;
		
		cookieStr = cookieStr + tracks_array[i];
		cookieStr = cookieStr + ":";
		cookieStr = cookieStr + modes_array[i];
		cookieStr = cookieStr + ":";
		cookieStr = cookieStr + Types_array[i];
		cookieStr = cookieStr + ",";
		
		if(modes_array[i] != "hide") {
			createTrack(tracks_array[i],modes_array[i]);
		}
		
		if(Types_array[i] == "VCF" || Types_array[i] == "GVF") {
			personalPannel.personalTrackItems.Pvars.push("_" + tracks_array[i]);
		}
	}
	
	cookieStr = cookieStr.replace(/,$/gi,"");
	$.cookie("customTrackList", cookieStr, {
		expires : 10 / 24
	});
	
	tb_remove();
	trackItems_setting2();
}

function test_customTrackConfigureText(configText){
	var tracks_value_reg = new RegExp("[^_]([^,])+(,[^_]([^,])+)*");
	
	var modes_value_reg = new RegExp("(hide|dense|pack)(,(hide|dense|pack))*");
	var Types_value_reg = new RegExp("(BAM|BB|GDF|BEDGZ|ANNO|BW|GVF|VCF|GRF)(,(BAM|BB|GDF|BEDGZ|ANNO|BW|GVF|VCF|GRF))*");
	var Links_value1_reg = new RegExp("(chr([1-9]|1[0-9]|2[0-2]|X|Y|M):([^;,]+);)+");
	var Links_value2_reg = new RegExp("[^,;]+");
	
	var tracks_set_reg = new RegExp("tracks=(.|\n)+");
	var modes_set_reg = new RegExp("modes=(.|\n)+");
	var Types_set_reg = new RegExp("types=(.|\n)+");
	var Links_set_reg = new RegExp("links=(.|\n)+");
	
	var config_reg = new RegExp("(.|\n)+&(.|\n)+&(.|\n)+&(.|\n)+");
	
	var testResult = {};
	testResult.pass = false;
	testResult.items = {};
	testResult.items.num = false;
	testResult.items.format = false;
	testResult.items.tracks = {};
	testResult.items.modes = {};
	testResult.items.Types = {};
	testResult.items.Links = {};
	testResult.items.tracks.tracks_set = false;
	testResult.items.modes.modes_set = false;
	testResult.items.Types.Types_set = false;
	testResult.items.Links.Links_set = false;
	testResult.items.tracks.tracks_value = false;
	testResult.items.tracks.errorDescription = "";
	testResult.items.modes.modes_value = false;
	testResult.items.Types.Types_value = false;
	testResult.items.Links.Links_value = false;
	
	var configTextObj = {};
	configTextObj.configText = configText;
	configTextObj.tracks = {};
	configTextObj.tracks.configText = "";
	configTextObj.tracks.value = "";
	configTextObj.tracks.num = 0;
	configTextObj.modes = {};
	configTextObj.modes.configText = "";
	configTextObj.modes.value = "";
	configTextObj.modes.num = 0;
	configTextObj.Types = {};
	configTextObj.Types.configText = "";
	configTextObj.Types.value = "";
	configTextObj.Types.num = 0;
	configTextObj.Links = {};
	configTextObj.Links.configText = "";
	configTextObj.Links.value = "";
	configTextObj.Links.num = 0;
	
	var configArray = configText.split("&");
	var i, j;
	for(i=0; i<configArray.length;i++){
		if(configArray[i].indexOf("tracks")!=-1){
			configTextObj.tracks.configText = configArray[i];
			configTextObj.tracks.value = configArray[i].split("=")[1];
			configTextObj.tracks.num = configTextObj.tracks.value.split(",").length;
		}else if(configArray[i].indexOf("modes")!=-1){
			configTextObj.modes.configText = configArray[i];
			configTextObj.modes.value = configArray[i].split("=")[1];
			configTextObj.modes.num = configTextObj.modes.value.split(",").length;
		}else if(configArray[i].indexOf("types")!=-1){
			configTextObj.Types.configText = configArray[i];
			configTextObj.Types.value = configArray[i].split("=")[1];
			configTextObj.Types.num = configTextObj.Types.value.split(",").length;
		}else if(configArray[i].indexOf("links")!=-1){
			configTextObj.Links.configText = configArray[i];
			configTextObj.Links.value = configArray[i].split("=")[1];
			configTextObj.Links.num = configTextObj.Links.value.split(",").length;
		}
	}
	
	testResult.items.format = config_reg.test(configText);
	
	if(configTextObj.modes.num == configTextObj.tracks.num && configTextObj.Types.num == configTextObj.tracks.num && configTextObj.Links.num == configTextObj.tracks.num) {
		testResult.items.num = true;
	}
	
	testResult.items.tracks.tracks_set = tracks_set_reg.test(configTextObj.tracks.configText);
	testResult.items.modes.modes_set = modes_set_reg.test(configTextObj.modes.configText);
	testResult.items.Types.Types_set = Types_set_reg.test(configTextObj.Types.configText);
	testResult.items.Links.Links_set = Links_set_reg.test(configTextObj.Links.configText);
	testResult.items.tracks.tracks_value = tracks_value_reg.test(configTextObj.tracks.value);
	testResult.items.modes.modes_value = modes_value_reg.test(configTextObj.modes.value);
	testResult.items.Types.Types_value = Types_value_reg.test(configTextObj.Types.value);
	
	var customtrack_nameList = configTextObj.tracks.value.split(",");
	
	for(i = 0; i < customtrack_nameList.length; i++){
		if(/^_/.test(customtrack_nameList[i])){
			testResult.items.tracks.tracks_value = false;
			testResult.items.tracks.errorDescription = "track name cannot start width \"_\"!";
			break;
		}
		for(j = 0; j < trackItems.length; j++){
			if(trackItems[j].id == customtrack_nameList[i]){
				testResult.items.tracks.tracks_value = false;
				testResult.items.tracks.errorDescription = "The track name:" + trackItems[j].id + " already exists!";
				break;
			}
		}
	}
	
	for(i = 0; i < customtrack_nameList.length - 1; i++){
		for(j = i + 1; j < customtrack_nameList.length; j++){
			if(customtrack_nameList[i] == customtrack_nameList[j]){
				testResult.items.tracks.tracks_value = false;
				testResult.items.tracks.errorDescription = "There is the same track names in the value of tracks parameter!";
				break;
			}
		}
	}
	
	var Links_value_array = configTextObj.Links.value.split(",");
	var temp_bool_value = false;
	for(i =0; i<Links_value_array.length; i++){
		if(Links_value_array[i].indexOf(";")!= -1){
			temp_bool_value = Links_value1_reg.test(Links_value_array[i]);
		}else{
			temp_bool_value = Links_value2_reg.test(Links_value_array[i]);
		}
		if(!temp_bool_value){
			break;
		}
	}
	if(i<Links_value_array.length){
		testResult.items.Links.Links_value = false;
	}else{
		testResult.items.Links.Links_value = true;
	}
	
	
	if(testResult.items.format && testResult.items.num && testResult.items.tracks.tracks_set && testResult.items.modes.modes_set && testResult.items.Links.Links_set && testResult.items.tracks.tracks_value && testResult.items.modes.modes_value && testResult.items.Types.Types_value && testResult.items.Links.Links_value) {
		testResult.pass = true;
	} else {
		testResult.pass = false;
	}
	
	return testResult;
}

function customtrack_clear_byConfiguretext(){
	document.getElementById("uploadfile_configureText").value = "";
}

/*****************************************************START: the options and visualisition cytobands************************************************************************/

/*cytoBand is the g band
 width of cytoband track in the page is 1000pixels
 height is 15px*/
function showCytoband(canvasNode, cytobandsNode) {
	var cytobandNodes = cytobandsNode.getElementsByTagName(xmlTagCytoBand);
	var cytobands = [];
	var cytobandTrackWidth = 1000, chrLen, i;
	var bandRelativeFrom, bandRelativeTo, bandRelativeWidth;
	if(cytobandNodes.length == 0) {
		return;
	}
	for( i = 0; i < cytobandNodes.length; i++) {
		cytobands[i] = [];
		cytobands[i].id = cytobandNodes[i].getAttribute(xmlAttributeId);
		cytobands[i].gieStain = cytobandNodes[i].getAttribute(xmlAttribute_gieStain);
		cytobands[i].from = cytobandNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue;
		cytobands[i].to = cytobandNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue;
	}
	chrLen = parseInt(cytobands[cytobands.length - 1].to);
	if(canvasNode.getContext) {
		var ctx = canvasNode.getContext('2d');
		ctx.clearRect(0, 0, 1000, 15);
		for( i = 0; i < cytobandNodes.length; i++) {
			bandRelativeFrom = cytobands[i].from * 1000 / chrLen;
			bandRelativeWidth = (cytobands[i].to - cytobands[i].from + 1) * 1000 / chrLen;
			if(cytobands[i].gieStain == "acen") {
				ctx.fillStyle = "#556B2F";
				if(i + 1 < cytobandNodes.length && cytobands[i + 1].gieStain == "acen") {
					ctx.beginPath();
					ctx.moveTo(bandRelativeFrom, 0);
					ctx.lineTo(bandRelativeFrom + bandRelativeWidth, 8);
					ctx.lineTo(bandRelativeFrom, 15);
					ctx.closePath();
					ctx.fill();

					ctx.fillStyle = "#000";
					ctx.beginPath();
					ctx.moveTo(bandRelativeFrom, 0);
					ctx.lineTo(bandRelativeFrom + bandRelativeWidth, 8);
					ctx.closePath();
					ctx.stroke();

					ctx.beginPath();
					ctx.moveTo(bandRelativeFrom + bandRelativeWidth, 8);
					ctx.lineTo(bandRelativeFrom, 15);
					ctx.closePath();
					ctx.stroke();
				} else {
					ctx.beginPath();
					ctx.moveTo(bandRelativeFrom, 8);
					ctx.lineTo(bandRelativeFrom + bandRelativeWidth, 0);
					ctx.lineTo(bandRelativeFrom + bandRelativeWidth, 15);
					ctx.closePath();
					ctx.fill();

					ctx.fillStyle = "#000";
					ctx.beginPath();
					ctx.moveTo(bandRelativeFrom, 8);
					ctx.lineTo(bandRelativeFrom + bandRelativeWidth, 0);
					ctx.closePath();
					ctx.stroke();

					ctx.beginPath();
					ctx.moveTo(bandRelativeFrom, 8);
					ctx.lineTo(bandRelativeFrom + bandRelativeWidth, 15);
					ctx.closePath();
					ctx.stroke();
				}
			} else {
				switch(cytobands[i].gieStain) {
					case "gvar":
						ctx.fillStyle = "#8B8B00";
						break;
					case "stalk":
						ctx.fillStyle = "#B22222";
						break;
					case "gneg":
						ctx.fillStyle = "#ffffff";
						break;
					case "gpos25":
						ctx.fillStyle = "#C2C2C2";
						break;
					case "gpos50":
						ctx.fillStyle = "#8A8A8A";
						break;
					case "gpos75":
						ctx.fillStyle = "#4D4D4D";
						break;
					case "gpos100":
						ctx.fillStyle = "#000";
						break;
				}
				ctx.fillRect(bandRelativeFrom, 0, bandRelativeWidth, 15);
				ctx.fillStyle = "#000";
				ctx.fillRect(bandRelativeFrom, 0, bandRelativeWidth, 1);
				ctx.fillRect(bandRelativeFrom, 14, bandRelativeWidth, 1);
				if(i == 0) {
					ctx.fillRect(bandRelativeFrom, 0, 1, 15);
				} else if(i == cytobandNodes.length - 1) {
					ctx.fillRect(cytobands[i].to / chrLen * 1000 - 1, 0, 1, 15);
				}
				if(ctx.measureText(cytobands[i].id).width < bandRelativeWidth) {
					if(cytobands[i].gieStain == "gpos100" || cytobands[i].gieStain == "gpos75") {
						ctx.fillStyle = "#ffffff";
					} else {
						ctx.fillStyle = "#000";
					}
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";
					ctx.fillText(cytobands[i].id, bandRelativeFrom + bandRelativeWidth / 2, 8);
					ctx.textAlign = "start";
					ctx.textBaseline = "alphabetic";
					ctx.fillStyle = "#000";
				}
			}
		}
	}
}

function drawScaleboxOnCytobandsImg(temp_searchLength_user, temp_start_user){
	if($("#scaleBoxOnCytobandsImg")){
		$("#scaleBoxOnCytobandsImg").remove();
	}
	var cytobandsImg_width = $("#cytobandsCanvas").width();
	var scaleBox_width = temp_searchLength_user/ chrLength * cytobandsImg_width;
	var scaleBox_left = temp_start_user / chrLength * cytobandsImg_width + $("#cytobandsCanvas").position().left;
	var scaleBox_top = $("#cytobandsCanvas").position().top - 3;
	var scaleBox_height = $("#cytobandsCanvas").height() + 2*2;
	var scaleBox = $("<div></div>").attr("id", "scaleBoxOnCytobandsImg").css("position", "absolute");
	scaleBox.appendTo("body");
	scaleBox.css({
		"left": scaleBox_left,
		"top" : scaleBox_top,
		"width": scaleBox_width - 2,
		"height": scaleBox_height,
		"border": "solid 1px #000",
		"background": "rgba(255,255,255,0)",
		"z-index": 5
	});
}

$(document).ready(function() {
	$("#cytobandsCanvas").imgAreaSelect({
		classPrefix : "chrImgareaselect",
		handles : false,
		resizable : false,
		movable : false,
		autoHide : true,
		minHeight : $("#cytobandsCanvas").height(),
		onSelectChange : function(img, selection) {
			var cytobandsImg_width = $("#cytobandsCanvas").width();
			var tempstartIndex = Math.round(selection.x1 * chrLength / cytobandsImg_width);
			var tempendIndex = Math.round(selection.x2 * chrLength / cytobandsImg_width);
			showuserSearchIndex(tempstartIndex, tempendIndex);
			setSliderValue(tempendIndex - tempstartIndex + 1);
		},
		onSelectEnd : function(img, selection) {
			var cytobandsImg_width = $("#cytobandsCanvas").width();
			start_user = Math.round(selection.x1 * chrLength / cytobandsImg_width);
			end_user = Math.round(selection.x2 * chrLength / cytobandsImg_width);
			searchLength_user = end_user - start_user + 1;
			startIndex = start_user - searchLength_user;
			endIndex = end_user + searchLength_user;
			searchLength = endIndex - startIndex + 1;
			drawScaleboxOnCytobandsImg(searchLength_user, start_user);
			setSliderValue(searchLength_user);
			showuserSearchIndex(start_user, end_user);
			showRef();
		}
	});
});

//为了解决cytobands图片中的选定区域中不可选的问题而增加的处理，
//而在cytobands上添加的原来的处理方法实际上可以删掉
$(document).ready(function(){
	var cytobandsImg_width = $("#cytobandsCanvas").width();
	var cytobandsImg_height = $("#cytobandsCanvas").height();
	var cytobandsImg_left = $("#cytobandsCanvas").position().left - 4;
	var cytobandsImg_top = $("#cytobandsCanvas").position().top;
	var overlay_above_cytobandsImg = $("<div></div>").attr("id", "overlay_above_cytobandsImg").css("position", "absolute");
	overlay_above_cytobandsImg.appendTo("body");
	overlay_above_cytobandsImg.css({
		"left": cytobandsImg_left,
		"top": cytobandsImg_top,
		"width": cytobandsImg_width,
		"height": cytobandsImg_height,
		"z-index": 10,
		"border": "none",
		"opacity": 0
	});
	
	$("#overlay_above_cytobandsImg").imgAreaSelect({
		classPrefix : "chrImgareaselect",
		handles : false,
		resizable : false,
		movable : false,
		autoHide : true,
		minHeight : $("#overlay_above_cytobandsImg").height(),
		onSelectChange : function(img, selection) {
			var cytobandsImg_width = $("#overlay_above_cytobandsImg").width();
			var tempstartIndex = Math.round(selection.x1 * chrLength / cytobandsImg_width);
			var tempendIndex = Math.round(selection.x2 * chrLength / cytobandsImg_width);
			showuserSearchIndex(tempstartIndex, tempendIndex);
			setSliderValue(tempendIndex - tempstartIndex + 1);
		},
		onSelectEnd : function(img, selection) {
			var cytobandsImg_width = $("#overlay_above_cytobandsImg").width();
			start_user = Math.round(selection.x1 * chrLength / cytobandsImg_width);
			end_user = Math.round(selection.x2 * chrLength / cytobandsImg_width);
			searchLength_user = end_user - start_user + 1;
			startIndex = start_user - searchLength_user;
			endIndex = end_user + searchLength_user;
			searchLength = endIndex - startIndex + 1;
			drawScaleboxOnCytobandsImg(searchLength_user, start_user);
			setSliderValue(searchLength_user);
			showuserSearchIndex(start_user, end_user);
			showRef();
		}
	});
});

/*********************************************************END: the options and visualisition cytobands********************************************************************/

function initPvar(){
	var url = "servlet/test.do?action=initPvar&modes=pack&tracks=1000genome_CEU&id=NA12716";
	XMLHttpReq5.onreadystatechange = function(){};
	XMLHttpReq5.open("GET", url, false);
	XMLHttpReq5.send(null);
}

$(document).ready(function() {
	var urlParameter = QueryString();
	if((urlParameter["Chr"] + ".") == "undefined."){
		window.location.href = "browser.html?Chr=chr21&Start=33021623&End=33051544";
		return;
	}
	//initPvar();
	if((urlParameter["Chr"] + ".") != "undefined.") {
		assemblyNum = urlParameter["Assembly"];
		chrNum = urlParameter["Chr"];
		startIndex = parseInt(urlParameter["Start"]);
		endIndex = parseInt(urlParameter["End"]);
		if(startIndex > endIndex) {
			var start2end;
			start2end = endIndex;
			endIndex = startIndex;
			startIndex = start2end;
		}
		if(endIndex - startIndex + 1 < parseInt(trackLength / 10)) {
			var temp_d = parseInt(trackLength / 10) - (endIndex - startIndex + 1);
			if(temp_d % 2 == 0) {
				endIndex = endIndex + temp_d / 2;
				startIndex = startIndex - temp_d / 2;
			} else {
				endIndex = endIndex + parseInt(temp_d / 2);
				startIndex = startIndex - (parseInt(temp_d / 2) + 1)
			}
		}
		searchLength = endIndex - startIndex + 1;
		searchLength_user = Math.round(searchLength / 3);
		start_user = startIndex + searchLength_user;
		end_user = endIndex - searchLength_user;

		/*var assemblySelectNode = document.getElementById("assemblySelect");
		var i = 0;
		for(; i < assemblySelectNode.options.length; i++) {
			if(assemblyNum == assemblySelectNode.options[i].firstChild.nodeValue) {
				assemblySelectNode.selectedIndex = i;
				break;
			}
		}
		setAssemblyRequest();*/
		getChrLengthRequest();
		pageFlag = 1;
	}
});
//search input autocomplete
$(function() { 
    $("#search_field").autocomplete({ 
        source: function(request, response) { 
        	var input = request.term;
        	if(input.length >3)
        	{
        		if((input[0]=='c' || input[0]=='C')&&(input[1]=='h' || input[1]=='H')&&(input[2]=='r' || input[2]=='R'))
    			{
        			if((input[3]=='x' || input[3]=='X')||(input[3]=='y' || input[3]=='Y')||(input[3]=='m' || input[3]=='M')||(input[3]>='1'&&input[3]<='9') )
        			{
        				$("#ui-id-1").css("display", "none");
        				return;
        			}
    			}
        		
        	}
        	$("#ui-id-1").css("left", $("#search_field").position().left - 3);
        	$("#ui-id-1").css("top", $("#search_field").position().top + $("#search_field").outerHeight(true));
        	$("#ui-id-1 li").remove();
			$("#ui-id-1").append("<li><p><center><img src=\"image/ui-anim_basic_16x16.gif\"></img><br>one moment, searching......</center></p></li>");
			$("#ui-id-1").css("display", "block");
			$("#ui-id-1").mouseleave(function(e){
				$("#select_info").css("display", "none");
			});
        	$.ajax({ 
                url: "servlet/test.do?action=findGene&prefix=" + request.term , 
                type: "get",
                dataType: "xml", 
                success: function(xmlResponse) {
                	$("#wait_div").css("display", "none");
                	var hasData = false;
                	var dataNum = 0;
					response($( "Gene", xmlResponse ).map(function() {
						hasData = true;
						dataNum++;
						return{
							id: "li_" + (dataNum-1),
							value: $(this).attr("id"),
							label: $(this).attr("id"),
							desc: $( "Chromosome", this ).text() + ":" 	+ $(xmlTagFrom , this ).text() + "-" + $( xmlTagTo, this ).text()
						};
					}));
					if(!hasData)
					{
						$("#ui-id-1 li").remove();
						$("#ui-id-1").append("<li><p><center>No Result</center></p></li>");
						$("#ui-id-1").css("display", "block");

					}
					$("#ui-id-1").css("left", $("#search_field").position().left - 3);
					$("#ui-id-1").css("width", 239);
                },
                error: function(xmlResponse){
                	//here is you deal code when request returned unsuccessfully.
                	//alert('request error!');
                }
            }); 
        },
        focus: function( event, ui ) {
        	if(ui.item.value==null||ui.item.value=="")
        		return;
        	var top = $("#"+ui.item.id).position().top + $("#ui-id-1").position().top;
        	var left =  parseInt($("#ui-id-1").css("left").split("px")[0]) + parseInt($("#ui-id-1").css("width").split("px")[0]) + 5;
        	$("#select_info").css("display", "block");
			$("#select_info").css("top", top);
			$("#select_info").css("left", left);
			//$("#select_info").css("width", 200);
			//$("#select_info").css("height", 200);
			$("#select_info").css("background-color", "#ffffff");
			//init the showing panel with waiting image
			
			$("#select_info").html("");
			$("#select_info").append("<br><br><center><image src=\"image/ui-anim_basic_16x16.gif\"></image>");
			$("#select_info").append("<p><centet>one moment, loading......</center></p>");
			$("#select_info").mouseover(function(){
				$("#select_info").css("display", "block");
			});
			$("#select_info").mouseout(function(){
				$("#select_info").css("display", "none");
			});
			//send an ajax request to get the data to generate a picture
			$.ajax({ 
				url: "servlet/test.do?action=getGene&gene=" + ui.item.label,//here is your url 
                type:"get",
                dataType: "xml", 
                success: function(xmlResponse) {
                	$("#select_info").html("");
                	$("Gene", xmlResponse ).map(function() {
                		$("#select_info").append("<div id=\"gene_info_name\">"+$(this).attr("id")+"</div>");
                		if($(this).children().length>0)
                			$("#select_info").append("<table id=\"gene_info_table\"></table>");
                		$(this).children().each(function(){
                			var name = $(this).get(0).tagName;
                			if(name !="Chromosome" && name != xmlTagFrom && name!= xmlTagTo)
                				$("#gene_info_table").append("<tr><td align=\"left\">"+name+": </td><td align=\"left\">"+$(this).text()+"</td></tr>");
                		});
					}); 
                	//here is you deal code when request returned successfully. To use the return data to generate a picture
                },
                error: function(xmlResponse){
                	//here is you deal code when request returned unsuccessfully.
                	//alert('request error!');
                }
            });
			return false;
		},
		close: function( event, ui ) {
			$("#select_info").css("display", "none");
		},
		select: function( event, ui) {
			var temp_searchStr = ui.item.desc + "";
			chrNum = temp_searchStr.split(":")[0];
			chrLength = chr_Lengths[chrNum];
			var temp_scale = temp_searchStr.split(":")[1];
			start_user = parseInt(temp_scale.split("-")[0]);
			end_user = parseInt(temp_scale.split("-")[1]);
			normalSearchIndex();
			showRef();
			/*$.ajax({ 
                url: "servlet/test.do?action=getGene&gene=" + ui.item.label,//here is your url 
                type:"get",
                dataType: "xml", 
                success: function(xmlResponse) { 
                	//here is you deal code when request returned successfully.
                },
                error: function(xmlResponse){
                	//here is you deal code when request returned unsuccessfully.
                	alert(ui.item.desc);
                }
            });*/
		},
    })
    .data( "ui-autocomplete" )._renderItem = function( ul, item ) {
		return $( "<li id=\"" + item.id + "\">" )
			.append( "<a>" + item.label + "<br>" + "<span class=\"searchListDetail\">" +item.desc + "</span>" + "</a>" )
			.appendTo( ul );
	};
});
/*$(document).ready(function(){
	document.getElementById("track-manage-li").onclick = trackItems_setting;
});*/

function trackItems_setting2(){
	var trackGroups = [];
	trackGroups[0] = [];
	trackGroups[0].name = trackItems[0].group;
	trackGroups[0].trackList = [];
	trackGroups[0].trackList.push(0);
	var i,j,k;
	for(i = 1; i< trackItems.length; i++){
		if(trackItems[i].group){
			for(j = 0; j < trackGroups.length; j ++){
				if(trackItems[i].group == trackGroups[j].name){
					trackGroups[j].trackList.push(i);
					break;
				}
			}
			if(j == trackGroups.length){
				trackGroups[trackGroups.length] = [];
				trackGroups[j].name = trackItems[i].group;
				trackGroups[j].trackList = [];
				trackGroups[j].trackList.push(i);
			}
		}else{
			for(j = 0; j < trackGroups.length; j ++){
				if(trackGroups[j].name == "Custom Tracks"){
					trackGroups[j].trackList.push(i);
					break;
				}
			}
			if(j == trackGroups.length){
				trackGroups[trackGroups.length] = [];
				trackGroups[j].name = "Custom Tracks";
				trackGroups[j].trackList = [];
				trackGroups[j].trackList.push(i);
			}
		}
	}
	var ts_content_centerObj = document.getElementById("tracksmanageOnmainPannel");//.getElementsByTagName("center")[0]
	ts_content_centerObj.innerHTML = "";
	
	var collapse_expand_center = document.createElement("center");
	collapse_expand_center.innerHTML = "<table style=\" width:500px;text-align:center;\"><tr><td><input id=\"ts_collapseBtn\" type=\"button\" value=\"collapse all\"></td><td><input id=\"ts_expandBtn\" type=\"button\" value=\"expand all\"></td></tr></table>";
	ts_content_centerObj.appendChild(collapse_expand_center);
	$("#ts_collapseBtn").click(function(){
		var temp_group_content_nodes = $(ts_content_centerObj).find(".group_content_div");
		for(i=0;i<temp_group_content_nodes.length;i++){
			if($(temp_group_content_nodes[i]).css("display")!="none"){
				$(temp_group_content_nodes[i]).prev().click();
			}
		}
	});
	$("#ts_expandBtn").click(function(){
		var temp_group_content_nodes = $(ts_content_centerObj).find(".group_content_div");
		for(i=0;i<temp_group_content_nodes.length;i++){
			if($(temp_group_content_nodes[i]).css("display")=="none"){
				$(temp_group_content_nodes[i]).prev().click();
			}
		}
	});
	
	var group_divObj;
	var group_title_divObj, group_content_divObj;
	var group_title_name_centerObj, group_title_name_spanObj, group_title_icon_divObj, group_title_icon_spanObj;
	var group_content_tableObj;
	var trNode, tdNode;
	var checkboxObj, labelObj;
	for(i = 0; i < trackGroups.length; i++){
		group_divObj = document.createElement("div");
		group_divObj.id = trackGroups[i].name + "_group";
		group_divObj.className = "group_div";
		group_title_divObj = document.createElement("div");
		group_title_divObj.id = trackGroups[i].name + "_group_title";
		group_title_divObj.className = "group_title_div";
		group_divObj.appendChild(group_title_divObj);
		group_title_divObj.onclick = function(e){
			var title_div_target = e.target || e.srcElement;
			var group_divObj_parent =  $(title_div_target).parents(".group_div")[0];
			var temp_childs = $(group_divObj_parent).children();
			$(temp_childs[1]).slideToggle();
			if($(group_divObj_parent).find(".group_content_hiddenBtn").length > 0){
				$($(group_divObj_parent).find(".group_content_hiddenBtn")[0]).attr("class","group_content_showBtn");
			}else{
				$($(group_divObj_parent).find(".group_content_showBtn")[0]).attr("class","group_content_hiddenBtn");
			}
		};
		group_title_name_centerObj = document.createElement("center");
		group_title_divObj.appendChild(group_title_name_centerObj);
		group_title_name_spanObj = document.createElement("span");
		group_title_name_spanObj.innerHTML = trackGroups[i].name;
		group_title_name_centerObj.appendChild(group_title_name_spanObj);
		
		group_title_icon_divObj = document.createElement("div");
		group_title_name_centerObj.appendChild(group_title_icon_divObj);
		$(group_title_icon_divObj).css({
			"display":"inline-block",
			"float":"right",
			"padding-right":"3px",
		});
		group_title_icon_spanObj = document.createElement("span");
		if(i==0){
			group_title_icon_spanObj.className = "group_content_hiddenBtn";
		}else{
			group_title_icon_spanObj.className = "group_content_showBtn";
		}
		//group_title_icon_spanObj.className = "group_content_showBtn";
		group_title_icon_divObj.appendChild(group_title_icon_spanObj);
		
		group_content_divObj = document.createElement("div");
		group_content_divObj.id = trackGroups[i].name + "_group_content";
		group_divObj.appendChild(group_content_divObj);
		group_content_tableObj = document.createElement("table");
		group_content_tableObj.id = trackGroups[i].name + "_group_content_table";
		group_content_divObj.appendChild(group_content_tableObj);
		for(j = 0; j < trackGroups[i].trackList.length; j++){
			if(j%5 == 0){
				trNode = group_content_tableObj.insertRow(-1);
			}
			tdNode = trNode.insertCell(-1);
			checkboxObj = document.createElement("input");
			checkboxObj.id = trackItems[trackGroups[i].trackList[j]].id + "-chk";
			checkboxObj.type = "checkbox";
			checkboxObj.name = trackGroups[i].name + "-group";
			checkboxObj.value = trackItems[trackGroups[i].trackList[j]].id;
			if(trackItems[trackGroups[i].trackList[j]].mode != "hide"){
				checkboxObj.checked = true;
			}
			tdNode.appendChild(checkboxObj);
			labelObj = document.createElement("label");
			labelObj.setAttribute("for", trackItems[trackGroups[i].trackList[j]].id + "-chk");
			labelObj.innerHTML = trackItems[trackGroups[i].trackList[j]].id;
			tdNode.appendChild(labelObj);
			
			checkboxObj.onclick = function(event){
				var target = event.target || event.srcElement;
				var temp_trackid = target.getAttribute("value");
				var trNode2, tdNode2, temp_tdNode,temp_checkboxObj, temp_labelObj, temp_group;
				if($(target).attr("checked")){
					trackModeOnchange(temp_trackid, "dense");
				}else{
					var temp_superid = null;
					for(k = 0; k < trackItems.length; k++){
						if(trackItems[k].id == temp_trackid){
							if(trackItems[k].superid){
								temp_superid = trackItems[k].superid;
								if(trackItems[k].group){
									temp_group = trackItems[k].group;
								}else{
									temp_group = "Custom Tracks";
								}
							}
							break;
						}
					}
					if(temp_superid){
						var sub_track_num = 0;
						for(k = 0; k < trackItems.length; k++){
							if(trackItems[k].superid && trackItems[k].superid == temp_superid){
								sub_track_num++;
							}
						}
						tdNode2 = target.parentNode;
						trNode2 = tdNode2.parentNode;
						if(sub_track_num == 1){
							temp_tdNode = trNode2.insertCell(-1);
							temp_checkboxObj = document.createElement("input");
							temp_checkboxObj.id = temp_superid + "-chk";
							temp_checkboxObj.type = "checkbox";
							temp_checkboxObj.name = temp_group + "-group";
							temp_checkboxObj.value = temp_superid;
							temp_checkboxObj.checked = true;
							temp_tdNode.appendChild(temp_checkboxObj);
							temp_labelObj = document.createElement("label");
							temp_labelObj.setAttribute("for", temp_superid + "-chk");
							temp_labelObj.innerHTML = temp_superid;
							temp_tdNode.appendChild(temp_labelObj);
							temp_checkboxObj.onclick = function(evt){
								var target2 = evt.target || evt.srcElement;
								var temp_trackid2 = target2.getAttribute("value");
								if($(target2).attr("checked")){
									trackModeOnchange(temp_trackid2, "dense");
								}else{
									trackModeOnchange(temp_trackid2, "hide");
								}
							};
							$(tdNode2).remove();
						}else{
							if(tdNode2.cellIndex == 0){
								$(trNode2).remove();
							}else{
								$(tdNode2).remove();
							}
						}
					}
					removeTrack2(temp_trackid)();
				}
			};
		}
		group_content_divObj.className = "group_content_div";
		if(i==0){
			$(group_content_divObj).css("display","block");
		}else{
			$(group_content_divObj).css("display","none");
		}
		//$(group_content_divObj).css("display","none");
		ts_content_centerObj.appendChild(group_divObj);
	}
}

function trackItems_setting(){
	var trackGroups = [];
	trackGroups[0] = [];
	trackGroups[0].name = trackItems[0].group;
	trackGroups[0].trackList = [];
	trackGroups[0].trackList.push(0);
	var i,j,k;
	for(i = 1; i< trackItems.length; i++){
		if(trackItems[i].group){
			for(j = 0; j < trackGroups.length; j ++){
				if(trackItems[i].group == trackGroups[j].name){
					trackGroups[j].trackList.push(i);
					break;
				}
			}
			if(j == trackGroups.length){
				trackGroups[trackGroups.length] = [];
				trackGroups[j].name = trackItems[i].group;
				trackGroups[j].trackList = [];
				trackGroups[j].trackList.push(i);
			}
		}else{
			for(j = 0; j < trackGroups.length; j ++){
				if(trackGroups[j].name == "Custom Tracks"){
					trackGroups[j].trackList.push(i);
					break;
				}
			}
			if(j == trackGroups.length){
				trackGroups[trackGroups.length] = [];
				trackGroups[j].name = "Custom Tracks";
				trackGroups[j].trackList = [];
				trackGroups[j].trackList.push(i);
			}
		}
	}
	var trackItems_setting_divObj = document.getElementById("trackItems_setting");
	var ts_content_centerObj = document.getElementById("ts_content");//.getElementsByTagName("center")[0]
	ts_content_centerObj.innerHTML = "";
	var group_divObj;
	var group_title_divObj, group_content_divObj;
	var group_title_name_centerObj, group_title_name_spanObj, group_title_icon_divObj, group_title_icon_spanObj;
	var group_content_tableObj;
	var trNode, tdNode;
	var checkboxObj, labelObj;
	for(i = 0; i < trackGroups.length; i++){
		group_divObj = document.createElement("div");
		group_divObj.id = trackGroups[i].name + "_group";
		group_divObj.className = "group_div";
		group_title_divObj = document.createElement("div");
		group_title_divObj.id = trackGroups[i].name + "_group_title";
		group_title_divObj.className = "group_title_div";
		group_divObj.appendChild(group_title_divObj);
		group_title_divObj.onclick = function(e){
			var title_div_target = e.target || e.srcElement;
			var group_divObj_parent =  $(title_div_target).parents(".group_div")[0];
			var temp_childs = $(group_divObj_parent).children();
			$(temp_childs[1]).slideToggle();
			if($(group_divObj_parent).find(".group_content_hiddenBtn").length > 0){
				$($(group_divObj_parent).find(".group_content_hiddenBtn")[0]).attr("class","group_content_showBtn");
			}else{
				$($(group_divObj_parent).find(".group_content_showBtn")[0]).attr("class","group_content_hiddenBtn");
			}
		};
		group_title_name_centerObj = document.createElement("center");
		group_title_divObj.appendChild(group_title_name_centerObj);
		group_title_name_spanObj = document.createElement("span");
		group_title_name_spanObj.innerHTML = trackGroups[i].name;
		group_title_name_centerObj.appendChild(group_title_name_spanObj);
		
		group_title_icon_divObj = document.createElement("div");
		group_title_name_centerObj.appendChild(group_title_icon_divObj);
		$(group_title_icon_divObj).css({
			"display":"inline-block",
			"float":"right",
			"padding-right":"3px",
		});
		group_title_icon_spanObj = document.createElement("span");
		group_title_icon_spanObj.className = "group_content_showBtn";
		group_title_icon_divObj.appendChild(group_title_icon_spanObj);
		
		group_content_divObj = document.createElement("div");
		group_content_divObj.id = trackGroups[i].name + "_group_content";
		group_divObj.appendChild(group_content_divObj);
		group_content_tableObj = document.createElement("table");
		group_content_tableObj.id = trackGroups[i].name + "_group_content_table";
		group_content_divObj.appendChild(group_content_tableObj);
		for(j = 0; j < trackGroups[i].trackList.length; j++){
			if(j%5 == 0){
				trNode = group_content_tableObj.insertRow(-1);
			}
			tdNode = trNode.insertCell(-1);
			checkboxObj = document.createElement("input");
			checkboxObj.id = trackItems[trackGroups[i].trackList[j]].id + "-chk";
			checkboxObj.type = "checkbox";
			checkboxObj.name = trackGroups[i].name + "-group";
			checkboxObj.value = trackItems[trackGroups[i].trackList[j]].id;
			if(trackItems[trackGroups[i].trackList[j]].mode != "hide"){
				checkboxObj.checked = true;
			}
			tdNode.appendChild(checkboxObj);
			labelObj = document.createElement("label");
			labelObj.setAttribute("for", trackItems[trackGroups[i].trackList[j]].id + "-chk");
			labelObj.innerHTML = trackItems[trackGroups[i].trackList[j]].id;
			tdNode.appendChild(labelObj);
			
			checkboxObj.onclick = function(event){
				var target = event.target || event.srcElement;
				var temp_trackid = target.getAttribute("value");
				var trNode2, tdNode2, temp_tdNode,temp_checkboxObj, temp_labelObj, temp_group;
				if($(target).attr("checked")){
					trackModeOnchange(temp_trackid, "dense");
				}else{
					var temp_superid = null;
					for(k = 0; k < trackItems.length; k++){
						if(trackItems[k].id == temp_trackid){
							if(trackItems[k].superid){
								temp_superid = trackItems[k].superid;
								if(trackItems[k].group){
									temp_group = trackItems[k].group;
								}else{
									temp_group = "Custom Tracks";
								}
							}
							break;
						}
					}
					if(temp_superid){
						var sub_track_num = 0;
						for(k = 0; k < trackItems.length; k++){
							if(trackItems[k].superid && trackItems[k].superid == temp_superid){
								sub_track_num++;
							}
						}
						tdNode2 = target.parentNode;
						trNode2 = tdNode2.parentNode;
						if(sub_track_num == 1){
							temp_tdNode = trNode2.insertCell(-1);
							temp_checkboxObj = document.createElement("input");
							temp_checkboxObj.id = temp_superid + "-chk";
							temp_checkboxObj.type = "checkbox";
							temp_checkboxObj.name = temp_group + "-group";
							temp_checkboxObj.value = temp_superid;
							temp_checkboxObj.checked = true;
							temp_tdNode.appendChild(temp_checkboxObj);
							temp_labelObj = document.createElement("label");
							temp_labelObj.setAttribute("for", temp_superid + "-chk");
							temp_labelObj.innerHTML = temp_superid;
							temp_tdNode.appendChild(temp_labelObj);
							temp_checkboxObj.onclick = function(evt){
								var target2 = evt.target || evt.srcElement;
								var temp_trackid2 = target2.getAttribute("value");
								if($(target2).attr("checked")){
									trackModeOnchange(temp_trackid2, "dense");
								}else{
									trackModeOnchange(temp_trackid2, "hide");
								}
							};
							$(tdNode2).remove();
						}else{
							if(tdNode2.cellIndex == 0){
								$(trNode2).remove();
							}else{
								$(tdNode2).remove();
							}
						}
					}
					removeTrack2(temp_trackid)();
				}
			};
		}
		group_content_divObj.className = "group_content_div";
		$(group_content_divObj).css("display","none");
		ts_content_centerObj.appendChild(group_divObj);
	}
	var collapse_expand_center = document.createElement("center");
	collapse_expand_center.innerHTML = "<table style=\" width:500px;text-align:center;\"><tr><td><input id=\"ts_collapseBtn\" type=\"button\" value=\"collapse all\"></td><td><input id=\"ts_expandBtn\" type=\"button\" value=\"expand all\"></td></tr></table>";
	ts_content_centerObj.appendChild(collapse_expand_center);
	$("#ts_collapseBtn").click(function(){
		var temp_group_content_nodes = $(ts_content_centerObj).find(".group_content_div");
		for(i=0;i<temp_group_content_nodes.length;i++){
			if($(temp_group_content_nodes[i]).css("display")!="none"){
				$(temp_group_content_nodes[i]).prev().click();
			}
		}
	});
	$("#ts_expandBtn").click(function(){
		var temp_group_content_nodes = $(ts_content_centerObj).find(".group_content_div");
		for(i=0;i<temp_group_content_nodes.length;i++){
			if($(temp_group_content_nodes[i]).css("display")=="none"){
				$(temp_group_content_nodes[i]).prev().click();
			}
		}
	});
	var overlayDIV = document.getElementById("overlayDIV");
	$(overlayDIV).css("display","block");
	var tsLeft = (document.body.clientWidth - $("#trackItems_setting").width())/2;
	var tsTop = (document.body.clientHeight - $("#trackItems_setting").height())/2;
	$("#trackItems_setting").css("left", tsLeft);
	$("#trackItems_setting").css("top", tsTop);
	$("#trackItems_setting").css("display","block");
	document.getElementById("ts_closeBtn").onclick = tracksettingpannel_close;
	overlayDIV.onclick = tracksettingpannel_close;
}
function tracksettingpannel_close(){
	$("#overlayDIV").css("display","none");
	$("#trackItems_setting").css("display","none");
}
function trackItems_setting3(){//individualItems setting

	document.getElementById("indset_radio").innerHTML="";
	document.getElementById("builtin_1000g").innerHTML="Loading...";
	document.getElementById("external_uploaded").innerHTML="Loading...";
	document.getElementById("uprogress").innerHTML="";
	control_upexternal=0;

	var individuals=[];//includes personal TRACKs, each unit has trackname, samples, samples is also array
	var exindividuals=[];//includes personal TRACKs, each unit has trackname, samples, samples is also array

	var pattern = /<.*?>/g;
	var indslist;
	var inds_temp;

	XMLHttpReq6.open("GET","servlet/test.do?action=getIndividuals",false);
	XMLHttpReq6.send(null);
	indslist=XMLHttpReq6.responseText.replace(pattern,"");
	inds_temp=indslist.split(",");
	if(inds_temp!=null && inds_temp[0]!=""){
		for(var idx=0;idx<inds_temp.length;idx++){
			var ind_temp=inds_temp[idx].split(":");
			individuals[individuals.length] = {};
			individuals[individuals.length-1].track = ind_temp[0];
			individuals[individuals.length-1].samples = ind_temp[1].split(";");
		}
	}

	XMLHttpReq6.open("GET","servlet/test.do?action=getExIndividuals",false);
	XMLHttpReq6.send(null);
	indslist=XMLHttpReq6.responseText.replace(pattern,"");
	inds_temp=indslist.split(",");
	if(inds_temp!=null && inds_temp[0]!=""){
		for(var idx=0;idx<inds_temp.length;idx++){
			var ind_temp=inds_temp[idx].split(":");
			exindividuals[exindividuals.length] = {};
			exindividuals[exindividuals.length-1].track = ind_temp[0];
			exindividuals[exindividuals.length-1].samples = ind_temp[1].split(";");
		}
	}

	document.getElementById("builtin_1000g").innerHTML="";
	document.getElementById("external_uploaded").innerHTML="";

	var group_title_divObj, group_content_divObj;
	var radioObj, radioboxObj, labelObj;
	var i,j,k;

	for(i = 0; i < individuals.length; i++){
		group_title_divObj = document.createElement("div");
		group_title_divObj.id = individuals[i].track + "_group_title";
		group_title_divObj.className = "IW_track_btn";
		if(individuals[i].track.substring(0,11)=="1000genome_"){
			$(group_title_divObj).css("width","50px");
			$(group_title_divObj).css("text-align","center");
			document.getElementById("builtin_1000g").appendChild(group_title_divObj);
			group_title_divObj.innerHTML=individuals[i].track.substring(11);
		}else{
			document.getElementById("external_uploaded").appendChild(group_title_divObj);
			group_title_divObj.innerHTML=individuals[i].track;
		}

		group_content_divObj = document.createElement("div");
		group_content_divObj.id = individuals[i].track + "_group_content";
		group_content_divObj.className = "IW_group_radio";
		document.getElementById("indset_radio").appendChild(group_content_divObj);
		$(group_content_divObj).css("display","none");

		for(j = 0; j < individuals[i].samples.length; j++){
			radioObj = document.createElement("span");
			group_content_divObj.appendChild(radioObj);

			radioboxObj = document.createElement("input");
			radioboxObj.id = individuals[i].track+"_"+individuals[i].samples[j] + "-chk";
			radioboxObj.type = "radio";
			radioboxObj.name = "individualselection";
			radioboxObj.value = individuals[i].samples[j]+'@'+individuals[i].track;
			if('_' + individuals[i].samples[j] == personalPannel.Pvar.id && individuals[i].track == initPvar_superid){
				radioboxObj.checked = true;
			}
			radioObj.appendChild(radioboxObj);

			labelObj = document.createElement("label");
			labelObj.setAttribute("for", individuals[i].samples[j] + "-chk");
			labelObj.innerHTML = individuals[i].samples[j];
			radioObj.appendChild(labelObj);

			$(radioObj).css({
				"float":"left",
				"clear":"both",
				"margin":"2px"
			});
			
			radioboxObj.onclick = function(event){
				var target = event.target || event.srcElement;
				var Pvar_id = target.getAttribute("value").split('@');
				if(personalPinned){
				}else{
					var trParentNode = document.getElementById("divTrack");
				//	var trTop = $(trParentNode).position().top - document.body.scrollTop;
					var trTop = (document.body.clientHeight + document.body.scrollTop - $("#personalPannel").height() - 10);
					var trLeft = $(trParentNode).position().left;
					if(isMini_personalpannel == 1){
						// if the personal pannel is mini
						var trackTable_width = $("#divTrack").width();
						$(document.getElementById("personalPannel")).css("height", "auto");
						$(document.getElementById("personalPannel")).css("width", trackTable_width);
						$('#showWindowBtn').remove();
					}
					$(document.getElementById("personalPannel")).css("display", "block");
					$(document.getElementById("personalPannel")).css("top", trTop);
					$(document.getElementById("personalPannel")).css("left", trLeft - 1);
					document.getElementById("ppTrackTable").innerHTML = "";
					$(document.getElementById("ppCloseBtn")).unbind();
					$(document.getElementById("ppMin")).unbind();
					$(document.getElementById("ppPin")).unbind();
					$(document.getElementById("ppSet")).unbind();
					$(document.getElementById("ppCloseBtn")).click(removePvar);
					$(document.getElementById("ppMin")).click(miniPersonalPannel);
					$(document.getElementById("ppPin")).click(pinPersonalPannel);
					$(document.getElementById("ppSet")).click(setPersonalPannel);
				}
				addPvarHttpRequest2(Pvar_id[0],Pvar_id[1]); 
				indsetWindow_close();
				//to be test whether need closet
			};
		}
	}
	for(i = 0; i < exindividuals.length; i++){
		var group_title_and_btn = document.createElement("div");
		document.getElementById("external_uploaded").appendChild(group_title_and_btn);
		$(group_title_and_btn).css("float","left");
		group_title_divObj = document.createElement("span");
		group_title_divObj.id = exindividuals[i].track + "_group_title";
		group_title_divObj.className = "IW_track_upload_btn";
		group_title_and_btn.appendChild(group_title_divObj);
		group_title_divObj.innerHTML=exindividuals[i].track;
		var group_del_btn = document.createElement("span");
		group_title_and_btn.appendChild(group_del_btn);
		group_del_btn.id = exindividuals[i].track + "_del_btn";
		group_del_btn.className = "IW_track_close_btn";
		group_del_btn.innerHTML = "&times";

		group_del_btn.onclick = function(event){
			var target = event.target || event.srcElement;
			var trackId_temp = target.id.substring(0,target.id.length-8);
			if(initPvar_superid == trackId_temp){
				removePvar();
			}
			XMLHttpReq6.open("GET","servlet/test.do?action=removeExternals&tracks="+trackId_temp,false);
			XMLHttpReq6.send(null);
			$(document.getElementById(trackId_temp+"_group_content")).css("display","none");
			$(target.parentNode).css("display","none");
			target.parentNode.remove(); //sometimes appears error in firefox
/*These codes are for display loaded track in reference track management
 * Temporarily cancled.
			var cookieStr;
			if($.cookie("customTrackList")){
				cookieStr = $.cookie("customTrackList");
			}else{
				return;
			}
			var customtrackList = [];
			var customtrackCookieList = cookieStr.split(",");
			for(var i = 0; i < customtrackCookieList.length; i++){
				customtrackList[i] = [];
				customtrackList[i].id = customtrackCookieList[i].split(":")[0];
				customtrackList[i].mode = customtrackCookieList[i].split(":")[1];
				customtrackList[i].dataType = customtrackCookieList[i].split(":")[2];
			}
			var external_trackids_str = trackId_temp;
			for(var j = 0; j < trackItems.length; j++){
				if(trackItems[j].isServer == 0 && trackItems[j].id == trackId_temp){
					$("#" + trackItems[j].id).remove();
					trackItems.splice(j, 1);
					j--;
				}
			}
			for(var k = 0; k < customtrackList.length; k++){
				if(customtrackList[k].id == trackId_temp){
					customtrackList.splice(k, 1);
					k--;
				}
			}
			if(customtrackList.length == 0){
				$.cookie("customTrackList", null);
			}else{
				cookieStr = "";
				for(var i = 0; i < customtrackList.length; i++){
					cookieStr = cookieStr + customtrackList[i].id + ":" + customtrackList[i].mode + ":" + customtrackList[i].dataType + ",";
				}
				cookieStr = cookieStr.replace(/,$/gi,"");
				$.cookie("customTrackList", cookieStr);
			}
			trackItems_setting2();
*/
		};

		group_content_divObj = document.createElement("div");
		group_content_divObj.id = exindividuals[i].track + "_group_content";
		group_content_divObj.className = "IW_group_radio";
		document.getElementById("indset_radio").appendChild(group_content_divObj);
		$(group_content_divObj).css("display","none");

		for(j = 0; j < exindividuals[i].samples.length; j++){
			radioObj = document.createElement("div");
			group_content_divObj.appendChild(radioObj);

			radioboxObj = document.createElement("input");
			radioboxObj.id = exindividuals[i].track+"_"+exindividuals[i].samples[j] + "-chk";
			radioboxObj.type = "radio";
			radioboxObj.name = "individualselection";
			radioboxObj.value = exindividuals[i].samples[j]+'@'+exindividuals[i].track;
			if('_' + exindividuals[i].samples[j] == personalPannel.Pvar.id && exindividuals[i].track == initPvar_superid){
				radioboxObj.checked = true;
			}
			radioObj.appendChild(radioboxObj);

			labelObj = document.createElement("label");
			labelObj.setAttribute("for", exindividuals[i].samples[j] + "-chk");
			labelObj.innerHTML = exindividuals[i].samples[j];
			radioObj.appendChild(labelObj);

			$(radioObj).css({
				"float":"left",
				"clear":"both",
				"margin":"2px"
			});
			
			radioboxObj.onclick = function(event){
				var target = event.target || event.srcElement;
				var Pvar_id = target.getAttribute("value").split('@');
				if(personalPinned){
				}else{
					var trParentNode = document.getElementById("divTrack");
					var trTop = $(trParentNode).position().top - document.body.scrollTop;
					var trLeft = $(trParentNode).position().left;
					if(isMini_personalpannel == 1){
						// if the personal pannel is mini
						var trackTable_width = $("#divTrack").width();
						$(document.getElementById("personalPannel")).css("height", "auto");
						$(document.getElementById("personalPannel")).css("width", trackTable_width);
						$('#showWindowBtn').remove();
					}
					$(document.getElementById("personalPannel")).css("display", "block");
					$(document.getElementById("personalPannel")).css("top", trTop);
					$(document.getElementById("personalPannel")).css("left", trLeft - 1);
					document.getElementById("ppTrackTable").innerHTML = "";
					$(document.getElementById("ppCloseBtn")).unbind();
					$(document.getElementById("ppMin")).unbind();
					$(document.getElementById("ppPin")).unbind();
					$(document.getElementById("ppSet")).unbind();
					$(document.getElementById("ppCloseBtn")).click(removePvar);
					$(document.getElementById("ppMin")).click(miniPersonalPannel);
					$(document.getElementById("ppPin")).click(pinPersonalPannel);
					$(document.getElementById("ppSet")).click(setPersonalPannel);
				}
				addPvarHttpRequest2(Pvar_id[0],Pvar_id[1]); 
				indsetWindow_close();
				//to be test whether need closet
			};
		}
	}
	for(i = 0; i < individuals.length; i++){
		document.getElementById(individuals[i].track+"_group_title").onclick = function(event){
			var target = event.target || event.srcElement;
			var trackId_temp = target.getAttribute("id");
			for(var group_idx=0;group_idx<individuals.length;group_idx++){
				if((individuals[group_idx].track+"_group_title")!=trackId_temp){
					$(document.getElementById(individuals[group_idx].track+"_group_content")).css("display","none");
				}else{
					$(document.getElementById(individuals[group_idx].track+"_group_content")).css("display","block");
				}
			}
			for(var group_idx=0;group_idx<exindividuals.length;group_idx++){
				$(document.getElementById(exindividuals[group_idx].track+"_group_content")).css("display","none");
			}
		}
	}
	for(i = 0; i < exindividuals.length; i++){
		document.getElementById(exindividuals[i].track+"_group_title").onclick = function(event){
			var target = event.target || event.srcElement;
			var trackId_temp = target.getAttribute("id");
			for(var group_idx=0;group_idx<individuals.length;group_idx++){
				$(document.getElementById(individuals[group_idx].track+"_group_content")).css("display","none");
			}
			for(var group_idx=0;group_idx<exindividuals.length;group_idx++){
				if(trackId_temp!=(exindividuals[group_idx].track+"_group_title")){
					$(document.getElementById(exindividuals[group_idx].track+"_group_content")).css("display","none");
				}else{
					$(document.getElementById(exindividuals[group_idx].track+"_group_content")).css("display","block");
				}
			}
		}
	}
}

$(document).ready(function(){
//	document.getElementById("helpWindow-li").onclick = helpWindow_alert;
	document.getElementById("indsetWindow-li").onclick = indsetWindow_alert;
	document.getElementById("browseJump").onclick = browseJumpWindow_alert;
	document.getElementById("browseJumpIcon2").onclick = browseJumpWindow_alert;
});

//function helpWindow_alert(){
//	var overlayDIV = document.getElementById("helpWindow_overlayDIV");
//	$(overlayDIV).css("display","block");
//	var tsLeft = (document.body.clientWidth - $("#helpWindow").width())/2;
//	var tsTop = (document.body.clientHeight - $("#helpWindow").height())/2;
//	$("#helpWindow").css("left", tsLeft);
//	$("#helpWindow").css("top", tsTop);
//	$("#helpWindow").css("display","block");
//	document.getElementById("HW_closeBtn").onclick = helpWindow_close;
//	overlayDIV.onclick = helpWindow_close;
//}
function indsetWindow_alert(){
	var overlayDIV = document.getElementById("indsetWindow_overlayDIV");
	$(overlayDIV).css("display","block");
	var tsLeft = (document.body.clientWidth - $("#indsetWindow").width())/2;
	var tsTop = (document.body.clientHeight - $("#indsetWindow").height())/2;
	$("#indsetWindow").css("left", tsLeft);
	$("#indsetWindow").css("top", tsTop);
	$("#indsetWindow").css("display","block");
	document.getElementById("IW_closeBtn").onclick = indsetWindow_close;
	overlayDIV.onclick = indsetWindow_close;
	trackItems_setting3();
}
function browseJumpWindow_alert(){
	var overlayDIV = document.getElementById("browseJumpWindow_overlayDIV");
	$(overlayDIV).css("display","block");
	var tsLeft = (document.body.clientWidth - $("#browseJumpWindow").width())/2;
	var tsTop = (document.body.clientHeight - $("#browseJumpWindow").height())/2;
	$("#browseJumpWindow").css("left", tsLeft);
	$("#browseJumpWindow").css("top", tsTop);
	$("#browseJumpWindow").css("display","block");
	document.getElementById("BJW_closeBtn").onclick = browseJumpWindow_close;
	overlayDIV.onclick = browseJumpWindow_close;
	BJW_closeRank();
	loadChrBand();
	//to be set reactions
}

//function helpWindow_close(){
//	$("#helpWindow_overlayDIV").css("display","none");
//	$("#helpWindow").css("display","none");
//}
function indsetWindow_close(){
	if(control_upexternal){
		alert("There are data in uploading, please wait it complete.");
		alert("If the upload is failed or unable to response, plase reopen the whole page.");
	}else{
		$("#indsetWindow_overlayDIV").css("display","none");
		$("#indsetWindow").css("display","none");
	}
}
function browseJumpWindow_close(){
	$("#browseJumpWindow_overlayDIV").css("display","none");
	$("#browseJumpWindow").css("display","none");
	var ff = document.getElementById("file_field");
	ff.outerHTML=ff.outerHTML;
	document.getElementById("upload_success").innerHTML="";
	control_scanning=0;
}

$(document).ready(function(){
	$(document.getElementsByClassName("custom-track-li")[0]).bind("click", init_removeExternals_pannel);
	$("#removeexternals_li").bind("click", init_removeExternals_pannel);
	$("#remove_externals_all").bind("click", removeExternals_allselect);
	$("#remove_externals_btn").bind("click", removeExternals);
});

function init_removeExternals_pannel(){
	var i, external_num;
	var externals_container_divObj = document.getElementById("externals_container");
	externals_container_divObj.innerHTML = "";
	var externals_tableObj = document.createElement("table");
	externals_container_divObj.appendChild(externals_tableObj);
	var checkboxObj, labelObj, trNode, tdNode;
	external_num = 0;

//	var XMLHttpReq14 = createXMLHttpRequest();//for getExternals
//	XMLHttpReq14.open("GET","servlet/test.do?action=getExternals",false);
//	XMLHttpReq14.send(null);
//	var pattern = /<.*?>/g;
//	var external_trackItems = XMLHttpReq14.responseText.replace(pattern,"").split(","); 
//
//	for(i = 0; i < external_trackItems.length; i++){
//		if(external_trackItems[i] != null && external_trackItems[i] != ""){
//			var external_trackItem_id = external_trackItems[i].split(":")[1];
//			if(external_num%3 == 0){
//				trNode = externals_tableObj.insertRow(-1);
//			}
//			tdNode = trNode.insertCell(-1);
//			$(tdNode).attr("style","width: 217px;");
//			checkboxObj = document.createElement("input");
//			checkboxObj.type = "checkbox";
//			checkboxObj.id = external_trackItem_id + "externals" + "chk";
//			checkboxObj.value = external_trackItem_id;
//			checkboxObj.name = "remove_externals_chk";
//			tdNode.appendChild(checkboxObj);
//			labelObj = document.createElement("label");
//			labelObj.setAttribute("for", external_trackItem_id + "externals" + "chk");
//			$(labelObj).attr("style","font-size: 12px;");
//			labelObj.innerHTML = external_trackItem_id;
//			tdNode.appendChild(labelObj);
//			external_num++;
//		}
//	}
	for(i = 0; i < trackItems.length; i++){
		if(trackItems[i].isServer == 0){
			if(external_num%3 == 0){
				trNode = externals_tableObj.insertRow(-1);
			}
			tdNode = trNode.insertCell(-1);
			$(tdNode).attr("style","width: 217px;");
			checkboxObj = document.createElement("input");
			checkboxObj.type = "checkbox";
			checkboxObj.id = trackItems[i].id + "externals" + "chk";
			checkboxObj.value = trackItems[i].id;
			checkboxObj.name = "remove_externals_chk";
			tdNode.appendChild(checkboxObj);
			labelObj = document.createElement("label");
			labelObj.setAttribute("for", trackItems[i].id + "externals" + "chk");
			$(labelObj).attr("style","font-size: 12px;");
			labelObj.innerHTML = trackItems[i].id;
			tdNode.appendChild(labelObj);
			external_num++;
		}
	}
	document.getElementById("remove_externals_all").checked = false;
}

function removeExternals_allselect(event){
	var target = event.target || event.srcElement;
	var chrCheckList = document.getElementsByName("remove_externals_chk");
	if($(target).attr("checked")){
		for(var i = 0; i < chrCheckList.length; i++) {
			chrCheckList[i].checked = true;
		}
	}else{
		for(var i = 0; i < chrCheckList.length; i++) {
			chrCheckList[i].checked = false;
		}
	}
}

function removeExternals(){
	var cookieStr;
	if($.cookie("customTrackList")){
		cookieStr = $.cookie("customTrackList");
	}else{
		return;
	}
	var customtrackList = [];
	var customtrackCookieList = cookieStr.split(",");
	for(var i = 0; i < customtrackCookieList.length; i++){
		customtrackList[i] = [];
		customtrackList[i].id = customtrackCookieList[i].split(":")[0];
		customtrackList[i].mode = customtrackCookieList[i].split(":")[1];
		customtrackList[i].dataType = customtrackCookieList[i].split(":")[2];
	}
	var externalCheckList = document.getElementsByName("remove_externals_chk");
	var external_trackids_str = "";
	for(var i=0; i < externalCheckList.length; i++){
		if($(externalCheckList[i]).attr("checked")){
			external_trackids_str = external_trackids_str + $(externalCheckList[i]).attr("value") + ",";
			if(initPvar_superid == $(externalCheckList[i]).attr("value")){
				removePvar();
			}
			for(var j = 0; j < trackItems.length; j++){
				if(trackItems[j].isServer == 0 && trackItems[j].id == $(externalCheckList[i]).attr("value")){
					$("#" + trackItems[j].id).remove();
					trackItems.splice(j, 1);
					j--;
				}
			}
			for(var k = 0; k < customtrackList.length; k++){
				if(customtrackList[k].id == $(externalCheckList[i]).attr("value")){
					customtrackList.splice(k, 1);
					k--;
				}
			}
		}
	}
	if(customtrackList.length == 0){
		$.cookie("customTrackList", null);
	}else{
		cookieStr = "";
		for(var i = 0; i < customtrackList.length; i++){
			cookieStr = cookieStr + customtrackList[i].id + ":" + customtrackList[i].mode + ":" + customtrackList[i].dataType + ",";
		}
		cookieStr = cookieStr.replace(/,$/gi,"");
		$.cookie("customTrackList", cookieStr);
	}
	if(external_trackids_str!=""){
		external_trackids_str = external_trackids_str.replace(/,$/gi,"");
		var url = "servlet/test.do?action=removeExternals&tracks=" + external_trackids_str;
		XMLHttpReq.onreadystatechange = null;
		XMLHttpReq.open("GET", url, false);
		XMLHttpReq.send(null);
	}
	$("#removeexternals_li").click();
	trackItems_setting2();
}

$(function() {
	$("#tabContentDiv").tabs();
	$("#slider").slider({
		min : 0,
		max : 30
	});
	$("#slider").on("slide", function(event, ui) {
		var sliderMaxValue = parseInt($( "#slider" ).slider( "option", "max" ));
		var baseLength = trackLength_user / 10;
		var newScale = baseLength * Math.pow(2, sliderMaxValue - ui.value);
		//取10000000作为width 和 left的限定值是因为left和width在css中比这个值稍微大一点就会失去作用，所以加了一下限制
		//而且在变化这么大的倍数下，再大的变化已经看不出来了
		var width = Math.round(searchLength_user / newScale * trackLength) < 10000000 ? Math.round(searchLength_user / newScale * trackLength) : 10000000;
		var left = Math.round((trackLength_user - width)/2);
		$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
			$(arrayele).width(width);
			$(arrayele).css("left", left);
		});
		if(newScale > chrLength){
			newScale = chrLength;
		}
		var temp_start_user = start_user + (searchLength_user - newScale)/2;
		if(temp_start_user + newScale - 1 > chrLength){
			temp_start_user = chrLength - newScale + 1;
		}
		if(temp_start_user < 1){
			temp_start_user = 1;
		}
		drawScaleboxOnCytobandsImg(newScale, temp_start_user);
		showuserSearchIndex(temp_start_user, temp_start_user + newScale - 1);
	});
	$("#slider").on("slidestop", function(event, ui){
		var sliderMaxValue = parseInt($( "#slider" ).slider( "option", "max" ));
		var baseLength = trackLength_user / 10;
		var newScale = baseLength * Math.pow(2, sliderMaxValue - ui.value);
		var temp_start_user;
		if(newScale > chrLength){
			newScale = chrLength;
		}
		temp_start_user = Math.round(start_user + (searchLength_user - newScale)/2);
		if(temp_start_user < 1){
			temp_start_user = 1;
		}
		if(temp_start_user + newScale - 1 > chrLength){
			temp_start_user = chrLength - newScale + 1;
		}
		start_user = temp_start_user;
		searchLength_user = newScale;
		end_user = start_user + searchLength_user - 1;
		startIndex = start_user - searchLength_user;
		endIndex = end_user + searchLength_user;
		searchLength = searchLength_user * 3;
		
		showRef();
	});
});

function setSliderMax(){
	var baseLength = trackLength_user / 10;
	var sliderMaxValue = Math.ceil(Math.log(chrLength / baseLength) / Math.log(2));
	$("#slider").slider("option", "max", sliderMaxValue);
}

function setSliderValue(scale){
	var baseLength = trackLength_user / 10;
	var sliderMaxValue = $("#slider").slider("option", "max");
	var sliderValue = Math.log(scale / baseLength) / Math.log(2);
	$("#slider").slider("value", sliderMaxValue - sliderValue);
}

function addMousewheelEvent(DomObj, handler){
	if(DomObj.addEventListener) {
		DomObj.addEventListener("mousewheel", handler, false);
		DomObj.addEventListener("DOMMouseScroll", handler, false);
	} else {
		DomObj.attachEvent("onmousewheel", handler);
	}
}
var mousewheelzoomScale, mousewheelzoomStart, mousewheelFlag;
function mousewheelHandler(e){
	if(zKeyState){
		var baseLength = trackLength_user / 10;
		var e = window.event || e;
		var eventPosition = mouseCoords(e);
		//不用target原因是：在personal pannel中的定位与human中的定位不同
		//var target = e.target || e.srcElement;
		var canvasPositionLeft = $("#refTrack1").position().left;
		var canvasCssLeft = parseInt($("#refTrack1").css("left"));
		var canvasWidth = $("#refTrack1").width();
		var zoomNum = 2;
		var mouseOffsetOnCanvas = eventPosition.x - canvasPositionLeft;
		var mouseOffsetOntrackcontentTD = mouseOffsetOnCanvas + canvasCssLeft;
		var mouseLeftScale = mousewheelzoomScale * mouseOffsetOntrackcontentTD / trackLength_user;
		var mouseRightScale = mousewheelzoomScale - mouseLeftScale;

		if((e.wheelDelta || -e.detail) > 0) {
			if(mousewheelzoomScale > baseLength) {
				mousewheelzoomStart = Math.round(mousewheelzoomStart + mouseLeftScale / 2);
				mousewheelzoomScale = Math.round(mousewheelzoomScale / 2);
				if(canvasWidth * zoomNum < 10000000 && mouseOffsetOntrackcontentTD - mouseOffsetOnCanvas * zoomNum < 10000000) {//这个条件判断同样是防止大数值对于css left 和 width 的失效
					$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
						$(arrayele).width(canvasWidth * zoomNum);
						$(arrayele).css("left", mouseOffsetOntrackcontentTD - mouseOffsetOnCanvas * zoomNum);
					});
				}
			}
		} else {
			if(mousewheelzoomScale < chrLength) {
				mousewheelzoomStart = Math.round(mousewheelzoomStart - mouseLeftScale);
				mousewheelzoomScale = Math.round(mousewheelzoomScale * 2);
				$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
					$(arrayele).width(canvasWidth / zoomNum);
					$(arrayele).css("left", mouseOffsetOntrackcontentTD - mouseOffsetOnCanvas / zoomNum);
				});
			}
		}
		if(mousewheelzoomScale > chrLength) {
			mousewheelzoomScale = chrLength;
		}
		if(mousewheelzoomScale < baseLength) {
			mousewheelzoomScale = baseLength;
		}
		if(mousewheelzoomStart < 1) {
			mousewheelzoomStart = 1;
		}
		if(mousewheelzoomStart + mousewheelzoomScale - 1 > chrLength) {
			mousewheelzoomStart = chrLength - mousewheelzoomScale + 1;
		}
		searchLength_user = mousewheelzoomScale;
		start_user = mousewheelzoomStart;
		setSliderValue(mousewheelzoomScale);
		drawScaleboxOnCytobandsImg(mousewheelzoomScale, mousewheelzoomStart);
		showuserSearchIndex(start_user, start_user + searchLength_user - 1);

		//prevent default event handler of the browser
		if(e && e.preventDefault){
			e.preventDefault();
		}else{
			window.event.returnValue = false;
		}
		return false;
	}
}

$(document).ready(function(){
	addMousewheelEvent(document.getElementById("refTrack1"), mousewheelHandler);
});

function normalSearchIndex(){
	searchLength_user = end_user - start_user + 1;
	if(searchLength_user < trackLength_user / 10) {
		var temp_d = parseInt(trackLength_user/10) - searchLength_user;
		if(temp_d % 2 == 0) {
			start_user = start_user - temp_d / 2;
			end_user = end_user + temp_d / 2;
		} else {
			start_user = start_user - (parseInt(temp_d / 2) + 1);
			end_user = end_user + parseInt(temp_d / 2);
		}
	}
	if(start_user < 1){
		start_user = 1;
	}
	if(end_user > chrLength){
		end_user = chrLength;
	}
	searchLength_user = end_user - start_user + 1;
	if(searchLength_user < trackLength_user / 10){
		if(start_user == 1){
			end_user = parseInt(trackLength_user / 10);
		}else{
			start_user = end_user - parseInt(trackLength_user / 10) + 1;
		}
	}
	searchLength_user = end_user - start_user + 1;
	startIndex = start_user - searchLength_user;
	endIndex = end_user + searchLength_user;
	searchLength = searchLength_user * 3;
}

$(document).ready(function(){
	$("#zoomin").bind("click", sliderZoominBtn);
	$("#zoomout").bind("click", sliderZoomoutBtn);
});

function sliderZoominBtn(){
	var sliderMaxValue = $("#slider").slider("option", "max");
	var sliderValue = parseInt($( "#slider" ).slider( "value" ));
	if(sliderValue < sliderMaxValue){
		$( "#slider" ).slider( "value" , sliderValue + 1);
		
		var baseLength = trackLength_user / 10;
		var newScale = baseLength * Math.pow(2, sliderMaxValue - sliderValue - 1);
		var temp_start_user;
		if(newScale > chrLength) {
			newScale = chrLength;
		}
		temp_start_user = Math.round(start_user + (searchLength_user - newScale) / 2);
		if(temp_start_user < 1) {
			temp_start_user = 1;
		}
		if(temp_start_user + newScale - 1 > chrLength) {
			temp_start_user = chrLength - newScale + 1;
		}
		start_user = temp_start_user;
		searchLength_user = newScale;
		end_user = start_user + searchLength_user - 1;
		startIndex = start_user - searchLength_user;
		endIndex = end_user + searchLength_user;
		searchLength = searchLength_user * 3;
		
		drawScaleboxOnCytobandsImg(searchLength_user, start_user);
		showuserSearchIndex(start_user, end_user);
	
		showRef();
	}
}

function sliderZoomoutBtn(){
	var sliderMaxValue = $("#slider").slider("option", "max");
	var sliderValue = parseInt($( "#slider" ).slider( "value" ));
	if(sliderValue > 0){
		$( "#slider" ).slider( "value" , sliderValue - 1);
		
		var baseLength = trackLength_user / 10;
		var newScale = baseLength * Math.pow(2, sliderMaxValue - sliderValue + 1);
		var temp_start_user;
		if(newScale > chrLength) {
			newScale = chrLength;
		}
		temp_start_user = Math.round(start_user + (searchLength_user - newScale) / 2);
		if(temp_start_user < 1) {
			temp_start_user = 1;
		}
		if(temp_start_user + newScale - 1 > chrLength) {
			temp_start_user = chrLength - newScale + 1;
		}
		start_user = temp_start_user;
		searchLength_user = newScale;
		end_user = start_user + searchLength_user - 1;
		startIndex = start_user - searchLength_user;
		endIndex = end_user + searchLength_user;
		searchLength = searchLength_user * 3;
		
		drawScaleboxOnCytobandsImg(searchLength_user, start_user);
		showuserSearchIndex(start_user, end_user);
	
		showRef();
	}
}

function dragStopHandler(canvasCSSLeft){
	var dragDistance = canvasCSSLeft + trackLength_user;
	var dragScale = Math.round(dragDistance * searchLength_user / trackLength_user);
	var temp_start_user = start_user - dragScale;
	if(temp_start_user < 1 && startIndex <= 1){
		$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
			$(arrayele).animate({"left":(startIndex - 1) / searchLength * trackLength});
		});
	}else if(temp_start_user + searchLength_user - 1 > chrLength && endIndex >= chrLength){
		$(".canvasTrackcontent").each(function(arrayindex, arrayele) {
			$(arrayele).animate({"left":trackLength_user - (chrLength - startIndex) / searchLength * trackLength});
		});
	}else{
		start_user = temp_start_user;
		end_user = start_user + searchLength_user - 1;
		startIndex = start_user - searchLength_user;
		endIndex = end_user + searchLength_user;
		showRef();
	}
}

function dragDragHandler(canvasCSSLeft){
	var dragDistance = canvasCSSLeft + trackLength_user;
	var dragScale = Math.round(dragDistance * searchLength_user / trackLength_user);
	var temp_start_user = start_user - dragScale;
	if(temp_start_user < 1){
		temp_start_user = 1;
	}else if(temp_start_user + searchLength_user - 1 > chrLength){
		temp_start_user = chrLength - searchLength_user + 1;
	}
	showuserSearchIndex(temp_start_user, temp_start_user + searchLength_user - 1);
	drawScaleboxOnCytobandsImg(searchLength_user, temp_start_user);
}

function showuserSearchIndex(start,end){
	var length = end - start + 1;
	$("#start_user_label").html(addCommas(start));
	$("#end_user_label").html(addCommas(end));
	$("#searchLength_user_label").html(addCommas(length) + "bp");
}

$(function(){
	$(window).resize(function(){
		var tracktableLeft = $("#divTrack").position().left;
		$(document.getElementById("personalPannel")).css("left", tracktableLeft);
		$('#showWindowBtn').css("left", $("#divTrack").position().left+1110>$(window).width()-32?$(window).width()-32:$("#divTrack").position().left+1110);
		$('#ppBtns').css("left", $("#divTrack").position().left+1110>$(window).width()-32?$(window).width()-32:$("#divTrack").position().left+1110);
	});
})

function loadChrBand(){
	document.getElementById("BJW_genome").innerHTML="";
	document.getElementById("BJW_genelist").innerHTML="";
	document.getElementById("upload_success").innerHTML="Loading Individual Genome...";
	document.getElementById("filter_value").value=score_filter;
	score_filter_ceil = 0;

	var xmlAttribute_gieStain = "gS";
	var xmlTagScore="Score";
	var pattern = /<.*?>/g;
	var animaTime=200;

	var l =570;
	var radius=160;
	var dis_chr2band=20;
	var chrthick=35;
	var bandthick=20;
	var dis_lable2chr=15;

	var font_size=18;
	var font_size_text=font_size+"px Candara";
	var font_size2=16;
	var font_size2_text=font_size2+"px Candara";

	var colorlist = {
		gpos100 : "rgb(0,0,0)",
		gpos    : "rgb(0,0,0)",
		gpos75  : "rgb(130,130,130)",
		gpos66  : "rgb(160,160,160)",
		gpos50  : "rgb(200,200,200)",
		gpos33  : "rgb(210,210,210)",
		gpos25  : "rgb(200,200,200)",
		gvar    : "rgb(220,220,220)",
		gneg    : "rgb(255,255,255)",
		acen    : "rgb(217,47,39)",
		stalk   : "rgb(100,127,164)",
		
		chr1  : "rgb(153,102,0)",
		chr2  : "rgb(102,102,0)",
		chr3  : "rgb(153,153,30)",
		chr4  : "rgb(204,0,0)",
		chr5  : "rgb(255,0,0)",
		chr6  : "rgb(255,0,204)",
		chr7  : "rgb(255,204,204)",
		chr8  : "rgb(255,153,0)",
		chr9  : "rgb(255,204,0)",
		chr10 : "rgb(255,255,0)",
		chr11 : "rgb(204,255,0)",
		chr12 : "rgb(0,255,0)",
		chr13 : "rgb(53,128,0)",
		chr14 : "rgb(0,0,204)",
		chr15 : "rgb(102,153,255)",
		chr16 : "rgb(153,204,255)",
		chr17 : "rgb(0,255,255)",
		chr18 : "rgb(204,255,255)",
		chr19 : "rgb(153,0,204)",
		chr20 : "rgb(204,51,255)",
		chr21 : "rgb(204,153,255)",
		chr22 : "rgb(102,102,102)",
		chr23 : "rgb(153,153,153)",
		chrX  : "rgb(153,153,153)",
		chr24 : "rgb(204,204,204)",
		chrY  : "rgb(204,204,204)",
		chrM  : "rgb(204,204,153)",
		chr0  : "rgb(204,204,153)"
	}

	XMLHttpReq7.open("GET","servlet/test.do?action=getChromosomes",false);
	XMLHttpReq7.send(null);
	var chrlist=XMLHttpReq7.responseText.replace(pattern,"");
	var chrs_temp=chrlist.split(",");
	var chrs=[];
	var chrs_map=[];
	var total=0;
	for(var idx=0;idx<chrs_temp.length;idx++){
		var chrtemp=chrs_temp[idx].split(":");
		chrs[idx]={};
		chrs[idx].name=chrtemp[0];
		chrs[idx].lengthh=parseInt(chrtemp[1]);
		chrs[idx].from=total+1;
		chrs[idx].to=total+parseInt(chrtemp[1]);
		chrs[idx].bands=[];
		total=total+parseInt(chrtemp[1]);
		chrs_map[chrtemp[0]]=idx;
	}

	for (var idx=0;idx<chrs.length;idx++){
		if(chrs[idx].lengthh<total/180){
			chrs[idx].to=chrs[idx].from+total/180;
			total=total+total/180-chrs[idx].lengthh;
		}
	}
	for (var idx=0;idx<chrs.length;idx++){
		chrs[idx].from=chrs[idx].from+total/180*idx;
		chrs[idx].to=chrs[idx].to+total/180*idx;
	}
	total=total+total/180*chrs.length;

	XMLHttpReq7.open("GET","servlet/test.do?action=getAllCytobands",false);
	XMLHttpReq7.send(null);
	//********switchable with later similar code to save initializing time
	var cytobandsNode = XMLHttpReq7.responseXML.getElementsByTagName(xmlTagCytobands)[0];
	var cytobandNodes = cytobandsNode.getElementsByTagName(xmlTagCytoBand);
	for( i = 0; i < cytobandNodes.length; i++) {
		var idx = chrs_map[cytobandNodes[i].getElementsByTagName(xmlTagChrNum)[0].childNodes[0].nodeValue];
		var curi = chrs[idx].bands.length;
		chrs[idx].bands[curi] = {};
		chrs[idx].bands[curi].id = cytobandNodes[i].getAttribute(xmlAttributeId);
		chrs[idx].bands[curi].gieStain = cytobandNodes[i].getAttribute(xmlAttribute_gieStain);
		chrs[idx].bands[curi].from = parseInt(cytobandNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue);
		chrs[idx].bands[curi].to = parseInt(cytobandNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue);
		chrs[idx].bands[curi].score = -1;
		if(cytobandNodes[i].getElementsByTagName(xmlTagScore).length > 0){
			chrs[idx].bands[curi].score = parseFloat(cytobandNodes[i].getElementsByTagName(xmlTagScore)[0].childNodes[0].nodeValue);
		}
	}
	//#####################

	var R = Raphael("BJW_genome", l+30, l+30);
	var G = Raphael("BJW_genelist",150,l);

	var attr = {
		fill: "#333",
		stroke: "#666",
		"stroke-width": 0,
		"stroke-linecap": "round",
		"fill-opacity": 0.7
	}
		
	var genome = [];
	var chrlables=[];
	var bands = [];
	var bandslables = [];
	var bandsscore = [];
	var bandsscore_inter = [];

	for(var idx=0;idx<chrs.length;idx++){
		bands[idx]=[];
		bandslables[idx]=[];
		bandsscore[idx] = [];
		bandsscore_inter[idx] = [];
		//*****Can be canceled to reduce object numbers and initializing time***
		for(var i=0;i<chrs[idx].bands.length;i++){
			attr["fill"]=colorlist[chrs[idx].bands[i].gieStain];
			attr["fill-opacity"]=0.9;
			attr["stroke-width"]=0;
			R.path(drawPath(chrs[idx].bands[i].from+chrs[idx].from,chrs[idx].bands[i].to+chrs[idx].from,total,radius,chrthick)).attr(attr);
			bandsscore_inter[idx][i]=R.path(drawPath(chrs[idx].bands[i].from+chrs[idx].from,chrs[idx].bands[i].to+chrs[idx].from,total,radius+chrthick+5,5)).attr({fill: cytoscore2color(chrs[idx].bands[i].score),"fill-opacity":0.9,"stroke-width":0});
		}
		//#############################
		attr["fill"]=colorlist[chrs[idx].name];
		attr["fill-opacity"]=0.6;
		attr["stroke-width"]=0;
		chrlables[idx]=drawText(chrs[idx].from,chrs[idx].to,total,radius,dis_lable2chr,chrs[idx].name.replace("chr","").replace("M","MT"),font_size);
		genome[idx]=R.path(drawPath(chrs[idx].from,chrs[idx].to,total,radius,chrthick)).attr(attr);
	}
	document.getElementById("upload_success").innerHTML="";

	var axis_set = R.set();
	var axis=R.path("M"+(l+20)+",0 L"+(l+20)+","+l).attr({stroke:"#000","stroke-width":1});
	var cali=[];
	var t_bot,t_top,t_first;
	t_top=R.text(l-10,l*0.008,"").attr({font: font_size2_text,opacity:1,"text-anchor":"end"}).attr({fill: "#000"});
	t_bot=R.text(l-10,0.985*l,"").attr({font: font_size2_text,opacity:1,"text-anchor":"end"}).attr({fill: "#000"});
	t_first=R.text(l-10,l/10,"").attr({font: font_size2_text,opacity:1,"text-anchor":"end"}).attr({fill: "#000"});
	axis_set.push(axis,t_bot,t_top,t_first);
	for(var ca=0;ca<=100;ca++){
		if(ca%10==0){
			cali[ca]=R.path("M"+l+","+(ca/100*l)+" L"+(l+20)+","+(ca/100*l)).attr({stroke:"#000","stroke-width":1});
		}
		else{
			cali[ca]=R.path("M"+(l+10)+","+(ca/100*l)+" L"+(l+20)+","+(ca/100*l)).attr({stroke:"#000","stroke-width":1});
		}
		axis_set.push(cali[ca]);
	}
	//axis_set.hide();
	var gene_set = G.set();
	var loc_set= R.set();

	var go_text = R.text(l/2,l/2,"GO").attr({font: "32px Candara",opacity:1}).attr({fill: "#222"});
	var go_button = R.circle(l/2,l/2,chrthick+5).attr({fill:"#666",stroke:"#999",opacity:0.5,"stroke-width":0});
	(function (go_button){
		go_button[0].style.cursor = "pointer";
		go_text[0].style.cursor = "pointer";
		go_button[0].onmouseover = function(){
			go_button.animate({fill:"#999"},animaTime);
		};
		go_button[0].onclick = function(){
			browseJumpWindow_close();
			jump();
		};
		go_button[0].onmouseout = function(){
			go_button.animate({fill:"#666"},animaTime);
		};
	})(go_button);

	var current=null;
	var click=null;
	var burrent=null;
	var blick=null;
	var gurrent=null;
	var glick=null;

	var scan_text = R.text(280,l-5,"Scan Functional Variants for Individual").attr({font: "16px Candara",opacity:1}).attr({fill: "#000"});
	var error_warn=R.text(0,30,"").attr({font:font_size2_text, opacity:1, "text-anchor":"start"}).attr({fill:"#000"});

	var scang_text = R.text(100,l+18,"Whole genome").attr({font: "14px Candara",opacity:1}).attr({fill: "#222"});
	var scang_button = R.rect(20,l+6,160,24,3).attr({fill:"#666",stroke:"#999",opacity:0.5,"stroke-width":0});
	(function (scang_button){
		scang_button[0].style.cursor = "pointer";
		scang_text[0].style.cursor = "pointer";
		scang_button[0].onmouseover = function(){
			scang_button.animate({fill:"#999"},animaTime);
		};
		scang_button[0].onclick = function(){
			error_warn.remove();
			if(personalPannel.Pvar.id){

				XMLHttpReq7.open("GET","servlet/test.do?action=downloadIndex&tracks=_"+initPvar_superid,false);
				XMLHttpReq7.send(null);

				getSingleCytoAsync(0,0,2);
			}
			else {
				error_warn=R.text(0,30,"Please load personal variants from 'Select Individual' menu").attr({font:font_size2_text, opacity:1, "text-anchor":"start"}).attr({fill:"#000"});
			}
		};
		scang_button[0].onmouseout = function(){
			scang_button.animate({fill:"#666"},animaTime);
		};
	})(scang_button);

	var scanc_text = R.text(280,l+18,"Current chromosome").attr({font: "14px Candara",opacity:1}).attr({fill: "#222"});
	var scanc_button = R.rect(200,l+6,160,24,3).attr({fill:"#666",stroke:"#999",opacity:0.5,"stroke-width":0});
	(function (scanc_button){
		scanc_button[0].style.cursor = "pointer";
		scanc_text[0].style.cursor = "pointer";
		scanc_button[0].onmouseover = function(){
			scanc_button.animate({fill:"#999"},animaTime);
		};
		scanc_button[0].onclick = function(){
			error_warn.remove();
			if(click!=null && personalPannel.Pvar.id){
				XMLHttpReq7.open("GET","servlet/test.do?action=downloadIndex&tracks=_"+initPvar_superid,false);
				XMLHttpReq7.send(null);
				getSingleCytoAsync(click,0,1);
			}
			else {
				error_warn=R.text(0,30,"Please load personal variants from 'Select Individual' menu and select a chromosome").attr({font:font_size2_text, opacity:1, "text-anchor":"start"}).attr({fill:"#000"});
			}
		};
		scanc_button[0].onmouseout = function(){
			scanc_button.animate({fill:"#666"},animaTime);
		};
	})(scanc_button);

	var scanb_text = R.text(460,l+18,"Current cytoband").attr({font: "14px Candara",opacity:1}).attr({fill: "#222"});
	var scanb_button = R.rect(380,l+6,160,24,3).attr({fill:"#666",stroke:"#999",opacity:0.5,"stroke-width":0});
	(function (scanb_button){
		scanb_button[0].style.cursor = "pointer";
		scanb_text[0].style.cursor = "pointer";
		scanb_button[0].onmouseover = function(){
			scanb_button.animate({fill:"#999"},animaTime);
		};
		scanb_button[0].onclick = function(){
			error_warn.remove();
			if(click!=null && blick!=null && personalPannel.Pvar.id){
				XMLHttpReq7.open("GET","servlet/test.do?action=downloadIndex&tracks=_"+initPvar_superid,false);
				XMLHttpReq7.send(null);
				getSingleCytoAsync(click,blick,0);
			}
			else {
				error_warn=R.text(0,30,"Please load personal variants from 'Select Individual' menu and select a cytoband").attr({font:font_size2_text, opacity:1, "text-anchor":"start"}).attr({fill:"#000"});
			}
		};
		scanb_button[0].onmouseout = function(){
			scanb_button.animate({fill:"#666"},animaTime);
		};
	})(scanb_button);


	for (var chrom in genome){
		genome[chrom].color=Raphael.getColor();
		(function (chr, chrom) {
			var ccolor=colorlist[chrs[chrom].name];
			chr[0].style.cursor = "pointer";
			chr[0].onmouseover = function () {
				chr.animate({fill: chr.color, stroke: "#ccc"}, animaTime);
				/* switchable with previous similar code to save initiating time
				if(chrs[chrom].bands.length==0){
					XMLHttpReq7.open("GET","servlet/test.do?action=getCytobands&chr="+chrs[chrom].name,false);
					XMLHttpReq7.send(null);
					var cytobandsNode = XMLHttpReq7.responseXML.getElementsByTagName(xmlTagCytobands)[0];
					var cytobandNodes = cytobandsNode.getElementsByTagName(xmlTagCytoBand);
					if(cytobandNodes.length <= 1) {
						chrs[chrom].bands[0] = {};
						chrs[chrom].bands[0].id=chrs[chrom].name;
						chrs[chrom].bands[0].gieStain="";
						chrs[chrom].bands[0].from=total-chrs[chrom].to+1;
						chrs[chrom].bands[0].to=total-chrs[chrom].from+1;
						//To be test.
					}
					for( i = 0; i < cytobandNodes.length; i++) {
						chrs[chrom].bands[i] = {};
						chrs[chrom].bands[i].id = cytobandNodes[i].getAttribute(xmlAttributeId);
						chrs[chrom].bands[i].gieStain = cytobandNodes[i].getAttribute(xmlAttribute_gieStain);
						chrs[chrom].bands[i].from = parseInt(cytobandNodes[i].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue);
						chrs[chrom].bands[i].to = parseInt(cytobandNodes[i].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue);
					}
				}
				*/
				if(current){
					chrlables[current].animate({fill: "#000",font: font_size_text}, animaTime);
					for(var i=0; i < chrs[current].bands.length; i++) {
						bands[current][i].animate({fill: "#FFF", stroke: "#FFF"}, animaTime);
						bands[current][i].hide();
						bandsscore[current][i].hide();
					}
				}
				if(click){
					chrlables[click].animate({fill: "#000",font:font_size_text}, animaTime);
					for(var i=0; i < chrs[click].bands.length; i++) {
						bands[click][i].animate({fill: "#FFF", stroke: "#FFF"}, animaTime);
						bands[click][i].hide();
						bandsscore[click][i].hide();
					}
				}
				chrlables[chrom].animate({fill: chr.color,font:font_size_text}, animaTime);
				for(var i=0; i < chrs[chrom].bands.length; i++) {
					if(bands[chrom][i]==null){
						var bandfrom=chrs[chrom].bands[i].from+chrs[chrom].lengthh/180*i;
						var bandto=chrs[chrom].bands[i].to+chrs[chrom].lengthh/180*i;
						var chromlen;
						chromlen=chrs[chrom].lengthh+chrs[chrom].lengthh/180*chrs[chrom].bands.length;
						attr["fill-opacity"]=0;
						bands[chrom][i]=R.path(drawPath(bandfrom,bandto,chromlen,radius+chrthick+dis_chr2band,bandthick)).attr(attr);
						bandsscore[chrom][i]=R.path(drawPath(bandfrom,bandto,chromlen,radius+chrthick+dis_chr2band+bandthick+5,5)).attr({fill:cytoscore2color(chrs[chrom].bands[i].score),stroke:"#FFF","stroke-width":0,"fill-opacity":1});
						bandslables[chrom][i]=drawText(bandfrom,bandto,chromlen,radius+chrthick+dis_chr2band+bandthick,(-dis_lable2chr-10),chrs[chrom].bands[i].id,font_size2);
						bandslables[chrom][i].hide();
					}
					var bcolor=colorlist[chrs[chrom].bands[i].gieStain];
					bands[chrom][i].show();
					bands[chrom][i].animate({fill: bcolor, stroke: "#666","fill-opacity":1, "stroke-width":1}, animaTime);
					bandsscore[chrom][i].show();
				}
				R.safari();
				current = chrom;
			}; 
			chr[0].onmouseout = function () {
				chr.animate({fill: ccolor, stroke: "#666"}, animaTime);
				if(current && current != click){
					chrlables[current].animate({fill: "#000",font:font_size_text}, animaTime);
					for(var i=0; i < chrs[current].bands.length; i++) {
						bands[current][i].animate({fill: "#FFF", stroke: "#FFF"}, animaTime);
						bands[current][i].hide();
						bandsscore[current][i].hide();
					}
				}
				if(click && current != click){
					chrlables[click].animate({fill: genome[click].color,font:font_size_text}, animaTime);
					for(var i=0; i < chrs[click].bands.length; i++) {
						var bcolor=colorlist[chrs[click].bands[i].gieStain];
						bands[click][i].show();
						bands[click][i].animate({fill: bcolor, stroke: "#666"}, animaTime);
						bandsscore[click][i].show();
					}
				}
				R.safari();
			}; 
			chr[0].onclick = function() {
				if(click && click != chrom){
					burrent=null;
					blick=null;
					gurrent=null;
					glick=null;
					for (var i=0; i<bands[click].length; i++){
						bands[click][i].color=colorlist[chrs[click].bands[i].gieStain];
						(function (bd, i) {
							bd[0].style.cursor = "default";
							bd[0].onmouseover = null;
							bd[0].onclick = null;
							bd[0].onmouseout = null;
						})(bands[click][i],i);
					}
							t_top.hide();
							t_bot.hide();
							t_first.hide();
						//	axis_set.hide();
							gene_set.hide();
							gene_set.clear();
							loc_set.hide();
							loc_set.clear();
				}

				click = chrom;
				var inputsf=1;
				var inputet=chrs[click].lengthh;
				document.getElementById("search_field").value=chrs[click].name+":"+inputsf.toLocaleString().replace(/\.0+$/,"")+"-"+inputet.toLocaleString().replace(/\.0+$/,"");

				for (var i=0; i<bands[click].length; i++){
					bands[click][i].color=Raphael.getColor();
					(function (bd, i) {
						var bcolor=colorlist[chrs[click].bands[i].gieStain];
						bd[0].style.cursor = "pointer";
						bd[0].onmouseover = function () {
							bd.animate({fill: bd.color, stroke: "#ccc"}, animaTime);
							bandslables[click][i].show();
							if(burrent){
							}
							if(blick){
							}
							R.safari();
							burrent = i;
						}; 
						bd[0].onmouseout = function () {
							bd.animate({fill: bcolor, stroke: "#666"}, animaTime);
							bandslables[click][i].hide();
							if(burrent && burrent != blick){
							}
							if(blick && burrent != blick){
							}
							R.safari();
						}; 
						bd[0].onclick = function() {
							gurrent=null;
							glick=null;
							t_top.hide();
							t_bot.hide();
							t_first.hide();
							//axis_set.hide();
							gene_set.hide();
							gene_set.clear();
							loc_set.hide();
							loc_set.clear();
							blick = i;
							var inputsf=chrs[click].bands[blick].from;
							var inputet=chrs[click].bands[blick].to;
							document.getElementById("search_field").value=chrs[click].name+":"+inputsf.toLocaleString().replace(/\.0+$/,"")+"-"+inputet.toLocaleString().replace(/\.0+$/,"");
							

							t_top=R.text(l-10,l*0.015,chrs[click].name+" : "+chrs[click].bands[blick].id+" : "+chrs[click].bands[blick].from).attr({font: font_size2_text,opacity:1,"text-anchor":"end"}).attr({fill: "#000"});
							t_bot=R.text(l-10,0.985*l,chrs[click].bands[blick].to).attr({font: font_size2_text,opacity:1,"text-anchor":"end"}).attr({fill: "#000"});
							t_first=R.text(l-10,l/10,(chrs[click].bands[blick].to-chrs[click].bands[blick].from+1)/10).attr({font: font_size2_text,opacity:1,"text-anchor":"end"}).attr({fill: "#000"});
							//axis_set.show();
							var urll="servlet/test.do?action=overlapGene&chr="+chrs[click].name+"&start="+chrs[click].bands[blick].from+"&end="+chrs[click].bands[blick].to;
							XMLHttpReq7.open("GET","servlet/test.do?action=overlapGene&chr="+chrs[click].name+"&start="+chrs[click].bands[blick].from+"&end="+chrs[click].bands[blick].to,false);
							XMLHttpReq7.send(null);
							var ogenesNode = XMLHttpReq7.responseXML.getElementsByTagName("Genes")[0];
							var ogeneNodes = ogenesNode.getElementsByTagName("Gene");
							var ogenes=[];
							var ogeneso=[];
							var genelistlength=ogeneNodes.length*20+10;
							G.remove();
							G = Raphael("BJW_genelist",150,genelistlength);

							for(var gidx=0;gidx<ogeneNodes.length;gidx++){
								ogenes[gidx] = {};
								ogenes[gidx].id = ogeneNodes[gidx].getAttribute(xmlAttributeId);
								ogenes[gidx].from = parseInt(ogeneNodes[gidx].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue);
								ogenes[gidx].to = parseInt(ogeneNodes[gidx].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue);
								if(ogeneNodes[gidx].getElementsByTagName(xmlTagScore).length>0){
									ogenes[gidx].score = parseFloat(ogeneNodes[gidx].getElementsByTagName(xmlTagScore)[0].childNodes[0].nodeValue);
								}
								else{
									ogenes[gidx].score = -1;
								}

								ogeneso[gidx]= {};
								ogeneso[gidx].text=G.text(10,(gidx*20+10),ogenes[gidx].id).attr({font:font_size2_text, opacity:1, "text-anchor":"start"}).attr({fill:"#000"});
//								if(ogenes[gidx].score>=100){
//									ogenes[gidx].score=0;
//								} else{
//									if(ogenes[gidx].score<=0){
//										ogenes[gidx].score=255;
//									} else{
//										ogenes[gidx].score=200-ogenes[gidx].score*2;
//									}
//								}
//								var rgbparam="rgb(255,"+ogenes[gidx].score+","+ogenes[gidx].score+")";
//								
//								ogeneso[gidx].flag=G.rect(0,(gidx*20),8,20).attr({fill:Raphael.getRGB(rgbparam).hex,"stroke-width":0});
								ogeneso[gidx].flag=G.rect(0,(gidx*20),8,20).attr({fill:cytoscore2color(ogenes[gidx].score),"stroke-width":0});
								var gup=ogenes[gidx].from-chrs[click].bands[blick].from;
								var gdown=ogenes[gidx].to-chrs[click].bands[blick].from;
								var bandlen=chrs[click].bands[blick].to-chrs[click].bands[blick].from;
								if(gdown-gup<bandlen/100){
									gdown=gdown+bandlen/200;
									gup=gup-bandlen/200;
								}
								if(gup<0){
									gup=0;
								}
								if(gdown>bandlen){
									gdown=bandlen;
								}
								ogeneso[gidx].loc=R.path("M"+(l+20)+","+l*gup/bandlen+" L"+(l+20)+","+l*gdown/bandlen).attr({stroke:"#F00","stroke-width":8});
								ogeneso[gidx].loc.hide();
								gene_set.push(ogeneso[gidx].text);
								gene_set.push(ogeneso[gidx].flag);
								loc_set.push(ogeneso[gidx].loc);
								(function (gen, gidx) {
									gen[0].style.cursor = "pointer";
									gen[0].onmouseover = function () {
										gen.animate({fill: "#F00"}, animaTime);
										ogeneso[gidx].loc.show();
										if(gurrent!=null && gidx != gurrent){
											ogeneso[gurrent].text.animate({fill: "#000"}, animaTime);
											ogeneso[gurrent].loc.hide();
										}
										if(glick!=null && gidx !=glick){
											ogeneso[glick].text.animate({fill: "#000"}, animaTime);
											ogeneso[glick].loc.hide();
										}
										R.safari();
										G.safari();
										gurrent = gidx;
									};
									gen[0].onmouseout = function () {
										gen.animate({fill: "#000"}, animaTime);
										ogeneso[gidx].loc.hide();
										if(glick!=null){
											ogeneso[glick].text.animate({fill: "#F00"}, animaTime);
											ogeneso[glick].loc.show();
										}
										R.safari();
										G.safari();
									}; 
									gen[0].onclick = function (){
										//	document.getElementById("divv").innerHTML=chrs[click].bands[blick].id;
										glick = gidx;
										var inputsf=ogenes[gidx].from;
										var inputet=ogenes[gidx].to;
										document.getElementById("search_field").value=chrs[click].name+":"+inputsf.toLocaleString().replace(/\.0+$/,"")+"-"+inputet.toLocaleString().replace(/\.0+$/,"");
										browseJumpWindow_close();
										jump();

									};
								})(ogeneso[gidx].text,gidx);
							}
							gene_set.show();
						};
					})(bands[click][i],i);
				}
			};
		})(genome[chrom],chrom);
	}
	document.getElementById("filter_range").innerHTML="(0~"+score_filter_ceil+")";

	function getSingleCytoAsync(c,b,mode) {
		control_scanning=1;
		var sremove = spinner();
		var burrentt = R.text(70,30,"Scanning "+chrs[c].name+" : "+chrs[c].bands[b].id+" ...").attr({font:font_size2_text, opacity:1, "text-anchor":"start"}).attr({fill:"#000"});
		var XMLHttpReq9 = createXMLHttpRequest();
		XMLHttpReq9.open("GET","servlet/test.do?action=getCytoband&chr="+chrs[c].name+"&id="+chrs[c].bands[b].id,true);
		XMLHttpReq9.onreadystatechange = returnedCytoScore;
		XMLHttpReq9.send(null);
		function returnedCytoScore(){
			if(XMLHttpReq9.readyState==4){
				if(XMLHttpReq9.status==200){
					var score = parseFloat(XMLHttpReq9.responseXML.getElementsByTagName(xmlTagScore)[0].childNodes[0].nodeValue);
					bandsscore_inter[c][b]=R.path(drawPath(chrs[c].bands[b].from+chrs[c].from,chrs[c].bands[b].to+chrs[c].from,total,radius+chrthick+5,5)).attr({fill: cytoscore2color(score),"fill-opacity":0.9,"stroke-width":0});
					sremove();
					burrentt.remove();
					if(control_scanning==1&&click!=null&&blick!=null&&click==c&&blick==b){
						bands[c][b][0].onclick();
					}
					if(control_scanning==1 ){
						if(mode==2 && bands[c][b]==null){
							var bandfrom=chrs[c].bands[b].from+chrs[c].lengthh/180*b;
							var bandto=chrs[c].bands[b].to+chrs[c].lengthh/180*b;
							var chromlen;
							if(chrs[c].bands.length <=1){
								chromlen=chrs[c].lengthh;
							}
							else{
								chromlen=chrs[c].lengthh+chrs[c].lengthh/180*chrs[c].bands.length;
							}
							attr["fill-opacity"]=0;
							bands[c][b]=R.path(drawPath(bandfrom,bandto,chromlen,radius+chrthick+dis_chr2band,bandthick)).attr(attr);
							bandsscore[c][b]=R.path(drawPath(bandfrom,bandto,chromlen,radius+chrthick+dis_chr2band+bandthick+5,5)).attr({fill:"#FFF",stroke:"#FFF","stroke-width":0,"fill-opacity":1});
							bandslables[c][b]=drawText(bandfrom,bandto,chromlen,radius+chrthick+dis_chr2band+bandthick,(-dis_lable2chr-10),chrs[c].bands[b].id,font_size2);
							bandslables[c][b].hide();
							bandsscore[c][b].hide();
							bands[c][b].hide();
						}
						bandsscore[c][b].animate({fill: cytoscore2color(score)}, animaTime);
					}
					if(control_scanning==1&&((mode==1 && b<chrs[c].bands.length-1)||(mode==2 && (c<chrs.length-1 || b<chrs[c].bands.length-1)))){
						if(b<chrs[c].bands.length-1){
							b++;
						}
						else{
							c++;
							b=0;
						}
						getSingleCytoAsync(c,b,mode);
					}
				}
				else{
					sremove();
					burrentt.remove();
				}
			}
		}
	}
	function cytoscore2color(score){
		if(score_filter_ceil < score){
			score_filter_ceil = score;
			document.getElementById("filter_range").innerHTML="(0~"+score_filter_ceil+")";
		}
		if(score < score_filter){
			score = 255;
		}
		else if(score>=100){
			score=0;
		} 
		else{
			if(score<=0){
				score=255;
			} else{
				score=200-score*2;
			}
		}
		var rgbparam="rgb(255,"+score+","+score+")";
		return Raphael.getRGB(rgbparam).hex;
	}

	function drawPath(from, to, total, r, thick) {
		var alpha = from/total*360;
		var a = (90-alpha)*Math.PI/180;
		var beta = to/total*360;
		var b = (90-beta)*Math.PI/180;
		var a1x = l/2+r*Math.cos(a);
		var a1y = l/2-r*Math.sin(a);
		var a2x = l/2+(r+thick)*Math.cos(a);
		var a2y = l/2-(r+thick)*Math.sin(a);
		var b1x = l/2+r*Math.cos(b);
		var b1y = l/2-r*Math.sin(b);
		var b2x = l/2+(r+thick)*Math.cos(b);
		var b2y = l/2-(r+thick)*Math.sin(b);
		var path;
		if (to-from+1 >= total/2){
			path = "M"+a1x+","+a1y+" A"+r+","+r+" 0 1,1 "+(b1x-0.0001)+","+b1y+" L"+b2x+","+b2y+" A"+(r+thick)+","+(r+thick)+" 0 1,0 "+(a2x-0.0001)+","+a2y+" Z";
		}
		else {
			path = "M"+a1x+","+a1y+" A"+r+","+r+" 0 0,1 "+b1x+","+b1y+" L"+b2x+","+b2y+" A"+(r+thick)+","+(r+thick)+" 0 0,0 "+a2x+","+a2y+" Z";
		}
		return path;
	}
	function drawText(from, to, total, r, dis, text, fontsize) {
		var alpha = (from+to)/2/total*360;
		var a = (90 -alpha)*Math.PI/180;
		var ax = l/2+(r-dis)*Math.cos(a);
		var ay = l/2-(r-dis)*Math.sin(a);
		if(to-from<=total/180 && text == "MT"){
			return R.text(ax,ay,text).attr({font: (fontsize-8)+"px Candara",opacity:1}).attr({fill: "#000"});
		}
		else{
			return R.text(ax,ay,text).attr({font: fontsize+"px Candara",opacity:1}).attr({fill: "#000"});
		}
	}
	function spinner(){
		 var sectorsCount = 10,
			 color = "#000",
			 width = 5,
			 r1 = 10,
			 r2 = 20,
			 cx = r2 + width,
			 cy = r2 + width,
			 sectors = [],
			 opacity = [],
			 beta = 2 * Math.PI / sectorsCount,
			 pathParams = {stroke: color, "stroke-width": width, "stroke-linecap": "round"};
		 Raphael.getColor.reset();
		 for (var i = 0; i < sectorsCount; i++) {
			 var alpha = beta * i - Math.PI / 2,
				 cos = Math.cos(alpha),
				 sin = Math.sin(alpha);
			 opacity[i] = 1 / sectorsCount * i;
			 sectors[i] = R.path([["M", cx + r1 * cos, cy + r1 * sin], ["L", cx + r2 * cos, cy + r2 * sin]]).attr(pathParams);
			 if (color == "rainbow") {
				 sectors[i].attr("stroke", Raphael.getColor());
			 }
		 }
		 var tick;
		 (function ticker() {
		  opacity.unshift(opacity.pop());
		  for (var i = 0; i < sectorsCount; i++) {
		  sectors[i].attr("opacity", opacity[i]);
		  }
		  R.safari();
		  tick = setTimeout(ticker, 1000 / sectorsCount);
		  })();
		 return function () {
			 clearTimeout(tick);
			 for (var i = 0; i < sectorsCount; i++) {
		 	 sectors[i].hide();
		 	 }
			 //R.remove();
		 }; 
	}
}
function BJW_getStat() {
	if(personalPannel.Pvar.id)
		window.open("servlet/test.do?action=getStat");
	else
		document.getElementById("upload_success").innerHTML="Please load personal variants from 'Select Individual' menu";
}
function BJW_upStat() {
	var fileObj = document.getElementById("file_field").files[0];
	var form = new FormData();
	form.append("file",fileObj);
	form.append("enctype","multipart/form-data");
	XMLHttpReq8.open("POST","servlet/test.do?action=upStat",true);
	XMLHttpReq8.onreadystatechange = uploadComplete;
	XMLHttpReq8.send(form);
	function uploadComplete(){
		if(XMLHttpReq8.readyState==4){
			if(XMLHttpReq8.status==200){
				document.getElementById("upload_success").innerHTML="Upload Complete";
			}
			else{
				document.getElementById("upload_success").innerHTML="Upload Failed";
			}
		}
	}
}
function BJW_filterStat() {
	score_filter=document.getElementById("filter_value").value;
	loadChrBand();
}
function BJW_rankGene() {
	$(document.getElementById("BJW_stat")).css("display", "none");
	$(document.getElementById("BJW_content")).css("display", "none");
	$(document.getElementById("BJW_rank")).css("display", "block");
	document.getElementById("gene_table").innerHTML="";

	var topnumber=document.getElementById("top_number").value;
	var pattern = /^[0-9]+$/;
	if(!pattern.exec(topnumber)) {
		topnumber=100;
	}

	var XMLHttpReq14 = createXMLHttpRequest();
	XMLHttpReq14.open("GET","servlet/test.do?action=rankGene&topnumber="+topnumber,false);
	XMLHttpReq14.send(null);

	var xmlTagScore="Score";
	var ogenesNode = XMLHttpReq14.responseXML.getElementsByTagName("Genes")[0];
	var ogeneNodes = ogenesNode.getElementsByTagName("Gene");
	var ogenes=[];

	var gene_table_html = "";
	var gene_div_lines = Math.ceil(ogeneNodes.length/3);
	var line_num = 0;
	for(var gidx=0;gidx<ogeneNodes.length;gidx++){
		if(gidx%gene_div_lines == 0){
			if(gidx!=0){
				gene_table_html+="</div>";
			}
			gene_table_html+="<div style=\"width:235px;float:left\">";
			line_num = 0;
		}
		ogenes[gidx] = {};
		ogenes[gidx].id = ogeneNodes[gidx].getAttribute(xmlAttributeId);
		ogenes[gidx].chr = ogeneNodes[gidx].getElementsByTagName(xmlTagChrNum)[0].childNodes[0].nodeValue;
		ogenes[gidx].from = parseInt(ogeneNodes[gidx].getElementsByTagName(xmlTagFrom)[0].childNodes[0].nodeValue);
		ogenes[gidx].to = parseInt(ogeneNodes[gidx].getElementsByTagName(xmlTagTo)[0].childNodes[0].nodeValue);
		if(ogeneNodes[gidx].getElementsByTagName(xmlTagScore).length>0){
			ogenes[gidx].score = parseFloat(ogeneNodes[gidx].getElementsByTagName(xmlTagScore)[0].childNodes[0].nodeValue);
		}
		else{
			ogenes[gidx].score = "NA";
		}
		if(ogenes[gidx].score == -1){
			ogenes[gidx].score = "NA";
		}
		var line_color = "#d9d9d9";
		if(line_num%2==0){
			line_color = "#c6dbef";
		}
		line_num++;

		gene_table_html+="<span id=\"gene_table_"+ogenes[gidx].id+"\" class=\"BJW_gene_table_id\" style=\"background:"+line_color+"\">"+ogenes[gidx].id+"</span><span class=\"BJW_gene_table_score\" style=\"background:"+line_color+"\">"+ogenes[gidx].score+"</span><br>";

	}
	gene_table_html+="</div>";
	
	document.getElementById("gene_table").innerHTML=gene_table_html;
	for(var gidx=0;gidx<ogeneNodes.length;gidx++){
		(function (gen, gidx){
			gen.onclick = function() {
				var inputchr = ogenes[gidx].chr;
				var inputsf = ogenes[gidx].from;
				var inputet = ogenes[gidx].to;
				document.getElementById("search_field").value=inputchr+":"+inputsf.toLocaleString().replace(/\.0+$/,"")+"-"+inputet.toLocaleString().replace(/\.0+$/,"");
				browseJumpWindow_close();
				jump();
			};
		})(document.getElementById("gene_table_"+ogenes[gidx].id),gidx);
	}
}
function BJW_closeRank() {
	$(document.getElementById("BJW_rank")).css("display", "none");
	$(document.getElementById("BJW_stat")).css("display", "block");
	$(document.getElementById("BJW_content")).css("display", "block");
}
function addExIndividual(){
	control_upexternal=0;
	var trackId = document.getElementById("pg_upload_name").value;
	var trackType = document.getElementById("pg_upload_type").value;
	var trackURL = document.getElementById("pg_upload_url").value;

	var ifurl = document.getElementById("url_of_url_or_upload").checked;
	var ifupload = document.getElementById("upload_of_url_or_upload").checked;

	var fileObj = document.getElementById("pg_upload_file").files[0];
	var fileObj2 = document.getElementById("pg_upload_file2").files[0];


	var pattern = /<.*?>/g;
	var indslist;
	var inds_temp;

	XMLHttpReq11.open("GET","servlet/test.do?action=getAnnotations",false);
	XMLHttpReq11.send(null);
	indslist=XMLHttpReq11.responseText.replace(pattern,"");
	inds_temp=indslist.split(",");
	
	var ifexists = false;
	if(inds_temp!=null && inds_temp[0]!=""){
		for(var idx=0;idx<inds_temp.length;idx++){
			var ind_temp=inds_temp[idx].split(":");
			if(trackId == ind_temp[1]){
				ifexists = true;
			}
		}
	}

	XMLHttpReq11.open("GET","servlet/test.do?action=getExternals",false);
	XMLHttpReq11.send(null);
	indslist=XMLHttpReq11.responseText.replace(pattern,"");
	inds_temp=indslist.split(",");
	if(inds_temp!=null && inds_temp[0]!=""){
		for(var idx=0;idx<inds_temp.length;idx++){
			var ind_temp=inds_temp[idx].split(":");
			if(trackId == ind_temp[1]){
				ifexists = true;
			}
		}
	}
	var sucess = false;
	
	if(ifurl){
		if(trackId!=null && trackType!=null && trackURL!=null && trackId!="" && trackType!="" && trackURL!=""){
			if(trackId.substring(0,1)=='_'){
				alert("The track name cannot start with '_'.");
			}else if(ifexists){
				alert("The track name exists.");
			}else if(trackType!="VCF" && trackType!="GVF"){
				alert("This data type is not supported.");
			}else{
				XMLHttpReq11.open("GET","servlet/test.do?action=addExIndividuals&modes=hide&tracks="+trackId+"&types="+trackType+"&links="+trackURL,false);
				XMLHttpReq11.send(null);

				XMLHttpReq12.open("GET","servlet/test.do?action=getCheck&tracks="+trackId,false);
				XMLHttpReq12.send(null);
				var err_text=XMLHttpReq12.responseText.replace(pattern,"");
				if(err_text==null||err_text==""){
					sucess = true;
					trackItems_setting3();
				}else{
					XMLHttpReq12.open("GET","servlet/test.do?action=removeExternals&tracks="+trackId,false);
					XMLHttpReq12.send(null);
					alert(err_text);
				}
			}
		}else{
			alert("Please fill all required parameters.");
		}
	}else if(ifupload){
		if(trackId!=null && trackType!=null && fileObj!=null && fileObj2!=null && trackId!="" && trackType!=""){
			if(trackId.substring(0,1)=='_'){
				alert("The track name cannot start with '_'.");
			}else if(ifexists){
				alert("The track name exists.");
			}else if(trackType!="VCF" && trackType!="GVF"){
				alert("This data type is not supported.");
			}else if(fileObj.size>20*1000*1000 || fileObj2.size>20*1000*1000){
				alert("The file is too large.");
			}else{

				onProgressHandler = function(event) {
					if(event.lengthComputable) {
						var howmuch = (event.loaded / event.total) * 100;
						document.getElementById("uprogress").innerHTML = Math.floor(howmuch)+"% Completed";
					} else {
						console.log("Can't determine the size of the file.");
					}
				}
				var onLoadHandler = function() {
					document.getElementById("uprogress").innerHTML = "100% Completed";
				}
				var onErrorHandler = function() {
					document.getElementById("uprogress").innerHTML = "Upload Failed.";
				}
				XMLHttpReq11.upload.addEventListener('progress', onProgressHandler, false);
				XMLHttpReq11.upload.addEventListener('load', onLoadHandler, false);
				XMLHttpReq11.upload.addEventListener('error', onErrorHandler, false);
				var onReadyStateHandlerUprogress = function(event) {
					if(event.target.readyState == 4){
						control_upexternal=0;
						XMLHttpReq12.open("GET","servlet/test.do?action=getCheck&tracks="+trackId,false);
						XMLHttpReq12.send(null);
						var err_text=XMLHttpReq12.responseText.replace(pattern,"");
						if(event.target.status == 200){
							if(err_text==null||err_text==""){
								sucess = true;
								trackItems_setting3();
							}else{
								XMLHttpReq12.open("GET","servlet/test.do?action=removeExternals&tracks="+trackId,false);
								XMLHttpReq12.send(null);
								alert(err_text);
							}
						}else{
							XMLHttpReq12.open("GET","servlet/test.do?action=removeExternals&tracks="+trackId,false);
							XMLHttpReq12.send(null);
							if(err_text==null||err_text==""){
								alert("Unknown error");
							}else{
								alert(err_text);
							}
						}
					}

				}

				var form = new FormData();
				form.append("file", fileObj);
				form.append("file", fileObj2);
				form.append("enctype", "multipart/form-data");
				XMLHttpReq11.open("POST","servlet/test.do?action=upExternal&modes=hide&tracks="+trackId+"&types="+trackType,true);
				control_upexternal=1;
				XMLHttpReq11.onreadystatechange = onReadyStateHandlerUprogress;
				XMLHttpReq11.send(form);
			}
		}else{
			alert("Please fill all required parameters.");
		}
	}
	///////////////////
/*These codes are for display loaded track in reference track management
 * Temporarily cancled.
	if(sucess){ //to add ExIndividual from 'select individual in trackItems array
		var customTrackId = trackId;
		var customTrackDisplayMode = "hide";
		var customTrackDataType = trackType;

		var temp_trackItemsLength = trackItems.length;
		trackItems[temp_trackItemsLength] = [];
		trackItems[temp_trackItemsLength].id = customTrackId;
		trackItems[temp_trackItemsLength].mode = customTrackDisplayMode;
		trackItems[temp_trackItemsLength].dataType = customTrackDataType;
		trackItems[temp_trackItemsLength].isServer = 0;
	
		var cookieStr;
		if($.cookie("customTrackList")) {
			cookieStr = $.cookie("customTrackList") + ",";
		} else {
			cookieStr = "";
		}
		cookieStr = cookieStr + customTrackId;
		cookieStr = cookieStr + ":";
		cookieStr = cookieStr + customTrackDisplayMode;
		cookieStr = cookieStr + ":";
		cookieStr = cookieStr + customTrackDataType;
		$.cookie("customTrackList", cookieStr, {
			expires : 10 / 24
		});
	
		if(trackItems[temp_trackItemsLength].mode != "hide") {
			createTrack(trackItems[temp_trackItemsLength].id, trackItems[temp_trackItemsLength].mode);
		}
		currentTrackItem = trackItems[temp_trackItemsLength];
		trackItems_setting2();
	}
	////////////////////////////
	*/
}
function fill_example_pg(){
	document.getElementById("pg_upload_name").value="test_1";
	document.getElementById("pg_upload_url").value="http://www.pgbrowser.org/Example.vcf.gz";
	document.getElementById("pg_upload_type").value="VCF";
}
function pinPersonalPannel(){
	personalPinned = true;
//	$(document.getElementById("personalPannel")).css("display", "none");
	var _personalPanel = $('#personalPannel');
	var _width = _personalPanel.css('width');
	var _height = _personalPanel.css('height');
	var _top = _personalPanel.css('top');
	var _left = _personalPanel.css('left');
	var left_value = $("#divTrack").position().left+1110>$(window).width()-32?$(window).width()-32:$("#divTrack").position().left+1110
	
	_personalPanel.animate({ 
		width: 0, 
		height: 0,
		top: $(window).height() / 3,
		left: left_value,
	},
	{
		complete: function(){
			generate_ppBtns();
			_personalPanel.css("display","none");
		}
	});
	document.getElementById("ppTrackTable").innerHTML = "";

	addPvarHttpRequest2(personalPannel.Pvar.id.substring(1),initPvar_superid);
}
var isPpBtns= false;
function generate_ppBtns(){
	if(isPpBtns){
		return;
	}

	var _personalPanel = $('#personalPannel');
	var _width = $("#divTrack").css('width');
	var _top =  document.body.scrollTop + $(window).height()/2;
	_top = _top > 100 ? _top:100;
	var _left = $("#divTrack").position().left;
	var left_value = $("#divTrack").position().left+1110>$(window).width()-32?$(window).width()-32:$("#divTrack").position().left+1110

	$('body').append(
	'<div id="ppBtns" style="height:100px;width:35px;top:'+ ($(window).height() / 3 - 48) + 'px; left:' + left_value + 'px; position:fixed;">'
	+ '<input type="button" id="unpinWindowBtn"'
	+ ' style="height:31px; width:32px; border-style:none; background: url(image/mouse-out-32.png); margin:1px"/>'
	+ '<input type="button" id="setWindowBtn"'
	+ ' style="height:32px; width:32px; border-style:none; background: url(image/setting-out-32.png); margin:1px"/>'
	+ '<input type="button" id="closeWindowBtn"'
	+ ' style="height:32px; width:32px; border-style:none; background: url(image/close-out-32.png); margin:1px"/></div>'
	);
					
	ppBtns = $('#ppBtns');

	unpinWindowBtn = $('#unpinWindowBtn');
	unpinWindowBtn.mousemove(function(e){
		unpinWindowBtn.css('background', 'url(image/mouse-over-32.png)');
	});
	unpinWindowBtn.mouseout(function(e){
		unpinWindowBtn.css('background', 'url(image/mouse-out-32.png)');
	});
	unpinWindowBtn.click(function(e){
		_left = $("#divTrack").position().left;
		ppBtns.remove();
		isPpBtns = false;
		_personalPanel.css("display","block");
		_personalPanel.animate({ 
			width: _width, 
			height: "auto",
			top: _top,
			left: _left,
		});
		_personalPanel.css("height","auto");
		unpinPersonalPannel();
		//$(window).resize();
	});

	setWindowBtn = $('#setWindowBtn');
	setWindowBtn.mousemove(function(e){
		setWindowBtn.css('background', 'url(image/setting-over-32.png)');
	});
	setWindowBtn.mouseout(function(e){
		setWindowBtn.css('background', 'url(image/setting-out-32.png)');
	});
	setWindowBtn.click(function(e){
		setPersonalPannel();
	});

	closeWindowBtn = $('#closeWindowBtn');
	closeWindowBtn.mousemove(function(e){
		closeWindowBtn.css('background', 'url(image/close-over-32.png)');
	});
	closeWindowBtn.mouseout(function(e){
		closeWindowBtn.css('background', 'url(image/close-out-32.png)');
	});
	closeWindowBtn.click(function(e){
		removePvar();
	});
	isPpBtns = true;
}
function unpinPersonalPannel(){
	personalPinned = false;
	var ppTrackTable = document.getElementById("tableTrack");
	var ptracks=[];
	var j=0;
	for(var i = 0; i<ppTrackTable.rows.length; i++){
		if(ppTrackTable.rows[i].id && ppTrackTable.rows[i].id.substring(0,1)=="_"){
			ptracks[j]=ppTrackTable.rows[i].id;
			j++;
		}
	}
	if(j>0){
		for(j=0;j<ptracks.length;j++){
			removeTrack(ptracks[j]);
		}
	}
	if($("#personalPannel").css("display") != "none"){
		ppLoadingId = showLoadingImage("ppContent", "#personalPannel");
	}
	addPvarHttpRequest2(personalPannel.Pvar.id.substring(1),initPvar_superid);
}
/*为解决搜索框与personal gene detail box出现冲突而添加的代码，从根本上解决之后不需要这段代码
$(document).ready(function() {
	$("#search_field").click(function(){
		$("#search_field").focus();
		$("body").css("user-select","auto");
		$("body").css("-moz-user-select","auto");
		$("body").css("-webkit-user-select","auto");
		$("body").css("-ms-user-select","auto");
		
		$("#search_field").css("user-select","auto");
		$("#search_field").css("-moz-user-select","auto");
		$("#search_field").css("-webkit-user-select","auto");
		$("#search_field").css("-ms-user-select","auto");
	});
	$(document).click(function(evt){
		evt = evt || window.event;
		var eventTarget = evt.target || evt.srcElement;
		if(eventTarget.id != "search_field"){
			$("#search_field").blur();
		}
	});
});*/
var tracksImgareaselect;
var ppTracksImgareaselect;
var shiftKeyState = false;
var zKeyState = false;
var testFlag=0;//Liran
$(document).ready(function() {
	tracksImgareaselect = $(document.getElementById("divTrack")).imgAreaSelect({
		classPrefix : "divTrackImgareaselect",
		handles : false,
		resizable : false,
		movable : false,
		autoHide : true,
		instance : true,
		disable : true,
		minHeight : 100,
		onSelectChange : function(img, selection) {
			var baseX = $(document.getElementById("divTrack")).width() - trackLength_user;
			searchLength_user = end_user - start_user + 1;
		//	if(selection.x1 >= baseX) {
			if(selection.x1 >= baseX && testFlag!=1) {//Liran
				var tempStart = start_user + parseInt(searchLength_user / trackLength_user * (selection.x1 - baseX));
				var tempEnd = start_user + parseInt(searchLength_user / trackLength_user * (selection.x2 - baseX));
				showuserSearchIndex(tempStart, tempEnd);
				setSliderValue(tempEnd - tempStart + 1);
				drawScaleboxOnCytobandsImg(tempEnd - tempStart + 1, tempStart);
			}
			testFlag=0;//Liran
		},
		onSelectEnd : function(img, selection) {
			var baseX = $(document.getElementById("divTrack")).width() - trackLength_user;
			var tempStr = chrNum + ":" + start_user + "-" + end_user;
			searchLength_user = end_user - start_user + 1;

			if(selection.x1 >= baseX && selection.x2 < baseX + trackLength_user + 1) {
				var tempStart = start_user + parseInt(searchLength_user / trackLength_user * (selection.x1 - baseX));
				var tempEnd = start_user + parseInt(searchLength_user / trackLength_user * (selection.x2 - baseX));
				//document.getElementById("searchInput").value = chrNum + ":" + tempStart + "-" + tempEnd;
				start_user = tempStart;
				end_user = tempEnd;
				searchLength_user = end_user - start_user + 1;
				startIndex = start_user - searchLength_user;
				endIndex = end_user + searchLength_user;
				searchLength = searchLength_user * 3;
				setSliderValue(searchLength_user);
				drawScaleboxOnCytobandsImg(searchLength_user, start_user);
				showuserSearchIndex(start_user, end_user);
				testFlag=1;//Liran
				showRef();
			} else {
				//document.getElementById("searchInput").value = tempStr;
				setSliderValue(searchLength_user);
				drawScaleboxOnCytobandsImg(searchLength_user, start_user);
				showuserSearchIndex(start_user, end_user);
			}
			
			shiftKeyState = false;
			var trackTable = document.getElementById("tableTrack");
			var trackContentNodes = trackTable.getElementsByClassName("trackContent");
			for(var i = 0; i < trackContentNodes.length; i++) {
				$(trackContentNodes[i].childNodes[0]).css("cursor", "url(./image/Grabber.cur),auto");
			}
			$("#ppContent .canvasTrackcontent").each(function(arrayindex, arrayele) {
				$(arrayele).css("cursor", "url(./image/Grabber.cur),auto");
			});
		}
	});
	
	ppTracksImgareaselect = $("#ppContent").imgAreaSelect({
		classPrefix : "divTrackImgareaselect",
		handles : false,
		resizable : false,
		movable : false,
		autoHide : true,
		instance : true,
		disable : true,
		minHeight : 100,
		onSelectChange : function(img, selection) {
			var baseX = $(document.getElementById("ppContent")).width() - trackLength_user;
			searchLength_user = end_user - start_user + 1;
		//	if(selection.x1 >= baseX) {
			if(selection.x1 >= baseX && testFlag!=1) {//Liran
				var tempStart = start_user + parseInt(searchLength_user / trackLength_user * (selection.x1 - baseX));
				var tempEnd = start_user + parseInt(searchLength_user / trackLength_user * (selection.x2 - baseX));
				showuserSearchIndex(tempStart, tempEnd);
				setSliderValue(tempEnd - tempStart + 1);
				drawScaleboxOnCytobandsImg(tempEnd - tempStart + 1, tempStart);
			}
			testFlag=0;//Liran
		},
		onSelectEnd : function(img, selection) {
			var baseX = $(document.getElementById("ppContent")).width() - trackLength_user;
			var tempStr = chrNum + ":" + start_user + "-" + end_user;
			searchLength_user = end_user - start_user + 1;

			if(selection.x1 >= baseX && selection.x2 < baseX + trackLength_user + 1) {
				var tempStart = start_user + parseInt(searchLength_user / trackLength_user * (selection.x1 - baseX));
				var tempEnd = start_user + parseInt(searchLength_user / trackLength_user * (selection.x2 - baseX));
				start_user = tempStart;
				end_user = tempEnd;
				searchLength_user = end_user - start_user + 1;
				startIndex = start_user - searchLength_user;
				endIndex = end_user + searchLength_user;
				searchLength = searchLength_user * 3;
				setSliderValue(searchLength_user);
				drawScaleboxOnCytobandsImg(searchLength_user, start_user);
				showuserSearchIndex(start_user, end_user);
				testFlag=1;//Liran
				showRef();
			} else {
				setSliderValue(searchLength_user);
				drawScaleboxOnCytobandsImg(searchLength_user, start_user);
				showuserSearchIndex(start_user, end_user);
			}
			
			shiftKeyState = false;
			var trackTable = document.getElementById("tableTrack");
			var trackContentNodes = trackTable.getElementsByClassName("trackContent");
			for(var i = 0; i < trackContentNodes.length; i++) {
				$(trackContentNodes[i].childNodes[0]).css("cursor", "url(./image/Grabber.cur),auto");
			}
			$("#ppContent .canvasTrackcontent").each(function(arrayindex, arrayele) {
				$(arrayele).css("cursor", "url(./image/Grabber.cur),auto");
			});
		}
	});
	
	var trackTable = document.getElementById("tableTrack");
	var trackContentNodes = trackTable.getElementsByClassName("trackContent");
	for(var i = 0; i < trackContentNodes.length; i++) {
		trackContentNodes[i].childNodes[0].onmousedown = mouseDownRightCanvas;
	}
	
	document.onkeydown = keyDown;
	document.onkeyup = keyUp;
	//document.onmouseup = mouseUp;   //the detail information of the event "onmouseup" about dragToZoomin in the file "trackMove.js"
});
function keyDown(evt) {
	evt = evt ? evt : ((window.event) ? window.event : "");
	var key = evt.keyCode ? evt.keyCode : evt.which;
	if(key == 16) {
		shiftKeyState = true;
		var trackTable = document.getElementById("tableTrack");
		var trackContentNodes = trackTable.getElementsByClassName("trackContent");
		for(var i = 0; i < trackContentNodes.length; i++) {
			$(trackContentNodes[i].childNodes[0]).css("cursor", "crosshair");
		}
		$("#ppContent .canvasTrackcontent").each(function(arrayindex, arrayele) {
			$(arrayele).css("cursor", "crosshair");
		});
		var verticalLine = $(document.getElementById("verticalLine"));
		var indexSpan = $(document.getElementById("indexSpan"));
		verticalLine.css("display", "none");
		indexSpan.css("display", "none");
	}
	if(key == 90){
		zKeyState = true;
		mousewheelzoomScale = searchLength_user;
		mousewheelzoomStart = start_user;
	}
}

function keyUp(evt) {
	evt = evt ? evt : ((window.event) ? window.event : "");
	var key = evt.keyCode ? evt.keyCode : evt.which;
	if(key == 16) {
		shiftKeyState = false;
		var trackTable = document.getElementById("tableTrack");
		var trackContentNodes = trackTable.getElementsByClassName("trackContent");
		for(var i = 0; i < trackContentNodes.length; i++) {
			$(trackContentNodes[i].childNodes[0]).css("cursor", "url(./image/Grabber.cur),auto");
		}
		$("#ppContent .canvasTrackcontent").each(function(arrayindex, arrayele) {
			$(arrayele).css("cursor", "url(./image/Grabber.cur),auto");
		});
	}
	if(key == 90){
		zKeyState = false;
		if(start_user - searchLength_user != startIndex || searchLength != searchLength_user * 3){
			end_user = start_user + searchLength_user - 1;
			startIndex = start_user - searchLength_user;
			endIndex = end_user + searchLength_user;
			searchLength = searchLength_user * 3;
			showRef();
		}
	}
}

function mouseOverRightCanvas() {
	if(shiftKeyState) {
		tracksImgareaselect.setOptions({
			disable : false
		});
	}
}

function mouseDownRightCanvas() {
	if(shiftKeyState) {
		tracksImgareaselect.setOptions({
			disable : false,
			minHeight : $(document.getElementById("divTrack")).height()
		});
		$(".canvasTrackcontent").draggable("destroy");
	}
}

function mouseDownRightCanvasInPP(){
	if(shiftKeyState) {
		ppTracksImgareaselect.setOptions({
			disable : false,
			minHeight : $(document.getElementById("ppContent")).height()
		});
		$(".canvasTrackcontent").draggable("destroy");
	}
}
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/
		  
var tb_pathToImage = "./image/loading.gif";
var getParamsURL;
var currentTrack_IdOrSuperid_setParams;

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
$(document).ready(function(){   
	tb_init('a.thickbox, area.thickbox, input.thickbox, span.thickbox, li.thickbox');//pass where to apply thickbox
	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;
});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk){
	$(domChunk).click(function(){
	initialChrSelectList();//为了每次初始化上传数据的界面，自己添加的代码
	clearAllInput()//为了每次初始化上传数据的界面
	var t = this.title || this.name || null;
	var a = this.href || this.alt|| this.attributes["alt"].nodeValue;
	var g = this.rel || false;
	var x = this.id;
	getParamsURL = x;
	tb_show(t,a,g,x);
	this.blur();
	return false;
	});
}

function tb_show(caption, url, imageGroup,ajaxUrl) {//function called when the user clicks on a thickbox link

	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			$("body","html").css({height: "100%", width: "100%"});
			$("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				$("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				$("#TB_overlay").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				$("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				$("#TB_overlay").click(tb_remove);
			}
		}
		
		if(tb_detectMacXFF()){
			$("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			$("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}
		
		if(caption===null){caption="";}
		$("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");//add loader to the page
		$('#TB_load').show();//show loader
		
		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{ 
	   		baseURL = url;
	   }
	   
	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
				
			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = $("a[@rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {						
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = "Image " + (TB_Counter + 1) +" of "+ (TB_TempArray.length);											
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){		
			imgPreloader.onload = null;
				
			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			TB_WIDTH = imageWidth + 80;
			TB_HEIGHT = imageHeight + 110;
			$("#TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='Close'>Close</a> or Esc Key</div>"); 		
			
			$("#TB_closeWindowButton").click(tb_remove);
			
			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;	
				}
				$("#TB_prev").click(goPrev);
			}
			
			if (!(TB_NextHTML === "")) {		
				function goNext(){
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);				
					return false;	
				}
				$("#TB_next").click(goNext);
				
			}

			/*document.onkeydown = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				} else if(keycode == 190){ // display previous image
					if(!(TB_NextHTML == "")){
						document.onkeydown = "";
						goNext();
					}
				} else if(keycode == 188){ // display next image
					if(!(TB_PrevHTML == "")){
						document.onkeydown = "";
						goPrev();
					}
				}	
			};*/
			
			tb_position();
			$("#TB_load").remove();
			$("#TB_ImageOff").click(tb_remove);
			$("#TB_window").css({display:"block"}); //for safari using css instead of show
			};
			
			imgPreloader.src = url;
		}else{//code to show html
			
			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 80 || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) + 90 || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 45;
			
			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window		
					urlNoQuery = url.split('TB_');
					$("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='Close'>Close</a></div></div><iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' > </iframe>");
					}else{//iframe modal
					$("#TB_overlay").unbind();
						$("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'> </iframe>");
					}
			}else{// not an iframe, ajax
					if($("#TB_window").css("display") != "block"){
						if(params['modal'] != "true"){//ajax no modal
						$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'>Close</a></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						$("#TB_overlay").unbind();
						$("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						$("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						$("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						$("#TB_ajaxContent")[0].scrollTop = 0;
						$("#TB_ajaxWindowTitle").html(caption);
					}
			}
					
			$("#TB_closeWindowButton").click(tb_remove);
			
				if(url.indexOf('TB_inline') != -1){	
					$("#TB_ajaxContent").append($('#' + params['inlineId']).children());
					$("#TB_window").unload(function () {
						$('#' + params['inlineId']).append( $("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					$("#TB_load").remove();
					$("#TB_window").css({display:"block"}); 
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					if($.browser.safari){//safari needs help because it will not fire iframe onload
						$("#TB_load").remove();
						$("#TB_window").css({display:"block"});
					}
				}else{
					$("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						$("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						$("#TB_window").css({display:"block"});
					});
				}
			
		}
		if(ajaxUrl)
			getParamsRequest(ajaxUrl);

		/*if(!params['modal']){
			document.onkeyup = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				}	
			};
		}*/
		
	} catch(e) {
		//nothing here
	}
}

//XMLHttpReq是jump.js中定义的全局XMLHttpRequest对象
function getParamsRequest(url) {
	var settingPanel = document.getElementById("TB_ajaxContent");
	settingPanel.innerHTML = "";
	var imgEle = document.createElement("img");
	imgEle.setAttribute("src","./image/loading.gif");
	settingPanel.appendChild(imgEle);
	imgEle.setAttribute("style","position:absolute;left:35%; top:50%");
		
	XMLHttpReq.onreadystatechange = handleGetParamsRequestStateChange;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}
function handleGetParamsRequestStateChange(){
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			var XMLDoc = XMLHttpReq.responseXML;
			var settingPanel = document.getElementById("TB_ajaxContent");
			var paramsTable = document.createElement("table");
			var paramstrNode, paramstdNode;
			var paramId = (XMLDoc.getElementsByTagName(xmlTagParameters)[0]).getAttribute("id");
			currentTrack_IdOrSuperid_setParams = paramId;
			var paramNodes = XMLDoc.getElementsByTagName(xmlTagParameter);
			var paramStruct = [];
			for(var i=0;i<paramNodes.length;i++){
				paramstrNode = paramsTable.insertRow(-1);
				paramstrNode.setAttribute("style","vertical-align: top;");
				paramstdNode = paramstrNode.insertCell(-1);
				paramStruct[i] = [];
				paramStruct[i].id = paramNodes[i].getAttribute("id");
				paramStruct[i].type = paramNodes[i].getAttribute(xmlAttributeType);
				paramstdNode.innerHTML = paramStruct[i].id;
				if(paramNodes[i].getAttribute(xmlAttributeType)=="STRING"){
					paramstdNode.setAttribute("style","text-align:right;padding-top:3px;");
				}else if(paramNodes[i].getAttribute(xmlAttributeType)=="CHECKBOX"){
					paramstdNode.setAttribute("style","text-align:right;padding-top:4px;");
				}else{
					paramstdNode.setAttribute("style","text-align:right;padding-top:3px;");
				}
				paramstdNode = paramstrNode.insertCell(-1);
				if(paramNodes[i].getAttribute(xmlAttributeType)=="STRING"){
					paramstdNode.innerHTML = "<input type=\"text\" style=\" border:solid 1px #A3A3A3;\" name=\"" + paramStruct[i].id + "\" value=\""+ paramNodes[i].childNodes[0].nodeValue +"\"/>";
				}else if(paramNodes[i].getAttribute(xmlAttributeType)=="CHECKBOX"){
					var options = getNodeText(paramNodes[i].getElementsByTagName(xmlTagOptions)[0]).split(";");
					var optionsTable = document.createElement("table");
					var optionstrNode, optionstdNode;
					for(var j=0;j<options.length;j++){
						if(j%5==0){
							optionstrNode = optionsTable.insertRow(-1);
						}
						optionstdNode = optionstrNode.insertCell(-1);
						var option = options[j].split(':');
						var optionInnerHTML = "<input type=\"checkbox\"";
						if(option[1]=="1"){
							optionInnerHTML = optionInnerHTML + "checked=\"true\"";
						}
						optionInnerHTML = optionInnerHTML + " name=\""+ paramStruct[i].id +"\" value=\"" + option[0]+ "\"/>" + option[0];
						optionstdNode.innerHTML = optionInnerHTML;
					}
					var divBorderOfTable = document.createElement("div");
					divBorderOfTable.setAttribute("style","border:solid 1px #A3A3A3");
					paramstdNode.appendChild(divBorderOfTable);
					divBorderOfTable.appendChild(optionsTable);
					//paramstdNode.appendChild(optionsTable);
				}else if(paramNodes[i].getAttribute(xmlAttributeType)=="VCFSAMPLE"){
					var options = getNodeText(paramNodes[i].getElementsByTagName(xmlTagOptions)[0]).split(";");
					var optionsTable = document.createElement("table");
					//optionsTable.setAttribute("style","height:200px;overflow:scroll;");
					var optionstrNode, optionstdNode;
					for(var j=0;j<options.length;j++){
						if(j%5==0){
							optionstrNode = optionsTable.insertRow(-1);
						}
						optionstdNode = optionstrNode.insertCell(-1);
						var option = options[j].split(':');
						var optionInnerHTML = "<input type=\"checkbox\"";
						if(option[1]=="1"){
							optionInnerHTML = optionInnerHTML + "checked=\"true\"";
						}
						optionInnerHTML = optionInnerHTML + " name=\""+ paramStruct[i].id +"\" value=\"" + option[0]+ "\"/>" + option[0];
						/*if(option[1]=="1"){
							optionInnerHTML = optionInnerHTML + "checked=\"true\"" +"/>" + option[0];
						}else{
							optionInnerHTML = optionInnerHTML + "/>" + option[0];
						}*/
						optionstdNode.innerHTML = optionInnerHTML;
					}
					var divBorderOfTable = document.createElement("div");
					divBorderOfTable.setAttribute("style","height:100px;overflow:scroll;overflow-x:hidden;border:solid 1px #A3A3A3");
					paramstdNode.appendChild(divBorderOfTable);
					divBorderOfTable.appendChild(optionsTable);
					//paramstdNode.appendChild(optionsTable);
				}
			}
			settingPanel.innerHTML = "";
			var centerEle = document.createElement("center");
			centerEle.setAttribute("style","margin-top:25px;");
			settingPanel.appendChild(centerEle);
			centerEle.appendChild(paramsTable);
			
			var BtnTabEle = document.createElement("table");
			BtnTabEle.setAttribute("style","margin-top:40px;");
			var BtnTabTrEle = BtnTabEle.insertRow(-1);
			var BtnTabTdEle = BtnTabTrEle.insertCell(-1);
			BtnTabTdEle.setAttribute("style","text-align:center; width:200px;");
			BtnTabTdEle.innerHTML = "<input id=\"paramSubmit\" type=\"button\" value=\"Submit\"/>"
			BtnTabTdEle = BtnTabTrEle.insertCell(-1);
			BtnTabTdEle.setAttribute("style","text-align:center; width:200px;");
			BtnTabTdEle.innerHTML = "<input id=\"paramReset\" type=\"button\" value=\"Reset\"/>"
			centerEle.appendChild(BtnTabEle);
			
			document.getElementById("paramSubmit").onclick = function(p,pId){
				return function(){
					var trackId,trackmode,params="",values="",tempValue;
					trackId = pId;
					for(var i=0; i< p.length;i++){
						var valueNodes = document.getElementsByName(p[i].id);
						if(p[i].type == "STRING"){
							tempValue = valueNodes[0].value;
							if(tempValue!=""){
								params = params + p[i].id + ";";
								values = values + tempValue + ";";
							}
						}else if(p[i].type == "CHECKBOX"|| p[i].type == "VCFSAMPLE"){
							tempValue = "";
							for(var j=0; j<valueNodes.length;j++){
								if(valueNodes[j].checked){
									tempValue = tempValue + valueNodes[j].value + ":";
								}
							}
							params = params + p[i].id + ";";
							if(tempValue!=""){
								tempValue = tempValue.substr(0, tempValue.length-1);						
							}else{
								tempValue = "0";								
							}
							values = values + tempValue + ";";
						}
					}
					for(var i=0; i<trackItems.length;i++){
						if(trackItems[i].id == trackId){
							trackmode = trackItems[i].mode;
							break; 
						}else if(trackItems[i].superid == trackId){
							trackmode = trackItems[i].mode;
							break;
						}
					}
					if(params!=""){
						params = params.substr(0, params.length-1);
						values = values.substr(0, values.length-1);
						
						var setParamsURL = ("servlet/test.do?" + "action=setParams&tracks=" + trackId + "&params=" + params + "&values=" + values + "&modes=" + trackmode);
						setParamsRequest(setParamsURL);
					}
				};
			}(paramStruct, paramId);
			
			document.getElementById("paramReset").onclick = function(){
				getParamsRequest(getParamsURL);
			};
			
			//settingPanel.appendChild(paramsTable);
			//settingPanel.innerHTML = XMLHttpReq.responseXML;
		}
	}
}

function setParamsRequest(url){
	XMLHttpReq.onreadystatechange = handlesetParamsRequestStateChange;
	XMLHttpReq.open("GET", url, true);
	XMLHttpReq.send(null);
}

function handlesetParamsRequestStateChange(){
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			tb_remove();
			
			var XMLDoc = XMLHttpReq.responseXML;
			var idTrackObj = [], superidTrackArray=[];
			var dataType_original , group_original , mode_original;
			var nodeXmltag = xmlTagVariants;
			var k =0;
			for(var i=0; i< trackItems.length;i++){
				if(trackItems[i].id == currentTrack_IdOrSuperid_setParams){
					idTrackObj.id = currentTrack_IdOrSuperid_setParams;
					idTrackObj.idx = i;
					dataType_original = trackItems[i].dataType;
					group_original = trackItems[i].group;
					mode_original = trackItems[i].mode;
					break;
				}
				if(trackItems[i].superid == currentTrack_IdOrSuperid_setParams){
					superidTrackArray[k] = [];
					superidTrackArray[k].id = trackItems[i].id;
					superidTrackArray[k].idx = i;
					dataType_original = trackItems[i].dataType;
					group_original = trackItems[i].group;
					mode_original = trackItems[i].mode;
					
					k++;
				}
			}
			
			/*
			if(dataType_original=="BAM"){
				
			}else if(dataType_original=="VCF"||dataType_original=="GVF"){
				
			}else if(dataType_original=="BED"||dataType_original=="BEDGZ"||dataType_original=="ANNO"||dataType_original=="GRF"||dataType_original=="GDF"){
				
			}else if(dataType_original=="BW"||dataType_original=="WIG"){
				
			}*/
			var variantsNodes = XMLDoc.getElementsByTagName(nodeXmltag);
		//	if(superidTrackArray.length>0|| variantsNodes[0].getAttribute("superid")){// ----Del by Liran for enable refresh of non-splitted vcf tracks
				if(superidTrackArray.length>0 && variantsNodes[0].getAttribute("superid")){
					for(var i=0; i< superidTrackArray.length;i++){
						trackItems.splice(superidTrackArray[i].idx-i,1);
						removeTrack(superidTrackArray[i].id);
					}
					for(var i=0; i<variantsNodes.length;i++){
						var tempTrackItemObj = [];
						tempTrackItemObj.id = variantsNodes[i].getAttribute("id");
						tempTrackItemObj.superid = variantsNodes[i].getAttribute("superid");
						tempTrackItemObj.mode = mode_original;
						tempTrackItemObj.dataType = dataType_original;
						tempTrackItemObj.group = group_original;
						tempTrackItemObj.isServer = 1;
						tempTrackItemObj.details = [];
						
						trackItems.push(tempTrackItemObj);
						
						createTrack(tempTrackItemObj.id, tempTrackItemObj.mode);
						
						var tempcanvasNode = document.getElementById(tempTrackItemObj.id).getElementsByTagName("canvas");
						showVariant(tempcanvasNode[0], tempcanvasNode[1], variantsNodes[i], mode_original);
					}
				}else if(superidTrackArray.length>0 && (!(variantsNodes[0].getAttribute("superid")))){
					for(var i=0; i< superidTrackArray.length;i++){
						trackItems.splice(superidTrackArray[i].idx-i,1);
						removeTrack(superidTrackArray[i].id);
						//
					}
					var tempTrackItemObj = [];
					tempTrackItemObj.id = variantsNodes[0].getAttribute("id");
					tempTrackItemObj.mode = mode_original;
					tempTrackItemObj.dataType = dataType_original;
					tempTrackItemObj.group = group_original;
					tempTrackItemObj.isServer = 1;
					tempTrackItemObj.details = [];
					
					trackItems.push(tempTrackItemObj);
	
					createTrack(tempTrackItemObj.id, tempTrackItemObj.mode);
						
					var tempcanvasNode = document.getElementById(tempTrackItemObj.id).getElementsByTagName("canvas");
					showVariant(tempcanvasNode[0], tempcanvasNode[1], variantsNodes[0], mode_original);
				}else{
					trackItems.splice(idTrackObj.idx,1);
					removeTrack(idTrackObj.id);
					
					for(var i=0; i<variantsNodes.length;i++){
						var tempTrackItemObj = [];
						tempTrackItemObj.id = variantsNodes[i].getAttribute("id");
						tempTrackItemObj.superid = variantsNodes[i].getAttribute("superid");
						tempTrackItemObj.mode = mode_original;
						tempTrackItemObj.dataType = dataType_original;
						tempTrackItemObj.group = group_original;
						tempTrackItemObj.isServer = 1;
						tempTrackItemObj.details = [];
						
						trackItems.push(tempTrackItemObj);
						
						createTrack(tempTrackItemObj.id, tempTrackItemObj.mode);
						
						var tempcanvasNode = document.getElementById(tempTrackItemObj.id).getElementsByTagName("canvas");
						showVariant(tempcanvasNode[0], tempcanvasNode[1], variantsNodes[i], mode_original);
					}
				}
				personalPannel.personalTrackItems.Pvars = [];
				for(var i=0; i< trackItems.length; i++){
					if(trackItems[i].dataType == "VCF" || trackItems[i].dataType == "GVF"){
						personalPannel.personalTrackItems.Pvars.push("_"+ trackItems[i].id);
					}
				}
		//	}
		// ----Del by Liran for enable refresh of non-splitted vcf tracks
		}
	}
}

//helper functions below
function tb_showIframe(){
	$("#TB_load").remove();
	$("#TB_window").css({display:"block"});
}

function tb_remove() {
 	$("#TB_imageOff").unbind("click");
	$("#TB_closeWindowButton").unbind("click");
	$("#TB_window").fadeOut("fast",function(){
		$('#TB_window,#TB_overlay,#TB_HideSelect').trigger("unload").unbind().remove();
		});
	$("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		$("body","html").css({height: "auto", width: "auto"});
		$("html").css("overflow","");
	}
	//document.onkeydown = "";
	//document.onkeyup = "";
	return false;
}

function tb_position() {
$("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( !(jQuery.browser.msie && jQuery.browser.version < 7)) { // take away IE6
		$("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}


/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // NOTE Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};/*! jQuery UI - v1.10.2 - 2013-04-05
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,m=_.height,g=_.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+_+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:b,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),i.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i,s=this,n=!1,a=!1;for(e.ui.ddmanager&&!this.options.dropBehaviour&&(a=e.ui.ddmanager.drop(this,t)),this.dropped&&(a=this.dropped,this.dropped=!1),i=this.element[0];i&&(i=i.parentNode);)i===document&&(n=!0);return n||"original"!==this.options.helper?("invalid"===this.options.revert&&!a||"valid"===this.options.revert&&a||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,a)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;if("parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=["document"===n.containment?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"===n.containment?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"===n.containment?0:e(window).scrollLeft())+e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,("document"===n.containment?0:e(window).scrollTop())+(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||n.containment.constructor===Array)n.containment.constructor===Array&&(this.containment=n.containment);else{if(i=e(n.containment),s=i[0],!s)return;t="hidden"!==e(s).css("overflow"),this.containment=[(parseInt(e(s).css("borderLeftWidth"),10)||0)+(parseInt(e(s).css("paddingLeft"),10)||0),(parseInt(e(s).css("borderTopWidth"),10)||0)+(parseInt(e(s).css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(e(s).css("borderRightWidth"),10)||0)-(parseInt(e(s).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(e(s).css("borderBottomWidth"),10)||0)-(parseInt(e(s).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i}},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName),l=t.pageX,u=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(u=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(u=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,y=i.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,g>r-m&&h+m>g&&y>l-m&&u+m>y||g>r-m&&h+m>g&&b>l-m&&u+m>b||v>r-m&&h+m>v&&y>l-m&&u+m>y||v>r-m&&h+m>v&&b>l-m&&u+m>b?("inner"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d):(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}e.widget("ui.droppable",{version:"1.10.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(i)?i:function(e){return e.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=e.ui.ddmanager.droppables[this.options.scope];i.length>t;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"===t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===s.options.scope&&t.accept.call(t.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,i,s){if(!i.offset)return!1;var n,a,o=(e.positionAbs||e.position.absolute).left,r=o+e.helperProportions.width,h=(e.positionAbs||e.position.absolute).top,l=h+e.helperProportions.height,u=i.offset.left,c=u+i.proportions.width,d=i.offset.top,p=d+i.proportions.height;switch(s){case"fit":return o>=u&&c>=r&&h>=d&&p>=l;case"intersect":return o+e.helperProportions.width/2>u&&c>r-e.helperProportions.width/2&&h+e.helperProportions.height/2>d&&p>l-e.helperProportions.height/2;case"pointer":return n=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,a=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(a,d,i.proportions.height)&&t(n,u,i.proportions.width);case"touch":return(h>=d&&p>=h||l>=d&&p>=l||d>h&&l>p)&&(o>=u&&c>=o||r>=u&&c>=r||u>o&&r>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions.height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions={width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight})}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===n}),a.length&&(s=e.data(a[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);(function(e){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,a.widgetName+"-item")===a?(s=t(this),!1):undefined}),t.data(e.target,a.widgetName+"-item")===a&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-t(document).scrollTop()<o.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<o.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+o.scrollSpeed)),e.pageX-t(document).scrollLeft()<o.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<o.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+o.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=t.left,o=a+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u=s+l>r&&h>s+l&&e+c>a&&o>e+c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?u:e+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,a=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return n?this.floating?o&&"right"===o||"down"===a?2:1:a&&("down"===a?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return this.floating&&a?"right"===a&&s||"left"===a&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i,s,n,a,o=[],r=[],h=this._connectWith();if(h&&e)for(i=h.length-1;i>=0;i--)for(n=t(h[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&r.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(r.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=r.length-1;i>=0;i--)r[i][0].each(function(){o.push(this)});return t(o)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(u.push([t.isFunction(a.options.items)?a.options.items.call(a.element[0],e,{item:this.currentItem}):t(a.options.items,a.element),a]),this.containers.push(a));for(i=u.length-1;i>=0;i--)for(o=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",o),c.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t(e.document[0].createElement(s)).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?n.append("<td colspan='99'>&#160;</td>"):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,a,o,r,h,l,c,u,d,p,f=null,m=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],m=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(o=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],a=this.items.length-1;a>=0;a--)t.contains(this.containers[m].element[0],this.items[a].item[0])&&this.items[a].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[a].top,this.items[a].height))&&(u=this.items[a].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[a][l]-c)&&(d=!0,u+=this.items[a][l]),o>Math.abs(u-c)&&(o=Math.abs(u-c),r=this.items[a],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,a=e.pageX,o=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||s.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery);(function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),a=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(t(e.target).attr("tabIndex",-1),t(a).attr("tabIndex",0),a.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),(e.active===!1&&e.collapsible===!0||!this.headers.length)&&(e.active=!1,this.active=t()),e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,a=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),a=n.attr("id");s||(s=o+"-header-"+e,i.attr("id",s)),a||(a=o+"-panel-"+e,n.attr("id",a)),i.attr("aria-controls",a),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=a.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?t():n,newPanel:r};e.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-expanded":"false","aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr("tabIndex",-1):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(t,e,n){var a,o,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(o=d),o=o||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(a=t.show().outerHeight(),e.animate(i,{duration:r,easing:o,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:o,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(a-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,o,p):t.animate(s,r,o,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})})(jQuery);(function(e){var t=0;e.widget("ui.autocomplete",{version:"1.10.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,undefined;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:case a.NUMPAD_ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,s.preventDefault(),undefined;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({input:e(),role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:s})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,i=++t;return function(s){i===t&&e.__response(s),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<a>").text(i.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);(function(t){var e,i,s,n,a="ui-button ui-widget ui-state-default ui-corner-all",o="ui-state-hover ui-state-active ",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",h=function(){var e=t(this).find(":ui-button");setTimeout(function(){e.button("refresh")},1)},l=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,h),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var o=this,r=this.options,c="checkbox"===this.type||"radio"===this.type,u=c?"":"ui-state-active",d="ui-state-focus";null===r.label&&(r.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(a).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||t(this).removeClass(u)}).bind("click"+this.eventNamespace,function(t){r.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(d)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(d)}),c&&(this.element.bind("change"+this.eventNamespace,function(){n||o.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){r.disabled||(n=!1,i=t.pageX,s=t.pageY)}).bind("mouseup"+this.eventNamespace,function(t){r.disabled||(i!==t.pageX||s!==t.pageY)&&(n=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return r.disabled||n?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled||n)return!1;t(this).addClass("ui-state-active"),o.buttonElement.attr("aria-pressed","true");var e=o.element[0];l(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return r.disabled?!1:(t(this).addClass("ui-state-active"),e=this,o.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return r.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return r.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",r.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(a+" "+o+" "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(e?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?l(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(r),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(a.inline?e.parent()[0]:a.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.2"}});var a,r="datepicker",o=(new Date).getTime();t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,a;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),a=this._newInst(t(e),n),a.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,a):n&&this._inlineDatepicker(e,a)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,r,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,a,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=t("<span class='"+this._appendClass+"'>"+r+"</span>"),e[o?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(a?t("<img/>").attr({src:a,alt:n,title:n}):n)),e[o?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,a=new Date(2009,11,20),r=this._get(t,"dateFormat");r.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},a.setMonth(e(this._get(t,r.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(e(this._get(t,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),t.input.attr("size",this._formatDate(t,a).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,a,o){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],r,p)),n(p.settings,a||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,r);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,r),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,a){var r,o,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(r=s||{},"string"==typeof s&&(r={},r[s]=a),c&&(this._curInst===c&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,r),null!==h&&r.dateFormat!==e&&r.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&r.dateFormat!==e&&r.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,o),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,a=t.datepicker._getInst(e.target),r=!0,o=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),r=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",a.dpDiv),n[0]&&t.datepicker._selectDay(e.target,a.selectedMonth,a.selectedYear,n[0]),i=t.datepicker._get(a,"onSelect"),i?(s=t.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),r=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),r=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?1:-1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),r=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?-1:1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),r=e.ctrlKey||e.metaKey;break;default:r=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):r=!1;r&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,a=t.datepicker._getInst(i.target);return t.datepicker._get(a,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(a,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,a,r,o,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),a=s?s.apply(e,[e,i]):{},a!==!1&&(n(i.settings,a),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),o={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),o=t.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),i.input.is(":visible")&&!i.input.is(":disabled")&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,a=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],r=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",r*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!==document.activeElement&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_getBorders:function(t){var e=function(t){return{thin:1,medium:2,thick:3}[t]||t};return[parseFloat(e(t.css("border-left-width"))),parseFloat(e(t.css("border-top-width")))]},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),r=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-r:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+o?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+o):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,a,o=this._curInst;!o||e&&o!==t.data(e,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(e,i,s,n){var a,r=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(a=this._getInst(r[0]),a.selectedDay=a.currentDay=t("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(e,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,a=this._get(e,"altField");a&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(a).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var a,r,o,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,m=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,v=-1,_=-1,b=-1,y=!1,w=function(t){var e=i.length>a+1&&i.charAt(a+1)===t;return e&&a++,e},k=function(t){var e=w(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),a=s.substring(l).match(n);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},x=function(i,n,a){var r=-1,o=t.map(w(i)?a:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(r=i[0],l+=n.length,!1):e}),-1!==r)return r+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(a))throw"Unexpected literal at position "+l;l++};for(a=0;i.length>a;a++)if(y)"'"!==i.charAt(a)||w("'")?D():y=!1;else switch(i.charAt(a)){case"d":_=k("d");break;case"D":x("D",d,p);break;case"o":b=k("o");break;case"m":v=k("m");break;case"M":v=x("M",f,m);break;case"y":g=k("y");break;case"@":h=new Date(k("@")),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((k("!")-this._ticksTo1970)/1e4),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":w("'")?D():y=!0;break;default:D()}if(s.length>l&&(o=s.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=g?0:-100)),b>-1)for(v=1,_=b;;){if(r=this._getDaysInMonth(g,v-1),r>=_)break;v++,_-=r}if(h=this._daylightSavingAdjust(new Date(g,v-1,_)),h.getFullYear()!==g||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,a);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),r,o);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),a=n,r=this._getFormatConfig(t);try{a=this.parseDate(i,s,r)||n}catch(o){s=e?"":s}t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),t.currentDay=s?a.getDate():0,t.currentMonth=s?a.getMonth():0,t.currentYear=s?a.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},a=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,a=n.getFullYear(),r=n.getMonth(),o=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":o+=parseInt(l[1],10);break;case"w":case"W":o+=7*parseInt(l[1],10);break;case"m":case"M":r+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r));break;case"y":case"Y":a+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r))}l=h.exec(i)}return new Date(a,r,o)},r=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?s:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,a=t.selectedYear,r=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=r.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=r.getMonth(),t.drawYear=t.selectedYear=t.currentYear=r.getFullYear(),n===t.selectedMonth&&a===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+o].datepicker._adjustDate(s,-i,"M")},next:function(){window["DP_jQuery_"+o].datepicker._adjustDate(s,+i,"M")},hide:function(){window["DP_jQuery_"+o].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+o].datepicker._gotoToday(s)},selectDay:function(){return window["DP_jQuery_"+o].datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+o].datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+o].datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,a,r,o,h,l,c,u,d,p,f,m,g,v,_,b,y,w,k,x,D,T,C,S,M,N,I,P,A,z,H,E,F,O,W,j,R=new Date,L=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),J=this._get(t,"hideIfNoPrevNext"),Q=this._get(t,"navigationAsDateFormat"),K=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),U=this._get(t,"stepMonths"),q=1!==K[0]||1!==K[1],X=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),$=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),$)for(e=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=Q?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-U,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=Q?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+U,1)),this._getFormatConfig(t)):n,a=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",r=this._get(t,"currentText"),o=this._get(t,"gotoCurrent")&&t.currentDay?X:L,r=Q?this.formatDate(r,o,this._getFormatConfig(t)):r,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;K[0]>k;k++){for(x="",this.maxRows=4,D=0;K[1]>D;D++){if(T=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),C=" ui-corner-all",S="",q){if(S+="<div class='ui-datepicker-group",K[1]>1)switch(D){case 0:S+=" ui-datepicker-group-first",C=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:S+=" ui-datepicker-group-last",C=" ui-corner-"+(Y?"left":"right");break;default:S+=" ui-datepicker-group-middle",C=""}S+="'>"}for(S+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&0===k?Y?a:s:"")+(/all|right/.test(C)&&0===k?Y?s:a:"")+this._generateMonthYearHeader(t,Z,te,G,$,k>0||D>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)N=(w+c)%7,M+="<th"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[N]+"'>"+p[N]+"</span></th>";for(S+=M+"</tr></thead><tbody>",I=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),P=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((P+I)/7),z=q?this.maxRows>A?this.maxRows:A:A,this.maxRows=z,H=this._daylightSavingAdjust(new Date(te,Z,1-P)),E=0;z>E;E++){for(S+="<tr>",F=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",w=0;7>w;w++)O=g?g.apply(t.input?t.input[0]:null,[H]):[!0,""],W=H.getMonth()!==Z,j=W&&!_||!O[0]||G&&G>H||$&&H>$,F+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(W?" ui-datepicker-other-month":"")+(H.getTime()===T.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===T.getTime()?" "+this._dayOverClass:"")+(j?" "+this._unselectableClass+" ui-state-disabled":"")+(W&&!v?"":" "+O[1]+(H.getTime()===X.getTime()?" "+this._currentClass:"")+(H.getTime()===L.getTime()?" ui-datepicker-today":""))+"'"+(W&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(j?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(W&&!v?"&#xa0;":j?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===L.getTime()?" ui-state-highlight":"")+(H.getTime()===X.getTime()?" ui-state-active":"")+(W?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);S+=F+"</tr>"}Z++,Z>11&&(Z=0,te++),S+="</tbody></table>"+(q?"</div>"+(K[0]>0&&D===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=S}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,a,r,o){var h,l,c,u,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(a||!g)y+="<span class='ui-datepicker-month'>"+r[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+o[c]+"</option>");
y+="</select>"}if(_||(b+=y+(!a&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),m=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!a&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),a=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),r=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,a)));t.selectedDay=r.getDate(),t.drawMonth=t.selectedMonth=r.getMonth(),t.drawYear=t.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),a=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(t,a)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),a=this._getMinMaxDate(t,"max"),r=null,o=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=s),i[1].match(/[+\-].*/)&&(o+=s)),(!n||e.getTime()>=n.getTime())&&(!a||e.getTime()<=a.getTime())&&(!r||e.getFullYear()>=r)&&(!o||o>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.2",window["DP_jQuery_"+o]=t})(jQuery);(function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.2",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||t(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,a;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(a).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,a){s.position=[a.position.left-i.document.scrollLeft(),a.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(a))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,a){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(a))}}).css("position",a)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,a=!1,o={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(a=!0),t in i&&(o[t]=s)}),a&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})})(jQuery);(function(t){t.widget("ui.menu",{version:"1.10.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(e),i.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);(function(t,e){t.widget("ui.progressbar",{version:"1.10.2",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return t===e?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),e)},_constrainedValue:function(t){return t===e&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);(function(t){function e(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.widget("ui.spinner",{version:"1.10.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var t=this.element[0]===this.document[0].activeElement;t||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,this.element.val(this._format(i)),void 0}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(e?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:e(function(t){this._super(t),this._value(this.element.val())}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(e(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})})(jQuery);(function(t,e){function i(){return++n}function s(t){return t.hash.length>1&&decodeURIComponent(t.href.replace(a,""))===decodeURIComponent(location.href.replace(a,""))}var n=0,a=/#.*$/;t.widget("ui.tabs",{version:"1.10.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,a){return t(a).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),a=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:a=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,a),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var a,o,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),u=l.attr("aria-controls");s(n)?(a=n.hash,o=e.element.find(e._sanitizeSelector(a))):(r=e._tabId(l),a="#"+r,o=e.element.find(a),o.length||(o=e._createPanel(r),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),u&&l.data("ui-tabs-aria-controls",u),l.attr({"aria-controls":a.substring(1),"aria-labelledby":h}),o.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?t():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):t(),u={oldTab:s,oldPanel:l,newTab:r?t():a,newPanel:h};e.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",e,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?t():a,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),e),this._toggle(e,u))},_toggle:function(e,i){function s(){a.running=!1,a._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,a=this.tabs.eq(e),o=a.find(".ui-tabs-anchor"),r=this._getPanelForTab(a),h={tab:a,panel:r};s(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(a.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),a.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,a){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:a},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);(function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.2",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,a=e?e.type:null;return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=a),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function a(t){l.of=t,o.is(":hidden")||o.position(l)}var o,r,h,l=t.extend({},this.options.position);if(n){if(o=this._find(s),o.length)return o.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),o=this._tooltip(s),e(s,o.attr("id")),o.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:a}),a(i)):o.position(t.extend({of:s},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){o.is(":visible")&&(a(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:o}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(o)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),a=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),a.stop(!0),this._hide(a,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:a}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})})(jQuery);(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.2",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);(function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var a,o,r,h=t(this),l=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(h,s.mode||"hide"),u=s.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",m=i.test(u),g={},v="show"===c;h.parent().is(".ui-effects-wrapper")?t.effects.save(h.parent(),l):t.effects.save(h,l),h.show(),a=t.effects.createWrapper(h).css({overflow:"hidden"}),o=a[p](),r=parseFloat(a.css(f))||0,g[p]=v?o:0,m||(h.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),g[f]=v?r:o+r),v&&(a.css(p,0),m||a.css(f,r+o)),a.animate(g,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&h.hide(),t.effects.restore(h,l),t.effects.removeWrapper(h),n()}})}})(jQuery);(function(t){t.effects.effect.bounce=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(o,e.mode||"effect"),l="hide"===h,c="show"===h,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||l?1:0),m=e.duration/f,g=e.easing,v="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,b=o.queue(),y=b.length;for((c||l)&&r.push("opacity"),t.effects.save(o,r),o.show(),t.effects.createWrapper(o),d||(d=o["top"===v?"outerHeight":"outerWidth"]()/3),c&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,_?2*-d:2*d).animate(a,m,g)),l&&(d/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,o.animate(n,m,g).animate(a,m,g),d=l?2*d:d/2;l&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),o.dequeue()}})(jQuery);(function(t){t.effects.effect.clip=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(o,e.mode||"hide"),l="show"===h,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(o,r),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[d](),l&&(n.css(d,0),n.css(p,a/2)),f[d]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){l||o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}})}})(jQuery);(function(t){t.effects.effect.drop=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","opacity","height","width"],o=t.effects.setMode(n,e.mode||"hide"),r="show"===o,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h?"pos":"neg",u={opacity:r?1:0};t.effects.save(n,a),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===c?-s:s),u[l]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);(function(t){t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),m||p.hide(),i()}var a,o,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(a=0;u>a;a++)for(h=g.top+a*_,c=a-(u-1)/2,o=0;d>o;o++)r=g.left+o*v,l=o-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(m?l*v:0),top:h+(m?c*_:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:c*_),opacity:m?1:0},e.duration||500,e.easing,s)}})(jQuery);(function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}})(jQuery);(function(t){t.effects.effect.fold=function(e,i){var s,n,a=t(this),o=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(a,e.mode||"hide"),h="show"===r,l="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=h!==d,f=p?["width","height"]:["height","width"],m=e.duration/2,g={},v={};t.effects.save(a,o),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:c}:{height:c,width:0}),g[f[0]]=h?n[0]:c,v[f[1]]=h?n[1]:0,s.animate(g,m,e.easing).animate(v,m,e.easing,function(){l&&a.hide(),t.effects.restore(a,o),t.effects.removeWrapper(a),i()})}})(jQuery);(function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],a=t.effects.setMode(s,e.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(o,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&s.hide(),t.effects.restore(s,n),i()}})}})(jQuery);(function(t){t.effects.effect.pulsate=function(e,i){var s,n=t(this),a=t.effects.setMode(n,e.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(e.times||5)+(h?1:0),c=e.duration/l,u=0,d=n.queue(),p=d.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1),s=1;l>s;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()}})(jQuery);(function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),a="hide"===n,o=parseInt(e.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),a=t.effects.setMode(s,e.mode||"effect"),o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===a?0:100),r=e.direction||"both",h=e.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=e.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*c.y,width:l.width*c.x,outerHeight:l.outerHeight*c.y,outerWidth:l.outerWidth*c.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(o,e.mode||"effect"),f=e.restore||"effect"!==p,m=e.scale||"both",g=e.origin||["middle","center"],v=o.css("position"),_=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===e.mode&&"show"===p?(o.from=e.to||b,o.to=e.from||s):(o.from=e.from||("show"===p?b:s),o.to=e.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(_=_.concat(u),o.from=t.effects.setTransition(o,u,a.from.y,o.from),o.to=t.effects.setTransition(o,u,a.to.y,o.to)),a.from.x!==a.to.x&&(_=_.concat(d),o.from=t.effects.setTransition(o,d,a.from.x,o.from),o.to=t.effects.setTransition(o,d,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(_=_.concat(c).concat(l),o.from=t.effects.setTransition(o,c,a.from.y,o.from),o.to=t.effects.setTransition(o,c,a.to.y,o.to)),t.effects.save(o,_),o.show(),t.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=t.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),l=r.concat(u).concat(d),o.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=t.effects.setTransition(i,u,a.from.y,i.from),i.to=t.effects.setTransition(i,u,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=t.effects.setTransition(i,d,a.from.x,i.from),i.to=t.effects.setTransition(i,d,a.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),t.effects.restore(o,_),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):t.each(["top","left"],function(t,e){o.css(e,function(e,i){var s=parseInt(i,10),n=t?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(o),i()}})}})(jQuery);(function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","height","width"],o=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",h=e.distance||20,l=e.times||3,c=2*l+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),_=v.length;for(t.effects.save(n,a),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+h,m[d]=(p?"+=":"-=")+2*h,g[d]=(p?"-=":"+=")+2*h,n.animate(f,u,e.easing),s=1;l>s;s++)n.animate(m,u,e.easing).animate(g,u,e.easing);n.animate(m,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}})(jQuery);(function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(n,e.mode||"show"),r="show"===o,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,a),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);(function(t){t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),a="fixed"===n.css("position"),o=t("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}})(jQuery);// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
(function(n){var e,t,r="0.4.2",f="hasOwnProperty",i=/[\.\/]/,o="*",u=function(){},l=function(n,e){return n-e},s={n:{}},p=function(n,r){n+="";var f,i=t,o=Array.prototype.slice.call(arguments,2),u=p.listeners(n),s=0,a=[],c={},h=[],d=e;e=n,t=0;for(var g=0,v=u.length;v>g;g++)"zIndex"in u[g]&&(a.push(u[g].zIndex),0>u[g].zIndex&&(c[u[g].zIndex]=u[g]));for(a.sort(l);0>a[s];)if(f=c[a[s++]],h.push(f.apply(r,o)),t)return t=i,h;for(g=0;v>g;g++)if(f=u[g],"zIndex"in f)if(f.zIndex==a[s]){if(h.push(f.apply(r,o)),t)break;do if(s++,f=c[a[s]],f&&h.push(f.apply(r,o)),t)break;while(f)}else c[f.zIndex]=f;else if(h.push(f.apply(r,o)),t)break;return t=i,e=d,h.length?h:null};p._events=s,p.listeners=function(n){var e,t,r,f,u,l,p,a,c=n.split(i),h=s,d=[h],g=[];for(f=0,u=c.length;u>f;f++){for(a=[],l=0,p=d.length;p>l;l++)for(h=d[l].n,t=[h[c[f]],h[o]],r=2;r--;)e=t[r],e&&(a.push(e),g=g.concat(e.f||[]));d=a}return g},p.on=function(n,e){if(n+="","function"!=typeof e)return function(){};for(var t=n.split(i),r=s,f=0,o=t.length;o>f;f++)r=r.n,r=r.hasOwnProperty(t[f])&&r[t[f]]||(r[t[f]]={n:{}});for(r.f=r.f||[],f=0,o=r.f.length;o>f;f++)if(r.f[f]==e)return u;return r.f.push(e),function(n){+n==+n&&(e.zIndex=+n)}},p.f=function(n){var e=[].slice.call(arguments,1);return function(){p.apply(null,[n,null].concat(e).concat([].slice.call(arguments,0)))}},p.stop=function(){t=1},p.nt=function(n){return n?RegExp("(?:\\.|\\/|^)"+n+"(?:\\.|\\/|$)").test(e):e},p.nts=function(){return e.split(i)},p.off=p.unbind=function(n,e){if(!n)return p._events=s={n:{}},void 0;var t,r,u,l,a,c,h,d=n.split(i),g=[s];for(l=0,a=d.length;a>l;l++)for(c=0;g.length>c;c+=u.length-2){if(u=[c,1],t=g[c].n,d[l]!=o)t[d[l]]&&u.push(t[d[l]]);else for(r in t)t[f](r)&&u.push(t[r]);g.splice.apply(g,u)}for(l=0,a=g.length;a>l;l++)for(t=g[l];t.n;){if(e){if(t.f){for(c=0,h=t.f.length;h>c;c++)if(t.f[c]==e){t.f.splice(c,1);break}!t.f.length&&delete t.f}for(r in t.n)if(t.n[f](r)&&t.n[r].f){var v=t.n[r].f;for(c=0,h=v.length;h>c;c++)if(v[c]==e){v.splice(c,1);break}!v.length&&delete t.n[r].f}}else{delete t.f;for(r in t.n)t.n[f](r)&&t.n[r].f&&delete t.n[r].f}t=t.n}},p.once=function(n,e){var t=function(){return p.unbind(n,t),e.apply(this,arguments)};return p.on(n,t)},p.version=r,p.toString=function(){return"You are running Eve "+r},"undefined"!=typeof module&&module.exports?module.exports=p:"undefined"!=typeof define?define("eve",[],function(){return p}):n.eve=p})(this);(function(t,e){"function"==typeof define&&define.amd?define("raphael",["eve"],e):t.Raphael=e(t.eve)})(this,function(t){function e(n){if(e.is(n,"function"))return y?n():t.on("raphael.DOMload",n);if(e.is(n,W))return e._engine.create[T](e,n.splice(0,3+e.is(n[0],G))).add(n);var r=Array.prototype.slice.call(arguments,0);if(e.is(r[r.length-1],"function")){var i=r.pop();return y?i.call(e._engine.create[T](e,r)):t.on("raphael.DOMload",function(){i.call(e._engine.create[T](e,r))})}return e._engine.create[T](e,arguments)}function n(t){if(Object(t)!==t)return t;var e=new t.constructor;for(var r in t)t[B](r)&&(e[r]=n(t[r]));return e}function r(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return t.push(t.splice(n,1)[0])}function i(t,e,n){function i(){var a=Array.prototype.slice.call(arguments,0),s=a.join("␀"),o=i.cache=i.cache||{},u=i.count=i.count||[];return o[B](s)?(r(u,s),n?n(o[s]):o[s]):(u.length>=1e3&&delete o[u.shift()],u.push(s),o[s]=t[T](e,a),n?n(o[s]):o[s])}return i}function a(){return this.hex}function s(t,e){for(var n=[],r=0,i=t.length;i-2*!e>r;r+=2){var a=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?i-4==r?a[3]={x:+t[0],y:+t[1]}:i-2==r&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[i-2],y:+t[i-1]}:i-4==r?a[3]=a[2]:r||(a[0]={x:+t[r],y:+t[r+1]}),n.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return n}function o(t,e,n,r,i){var a=-3*e+9*n-9*r+3*i,s=t*a+6*e-12*n+6*r;return t*s-3*e+3*n}function u(t,e,n,r,i,a,s,u,l){null==l&&(l=1),l=l>1?1:0>l?0:l;for(var h=l/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;c>g;g++){var x=h*f[g]+h,v=o(x,t,n,i,s),m=o(x,e,r,a,u),y=v*v+m*m;d+=p[g]*D.sqrt(y)}return h*d}function l(t,e,n,r,i,a,s,o,l){if(!(0>l||l>u(t,e,n,r,i,a,s,o))){var h,c=1,f=c/2,p=c-f,d=.01;for(h=u(t,e,n,r,i,a,s,o,p);V(h-l)>d;)f/=2,p+=(l>h?1:-1)*f,h=u(t,e,n,r,i,a,s,o,p);return p}}function h(t,e,n,r,i,a,s,o){if(!(z(t,n)<O(i,s)||O(t,n)>z(i,s)||z(e,r)<O(a,o)||O(e,r)>z(a,o))){var u=(t*r-e*n)*(i-s)-(t-n)*(i*o-a*s),l=(t*r-e*n)*(a-o)-(e-r)*(i*o-a*s),h=(t-n)*(a-o)-(e-r)*(i-s);if(h){var c=u/h,f=l/h,p=+c.toFixed(2),d=+f.toFixed(2);if(!(+O(t,n).toFixed(2)>p||p>+z(t,n).toFixed(2)||+O(i,s).toFixed(2)>p||p>+z(i,s).toFixed(2)||+O(e,r).toFixed(2)>d||d>+z(e,r).toFixed(2)||+O(a,o).toFixed(2)>d||d>+z(a,o).toFixed(2)))return{x:c,y:f}}}}function c(t,n,r){var i=e.bezierBBox(t),a=e.bezierBBox(n);if(!e.isBBoxIntersect(i,a))return r?0:[];for(var s=u.apply(0,t),o=u.apply(0,n),l=~~(s/5),c=~~(o/5),f=[],p=[],d={},g=r?0:[],x=0;l+1>x;x++){var v=e.findDotsAtSegment.apply(e,t.concat(x/l));f.push({x:v.x,y:v.y,t:x/l})}for(x=0;c+1>x;x++)v=e.findDotsAtSegment.apply(e,n.concat(x/c)),p.push({x:v.x,y:v.y,t:x/c});for(x=0;l>x;x++)for(var m=0;c>m;m++){var y=f[x],b=f[x+1],_=p[m],w=p[m+1],k=.001>V(b.x-y.x)?"y":"x",B=.001>V(w.x-_.x)?"y":"x",S=h(y.x,y.y,b.x,b.y,_.x,_.y,w.x,w.y);if(S){if(d[S.x.toFixed(4)]==S.y.toFixed(4))continue;d[S.x.toFixed(4)]=S.y.toFixed(4);var C=y.t+V((S[k]-y[k])/(b[k]-y[k]))*(b.t-y.t),F=_.t+V((S[B]-_[B])/(w[B]-_[B]))*(w.t-_.t);C>=0&&1>=C&&F>=0&&1>=F&&(r?g++:g.push({x:S.x,y:S.y,t1:C,t2:F}))}}return g}function f(t,n,r){t=e._path2curve(t),n=e._path2curve(n);for(var i,a,s,o,u,l,h,f,p,d,g=r?0:[],x=0,v=t.length;v>x;x++){var m=t[x];if("M"==m[0])i=u=m[1],a=l=m[2];else{"C"==m[0]?(p=[i,a].concat(m.slice(1)),i=p[6],a=p[7]):(p=[i,a,i,a,u,l,u,l],i=u,a=l);for(var y=0,b=n.length;b>y;y++){var _=n[y];if("M"==_[0])s=h=_[1],o=f=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,h,f,h,f],s=h,o=f);var w=c(p,d,r);if(r)g+=w;else{for(var k=0,B=w.length;B>k;k++)w[k].segment1=x,w[k].segment2=y,w[k].bez1=p,w[k].bez2=d;g=g.concat(w)}}}}}return g}function p(t,e,n,r,i,a){null!=t?(this.a=+t,this.b=+e,this.c=+n,this.d=+r,this.e=+i,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function d(){return this.x+E+this.y+E+this.width+" × "+this.height}function g(t,e,n,r,i,a){function s(t){return((c*t+h)*t+l)*t}function o(t,e){var n=u(t,e);return((d*n+p)*n+f)*n}function u(t,e){var n,r,i,a,o,u;for(i=t,u=0;8>u;u++){if(a=s(i)-t,e>V(a))return i;if(o=(3*c*i+2*h)*i+l,1e-6>V(o))break;i-=a/o}if(n=0,r=1,i=t,n>i)return n;if(i>r)return r;for(;r>n;){if(a=s(i),e>V(a-t))return i;t>a?n=i:r=i,i=(r-n)/2+n}return i}var l=3*e,h=3*(r-e)-l,c=1-l-h,f=3*n,p=3*(i-n)-f,d=1-f-p;return o(t,1/(200*a))}function x(t,e){var n=[],r={};if(this.ms=e,this.times=1,t){for(var i in t)t[B](i)&&(r[J(i)]=t[i],n.push(J(i)));n.sort(he)}this.anim=r,this.top=n[n.length-1],this.percents=n}function v(n,r,i,a,s,o){i=J(i);var u,l,h,c,f,d,x=n.ms,v={},m={},y={};if(a)for(w=0,k=on.length;k>w;w++){var b=on[w];if(b.el.id==r.id&&b.anim==n){b.percent!=i?(on.splice(w,1),h=1):l=b,r.attr(b.totalOrigin);break}}else a=+m;for(var w=0,k=n.percents.length;k>w;w++){if(n.percents[w]==i||n.percents[w]>a*n.top){i=n.percents[w],f=n.percents[w-1]||0,x=x/n.top*(i-f),c=n.percents[w+1],u=n.anim[i];break}a&&r.attr(n.anim[n.percents[w]])}if(u){if(l)l.initstatus=a,l.start=new Date-l.ms*a;else{for(var S in u)if(u[B](S)&&(ne[B](S)||r.paper.customAttributes[B](S)))switch(v[S]=r.attr(S),null==v[S]&&(v[S]=ee[S]),m[S]=u[S],ne[S]){case G:y[S]=(m[S]-v[S])/x;break;case"colour":v[S]=e.getRGB(v[S]);var C=e.getRGB(m[S]);y[S]={r:(C.r-v[S].r)/x,g:(C.g-v[S].g)/x,b:(C.b-v[S].b)/x};break;case"path":var F=Re(v[S],m[S]),T=F[1];for(v[S]=F[0],y[S]=[],w=0,k=v[S].length;k>w;w++){y[S][w]=[0];for(var A=1,P=v[S][w].length;P>A;A++)y[S][w][A]=(T[w][A]-v[S][w][A])/x}break;case"transform":var E=r._,R=Oe(E[S],m[S]);if(R)for(v[S]=R.from,m[S]=R.to,y[S]=[],y[S].real=!0,w=0,k=v[S].length;k>w;w++)for(y[S][w]=[v[S][w][0]],A=1,P=v[S][w].length;P>A;A++)y[S][w][A]=(m[S][w][A]-v[S][w][A])/x;else{var q=r.matrix||new p,j={_:{transform:E.transform},getBBox:function(){return r.getBBox(1)}};v[S]=[q.a,q.b,q.c,q.d,q.e,q.f],De(j,m[S]),m[S]=j._.transform,y[S]=[(j.matrix.a-q.a)/x,(j.matrix.b-q.b)/x,(j.matrix.c-q.c)/x,(j.matrix.d-q.d)/x,(j.matrix.e-q.e)/x,(j.matrix.f-q.f)/x]}break;case"csv":var D=M(u[S])[I](_),z=M(v[S])[I](_);if("clip-rect"==S)for(v[S]=z,y[S]=[],w=z.length;w--;)y[S][w]=(D[w]-v[S][w])/x;m[S]=D;break;default:for(D=[][L](u[S]),z=[][L](v[S]),y[S]=[],w=r.paper.customAttributes[S].length;w--;)y[S][w]=((D[w]||0)-(z[w]||0))/x}var O=u.easing,V=e.easing_formulas[O];if(!V)if(V=M(O).match(Z),V&&5==V.length){var X=V;V=function(t){return g(t,+X[1],+X[2],+X[3],+X[4],x)}}else V=fe;if(d=u.start||n.start||+new Date,b={anim:n,percent:i,timestamp:d,start:d+(n.del||0),status:0,initstatus:a||0,stop:!1,ms:x,easing:V,from:v,diff:y,to:m,el:r,callback:u.callback,prev:f,next:c,repeat:o||n.times,origin:r.attr(),totalOrigin:s},on.push(b),a&&!l&&!h&&(b.stop=!0,b.start=new Date-x*a,1==on.length))return ln();h&&(b.start=new Date-b.ms*a),1==on.length&&un(ln)}t("raphael.anim.start."+r.id,r,n)}}function m(t){for(var e=0;on.length>e;e++)on[e].el.paper==t&&on.splice(e--,1)}e.version="2.1.0",e.eve=t;var y,b,_=/[, ]+/,w={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},k=/\{(\d+)\}/g,B="hasOwnProperty",S={doc:document,win:window},C={was:Object.prototype[B].call(S.win,"Raphael"),is:S.win.Raphael},F=function(){this.ca=this.customAttributes={}},T="apply",L="concat",A="createTouch"in S.doc,P="",E=" ",M=String,I="split",R="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[I](E),q={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},j=M.prototype.toLowerCase,D=Math,z=D.max,O=D.min,V=D.abs,X=D.pow,Y=D.PI,G="number",N="string",W="array",$=Object.prototype.toString,H=(e._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),U={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,Q=D.round,J=parseFloat,K=parseInt,te=M.prototype.toUpperCase,ee=e._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},ne=e._availableAnimAttrs={blur:G,"clip-rect":"csv",cx:G,cy:G,fill:"colour","fill-opacity":G,"font-size":G,height:G,opacity:G,path:"path",r:G,rx:G,ry:G,stroke:"colour","stroke-opacity":G,"stroke-width":G,transform:"transform",width:G,x:G,y:G},re=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,ie={hs:1,rg:1},ae=/,?([achlmqrstvxz]),?/gi,se=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,oe=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ue=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,le=(e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),he=function(t,e){return J(t)-J(e)},ce=function(){},fe=function(t){return t},pe=e._rectPath=function(t,e,n,r,i){return i?[["M",t+i,e],["l",n-2*i,0],["a",i,i,0,0,1,i,i],["l",0,r-2*i],["a",i,i,0,0,1,-i,i],["l",2*i-n,0],["a",i,i,0,0,1,-i,-i],["l",0,2*i-r],["a",i,i,0,0,1,i,-i],["z"]]:[["M",t,e],["l",n,0],["l",0,r],["l",-n,0],["z"]]},de=function(t,e,n,r){return null==r&&(r=n),[["M",t,e],["m",0,-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]]},ge=e._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return de(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return de(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return pe(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return pe(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return pe(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return pe(e.x,e.y,e.width,e.height)}},xe=e.mapPath=function(t,e){if(!e)return t;var n,r,i,a,s,o,u;for(t=Re(t),i=0,s=t.length;s>i;i++)for(u=t[i],a=1,o=u.length;o>a;a+=2)n=e.x(u[a],u[a+1]),r=e.y(u[a],u[a+1]),u[a]=n,u[a+1]=r;return t};if(e._g=S,e.type=S.win.SVGAngle||S.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==e.type){var ve,me=S.doc.createElement("div");if(me.innerHTML='<v:shape adj="1"/>',ve=me.firstChild,ve.style.behavior="url(#default#VML)",!ve||"object"!=typeof ve.adj)return e.type=P;me=null}e.svg=!(e.vml="VML"==e.type),e._Paper=F,e.fn=b=F.prototype=e.prototype,e._id=0,e._oid=0,e.is=function(t,e){return e=j.call(e),"finite"==e?!U[B](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||$.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,n,r,i,a,s){if(null==a){var o=t-r,u=n-i;return o||u?(180+180*D.atan2(-u,-o)/Y+360)%360:0}return e.angle(t,n,a,s)-e.angle(r,i,a,s)},e.rad=function(t){return t%360*Y/180},e.deg=function(t){return 180*t/Y%360},e.snapTo=function(t,n,r){if(r=e.is(r,"finite")?r:10,e.is(t,W)){for(var i=t.length;i--;)if(r>=V(t[i]-n))return t[i]}else{t=+t;var a=n%t;if(r>a)return n-a;if(a>t-r)return n-a+t}return n},e.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=0|16*D.random(),n="x"==t?e:8|3&e;return n.toString(16)}),e.setWindow=function(n){t("raphael.setWindow",e,S.win,n),S.win=n,S.doc=S.win.document,e._engine.initWin&&e._engine.initWin(S.win)};var ye=function(t){if(e.vml){var n,r=/^\s+|\s+$/g;try{var a=new ActiveXObject("htmlfile");a.write("<body>"),a.close(),n=a.body}catch(s){n=createPopup().document.body}var o=n.createTextRange();ye=i(function(t){try{n.style.color=M(t).replace(r,P);var e=o.queryCommandValue("ForeColor");return e=(255&e)<<16|65280&e|(16711680&e)>>>16,"#"+("000000"+e.toString(16)).slice(-6)}catch(i){return"none"}})}else{var u=S.doc.createElement("i");u.title="Raphaël Colour Picker",u.style.display="none",S.doc.body.appendChild(u),ye=i(function(t){return u.style.color=t,S.doc.defaultView.getComputedStyle(u,P).getPropertyValue("color")})}return ye(t)},be=function(){return"hsb("+[this.h,this.s,this.b]+")"},_e=function(){return"hsl("+[this.h,this.s,this.l]+")"},we=function(){return this.hex},ke=function(t,n,r){if(null==n&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(r=t.b,n=t.g,t=t.r),null==n&&e.is(t,N)){var i=e.getRGB(t);t=i.r,n=i.g,r=i.b}return(t>1||n>1||r>1)&&(t/=255,n/=255,r/=255),[t,n,r]},Be=function(t,n,r,i){t*=255,n*=255,r*=255;var a={r:t,g:n,b:r,hex:e.rgb(t,n,r),toString:we};return e.is(i,"finite")&&(a.opacity=i),a};e.color=function(t){var n;return e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(n=e.hsb2rgb(t),t.r=n.r,t.g=n.g,t.b=n.b,t.hex=n.hex):e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(n=e.hsl2rgb(t),t.r=n.r,t.g=n.g,t.b=n.b,t.hex=n.hex):(e.is(t,"string")&&(t=e.getRGB(t)),e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(n=e.rgb2hsl(t),t.h=n.h,t.s=n.s,t.l=n.l,n=e.rgb2hsb(t),t.v=n.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=we,t},e.hsb2rgb=function(t,e,n,r){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(n=t.b,e=t.s,t=t.h,r=t.o),t*=360;var i,a,s,o,u;return t=t%360/60,u=n*e,o=u*(1-V(t%2-1)),i=a=s=n-u,t=~~t,i+=[u,o,0,0,o,u][t],a+=[o,u,u,o,0,0][t],s+=[0,0,o,u,u,o][t],Be(i,a,s,r)},e.hsl2rgb=function(t,e,n,r){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(n=t.l,e=t.s,t=t.h),(t>1||e>1||n>1)&&(t/=360,e/=100,n/=100),t*=360;var i,a,s,o,u;return t=t%360/60,u=2*e*(.5>n?n:1-n),o=u*(1-V(t%2-1)),i=a=s=n-u/2,t=~~t,i+=[u,o,0,0,o,u][t],a+=[o,u,u,o,0,0][t],s+=[0,0,o,u,u,o][t],Be(i,a,s,r)},e.rgb2hsb=function(t,e,n){n=ke(t,e,n),t=n[0],e=n[1],n=n[2];var r,i,a,s;return a=z(t,e,n),s=a-O(t,e,n),r=0==s?null:a==t?(e-n)/s:a==e?(n-t)/s+2:(t-e)/s+4,r=60*((r+360)%6)/360,i=0==s?0:s/a,{h:r,s:i,b:a,toString:be}},e.rgb2hsl=function(t,e,n){n=ke(t,e,n),t=n[0],e=n[1],n=n[2];var r,i,a,s,o,u;return s=z(t,e,n),o=O(t,e,n),u=s-o,r=0==u?null:s==t?(e-n)/u:s==e?(n-t)/u+2:(t-e)/u+4,r=60*((r+360)%6)/360,a=(s+o)/2,i=0==u?0:.5>a?u/(2*a):u/(2-2*a),{h:r,s:i,l:a,toString:_e}},e._path2string=function(){return this.join(",").replace(ae,"$1")},e._preload=function(t,e){var n=S.doc.createElement("img");n.style.cssText="position:absolute;left:-9999em;top:-9999em",n.onload=function(){e.call(this),this.onload=null,S.doc.body.removeChild(this)},n.onerror=function(){S.doc.body.removeChild(this)},S.doc.body.appendChild(n),n.src=t},e.getRGB=i(function(t){if(!t||(t=M(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:a};!(ie[B](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=ye(t));var n,r,i,s,o,u,l=t.match(H);return l?(l[2]&&(i=K(l[2].substring(5),16),r=K(l[2].substring(3,5),16),n=K(l[2].substring(1,3),16)),l[3]&&(i=K((o=l[3].charAt(3))+o,16),r=K((o=l[3].charAt(2))+o,16),n=K((o=l[3].charAt(1))+o,16)),l[4]&&(u=l[4][I](re),n=J(u[0]),"%"==u[0].slice(-1)&&(n*=2.55),r=J(u[1]),"%"==u[1].slice(-1)&&(r*=2.55),i=J(u[2]),"%"==u[2].slice(-1)&&(i*=2.55),"rgba"==l[1].toLowerCase().slice(0,4)&&(s=J(u[3])),u[3]&&"%"==u[3].slice(-1)&&(s/=100)),l[5]?(u=l[5][I](re),n=J(u[0]),"%"==u[0].slice(-1)&&(n*=2.55),r=J(u[1]),"%"==u[1].slice(-1)&&(r*=2.55),i=J(u[2]),"%"==u[2].slice(-1)&&(i*=2.55),("deg"==u[0].slice(-3)||"°"==u[0].slice(-1))&&(n/=360),"hsba"==l[1].toLowerCase().slice(0,4)&&(s=J(u[3])),u[3]&&"%"==u[3].slice(-1)&&(s/=100),e.hsb2rgb(n,r,i,s)):l[6]?(u=l[6][I](re),n=J(u[0]),"%"==u[0].slice(-1)&&(n*=2.55),r=J(u[1]),"%"==u[1].slice(-1)&&(r*=2.55),i=J(u[2]),"%"==u[2].slice(-1)&&(i*=2.55),("deg"==u[0].slice(-3)||"°"==u[0].slice(-1))&&(n/=360),"hsla"==l[1].toLowerCase().slice(0,4)&&(s=J(u[3])),u[3]&&"%"==u[3].slice(-1)&&(s/=100),e.hsl2rgb(n,r,i,s)):(l={r:n,g:r,b:i,toString:a},l.hex="#"+(16777216|i|r<<8|n<<16).toString(16).slice(1),e.is(s,"finite")&&(l.opacity=s),l)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a}},e),e.hsb=i(function(t,n,r){return e.hsb2rgb(t,n,r).hex}),e.hsl=i(function(t,n,r){return e.hsl2rgb(t,n,r).hex}),e.rgb=i(function(t,e,n){return"#"+(16777216|n|e<<8|t<<16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},n=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,0>=e.s&&(this.getColor.start={h:0,s:1,b:e.b})),n.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var n=Se(t);if(n.arr)return Fe(n.arr);var r={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},i=[];return e.is(t,W)&&e.is(t[0],W)&&(i=Fe(t)),i.length||M(t).replace(se,function(t,e,n){var a=[],s=e.toLowerCase();if(n.replace(ue,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(i.push([e][L](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)i.push([e][L](a));else for(;a.length>=r[s]&&(i.push([e][L](a.splice(0,r[s]))),r[s]););}),i.toString=e._path2string,n.arr=Fe(i),i},e.parseTransformString=i(function(t){if(!t)return null;var n=[];return e.is(t,W)&&e.is(t[0],W)&&(n=Fe(t)),n.length||M(t).replace(oe,function(t,e,r){var i=[];j.call(e),r.replace(ue,function(t,e){e&&i.push(+e)}),n.push([e][L](i))}),n.toString=e._path2string,n});var Se=function(t){var e=Se.ps=Se.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var n in e)e[B](n)&&n!=t&&(e[n].sleep--,!e[n].sleep&&delete e[n])}),e[t]};e.findDotsAtSegment=function(t,e,n,r,i,a,s,o,u){var l=1-u,h=X(l,3),c=X(l,2),f=u*u,p=f*u,d=h*t+3*c*u*n+3*l*u*u*i+p*s,g=h*e+3*c*u*r+3*l*u*u*a+p*o,x=t+2*u*(n-t)+f*(i-2*n+t),v=e+2*u*(r-e)+f*(a-2*r+e),m=n+2*u*(i-n)+f*(s-2*i+n),y=r+2*u*(a-r)+f*(o-2*a+r),b=l*t+u*n,_=l*e+u*r,w=l*i+u*s,k=l*a+u*o,B=90-180*D.atan2(x-m,v-y)/Y;return(x>m||y>v)&&(B+=180),{x:d,y:g,m:{x:x,y:v},n:{x:m,y:y},start:{x:b,y:_},end:{x:w,y:k},alpha:B}},e.bezierBBox=function(t,n,r,i,a,s,o,u){e.is(t,"array")||(t=[t,n,r,i,a,s,o,u]);var l=Ie.apply(null,t);return{x:l.min.x,y:l.min.y,x2:l.max.x,y2:l.max.y,width:l.max.x-l.min.x,height:l.max.y-l.min.y}},e.isPointInsideBBox=function(t,e,n){return e>=t.x&&t.x2>=e&&n>=t.y&&t.y2>=n},e.isBBoxIntersect=function(t,n){var r=e.isPointInsideBBox;return r(n,t.x,t.y)||r(n,t.x2,t.y)||r(n,t.x,t.y2)||r(n,t.x2,t.y2)||r(t,n.x,n.y)||r(t,n.x2,n.y)||r(t,n.x,n.y2)||r(t,n.x2,n.y2)||(t.x<n.x2&&t.x>n.x||n.x<t.x2&&n.x>t.x)&&(t.y<n.y2&&t.y>n.y||n.y<t.y2&&n.y>t.y)},e.pathIntersection=function(t,e){return f(t,e)},e.pathIntersectionNumber=function(t,e){return f(t,e,1)},e.isPointInsidePath=function(t,n,r){var i=e.pathBBox(t);return e.isPointInsideBBox(i,n,r)&&1==f(t,[["M",n,r],["H",i.x2+10]],1)%2},e._removedFactory=function(e){return function(){t("raphael.log",null,"Raphaël: you are calling to method “"+e+"” of removed object",e)}};var Ce=e.pathBBox=function(t){var e=Se(t);if(e.bbox)return n(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Re(t);for(var r,i=0,a=0,s=[],o=[],u=0,l=t.length;l>u;u++)if(r=t[u],"M"==r[0])i=r[1],a=r[2],s.push(i),o.push(a);else{var h=Ie(i,a,r[1],r[2],r[3],r[4],r[5],r[6]);s=s[L](h.min.x,h.max.x),o=o[L](h.min.y,h.max.y),i=r[5],a=r[6]}var c=O[T](0,s),f=O[T](0,o),p=z[T](0,s),d=z[T](0,o),g=p-c,x=d-f,v={x:c,y:f,x2:p,y2:d,width:g,height:x,cx:c+g/2,cy:f+x/2};return e.bbox=n(v),v},Fe=function(t){var r=n(t);return r.toString=e._path2string,r},Te=e._pathToRelative=function(t){var n=Se(t);if(n.rel)return Fe(n.rel);e.is(t,W)&&e.is(t&&t[0],W)||(t=e.parsePathString(t));var r=[],i=0,a=0,s=0,o=0,u=0;"M"==t[0][0]&&(i=t[0][1],a=t[0][2],s=i,o=a,u++,r.push(["M",i,a]));for(var l=u,h=t.length;h>l;l++){var c=r[l]=[],f=t[l];if(f[0]!=j.call(f[0]))switch(c[0]=j.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-i).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;d>p;p++)c[p]=+(f[p]-(p%2?i:a)).toFixed(3)}else{c=r[l]=[],"m"==f[0]&&(s=f[1]+i,o=f[2]+a);for(var g=0,x=f.length;x>g;g++)r[l][g]=f[g]}var v=r[l].length;switch(r[l][0]){case"z":i=s,a=o;break;case"h":i+=+r[l][v-1];break;case"v":a+=+r[l][v-1];break;default:i+=+r[l][v-2],a+=+r[l][v-1]}}return r.toString=e._path2string,n.rel=Fe(r),r},Le=e._pathToAbsolute=function(t){var n=Se(t);if(n.abs)return Fe(n.abs);if(e.is(t,W)&&e.is(t&&t[0],W)||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var r=[],i=0,a=0,o=0,u=0,l=0;"M"==t[0][0]&&(i=+t[0][1],a=+t[0][2],o=i,u=a,l++,r[0]=["M",i,a]);for(var h,c,f=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),p=l,d=t.length;d>p;p++){if(r.push(h=[]),c=t[p],c[0]!=te.call(c[0]))switch(h[0]=te.call(c[0]),h[0]){case"A":h[1]=c[1],h[2]=c[2],h[3]=c[3],h[4]=c[4],h[5]=c[5],h[6]=+(c[6]+i),h[7]=+(c[7]+a);break;case"V":h[1]=+c[1]+a;break;case"H":h[1]=+c[1]+i;break;case"R":for(var g=[i,a][L](c.slice(1)),x=2,v=g.length;v>x;x++)g[x]=+g[x]+i,g[++x]=+g[x]+a;r.pop(),r=r[L](s(g,f));break;case"M":o=+c[1]+i,u=+c[2]+a;default:for(x=1,v=c.length;v>x;x++)h[x]=+c[x]+(x%2?i:a)}else if("R"==c[0])g=[i,a][L](c.slice(1)),r.pop(),r=r[L](s(g,f)),h=["R"][L](c.slice(-2));else for(var m=0,y=c.length;y>m;m++)h[m]=c[m];switch(h[0]){case"Z":i=o,a=u;break;case"H":i=h[1];break;case"V":a=h[1];break;case"M":o=h[h.length-2],u=h[h.length-1];default:i=h[h.length-2],a=h[h.length-1]}}return r.toString=e._path2string,n.abs=Fe(r),r},Ae=function(t,e,n,r){return[t,e,n,r,n,r]},Pe=function(t,e,n,r,i,a){var s=1/3,o=2/3;return[s*t+o*n,s*e+o*r,s*i+o*n,s*a+o*r,i,a]},Ee=function(t,e,n,r,a,s,o,u,l,h){var c,f=120*Y/180,p=Y/180*(+a||0),d=[],g=i(function(t,e,n){var r=t*D.cos(n)-e*D.sin(n),i=t*D.sin(n)+e*D.cos(n);return{x:r,y:i}});if(h)B=h[0],S=h[1],w=h[2],k=h[3];else{c=g(t,e,-p),t=c.x,e=c.y,c=g(u,l,-p),u=c.x,l=c.y;var x=(D.cos(Y/180*a),D.sin(Y/180*a),(t-u)/2),v=(e-l)/2,m=x*x/(n*n)+v*v/(r*r);m>1&&(m=D.sqrt(m),n=m*n,r=m*r);var y=n*n,b=r*r,_=(s==o?-1:1)*D.sqrt(V((y*b-y*v*v-b*x*x)/(y*v*v+b*x*x))),w=_*n*v/r+(t+u)/2,k=_*-r*x/n+(e+l)/2,B=D.asin(((e-k)/r).toFixed(9)),S=D.asin(((l-k)/r).toFixed(9));B=w>t?Y-B:B,S=w>u?Y-S:S,0>B&&(B=2*Y+B),0>S&&(S=2*Y+S),o&&B>S&&(B-=2*Y),!o&&S>B&&(S-=2*Y)}var C=S-B;if(V(C)>f){var F=S,T=u,A=l;S=B+f*(o&&S>B?1:-1),u=w+n*D.cos(S),l=k+r*D.sin(S),d=Ee(u,l,n,r,a,0,o,T,A,[S,F,w,k])}C=S-B;var P=D.cos(B),E=D.sin(B),M=D.cos(S),R=D.sin(S),q=D.tan(C/4),j=4/3*n*q,z=4/3*r*q,O=[t,e],X=[t+j*E,e-z*P],G=[u+j*R,l-z*M],N=[u,l];if(X[0]=2*O[0]-X[0],X[1]=2*O[1]-X[1],h)return[X,G,N][L](d);d=[X,G,N][L](d).join()[I](",");for(var W=[],$=0,H=d.length;H>$;$++)W[$]=$%2?g(d[$-1],d[$],p).y:g(d[$],d[$+1],p).x;return W},Me=function(t,e,n,r,i,a,s,o,u){var l=1-u;return{x:X(l,3)*t+3*X(l,2)*u*n+3*l*u*u*i+X(u,3)*s,y:X(l,3)*e+3*X(l,2)*u*r+3*l*u*u*a+X(u,3)*o}},Ie=i(function(t,e,n,r,i,a,s,o){var u,l=i-2*n+t-(s-2*i+n),h=2*(n-t)-2*(i-n),c=t-n,f=(-h+D.sqrt(h*h-4*l*c))/2/l,p=(-h-D.sqrt(h*h-4*l*c))/2/l,d=[e,o],g=[t,s];return V(f)>"1e12"&&(f=.5),V(p)>"1e12"&&(p=.5),f>0&&1>f&&(u=Me(t,e,n,r,i,a,s,o,f),g.push(u.x),d.push(u.y)),p>0&&1>p&&(u=Me(t,e,n,r,i,a,s,o,p),g.push(u.x),d.push(u.y)),l=a-2*r+e-(o-2*a+r),h=2*(r-e)-2*(a-r),c=e-r,f=(-h+D.sqrt(h*h-4*l*c))/2/l,p=(-h-D.sqrt(h*h-4*l*c))/2/l,V(f)>"1e12"&&(f=.5),V(p)>"1e12"&&(p=.5),f>0&&1>f&&(u=Me(t,e,n,r,i,a,s,o,f),g.push(u.x),d.push(u.y)),p>0&&1>p&&(u=Me(t,e,n,r,i,a,s,o,p),g.push(u.x),d.push(u.y)),{min:{x:O[T](0,g),y:O[T](0,d)},max:{x:z[T](0,g),y:z[T](0,d)}}}),Re=e._path2curve=i(function(t,e){var n=!e&&Se(t);if(!e&&n.curve)return Fe(n.curve);for(var r=Le(t),i=e&&Le(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e){var n,r;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][L](Ee[T](0,[e.x,e.y][L](t.slice(1))));break;case"S":n=e.x+(e.x-(e.bx||e.x)),r=e.y+(e.y-(e.by||e.y)),t=["C",n,r][L](t.slice(1));break;case"T":e.qx=e.x+(e.x-(e.qx||e.x)),e.qy=e.y+(e.y-(e.qy||e.y)),t=["C"][L](Pe(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][L](Pe(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][L](Ae(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][L](Ae(e.x,e.y,t[1],e.y));break;case"V":t=["C"][L](Ae(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][L](Ae(e.x,e.y,e.X,e.Y))}return t}),u=function(t,e){if(t[e].length>7){t[e].shift();for(var n=t[e];n.length;)t.splice(e++,0,["C"][L](n.splice(0,6)));t.splice(e,1),c=z(r.length,i&&i.length||0)}},l=function(t,e,n,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),n.bx=0,n.by=0,n.x=t[s][1],n.y=t[s][2],c=z(r.length,i&&i.length||0))},h=0,c=z(r.length,i&&i.length||0);c>h;h++){r[h]=o(r[h],a),u(r,h),i&&(i[h]=o(i[h],s)),i&&u(i,h),l(r,i,a,s,h),l(i,r,s,a,h);var f=r[h],p=i&&i[h],d=f.length,g=i&&p.length;a.x=f[d-2],a.y=f[d-1],a.bx=J(f[d-4])||a.x,a.by=J(f[d-3])||a.y,s.bx=i&&(J(p[g-4])||s.x),s.by=i&&(J(p[g-3])||s.y),s.x=i&&p[g-2],s.y=i&&p[g-1]}return i||(n.curve=Fe(r)),i?[r,i]:r},null,Fe),qe=(e._parseDots=i(function(t){for(var n=[],r=0,i=t.length;i>r;r++){var a={},s=t[r].match(/^([^:]*):?([\d\.]*)/);if(a.color=e.getRGB(s[1]),a.color.error)return null;a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),n.push(a)}for(r=1,i=n.length-1;i>r;r++)if(!n[r].offset){for(var o=J(n[r-1].offset||0),u=0,l=r+1;i>l;l++)if(n[l].offset){u=n[l].offset;break}u||(u=100,l=i),u=J(u);for(var h=(u-o)/(l-r+1);l>r;r++)o+=h,n[r].offset=o+"%"}return n}),e._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)}),je=(e._tofront=function(t,e){e.top!==t&&(qe(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},e._toback=function(t,e){e.bottom!==t&&(qe(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},e._insertafter=function(t,e,n){qe(t,n),e==n.top&&(n.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},e._insertbefore=function(t,e,n){qe(t,n),e==n.bottom&&(n.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},e.toMatrix=function(t,e){var n=Ce(t),r={_:{transform:P},getBBox:function(){return n}};return De(r,e),r.matrix}),De=(e.transformPath=function(t,e){return xe(t,je(t,e))},e._extractTransform=function(t,n){if(null==n)return t._.transform;n=M(n).replace(/\.{3}|\u2026/g,t._.transform||P);var r=e.parseTransformString(n),i=0,a=0,s=0,o=1,u=1,l=t._,h=new p;if(l.transform=r||[],r)for(var c=0,f=r.length;f>c;c++){var d,g,x,v,m,y=r[c],b=y.length,_=M(y[0]).toLowerCase(),w=y[0]!=_,k=w?h.invert():0;"t"==_&&3==b?w?(d=k.x(0,0),g=k.y(0,0),x=k.x(y[1],y[2]),v=k.y(y[1],y[2]),h.translate(x-d,v-g)):h.translate(y[1],y[2]):"r"==_?2==b?(m=m||t.getBBox(1),h.rotate(y[1],m.x+m.width/2,m.y+m.height/2),i+=y[1]):4==b&&(w?(x=k.x(y[2],y[3]),v=k.y(y[2],y[3]),h.rotate(y[1],x,v)):h.rotate(y[1],y[2],y[3]),i+=y[1]):"s"==_?2==b||3==b?(m=m||t.getBBox(1),h.scale(y[1],y[b-1],m.x+m.width/2,m.y+m.height/2),o*=y[1],u*=y[b-1]):5==b&&(w?(x=k.x(y[3],y[4]),v=k.y(y[3],y[4]),h.scale(y[1],y[2],x,v)):h.scale(y[1],y[2],y[3],y[4]),o*=y[1],u*=y[2]):"m"==_&&7==b&&h.add(y[1],y[2],y[3],y[4],y[5],y[6]),l.dirtyT=1,t.matrix=h}t.matrix=h,l.sx=o,l.sy=u,l.deg=i,l.dx=a=h.e,l.dy=s=h.f,1==o&&1==u&&!i&&l.bbox?(l.bbox.x+=+a,l.bbox.y+=+s):l.dirtyT=1}),ze=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},Oe=e._equaliseTransform=function(t,n){n=M(n).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],n=e.parseTransformString(n)||[];for(var r,i,a,s,o=z(t.length,n.length),u=[],l=[],h=0;o>h;h++){if(a=t[h]||ze(n[h]),s=n[h]||ze(a),a[0]!=s[0]||"r"==a[0].toLowerCase()&&(a[2]!=s[2]||a[3]!=s[3])||"s"==a[0].toLowerCase()&&(a[3]!=s[3]||a[4]!=s[4]))return;for(u[h]=[],l[h]=[],r=0,i=z(a.length,s.length);i>r;r++)r in a&&(u[h][r]=a[r]),r in s&&(l[h][r]=s[r])}return{from:u,to:l}};e._getContainer=function(t,n,r,i){var a;return a=null!=i||e.is(t,"object")?t:S.doc.getElementById(t),null!=a?a.tagName?null==n?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:n,height:r}:{container:1,x:t,y:n,width:r,height:i}:void 0},e.pathToRelative=Te,e._engine={},e.path2curve=Re,e.matrix=function(t,e,n,r,i,a){return new p(t,e,n,r,i,a)},function(t){function n(t){return t[0]*t[0]+t[1]*t[1]}function r(t){var e=D.sqrt(n(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}t.add=function(t,e,n,r,i,a){var s,o,u,l,h=[[],[],[]],c=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,n,i],[e,r,a],[0,0,1]];for(t&&t instanceof p&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),s=0;3>s;s++)for(o=0;3>o;o++){for(l=0,u=0;3>u;u++)l+=c[s][u]*f[u][o];h[s][o]=l}this.a=h[0][0],this.b=h[1][0],this.c=h[0][1],this.d=h[1][1],this.e=h[0][2],this.f=h[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new p(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new p(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){this.add(1,0,0,1,t,e)},t.scale=function(t,e,n,r){null==e&&(e=t),(n||r)&&this.add(1,0,0,1,n,r),this.add(t,0,0,e,0,0),(n||r)&&this.add(1,0,0,1,-n,-r)},t.rotate=function(t,n,r){t=e.rad(t),n=n||0,r=r||0;var i=+D.cos(t).toFixed(9),a=+D.sin(t).toFixed(9);this.add(i,a,-a,i,n,r),this.add(1,0,0,1,-n,-r)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[M.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var i=[[this.a,this.c],[this.b,this.d]];t.scalex=D.sqrt(n(i[0])),r(i[0]),t.shear=i[0][0]*i[1][0]+i[0][1]*i[1][1],i[1]=[i[1][0]-i[0][0]*t.shear,i[1][1]-i[0][1]*t.shear],t.scaley=D.sqrt(n(i[1])),r(i[1]),t.shear/=t.scaley;var a=-i[0][1],s=i[1][1];return 0>s?(t.rotate=e.deg(D.acos(s)),0>a&&(t.rotate=360-t.rotate)):t.rotate=e.deg(D.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t
},t.toTransformString=function(t){var e=t||this[I]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:P)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:P)+(e.rotate?"r"+[e.rotate,0,0]:P)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(p.prototype);var Ve=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);b.safari="Apple Computer, Inc."==navigator.vendor&&(Ve&&4>Ve[1]||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Ve&&8>Ve[1]?function(){var t=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){t.remove()})}:ce;for(var Xe=function(){this.returnValue=!1},Ye=function(){return this.originalEvent.preventDefault()},Ge=function(){this.cancelBubble=!0},Ne=function(){return this.originalEvent.stopPropagation()},We=function(){return S.doc.addEventListener?function(t,e,n,r){var i=A&&q[e]?q[e]:e,a=function(i){var a=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,s=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,o=i.clientX+s,u=i.clientY+a;if(A&&q[B](e))for(var l=0,h=i.targetTouches&&i.targetTouches.length;h>l;l++)if(i.targetTouches[l].target==t){var c=i;i=i.targetTouches[l],i.originalEvent=c,i.preventDefault=Ye,i.stopPropagation=Ne;break}return n.call(r,i,o,u)};return t.addEventListener(i,a,!1),function(){return t.removeEventListener(i,a,!1),!0}}:S.doc.attachEvent?function(t,e,n,r){var i=function(t){t=t||S.win.event;var e=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,i=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,a=t.clientX+i,s=t.clientY+e;return t.preventDefault=t.preventDefault||Xe,t.stopPropagation=t.stopPropagation||Ge,n.call(r,t,a,s)};t.attachEvent("on"+e,i);var a=function(){return t.detachEvent("on"+e,i),!0};return a}:void 0}(),$e=[],He=function(e){for(var n,r=e.clientX,i=e.clientY,a=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,s=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,o=$e.length;o--;){if(n=$e[o],A){for(var u,l=e.touches.length;l--;)if(u=e.touches[l],u.identifier==n.el._drag.id){r=u.clientX,i=u.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var h,c=n.el.node,f=c.nextSibling,p=c.parentNode,d=c.style.display;S.win.opera&&p.removeChild(c),c.style.display="none",h=n.el.paper.getElementByPoint(r,i),c.style.display=d,S.win.opera&&(f?p.insertBefore(c,f):p.appendChild(c)),h&&t("raphael.drag.over."+n.el.id,n.el,h),r+=s,i+=a,t("raphael.drag.move."+n.el.id,n.move_scope||n.el,r-n.el._drag.x,i-n.el._drag.y,r,i,e)}},Ue=function(n){e.unmousemove(He).unmouseup(Ue);for(var r,i=$e.length;i--;)r=$e[i],r.el._drag={},t("raphael.drag.end."+r.el.id,r.end_scope||r.start_scope||r.move_scope||r.el,n);$e=[]},Ze=e.el={},Qe=R.length;Qe--;)(function(t){e[t]=Ze[t]=function(n,r){return e.is(n,"function")&&(this.events=this.events||[],this.events.push({name:t,f:n,unbind:We(this.shape||this.node||S.doc,t,n,r||this)})),this},e["un"+t]=Ze["un"+t]=function(e){for(var n=this.events||[],r=n.length;r--;)if(n[r].name==t&&n[r].f==e)return n[r].unbind(),n.splice(r,1),!n.length&&delete this.events,this;return this}})(R[Qe]);Ze.data=function(n,r){var i=le[this.id]=le[this.id]||{};if(1==arguments.length){if(e.is(n,"object")){for(var a in n)n[B](a)&&this.data(a,n[a]);return this}return t("raphael.data.get."+this.id,this,i[n],n),i[n]}return i[n]=r,t("raphael.data.set."+this.id,this,r,n),this},Ze.removeData=function(t){return null==t?le[this.id]={}:le[this.id]&&delete le[this.id][t],this},Ze.getData=function(){return n(le[this.id]||{})},Ze.hover=function(t,e,n,r){return this.mouseover(t,n).mouseout(e,r||n)},Ze.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var Je=[];Ze.drag=function(n,r,i,a,s,o){function u(u){(u.originalEvent||u).preventDefault();var l=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,h=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft;this._drag.x=u.clientX+h,this._drag.y=u.clientY+l,this._drag.id=u.identifier,!$e.length&&e.mousemove(He).mouseup(Ue),$e.push({el:this,move_scope:a,start_scope:s,end_scope:o}),r&&t.on("raphael.drag.start."+this.id,r),n&&t.on("raphael.drag.move."+this.id,n),i&&t.on("raphael.drag.end."+this.id,i),t("raphael.drag.start."+this.id,s||a||this,u.clientX+h,u.clientY+l,u)}return this._drag={},Je.push({el:this,start:u}),this.mousedown(u),this},Ze.onDragOver=function(e){e?t.on("raphael.drag.over."+this.id,e):t.unbind("raphael.drag.over."+this.id)},Ze.undrag=function(){for(var n=Je.length;n--;)Je[n].el==this&&(this.unmousedown(Je[n].start),Je.splice(n,1),t.unbind("raphael.drag.*."+this.id));!Je.length&&e.unmousemove(He).unmouseup(Ue),$e=[]},b.circle=function(t,n,r){var i=e._engine.circle(this,t||0,n||0,r||0);return this.__set__&&this.__set__.push(i),i},b.rect=function(t,n,r,i,a){var s=e._engine.rect(this,t||0,n||0,r||0,i||0,a||0);return this.__set__&&this.__set__.push(s),s},b.ellipse=function(t,n,r,i){var a=e._engine.ellipse(this,t||0,n||0,r||0,i||0);return this.__set__&&this.__set__.push(a),a},b.path=function(t){t&&!e.is(t,N)&&!e.is(t[0],W)&&(t+=P);var n=e._engine.path(e.format[T](e,arguments),this);return this.__set__&&this.__set__.push(n),n},b.image=function(t,n,r,i,a){var s=e._engine.image(this,t||"about:blank",n||0,r||0,i||0,a||0);return this.__set__&&this.__set__.push(s),s},b.text=function(t,n,r){var i=e._engine.text(this,t||0,n||0,M(r));return this.__set__&&this.__set__.push(i),i},b.set=function(t){!e.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var n=new cn(t);return this.__set__&&this.__set__.push(n),n.paper=this,n.type="set",n},b.setStart=function(t){this.__set__=t||this.set()},b.setFinish=function(){var t=this.__set__;return delete this.__set__,t},b.setSize=function(t,n){return e._engine.setSize.call(this,t,n)},b.setViewBox=function(t,n,r,i,a){return e._engine.setViewBox.call(this,t,n,r,i,a)},b.top=b.bottom=null,b.raphael=e;var Ke=function(t){var e=t.getBoundingClientRect(),n=t.ownerDocument,r=n.body,i=n.documentElement,a=i.clientTop||r.clientTop||0,s=i.clientLeft||r.clientLeft||0,o=e.top+(S.win.pageYOffset||i.scrollTop||r.scrollTop)-a,u=e.left+(S.win.pageXOffset||i.scrollLeft||r.scrollLeft)-s;return{y:o,x:u}};b.getElementByPoint=function(t,e){var n=this,r=n.canvas,i=S.doc.elementFromPoint(t,e);if(S.win.opera&&"svg"==i.tagName){var a=Ke(r),s=r.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=r.getIntersectionList(s,null);o.length&&(i=o[o.length-1])}if(!i)return null;for(;i.parentNode&&i!=r.parentNode&&!i.raphael;)i=i.parentNode;return i==n.canvas.parentNode&&(i=r),i=i&&i.raphael?n.getById(i.raphaelid):null},b.getElementsByBBox=function(t){var n=this.set();return this.forEach(function(r){e.isBBoxIntersect(r.getBBox(),t)&&n.push(r)}),n},b.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},b.forEach=function(t,e){for(var n=this.bottom;n;){if(t.call(e,n)===!1)return this;n=n.next}return this},b.getElementsByPoint=function(t,e){var n=this.set();return this.forEach(function(r){r.isPointInside(t,e)&&n.push(r)}),n},Ze.isPointInside=function(t,n){var r=this.realPath=this.realPath||ge[this.type](this);return e.isPointInsidePath(r,t,n)},Ze.getBBox=function(t){if(this.removed)return{};var e=this._;return t?((e.dirty||!e.bboxwt)&&(this.realPath=ge[this.type](this),e.bboxwt=Ce(this.realPath),e.bboxwt.toString=d,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&((e.dirty||!this.realPath)&&(e.bboxwt=0,this.realPath=ge[this.type](this)),e.bbox=Ce(xe(this.realPath,this.matrix)),e.bbox.toString=d,e.dirty=e.dirtyT=0),e.bbox)},Ze.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},Ze.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:t.opacity||.5,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},n=e.width/2,r=this.paper,i=r.set(),a=this.realPath||ge[this.type](this);a=this.matrix?xe(a,this.matrix):a;for(var s=1;n+1>s;s++)i.push(r.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/n*s).toFixed(3),opacity:+(e.opacity/n).toFixed(3)}));return i.insertBefore(this).translate(e.offsetx,e.offsety)};var tn=function(t,n,r,i,a,s,o,h,c){return null==c?u(t,n,r,i,a,s,o,h):e.findDotsAtSegment(t,n,r,i,a,s,o,h,l(t,n,r,i,a,s,o,h,c))},en=function(t,n){return function(r,i,a){r=Re(r);for(var s,o,u,l,h,c="",f={},p=0,d=0,g=r.length;g>d;d++){if(u=r[d],"M"==u[0])s=+u[1],o=+u[2];else{if(l=tn(s,o,u[1],u[2],u[3],u[4],u[5],u[6]),p+l>i){if(n&&!f.start){if(h=tn(s,o,u[1],u[2],u[3],u[4],u[5],u[6],i-p),c+=["C"+h.start.x,h.start.y,h.m.x,h.m.y,h.x,h.y],a)return c;f.start=c,c=["M"+h.x,h.y+"C"+h.n.x,h.n.y,h.end.x,h.end.y,u[5],u[6]].join(),p+=l,s=+u[5],o=+u[6];continue}if(!t&&!n)return h=tn(s,o,u[1],u[2],u[3],u[4],u[5],u[6],i-p),{x:h.x,y:h.y,alpha:h.alpha}}p+=l,s=+u[5],o=+u[6]}c+=u.shift()+u}return f.end=c,h=t?p:n?f:e.findDotsAtSegment(s,o,u[0],u[1],u[2],u[3],u[4],u[5],1),h.alpha&&(h={x:h.x,y:h.y,alpha:h.alpha}),h}},nn=en(1),rn=en(),an=en(0,1);e.getTotalLength=nn,e.getPointAtLength=rn,e.getSubpath=function(t,e,n){if(1e-6>this.getTotalLength(t)-n)return an(t,e).end;var r=an(t,n,1);return e?an(r,e).end:r},Ze.getTotalLength=function(){return"path"==this.type?this.node.getTotalLength?this.node.getTotalLength():nn(this.attrs.path):void 0},Ze.getPointAtLength=function(t){return"path"==this.type?rn(this.attrs.path,t):void 0},Ze.getSubpath=function(t,n){return"path"==this.type?e.getSubpath(this.attrs.path,t,n):void 0};var sn=e.easing_formulas={linear:function(t){return t},"<":function(t){return X(t,1.7)},">":function(t){return X(t,.48)},"<>":function(t){var e=.48-t/1.04,n=D.sqrt(.1734+e*e),r=n-e,i=X(V(r),1/3)*(0>r?-1:1),a=-n-e,s=X(V(a),1/3)*(0>a?-1:1),o=i+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:X(2,-10*t)*D.sin((t-.075)*2*Y/.3)+1},bounce:function(t){var e,n=7.5625,r=2.75;return 1/r>t?e=n*t*t:2/r>t?(t-=1.5/r,e=n*t*t+.75):2.5/r>t?(t-=2.25/r,e=n*t*t+.9375):(t-=2.625/r,e=n*t*t+.984375),e}};sn.easeIn=sn["ease-in"]=sn["<"],sn.easeOut=sn["ease-out"]=sn[">"],sn.easeInOut=sn["ease-in-out"]=sn["<>"],sn["back-in"]=sn.backIn,sn["back-out"]=sn.backOut;var on=[],un=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},ln=function(){for(var n=+new Date,r=0;on.length>r;r++){var i=on[r];if(!i.el.removed&&!i.paused){var a,s,o=n-i.start,u=i.ms,l=i.easing,h=i.from,c=i.diff,f=i.to,p=(i.t,i.el),d={},g={};if(i.initstatus?(o=(i.initstatus*i.anim.top-i.prev)/(i.percent-i.prev)*u,i.status=i.initstatus,delete i.initstatus,i.stop&&on.splice(r--,1)):i.status=(i.prev+(i.percent-i.prev)*(o/u))/i.anim.top,!(0>o))if(u>o){var x=l(o/u);for(var m in h)if(h[B](m)){switch(ne[m]){case G:a=+h[m]+x*u*c[m];break;case"colour":a="rgb("+[hn(Q(h[m].r+x*u*c[m].r)),hn(Q(h[m].g+x*u*c[m].g)),hn(Q(h[m].b+x*u*c[m].b))].join(",")+")";break;case"path":a=[];for(var y=0,b=h[m].length;b>y;y++){a[y]=[h[m][y][0]];for(var _=1,w=h[m][y].length;w>_;_++)a[y][_]=+h[m][y][_]+x*u*c[m][y][_];a[y]=a[y].join(E)}a=a.join(E);break;case"transform":if(c[m].real)for(a=[],y=0,b=h[m].length;b>y;y++)for(a[y]=[h[m][y][0]],_=1,w=h[m][y].length;w>_;_++)a[y][_]=h[m][y][_]+x*u*c[m][y][_];else{var k=function(t){return+h[m][t]+x*u*c[m][t]};a=[["m",k(0),k(1),k(2),k(3),k(4),k(5)]]}break;case"csv":if("clip-rect"==m)for(a=[],y=4;y--;)a[y]=+h[m][y]+x*u*c[m][y];break;default:var S=[][L](h[m]);for(a=[],y=p.paper.customAttributes[m].length;y--;)a[y]=+S[y]+x*u*c[m][y]}d[m]=a}p.attr(d),function(e,n,r){setTimeout(function(){t("raphael.anim.frame."+e,n,r)})}(p.id,p,i.anim)}else{if(function(n,r,i){setTimeout(function(){t("raphael.anim.frame."+r.id,r,i),t("raphael.anim.finish."+r.id,r,i),e.is(n,"function")&&n.call(r)})}(i.callback,p,i.anim),p.attr(f),on.splice(r--,1),i.repeat>1&&!i.next){for(s in f)f[B](s)&&(g[s]=i.totalOrigin[s]);i.el.attr(g),v(i.anim,i.el,i.anim.percents[0],null,i.totalOrigin,i.repeat-1)}i.next&&!i.stop&&v(i.anim,i.el,i.next,null,i.totalOrigin,i.repeat)}}}e.svg&&p&&p.paper&&p.paper.safari(),on.length&&un(ln)},hn=function(t){return t>255?255:0>t?0:t};Ze.animateWith=function(t,n,r,i,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var u=r instanceof x?r:e.animation(r,i,a,s);v(u,o,u.percents[0],null,o.attr());for(var l=0,h=on.length;h>l;l++)if(on[l].anim==n&&on[l].el==t){on[h-1].start=on[l].start;break}return o},Ze.onAnimation=function(e){return e?t.on("raphael.anim.frame."+this.id,e):t.unbind("raphael.anim.frame."+this.id),this},x.prototype.delay=function(t){var e=new x(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},x.prototype.repeat=function(t){var e=new x(this.anim,this.ms);return e.del=this.del,e.times=D.floor(z(t,0))||1,e},e.animation=function(t,n,r,i){if(t instanceof x)return t;(e.is(r,"function")||!r)&&(i=i||r||null,r=null),t=Object(t),n=+n||0;var a,s,o={};for(s in t)t[B](s)&&J(s)!=s&&J(s)+"%"!=s&&(a=!0,o[s]=t[s]);return a?(r&&(o.easing=r),i&&(o.callback=i),new x({100:o},n)):new x(t,n)},Ze.animate=function(t,n,r,i){var a=this;if(a.removed)return i&&i.call(a),a;var s=t instanceof x?t:e.animation(t,n,r,i);return v(s,a,s.percents[0],null,a.attr()),a},Ze.setTime=function(t,e){return t&&null!=e&&this.status(t,O(e,t.ms)/t.ms),this},Ze.status=function(t,e){var n,r,i=[],a=0;if(null!=e)return v(t,this,-1,O(e,1)),this;for(n=on.length;n>a;a++)if(r=on[a],r.el.id==this.id&&(!t||r.anim==t)){if(t)return r.status;i.push({anim:r.anim,status:r.status})}return t?0:i},Ze.pause=function(e){for(var n=0;on.length>n;n++)on[n].el.id!=this.id||e&&on[n].anim!=e||t("raphael.anim.pause."+this.id,this,on[n].anim)!==!1&&(on[n].paused=!0);return this},Ze.resume=function(e){for(var n=0;on.length>n;n++)if(on[n].el.id==this.id&&(!e||on[n].anim==e)){var r=on[n];t("raphael.anim.resume."+this.id,this,r.anim)!==!1&&(delete r.paused,this.status(r.anim,r.status))}return this},Ze.stop=function(e){for(var n=0;on.length>n;n++)on[n].el.id!=this.id||e&&on[n].anim!=e||t("raphael.anim.stop."+this.id,this,on[n].anim)!==!1&&on.splice(n--,1);return this},t.on("raphael.remove",m),t.on("raphael.clear",m),Ze.toString=function(){return"Raphaël’s object"};var cn=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,n=t.length;n>e;e++)!t[e]||t[e].constructor!=Ze.constructor&&t[e].constructor!=cn||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},fn=cn.prototype;fn.push=function(){for(var t,e,n=0,r=arguments.length;r>n;n++)t=arguments[n],!t||t.constructor!=Ze.constructor&&t.constructor!=cn||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},fn.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},fn.forEach=function(t,e){for(var n=0,r=this.items.length;r>n;n++)if(t.call(e,this.items[n],n)===!1)return this;return this};for(var pn in Ze)Ze[B](pn)&&(fn[pn]=function(t){return function(){var e=arguments;return this.forEach(function(n){n[t][T](n,e)})}}(pn));return fn.attr=function(t,n){if(t&&e.is(t,W)&&e.is(t[0],"object"))for(var r=0,i=t.length;i>r;r++)this.items[r].attr(t[r]);else for(var a=0,s=this.items.length;s>a;a++)this.items[a].attr(t,n);return this},fn.clear=function(){for(;this.length;)this.pop()},fn.splice=function(t,e){t=0>t?z(this.length+t,0):t,e=z(0,O(this.length-t,e));var n,r=[],i=[],a=[];for(n=2;arguments.length>n;n++)a.push(arguments[n]);for(n=0;e>n;n++)i.push(this[t+n]);for(;this.length-t>n;n++)r.push(this[t+n]);var s=a.length;for(n=0;s+r.length>n;n++)this.items[t+n]=this[t+n]=s>n?a[n]:r[n-s];for(n=this.items.length=this.length-=e-s;this[n];)delete this[n++];return new cn(i)},fn.exclude=function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]==t)return this.splice(e,1),!0},fn.animate=function(t,n,r,i){(e.is(r,"function")||!r)&&(i=r||null);var a,s,o=this.items.length,u=o,l=this;if(!o)return this;i&&(s=function(){!--o&&i.call(l)}),r=e.is(r,N)?r:s;var h=e.animation(t,n,r,s);for(a=this.items[--u].animate(h);u--;)this.items[u]&&!this.items[u].removed&&this.items[u].animateWith(a,h,h);return this},fn.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},fn.getBBox=function(){for(var t=[],e=[],n=[],r=[],i=this.items.length;i--;)if(!this.items[i].removed){var a=this.items[i].getBBox();t.push(a.x),e.push(a.y),n.push(a.x+a.width),r.push(a.y+a.height)}return t=O[T](0,t),e=O[T](0,e),n=z[T](0,n),r=z[T](0,r),{x:t,y:e,x2:n,y2:r,width:n-t,height:r-e}},fn.clone=function(t){t=this.paper.set();for(var e=0,n=this.items.length;n>e;e++)t.push(this.items[e].clone());return t},fn.toString=function(){return"Raphaël‘s set"},fn.glow=function(t){var e=this.paper.set();return this.forEach(function(n){var r=n.glow(t);null!=r&&r.forEach(function(t){e.push(t)})}),e},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},n=t.face["font-family"];for(var r in t.face)t.face[B](r)&&(e.face[r]=t.face[r]);if(this.fonts[n]?this.fonts[n].push(e):this.fonts[n]=[e],!t.svg){e.face["units-per-em"]=K(t.face["units-per-em"],10);for(var i in t.glyphs)if(t.glyphs[B](i)){var a=t.glyphs[i];if(e.glyphs[i]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[B](s)&&(e.glyphs[i].k[s]=a.k[s])}}return t},b.getFont=function(t,n,r,i){if(i=i||"normal",r=r||"normal",n=+n||{normal:400,bold:700,lighter:300,bolder:800}[n]||400,e.fonts){var a=e.fonts[t];if(!a){var s=RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,P)+"(\\s|$)","i");for(var o in e.fonts)if(e.fonts[B](o)&&s.test(o)){a=e.fonts[o];break}}var u;if(a)for(var l=0,h=a.length;h>l&&(u=a[l],u.face["font-weight"]!=n||u.face["font-style"]!=r&&u.face["font-style"]||u.face["font-stretch"]!=i);l++);return u}},b.print=function(t,n,r,i,a,s,o){s=s||"middle",o=z(O(o||0,1),-1);var u,l=M(r)[I](P),h=0,c=0,f=P;if(e.is(i,"string")&&(i=this.getFont(i)),i){u=(a||16)/i.face["units-per-em"];for(var p=i.face.bbox[I](_),d=+p[0],g=p[3]-p[1],x=0,v=+p[1]+("baseline"==s?g+ +i.face.descent:g/2),m=0,y=l.length;y>m;m++){if("\n"==l[m])h=0,w=0,c=0,x+=g;else{var b=c&&i.glyphs[l[m-1]]||{},w=i.glyphs[l[m]];h+=c?(b.w||i.w)+(b.k&&b.k[l[m]]||0)+i.w*o:0,c=1}w&&w.d&&(f+=e.transformPath(w.d,["t",h*u,x*u,"s",u,u,d,v,"t",(t-d)/u,(n-v)/u]))}}return this.path(f).attr({fill:"#000",stroke:"none"})},b.add=function(t){if(e.is(t,"array"))for(var n,r=this.set(),i=0,a=t.length;a>i;i++)n=t[i]||{},w[B](n.type)&&r.push(this[n.type]().attr(n));return r},e.format=function(t,n){var r=e.is(n,W)?[0][L](n):arguments;return t&&e.is(t,N)&&r.length-1&&(t=t.replace(k,function(t,e){return null==r[++e]?P:r[e]})),t||P},e.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,n=function(t,n,r){var i=r;return n.replace(e,function(t,e,n,r,a){e=e||r,i&&(e in i&&(i=i[e]),"function"==typeof i&&a&&(i=i()))}),i=(null==i||i==r?t:i)+""};return function(e,r){return(e+"").replace(t,function(t,e){return n(t,e,r)})}}(),e.ninja=function(){return C.was?S.win.Raphael=C.is:delete Raphael,e},e.st=fn,function(t,n,r){function i(){/in/.test(t.readyState)?setTimeout(i,9):e.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(n,r=function(){t.removeEventListener(n,r,!1),t.readyState="complete"},!1),t.readyState="loading"),i()}(document,"DOMContentLoaded"),C.was?S.win.Raphael=e:Raphael=e,t.on("raphael.DOMload",function(){y=!0}),e});(function(t,e){"function"==typeof define&&define.amd?require(["raphael"],e):t.Raphael&&e(t.Raphael)})(this,function(t){if(t.svg){var e="hasOwnProperty",r=String,n=parseFloat,i=parseInt,a=Math,s=a.max,o=a.abs,u=a.pow,h=/[, ]+/,l=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var x=function(n,i){if(i){"string"==typeof n&&(n=x(n));for(var a in i)i[e](a)&&("xlink:"==a.substring(0,6)?n.setAttributeNS(p,a.substring(6),r(i[a])):n.setAttribute(a,r(i[a])))}else n=t._g.doc.createElementNS("http://www.w3.org/2000/svg",n),n.style&&(n.style.webkitTapHighlightColor="rgba(0,0,0,0)");return n},v=function(e,i){var h="linear",l=e.id+i,f=.5,p=.5,d=e.node,g=e.paper,v=d.style,y=t._g.doc.getElementById(l);if(!y){if(i=r(i).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=n(e),p=n(r);var i=2*(p>.5)-1;u(f-.5,2)+u(p-.5,2)>.25&&(p=a.sqrt(.25-u(f-.5,2))*i+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*i)}return c}),i=i.split(/\s*\-\s*/),"linear"==h){var m=i.shift();if(m=-n(m),isNaN(m))return null;var b=[0,0,a.cos(t.rad(m)),a.sin(t.rad(m))],_=1/(s(o(b[2]),o(b[3]))||1);b[2]*=_,b[3]*=_,0>b[2]&&(b[0]=-b[2],b[2]=0),0>b[3]&&(b[1]=-b[3],b[3]=0)}var w=t._parseDots(i);if(!w)return null;if(l=l.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&l!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){y=x(h+"Gradient",{id:l}),e.gradient=y,x(y,"radial"==h?{fx:f,fy:p}:{x1:b[0],y1:b[1],x2:b[2],y2:b[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(y);for(var k=0,C=w.length;C>k;k++)y.appendChild(x("stop",{offset:w[k].offset?w[k].offset:k?"100%":"0%","stop-color":w[k].color||"#fff"}))}}return x(d,{fill:"url(#"+l+")",opacity:1,"fill-opacity":1}),v.fill=c,v.opacity=1,v.fillOpacity=1,1},y=function(t){var e=t.getBBox(1);x(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},m=function(n,i,a){if("path"==n.type){for(var s,o,u,h,l,f=r(i).toLowerCase().split("-"),p=n.paper,v=a?"end":"start",y=n.node,m=n.attrs,b=m["stroke-width"],_=f.length,w="classic",k=3,C=3,B=5;_--;)switch(f[_]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=f[_];break;case"wide":C=5;break;case"narrow":C=2;break;case"long":k=5;break;case"short":k=2}if("open"==w?(k+=2,C+=2,B+=2,u=1,h=a?4:1,l={fill:"none",stroke:m.stroke}):(h=u=k/2,l={fill:m.stroke,stroke:"none"}),n._.arrows?a?(n._.arrows.endPath&&g[n._.arrows.endPath]--,n._.arrows.endMarker&&g[n._.arrows.endMarker]--):(n._.arrows.startPath&&g[n._.arrows.startPath]--,n._.arrows.startMarker&&g[n._.arrows.startMarker]--):n._.arrows={},"none"!=w){var S="raphael-marker-"+w,A="raphael-marker-"+v+w+k+C;t._g.doc.getElementById(S)?g[S]++:(p.defs.appendChild(x(x("path"),{"stroke-linecap":"round",d:d[w],id:S})),g[S]=1);var T,M=t._g.doc.getElementById(A);M?(g[A]++,T=M.getElementsByTagName("use")[0]):(M=x(x("marker"),{id:A,markerHeight:C,markerWidth:k,orient:"auto",refX:h,refY:C/2}),T=x(x("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+C/2+") ":c)+"scale("+k/B+","+C/B+")","stroke-width":(1/((k/B+C/B)/2)).toFixed(4)}),M.appendChild(T),p.defs.appendChild(M),g[A]=1),x(T,l);var F=u*("diamond"!=w&&"oval"!=w);a?(s=n._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-F*b):(s=F*b,o=t.getTotalLength(m.path)-(n._.arrows.enddx*b||0)),l={},l["marker-"+v]="url(#"+A+")",(o||s)&&(l.d=Raphael.getSubpath(m.path,s,o)),x(y,l),n._.arrows[v+"Path"]=S,n._.arrows[v+"Marker"]=A,n._.arrows[v+"dx"]=F,n._.arrows[v+"Type"]=w,n._.arrows[v+"String"]=i}else a?(s=n._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-s):(s=0,o=t.getTotalLength(m.path)-(n._.arrows.enddx*b||0)),n._.arrows[v+"Path"]&&x(y,{d:Raphael.getSubpath(m.path,s,o)}),delete n._.arrows[v+"Path"],delete n._.arrows[v+"Marker"],delete n._.arrows[v+"dx"],delete n._.arrows[v+"Type"],delete n._.arrows[v+"String"];for(l in g)if(g[e](l)&&!g[l]){var L=t._g.doc.getElementById(l);L&&L.parentNode.removeChild(L)}}},b={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},_=function(t,e,n){if(e=b[r(e).toLowerCase()]){for(var i=t.attrs["stroke-width"]||"1",a={round:i,square:i,butt:0}[t.attrs["stroke-linecap"]||n["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*i+(o%2?1:-1)*a;x(t.node,{"stroke-dasharray":s.join(",")})}},w=function(n,a){var u=n.node,l=n.attrs,f=u.style.visibility;u.style.visibility="hidden";for(var d in a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(l[d]=g,d){case"blur":n.blur(g);break;case"href":case"title":case"target":var b=u.parentNode;if("a"!=b.tagName.toLowerCase()){var w=x("a");b.insertBefore(w,u),w.appendChild(u),b=w}"target"==d?b.setAttributeNS(p,"show","blank"==g?"new":g):b.setAttributeNS(p,d,g);break;case"cursor":u.style.cursor=g;break;case"transform":n.transform(g);break;case"arrow-start":m(n,g);break;case"arrow-end":m(n,g,1);break;case"clip-rect":var k=r(g).split(h);if(4==k.length){n.clip&&n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);var B=x("clipPath"),S=x("rect");B.id=t.createUUID(),x(S,{x:k[0],y:k[1],width:k[2],height:k[3]}),B.appendChild(S),n.paper.defs.appendChild(B),x(u,{"clip-path":"url(#"+B.id+")"}),n.clip=S}if(!g){var A=u.getAttribute("clip-path");if(A){var T=t._g.doc.getElementById(A.replace(/(^url\(#|\)$)/g,c));T&&T.parentNode.removeChild(T),x(u,{"clip-path":c}),delete n.clip}}break;case"path":"path"==n.type&&(x(u,{d:g?l.path=t._pathToAbsolute(g):"M0,0"}),n._.dirty=1,n._.arrows&&("startString"in n._.arrows&&m(n,n._.arrows.startString),"endString"in n._.arrows&&m(n,n._.arrows.endString,1)));break;case"width":if(u.setAttribute(d,g),n._.dirty=1,!l.fx)break;d="x",g=l.x;case"x":l.fx&&(g=-l.x-(l.width||0));case"rx":if("rx"==d&&"rect"==n.type)break;case"cx":u.setAttribute(d,g),n.pattern&&y(n),n._.dirty=1;break;case"height":if(u.setAttribute(d,g),n._.dirty=1,!l.fy)break;d="y",g=l.y;case"y":l.fy&&(g=-l.y-(l.height||0));case"ry":if("ry"==d&&"rect"==n.type)break;case"cy":u.setAttribute(d,g),n.pattern&&y(n),n._.dirty=1;break;case"r":"rect"==n.type?x(u,{rx:g,ry:g}):u.setAttribute(d,g),n._.dirty=1;break;case"src":"image"==n.type&&u.setAttributeNS(p,"href",g);break;case"stroke-width":(1!=n._.sx||1!=n._.sy)&&(g/=s(o(n._.sx),o(n._.sy))||1),n.paper._vbSize&&(g*=n.paper._vbSize),u.setAttribute(d,g),l["stroke-dasharray"]&&_(n,l["stroke-dasharray"],a),n._.arrows&&("startString"in n._.arrows&&m(n,n._.arrows.startString),"endString"in n._.arrows&&m(n,n._.arrows.endString,1));break;case"stroke-dasharray":_(n,g,a);break;case"fill":var M=r(g).match(t._ISURL);if(M){B=x("pattern");var F=x("image");B.id=t.createUUID(),x(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),x(F,{x:0,y:0,"xlink:href":M[1]}),B.appendChild(F),function(e){t._preload(M[1],function(){var t=this.offsetWidth,r=this.offsetHeight;x(e,{width:t,height:r}),x(F,{width:t,height:r}),n.paper.safari()})}(B),n.paper.defs.appendChild(B),x(u,{fill:"url(#"+B.id+")"}),n.pattern=B,n.pattern&&y(n);break}var L=t.getRGB(g);if(L.error){if(("circle"==n.type||"ellipse"==n.type||"r"!=r(g).charAt())&&v(n,g)){if("opacity"in l||"fill-opacity"in l){var N=t._g.doc.getElementById(u.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(N){var P=N.getElementsByTagName("stop");x(P[P.length-1],{"stop-opacity":("opacity"in l?l.opacity:1)*("fill-opacity"in l?l["fill-opacity"]:1)})}}l.gradient=g,l.fill="none";break}}else delete a.gradient,delete l.gradient,!t.is(l.opacity,"undefined")&&t.is(a.opacity,"undefined")&&x(u,{opacity:l.opacity}),!t.is(l["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&x(u,{"fill-opacity":l["fill-opacity"]});L[e]("opacity")&&x(u,{"fill-opacity":L.opacity>1?L.opacity/100:L.opacity});case"stroke":L=t.getRGB(g),u.setAttribute(d,L.hex),"stroke"==d&&L[e]("opacity")&&x(u,{"stroke-opacity":L.opacity>1?L.opacity/100:L.opacity}),"stroke"==d&&n._.arrows&&("startString"in n._.arrows&&m(n,n._.arrows.startString),"endString"in n._.arrows&&m(n,n._.arrows.endString,1));break;case"gradient":("circle"==n.type||"ellipse"==n.type||"r"!=r(g).charAt())&&v(n,g);break;case"opacity":l.gradient&&!l[e]("stroke-opacity")&&x(u,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(l.gradient){N=t._g.doc.getElementById(u.getAttribute("fill").replace(/^url\(#|\)$/g,c)),N&&(P=N.getElementsByTagName("stop"),x(P[P.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=i(g,10)+"px");var E=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});u.style[E]=g,n._.dirty=1,u.setAttribute(d,g)}}C(n,a),u.style.visibility=f},k=1.2,C=function(n,a){if("text"==n.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=n.attrs,o=n.node,u=o.firstChild?i(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h,l=r(a.text).split("\n"),f=[],p=0,d=l.length;d>p;p++)h=x("tspan"),p&&x(h,{dy:u*k,x:s.x}),h.appendChild(t._g.doc.createTextNode(l[p])),o.appendChild(h),f[p]=h}else for(f=o.getElementsByTagName("tspan"),p=0,d=f.length;d>p;p++)p?x(f[p],{dy:u*k,x:s.x}):x(f[0],{dy:0});x(o,{x:s.x,y:s.y}),n._.dirty=1;var g=n._getBBox(),v=s.y-(g.y+g.height/2);v&&t.is(v,"finite")&&x(f[0],{dy:v})}},B=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},S=t.el;B.prototype=S,S.constructor=B,t._engine.path=function(t,e){var r=x("path");e.canvas&&e.canvas.appendChild(r);var n=new B(r,e);return n.type="path",w(n,{fill:"none",stroke:"#000",path:t}),n},S.rotate=function(t,e,i){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=n(t[1]),i=n(t[2])),t=n(t[0]),null==i&&(e=i),null==e||null==i){var a=this.getBBox(1);e=a.x+a.width/2,i=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,i]])),this},S.scale=function(t,e,i,a){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=n(t[1]),i=n(t[2]),a=n(t[3])),t=n(t[0]),null==e&&(e=t),null==a&&(i=a),null==i||null==a)var s=this.getBBox(1);return i=null==i?s.x+s.width/2:i,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,i,a]])),this},S.translate=function(t,e){return this.removed?this:(t=r(t).split(h),t.length-1&&(e=n(t[1])),t=n(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},S.transform=function(r){var n=this._;if(null==r)return n.transform;if(t._extractTransform(this,r),this.clip&&x(this.clip,{transform:this.matrix.invert()}),this.pattern&&y(this),this.node&&x(this.node,{transform:this.matrix}),1!=n.sx||1!=n.sy){var i=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":i})}return this},S.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},S.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},S.remove=function(){if(!this.removed&&this.node.parentNode){var e=this.paper;e.__set__&&e.__set__.exclude(this),l.unbind("raphael.*.*."+this.id),this.gradient&&e.defs.removeChild(this.gradient),t._tear(this,e),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var r in this)this[r]="function"==typeof this[r]?t._removedFactory(r):null;this.removed=!0}},S._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e={};try{e=this.node.getBBox()}catch(r){}finally{e=e||{}}return t&&this.hide(),e},S.attr=function(r,n){if(this.removed)return this;if(null==r){var i={};for(var a in this.attrs)this.attrs[e](a)&&(i[a]=this.attrs[a]);return i.gradient&&"none"==i.fill&&(i.fill=i.gradient)&&delete i.gradient,i.transform=this._.transform,i}if(null==n&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==r)return this._.transform;for(var s=r.split(h),o={},u=0,c=s.length;c>u;u++)r=s[u],o[r]=r in this.attrs?this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?this.paper.customAttributes[r].def:t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==n&&t.is(r,"array")){for(o={},u=0,c=r.length;c>u;u++)o[r[u]]=this.attr(r[u]);return o}if(null!=n){var f={};f[r]=n}else null!=r&&t.is(r,"object")&&(f=r);for(var p in f)l("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[e](g)&&(f[g]=d[g])}return w(this,f),this},S.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var e=this.paper;return e.top!=this&&t._tofront(this,e),this},S.toBack=function(){if(this.removed)return this;var e=this.node.parentNode;return"a"==e.tagName.toLowerCase()?e.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):e.firstChild!=this.node&&e.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper),this.paper,this},S.insertAfter=function(e){if(this.removed)return this;var r=e.node||e[e.length-1].node;return r.nextSibling?r.parentNode.insertBefore(this.node,r.nextSibling):r.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this},S.insertBefore=function(e){if(this.removed)return this;var r=e.node||e[0].node;return r.parentNode.insertBefore(this.node,r),t._insertbefore(this,e,this.paper),this},S.blur=function(e){var r=this;if(0!==+e){var n=x("filter"),i=x("feGaussianBlur");r.attrs.blur=e,n.id=t.createUUID(),x(i,{stdDeviation:+e||1.5}),n.appendChild(i),r.paper.defs.appendChild(n),r._blur=n,x(r.node,{filter:"url(#"+n.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter")},t._engine.circle=function(t,e,r,n){var i=x("circle");t.canvas&&t.canvas.appendChild(i);var a=new B(i,t);return a.attrs={cx:e,cy:r,r:n,fill:"none",stroke:"#000"},a.type="circle",x(i,a.attrs),a},t._engine.rect=function(t,e,r,n,i,a){var s=x("rect");t.canvas&&t.canvas.appendChild(s);var o=new B(s,t);return o.attrs={x:e,y:r,width:n,height:i,r:a||0,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",x(s,o.attrs),o},t._engine.ellipse=function(t,e,r,n,i){var a=x("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new B(a,t);return s.attrs={cx:e,cy:r,rx:n,ry:i,fill:"none",stroke:"#000"},s.type="ellipse",x(a,s.attrs),s},t._engine.image=function(t,e,r,n,i,a){var s=x("image");x(s,{x:r,y:n,width:i,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new B(s,t);return o.attrs={x:r,y:n,width:i,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,n,i){var a=x("text");e.canvas&&e.canvas.appendChild(a);var s=new B(a,e);return s.attrs={x:r,y:n,"text-anchor":"middle",text:i,font:t._availableAttrs.font,stroke:"none",fill:"#000"},s.type="text",w(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container,n=e.x,i=e.y,a=e.width,s=e.height;if(!r)throw Error("SVG container not found.");var o,u=x("svg"),h="overflow:hidden;";return n=n||0,i=i||0,a=a||512,s=s||342,x(u,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg"}),1==r?(u.style.cssText=h+"position:absolute;left:"+n+"px;top:"+i+"px",t._g.doc.body.appendChild(u),o=1):(u.style.cssText=h+"position:relative",r.firstChild?r.insertBefore(u,r.firstChild):r.appendChild(u)),r=new t._Paper,r.width=a,r.height=s,r.canvas=u,r.clear(),r._left=r._top=0,o&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,n,i){l("raphael.setViewBox",this,this._viewBox,[t,e,r,n,i]);var a,o,u=s(r/this.width,n/this.height),h=this.top,c=i?"meet":"xMinYMin";for(null==t?(this._vbSize&&(u=1),delete this._vbSize,a="0 0 "+this.width+f+this.height):(this._vbSize=u,a=t+f+e+f+r+f+n),x(this.canvas,{viewBox:a,preserveAspectRatio:c});u&&h;)o="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":o}),h._.dirty=1,h._.dirtyT=1,h=h.prev;return this._viewBox=[t,e,r,n,!!i],this},t.prototype.renderfix=function(){var t,e=this.canvas,r=e.style;try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(n){t=e.createSVGMatrix()}var i=-t.e%1,a=-t.f%1;(i||a)&&(i&&(this._left=(this._left+i)%1,r.left=this._left+"px"),a&&(this._top=(this._top+a)%1,r.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=x("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=x("defs"))},t.prototype.remove=function(){l("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var A=t.st;for(var T in S)S[e](T)&&!A[e](T)&&(A[T]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(T))}});(function(t,e){"function"==typeof define&&define.amd?require(["raphael"],e):t.Raphael&&e(t.Raphael)})(this,function(t){if(t.vml){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=t.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},x=/([clmz]),?([^clmz]*)/gi,v=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(x,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o,l,h=n(e);s=[];for(var u=0,c=h.length;c>u;u++){o=h[u],l=h[u][0].toLowerCase(),"z"==l&&(l="x");for(var f=1,v=o.length;v>f;f++)l+=a(o[f]*b)+(f!=v-1?",":d);s.push(l)}return s.join(p)},C=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},B=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",x=b/e,v=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(x)+p+l(v),f.rotation=a*(0>e*r?-1:1),a){var y=C(a,i,n);i=y.dx,n=y.dy}if(0>e&&(g+="x"),0>r&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-x+p+n*-v,u||s.fillsize){var m=c.getElementsByTagName(h);m=m&&m[0],c.removeChild(m),u&&(y=C(a,o.x(u[0],u[1]),o.y(u[0],u[1])),m.position=y.dx*d+p+y.dy*d),s.fillsize&&(m.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(m)}f.visibility="visible"}};t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var S=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},A=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,x=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),v=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),y=n;for(var m in l)l[e](m)&&(f[m]=l[m]);if(x&&(f.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||x)&&(c.path=k(~r(f.path).toLowerCase().indexOf("r")?t._pathToAbsolute(f.path):f.path),"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],B(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),v){var C=+f.cx,A=+f.cy,N=+f.rx||+f.r||0,E=+f.ry||+f.r||0;c.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((C-N)*b),a((A-E)*b),a((C+N)*b),a((A+E)*b),a(C*b))}if("clip-rect"in l){var M=r(l["clip-rect"]).split(u);if(4==M.length){M[2]=+M[2]+ +M[0],M[3]=+M[3]+ +M[1];var z=c.clipRect||t._g.doc.createElement("div"),F=z.style;F.clip=t.format("rect({1}px {2}px {3}px {0}px)",M),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(z,c),z.appendChild(c),c.clipRect=z)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style;l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&S(y,l["arrow-start"]),"arrow-end"in l&&S(y,l["arrow-end"],1),null!=l.opacity||null!=l["stroke-width"]||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var P=c.getElementsByTagName(h),I=!1;if(P=P&&P[0],!P&&(I=P=L(h)),"image"==n.type&&l.src&&(P.src=l.src),l.fill&&(P.on=!0),(null==P.on||"none"==l.fill||null===l.fill)&&(P.on=!1),P.on&&l.fill){var j=r(l.fill).match(t._ISURL);if(j){P.parentNode==c&&c.removeChild(P),P.rotate=!0,P.src=j[1],P.type="tile";var q=n.getBBox(1);P.position=q.x+p+q.y,n._.fillpos=[q.x,q.y],t._preload(j[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else P.color=t.getRGB(l.fill).hex,P.src=d,P.type="solid",t.getRGB(l.fill).error&&(y.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&T(y,l.fill,P)&&(f.fill="none",f.gradient=l.fill,P.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var D=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);D=o(s(D,0),1),P.opacity=D,P.src&&(P.color="none")}c.appendChild(P);var O=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],V=!1;!O&&(V=O=L("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var Y=t.getRGB(l.stroke);O.on&&l.stroke&&(O.color=Y.hex),D=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+Y.o+1||2)-1);var G=.75*(i(l["stroke-width"])||1);if(D=o(s(D,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(O.weight=G),G&&1>G&&(D*=G)&&(O.weight=1),O.opacity=D,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),l["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=W[e](l["stroke-dasharray"])?W[l["stroke-dasharray"]]:d}V&&c.appendChild(O)}if("text"==y.type){y.paper.canvas.style.display=d;var X=y.paper.span,H=100,U=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),U=i(f["font-size"]||U&&U[0])||10,g.fontSize=U*H+"px",y.textpath.string&&(X.innerHTML=r(y.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();y.W=f.w=($.right-$.left)/H,y.H=f.h=($.bottom-$.top)/H,y.X=f.x,y.Y=f.y+y.H/2,("x"in l||"y"in l)&&(y.path.v=t.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Z=["x","y","text","font","font-family","font-weight","font-style","font-size"],Q=0,J=Z.length;J>Q;Q++)if(Z[Q]in l){y._.dirty=1;break}switch(f["text-anchor"]){case"start":y.textpath.style["v-text-align"]="left",y.bbx=y.W/2;break;case"end":y.textpath.style["v-text-align"]="right",y.bbx=-y.W/2;break;default:y.textpath.style["v-text-align"]="center",y.bbx=0}y.textpath.style["v-text-kern"]=!0}},T=function(e,a,s){e.attrs=e.attrs||{};var o=(e.attrs,Math.pow),l="linear",h=".5 .5";if(e.attrs.gradient=a,a=r(a).replace(t._radial_gradient,function(t,e,r){return l="radial",e&&r&&(e=i(e),r=i(r),o(e-.5,2)+o(r-.5,2)>.25&&(r=n.sqrt(.25-o(e-.5,2))*(2*(r>.5)-1)+.5),h=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==l){var u=a.shift();if(u=-i(u),isNaN(u))return null}var c=t._parseDots(a);if(!c)return null;if(e=e.shape||e.node,c.length){e.removeChild(s),s.on=!0,s.method="none",s.color=c[0].color,s.color2=c[c.length-1].color;for(var f=[],g=0,x=c.length;x>g;g++)c[g].offset&&f.push(c[g].offset+p+c[g].color);s.colors=f.length?f.join():"0% "+s.color,"radial"==l?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=h,s.angle=0):(s.type="gradient",s.angle=(270-u)%360),e.appendChild(s)}return 1},N=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},E=t.el;N.prototype=E,E.constructor=N,E.transform=function(e){if(null==e)return this._.transform;var i,n=this.paper._viewBoxShift,a=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:d;n&&(i=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||d)),t._extractTransform(this,a+e);var s,o=this.matrix.clone(),l=this.skew,h=this.node,u=~r(this.attrs.fill).indexOf("-"),c=!r(this.attrs.fill).indexOf("url(");if(o.translate(-.5,-.5),c||u||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",s=o.split(),u&&s.noRotation||!s.isSimple){h.style.filter=o.toFilter();var f=this.getBBox(),g=this.getBBox(1),x=f.x-g.x,v=f.y-g.y;h.coordorigin=x*-b+p+v*-b,B(this,1,1,x,v,0)}else h.style.filter=d,B(this,s.scalex,s.scaley,s.dx,s.dy,s.rotate);else h.style.filter=d,l.matrix=r(o),l.offset=o.offset();return i&&(this._.transform=i),this},E.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},E.translate=function(t,e){return this.removed?this:(t=r(t).split(u),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},E.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=d),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},E.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if(r==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(u),o={},l=0,f=s.length;f>l;l++)r=s[l],o[r]=r in this.attrs?this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?this.paper.customAttributes[r].def:t._availableAttrs[r];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,f=r.length;f>l;l++)o[r[l]]=this.attr(r[l]);return o}var p;null!=i&&(p={},p[r]=i),null==i&&t.is(r,"object")&&(p=r);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&&p[e](d)&&t.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var x in g)g[e](x)&&(p[x]=g[x])}p.text&&"text"==this.type&&(this.textpath.string=p.text),A(this,p)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},E.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},E.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},E.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;i=i.replace(v,d),0!==+e?(this.attrs.blur=e,r.filter=i+p+f+".Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur)},t._engine.path=function(t,e){var r=L("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new N(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,A(i,n),e.canvas.appendChild(r);var a=L("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path();return a.attrs,a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",A(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path();return n.attrs,n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",A(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=r,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=r,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),B(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=L("shape"),l=L("path"),h=L("textpath");i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new N(o,e),c={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,A(u,c),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var f=L("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a]);var o,l,h=this.width,u=this.height,c=1/s(i/h,n/u);return a&&(o=u/n,l=h/i,h>i*o&&(e-=(h-i*o)/2/o),u>n*l&&(r-=(u-n*l)/2/l)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:c},this.forEach(function(t){t.transform("...")}),this};var L;t._engine.initWin=function(t){var e=t.document;e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),L=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){L=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n=e.width,a=e.x,s=e.y;if(!r)throw Error("VML container not found.");var o=new t._Paper,l=o.canvas=t._g.doc.createElement("div"),h=l.style;return a=a||0,s=s||0,n=n||512,i=i||342,o.width=n,o.height=i,n==+n&&(n+="px"),i==+i&&(i+="px"),o.coordsize=1e3*b+p+1e3*b,o.coordorigin="0 0",o.span=t._g.doc.createElement("span"),o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(o.span),h.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i),1==r?(t._g.doc.body.appendChild(l),h.left=a+"px",h.top=s+"px",h.position="absolute"):r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),o.renderfix=function(){},o},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var M=t.st;for(var z in E)E[e](z)&&!M[e](z)&&(M[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}});