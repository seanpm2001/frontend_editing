/*! For license information please see 10.afd5ce0e.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./Resources/Public/JavaScript/Contrib/ulog/ulog.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_RESULT__=function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=19)}([function(n,t,e){var r=e(5);n.exports=function(n,t,e){return n.mods.reduce((function(n,e){return Array.isArray(n)&&t in e?n.push(e[t]):r(n,e[t]),n}),e),e}},function(n,t,e){var r=e(3);n.exports={firefox:"undefined"!=typeof navigator&&/firefox/i.test(navigator.userAgent),hasColor:function(n){return n===r&&-1===navigator.userAgent.indexOf("MSIE")&&-1===navigator.userAgent.indexOf("Trident")},colorSpecifier:function(n){return"%c"},colorSpecifierAfter:function(n){return""},colorArgument:function(n){return["color:rgb("+n.r+","+n.g+","+n.b+")"]},palette:function(){for(var n=[],t=0;t<8;t++)for(var e=0;e<8;e++)for(var r=0;r<8;r++)t+e+r>8&&t+e+r<16&&n.push({r:24*t,g:24*e,b:24*r});return n}(),levels:{error:{r:192,g:64,b:0},warn:{r:180,g:96,b:0},info:{r:64,g:128,b:16},log:{r:64,g:64,b:64},debug:{r:96,g:96,b:96},trace:{r:112,g:112,b:112}}}},function(n,t,e){var r=e(7);n.exports=function(n,t,e,o){o||(o=e,e=t,t=void 0);var i=e.dir===r.LEFT?r.LEFT:r.RIGHT,u=e.padding||0;n.text&&n.text.split(":").forEach((function(n){">"==n[0]&&(i=r.LEFT),"<"==n[0]&&(i=r.RIGHT),n=">"==n[0]||"<"==n[0]?n.substring(1):n,Number(n)&&Number(n)==Number(n)&&(u=Number(n))}));var c=function(n){var t=o(n);return Array.isArray(t)&&1==t.length&&"string"==typeof t[0]&&(t=t[0]),u&&"string"==typeof t&&(t=r(t,u," ",i)),t},a=t?function(){return c(t)}:function(n){return c(n)};for(var f in e)a[f]=e[f];return a}},function(n,t){n.exports="undefined"!=typeof console&&console},function(n,t,e){var r=e(0),o=n.exports={use:[e(31)],ext:function(n){var t=r(this,"settings",{});for(var e in t)t[e].prop&&o.new.call(this,n,e,t[e].prop)},record:function(n,t){var e=r(this,"settings",{});for(var o in e)e[o].prop&&(t["log_"+o]=this.get(o,n.name))},new:function(n,t,e){if(t in n)return n;var r,o=this;return Object.defineProperty(n,e.name||t,{get:function(){var i=void 0!==r?r:o.get(t,n.name);return i=void 0!==i?i:e.default,i=e.fromStr?e.fromStr.call(n,i,o):i,e.get?e.get.call(n,i,o):i},set:function(t){t=e.toStr?e.toStr.call(n,t,o):t,r!==t&&(r=t,o.ext(n)),e.set&&e.set.call(n,t,o)}})}}},function(n,t){var e=n.exports=function(n,t){for(var r in t)"object"==typeof t[r]&&Object.getPrototypeOf(t[r])===Object.prototype?(r in n||(n[r]={}),"object"==typeof n[r]&&Object.getPrototypeOf(t[r])===Object.prototype?e(n[r],t[r]):n[r]=t[r]):n[r]=t[r]}},function(n,t,e){var r=e(0),o=e(3),i=e(14),u=e(15);n.exports={use:[e(8),e(4)],channels:{output:{out:o},drain:{out:i}},ext:function(n){var t=this,e=r(t,"channels",{}),i=r(t,"channelOutput",[]),c=r(t,"record",[]);for(var a in n.channels={},e){var f=n.channels[a]={name:a,channels:e,out:e[a].out||o,recorders:c,fns:{}};for(var s in f.out=i.reduce((function(e,r){return r.call(t,n,f)||e}),f.out),t.levels){var l=f.recorders.reduce((function(e,r){return r.call(t,n,e),e}),{channel:a,level:s});f.fns[s]=function(n,t){return"function"==typeof n.out?function(){t.message=[].slice.call(arguments),n.out(t)}:u(n.out,t)}(f,l)}}},after:function(n){for(var t in this.levels)n[t]=n.channels[n.enabledFor(t)?"output":"drain"].fns[t]},record:function(n,t){t.name=n.name,t.logger=n,t.ulog=this}}},function(n,t){var e=n.exports=function(n,t,e,r){for(var o=t-(n=n.substring(0,t)).length;o>0;o--)n=r?(e||" ")+n:n+(e||" ");return n};e.RIGHT=0,e.LEFT=1},function(n,t,e){var r=e(0),o=e(9),i=e(11),u=e(12),c=e(28),a=n.exports={use:[e(13)],settings:{config:{config:"log_config"}},init:function(){this.get("config")},get:function(n,t){if(this.config||a.update(this),!n){var e=r(this,"settings",{});t=e[t]&&e[t].config||t,n=this.config[t]}return n},update:function(n){n.config=n.config||{};var t=o(n),e=i(n.config,t);e.length&&u(n,e),c(n)},set:function(n){"log_config"===n&&a.update(this)}}},function(n,t,e){var r=e(23),o=e(27);n.exports=function(n,t){var e=o(n),i={};for(var u in e)try{var c=localStorage.getItem(u);c&&(i[u]=c)}catch(n){}return i=r(e,i),t?t(i):i}},function(n,t,e){var r=e(0);n.exports=function(n){return r(n,"watch",[]).map((function(n){var t={};for(var e in n)e.split(",").forEach((function(r){t[r]=n[e]}));return t}))}},function(n,t){n.exports=function(n,t){var e,r=[];for(e in n)e in t||(r.push({name:e,old:n[e]}),delete n[e]);for(e in t)e in n&&n[e]===t[e]||(e in n?r.push({name:e,old:n[e],new:t[e]}):r.push({name:e,new:t[e]}),n[e]=t[e]);return r}},function(n,t,e){var r=e(10);n.exports=function(n,t){n.ext();var e=r(n);t.map((function(n){return{change:n,watches:e.filter((function(t){return"function"==typeof t[n.name]}))}})).filter((function(n){return n.watches.length})).forEach((function(t){t.watches.forEach((function(e){setTimeout((function(){e[t.change.name].call(n,t.change)}),0)}))}))}},function(n,t,e){var r=e(0);n.exports={extend:{settings:{},get:function(){var n=this,t=[].slice.call(arguments),e=t[0];return e?(t.unshift(n.settings[e]),r(n,"get",[]).map((function(e){t[0]=e.apply(n,t)})),t[0]):n.settings},set:function(n,t){var e=this,o=e.settings[n]!==t;e.settings[n]=t,r(e,"set",[]).map((function(r){r.call(e,n,t)})),o&&e.ext()}}}},function(n,t){n.exports={log:function(){}}},function(n,t){n.exports=function(n,t){return n[t.level]||n.log||function(){}}},function(n,t,e){function r(n,t){var e,i=t&&t.open||"{",u=t&&t.close||"}",c=t&&t.optional,a=new RegExp("("+i+(c?"?":"")+")([_a-zA-Z][_a-zA-Z0-9]*)([^_a-zA-Z0-9"+u+"].*)?("+u+(c?"?":"")+")"),f=[];if(n||""===n){for(;e=o(n,a,i,u);){var s=n.substring(0,e.index);s&&f.push(s),e.ast=!t||e.open?r(e.text,t):e.text?[e.text]:[],n=n.substring(e.end),f.push(e)}n&&f.push(n)}return f}function o(n,t,e,r){var o=n.match(t);if(o){var i={index:o.index,open:o[1],name:o[2],sep:"",text:"",close:o[4]};if(!i.open)return i.end=n.indexOf(" ",i.index),i.end=-1===i.end?n.length:i.end,i.text=n.substring(o.index+i.name.length,i.end),i;var u=!1,c=1,a=o.index+i.name.length+i.open.length;if(a!=n.length){for(var f=a;f<n.length;f++){var s=n[f];if(u)s="n"==s?"\n":"t"==s?"\t":s==e||s==r||"\\"==s?s:"\\"+s;else{if(s===e&&c++,s===r&&! --c){i.end=f+1;break}if("\\"===s){u=!0;continue}if(!i.text&&0===s.search(/\s/)){i.sep+=s;continue}}i.text+=s,u=!1}return i}}}r.default=r,n.exports=r},function(n,t,e){function r(n,t,e){return n.map((function(n){if(!n||!n.ast)return n;var o=t[n.name]||t["*"];if(!o)return n.open+n.name+n.sep+n.text+n.close;var i={};for(var u in n)i[u]=n[u];return i.ast=r(n.ast,t,e),"function"==typeof o?2==o.length?e&&r.isStatic(i.ast)?(i.tag=o(i,e),i.tag.toString=i.tag):i.tag=function(n){return o(i,n)()}:i.tag=o(i):i.tag=o,i}))}r.isStatic=function(n){return n.reduce((function(n,t){return n&&("string"==typeof t||"function"!=typeof t.tag||t.tag.toString===t.tag)}),!0)},r.default=r,n.exports=r},function(n,t,e){var r=e(5);n.exports=function(n){var t={default:"on",fromStr:function(n){return"on"==n||"yes"==n||"true"==n||"enabled"==n},toStr:function(n){return n?"on":"off"}};return r(t,n),t}},function(n,t,e){(n.exports=e(20)).use([e(29),e(33),e(34),e(46),e(47)])},function(n,t,e){(n.exports=e(21)).use(e(8))},function(n,t,e){var r=e(22),o=e(0),i=r.ext;r.ext=function(n){if(n)return i(n),o(r,"ext",[]).map((function(t){t.call(r,n)})),o(r,"after",[]).map((function(t){t.call(r,n)})),n;for(n in r())r.ext(r(n))},r.mods=[],r.use=function(n){if(Array.isArray(n))return n.reduce((function(n,t){return n+r.use(t)}),0);var t=-1===r.mods.indexOf(n)?1:0;if(t){if(n.use&&(t+=r.use(n.use)),n.extend)for(var e in n.extend)r[e]=n.extend[e];r.mods.push(n),n.init&&n.init.call(r)}return t},n.exports=r},function(n,t){var e=Object.create(null),r=function(n,t){return n?e[n]||(e[n]=r.ext(r.new(n,t))):e};r.levels={error:1,warn:2,info:3,log:4,debug:5,trace:6},r.new=function(n,t){var e={};e[n]=function(){r.log(n,[].slice.call(arguments))};try{Object.defineProperty(e[n],"name",{get:function(){return n}})}catch(n){}return e[n]},r.log=function(n,t){var o=t.length>1&&r.levels[t[0]]?t.shift():"log";e[n][o].apply(e[n],t)},r.ext=function(n){for(var t in n.enabledFor=function(){},r.levels)n[t]=function(){};return n},n.exports=r},function(n,t,e){var r=e(5),o=e(24),i=e(25);n.exports=function(n,t){var e={};return r(e,o),r(e,i),t&&r(e,t),e}},function(n,t){n.exports={}},function(n,t,e){var r=e(26);n.exports=r("undefined"==typeof location?[]:location.search.replace(/^(\?|#|&)/,"").split("&"),/\+/g," ",decodeURIComponent)},function(n,t){n.exports=function(n,t,e,r){return n.reduce((function(n,o){var i=(o=o.replace(t,e)).indexOf("=");if(-1!==i){var u=o.substring(0,i).replace(/^\s+|\s+$/g,"");if(u){var c=o.substring(i+1).replace(/^\s+|\s+$/g,"");r&&(c=r(c)),n[u]=c}}return n}),{})}},function(n,t,e){var r=e(0),o=e(10);n.exports=function(n){var t=r(n,"settings",{}),e=o(n),i={};for(var u in e.forEach((function(n){for(var t in n)i[t]=e[t]})),t){var c=t[u]&&t[u].config||u;i[c]=t[u]}return i}},function(n,t,e){var r=e(9),o=e(11),i=e(12);n.exports=function(n){setInterval((function(){if(n.config){var t=r(n);setTimeout((function(){var e=o(n.config,t);e.length&&setTimeout((function(){i(n,e)}),0)}),0)}}),350)}},function(n,t,e){n.exports={use:[e(30)],init:function(){this.enabled=this.get.bind(this,"debug"),this.enable=this.set.bind(this,"debug"),this.disable=this.set.bind(this,"debug","")}}},function(n,t,e){n.exports={use:[e(6)],settings:{debug:{},level:{config:"log",prop:{default:e(32),fromStr:function(n){return Number(n)==Number(n)?Number(n):n&&this[n.toUpperCase()]},toStr:function(n){for(var t in this)if(this[t]===n)return t.toLowerCase();return n},get:function(n,t){return Math.max(t.get("debug",this.name)&&this.DEBUG||this.NONE,n)}}}},ext:function(n){for(var t in n.NONE=0,n.ALL=7,this.levels)n[t.toUpperCase()]=this.levels[t];n.enabledFor=function(t){return n.level>=n[t.toUpperCase()]}}}},function(n,t,e){var r=n.exports={use:[e(13)],get:function(n,t,e){return void 0===e?n:r.eval(r.parse(n,t),e)},parse:function(n,t){for(var e,r,o="debug"==t&&t,i=[],u=(n||"").trim().split(";").map((function(n){return n.replace("\\;",";")})),c=[],a=0;e=u[a];a++){var f=-1==(r=e.indexOf("="))?[e.trim()]:[e.substring(0,r).trim(),e.substring(r+1).trim()],s=f[1]||o?f[0].split(/[\s,]+/):[],l={value:f[1]||!o&&f[0]||o,incl:[],excl:[]};s.length?i.push(l):(s.push("*"),c.push(l));for(var p,g=0;p=s[g];g++)l["-"==(p=p.replace(/\*/g,".*?"))[0]?"excl":"incl"].push(new RegExp("^"+p.substr("-"==p[0]?1:0)+"$"))}return i.push.apply(i,c),i},eval:function(n,t){for(var e,r,o=0;e=n[o];o++)if(!i(e,t)&&(r=u(e,t)))return r;function i(n,t){for(var e,r,o=0;r=n.excl[o];o++)if(e=r.test(t))return e}function u(n,t){for(var e,r=0;e=n.incl[r];r++)if(e.test(t))return n.value}}}},function(n,t){n.exports="warn"},function(n,t,e){var r=e(16),o=e(17),i=e(0),u=e(3),c=e(15);const a=e(14);n.exports={use:[e(4),e(6)],outputs:{console:u,noop:a},settings:{output:{config:"log_output",prop:{default:"console"}},drain:{config:"log_drain",prop:{default:"noop"}}},channelOutput:function(n,t){if(t.cfg=n[t.name]){t.outputs=i(this,"outputs",{});var e=r(t.cfg,{optional:!0}).filter((function(n){return"object"==typeof n})),u=o(e,t.outputs).map((function(n){return n.tag}));return 0===u.length?0:1===u.length&&"object"==typeof u[0]?u[0]:function(n){for(var t,e=0;t=u[e];e++)"function"==typeof t?t(n):c(t,n).apply(t,n.message)}}}}},function(n,t,e){var r=e(16),o=e(17),i=e(0),u=e(3),c=e(1).firefox,a=e(35),f=e(36);n.exports={use:[e(6)],settings:{format:{config:"log_format",prop:{default:e(38)}}},formats:{cr:function(n,t){return function(){return"\r\n"}},date:e(39),lvl:e(40),message:e(41),name:e(42),perf:e(43),time:e(44),"*":e(45)},ext:function(n){for(var t in n.channels)for(var e in this.levels)n.channels[t].fns[e]=s(this,n,t,e);function s(n,t,e,s){var g=i(n,"formats",{}),v=r(t.format,{optional:!0}),d=t.channels[e].recorders.reduce((function(e,r){return r.call(n,t,e),e}),{channel:e,level:s}),x=o(v,g,d),h=t.channels[e],m=h.fns[s],b=h.out;if(b===u&&o.isStatic(x)){var y=x.map(l).filter(p).reduce((function(n,t){return a(d,t,t,n)}),[""]);return f(d,y),function(n,t,e,r){return Object.defineProperty({},"out",{get:function(){return t.bind.apply(t,[n].concat(c&&"trace"===e.level?[]:r.map((function(n){return"function"==typeof n?n():n}))))}}).out}(b,m,d,y)}return function(n,t,e,r){var o=r.reduce((function(n,t){return n||t&&"message"===t.name}),!1);return function(e){return function(){e.message=[].slice.call(arguments);var i=r.map(l).filter(p).reduce((function(n,t){var r="function"==typeof t?t(e):t;return a(e,t,r,n)}),[""]);o||i.push.apply(i,e.message),f(e,i),t.apply(n,i)}}(e)}(b,m,d,x)}function l(n){return n&&n.tag?n.tag:n}function p(n){return"string"!=typeof n||n.trim().length}}}},function(n,t,e){var r=e(3),o=e(1).hasColor,i=e(1).colorSpecifier,u=e(1).colorArgument,c=e(1).colorSpecifierAfter;n.exports=function(n,t,e,a){var f=n.logger.channels[n.channel].out;if(f===r){var s=o(f)&&n.logger.colored&&t.color;s="logger"==(s="level"==s?n.logger.colors.levels[n.level]:s)?n.logger.color:s,a[0]+=s&&i(s)||"";for(var l=Array.isArray(e)?e.length:1,p=0;p<l;p++){var g=Array.isArray(e)?e[p]:e;a[0]+=t.specifier||("object"==typeof g?"%O ":"%s ")}a[0]+=s&&c(s)||"",a.push.apply(a,s&&u(s)||[])}return a.push.apply(a,Array.isArray(e)?e:[e]),a}},function(n,t,e){var r=e(37),o=r.hasAlign;n.exports=function(n,t){var e=o(n.logger.channels[n.channel].out)&&n.logger.align&&r;return t[0]=(e&&e.specifier&&e.specifier[n.level]||"")+t[0],t.splice.apply(t,[1,0].concat(e&&e.args&&e.args[n.level]||[])),t}},function(n,t,e){var r=e(1).firefox;n.exports={hasAlign:e(1).hasColor,specifier:{error:"%c%s%c%s",warn:"%c%s%c%s",info:"%c%s%c%s",log:"%c%s%c%s",debug:"%c%s%c%s",trace:"%c%s%c%s"},args:{error:["padding-left:0px","​","padding-left:0px","​"],warn:["padding-left:"+(r?"12":"0")+"px","​","padding-left:0px","​"],info:["padding-left:"+(r?"12":"10")+"px","​","padding-left:0px","​"],log:["padding-left:"+(r?"12":"10")+"px","​","padding-left:0px","​"],debug:["padding-left:"+(r?"12":"10")+"px","​","padding-left:0px","​"],trace:["padding-left:0px","​","padding-left:0px","​"]}}},function(n,t){n.exports="lvl name perf"},function(n,t,e){var r=e(2),o=e(7);n.exports=function(n,t){return r(n,t,{color:"logger"},(function(){var n=new Date;return n.getFullYear()+"/"+o(n.getMonth().toString(),2,"0",o.LEFT)+"/"+o(n.getDate().toString(),2,"0",o.LEFT)}))}},function(n,t,e){var r=e(2);n.exports=function(n,t){return r(n,t,{color:"level"},(function(){return[" ","x","!","i","-",">","}"][t.ulog.levels[t.level]]}))}},function(n,t,e){var r=e(2);n.exports=function(n){return r(n,{color:"level"},(function(n){return n.message}))}},function(n,t,e){var r=e(2);n.exports=function(n,t){return r(n,t,{color:"logger",padding:16},(function(){return t.logger.name}))}},function(n,t,e){var r=e(2);n.exports=function(n,t){return r(n,t,{color:"logger",padding:6,dir:1},(function(){var n=new Date;t.logger.lastCalled=t.logger.lastCalled||n;var e=n.getTime()-t.logger.lastCalled.getTime();return t.logger.lastCalled=n,e>=36e6?(e/36e5).toFixed(1)+"h":e>=6e5?(e/6e4).toFixed(e>=6e6?1:2)+"m":e>=1e4?(e/1e3).toFixed(e>=1e5?1:2)+"s":e>1?e+"ms":""}))}},function(n,t,e){var r=e(2),o=e(7);n.exports=function(n,t){return r(n,t,{color:"logger"},(function(){var n=new Date;return o(n.getHours().toString(),2,"0",o.LEFT)+":"+o(n.getMinutes().toString(),2,"0",o.LEFT)}))}},function(n,t,e){var r=e(2);n.exports=function(n,t){return r(n,t,{color:"level"},(function(){return n.name in t?t[n.name]:n.name+(n.text?n.text:"")}))}},function(n,t,e){var r=e(0),o=e(1).palette,i=e(1).levels,u=e(18);function c(n,t){var e=(4194303&n)*(t|=0);return 4290772992&n&&(e+=(4290772992&n)*t|0),0|e}n.exports={use:[e(4)],colors:{palette:o,levels:i},settings:{colored:{config:"log_color",prop:u()}},record:function(n,t){n.colored&&(n.colors||(n.colors=r(this,"colors",{}),n.colors.index=function(n){for(var t=0,e=3735928559;t<n.length;t++)e=c(e^n.charCodeAt(t),2654435761);return(e^e>>>16)>>>0}(n.name)%n.colors.palette.length),n.color||(n.color=n.colors.palette[n.colors.index]))}}},function(n,t,e){var r=e(18);n.exports={use:[e(4)],settings:{align:{config:"log_align",prop:r()}}}}])}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"./Resources/Public/JavaScript/LoadingScreen.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("./node_modules/jquery/dist/jquery.js"),__webpack_require__("./Resources/Public/JavaScript/Utils/Logger.js")],void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function LoadingScreenFactory($,Logger){"use strict";var log=Logger("FEditing:Component:LoadingScreen");return log.trace("--\x3e LoadingScreenFactory"),function LoadingScreen(element){log.trace("LoadingScreen",element);var $loadingScreen=$(element),loadingScreenLevel=0;return{showLoadingScreen:function(){log.trace("showLoadingScreen",loadingScreenLevel),0===loadingScreenLevel&&(log.info("show loading screen"),$loadingScreen.fadeIn("fast")),loadingScreenLevel++,log.debug("new loadingScreenLevel",loadingScreenLevel)},hideLoadingScreen:function(){log.trace("--\x3e LoadingScreenFactory"),loadingScreenLevel--,log.debug("new loadingScreenLevel",loadingScreenLevel),loadingScreenLevel<=0&&(log.info("hide loading screen"),loadingScreenLevel=0,$loadingScreen.fadeOut("slow"))},getLoadingScreenLevel:function(){return loadingScreenLevel}}}}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"./Resources/Public/JavaScript/Utils/Logger.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("./Resources/Public/JavaScript/Contrib/ulog/ulog.js")],void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function createLogger(ulog){"use strict";return ulog}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}}]);
//# sourceMappingURL=10.afd5ce0e.iframe.bundle.js.map