/*! Backstretch - v2.0.3 - 2012-11-30
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2012 Scott Robbin; Licensed MIT */
!function(t,e,n){"use strict";t.fn.backstretch=function(i,r){return(i===n||0===i.length)&&t.error("No images were supplied for Backstretch"),0===t(e).scrollTop()&&e.scrollTo(0,0),this.each(function(){var e=t(this),n=e.data("backstretch");n&&(r=t.extend(n.options,r),n.destroy(!0)),n=new o(this,i,r),e.data("backstretch",n)})},t.backstretch=function(e,n){return t("body").backstretch(e,n).data("backstretch")},t.expr[":"].backstretch=function(e){return t(e).data("backstretch")!==n},t.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var i={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},o=function(n,o,s){if(this.options=t.extend({},t.fn.backstretch.defaults,s||{}),this.images=t.isArray(o)?o:[o],t.each(this.images,function(){t("<img />")[0].src=this}),this.isBody=n===document.body,this.$container=t(n),this.$wrap=t('<div class="backstretch"></div>').css(i.wrap).appendTo(this.$container),this.$root=this.isBody?t(r?e:document):this.$container,!this.isBody){var a=this.$container.css("position"),l=this.$container.css("zIndex");this.$container.css({position:"static"===a?"relative":a,zIndex:"auto"===l?0:l,background:"none"}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&r?"fixed":"absolute"}),this.index=0,this.show(this.index),t(e).on("resize.backstretch",t.proxy(this.resize,this)).on("orientationchange.backstretch",t.proxy(function(){this.isBody&&0===e.pageYOffset&&(e.scrollTo(0,1),this.resize())},this))};o.prototype={resize:function(){try{var t,n={left:0,top:0},i=this.isBody?this.$root.width():this.$root.innerWidth(),o=i,r=this.isBody?e.innerHeight?e.innerHeight:this.$root.height():this.$root.innerHeight(),s=o/this.$img.data("ratio");s>=r?(t=(s-r)/2,this.options.centeredY&&(n.top="-"+t+"px")):(s=r,o=s*this.$img.data("ratio"),t=(o-i)/2,this.options.centeredX&&(n.left="-"+t+"px")),this.$wrap.css({width:i,height:r}).find("img:not(.deleteable)").css({width:o,height:s}).css(n)}catch(a){}return this},show:function(e){if(!(Math.abs(e)>this.images.length-1)){this.index=e;var n=this,o=n.$wrap.find("img").addClass("deleteable"),r=t.Event("backstretch.show",{relatedTarget:n.$container[0]});return clearInterval(n.interval),n.$img=t("<img />").css(i.img).bind("load",function(e){var i=this.width||t(e.target).width(),s=this.height||t(e.target).height();t(this).data("ratio",i/s),t(this).fadeIn(n.options.speed||n.options.fade,function(){o.remove(),n.paused||n.cycle(),n.$container.trigger(r,n)}),n.resize()}).appendTo(n.$wrap),n.$img.attr("src",n.images[e]),n}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return this.images.length>1&&(clearInterval(this.interval),this.interval=setInterval(t.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(n){t(e).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),n||this.$wrap.remove(),this.$container.removeData("backstretch")}};var r=function(){var t=navigator.userAgent,n=navigator.platform,i=t.match(/AppleWebKit\/([0-9]+)/),o=!!i&&i[1],r=t.match(/Fennec\/([0-9]+)/),s=!!r&&r[1],a=t.match(/Opera Mobi\/([0-9]+)/),l=!!a&&a[1],c=t.match(/MSIE ([0-9]+)/),u=!!c&&c[1];return!((n.indexOf("iPhone")>-1||n.indexOf("iPad")>-1||n.indexOf("iPod")>-1)&&o&&534>o||e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)||a&&7458>l||t.indexOf("Android")>-1&&o&&533>o||s&&6>s||"palmGetResource"in e&&o&&534>o||t.indexOf("MeeGo")>-1&&t.indexOf("NokiaBrowser/8.5.0")>-1||u&&6>=u)}()}(jQuery,window);