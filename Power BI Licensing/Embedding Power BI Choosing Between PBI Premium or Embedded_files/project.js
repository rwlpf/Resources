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

!function(){var e=document.querySelectorAll(".hs-menu-wrapper.flyouts > ul > li"),t=document.querySelectorAll(".hs-menu-wrapper.flyouts > ul > li > ul > li");Array.prototype.forEach.call(e,function(e,t){e.querySelector("a").addEventListener("focus",function(e){var t=document.querySelector(".hs-menu-wrapper.flyouts > ul > li > ul.open-menu-list"),r=this.parentNode.querySelector("ul");if(t){t.removeAttribute("style");t.classList.remove("open-menu-list")}t&&t.parentNode.querySelector("a").setAttribute("aria-expanded","false");if(r){r.style.visibility="visible";r.style.opacity="1";r.style.display="block";r.classList.add("open-menu-list")}r&&this.setAttribute("aria-expanded","true")});Array.prototype.forEach.call(e.querySelectorAll("ul li:last-child > a"),function(e,t){e.addEventListener("blur",function(e){if(!this.parentNode.querySelector("ul")){var t=this.parentNode.parentNode;if(t){t.removeAttribute("style");t.classList.remove("open-menu-list")}this.parentNode.parentNode.parentNode.querySelector("a").setAttribute("aria-expanded","false")}})});e.querySelector("a").addEventListener("mouseout",function(e){var t=document.querySelector(".hs-menu-wrapper.flyouts > ul > li > ul.open-menu-list");if(t){t.removeAttribute("style");t.classList.remove("open-menu-list")}t&&t.parentNode.querySelector("a").setAttribute("aria-expanded","false")})});Array.prototype.forEach.call(t,function(e,t){e.querySelector("a").addEventListener("focus",function(e){var t=document.querySelector(".hs-menu-wrapper.flyouts > ul > li > ul ul.open-menu-list"),r=this.parentNode.querySelector("ul");if(t){t.removeAttribute("style");t.classList.remove("open-menu-list")}t&&t.querySelector("a").setAttribute("aria-expanded","false");if(r){r.style.visibility="visible";r.style.opacity="1";r.style.display="block";r.classList.add("open-menu-list")}r&&this.parentNode.querySelector("a").setAttribute("aria-expanded","true")});e.querySelector("a").addEventListener("mouseout",function(e){var t=document.querySelector(".hs-menu-wrapper.flyouts > ul > li > ul ul.open-menu-list");if(t){t.removeAttribute("style");t.classList.remove("open-menu-list")}t&&t.querySelector("a").setAttribute("aria-expanded","false")})})}();

}
/*
     FILE ARCHIVED ON 00:13:13 Jun 07, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:13:56 Jul 12, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 123.416
  exclusion.robots: 0.16
  exclusion.robots.policy: 0.141
  RedisCDXSource: 0.899
  esindex: 0.013
  LoadShardBlock: 96.296 (3)
  PetaboxLoader3.datanode: 72.281 (4)
  PetaboxLoader3.resolve: 65.776 (2)
  load_resource: 60.65
*/