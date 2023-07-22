/*! timeago 1.6.7 from https://cdnjs.cloudflare.com/ajax/libs/jquery-timeago/1.6.7/jquery.timeago.min.js */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?t(require("jquery")):t(jQuery)}(function(h){h.timeago=function(t){return t instanceof Date?r(t):r("string"==typeof t?h.timeago.parse(t):"number"==typeof t?new Date(t):h.timeago.datetime(t))};var i=h.timeago;h.extend(h.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(n){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var r=this.settings.strings,t=r.prefixAgo,e=r.suffixAgo;if(this.settings.allowFuture&&n<0&&(t=r.prefixFromNow,e=r.suffixFromNow),!this.settings.allowPast&&0<=n)return this.settings.strings.inPast;var i=Math.abs(n)/1e3,a=i/60,o=a/60,s=o/24,u=s/365;function m(t,e){var i=h.isFunction(t)?t(e,n):t,a=r.numbers&&r.numbers[e]||e;return i.replace(/%d/i,a)}var l=i<45&&m(r.seconds,Math.round(i))||i<90&&m(r.minute,1)||a<45&&m(r.minutes,Math.round(a))||a<90&&m(r.hour,1)||o<24&&m(r.hours,Math.round(o))||o<42&&m(r.day,1)||s<30&&m(r.days,Math.round(s))||s<45&&m(r.month,1)||s<365&&m(r.months,Math.round(s/30))||u<1.5&&m(r.year,1)||m(r.years,Math.round(u)),d=r.wordSeparator||"";return void 0===r.wordSeparator&&(d=" "),h.trim([t,l,e].join(d))},parse:function(t){var e=h.trim(t);return e=(e=(e=(e=(e=e.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(e)},datetime:function(t){var e=i.isTime(t)?h(t).attr("datetime"):h(t).attr("title");return i.parse(e)},isTime:function(t){return"time"===h(t).get(0).tagName.toLowerCase()}});var a={init:function(){a.dispose.call(this);var t=h.proxy(n,this);t();var e=i.settings;0<e.refreshMillis&&(this._timeagoInterval=setInterval(t,e.refreshMillis))},update:function(t){var e=t instanceof Date?t:i.parse(t);h(this).data("timeago",{datetime:e}),i.settings.localeTitle&&h(this).attr("title",e.toLocaleString()),n.apply(this)},updateFromDOM:function(){h(this).data("timeago",{datetime:i.parse(i.isTime(this)?h(this).attr("datetime"):h(this).attr("title"))}),n.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};function n(){var t=i.settings;if(t.autoDispose&&!h.contains(document.documentElement,this))return h(this).timeago("dispose"),this;var e=function(t){if(!(t=h(t)).data("timeago")){t.data("timeago",{datetime:i.datetime(t)});var e=h.trim(t.text());i.settings.localeTitle?t.attr("title",t.data("timeago").datetime.toLocaleString()):!(0<e.length)||i.isTime(t)&&t.attr("title")||t.attr("title",e)}return t.data("timeago")}(this);return isNaN(e.datetime)||(0===t.cutoff||Math.abs(o(e.datetime))<t.cutoff?h(this).text(r(e.datetime)):0<h(this).attr("title").length&&h(this).text(h(this).attr("title"))),this}function r(t){return i.inWords(o(t))}function o(t){return(new Date).getTime()-t.getTime()}h.fn.timeago=function(t,e){var i=t?a[t]:a.init;if(!i)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){i.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")})