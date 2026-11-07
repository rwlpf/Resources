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

$(document).ready(function(){
  
//   MainMenu Js
  $(".main-menu").addClass("js-enabled");
  $(".main-menu .hs-menu-flow-horizontal").before('<a class="mobile-trigger"><i></i></a>');
  $(".main-menu .hs-item-has-children > a").after('<span class="child-triggerm"><span></span></span>');

  $("a.mobile-trigger").click(function() {
    $(this).next(".main-menu .hs-menu-flow-horizontal").slideToggle(250);
    $("body").toggleClass("mobile-open");
    $("span.child-triggerm").removeClass("child-open");
    $(".hs-menu-children-wrapper").slideUp(300);
    return false
  });

  $(".main-menu span.child-triggerm").click(function() {
    $(this).parent().siblings(".hs-item-has-children").find("span.child-triggerm").removeClass("child-open");
    $(this).parent().siblings(".hs-item-has-children").find(".hs-menu-children-wrapper").slideUp(250);
    $(this).next(".hs-menu-children-wrapper").slideToggle(250);
    $(this).next(".hs-menu-children-wrapper").children(".hs-item-has-children").find(".hs-menu-children-wrapper").slideUp(250);
    $(this).next(".hs-menu-children-wrapper").children(".hs-item-has-children").find("span.child-triggerm").removeClass("child-open");
    $(this).toggleClass("child-open");
    return false
  });
  
  if($(window).width() < 768 ){
    $('.header-top-menu').insertAfter('.row-fluid .main-menu .hs-menu-flow-horizontal > ul li.hs-menu-depth-1:last-child');
  }
  
  $('.search-input .hs-search-field').after('<span class="search-icon"></span>');
  $('.search-icon').click(function(){
    $(this).toggleClass('active');
    $('.search-menu-box').slideToggle();
   
  });
  
  $('.bgmain').each(function(){   
    var imgSrc = $(this).find('.bgimg img').attr('src');
    $(this).css('background-image', 'url(' + imgSrc + ')');
    $('.bgimg').hide();
  });
  

  if ($('.header-section').length > 0) {
      $('body').addClass('body-v2');
      var header_height = $('.header-section').outerHeight();
     $('.body-container-wrapper').css('padding-top', header_height+'px');
  } 
  
  
});	

$(window).load(function() {
  equalheight('.equalheight');

  if($(window).width() < 768 ){
    $('.featured-slider .featured-box').each(function(i){
      var Content_fut = $(this).find('.featured-content');
      $(this).find('.featured-image').insertBefore(Content_fut);
    });
  }
  
});

$(window).resize(function(){
  equalheight('.equalheight');
});


equalheight = function(container){
var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}


}
/*
     FILE ARCHIVED ON 00:13:30 Jun 07, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:13:53 Jul 12, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 150.583
  exclusion.robots: 0.138
  exclusion.robots.policy: 0.125
  cdx.remote: 0.09
  esindex: 0.014
  LoadShardBlock: 87.016 (3)
  PetaboxLoader3.datanode: 115.393 (4)
  load_resource: 344.989
  PetaboxLoader3.resolve: 307.578
*/