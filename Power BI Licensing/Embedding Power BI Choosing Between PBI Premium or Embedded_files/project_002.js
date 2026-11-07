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

"use strict";function hs_i18n_log(n){console.log("i18n_getmessage: "+n)}function hs_i18n_substituteStrings(n,e){var s=n.match(new RegExp("\\$[0-9]+","g"));if(null==s)return n;for(var r=0;r<s.length;r++){var l=s[r],t=parseInt(l.replace("$",""));t<=0||null==e||t>e.length?hs_i18n_log("no substitution string at index "+t+" found for string '"+n+"'"):n=n.replace(l,e[t-1])}return n}function hs_i18n_insertPlaceholders(n,e){var s=n.message,r=s.match(new RegExp("\\$\\w+\\$","g"));if(null==r)return s;for(var l=0;l<r.length;l++){var t=r[l],o=t.replace(new RegExp("\\$","g"),"").toLowerCase(),a=n.placeholders[o];null==a&&hs_i18n_log("no placeholder found for '"+o+"'");s=s.replace(t,a.content)}return(s=hs_i18n_substituteStrings(s,e)).replace(/\$\$/g,"$")}function hs_i18n_getMessage(n,e){if(null==n){hs_i18n_log("no messages found");return""}var s=arguments[2];if(null==s||0==s.length||null==s[0]){hs_i18n_log("no message name passed");return""}var r=s[0],l=e.split("-")[0],t=n[e]||n[l];if(null==t){hs_i18n_log("no messages found for language '"+e+"'");return""}var o=t[r]||n[l][r];if(null==o){hs_i18n_log("no message found for language '"+e+"' named '"+r+"'");return""}return null==o.placeholders?o.message||"":hs_i18n_insertPlaceholders(o,s[1])}

}
/*
     FILE ARCHIVED ON 00:13:10 Jun 07, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:13:57 Jul 12, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 95.118
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.079
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 59.212 (3)
  PetaboxLoader3.datanode: 73.245 (4)
  load_resource: 89.814
  PetaboxLoader3.resolve: 51.723
*/