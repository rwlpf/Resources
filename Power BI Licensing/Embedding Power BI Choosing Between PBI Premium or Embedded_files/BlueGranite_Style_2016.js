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

/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});

$(document).ready(function(){
    
    var winH = $(window).height();
    
    if ( winH > 768 ) {
        // Match Height
        $('.threeCol-row .threeCol-col .textWrap').matchHeight();
        $('.featuredResource .innerWrap .row-fluid > div').matchHeight();
    };
    
    $('.resEvents .row-fluid > .span6').matchHeight();
    $('.solution-item').matchHeight();
    $('.hs_cos_wrapper_type_post_listing ul li').matchHeight();
    
    $('.res-menu').hide();
    $('.res-menu').css('height',winH+'px');
    $('.res-trigger').click(function(){
        $(this).toggleClass('active');
        $('.res-menu').slideToggle(200);
    });
    
    $('.menu-trigger').click(function(){
        $(this).toggleClass('active');
        $('.mainNav').slideToggle(200);
        $('.resNav').slideToggle(200);
    });
    
    var headerH = $('.header-container-wrapper').outerHeight();
    var heroH = $('.heroWrap').outerHeight();
    var totalH = headerH + heroH;
    var subNavH = $('.subNav').outerHeight();
    var subTotalH = subNavH + headerH + 20;
    
    $(window).scroll(function(){
		if ($(this).scrollTop() > totalH) {
			$('.subNav').addClass("fixed").css('top',headerH+'px');
		} else {
			$('.subNav').removeClass("fixed").css('top','auto');
		}
	});
	$('body').click(function(){
        $('h3').removeClass('active')
        $('.topic-dropdown').find('.widget-module').hide();
    })
	$('.topic-dropdown').each(function() {
	    
        var $this = $(this)
        var $styledSelect = $this.find('h3');
        //jQuerystyledSelect.text(jQuerythis.find('filter').eq(0).text());
        var $listItems = $('.topic-dropdown .widget-module li');
        $listItems.on( 'click', function(e) {
			var litext = $(this).find('a').text();
			$(this).parent().hide();
			$('h3').text(litext);
			e.stopPropagation();
		});
        $styledSelect.on( 'click', function(e) {
			e.stopPropagation();
			if (jQuery('h3.active').hasClass('active')) {
				jQuery(this).removeClass('active').next('.widget-module').hide();
			}else{
				$(this).toggleClass('active');
				$(this).next('.widget-module').toggle();
			};
			
		}); 
    });
    
    
    
});

}
/*
     FILE ARCHIVED ON 00:13:28 Jun 07, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:13:58 Jul 12, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 128.459
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.055
  cdx.remote: 0.047
  esindex: 0.008
  LoadShardBlock: 103.152 (3)
  PetaboxLoader3.datanode: 118.06 (4)
  load_resource: 295.927
  PetaboxLoader3.resolve: 86.296
*/