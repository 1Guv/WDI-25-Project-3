"undefined"==typeof CE2&&(CE2={}),CE2.deviceType=function($){var t,e,n=$.toLowerCase(),r=0;if(t=$.indexOf("("),-1==t)return 1;if(t++,-1!=(e=$.indexOf("Android",t))){if(e+=8,$.length>e&&(r=$.charAt(e)))switch(r){case"2":if(-1!=$.indexOf("BNTV",e))return 3;if(-1!=n.indexOf("nook",e))return 3;if(-1!=$.indexOf("Kindle",e))return 3;if(-1!=$.indexOf("Touchpad",e))return 3;break;case"3":return 3;case"4":if(-1!=$.indexOf("Silk",e))return 3}return-1!=n.indexOf("tablet",e)?3:-1!=$.indexOf("Mobi",e)?2:3}if(-1!=(e=$.indexOf("iP",t)))switch(r=$.charAt(e+2)){case"a":return 3;case"h":case"o":return 2}return-1!=(e=$.indexOf("BlackBerry",t))?-1!=$.indexOf("Tablet",e+10)?3:2:-1!=$.indexOf("Windows Phone",t)?2:-1!=$.indexOf("BB10",t)?2:"M"!=$.charAt(0)&&-1!=$.indexOf("Opera Mini",t)?2:1},"undefined"==typeof CE2&&(CE2={}),CE2.ignoredElements=[],CE2.clickCaptors=[],CE2.d=document,CE2.w=window,CE2.n=navigator,CE2.p={},function(){var $=CE2.n.userAgent;/\bMSIE\b/.test($)&&(CE2.ie=1,CE2.ieVersion=parseInt(/MSIE (\d+)\.\d+/.exec($)[1],10),CE2.ieQuirksMode="BackCompat"==CE2.d.compatMode)}(),CE2.ignore=function($){$&&(CE2.ignoredElements.push($),CE2.tracker&&CE2.tracker.ignoredElements.push($))},CE2.capture=function($){CE2.clickCaptors.push($),CE2.tracker&&CE2.tracker.clickCaptors.push($)},CE2.findMatchingSnapshot=function($,t,e){var n,r,i,o;if($&&$.length){for(r=0;i=$[r++];)n=Math.floor((new Date).getTime()/1e3),i.e&&i.e<=n||(!e||/n/.test(i.o||""))&&CE2.matchURL(i.u,e||t,i.o,i.d,CE2.n.userAgent)&&(i.s&&i.s>n?CE2.p[i.id]=i:o||(o=i));return o}},CE2.findMatchingLiveSessions=function($,t){var e,n,r=[];if($&&$.length){for(e=0;n=$[e++];)CE2.matchURL(n.u,t,n.o,n.d,CE2.n.userAgent)&&r.push(n.id);return r.length?(r.sort(),r):void 0}},CE2.sameSessions=function($,t){var e,n;if(!$||!t)return!1;if($.length!=t.length)return!1;for(e=0,n=$.length;n>e;e++)if($[e]!=t[e])return!1;return!0},CE2.startTracking=function($,t){var e,n;if($)if(CE2.sampleVisit($))CE2.testID=$.id,CE2.testVersion=$.v||1;else if(!t)return;t&&(CE2.sessionIDs=t),e=CE2.d.createElement("script"),n="https:"==CE2.w.location.protocol?CE2.TRACKING_SCRIPT_SECURE:CE2.TRACKING_SCRIPT,e.src=n+($?"?s="+$.id+"&":"?")+"t="+(new Date).getTime(),e.type="text/javascript",e.async=!0,CE2.d.body.appendChild(e)},CE2.unescape=function($){try{return decodeURIComponent($)}catch(t){return unescape($)}},CE2.qs2obj=function($,t){if(null==$||/^\s*$/.test($))return null;var e,n,r={},i=null,o=$.replace(/\+/g," ").split(t||"&");for(e=0,n=o.length;n>e;e++)i=o[e].split("="),i[0]&&(r[CE2.unescape(i[0])]=null==i[1]?null:CE2.unescape(i[1]));return r},CE2.each=function($,t,e){if($){var n;if("number"==typeof $.length&&"function"==typeof $.concat)for(var r=0,i=$.length;i>r&&(n=$[r],t.call(e,n,r)!==!1);r++);else{var o;for(o in $)if(n=$[o],n!==Object.prototype[o]&&t.call(e,n,o)===!1)break}}},CE2.indexOf=function($,t,e){var n,r;for(n=e||0,r=$.length;r>n;n++)if($[n]===t)return n;return-1},CE2.listen=CE2.addListener=function($,t,e){$.addEventListener?$.addEventListener(t,e,!0):$.attachEvent("on"+t,e)},CE2.removeListener=function($,t,e){$.removeEventListener?$.removeEventListener(t,e,!0):$.detachEvent("on"+t,e)},CE2.userData={},CE2.set=function($,t){$=parseInt($,10),$>=1&&5>=$&&(CE2.userData[$]=t+"")},CE2.click=function(){return CE2.tracker?CE2.tracker.click.apply(CE2.tracker,arguments):void 0},CE2.getBox=function(){},CE2.sampleVisit=function($){return null==$.r?!0:($.r!==!1&&$.r!==!0&&($.r=Math.random()>=1/$.r?!1:!0),$.r)},CE2.dontTrack=function($,t,e,n){if(n&&void 0!==$.external)try{if($.external.InPrivateFilteringEnabled()===!0)return!0}catch(r){}var i=t.doNotTrack||e.doNotTrack||e.msDoNotTrack||$.doNotTrack;return"1"==i||"yes"==i},CE2.cookies=function(){try{return CE2.qs2obj(document.cookie,/;\s*/g)||{}}catch($){return{}}}(),CE2.parseJSON=function(src){return"undefined"!=typeof JSON&&"function"==typeof JSON.parse?JSON.parse(src):eval("("+src+")")},CE2.isBot=function($){return/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test($)},"undefined"==typeof CE2&&(CE2={}),CE2.READY_STATE_PATTERN=CE2.ie?/complete/:/complete|interactive/,CE2.autoStart="undefined"==typeof CE_MANUAL_START||!CE_MANUAL_START,CE2.domReady=document.readyState&&CE2.READY_STATE_PATTERN.test(document.readyState),CE2.domReadyListeners=[],CE2.onDOMReady=function($){return CE2.domReady?setTimeout($,1):void CE2.domReadyListeners.push($)},CE2.domReadySetup=function(){var $=function(){for(var $=CE2.domReadyListeners;$.length>0;)$.pop().call();CE2.domReady=!0};if(CE2.domReady&&$(),CE2.listen(window,"load",$),document.addEventListener&&CE2.listen(document,"DOMContentLoaded",$),document.readyState){var t=CE2.READY_STATE_PATTERN;!function(){t.test(document.readyState)?$():setTimeout(arguments.callee,10)}()}},CE2.autoStart&&CE2.domReadySetup(),"undefined"==typeof CE2&&(CE2={}),CE2.matchURL=function($,t,e,n,r){var i,o,s,a,E,c,C,u,f,d,h,p,l,g,m,v,R=/(default|index)($|\..*)/i,T=!1;if(!$||!t)return!1;if(n&&CE2.indexOf(n,CE2.deviceType(r))<0)return!1;if(e=e||"",/n/.test(e))return $===t;if(/[re]/.test(e))try{return RegExp($,"i").test(t)}catch(y){return!1}if(i=new CE2.URI(t.toLowerCase()),/h/.test(e)&&$.protocol!=i.protocol)return!1;if(s=i.host,o=s.replace(/^www\./,""),u=$.host,f=$.ihost,/w/.test(e)&&s!=u&&s!=f)return!1;if(o!=u.replace(/^www\./,"")&&o!=(f&&f.replace(/^www\./,"")))return!1;if(d=$.path?$.path:"/",a=i.path,d!=a){if(/\//.test(e))return!1;for(h=d.split("/"),E=a.split("/"),m=0,v=Math.max(h.length,E.length);v>m;m++)if(h[m]||(h[m]=""),E[m]||(E[m]=""),m==v-1&&(h[m]=h[m].replace(R,""),E[m]=E[m].replace(R,"")),h[m]!=E[m])return!1}return c=i.qs,g=/\?/.test(e),p=$.qs||"",g&&c&&!p||!c&&p?!1:(CE2.each(p,function($,t){return c[t]!==$?(T=!0,!1):void 0}),T?!1:g&&(CE2.each(c,function($,t){return $!=p[t]?T=!0:void 0}),T)?!1:(l=$.hash||"",C=i.hash||"",g=/#/.test(e),(g||l)&&l!=C?!1:!0))},"undefined"==typeof CE2&&(CE2={}),void 0===CE2.URI&&(CE2.URI=function($){if(this.src=$,this.protocol=this.host=this.port=this.path=this.qs=this.hash=this.query=null,$){var t=typeof $;"string"==t?this.initWithString($):"object"==t&&this.initWithURI($)}},CE2.URI.pattern=/^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i,CE2.URI.prototype={initWithString:function($){var t,e,n,r,i,o=CE2.URI.pattern.exec($);o[1]||"/"==$.charAt(0)?((t=o[1])&&(this.protocol=t.substr(0,t.indexOf(":"))),this.host=o[3]||null,(e=o[4])&&(this.port=+e.substr(1)),(n=o[5])?this.path=CE2.unescape(n):this.host&&(this.path="/")):this.path=CE2.unescape((o[3]||"")+(o[5]||"")),(r=o[6])&&(this.qs=CE2.qs2obj(r.substr(1)),this.query=r.substr(1)),(i=o[7])&&(this.hash=CE2.unescape(i.substr(1)))},initWithURI:function($){CE2.each($,function($,t){this[t]=$},this)},isAbsolute:function(){return this.isURL()||this.path&&"/"==this.path.charAt(0)},isURL:function(){return this.protocol&&this.host},getDomain:function(){return this.host&&this.host.replace(/^www\./,"")}}),CE2.userMain=function(){var $=CE2.snapshots,t=CE2.sessions,e=CE2.sites,n=CE2.liveBootstrap||function(){};if(!CE2.isBot(CE2.n.userAgent)&&!CE2.dontTrack(CE2.w,CE2.d,CE2.n,CE2.ie)){CE2.testID=CE2.testVersion=CE2.sessionIDs=null,CE2.GTRK_DEST&&CE2.gtrk&&CE2.gtrk(CE2.GTRK_DEST),CE2.initFlowTracking&&CE2.initFlowTracking();var r=function(){var $,t="!$%&()*+,-.0123456789;<=>?@[]^_`{|}~",e={};for($=0;$<t.length;$++)e[t.charAt($)]=$.toString(36);return e}(),i=function($){return parseInt($.replace(/./g,function($){return r[$]}),36)},o=function($){for(var t,e="",n=/(![^:\/a-z])|([^:\/a-z]{2})|(:[^:\/a-z]{3})|(\/[^:\/a-z]{4})/gi,r=String.fromCharCode;null!=(t=n.exec($));)t[1]||t[2]?e+=r(i(t[0])):t[3]?e+=r(i(t[3].substr(1))):t[4]&&(e+=r(i(t[4].substr(1))));return e};"function"==typeof o&&("string"==typeof $&&($=CE2.parseJSON(o($))),"string"==typeof t&&(t=CE2.parseJSON(o(t))),"string"==typeof e&&(e=CE2.parseJSON(o(e)))),CE2.recording&&CE2.recording.main&&CE2.recording.main(e);var s=function(){try{var e=CE2.w.location.href,r=CE2.findMatchingSnapshot($,e,"string"==typeof CE_SNAPSHOT_NAME&&CE_SNAPSHOT_NAME),i=CE2.findMatchingLiveSessions(t,e);if(n())return;if(!r&&!i)return CE2.testID=CE2.testVersion=CE2.sessionIDs=null,void(CE2.tracker&&(CE2.tracker.cleanup(),CE2.tracker=null));(r&&r.id!=CE2.testID||i&&!CE2.sameSessions(i,CE2.sessionIDs))&&(CE2.startTracking(r,i),CE2.badge&&CE2.badge())}catch(o){}};s(),CE2.autoStart&&(CE2.monitorInterval=setInterval(s,1e3))}},CE2.autoStart&&CE2.onDOMReady(CE2.userMain),"function"==typeof CE_READY?CE2.onDOMReady(CE_READY):"object"==typeof CE_READY&&CE2.onDOMReady(function(){CE2.each(CE_READY,function($){"function"==typeof $&&$()})}),CE2.TRACKING_SCRIPT="http://trk.cetrk.com/7/t.js",CE2.TRACKING_SCRIPT_SECURE="https://s3.amazonaws.com/trk.cetrk.com/7/t.js",CE2.TRACKING_DEST="http://trk.cetrk.com/",CE2.TRACKING_DEST_SECURE="https://s3.amazonaws.com/trk.cetrk.com/",CE2.uid=433477,"undefined"==typeof CE2&&(CE2={}),CE2.gtrk=function($){function t(t,e){var n=CE2.d.createElement("img");n.src=$+"/"+t+"?u="+CE2.uid+"&t="+e.toString(36)}function e($,e){var n=new Date,r=Math.floor(n.getTime()/1e3),i="_ceg."+$,o=CE2.cookies[i],s=o&&parseInt(o,36),a=new CE2.URI(CE2.w.location.href).getDomain(),E=new Date(n.getFullYear(),n.getMonth()+3,n.getDate()).toUTCString();(!s||r-s>e)&&t($,r),CE2.d.cookie=i+"="+r.toString(36)+";path=/;domain="+a+";expires="+E}/^https?:\/\//.test($)||($="https://"+$),e("s",1800),e("u",2592e3)},CE2.GTRK_DEST="gtrk.s3.amazonaws.com",CE2.snapshots="%8&4!}%|%]!}$<$3$3$7$3$2$1$5$,!}%^!}$<$2$5$;$6$9$9$7$5$1$1$,!}&.!}$<$6$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&0&0&0$.%[%?&*%?&%%]%]&*%|&.%^&*$.%[&&&$!}$,!}&(%?&,%{!}$<!}$0%@%^&+&,$-&+%^%]%?&%&+!}$,!}&)&+!}$<&4!}&+&-%`&+%^%]%?&%!}$<!}&,&*&-%^!}&6&6$,!}%]!}$<%8$2%;&6$,&4!}%|%]!}$<$3$3$7$3$2$2$5$,!}%^!}$<$2$5$;$6$9$;$1$1$1$1$,!}&.!}$<$6$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&0&0&0$.%[%?&*%?&%%]%]&*%|&.%^&*$.%[&&&$!}$,!}&(%?&,%{!}$<!}$0%@%^&+&,$-&+%^%]%?&%&+!}$,!}&)&+!}$<&4!}&+&-%`&+%^%]%?&%!}$<!}&,&*&-%^!}&6&6$,!}%]!}$<%8$3%;&6$,&4!}%|%]!}$<$3$3$7$4$8$8$5$,!}%^!}$<$2$5$;$6$;$9$8$3$1$1$,!}&.!}$<$6$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&0&0&0$.%[%?&*%?&%%]%]&*%|&.%^&*$.%[&&&$!}$,!}&(%?&,%{!}$<!}$0%@%^&+&,$-&+%^%]%?&%&+!}&6$,!}%]!}$<%8$3%;&6$,&4!}%|%]!}$<$3$3$8$4$8$1$7$,!}%^!}$<$2$5$;$7$7$2$1$1$1$1$,!}&.!}$<$6$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&0&0&0$.%[%?&*%?&%%]%]&*%|&.%^&*$.%[&&&$!}$,!}&(%?&,%{!}$<!}$0%_&&&*%]$0%_$-$2$6$1!}&6$,!}%]!}$<%8$2%;&6$,&4!}%|%]!}$<$3$3$5$8$3$;$1$,!}%^!}$<$2$5$;$5$8$8$5$1$1$1$,!}&.!}$<$6$,!}&-!}$<!}%<%{&,&,&($<$0$0&0&0&0%9%9$.%[%?&*%?&%%]%]&*%|&.%^&*%9%9$.%[&&&$$0&.%^%{%|%[&!%^&+$0&!&&%[%?&,%|&&&%%9%9$-$4$1$1$1$5$.$*$!!}$,!}&&!}$<!}&*!}$,!}%]!}$<%8$2%;&6$,&4!}%|%]!}$<$3$3$5$8$4$5$4$,!}%^!}$<$2$5$;$5$8$8$8$7$1$1$,!}&.!}$<$6$,!}&-!}$<!}%<%{&,&,&($<$0$0&0&0&0%9%9$.%[%?&*%?&%%]%]&*%|&.%^&*%9%9$.%[&&&$$0&.%^%{%|%[&!%^&+$0%]%^&,%?%|&!$0$.$*$!!}$,!}&&!}$<!}&*!}$,!}%]!}$<%8$2%;&6$,&4!}%|%]!}$<$3$3$6$;$1$9$;$,!}%^!}$<$2$5$;$6$6$6$6$3$1$1$,!}&.!}$<$6$,!}&-!}$<!}%<%{&,&,&($<$0$0&0&0&0%9%9$.%[%?&*%?&%%]%]&*%|&.%^&*%9%9$.%[&&&$$0&.%^%{%|%[&!%^&+$0$.$*$!!}$,!}&&!}$<!}&*!}$,!}%]!}$<%8$2%;&6$,&4!}%|%]!}$<$3$3$8$2$4$9$5$,!}%^!}$<$2$5$;$7$6$1$6$7$1$1$,!}&.!}$<$6$,!}&-!}$<!}%<%{&,&,&($<$0$0&0&0&0%9%9$.%[%?&*%?&%%]%]&*%|&.%^&*%9%9$.%[&&&$$0&.%^%{%|%[&!%^&+$0$.$*$!!}$,!}&&!}$<!}&*!}$,!}%]!}$<%8$3%;&6$,&4!}%|%]!}$<$3$3$8$2$;$4$6$,!}%^!}$<$2$5$;$7$6$3$4$7$1$1$,!}&.!}$<$6$,!}&-!}$<!}%<%{&,&,&(&+$<$0$0%?&(&(%9%9$.%@&!%?%[%~%@&&&&%~%|&%%_&&&*&$%?&,%|&&&%%9%9$.%[&&&$$0%?&(&($0%9%9$[&!%[%]%^%?&!%^&*$?$;$8$1$1$1$2$%&.%(%^%?%]$?$3$%&.%1%{%^&$%^$?$2$%&.%,&*&&%`%$${$?$2$%&.%^&*%$${$?$5$2$%&(&*&&%_%|&!%^%$${$?$.$*$%&(%~%`%$${$?$.$*$%&.&$&+$?%1&*&-%^$%&$&&%@%|&!%^$?$}%?&!&+%^$%&!%?&2&&&-&,$?$2$%%=&0%|%]&,%{$?$.$*$%%]%^%?&!%^&*%|%]$?$;$8$1$1$1$2$%&%%^&1&,$?$.$*$0&,&*%?%]%^$0%_&&&*&$$0%]%^&+%[&*%|%@%^%9%9$-&2&&&-&*%9%9$-&.%^%{%|%[&!%^$!!}$,!}&&!}$<!}&*!}$,!}%]!}$<%8$2%;&6$,&4!}%|%]!}$<$3$3$8$2$;$5$3$,!}%^!}$<$2$5$;$7$6$3$4$7$1$1$,!}&.!}$<$6$,!}&-!}$<!}%<%{&,&,&(&+$<$0$0%?&(&(%9%9$.%@&!%?%[%~%@&&&&%~%|&%%_&&&*&$%?&,%|&&&%%9%9$.%[&&&$$0%?&(&($0%9%9$[&!%[%]%^%?&!%^&*$?$;$8$1$1$1$2$%&.%(%^%?%]$?$3$%&.%1%{%^&$%^$?$2$%&.%,&*&&%`%$${$?$2$%&.%^&*%$${$?$5$2$%&(&*&&%_%|&!%^%$${$?$.$*$%&(%~%`%$${$?$4$9$%&.&$&+$?%1&*&-%^$%&$&&%@%|&!%^$?$}%?&!&+%^$%&!%?&2&&&-&,$?$2$%%=&0%|%]&,%{$?$.$*$%%]%^%?&!%^&*%|%]$?$;$8$1$1$1$2$%&%%^&1&,$?$.$*$0&,&*%?%]%^$0%_&&&*&$$0%^&)&-%|&(&$%^&%&,$!!}$,!}&&!}$<!}&*!}$,!}%]!}$<%8$2%;&6%;",CE2.sessions=null;