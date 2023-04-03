jQuery(document).ready(function() { thickboxL10n = Drupal.settings.thickbox; });
;
/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
/**
 * @file
 * Colorbox module init js.
 */

(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($('a, area, input', context).colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      // In FireFox, window.matchMedia exists but returns null when used in a
      // hidden iframe.
      if (mq == null || mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox').each(function(){
        $(this).colorbox(settings.colorbox);
      });

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
/**
 * @file
 * Colorbox module style js.
 */

(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
/* Modified ThickBox based on ThickBox 3.1 by Cody Lindley | thickbox.net | MIT License */
jQuery(document).ready(function(){"string"!=typeof tb_pathToImage&&(tb_pathToImage=thickboxL10n.loadingAnimation);"string"!=typeof tb_closeImage&&(tb_closeImage=thickboxL10n.closeImage)});
var tb_options={auto_resize_img:!0,auto_resize_html:!1,click_img:"close",click_end:"loop",click_bg:"close",wheel_img:"prev_next",wheel_bg:"scroll",keys_close:[27,13],keys_prev:[188,37],keys_next:[190,39],keys_first:[36],keys_last:[35],move_img:!1,move_html:!1,resize_img:!1,resize_html:!1,position_title:"top",position_cap:"bottom",mobile_support:"no_margin",small_width:480,small_height:480,win_width:600,win_height:400,margin_win_img:15,margin_win_html:30,ref_title:["link-title","link-name"],ref_cap:["link-title",
"link-name"],effect_open:"none",effect_close:"fade",effect_trans:"none",effect_title:"none",effect_cap:"none",effect_speed:"fast",debug:!1};
jQuery(document).ready(function(){tb_init("a.thickbox, area.thickbox, input.thickbox");imgLoader=new Image;imgLoader.src=tb_pathToImage;var a,c=navigator.userAgent,b=(a=c.match(/AppleWebKit\/([0-9]+)/))&&534>a[1],d=(a=c.match(/Opera Mobi\/([0-9]+)/))&&7458>a[1],e=(a=c.match(/Fennec\/([0-9]+)/))&&6>a[1];notSupportedPositionFixed="undefined"==typeof document.body.style.maxHeight||/(iPhone|iPod|iPad)/.test(navigator.platform)&&b||-1<c.indexOf("Android")&&b||window.operamini&&"[object OperaMini]"===Object.prototype.toString.call(window.operamini)||
d||e||window.palmGetResource&&b||-1<c.indexOf("MeeGo")&&-1<c.indexOf("NokiaBrowser/8.5.0")});function tb_init(a){jQuery.isFunction(jQuery().live)?jQuery(a).live("click",tb_click):jQuery(a).bind("click",tb_click)}
function tb_click(){if("no_thickbox"==tb_options.mobile_support){var a=tb_getPageSize();if(a[0]<=tb_options.small_width||a[1]<=tb_options.small_height)return!0}null!==document.getElementById("TB_window")&&(jQuery(document).unbind(".thickbox"),jQuery("#TB_window").trigger("tb_unload").remove(),jQuery("body").append("<div id='TB_window' class='TB_Transition'></div>"));tb_show(this,this.href||this.alt,this.rel||!1);this.blur();return!1}
function tb_caption(a,c){for(var c=c||tb_options.ref_cap,b,d=0;d<c.length&&!b;d++)switch(c[d]){case "link-title":b=a.title;break;case "link-name":b=a.name;break;case "blank":return"";case "img-title":b=jQuery(a).children("img").attr("title");break;case "img-alt":b=jQuery(a).children("img").attr("alt");break;case "img-cap":b=jQuery(a).parent().is("dt.gallery-icon")?jQuery(a).parent().nextAll(".wp-caption-text").text().replace(/^\s+|\s+$/g,""):jQuery(a).nextAll(".wp-caption-text").text();break;case "img-desc":b=
jQuery(a).children("img").attr("longdesc");break;case "img-name":b=jQuery(a).children("img").attr("name")}return b.replace(/(\r\n|[\n\r])/g,"<br />")}
function tb_show(a,c,b){try{notSupportedPositionFixed&&(jQuery("body","html").css({height:"100%",width:"100%"}),jQuery("html").css("overflow","hidden"),"undefined"==typeof document.body.style.maxHeight&&null===document.getElementById("TB_HideSelect")&&jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe>"));null===document.getElementById("TB_overlay")&&(jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>"),notSupportedPositionFixed&&jQuery("#TB_overlay, #TB_HideSelect").css({position:"absolute",
height:(document.body.scrollHeight>document.body.offsetHeight?document.body.scrollHeight:document.body.offsetHeight)+"px"}),"close"==tb_options.click_bg&&jQuery("#TB_overlay").click(tb_remove));tb_detectMacXFF()?jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack"):jQuery("#TB_overlay").addClass("TB_overlayBG");jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");notSupportedPositionFixed&&jQuery("#TB_load").css({position:"absolute",marginTop:-parseInt(jQuery("#TB_load")[0].offsetHeight/
2)+(TBWindowMargin=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)+"px"});0==parseInt(jQuery("#TB_load").css("marginLeft"))&&jQuery("#TB_load").css("marginLeft",-jQuery("#TB_load").outerWidth()/2);0==parseInt(jQuery("#TB_load").css("marginTop"))&&jQuery("#TB_load").css("marginTop",-jQuery("#TB_load").outerHeight()/2);jQuery("#TB_load").show();var d=c;-1!==c.indexOf("?")&&(d=c.substr(0,c.indexOf("?")));-1!==c.indexOf("#")&&(d=c.substr(0,c.indexOf("#")));var e=
/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$|\.webp$|\.pdf$/,f=d.toLowerCase().match(e);if(".jpg"==f||".jpeg"==f||".png"==f||".gif"==f||".bmp"==f||".webp"==f){TB_imageCount=TB_NextHTML=TB_NextURL=TB_NextCaption=TB_PrevHTML=TB_PrevURL=TB_PrevCaption="";TB_FoundURL=!1;TB_LastURL=TB_LastCaption=TB_FirstURL=TB_FirstCaption="";if(b){TB_TempArray=jQuery("a[rel="+b+"]").get();for(TB_Counter=0;TB_Counter<TB_TempArray.length&&""===TB_NextHTML;TB_Counter++)TB_TempArray[TB_Counter].href.toLowerCase().match(e),("object"==
typeof a?TB_TempArray[TB_Counter]!=a:TB_TempArray[TB_Counter].href!=c)?TB_FoundURL?(TB_NextCaption=TB_TempArray[TB_Counter],TB_NextURL=TB_TempArray[TB_Counter].href,TB_NextHTML="<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>"):(TB_PrevCaption=TB_TempArray[TB_Counter],TB_PrevURL=TB_TempArray[TB_Counter].href,TB_PrevHTML="<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>"):(TB_FoundURL=!0,TB_imageCount=thickboxL10n.image+" "+(TB_Counter+1)+" "+
thickboxL10n.of+" "+TB_TempArray.length);TB_FirstCaption=TB_TempArray[0];TB_FirstURL=TB_TempArray[0].href;TB_LastCaption=TB_TempArray[TB_TempArray.length-1];TB_LastURL=TB_TempArray[TB_TempArray.length-1].href}imgPreloader=new Image;imgPreloader.onload=function(){function d(a,b,c){var e=a-jQuery("#TB_Image").width(),f=b-jQuery("#TB_Image").height();jQuery("#TB_window").css({marginLeft:Math.round(parseInt(jQuery("#TB_window").css("marginLeft"))-e/2),marginTop:Math.round(parseInt(jQuery("#TB_window").css("marginTop"))-
f/2)});jQuery("#TB_window").width(jQuery("#TB_window").width()+e).height("auto");jQuery("#TB_Image").width(a).height(b);c&&jQuery("#TB_window a.scalable").attr("title",c)}imgPreloader.onload=null;var e=c.replace(/^[^\?]+\??/,""),f=tb_parseQuery(e);"object"==typeof a&&(a=tb_caption(a));TB_Image="<img id='TB_Image' src='"+c+"' width='"+imgPreloader.width+"' height='"+imgPreloader.height+"' alt='"+a.replace("'","&apos;")+"'/>";"close"==tb_options.click_img||!b&&"close"==tb_options.click_end?TB_Image="<a href='' id='TB_ImageOff' title='"+
thickboxL10n.close+"'>"+TB_Image+"</a>":"open"==tb_options.click_img?TB_Image="<a href='"+c+"' target='_blank' title='"+thickboxL10n.open+"'>"+TB_Image+"</a>":"download"==tb_options.click_img?TB_Image="<a href='"+c+"' class='download' title='"+thickboxL10n.download+"'>"+TB_Image+"</a>":"expand_shrink"==tb_options.click_img&&(TB_Image="<a href='' class='scalable' title='"+thickboxL10n.fit+"'>"+TB_Image+"</a>");TB_Caption="<div id='TB_caption'>"+a+"<div id='TB_secondLine'>"+TB_imageCount+TB_PrevHTML+
TB_NextHTML+"</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><img src='"+tb_closeImage+"' /></a></div>";"none"!=tb_options.effect_cap&&(TB_Caption="<div id='TB_CaptionBar'>"+TB_Caption+"</div>");switch(tb_options.position_cap){case "top":jQuery("#TB_window").append(TB_Caption+TB_Image).addClass("TB_imageContent TB_captionTop");break;case "bottom":jQuery("#TB_window").append(TB_Image+TB_Caption).addClass("TB_imageContent TB_captionBottom");
break;case "none":jQuery("#TB_window").append(TB_Image).addClass("TB_imageContent")}(!b||!a)&&jQuery("#TB_window").addClass("TB_singleLine");"true"==f.modal&&jQuery("#TB_overlay").unbind();jQuery("#TB_closeWindowButton").click(tb_remove);if(""!==TB_PrevHTML){var g=function(){jQuery(document).unbind(".thickbox");jQuery("#TB_window").remove();jQuery("body").append("<div id='TB_window' class='TB_Transition'></div>");tb_show(TB_PrevCaption,TB_PrevURL,b);return!1};jQuery("#TB_prev").click(g);var h=function(){jQuery(document).unbind(".thickbox");
jQuery("#TB_window").remove();jQuery("body").append("<div id='TB_window' class='TB_Transition'></div>");tb_show(TB_FirstCaption,TB_FirstURL,b);return!1}}if(""!==TB_NextHTML){var r=function(){jQuery(document).unbind(".thickbox");jQuery("#TB_window").remove();jQuery("body").append("<div id='TB_window' class='TB_Transition'></div>");tb_show(TB_NextCaption,TB_NextURL,b);return!1};jQuery("#TB_next").click(r);var t=function(){jQuery(document).unbind(".thickbox");jQuery("#TB_window").remove();jQuery("body").append("<div id='TB_window' class='TB_Transition'></div>");
tb_show(TB_LastCaption,TB_LastURL,b);return!1}}if(b&&"next"==tb_options.click_img){var i,k,l;""!=TB_NextHTML?(i="TB_ImageNext",k=thickboxL10n.next,l=r):"close"==tb_options.click_end?(i="TB_ImageClose",k=thickboxL10n.close,l=tb_remove):"loop"==tb_options.click_end&&""!=TB_PrevHTML&&(i="TB_ImageFirst",k=thickboxL10n.first,l=h);i&&(k&&l)&&(jQuery("#TB_window").append("<div id='TB_ImageClick'><a href='' id='"+i+"' title='"+k+"'><span></span></a></div>"),jQuery("#"+i).click(l))}else if(b&&"prev_next"==
tb_options.click_img){var m,p,s;""!=TB_PrevHTML&&(i="TB_ImagePrev",k=thickboxL10n.prev,l=g);""!=TB_NextHTML&&(m="TB_ImageNext",p=thickboxL10n.next,s=r);""==TB_PrevHTML&&("close"==tb_options.click_end?(i="TB_ImageClose",k=thickboxL10n.close,l=tb_remove):"loop"==tb_options.click_end&&""!=TB_NextHTML&&(i="TB_ImageLast",k=thickboxL10n.last,l=t));""==TB_NextHTML&&("close"==tb_options.click_end?(m="TB_ImageClose2",p=thickboxL10n.close,s=tb_remove):"loop"==tb_options.click_end&&""!=TB_PrevHTML&&(m="TB_ImageFirst",
p=thickboxL10n.first,s=h));if(i&&k&&l||m&&p&&s)e=link2="",i&&(k&&l)&&(e="<a href='' id='"+i+"' class='TB_ImageLeft' title='"+k+"'></a>"),m&&(p&&s)&&(link2="<a href='' id='"+m+"' class='TB_ImageRight' title='"+p+"'></a>"),jQuery("#TB_window").append("<div id='TB_ImageClick'>"+e+link2+"</div>"),e&&jQuery("#"+i).click(l),link2&&jQuery("#"+m).click(s),jQuery.browser.msie&&7>=parseInt(jQuery.browser.version)&&jQuery("#TB_ImageClick > a").focus(function(){this.blur()})}"download"==tb_options.click_img?
jQuery("#TB_window a.download").click(function(){window.location=thickboxL10n.forceDL+"?file="+this.href;return!1}):"expand_shrink"==tb_options.click_img&&jQuery("#TB_window a.scalable").click(function(){tb_fitToWindow?d(imgPreloader.width,imgPreloader.height,thickboxL10n.fit):d(tb_fitWidth,tb_fitHeight,thickboxL10n.actual);tb_fitToWindow=!tb_fitToWindow;return!1});jQuery(document).bind("keydown.thickbox",function(a){if("true"!=f.modal&&-1!=jQuery.inArray(a.which,tb_options.keys_close))jQuery(document).triggerHandler("wp_CloseOnEscape",
[{event:a,what:"thickbox",cb:tb_remove}])||tb_remove();else if(-1!=jQuery.inArray(a.which,tb_options.keys_prev)||a.shiftKey&&-1!=jQuery.inArray(a.which,tb_options.keys_prev.shift))""!=TB_PrevHTML&&g();else if(-1!=jQuery.inArray(a.which,tb_options.keys_next))""!=TB_NextHTML&&r();else if(-1!=jQuery.inArray(a.which,tb_options.keys_first))""!=TB_PrevHTML&&h();else if(-1!=jQuery.inArray(a.which,tb_options.keys_last))""!=TB_NextHTML&&t();else return!0;a.stopImmediatePropagation();return!1});b&&"prev_next"==
tb_options.wheel_img?jQuery("#TB_window").bind("mousewheel.thickbox DOMMouseScroll.thickbox",function(a){a.stopImmediatePropagation();var b=0,a=a.originalEvent;a.wheelDelta?b=a.wheelDelta:a.detail&&(b=-a.detail);jQuery(window).one("MozMousePixelScroll",function(){return!1});if(0<b){if(""!=TB_PrevHTML)return g(),!1}else if(0>b&&""!=TB_NextHTML)return r(),!1}):"scale"==tb_options.wheel_img?jQuery("#TB_window").bind("mousewheel.thickbox DOMMouseScroll.thickbox",function(a){if(a.ctrlKey)return!0;a.stopImmediatePropagation();
var b=0,a=a.originalEvent;a.wheelDelta?b=a.wheelDelta:a.detail&&(b=-a.detail);a=1+(0<b?0.1:-0.1);b=Math.round(jQuery("#TB_Image").width()*a);a=Math.round(jQuery("#TB_Image").height()*a);100<b&&100<a&&d(b,a);return!1}):"none"==tb_options.wheel_img&&jQuery("#TB_window").bind("mousewheel.thickbox DOMMouseScroll.thickbox",function(a){a.stopImmediatePropagation();return!1});"none"==tb_options.wheel_bg&&jQuery("#TB_overlay").bind("mousewheel.thickbox DOMMouseScroll.thickbox",function(a){a.stopImmediatePropagation();
return!1});tb_options.move_img&&jQuery("#TB_window").bind("mousedown.thickbox",function(a){return tb_move(a,"image")});tb_options.resize_img&&(tb_resize_init(),jQuery("#TB_Resize").bind("mousedown.thickbox",function(a){return tb_resize(a,"image")}));"none"!=tb_options.effect_cap&&(jQuery("#TB_Image").css("margin",jQuery("#TB_Image").css("marginLeft")),jQuery("#TB_window").bind("mouseenter.thickbox",function(){tb_hover(jQuery("#TB_CaptionBar"),tb_options.effect_cap)}).bind("mouseleave.thickbox",function(){tb_hover(jQuery("#TB_CaptionBar"),
tb_options.effect_cap,!0)}));tb_reposition(f);jQuery(window).bind("resize.thickbox orientationchange.thickbox",function(){tb_reposition(f)});jQuery("#TB_load").remove();("close"==tb_options.click_img||!b&&"close"==tb_options.click_end)&&jQuery("#TB_ImageOff").click(tb_remove);tb_open()};imgPreloader.src=c}else{var g=c.replace(/^[^\?]+\??/,""),h=tb_parseQuery(g);"object"==typeof a&&(a=tb_caption(a,tb_options.ref_title));TB_Title="<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+a+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='"+
thickboxL10n.close+"'><img src='"+tb_closeImage+"' /></a></div></div>";if(-1!=c.indexOf("TB_iframe"))if(urlNoQuery=c.split(/[?&]TB_/),jQuery("#TB_iframeContent").remove(),TB_Iframe="<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(1E3*Math.random())+"' onload='tb_showIframe()'>"+thickboxL10n.noiframes+"</iframe>","true"!=h.modal)switch(tb_options.position_title){case "top":jQuery("#TB_window").append(TB_Title+TB_Iframe).addClass("TB_iframeContent TB_titleTop");
break;case "bottom":jQuery("#TB_window").append(TB_Iframe+TB_Title).addClass("TB_iframeContent TB_titleBottom");break;case "none":jQuery("#TB_window").append(TB_Iframe).addClass("TB_iframeContent")}else jQuery("#TB_overlay").unbind(),jQuery("#TB_window").append(TB_Iframe).addClass("TB_iframeContent");else if("block"!=jQuery("#TB_window").css("display"))if(TB_Ajax="<div id='TB_ajaxContent'></div>","true"!=h.modal)switch(tb_options.position_title){case "top":jQuery("#TB_window").append(TB_Title+TB_Ajax).addClass("TB_ajaxContent TB_titleTop");
break;case "bottom":jQuery("#TB_window").append(TB_Ajax+TB_Title).addClass("TB_ajaxContent TB_titleBottom");break;case "none":jQuery("#TB_window").append(TB_Ajax).addClass("TB_ajaxContent TB_titleNone")}else jQuery("#TB_overlay").unbind(),jQuery("#TB_window").append(TB_Ajax).addClass("TB_ajaxContent"),jQuery("#TB_ajaxContent").addClass("TB_modal");else jQuery("#TB_ajaxContent")[0].scrollTop=0,jQuery("#TB_ajaxWindowTitle").html(a);jQuery("#TB_closeWindowButton").click(tb_remove);if(-1!=c.indexOf("TB_inline"))jQuery("#TB_ajaxContent").append(jQuery("#"+
h.inlineId).children()),jQuery("#TB_window").bind("tb_unload",function(){jQuery("#"+h.inlineId).append(jQuery("#TB_ajaxContent").children())}),tb_reposition_html(c,h),jQuery(window).bind("resize.thickbox orientationchange.thickbox",function(){tb_reposition_html(c,h)}),jQuery("#TB_load").remove(),tb_open(),tb_roundCorner("iframe");else if(-1!=c.indexOf("TB_iframe"))tb_reposition_html(c,h),jQuery(window).bind("resize.thickbox orientationchange.thickbox",function(){tb_reposition_html(c,h)}),(!("onload"in
jQuery("#TB_iframeContent")[0])&&"function"!=typeof jQuery("#TB_iframeContent")[0].onload||".pdf"==f)&&tb_showIframe();else{var v=-1==c.indexOf("?")?"?":"&";jQuery("#TB_ajaxContent").load(c+=v+"random="+(new Date).getTime(),function(){tb_reposition_html(c,h);jQuery(window).bind("resize.thickbox orientationchange.thickbox",function(){tb_reposition_html(c,h)});jQuery("#TB_load").remove();tb_open();tb_roundCorner("ajax")})}tb_options.move_html&&jQuery("#TB_window").bind("mousedown.thickbox",function(a){return tb_move(a,
-1!=c.indexOf("TB_iframe")?"iframe":"ajax")});tb_options.resize_html&&(tb_resize_init(),jQuery("#TB_Resize").bind("mousedown.thickbox",function(a){return tb_resize(a,-1!=c.indexOf("TB_iframe")?"iframe":"ajax")}));"none"!=tb_options.effect_title&&(jQuery("#TB_title").addClass("hover"),jQuery("#TB_window").bind("mouseenter.thickbox",function(){tb_hover(jQuery("#TB_title"),tb_options.effect_title)}).bind("mouseleave.thickbox",function(){tb_hover(jQuery("#TB_title"),tb_options.effect_title,!0)}));"true"!=
h.modal&&jQuery(document).bind("keyup.thickbox",function(a){if(-1!=jQuery.inArray(a.which,tb_options.keys_close))return a.stopImmediatePropagation(),jQuery(document).triggerHandler("wp_CloseOnEscape",[{event:a,what:"thickbox",cb:tb_remove}])||tb_remove(),!1})}}catch(w){tb_options.debug&&alert(w)}}
function tb_open(){"hidden"==jQuery("#TB_window").css("visibility")&&jQuery("#TB_window").css("visibility","visible");var a=jQuery("#TB_window").is(".TB_Transition")?tb_options.effect_trans:tb_options.effect_open;tb_effectView(a,!1);var c=function(){tb_effectView(a)};switch(a){case "zoom":jQuery("#TB_window").height(jQuery("#TB_window").height());notSupportedPositionFixed&&"relative"!=jQuery("body").css("position")&&jQuery("#TB_window").css({marginTop:-jQuery("#TB_window").height()/2,top:jQuery(window).height()/
2+jQuery(document).scrollTop()});jQuery("#TB_Image").hide().show(tb_options.effect_speed);jQuery("#TB_window").show(tb_options.effect_speed,c);break;case "slide":notSupportedPositionFixed&&"relative"!=jQuery("body").css("position")&&jQuery("#TB_window").css({marginTop:-jQuery("#TB_window").height()/2,top:jQuery(window).height()/2+jQuery(document).scrollTop()});jQuery("#TB_window").slideDown(tb_options.effect_speed,c);break;case "fade":jQuery("#TB_window").fadeIn(tb_options.effect_speed,c);break;default:jQuery("#TB_window").show()}"none"==
jQuery("#TB_window").css("display")&&jQuery("#TB_window").css("display","block");jQuery("#TB_title").height(Math.max(jQuery("#TB_title").height(),jQuery("#TB_ajaxWindowTitle").height()+13));notSupportedPositionFixed&&jQuery("#TB_window").css({position:"absolute",marginTop:-parseInt(jQuery("#TB_window")[0].offsetHeight/2)+(TBWindowMargin=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)+"px"})}
function tb_roundCorner(a){var c=jQuery("#TB_window")[0].currentStyle||document.defaultView.getComputedStyle(jQuery("#TB_window")[0],""),b=c.borderTopLeftRadius;if(0<parseInt(b))if("transparent"!=jQuery("#TB_window").css("backgroundColor")&&"rgba(0, 0, 0, 0)"!=jQuery("#TB_window").css("backgroundColor")&&jQuery("#TB_window").css("backgroundColor",0<parseInt(c.borderTopWidth)?c.borderTopColor:"transparent"),"iframe"==a){if(jQuery.browser.safari||jQuery.browser.webkit){var c=jQuery("#TB_iframeContent"),
d=jQuery("#TB_iframeContent").contents(),a=0==d.length||c.width()<d.width(),c=0==d.length||c.height()<d.height();("top"==tb_options.position_title||"none"==tb_options.position_title)&&(a||c)&&jQuery("#TB_iframeContent").css("paddingBottom",b);("bottom"==tb_options.position_title||"none"==tb_options.position_title)&&c&&jQuery("#TB_iframeContent").css("paddingTop",b)}}else if("ajax"==a){c=jQuery("#TB_ajaxContent")[0];a=c.scrollWidth>c.clientWidth;c=c.scrollHeight>c.clientHeight;if(("top"==tb_options.position_title||
"none"==tb_options.position_title)&&(a||c))jQuery("#TB_ajaxContent").css("marginBottom",b).after("<div id='TB_ajaxContentMarginBottom'></div>"),"none"==tb_options.position_title&&a?jQuery("#TB_ajaxContent").css({borderBottomLeftRadius:0,borderBottomRightRadius:0}):jQuery("#TB_ajaxContent").css("borderRadius",0),jQuery("#TB_ajaxContentMarginBottom").css({height:b,borderBottomLeftRadius:b,borderBottomRightRadius:b});if(("bottom"==tb_options.position_title||"none"==tb_options.position_title)&&c)jQuery("#TB_ajaxContent").css({marginTop:b,
borderRadius:0}).after("<div id='TB_ajaxContentMarginTop'></div>"),jQuery("#TB_ajaxContentMarginTop").css({height:b,borderTopLeftRadius:b,borderTopRightRadius:b})}}function tb_effectView(a,c){"none"!=a&&(("boolean"==typeof c?c:1)?jQuery("#TB_ImageClick").show():jQuery("#TB_ImageClick").hide())}function tb_showIframe(){jQuery("#TB_load").remove();tb_open();tb_roundCorner("iframe")}
function tb_remove(){tb_effectView(tb_options.effect_close,!1);var a=function(){jQuery("#TB_window,#TB_overlay,#TB_HideSelect").trigger("tb_unload").unbind().remove();notSupportedPositionFixed&&(jQuery("body","html").css({height:"auto",width:"auto"}),jQuery("html").css("overflow",""))};switch(tb_options.effect_close){case "zoom":jQuery("#TB_Image").hide(tb_options.effect_speed);jQuery("#TB_window").hide(tb_options.effect_speed,a);break;case "slide":jQuery("#TB_window").slideUp(tb_options.effect_speed,
a);break;case "fade":jQuery("#TB_window").fadeOut(tb_options.effect_speed,a);break;default:a()}jQuery("#TB_load").remove();jQuery(document).add(window).unbind(".thickbox");return!1}
function tb_position(){jQuery("#TB_window").css({width:"",height:"",left:"",top:""});var a=TB_WIDTH+jQuery("#TB_window").outerWidth()-jQuery("#TB_window").width(),c=TB_HEIGHT+jQuery("#TB_window").outerHeight()-jQuery("#TB_window").height(),b=-parseInt(a/2,10),d=-parseInt(c/2,10),e=notSupportedPositionFixed;!e&&"absolute"==jQuery("#TB_window").css("position")&&(b+=jQuery(document).scrollLeft(),d+=jQuery(document).scrollTop());jQuery("#TB_window").css({marginLeft:b+"px",width:TB_WIDTH+"px"});e||jQuery("#TB_window").css({marginTop:d+
"px"});"relative"==jQuery("body").css("position")?(d=tb_getPageSize(),e&&(b=parseInt((d[0]-a)/2,10)+jQuery(document).scrollLeft(),d=parseInt((d[1]-c)/2,10)+jQuery(document).scrollTop(),jQuery("#TB_window").css({marginLeft:b+"px",marginTop:d+"px",top:"0",left:"0"}))):e&&jQuery("#TB_window").css({marginTop:-parseInt(jQuery("#TB_window")[0].offsetHeight/2)+(TBWindowMargin=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)+"px"})}
function tb_reposition(a){jQuery("#TB_window").width(jQuery(window).width());0==jQuery("#TB_Image").height()&&jQuery("#TB_Image").height(imgPreloader.height);var c=tb_getSize(jQuery("#TB_window"),"border"),b=tb_getSize(jQuery("#TB_window")),d=tb_getSize(jQuery("#TB_Image"),"margin"),e=tb_getSize(jQuery("#TB_Image")),f=tb_getPageSize(),g=f[0]<=tb_options.small_width||f[1]<=tb_options.small_height?0:2*tb_options.margin_win_img,f=jQuery(window).width()-(c[0]-b[0]+d[0]-e[0])-g,c=jQuery(window).height()-
(c[1]-e[1])-g,g=a.width?Math.min(1*a.width,imgPreloader.width):imgPreloader.width,h=a.height?Math.min(1*a.height,imgPreloader.height):imgPreloader.height;tb_fitWidth=f;tb_fitHeight=Math.round(h*(f/g));tb_fitHeight>c&&(tb_fitWidth=Math.round(tb_fitWidth*(c/tb_fitHeight)),tb_fitHeight=c);if(tb_fitToWindow=tb_options.auto_resize_img&&(g>f||h>c))g=tb_fitWidth,h=tb_fitHeight,jQuery("#TB_window a.scalable").attr("title",thickboxL10n.actual);jQuery("#TB_Image").width(g).height(h);TB_WIDTH=g+(d[0]-e[0]);
TB_HEIGHT=h+(b[1]-e[1]);TB_WIDTH<1*a.width&&(TB_WIDTH=1*a.width,jQuery("#TB_Image").css({marginLeft:"auto",marginRight:"auto"}));TB_HEIGHT<1*a.height&&(TB_HEIGHT=1*a.height);jQuery("#TB_ImageClick > a").height(tb_getSize(jQuery("#TB_Image"),"margin")[1]);tb_position()}
function tb_reposition_html(a,c){var b=tb_getSize(jQuery("#TB_window"),"border"),d=tb_getSize(jQuery("#TB_window")),e="none"==tb_options.effect_title?tb_getSize(jQuery("#TB_title"))[1]:0,f=tb_getPageSize(),g=f[0]<=tb_options.small_width||f[1]<=tb_options.small_height?0:2*tb_options.margin_win_html,f=jQuery(window).width()-(b[0]-d[0])-g,b=jQuery(window).height()-(b[1]-d[1])-g;-1!=a.indexOf("TB_iframe")?(f-=2*("\v"=="v"?10:8),b-=2*("\v"=="v"?15:8)+e):(d=tb_getSize(jQuery("#TB_ajaxContent"),"padding"),
g=tb_getSize(jQuery("#TB_ajaxContent")),f-=d[0]-g[0],b-=d[1]-g[1]+e);TB_WIDTH=c.width?Math.min(1*c.width,f):tb_options.auto_resize_html?f:tb_options.win_width;TB_HEIGHT=c.height?Math.min(1*c.height,b):tb_options.auto_resize_html?b:tb_options.win_height;ajaxContentW=TB_WIDTH;ajaxContentH=TB_HEIGHT;-1!=a.indexOf("TB_iframe")?(ajaxContentW+=2*("\v"=="v"?10:8),ajaxContentH+=2*("\v"=="v"?15:8),jQuery("#TB_iframeContent").attr("style","width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;")):"block"!=jQuery("#TB_window").css("display")?
jQuery("#TB_ajaxContent").attr("style","width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;"):(jQuery("#TB_ajaxContent")[0].style.width=ajaxContentW+"px",jQuery("#TB_ajaxContent")[0].style.height=ajaxContentH+"px");-1!=a.indexOf("TB_iframe")?(TB_WIDTH+=2*("\v"=="v"?10:8),TB_HEIGHT+=2*("\v"=="v"?15:8)+e):(d=tb_getSize(jQuery("#TB_ajaxContent"),"padding"),g=tb_getSize(jQuery("#TB_ajaxContent")),TB_WIDTH+=d[0]-g[0],TB_HEIGHT+=d[1]-g[1]+e);tb_position()}
function tb_parseQuery(a){var c={};if(!a)return c;for(var a=a.substring(a.indexOf("?")+1),a=a.split(/[;&]/),b=0;b<a.length;b++){var d=a[b].split("=");if(d&&2==d.length){var e=unescape(d[0]),d=unescape(d[1]),d=d.replace(/\+/g," ");c[e]=d}}return c}function tb_getPageSize(){var a=document.documentElement;return arrayPageSize=[window.innerWidth||self.innerWidth||a&&a.clientWidth||document.body.clientWidth,window.innerHeight||self.innerHeight||a&&a.clientHeight||document.body.clientHeight]}
function tb_detectMacXFF(){var a=navigator.userAgent.toLowerCase();if(-1!=a.indexOf("mac")&&-1!=a.indexOf("firefox"))return!0}function tb_move(a,c){if("image"==c){if(jQuery(a.target).parent().is("#TB_prev, #TB_next, #TB_closeWindowButton"))return!0}else if(!jQuery(a.target).closest("#TB_title").length||jQuery(a.target).parent().is("#TB_closeWindowButton"))return!0;return tb_drag(a,c,"move")}
function tb_resize(a,c){var b;switch(a.target.id){case "TB_ResizeN":b="n-resize";break;case "TB_ResizeE":b="e-resize";break;case "TB_ResizeW":b="w-resize";break;case "TB_ResizeS":b="s-resize";break;case "TB_ResizeNE":b="ne-resize";break;case "TB_ResizeNW":b="nw-resize";break;case "TB_ResizeSE":b="se-resize";break;case "TB_ResizeSW":b="sw-resize";break;default:return!0}return tb_drag(a,c,b)}
function tb_resize_init(){jQuery("#TB_window").append("<div id='TB_Resize'><div id='TB_ResizeN'></div><div id='TB_ResizeE'></div><div id='TB_ResizeW'></div><div id='TB_ResizeS'></div><div id='TB_ResizeNE'></div><div id='TB_ResizeNW'></div><div id='TB_ResizeSE'></div><div id='TB_ResizeSW'></div></div>");notSupportedPositionFixed&&jQuery("#TB_ResizeE, #TB_ResizeW").height(jQuery("#TB_window").height())}
function tb_drag(a,c,b){if(1!=a.which)return!0;TB_THRESHOLD=5;MIN_WIDTH=MIN_HEIGHT=100;var d=jQuery("#TB_window").offset().left-parseInt(jQuery("#TB_window").css("marginLeft")),e=jQuery("#TB_window").offset().top-parseInt(jQuery("#TB_window").css("marginTop"));!notSupportedPositionFixed&&"absolute"!=jQuery("#TB_window").css("position")&&(d-=jQuery(document).scrollLeft(),e-=jQuery(document).scrollTop());var f=a.clientX,g=a.clientY,h=!1,v=jQuery("#TB_window, #TB_overlay, "+("image"==c?"#TB_window a":
"#TB_closeWindowButton")),w="move"==b||"w-resize"==b||"nw-resize"==b||"sw-resize"==b,z="move"==b||"n-resize"==b||"ne-resize"==b||"nw-resize"==b,A="move"!=b&&"n-resize"!=b&&"s-resize"!=b,B="move"!=b&&"e-resize"!=b&&"w-resize"!=b,y="ne-resize"==b||"nw-resize"==b||"se-resize"==b||"sw-resize"==b;if(y)var u=jQuery("#TB_window").width()/jQuery("#TB_window").height();if("move"!=b){var r=jQuery("#TB_window").width(),t=jQuery("#TB_window").height(),i=jQuery("image"==c?"#TB_Image":"iframe"==c?"#TB_iframeContent":
"#TB_ajaxContent"),k=i.width(),l=i.height(),m="e-resize"==b||"ne-resize"==b||"se-resize"==b?1:-1,p="s-resize"==b||"se-resize"==b||"sw-resize"==b?1:-1;if(notSupportedPositionFixed)var s=jQuery("#TB_window").css("marginTop")}jQuery(document).bind("mousemove.thickbox",function(a,j,q){var j=j?j:a.clientX,q=q?q:a.clientY,a=j-f,n=q-g;if(!h&&(a=a>TB_THRESHOLD?a-TB_THRESHOLD:a<-TB_THRESHOLD?a+TB_THRESHOLD:0,n=n>TB_THRESHOLD?n-TB_THRESHOLD:n<-TB_THRESHOLD?n+TB_THRESHOLD:0,0<Math.abs(a)||0<Math.abs(n)))h=!0,
f=j,g=q,v.css("cursor",b);if(h){y&&(j=r+a*m,q=t+n*p,j/=q,u>j?n=Math.round(a/u)*m*p:u<j&&(a=Math.round(n*u)*m*p));var x=skipMoveY=!1;A&&(j=r+a*m,j<MIN_WIDTH?x=!0:(jQuery("#TB_window").width(j),i.width(k+a*m)));B&&(q=t+n*p,q<MIN_HEIGHT?skipMoveY=!0:(jQuery("#TB_window").height(q),i.height(l+n*p),"image"==c&&jQuery("#TB_ImageClick > a").height(jQuery("#TB_Image").outerHeight(!0)),notSupportedPositionFixed&&jQuery("#TB_window").css("marginTop",s)));w&&!x&&jQuery("#TB_window").css("left",d+a);z&&!skipMoveY&&
jQuery("#TB_window").css("top",e+n)}return!1});jQuery(document).bind("mouseup.thickbox",function(a){jQuery(document).unbind("mousemove.thickbox mouseup.thickbox");"iframe"==c&&jQuery("#TB_iframeContent").contents().unbind("mousemove.thickbox mouseup.thickbox");if(!h)return!0;v.css("cursor","");if(jQuery.browser.opera)return!1;var b=jQuery(a.target);if(b.is("html"))return!1;b.is(".TB_ImageLeft, .TB_ImageRight")||(b=b.parent());if((a=b.data("events"))&&a.click){var d=[];jQuery.each(a.click,function(a,
b){d[d.length]=b.handler||b})}b.unbind("click").one("click",function(a){a.stopImmediatePropagation();if(d)for(a=0;a<d.length;a++)b.click(d[a]);return!1});return!1});"iframe"==c&&jQuery("#TB_iframeContent").contents().bind("mousemove.thickbox",function(a){a.clientX+=jQuery("#TB_iframeContent").offset().left-jQuery(document).scrollLeft();a.clientY+=jQuery("#TB_iframeContent").offset().top-jQuery(document).scrollTop();jQuery(document).trigger("mousemove.thickbox",[a.clientX,a.clientY])}).bind("mouseup.thickbox",
function(){jQuery(document).trigger("mouseup.thickbox")});return!1}
function tb_getSize(a,c){var b,d,e=function(){switch(c){case "padding":b=a.innerWidth();d=a.innerHeight();break;case "border":b=a.outerWidth();d=a.outerHeight();break;case "margin":b=a.outerWidth(!0);d=a.outerHeight(!0);break;default:b=a.width(),d=a.height()}};"none"==jQuery("#TB_window").css("display")&&(0<tb_versionCompare("1.4.4")||0<tb_versionCompare("1.6.2")&&c)?jQuery.swap(jQuery("#TB_window")[0],{position:"absolute",visibility:"hidden",display:"block"},e):e();return[b,d]}
function tb_versionCompare(a,c){c=c||jQuery.fn.jquery;if(a!=c)for(var b=a.split("."),d=c.split("."),e=0;e<b.length||e<d.length;e++){if(b[e]&&!d[e]||b[e]>d[e])return 1;if(!b[e]&&d[e]||b[e]<d[e])return-1}return 0}
function tb_hover(a,c,b){!b&&"visible"!=a.css("visibility")&&a.css({visibility:"visible",display:"none"});switch(c){case "zoom":b?a.hide(tb_options.effect_speed):a.show(tb_options.effect_speed);break;case "slide":b?a.slideUp(tb_options.effect_speed):a.slideDown(tb_options.effect_speed);break;case "fade":b?a.fadeOut(tb_options.effect_speed):a.fadeIn(tb_options.effect_speed)}};;
(function ($) {

  Drupal.behaviors.captcha = {
    attach: function (context) {

      // Turn off autocompletion for the CAPTCHA response field.
      // We do it here with JavaScript (instead of directly in the markup)
      // because this autocomplete attribute is not standard and
      // it would break (X)HTML compliance.
      $("#edit-captcha-response").attr("autocomplete", "off");

    }
  };

  Drupal.behaviors.captchaAdmin = {
    attach: function (context) {
      // Add onclick handler to checkbox for adding a CAPTCHA description
      // so that the textfields for the CAPTCHA description are hidden
      // when no description should be added.
      // @todo: div.form-item-captcha-description depends on theming, maybe
      // it's better to add our own wrapper with id (instead of a class).
      $("#edit-captcha-add-captcha-description").click(function() {
        if ($("#edit-captcha-add-captcha-description").is(":checked")) {
          // Show the CAPTCHA description textfield(s).
          $("div.form-item-captcha-description").show('slow');
        }
        else {
          // Hide the CAPTCHA description textfield(s).
          $("div.form-item-captcha-description").hide('slow');
        }
      });
      // Hide the CAPTCHA description textfields if option is disabled on page load.
      if (!$("#edit-captcha-add-captcha-description").is(":checked")) {
        $("div.form-item-captcha-description").hide();
      }
    }

  };

})(jQuery);
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
