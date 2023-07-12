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

(function(g){var window=this;'use strict';var Y7=function(a){g.wl(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.$a()).toString(36));return a},Z7=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Kga(a.u,b,c)},Kob=function(a){if(a instanceof g.uo)return a;
if("function"==typeof a.Ak)return a.Ak(!1);if(g.Sa(a)){var b=0,c=new g.uo;c.next=function(){for(;;){if(b>=a.length)return g.r3;if(b in a)return g.vo(a[b++]);b++}};
return c}throw Error("Not implemented");},Lob=function(a,b,c){if(g.Sa(a))g.bc(a,b,c);
else for(a=Kob(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},Mob=function(a,b){var c=[];
Lob(b,function(d){try{var e=g.Yq.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.ula(e)&&c.push(d)},a);
return c},Nob=function(a,b){Mob(a,b).forEach(function(c){g.Yq.prototype.remove.call(this,c)},a)},Oob=function(a){if(a.oa){if(a.oa.locationOverrideToken)return{locationOverrideToken:a.oa.locationOverrideToken};
if(null!=a.oa.latitudeE7&&null!=a.oa.longitudeE7)return{latitudeE7:a.oa.latitudeE7,longitudeE7:a.oa.longitudeE7}}return null},Pob=function(a,b){g.Gb(a,b)||a.push(b)},Qob=function(a){var b=0,c;
for(c in a)b++;return b},Rob=function(a,b){return g.ed(a,b)},Sob=function(a){try{return g.Ma.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},$7=function(a){if(g.Ma.JSON)try{return g.Ma.JSON.parse(a)}catch(b){}return Sob(a)},Tob=function(a,b,c,d){var e=new g.ol(null);
a&&g.pl(e,a);b&&g.ql(e,b);c&&g.rl(e,c);d&&(e.B=d);return e},Uob=function(){this.j=a8();
this.j.Ij("/client_streamz/youtube/living_room/mdx/channel/opened",{Wd:3,Vd:"channel_type"})},Vob=function(a,b){a.j.yk("/client_streamz/youtube/living_room/mdx/channel/opened",b)},Wob=function(){this.j=a8();
this.j.Ij("/client_streamz/youtube/living_room/mdx/channel/closed",{Wd:3,Vd:"channel_type"})},Xob=function(a,b){a.j.yk("/client_streamz/youtube/living_room/mdx/channel/closed",b)},Yob=function(){this.j=a8();
this.j.Ij("/client_streamz/youtube/living_room/mdx/channel/message_received",{Wd:3,Vd:"channel_type"})},Zob=function(a,b){a.j.yk("/client_streamz/youtube/living_room/mdx/channel/message_received",b)},$ob=function(){this.j=a8();
this.j.Ij("/client_streamz/youtube/living_room/mdx/channel/error",{Wd:3,Vd:"channel_type"})},apb=function(a,b){a.j.yk("/client_streamz/youtube/living_room/mdx/channel/error",b)},bpb=function(){this.j=a8();
this.j.Ij("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},cpb=function(){this.j=a8();
this.j.Ij("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},b8=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.compatibleSenderThemes=new Set;this.experiments=new Set;this.theme="u";new g.Hq;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=
a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",dpb(this,a.capabilities||""),epb(this,a.compatibleSenderThemes||""),fpb(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=
a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},dpb=function(a,b){a.capabilities.clear();
g.zo(b.split(","),g.Za(Rob,gpb)).forEach(function(c){a.capabilities.add(c)})},epb=function(a,b){a.compatibleSenderThemes.clear();
g.zo(b.split(","),g.Za(Rob,hpb)).forEach(function(c){a.compatibleSenderThemes.add(c)})},fpb=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},c8=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},d8=function(a,b){return!!b&&(a.id==b||a.uuid==b)},ipb=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},jpb=function(a){return new c8(a)},kpb=function(a){return Array.isArray(a)?g.Gm(a,jpb):[]},e8=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},lpb=function(a){return Array.isArray(a)?"["+g.Gm(a,e8).join(",")+"]":"null"},mpb=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},npb=function(a){return g.Gm(a,function(b){return{key:b.id,
name:b.name}})},opb=function(a,b){return g.Eb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},f8=function(a,b){return g.Eb(a,function(c){return d8(c,b)})},ppb=function(){var a=(0,g.HA)();
a&&Nob(a,a.j.Ak(!0))},g8=function(){var a=g.KA("yt-remote-connected-devices")||[];
g.Vb(a);return a},qpb=function(a){if(0==a.length)return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Gm(a,function(d,e){return 0==e?d:d.substring(c.length)})},rpb=function(a){g.JA("yt-remote-connected-devices",a,86400)},h8=function(){if(spb)return spb;
var a=g.KA("yt-remote-device-id");a||(a=mpb(),g.JA("yt-remote-device-id",a,31536E3));for(var b=g8(),c=1,d=a;g.Gb(b,d);)c++,d=a+"#"+c;return spb=d},tpb=function(){var a=g8(),b=h8();
g.MA()&&g.ac(a,b);a=qpb(a);if(0==a.length)try{g.Lz("remote_sid")}catch(c){}else try{g.Jz("remote_sid",a.join(","),-1)}catch(c){}},upb=function(){return g.KA("yt-remote-session-browser-channel")},vpb=function(){return g.KA("yt-remote-local-screens")||[]},wpb=function(){g.JA("yt-remote-lounge-token-expiration",!0,86400)},xpb=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Gm(vpb(),function(d){return d.loungeToken}),c=g.Gm(a,function(d){return d.loungeToken});
g.Hm(c,function(d){return!g.Gb(b,d)})&&wpb();
g.JA("yt-remote-local-screens",a,31536E3)},i8=function(a){a||(g.LA("yt-remote-session-screen-id"),g.LA("yt-remote-session-video-id"));
tpb();a=g8();g.Jb(a,h8());rpb(a)},ypb=function(){if(!j8){var a=g.gr();
a&&(j8=new g.Vq(a))}},zpb=function(){ypb();
return j8?!!j8.get("yt-remote-use-staging-server"):!1},k8=function(a,b){g.gD[a]=!0;
var c=g.eD();c&&c.publish.apply(c,arguments);g.gD[a]=!1},Apb=function(){},a8=function(){if(!l8){l8=new g.Vf(new Apb);
var a=g.$y("client_streamz_web_flush_count",-1);-1!==a&&(l8.C=a)}return l8},Bpb=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},Cpb=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Dpb=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},m8=function(a){a.length?Epb(a.shift(),function(){m8(a)}):Fpb()},Gpb=function(a){return"chrome-extension://"+a+"/cast_sender.js"},Epb=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Kk(d,g.bs(a));(document.head||document.documentElement).appendChild(d)},Hpb=function(){var a=Bpb(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20230627205342/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20230627205342/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},Fpb=function(){var a=Dpb();
a&&a(!1,"No cast extension found")},Jpb=function(){if(Ipb){var a=2,b=Dpb(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Epb("//web.archive.org/web/20230627205342/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Fpb,c)}},Kpb=function(){Jpb();
var a=Hpb();a.push("//web.archive.org/web/20230627205342/https://www.gstatic.com/eureka/clank/cast_sender.js");m8(a)},Mpb=function(){Jpb();
var a=Hpb();a.push.apply(a,g.pa(Lpb.map(Gpb)));a.push("//web.archive.org/web/20230627205342/https://www.gstatic.com/eureka/clank/cast_sender.js");m8(a)},n8=function(a,b,c){g.D.call(this);
this.J=null!=c?(0,g.Ya)(a,c):a;this.Ri=b;this.D=(0,g.Ya)(this.Y_,this);this.j=!1;this.u=0;this.B=this.Jc=null;this.C=[]},o8=function(a,b,c){g.D.call(this);
this.C=null!=c?a.bind(c):a;this.Ri=b;this.B=null;this.j=!1;this.u=0;this.Jc=null},Npb=function(a){a.Jc=g.Tf(function(){a.Jc=null;
a.j&&!a.u&&(a.j=!1,Npb(a))},a.Ri);
var b=a.B;a.B=null;a.C.apply(null,b)},p8=function(){},Opb=function(){g.xb.call(this,"p")},Ppb=function(){g.xb.call(this,"o")},Rpb=function(){return Qpb=Qpb||new g.Dd},Spb=function(a){g.xb.call(this,"serverreachability",a)},q8=function(a){var b=Rpb();
b.dispatchEvent(new Spb(b,a))},Tpb=function(a){g.xb.call(this,"statevent",a)},r8=function(a){var b=Rpb();
b.dispatchEvent(new Tpb(b,a))},Upb=function(a,b,c,d){g.xb.call(this,"timingevent",a);
this.size=b;this.Uz=d},s8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.Ma.setTimeout(function(){a()},b)},Vpb=function(){},t8=function(a,b,c,d){this.D=a;
this.C=b;this.td=c;this.Pc=d||1;this.ob=new g.Bl(this);this.Xb=45E3;a=g.TM?125:void 0;this.rb=new g.Sf(a);this.Oa=null;this.B=!1;this.V=this.kb=this.K=this.Ra=this.Ba=this.Lb=this.ma=null;this.ra=[];this.j=null;this.oa=0;this.J=this.Ga=null;this.Sb=-1;this.La=!1;this.wb=0;this.fb=null;this.Dc=this.Ya=this.Lc=this.Fa=!1;this.u=new Wpb},Wpb=function(){this.B=null;
this.j="";this.u=!1},Ypb=function(a,b,c){a.Ra=1;
a.K=Y7(b.clone());a.V=c;a.Fa=!0;Xpb(a,null)},Xpb=function(a,b){a.Ba=Date.now();
u8(a);a.kb=a.K.clone();Z7(a.kb,"t",a.Pc);a.oa=0;var c=a.D.Ra;a.u=new Wpb;a.j=Zpb(a.D,c?b:null,!a.V);0<a.wb&&(a.fb=new o8((0,g.Ya)(a.uR,a,a.j),a.wb));a.ob.Ua(a.j,"readystatechange",a.d0);b=a.Oa?g.ld(a.Oa):{};a.V?(a.Ga||(a.Ga="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.kb,a.Ga,a.V,b)):(a.Ga="GET",a.j.send(a.kb,a.Ga,null,b));q8(1)},$pb=function(a){return a.j?"GET"==a.Ga&&2!=a.Ra&&a.D.Re:!1},dqb=function(a,b,c){for(var d=!0,e;!a.La&&a.oa<c.length;)if(e=aqb(a,c),e==v8){4==
b&&(a.J=4,r8(14),d=!1);
break}else if(e==bqb){a.J=4;r8(15);d=!1;break}else cqb(a,e);$pb(a)&&e!=v8&&e!=bqb&&(a.u.j="",a.oa=0);4!=b||0!=c.length||a.u.u||(a.J=1,r8(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.Dc&&(a.Dc=!0,a.D.vO(a)):(w8(a),x8(a))},aqb=function(a,b){var c=a.oa,d=b.indexOf("\n",c);
if(-1==d)return v8;c=Number(b.substring(c,d));if(isNaN(c))return bqb;d+=1;if(d+c>b.length)return v8;b=b.slice(d,d+c);a.oa=d+c;return b},u8=function(a){a.Lb=Date.now()+a.Xb;
eqb(a,a.Xb)},eqb=function(a,b){if(null!=a.ma)throw Error("WatchDog timer not null");
a.ma=s8((0,g.Ya)(a.Z_,a),b)},y8=function(a){a.ma&&(g.Ma.clearTimeout(a.ma),a.ma=null)},x8=function(a){a.D.hh()||a.La||fqb(a.D,a)},w8=function(a){y8(a);
g.qb(a.fb);a.fb=null;a.rb.stop();a.ob.Of();if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},cqb=function(a,b){try{var c=a.D;
if(0!=c.Bh&&(c.j==a||gqb(c.u,a)))if(!a.Ya&&gqb(c.u,a)&&3==c.Bh){try{var d=c.Df.j.parse(b)}catch(A){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.V){if(c.j)if(c.j.Ba+3E3<a.Ba)z8(c),A8(c);else break a;hqb(c);r8(18)}}else c.ke=e[1],0<c.ke-c.fb&&37500>e[2]&&c.Ya&&0==c.ra&&!c.oa&&(c.oa=s8((0,g.Ya)(c.e0,c),6E3));if(1>=iqb(c.u)&&c.Wc){try{c.Wc()}catch(A){}c.Wc=void 0}}else B8(c,11)}else if((a.Ya||c.j==a)&&z8(c),!g.gc(b))for(e=c.Df.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.fb=f[0];
f=f[1];if(2==c.Bh)if("c"==f[0]){c.C=f[1];c.Dc=f[2];var h=f[3];null!=h&&(c.vR=h);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.ob=1.5*l);d=c;var m=a.MM();if(m){var n=g.Tj(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.jc(n,"spdy")||g.jc(n,"quic")||g.jc(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(jqb(p,p.u),p.u=null))}if(d.Fa){var q=g.Tj(m,"X-HTTP-Session-Id");q&&(d.He=q,g.wl(d.Oa,d.Fa,q))}}c.Bh=3;c.D&&c.D.BR();c.Vc&&(c.hd=Date.now()-a.Ba);d=c;var r=a;d.Cd=kqb(d,d.Ra?d.Dc:null,d.Pc);if(r.Ya){lqb(d.u,
r);var v=r,y=d.ob;y&&v.setTimeout(y);v.ma&&(y8(v),u8(v));d.j=r}else mqb(d);0<c.B.length&&C8(c)}else"stop"!=f[0]&&"close"!=f[0]||B8(c,7);else 3==c.Bh&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?B8(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.AR(f),c.ra=0)}q8(4)}catch(A){}},nqb=function(a,b){this.j=a;
this.map=b;this.context=null},oqb=function(a){this.D=a||10;
g.Ma.PerformanceNavigationTiming?(a=g.Ma.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.Ma.chrome&&g.Ma.chrome.loadTimes&&g.Ma.chrome.loadTimes()&&g.Ma.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},pqb=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},iqb=function(a){return a.u?1:a.j?a.j.size:0},gqb=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},jqb=
function(a,b){a.j?a.j.add(b):a.u=b},lqb=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},qqb=function(a){if(null!=a.u)return a.B.concat(a.u.ra);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.u(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.ra);return b}return g.Mb(a.B)},rqb=function(a,b){var c=new Vpb;
if(g.Ma.Image){var d=new Image;d.onload=g.Za(D8,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Za(D8,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Za(D8,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Za(D8,c,d,"TestLoadImage: timeout",!1,b);g.Ma.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},D8=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},sqb=function(){this.j=new p8},tqb=function(a,b,c){var d=c||"";
try{g.nl(a,function(e,f){var h=e;g.Ua(e)&&(h=g.ij(e));b.push(d+f+"="+encodeURIComponent(h))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},E8=function(a,b,c){return c&&c.Z4?c.Z4[a]||b:b},uqb=function(a){this.B=[];
this.Dc=this.Cd=this.Oa=this.Pc=this.j=this.He=this.Fa=this.La=this.K=this.Lb=this.ma=null;this.gg=this.kb=0;this.Rf=E8("failFast",!1,a);this.Ya=this.oa=this.V=this.J=this.D=null;this.td=!0;this.ke=this.fb=-1;this.Lc=this.ra=this.Ba=0;this.Qf=E8("baseRetryDelayMs",5E3,a);this.hg=E8("retryDelaySeedMs",1E4,a);this.Sf=E8("forwardChannelMaxRetries",2,a);this.Od=E8("forwardChannelRequestTimeoutMs",2E4,a);this.Ge=a&&a.Fbb||void 0;this.Re=a&&a.Cbb||!1;this.ob=void 0;this.Ra=a&&a.T9||!1;this.C="";this.u=
new oqb(a&&a.X9a);this.Df=new sqb;this.Xb=a&&a.p$a||!1;this.wb=a&&a.f$a||!1;this.Xb&&this.wb&&(this.wb=!1);this.jg=a&&a.R9a||!1;a&&a.r$a&&(this.td=!1);this.Vc=!this.Xb&&this.td&&a&&a.a$a||!1;this.ud=void 0;a&&a.nW&&0<a.nW&&(this.ud=a.nW);this.Wc=void 0;this.hd=0;this.rb=!1;this.Sb=this.Ga=null},A8=function(a){a.j&&(vqb(a),a.j.cancel(),a.j=null)},wqb=function(a){A8(a);
a.V&&(g.Ma.clearTimeout(a.V),a.V=null);z8(a);a.u.cancel();a.J&&("number"===typeof a.J&&g.Ma.clearTimeout(a.J),a.J=null)},C8=function(a){pqb(a.u)||a.J||(a.J=!0,g.Gf(a.xR,a),a.Ba=0)},yqb=function(a,b){if(iqb(a.u)>=a.u.C-(a.J?1:0))return!1;
if(a.J)return a.B=b.ra.concat(a.B),!0;if(1==a.Bh||2==a.Bh||a.Ba>=(a.Rf?0:a.Sf))return!1;a.J=s8((0,g.Ya)(a.xR,a,b),xqb(a,a.Ba));a.Ba++;return!0},Aqb=function(a,b){var c;
b?c=b.td:c=a.kb++;var d=a.Oa.clone();g.wl(d,"SID",a.C);g.wl(d,"RID",c);g.wl(d,"AID",a.fb);F8(a,d);a.K&&a.ma&&g.Al(d,a.K,a.ma);c=new t8(a,a.C,c,a.Ba+1);null===a.K&&(c.Oa=a.ma);b&&(a.B=b.ra.concat(a.B));b=zqb(a,c,1E3);c.setTimeout(Math.round(.5*a.Od)+Math.round(.5*a.Od*Math.random()));jqb(a.u,c);Ypb(c,d,b)},F8=function(a,b){a.La&&g.Wc(a.La,function(c,d){g.wl(b,d,c)});
a.D&&g.nl({},function(c,d){g.wl(b,d,c)})},zqb=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Ya)(a.D.f0,a.D,a):null;a:for(var e=a.B,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].j,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{tqb(p,h,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=h.join("&");break a}}a=a.B.splice(0,c);b.ra=a;return d},mqb=function(a){a.j||a.V||(a.Lc=1,g.Gf(a.wR,a),a.ra=0)},hqb=function(a){if(a.j||a.V||3<=a.ra)return!1;
a.Lc++;a.V=s8((0,g.Ya)(a.wR,a),xqb(a,a.ra));a.ra++;return!0},vqb=function(a){null!=a.Ga&&(g.Ma.clearTimeout(a.Ga),a.Ga=null)},Bqb=function(a){a.j=new t8(a,a.C,"rpc",a.Lc);
null===a.K&&(a.j.Oa=a.ma);a.j.wb=0;var b=a.Cd.clone();g.wl(b,"RID","rpc");g.wl(b,"SID",a.C);g.wl(b,"AID",a.fb);g.wl(b,"CI",a.Ya?"0":"1");!a.Ya&&a.ud&&g.wl(b,"TO",a.ud);g.wl(b,"TYPE","xmlhttp");F8(a,b);a.K&&a.ma&&g.Al(b,a.K,a.ma);a.ob&&a.j.setTimeout(a.ob);var c=a.j;a=a.Dc;c.Ra=1;c.K=Y7(b.clone());c.V=null;c.Fa=!0;Xpb(c,a)},z8=function(a){null!=a.oa&&(g.Ma.clearTimeout(a.oa),a.oa=null)},fqb=function(a,b){var c=null;
if(a.j==b){z8(a);vqb(a);a.j=null;var d=2}else if(gqb(a.u,b))c=b.ra,lqb(a.u,b),d=1;else return;if(0!=a.Bh)if(b.B)if(1==d){c=b.V?b.V.length:0;b=Date.now()-b.Ba;var e=a.Ba;d=Rpb();d.dispatchEvent(new Upb(d,c,b,e));C8(a)}else mqb(a);else{var f=b.Sb;e=b.getLastError();if(3==e||0==e&&0<f||!(1==d&&yqb(a,b)||2==d&&hqb(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:B8(a,5);break;case 4:B8(a,10);break;case 3:B8(a,6);break;default:B8(a,2)}}},xqb=function(a,b){var c=a.Qf+Math.floor(Math.random()*
a.hg);
a.isActive()||(c*=2);return c*b},B8=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Ya)(a.Z9,a);c||(c=new g.ol("//web.archive.org/web/20230627205342/https://www.google.com/images/cleardot.gif"),g.Ma.location&&"http"==g.Ma.location.protocol||g.pl(c,"https"),Y7(c));rqb(c.toString(),d)}else r8(2);a.Bh=0;a.D&&a.D.zR(b);Cqb(a);wqb(a)},Cqb=function(a){a.Bh=0;
a.Sb=[];if(a.D){var b=qqb(a.u);if(0!=b.length||0!=a.B.length)g.Nb(a.Sb,b),g.Nb(a.Sb,a.B),a.u.B.length=0,g.Mb(a.B),a.B.length=0;a.D.yR()}},Dqb=function(a){if(0==a.Bh)return a.Sb;
var b=[];g.Nb(b,qqb(a.u));g.Nb(b,a.B);return b},kqb=function(a,b,c){var d=g.xl(c);
""!=d.j?(b&&g.ql(d,b+"."+d.j),g.rl(d,d.C)):(d=g.Ma.location,d=Tob(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.Fa;c=a.He;b&&c&&g.wl(d,b,c);g.wl(d,"VER",a.vR);F8(a,d);return d},Zpb=function(a,b,c){if(b&&!a.Ra)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.Re&&!a.Ge?new g.Mj(new g.bl({SY:!0})):new g.Mj(a.Ge);b.J=a.Ra;return b},Eqb=function(){},Fqb=function(){if(g.Ze&&!g.Pc(10))throw Error("Environmental error: no available transport.");
},H8=function(a,b){g.Dd.call(this);
this.j=new uqb(b);this.D=a;this.u=b&&b.F5||null;a=b&&b.E5||null;b&&b.W9a&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.ma=a;a=b&&b.nab||null;b&&b.uW&&(a?a["X-WebChannel-Content-Type"]=b.uW:a={"X-WebChannel-Content-Type":b.uW});b&&b.NT&&(a?a["X-WebChannel-Client-Profile"]=b.NT:a={"X-WebChannel-Client-Profile":b.NT});this.j.Lb=a;(a=b&&b.mab)&&!g.gc(a)&&(this.j.K=a);this.J=b&&b.T9||!1;this.C=b&&b.bbb||!1;(b=b&&b.V4)&&!g.gc(b)&&(this.j.Fa=b,g.dd(this.u,b)&&g.id(this.u,
b));this.B=new G8(this)},Gqb=function(a){Opb.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.j=g.ad(b))?g.jd(b,this.j):b:this.data=a},Hqb=function(a){Ppb.call(this);
this.status=1;this.errorCode=a},G8=function(a){this.j=a},Iqb=function(a,b){this.u=a;
this.j=b},Jqb=function(a){return Dqb(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.C?Sob(b):b);return b})},I8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.Ma.setTimeout(function(){a()},b)},K8=function(a){J8.dispatchEvent(new Kqb(J8,a))},Kqb=function(a){g.xb.call(this,"statevent",a)},L8=function(a,b,c,d){this.j=a;
this.C=b;this.K=c;this.J=d||1;this.u=45E3;this.B=new g.Bl(this);this.D=new g.Sf;this.D.setInterval(250)},Mqb=function(a,b,c){a.lx=1;
a.Sr=Y7(b.clone());a.Eu=c;a.Fa=!0;Lqb(a,null)},Nqb=function(a,b,c,d,e){a.lx=1;
a.Sr=Y7(b.clone());a.Eu=null;a.Fa=c;e&&(a.uY=!1);Lqb(a,d)},Lqb=function(a,b){a.kx=Date.now();
M8(a);a.Ur=a.Sr.clone();Z7(a.Ur,"t",a.J);a.fF=0;a.ej=a.j.SJ(a.j.TA()?b:null);0<a.QJ&&(a.dF=new o8((0,g.Ya)(a.CR,a,a.ej),a.QJ));a.B.Ua(a.ej,"readystatechange",a.h0);b=a.Du?g.ld(a.Du):{};a.Eu?(a.eF="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.ej.send(a.Ur,a.eF,a.Eu,b)):(a.eF="GET",a.uY&&!g.Rc&&(b.Connection="close"),a.ej.send(a.Ur,a.eF,null,b));a.j.Hn(1)},Qqb=function(a,b){var c=a.fF,d=b.indexOf("\n",c);
if(-1==d)return Oqb;c=Number(b.substring(c,d));if(isNaN(c))return Pqb;d+=1;if(d+c>b.length)return Oqb;b=b.slice(d,d+c);a.fF=d+c;return b},Sqb=function(a,b){a.kx=Date.now();
M8(a);var c=b?window.location.hostname:"";a.Ur=a.Sr.clone();g.wl(a.Ur,"DOMAIN",c);g.wl(a.Ur,"t",a.J);try{a.Xn=new ActiveXObject("htmlfile")}catch(m){N8(a);a.Tr=7;K8(22);O8(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in P8)f=P8[f];else if(f in Rqb)f=P8[f]=Rqb[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
P8[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";g.Qd("b/12014412");c=g.le(d);a.Xn.open();a.Xn.write(g.ke(c));a.Xn.close();a.Xn.parentWindow.m=(0,g.Ya)(a.x8,a);a.Xn.parentWindow.d=(0,g.Ya)(a.vX,a,!0);a.Xn.parentWindow.rpcClose=(0,g.Ya)(a.vX,a,!1);c=a.Xn.createElement("DIV");a.Xn.parentWindow.document.body.appendChild(c);d=g.ee(a.Ur.toString());d=g.Ge(g.Vd(d));g.Qd("b/12014412");d=g.le('<iframe src="'+d+'"></iframe>');g.gca(c,d);a.j.Hn(1)},M8=function(a){a.RJ=
Date.now()+a.u;
Tqb(a,a.u)},Tqb=function(a,b){if(null!=a.mx)throw Error("WatchDog timer not null");
a.mx=I8((0,g.Ya)(a.g0,a),b)},Uqb=function(a){a.mx&&(g.Ma.clearTimeout(a.mx),a.mx=null)},O8=function(a){a.j.hh()||a.Cu||a.j.gF(a)},N8=function(a){Uqb(a);
g.qb(a.dF);a.dF=null;a.D.stop();a.B.Of();if(a.ej){var b=a.ej;a.ej=null;b.abort();b.dispose()}a.Xn&&(a.Xn=null)},Vqb=function(a,b){try{a.j.DR(a,b),a.j.Hn(4)}catch(c){}},Xqb=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Wqb(a,b,function(h){h?c(!0):g.Ma.setTimeout(function(){Xqb(a,b,c,d,f)},f)})}},Wqb=function(a,b,c){var d=new Image;
d.onload=function(){try{Q8(d),c(!0)}catch(e){}};
d.onerror=function(){try{Q8(d),c(!1)}catch(e){}};
d.onabort=function(){try{Q8(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Q8(d),c(!1)}catch(e){}};
g.Ma.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},Q8=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},Yqb=function(a){this.j=a;
this.u=new p8},Zqb=function(a){var b=R8(a.j,a.oB,"/mail/images/cleardot.gif");
Y7(b);Xqb(b.toString(),5E3,(0,g.Ya)(a.Y2,a),3,2E3);a.Hn(1)},$qb=function(a){var b=a.j.J;
if(null!=b)K8(5),b?(K8(11),S8(a.j,a,!1)):(K8(12),S8(a.j,a,!0));else if(a.Fj=new L8(a),a.Fj.Du=a.TJ,b=a.j,b=R8(b,b.TA()?a.SA:null,a.UJ),K8(5),!g.Ze||g.Pc(10))Z7(b,"TYPE","xmlhttp"),Nqb(a.Fj,b,!1,a.SA,!1);else{Z7(b,"TYPE","html");var c=a.Fj;a=!!a.SA;c.lx=3;c.Sr=Y7(b.clone());Sqb(c,a)}},arb=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new p8;this.ma=a||null;this.J=null!=b?b:null;this.V=c||!1},brb=function(a,b){this.j=a;
this.map=b;this.context=null},crb=function(a,b,c,d){g.xb.call(this,"timingevent",a);
this.size=b;this.Uz=d},drb=function(a){g.xb.call(this,"serverreachability",a)},frb=function(a){a.j0(1,0);
a.hF=R8(a,null,a.VJ);erb(a)},grb=function(a){a.zs&&(a.zs.abort(),a.zs=null);
a.Sg&&(a.Sg.cancel(),a.Sg=null);a.Xp&&(g.Ma.clearTimeout(a.Xp),a.Xp=null);T8(a);a.Oj&&(a.Oj.cancel(),a.Oj=null);a.Vr&&(g.Ma.clearTimeout(a.Vr),a.Vr=null)},hrb=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new brb(a.k0++,b));2!=a.j&&3!=a.j||erb(a)},irb=function(a){var b=0;
a.Sg&&b++;a.Oj&&b++;return b},erb=function(a){a.Oj||a.Vr||(a.Vr=I8((0,g.Ya)(a.HR,a),0),a.ox=0)},lrb=function(a,b){if(1==a.j){if(!b){a.VA=Math.floor(1E5*Math.random());
b=a.VA++;var c=new L8(a,"",b);c.Du=a.oo;var d=jrb(a),e=a.hF.clone();g.wl(e,"RID",b);g.wl(e,"CVER","1");U8(a,e);Mqb(c,e,d);a.Oj=c;a.j=2}}else 3==a.j&&(b?krb(a,b):0==a.u.length||a.Oj||krb(a))},krb=function(a,b){if(b)if(6<a.Fu){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.VA-1;b=jrb(a)}else c=b.K,b=b.Eu;else c=a.VA++,b=jrb(a);var d=a.hF.clone();g.wl(d,"SID",a.C);g.wl(d,"RID",c);g.wl(d,"AID",a.qx);U8(a,d);c=new L8(a,a.C,c,a.ox+1);c.Du=a.oo;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Oj=c;Mqb(c,d,b)},U8=function(a,b){a.Ei&&(a=a.Ei.LR())&&g.Wc(a,function(c,d){g.wl(b,d,c)})},jrb=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Fu&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Sw:e.Sw},f++){e.Sw=a.u[f].j;var h=a.u[f].map;e.Sw=6>=a.Fu?f:e.Sw-d;try{g.Wc(h,function(l){return function(m,n){c.push("req"+l.Sw+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Sw+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},mrb=function(a){a.Sg||a.Xp||(a.K=1,a.Xp=I8((0,g.Ya)(a.GR,a),0),a.nx=0)},orb=function(a){if(a.Sg||a.Xp||3<=a.nx)return!1;
a.K++;a.Xp=I8((0,g.Ya)(a.GR,a),nrb(a,a.nx));a.nx++;return!0},S8=function(a,b,c){a.fJ=null==a.J?c:!a.J;
a.po=b.Wp;a.V||frb(a)},T8=function(a){null!=a.Gu&&(g.Ma.clearTimeout(a.Gu),a.Gu=null)},nrb=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},V8=function(a,b){if(2==b||9==b){var c=null;
a.Ei&&(c=null);var d=(0,g.Ya)(a.Y9,a);c||(c=new g.ol("//web.archive.org/web/20230627205342/https://www.google.com/images/cleardot.gif"),Y7(c));Wqb(c.toString(),1E4,d)}else K8(2);prb(a,b)},prb=function(a,b){a.j=0;
a.Ei&&a.Ei.IR(b);qrb(a);grb(a)},qrb=function(a){a.j=0;
a.po=-1;if(a.Ei)if(0==a.B.length&&0==a.u.length)a.Ei.WJ();else{var b=g.Mb(a.B),c=g.Mb(a.u);a.B.length=0;a.u.length=0;a.Ei.WJ(b,c)}},R8=function(a,b,c){var d=g.xl(c);
if(""!=d.j)b&&g.ql(d,b+"."+d.j),g.rl(d,d.C);else{var e=window.location;d=Tob(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.UA&&g.Wc(a.UA,function(f,h){g.wl(d,h,f)});
g.wl(d,"VER",a.Fu);U8(a,d);return d},rrb=function(){},srb=function(){this.j=[];
this.u=[]},trb=function(a){g.xb.call(this,"channelMessage");
this.message=a},urb=function(a){g.xb.call(this,"channelError");
this.error=a},vrb=function(a,b){this.action=a;
this.params=b||{}},W8=function(a,b){g.D.call(this);
this.j=new g.qq(this.p8,0,this);g.G(this,this.j);this.Ri=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Ya)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Ya)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},wrb=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.Ba=a;this.K=b;this.B=new g.Uq;this.u=new W8(this.u9,this);this.j=null;this.oa=!1;this.J=null;this.ma="";this.V=this.D=0;this.C=[];this.Ra=c;this.ra=d;this.Ya=e;this.Oa=new Uob;this.Ga=new Wob;this.La=new Yob;this.Fa=new $ob;this.fb=new bpb;this.kb=new cpb},xrb=function(a){if(a.j){var b=a.ra(),c=a.j.oo||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.oo=c}},X8=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.pj(4,a))||"";b&&(this.port=":"+b);this.domain=g.qj(a)||"";a=g.oc();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.nc(a,"10.0")&&(this.u=!1))},Y8=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.Ij(c+b,{})},yrb=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Za(a.C,d,!0),onError:g.Za(a.B,e),onTimeout:g.Za(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.zz(b,a)},zrb=function(a,b){g.Dd.call(this);
var c=this;this.Dd=a();this.Dd.subscribe("handlerOpened",this.o0,this);this.Dd.subscribe("handlerClosed",this.m0,this);this.Dd.subscribe("handlerError",function(d,e){c.onError(e)});
this.Dd.subscribe("handlerMessage",this.n0,this);this.j=b},Arb=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new Fqb:e;var f=void 0===f?new g.Uq:f;this.pathPrefix=a;this.j=b;this.Ba=c;this.D=f;this.V=null;this.ma=this.K=0;this.channel=null;this.J=0;this.B=new W8(function(){d.B.isActive();var h;0===(null==(h=d.channel)?void 0:iqb((new Iqb(h,h.j)).j.u))&&d.connect(d.V,d.K)});
this.C={};this.u={};this.oa=!1;this.logger=null;this.ra=[];this.Vg=void 0;this.Oa=new Uob;this.Ga=new Wob;this.La=new Yob;this.Fa=new $ob},Brb=function(a){g.ud(a.channel,"m",function(){a.J=3;
a.B.reset();a.V=null;a.K=0;for(var b=g.u(a.ra),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.ra=[];a.qa("webChannelOpened");Vob(a.Oa,"WEB_CHANNEL")});
g.ud(a.channel,"n",function(){a.J=0;a.B.isActive()||a.qa("webChannelClosed");var b,c=null==(b=a.channel)?void 0:Jqb(new Iqb(b,b.j));c&&(a.ra=[].concat(g.pa(c)));Xob(a.Ga,"WEB_CHANNEL")});
g.ud(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.qa("webChannelMessage",new vrb(c[0],c[1]));a.Vg=b.statusCode;Zob(a.La,"WEB_CHANNEL")});
g.ud(a.channel,"o",function(){401===a.Vg||a.B.start();a.qa("webChannelError");apb(a.Fa,"WEB_CHANNEL")})},Crb=function(a){var b=a.Ba();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},Drb=function(a){g.Dd.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.s0,this);this.j.subscribe("webChannelClosed",this.q0,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.r0,this)},Erb=function(a,b,c,d,e){function f(){return new wrb(Y8(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.Zy("enable_mdx_web_channel_desktop")?new Drb(function(){return new Arb(Y8(a,"/wc"),b,c)}):new zrb(f,e)},Irb=function(){var a=Frb;
Grb();Z8.push(a);Hrb()},$8=function(a,b){Grb();
var c=Jrb(a,String(b));0==Z8.length?Krb(c):(Hrb(),g.bc(Z8,function(d){d(c)}))},a9=function(a){$8("CP",a)},Grb=function(){Z8||(Z8=g.Pa("yt.mdx.remote.debug.handlers_")||[],g.Na("yt.mdx.remote.debug.handlers_",Z8))},Krb=function(a){var b=(b9+1)%50;
b9=b;c9[b]=a;d9||(d9=49==b)},Hrb=function(){var a=Z8;
if(c9[0]){var b=d9?b9:-1;do{b=(b+1)%50;var c=c9[b];g.bc(a,function(d){d(c)})}while(b!=b9);
c9=Array(50);b9=-1;d9=!1}},Jrb=function(a,b){var c=(Date.now()-Lrb)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},e9=function(a){g.cG.call(this);
this.J=a;this.screens=[]},Mrb=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},Nrb=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.zo(a.screens,function(f){return!!opb(b,f)});
for(var d=0,e=b.length;d<e;d++)c=Mrb(a,b[d])||c;return c},Orb=function(a,b){var c=a.screens.length;
a.screens=g.zo(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},Prb=function(a,b,c,d,e){g.cG.call(this);
this.B=a;this.K=b;this.C=c;this.J=d;this.D=e;this.u=0;this.j=null;this.Jc=NaN},g9=function(a){e9.call(this,"LocalScreenService");
this.u=a;this.j=NaN;f9(this);this.info("Initializing with "+lpb(this.screens))},Qrb=function(a){if(a.screens.length){var b=g.Gm(a.screens,function(d){return d.id}),c=Y8(a.u,"/pairing/get_lounge_token_batch");
yrb(a.u,c,{screen_ids:b.join(",")},(0,g.Ya)(a.w4,a),(0,g.Ya)(a.v4,a))}},f9=function(a){if(g.Zy("deprecate_pair_servlet_enabled"))return Nrb(a,[]);
var b=kpb(vpb());b=g.zo(b,function(c){return!c.uuid});
return Nrb(a,b)},h9=function(a,b){xpb(g.Gm(a.screens,ipb));
b&&wpb()},Srb=function(a,b){g.cG.call(this);
this.J=b;b=(b=g.KA("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.J(),e=d.length,f=0;f<e;++f){var h=d[f].id;c[h]=g.Gb(b,h)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;Rrb("Initialized with "+g.ij(this.j))},Trb=function(a,b,c){var d=Y8(a.D,"/pairing/get_screen_availability");
yrb(a.D,d,{lounge_token:b.token},(0,g.Ya)(function(e){e=e.screens||[];for(var f=e.length,h=0;h<f;++h)if(e[h].loungeToken==b.token){c("online"==e[h].status);return}c(!1)},a),(0,g.Ya)(function(){c(!1)},a))},Vrb=function(a,b){a:if(Qob(b)!=Qob(a.j))var c=!1;
else{c=g.cd(b);for(var d=c.length,e=0;e<d;++e)if(!a.j[c[e]]){c=!1;break a}c=!0}c||(Rrb("Updated online screens: "+g.ij(a.j)),a.j=b,a.qa("screenChange"));Urb(a)},i9=function(a){isNaN(a.B)||g.vz(a.B);
a.B=g.tz((0,g.Ya)(a.EP,a),0<a.C&&a.C<g.$a()?2E4:1E4)},Rrb=function(a){$8("OnlineScreenService",a)},Wrb=function(a){var b={};
g.bc(a.J(),function(c){c.token?b[c.token]=c.id:this.fg("Requesting availability of screen w/o lounge token.")});
return b},Urb=function(a){a=g.cd(g.Xc(a.j,function(b){return b}));
g.Vb(a);a.length?g.JA("yt-remote-online-screen-ids",a.join(","),60):g.LA("yt-remote-online-screen-ids")},j9=function(a,b){b=void 0===b?!1:b;
e9.call(this,"ScreenService");this.C=a;this.K=b;this.j=this.u=null;this.B=[];this.D={};Xrb(this)},Zrb=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Kk(),l=c?f8(h,c):null;c&&(a.K||l)||(l=f8(h,b));if(l){l.uuid=b;var m=k9(a,l);Trb(a.j,m,function(n){e(n?m:null)})}else c?Yrb(a,c,(0,g.Ya)(function(n){var p=k9(this,new c8({name:d,
screenId:c,loungeToken:n,dialId:b||""}));Trb(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},$rb=function(a,b){for(var c=a.screens.length,d=0;d<c;++d)if(a.screens[d].name==b)return a.screens[d];
return null},asb=function(a,b,c){Trb(a.j,b,c)},Yrb=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.zz(Y8(a.C,"/pairing/get_lounge_token_batch"),e)},bsb=function(a){a.screens=a.u.Kk();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=a.screens.length;for(d=0;d<b;++d){var e=a.screens[d];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+lpb(a.screens))},Xrb=function(a){csb(a);
a.u=new g9(a.C);a.u.subscribe("screenChange",(0,g.Ya)(a.F4,a));bsb(a);a.K||(a.B=kpb(g.KA("yt-remote-automatic-screen-cache")||[]));csb(a);a.info("Initializing automatic screens: "+lpb(a.B));a.j=new Srb(a.C,(0,g.Ya)(a.Kk,a,!0));a.j.subscribe("screenChange",(0,g.Ya)(function(){this.qa("onlineScreenChange")},a))},k9=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=f8(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||dsb(a));csb(a);a.D[b.uuid]=b.id;g.JA("yt-remote-device-id-map",a.D,31536E3);return b},dsb=function(a){a=g.zo(a.B,function(b){return"shortLived"!=b.idType});
g.JA("yt-remote-automatic-screen-cache",g.Gm(a,ipb))},csb=function(a){a.D=g.KA("yt-remote-device-id-map")||{}},l9=function(a,b,c){g.cG.call(this);
this.Fa=c;this.C=a;this.u=b;this.j=null},m9=function(a,b){a.j=b;
a.qa("sessionScreen",a.j)},esb=function(a,b){a.j&&(a.j.token=b,k9(a.C,a.j));
a.qa("sessionScreen",a.j)},n9=function(a,b){$8(a.Fa,b)},o9=function(a,b,c){l9.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.B=null;this.ra=(0,g.Ya)(this.x0,this);this.Ga=(0,g.Ya)(this.E8,this);this.oa=g.tz(function(){fsb(d,null)},12E4);
this.K=this.D=this.J=this.V=0;this.Ba=!1;this.ma="unknown"},hsb=function(a,b){g.vz(a.K);
a.K=0;0==b?gsb(a):a.K=g.tz(function(){gsb(a)},b)},gsb=function(a){isb(a,"getLoungeToken");
g.vz(a.D);a.D=g.tz(function(){jsb(a,null)},3E4)},isb=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.ij());
var c={};c.type=b;a.B?a.B.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Ya)(function(){n9(this,"Failed to send message: "+b+".")},a)):n9(a,"Sending yt message without session: "+g.ij(c))},ksb=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.j&&a.j.id==b||a.UU(b,function(c){m9(a,c)},function(){return a.vj()},5)):a.vj(Error("Waiting for session status timed out."))},msb=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new c8(b);lsb(a,d,function(e){e?(a.Ba=!0,k9(a.C,d),m9(a,d),a.ma="unknown",hsb(a,c)):(g.dz(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.vj())},5)},fsb=function(a,b){g.vz(a.oa);
a.oa=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.j&&a.j.uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?msb(a,{name:a.u.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.dz(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),ksb(a,b.screenId))):(g.dz(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),ksb(a,b.screenId)):
ksb(a,b.screenId):a.vj(Error("Waiting for session status timed out."))},jsb=function(a,b){g.vz(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.j)?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.ma=c,hsb(a,3E4)):(esb(a,b.loungeToken),a.Ba=!1,a.ma="unknown",hsb(a,b.loungeTokenRefreshIntervalMs))},lsb=function(a,b,c,d){g.vz(a.J);
a.J=0;asb(a.C,b,function(e){e||0>d?c(e):a.J=g.tz(function(){lsb(a,b,c,d-1)},300)})},nsb=function(a){g.vz(a.V);
a.V=0;g.vz(a.J);a.J=0;g.vz(a.oa);a.oa=0;g.vz(a.D);a.D=0;g.vz(a.K);a.K=0},p9=function(a,b,c,d){l9.call(this,a,b,"DialSession");
this.config_=d;this.B=this.V=null;this.Ga="";this.Ra=c;this.Oa=null;this.oa=function(){};
this.ma=NaN;this.La=(0,g.Ya)(this.y0,this);this.D=function(){};
this.K=this.J=0;this.ra=!1;this.Ba="unknown"},q9=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.B)?0:b.getDialAppInfo))},osb=function(a){a.D=a.C.NR(a.Ga,a.u.label,a.u.friendlyName,q9(a),function(b,c){a.D=function(){};
a.ra=!0;m9(a,b);"shortLived"==b.idType&&0<c&&r9(a,c)},function(b){a.D=function(){};
a.vj(b)})},psb=function(a){var b={};
b.pairingCode=a.Ga;b.theme=a.Ra;zpb()&&(b.env_useStageMdx=1);return g.Hj(b)},qsb=function(a){return new Promise(function(b){a.Ga=mpb();
if(a.Oa){var c=new chrome.cast.DialLaunchResponse(!0,psb(a));b(c);osb(a)}else a.oa=function(){g.vz(a.ma);a.oa=function(){};
a.ma=NaN;var d=new chrome.cast.DialLaunchResponse(!0,psb(a));b(d);osb(a)},a.ma=g.tz(function(){a.oa()},100)})},ssb=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new c8(b);return(new Promise(function(e){rsb(a,d,function(f){f?(a.ra=!0,k9(a.C,d),m9(a,d),r9(a,c)):g.dz(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):qsb(a)})},tsb=function(a,b){var c=a.V.receiver.label,d=a.u.friendlyName;
return(new Promise(function(e){Zrb(a.C,c,b,d,function(f){f&&f.token&&m9(a,f);e(f)},function(f){n9(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):qsb(a)})},rsb=function(a,b,c,d){g.vz(a.J);
a.J=0;asb(a.C,b,function(e){e||0>d?c(e):a.J=g.tz(function(){rsb(a,b,c,d-1)},300)})},r9=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
q9(a)&&(g.vz(a.K),a.K=0,0==b?usb(a):a.K=g.tz(function(){usb(a)},b))},usb=function(a){q9(a)&&a.B.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.j)?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.Ba=c,r9(a,3E4)):(a.ra=!1,a.Ba="unknown",esb(a,b.loungeToken),r9(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.Ba="noLoungeTokenResponse";r9(a,3E4)})},vsb=function(a){g.vz(a.J);
a.J=0;g.vz(a.K);a.K=0;a.D();a.D=function(){};
g.vz(a.ma)},s9=function(a,b){l9.call(this,a,b,"ManualSession");
this.B=g.tz((0,g.Ya)(this.kz,this,null),150)},t9=function(a,b){g.cG.call(this);
this.config_=b;this.u=a;this.V=b.appId||"233637DE";this.C=b.theme||"cl";this.ma=b.disableCastApi||!1;this.J=b.forceMirroring||!1;this.j=null;this.K=!1;this.B=[];this.D=(0,g.Ya)(this.C7,this)},wsb=function(a,b){return b?g.Eb(a.B,function(c){return d8(b,c.label)},a):null},u9=function(a){$8("Controller",a)},Frb=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},v9=function(a){return a.K||!!a.B.length||!!a.j},w9=function(a,b,c){b!=a.j&&(g.qb(a.j),(a.j=b)?(c?a.qa("yt-remote-cast2-receiver-resumed",
b.u):a.qa("yt-remote-cast2-receiver-selected",b.u),b.subscribe("sessionScreen",(0,g.Ya)(a.tX,a,b)),b.subscribe("sessionFailed",function(){return xsb(a,b)}),b.j?a.qa("yt-remote-cast2-session-change",b.j):c&&a.j.kz(null)):a.qa("yt-remote-cast2-session-change",null))},xsb=function(a,b){a.j==b&&a.qa("yt-remote-cast2-session-failed")},ysb=function(a){var b=a.u.MR(),c=a.j&&a.j.u;
a=g.Gm(b,function(d){c&&d8(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=wsb(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Fsb=function(a,b,c,d){d.disableCastApi?x9("Cannot initialize because disabled by Mdx config."):zsb()?Asb(b,d)&&(Bsb(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Csb(a,c):(window.__onGCastApiAvailable=function(e,f){e?Csb(a,c):(y9("Failed to load cast API: "+f),Dsb(!1),Bsb(!1),g.LA("yt-remote-cast-available"),g.LA("yt-remote-cast-receiver"),
Esb(),c(!1))},d.loadCastApiSetupScript?g.lD("http://web.archive.org/web/20230627205342/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=Bpb()&&Kpb():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?Fpb():89<=Bpb()?Mpb():(Jpb(),m8(Lpb.map(Gpb))))):x9("Cannot initialize because not running Chrome")},Esb=function(){x9("dispose");
var a=z9();a&&a.dispose();g.Na("yt.mdx.remote.cloudview.instance_",null);Gsb(!1);g.jD(Hsb);Hsb.length=0},A9=function(){return!!g.KA("yt-remote-cast-installed")},Isb=function(){var a=g.KA("yt-remote-cast-receiver");
return a?a.friendlyName:null},Jsb=function(){x9("clearCurrentReceiver");
g.LA("yt-remote-cast-receiver")},Ksb=function(){return A9()?z9()?z9().getCastSession():(y9("getCastSelector: Cast is not initialized."),null):(y9("getCastSelector: Cast API is not installed!"),null)},Lsb=function(){A9()?z9()?B9()?(x9("Requesting cast selector."),z9().requestSession()):(x9("Wait for cast API to be ready to request the session."),Hsb.push(g.iD("yt-remote-cast2-api-ready",Lsb))):y9("requestCastSelector: Cast is not initialized."):y9("requestCastSelector: Cast API is not installed!")},
C9=function(a,b){B9()?z9().setConnectedScreenStatus(a,b):y9("setConnectedScreenStatus called before ready.")},zsb=function(){var a=0<=g.oc().search(/ (CrMo|Chrome|CriOS)\//);
return g.iK||a},Msb=function(a,b){z9().init(a,b)},Asb=function(a,b){var c=!1;
z9()||(a=new t9(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.JA("yt-remote-cast-available",d);k8("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){x9("onReceiverSelected: "+d.friendlyName);
g.JA("yt-remote-cast-receiver",d);k8("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){x9("onReceiverResumed: "+d.friendlyName);
g.JA("yt-remote-cast-receiver",d);k8("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){x9("onSessionChange: "+e8(d));
d||g.LA("yt-remote-cast-receiver");k8("yt-remote-cast2-session-change",d)}),g.Na("yt.mdx.remote.cloudview.instance_",a),c=!0);
x9("cloudview.createSingleton_: "+c);return c},z9=function(){return g.Pa("yt.mdx.remote.cloudview.instance_")},Csb=function(a,b){Dsb(!0);
Bsb(!1);Msb(a,function(c){c?(Gsb(!0),g.kD("yt-remote-cast2-api-ready")):(y9("Failed to initialize cast API."),Dsb(!1),g.LA("yt-remote-cast-available"),g.LA("yt-remote-cast-receiver"),Esb());b(c)})},x9=function(a){$8("cloudview",a)},y9=function(a){$8("cloudview",a)},Dsb=function(a){x9("setCastInstalled_ "+a);
g.JA("yt-remote-cast-installed",a)},B9=function(){return!!g.Pa("yt.mdx.remote.cloudview.apiReady_")},Gsb=function(a){x9("setApiReady_ "+a);
g.Na("yt.mdx.remote.cloudview.apiReady_",a)},Bsb=function(a){g.Na("yt.mdx.remote.cloudview.initializing_",a)},D9=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.J=this.K=0;this.trackData=null;this.Ok=this.fp=!1;this.V=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},Nsb=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.fp=!1;a.Ok=!1;a.K=0;a.J=g.$a();a.C=0;a.j=0;a.D=0;a.V=0;a.B=NaN;a.u=!1},E9=function(a){return a.pd()?(g.$a()-a.J)/1E3:0},F9=function(a,b){a.K=b;
a.J=g.$a()},G9=function(a){switch(a.playerState){case 1:case 1081:return(g.$a()-a.J)/1E3+a.K;
case -1E3:return 0}return a.K},H9=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&Nsb(a)},Osb=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.nd(a.trackData);b.hasPrevious=a.fp;b.hasNext=a.Ok;b.playerTime=a.K;b.playerTimeAt=a.J;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.V;b.liveIngestionTime=a.B;return b},J9=function(a,b){g.cG.call(this);
this.B=0;this.C=a;this.J=[];this.D=new srb;this.u=this.j=null;this.ma=(0,g.Ya)(this.v6,this);this.K=(0,g.Ya)(this.jD,this);this.V=(0,g.Ya)(this.u6,this);this.oa=(0,g.Ya)(this.y6,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.WP,this),Psb(this))):c=3;0!=c&&(b?this.WP(c):g.tz((0,g.Ya)(function(){this.WP(c)},this),0));
(a=Ksb())&&I9(this,a);this.subscribe("yt-remote-cast2-session-change",this.oa)},K9=function(a){return new D9(a.C.getPlayerContextData())},Psb=function(a){g.bc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.J.push(this.C.subscribe(b,g.Za(this.A7,b),this))},a)},Qsb=function(a){g.bc(a.J,function(b){this.C.unsubscribeByKey(b)},a);
a.J.length=0},L9=function(a){return 1==a.getState()},M9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.u.push(b)},Rsb=function(a,b,c){var d=K9(a);
F9(d,c);-1E3!=d.playerState&&(d.playerState=b);N9(a,d)},O9=function(a,b,c){a.C.sendMessage(b,c)},N9=function(a,b){Qsb(a);
a.C.setPlayerContextData(Osb(b));Psb(a)},I9=function(a,b){a.u&&(a.u.removeUpdateListener(a.ma),a.u.removeMediaListener(a.K),a.jD(null));
a.u=b;a.u&&(a9("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.ma),a.u.addMediaListener(a.K),a.u.media.length&&a.jD(a.u.media[0]))},Ssb=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=K9(a);b.contentId!=d.videoId&&a9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;F9(d,a.j.getEstimatedTime());N9(a,d)}else a9("No cast media video. Ignoring state update.")},P9=function(a,b,c){return(0,g.Ya)(function(d){this.fg("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.fg("Retrying "+b+" using MDx browser channel."),O9(this,b,c))},a)},S9=function(a,b,c,d){d=void 0===d?!1:d;
g.cG.call(this);var e=this;this.J=NaN;this.Ga=!1;this.ma=this.V=this.ra=this.Ba=NaN;this.oa=[];this.D=this.K=this.C=this.j=this.u=null;this.Oa=a;this.La=d;this.oa.push(g.xA(window,"beforeunload",function(){e.Cy(2)}));
this.B=[];this.j=new D9;this.Ra=b.id;this.Fa=b.idType;this.u=Erb(this.Oa,c,this.RR,"shortLived"==this.Fa,this.Ra);this.u.Ua("channelOpened",function(){Tsb(e)});
this.u.Ua("channelClosed",function(){Q9("Channel closed");isNaN(e.J)?i8(!0):i8();e.dispose()});
this.u.Ua("channelError",function(f){i8();isNaN(e.jC())?(1==f&&"shortLived"==e.Fa&&e.qa("browserChannelAuthError",f),Q9("Channel error: "+f+" without reconnection"),e.dispose()):(e.Ga=!0,Q9("Channel error: "+f+" with reconnection in "+e.jC()+" ms"),R9(e,2))});
this.u.Ua("channelMessage",function(f){Usb(e,f)});
this.u.zr(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.MA()&&g.JA("yt-remote-session-video-id",f)})},Vsb=function(a){return g.Eb(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},Q9=function(a){$8("conn",a)},R9=function(a,b){a.qa("proxyStateChange",b)},Wsb=function(a){a.J=g.tz(function(){Q9("Connecting timeout");
a.Cy(1)},2E4)},Xsb=function(a){g.vz(a.J);
a.J=NaN},Ysb=function(a){g.vz(a.Ba);
a.Ba=NaN},$sb=function(a){Zsb(a);
a.ra=g.tz(function(){T9(a,"getNowPlaying")},2E4)},Zsb=function(a){g.vz(a.ra);
a.ra=NaN},Tsb=function(a){Q9("Channel opened");
a.Ga&&(a.Ga=!1,Ysb(a),a.Ba=g.tz(function(){Q9("Timing out waiting for a screen.");a.Cy(1)},15E3))},btb=function(a,b){var c=null;
if(b){var d=Vsb(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Na("yt.mdx.remote.remoteClient_",c);b&&(Xsb(a),Ysb(a));c=a.u.Yy()&&isNaN(a.J);b==c?b&&(R9(a,1),T9(a,"getSubtitlesTrack")):b?(a.QU()&&a.j.reset(),R9(a,1),T9(a,"getNowPlaying"),atb(a)):a.Cy(1)},ctb=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.hd(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.qa("remotePlayerChange"))},dtb=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;H9(a.j,d,e);a.qa("remoteQueueChange",c)},ftb=function(a,b){b.params=b.params||{};
dtb(a,b,"NOW_PLAYING_MAY_CHANGE");etb(a,b);a.qa("autoplayDismissed")},etb=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
F9(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.V=isNaN(c)?0:c;a.j.jl(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?$sb(a):Zsb(a);a.qa("remotePlayerChange")},gtb=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);F9(a.j,isNaN(b)?0:b);a.qa("remotePlayerChange")}},htb=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.qa("remotePlayerChange")},itb=function(a,b){a.K=b.params.videoId;
a.qa("nowAutoplaying",parseInt(b.params.timeout,10))},jtb=function(a,b){a.K=b.params.videoId||null;
a.qa("autoplayUpNext",a.K)},ktb=function(a,b){a.D=b.params.autoplayMode;
a.qa("autoplayModeChange",a.D);"DISABLED"==a.D&&a.qa("autoplayDismissed")},ltb=function(a,b){var c="true"==b.params.hasNext;
a.j.fp="true"==b.params.hasPrevious;a.j.Ok=c;a.qa("previousNextChange")},Usb=function(a,b){b=b.message;
b.params?Q9("Received: action="+b.action+", params="+g.ij(b.params)):Q9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=$7(b.params.devices);a.B=g.Gm(b,function(d){return new b8(d)});
b=!!g.Eb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
btb(a,b);b=a.NV("mlm");a.qa("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.Kb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
btb(a,!1);break;case "remoteConnected":var c=new b8($7(b.params.device));g.Eb(a.B,function(d){return d.equals(c)})||Pob(a.B,c);
break;case "remoteDisconnected":c=new b8($7(b.params.device));g.Kb(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":dtb(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":ftb(a,b);break;case "onStateChange":etb(a,b);break;case "onAdStateChange":gtb(a,b);break;case "onVolumeChanged":htb(a,b);break;case "onSubtitlesTrackChanged":ctb(a,b);break;case "nowAutoplaying":itb(a,b);break;case "autoplayDismissed":a.qa("autoplayDismissed");break;case "autoplayUpNext":jtb(a,b);break;case "onAutoplayModeChanged":ktb(a,b);break;case "onHasPreviousNextChanged":ltb(a,b);
break;case "requestAssistedSignIn":a.qa("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.qa("loopModeChange",b.params.loopMode);break;default:Q9("Unrecognized action: "+b.action)}},atb=function(a){g.vz(a.ma);
a.ma=g.tz(function(){a.Cy(1)},864E5)},T9=function(a,b,c){c?Q9("Sending: action="+b+", params="+g.ij(c)):Q9("Sending: action="+b);
a.u.sendMessage(b,c)},mtb=function(a){e9.call(this,"ScreenServiceProxy");
this.gh=a;this.j=[];this.j.push(this.gh.$_s("screenChange",(0,g.Ya)(this.C0,this)));this.j.push(this.gh.$_s("onlineScreenChange",(0,g.Ya)(this.j7,this)))},rtb=function(a,b){ypb();
if(!j8||!j8.get("yt-remote-disable-remote-module-for-dev")){b=g.Xy("MDX_CONFIG")||b;ppb();tpb();U9||(U9=new X8(b?b.loungeApiHost:void 0),zpb()&&(U9.j="/api/loungedev"));V9||(V9=g.Pa("yt.mdx.remote.deferredProxies_")||[],g.Na("yt.mdx.remote.deferredProxies_",V9));ntb();var c=W9();if(!c){var d=new j9(U9,b?b.disableAutomaticScreenCache||!1:!1);g.Na("yt.mdx.remote.screenService_",d);c=W9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Na("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);Fsb(a,d,function(f){f?X9()&&C9(X9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){k8("yt-remote-receiver-availability-change")})},e)}b&&!g.Pa("yt.mdx.remote.initialized_")&&(g.Na("yt.mdx.remote.initialized_",!0),Y9("Initializing: "+g.ij(b)),
Z9.push(g.iD("yt-remote-cast2-api-ready",function(){k8("yt-remote-api-ready")})),Z9.push(g.iD("yt-remote-cast2-availability-change",function(){k8("yt-remote-receiver-availability-change")})),Z9.push(g.iD("yt-remote-cast2-receiver-selected",function(){$9(null);
k8("yt-remote-auto-connect","cast-selector-receiver")})),Z9.push(g.iD("yt-remote-cast2-receiver-resumed",function(){k8("yt-remote-receiver-resumed","cast-selector-receiver")})),Z9.push(g.iD("yt-remote-cast2-session-change",otb)),Z9.push(g.iD("yt-remote-connection-change",function(f){f?C9(X9(),"YouTube TV"):a$()||(C9(null,null),Jsb())})),Z9.push(g.iD("yt-remote-cast2-session-failed",function(){k8("yt-remote-connection-failed")})),a=ptb(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Zy("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),Y9(" -- with channel params: "+g.ij(a)),a?(g.JA("yt-remote-session-app",a.app),g.JA("yt-remote-session-name",a.name)):(g.LA("yt-remote-session-app"),g.LA("yt-remote-session-name")),g.Na("yt.mdx.remote.channelParams_",a),c.start(),X9()||qtb())}},stb=function(){var a=W9().gh.$_gos();
var b=b$();b&&c$()&&(opb(a,b)||a.push(b));return npb(a)},utb=function(){var a=ttb();
!a&&A9()&&Isb()&&(a={key:"cast-selector-receiver",name:Isb()});return a},ttb=function(){var a=stb(),b=b$();
b||(b=a$());return g.Eb(a,function(c){return b&&d8(b,c.key)?!0:!1})},b$=function(){var a=X9();
if(!a)return null;var b=W9().Kk();return f8(b,a)},otb=function(a){Y9("remote.onCastSessionChange_: "+e8(a));
if(a){var b=b$();if(b&&b.id==a.id){if(C9(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))d$&&(d$.token=a),(b=c$())&&b.zr(a)}else b&&e$(),f$(a,1)}else c$()&&e$()},e$=function(){B9()?z9().stopSession():y9("stopSession called before API ready.");
var a=c$();a&&(a.disconnect(1),vtb(null))},wtb=function(){var a=c$();
return!!a&&3!=a.getProxyState()},Y9=function(a){$8("remote",a)},W9=function(){if(!xtb){var a=g.Pa("yt.mdx.remote.screenService_");
xtb=a?new mtb(a):null}return xtb},X9=function(){return g.Pa("yt.mdx.remote.currentScreenId_")},ytb=function(a){g.Na("yt.mdx.remote.currentScreenId_",a)},ztb=function(){return g.Pa("yt.mdx.remote.connectData_")},$9=function(a){g.Na("yt.mdx.remote.connectData_",a)},c$=function(){return g.Pa("yt.mdx.remote.connection_")},vtb=function(a){var b=c$();
$9(null);a||ytb("");g.Na("yt.mdx.remote.connection_",a);V9&&(g.bc(V9,function(c){c(a)}),V9.length=0);
b&&!a?k8("yt-remote-connection-change",!1):!b&&a&&k8("yt-remote-connection-change",!0)},a$=function(){var a=g.MA();
if(!a)return null;var b=W9();if(!b)return null;b=b.Kk();return f8(b,a)},f$=function(a,b){X9();
b$()&&b$();if(g$)d$=a;else{ytb(a.id);var c=g.Pa("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new S9(U9,a,ptb(),c);a.connect(b,ztb());a.subscribe("beforeDisconnect",function(d){k8("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){c$()&&(c$(),vtb(null))});
a.subscribe("browserChannelAuthError",function(){var d=b$();d&&"shortLived"==d.idType&&(B9()?z9().handleBrowserChannelAuthError():y9("refreshLoungeToken called before API ready."))});
vtb(a)}},qtb=function(){var a=a$();
a?(Y9("Resume connection to: "+e8(a)),f$(a,0)):(i8(),Jsb(),Y9("Skipping connecting because no session screen found."))},ntb=function(){var a=ptb();
if(g.hd(a)){a=h8();var b=g.KA("yt-remote-session-name")||"",c=g.KA("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};a.authuser=String(g.Xy("SESSION_INDEX","0"));(b=g.Xy("DELEGATED_SESSION_ID"))&&(a.pageId=String(b));g.Na("yt.mdx.remote.channelParams_",a)}},ptb=function(){return g.Pa("yt.mdx.remote.channelParams_")||{}},Ctb=function(a,b,c){g.D.call(this);
var d=this;this.module=a;this.I=b;this.Cc=c;this.events=new g.fK(this);this.ma=this.events.T(this.I,"onVolumeChange",function(e){Atb(d,e)});
this.C=!1;this.D=new g.gQ(64);this.j=new g.qq(this.MY,500,this);this.u=new g.qq(this.PY,1E3,this);this.K=new n8(this.t$,0,this);this.B={};this.V=new g.qq(this.CZ,1E3,this);this.J=new o8(this.seekTo,1E3,this);g.G(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.U6);this.events.T(b,"captionschanged",this.s6);this.events.T(b,"captionssettingschanged",this.YY);this.events.T(b,"videoplayerreset",this.RH);this.events.T(b,"mdxautoplaycancel",function(){d.Cc.eU()});
b.N("enable_mdx_video_play_directly")&&this.events.T(b,"videodatachange",function(){Btb(d.module)||h$(d)||i$(d,0)});
a=this.Cc;a.isDisposed();a.subscribe("proxyStateChange",this.qX,this);a.subscribe("remotePlayerChange",this.qD,this);a.subscribe("remoteQueueChange",this.RH,this);a.subscribe("previousNextChange",this.nX,this);a.subscribe("nowAutoplaying",this.iX,this);a.subscribe("autoplayDismissed",this.NW,this);g.G(this,this.j);g.G(this,this.u);g.G(this,this.K);g.G(this,this.V);g.G(this,this.J);this.YY();this.RH();this.qD()},Atb=function(a,b){if(h$(a)){a.Cc.unsubscribe("remotePlayerChange",a.qD,a);
var c=Math.round(b.volume);b=!!b.muted;var d=K9(a.Cc);if(c!==d.volume||b!==d.muted)a.Cc.setVolume(c,b),a.V.start();a.Cc.subscribe("remotePlayerChange",a.qD,a)}},Dtb=function(a){a.Ac(0);
a.j.stop();a.xc(new g.gQ(64))},Etb=function(a,b){if(h$(a)&&!a.C){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.od(c,b));a.Cc.QR(a.I.getVideoData(1).videoId,c);a.B=K9(a.Cc).trackData}},i$=function(a,b){var c=a.I.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.Cc.playVideo(c.videoId,b,d,e,c.playerParams,c.Ba,Oob(c));a.xc(new g.gQ(1))},Ftb=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{CV:1});
c&&c.length?(a.I.setOption("captions","track",b),a.C=!1):(a.I.loadModule("captions"),a.C=!0)}else a.I.setOption("captions","track",{})},h$=function(a){return K9(a.Cc).videoId===a.I.getVideoData(1).videoId},j$=function(){g.X.call(this,{G:"div",
S:"ytp-mdx-popup-dialog",Y:{role:"dialog"},X:[{G:"div",S:"ytp-mdx-popup-dialog-inner-content",X:[{G:"div",S:"ytp-mdx-popup-title",Aa:"You're signed out"},{G:"div",S:"ytp-mdx-popup-description",Aa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",S:"ytp-mdx-privacy-popup-buttons",X:[{G:"button",Ma:["ytp-button","ytp-mdx-privacy-popup-cancel"],Aa:"Cancel"},{G:"button",Ma:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],Aa:"Confirm"}]}]}]});this.j=new g.ER(this,250);this.cancelButton=this.Ha("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Ha("ytp-mdx-privacy-popup-confirm");g.G(this,this.j);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},k$=function(a){g.X.call(this,{G:"div",
S:"ytp-remote",X:[{G:"div",S:"ytp-remote-display-status",X:[{G:"div",S:"ytp-remote-display-status-icon",X:[g.vDa()]},{G:"div",S:"ytp-remote-display-status-text",Aa:"{{statustext}}"}]}]});this.api=a;this.j=new g.ER(this,250);g.G(this,this.j);this.T(a,"presentingplayerstatechange",this.onStateChange);this.yc(a.Nb())},l$=function(a,b){g.gW.call(this,"Play on",1,a,b);
this.I=a;this.Rt={};this.T(a,"onMdxReceiversChange",this.C);this.T(a,"presentingplayerstatechange",this.C);this.C()},Gtb=function(a){g.dU.call(this,a);
this.wp={key:mpb(),name:"This computer"};this.Ol=null;this.subscriptions=[];this.hP=this.Cc=null;this.Rt=[this.wp];this.Cs=this.wp;this.hf=new g.gQ(64);this.YV=0;this.Lh=-1;this.KD=!1;this.ID=this.Pz=null;if(!g.yM(this.player.W())&&!g.zM(this.player.W())){a=this.player;var b=g.MS(a);b&&(b=b.dn())&&(b=new l$(a,b),g.G(this,b));b=new k$(a);g.G(this,b);g.cT(a,b.element,4);this.Pz=new j$;g.G(this,this.Pz);g.cT(a,this.Pz.element,4);this.KD=!!a$()}},m$=function(a){a.ID&&(a.player.removeEventListener("presentingplayerstatechange",
a.ID),a.ID=null)},Htb=function(a,b,c){a.hf=c;
a.player.qa("presentingplayerstatechange",new g.NP(c,b))},n$=function(a,b){if(b.key!==a.Cs.key)if(b.key===a.wp.key)e$();
else if(Btb(a)&&Itb(a),a.Cs=b,!a.player.W().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.zM(a.player.W())){var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(!c&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.W().N("should_clear_video_data_on_player_cued_unstarted"))d=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.aU(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:c,
videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Ba,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(d=Oob(d))&&(a.locationInfo=d);d=a}Y9("Connecting to: "+g.ij(b));"cast-selector-receiver"==b.key?($9(d||null),b=d||null,B9()?z9().setLaunchParams(b):y9("setLaunchParams called before ready.")):!d&&wtb()&&X9()==b.key?k8("yt-remote-connection-change",!0):(e$(),$9(d||null),d=W9().Kk(),(b=f8(d,b.key))&&f$(b,1))}},Btb=function(a){var b;
(b=!a.player.W().N("mdx_enable_privacy_disclosure_ui"))||(b=((b=g.Xy("PLAYER_CONFIG"))&&b.args&&void 0!==b.args.authuser?!0:!(!g.Xy("SESSION_INDEX")&&!g.Xy("LOGGED_IN")))||a.KD||!a.Pz);return b?!1:g.PM(a.player.W())||g.SM(a.player.W())},Itb=function(a){a.player.Nb().pd()?a.player.pauseVideo():(a.ID=function(b){!a.KD&&g.PP(b,8)&&(a.player.pauseVideo(),m$(a))},a.player.addEventListener("presentingplayerstatechange",a.ID));
a.Pz&&a.Pz.wd();c$()||(g$=!0)};
g.Ht.prototype.Ns=g.da(0,function(){return g.oi(this,6)});
var Rqb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},P8={"'":"\\'"},gpb={Lja:"atp",oXa:"ska",DUa:"que",JMa:"mus",nXa:"sus",Eya:"dsp",JVa:"seq",pLa:"mic",kqa:"dpa",Nka:"cds",zMa:"mlm",Ypa:"dsdtr",jNa:"ntb",I6a:"vsp",Zqa:"scn",RUa:"rpe"},hpb={j2:"u",CLASSIC:"cl",L1:"k",y_:"i",j_:"cr",R1:"m",v_:"g",XS:"up"};b8.prototype.equals=function(a){return a?this.id==a.id:!1};
var j8,spb="";Apb.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.Zy("enable_client_streamz_web")){a=g.u(a);for(var c=a.next();!c.done;c=a.next())c=g.afa(c.value),c={serializedIncrementBatch:g.Zf(c.j())},g.lB("streamzIncremented",c,{sendIsolatedPayload:b})}};
var l8,Ipb=Cpb("loadCastFramework")||Cpb("loadCastApplicationFramework"),Lpb=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.eb(n8,g.D);g.k=n8.prototype;g.k.X_=function(a){this.C=arguments;this.j=!1;this.Jc?this.B=g.$a()+this.Ri:this.Jc=g.Tf(this.D,this.Ri)};
g.k.stop=function(){this.Jc&&(g.Ma.clearTimeout(this.Jc),this.Jc=null);this.B=null;this.j=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.J.apply(null,this.C)))};
g.k.xa=function(){this.stop();n8.Pf.xa.call(this)};
g.k.Y_=function(){this.Jc&&(g.Ma.clearTimeout(this.Jc),this.Jc=null);this.B?(this.Jc=g.Tf(this.D,this.B-g.$a()),this.B=null):this.u?this.j=!0:(this.j=!1,this.J.apply(null,this.C))};g.x(o8,g.D);g.k=o8.prototype;g.k.PJ=function(a){this.B=arguments;this.Jc||this.u?this.j=!0:Npb(this)};
g.k.stop=function(){this.Jc&&(g.Ma.clearTimeout(this.Jc),this.Jc=null,this.j=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.j||this.Jc||(this.j=!1,Npb(this))};
g.k.xa=function(){g.D.prototype.xa.call(this);this.stop()};p8.prototype.stringify=function(a){return g.Ma.JSON.stringify(a,void 0)};
p8.prototype.parse=function(a){return g.Ma.JSON.parse(a,void 0)};g.eb(Opb,g.xb);g.eb(Ppb,g.xb);var Qpb=null;g.eb(Spb,g.xb);g.eb(Tpb,g.xb);g.eb(Upb,g.xb);Vpb.prototype.info=function(){};
Vpb.prototype.warning=function(){};var bqb={},v8={};g.k=t8.prototype;g.k.setTimeout=function(a){this.Xb=a};
g.k.d0=function(a){a=a.target;var b=this.fb;b&&3==g.Pj(a)?b.PJ():this.uR(a)};
g.k.uR=function(a){try{if(a==this.j)a:{var b=g.Pj(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.TM||this.j&&(this.u.u||g.Rj(this.j)||g.Sj(this.j)))){this.La||4!=b||7==c||(8==c||0>=d?q8(3):q8(2));y8(this);var e=this.j.getStatus();this.Sb=e;b:if($pb(this)){var f=g.Sj(this.j);a="";var h=f.length,l=4==g.Pj(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){w8(this);x8(this);var m="";break b}this.u.B=new g.Ma.TextDecoder}for(c=0;c<h;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==h-1});f.splice(0,h);this.u.j+=a;this.oa=0;m=this.u.j}else m=g.Rj(this.j);if(this.B=200==e){if(this.Lc&&!this.Ya){b:{if(this.j){var n=g.Tj(this.j,"X-HTTP-Initial-Response");if(n&&!g.gc(n)){var p=n;break b}}p=null}if(e=p)this.Ya=!0,cqb(this,e);else{this.B=!1;this.J=3;r8(12);w8(this);x8(this);break a}}this.Fa?(dqb(this,b,m),g.TM&&this.B&&3==b&&(this.ob.Ua(this.rb,"tick",this.b0),this.rb.start())):cqb(this,m);4==b&&w8(this);this.B&&!this.La&&(4==b?fqb(this.D,this):(this.B=!1,u8(this)))}else g.Gfa(this.j),
400==e&&0<m.indexOf("Unknown SID")?(this.J=3,r8(12)):(this.J=0,r8(13)),w8(this),x8(this)}}}catch(q){}finally{}};
g.k.b0=function(){if(this.j){var a=g.Pj(this.j),b=g.Rj(this.j);this.oa<b.length&&(y8(this),dqb(this,a,b),this.B&&4!=a&&u8(this))}};
g.k.cancel=function(){this.La=!0;w8(this)};
g.k.Z_=function(){this.ma=null;var a=Date.now();0<=a-this.Lb?(2!=this.Ra&&(q8(3),r8(17)),w8(this),this.J=2,x8(this)):eqb(this,this.Lb-a)};
g.k.getLastError=function(){return this.J};
g.k.MM=function(){return this.j};oqb.prototype.cancel=function(){this.B=qqb(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.u(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.k=uqb.prototype;g.k.vR=8;g.k.Bh=1;g.k.connect=function(a,b,c,d){r8(0);this.Pc=a;this.La=b||{};c&&void 0!==d&&(this.La.OSID=c,this.La.OAID=d);this.Ya=this.td;this.Oa=kqb(this,null,this.Pc);C8(this)};
g.k.disconnect=function(){wqb(this);if(3==this.Bh){var a=this.kb++,b=this.Oa.clone();g.wl(b,"SID",this.C);g.wl(b,"RID",a);g.wl(b,"TYPE","terminate");F8(this,b);a=new t8(this,this.C,a);a.Ra=2;a.K=Y7(b.clone());b=!1;if(g.Ma.navigator&&g.Ma.navigator.sendBeacon)try{b=g.Ma.navigator.sendBeacon(a.K.toString(),"")}catch(c){}!b&&g.Ma.Image&&((new Image).src=a.K,b=!0);b||(a.j=Zpb(a.D,null),a.j.send(a.K));a.Ba=Date.now();u8(a)}Cqb(this)};
g.k.hh=function(){return 0==this.Bh};
g.k.getState=function(){return this.Bh};
g.k.xR=function(a){if(this.J)if(this.J=null,1==this.Bh){if(!a){this.kb=Math.floor(1E5*Math.random());a=this.kb++;var b=new t8(this,"",a),c=this.ma;this.Lb&&(c?(c=g.ld(c),g.od(c,this.Lb)):c=this.Lb);null!==this.K||this.wb||(b.Oa=c,c=null);var d;if(this.Xb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=zqb(this,b,d);e=this.Oa.clone();g.wl(e,"RID",a);g.wl(e,"CVER",22);this.Fa&&g.wl(e,"X-HTTP-Session-Id",this.Fa);F8(this,e);c&&(this.wb?d="headers="+g.Be(g.Lga(c))+"&"+d:this.K&&g.Al(e,this.K,c));jqb(this.u,b);this.jg&&g.wl(e,"TYPE","init");this.Xb?(g.wl(e,"$req",d),g.wl(e,"SID","null"),b.Lc=!0,Ypb(b,e,null)):Ypb(b,e,d);this.Bh=2}}else 3==this.Bh&&(a?Aqb(this,a):0==this.B.length||pqb(this.u)||Aqb(this))};
g.k.wR=function(){this.V=null;Bqb(this);if(this.Vc&&!(this.rb||null==this.j||0>=this.hd)){var a=2*this.hd;this.Ga=s8((0,g.Ya)(this.r6,this),a)}};
g.k.r6=function(){this.Ga&&(this.Ga=null,this.Ya=!1,this.rb=!0,r8(10),A8(this),Bqb(this))};
g.k.vO=function(a){this.j==a&&this.Vc&&!this.rb&&(vqb(this),this.rb=!0,r8(11))};
g.k.e0=function(){null!=this.oa&&(this.oa=null,A8(this),hqb(this),r8(19))};
g.k.Z9=function(a){a?r8(2):r8(1)};
g.k.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.k=Eqb.prototype;g.k.BR=function(){};
g.k.AR=function(){};
g.k.zR=function(){};
g.k.yR=function(){};
g.k.isActive=function(){return!0};
g.k.f0=function(){};g.eb(H8,g.Dd);H8.prototype.open=function(){this.j.D=this.B;this.J&&(this.j.Ra=!0);this.j.connect(this.D,this.u||void 0)};
H8.prototype.close=function(){this.j.disconnect()};
H8.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.C&&(c={},c.__data__=g.ij(a),a=c);b.B.push(new nqb(b.gg++,a));3==b.Bh&&C8(b)};
H8.prototype.xa=function(){this.j.D=null;delete this.B;this.j.disconnect();delete this.j;H8.Pf.xa.call(this)};
g.eb(Gqb,Opb);g.eb(Hqb,Ppb);g.eb(G8,Eqb);G8.prototype.BR=function(){this.j.dispatchEvent("m")};
G8.prototype.AR=function(a){this.j.dispatchEvent(new Gqb(a))};
G8.prototype.zR=function(a){this.j.dispatchEvent(new Hqb(a))};
G8.prototype.yR=function(){this.j.dispatchEvent("n")};var J8=new g.Dd;g.x(Kqb,g.xb);g.k=L8.prototype;g.k.Du=null;g.k.Vp=!1;g.k.mx=null;g.k.RJ=null;g.k.kx=null;g.k.lx=null;g.k.Sr=null;g.k.Ur=null;g.k.Eu=null;g.k.ej=null;g.k.fF=0;g.k.Xn=null;g.k.eF=null;g.k.Tr=null;g.k.RA=-1;g.k.uY=!0;g.k.Cu=!1;g.k.QJ=0;g.k.dF=null;var Pqb={},Oqb={};g.k=L8.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.h0=function(a){a=a.target;var b=this.dF;b&&3==g.Pj(a)?b.PJ():this.CR(a)};
g.k.CR=function(a){try{if(a==this.ej)a:{var b=g.Pj(this.ej),c=this.ej.u,d=this.ej.getStatus();if(g.Ze&&!g.Pc(10)||g.Rc&&!g.Oc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Rj(this.ej))break a;this.Cu||4!=b||7==c||(8==c||0>=d?this.j.Hn(3):this.j.Hn(2));Uqb(this);var e=this.ej.getStatus();this.RA=e;var f=g.Rj(this.ej);if(this.Vp=200==e){4==b&&N8(this);if(this.Fa){for(a=!0;!this.Cu&&this.fF<f.length;){var h=Qqb(this,f);if(h==Oqb){4==b&&(this.Tr=4,K8(15),a=!1);break}else if(h==Pqb){this.Tr=4;K8(16);a=
!1;break}else Vqb(this,h)}4==b&&0==f.length&&(this.Tr=1,K8(17),a=!1);this.Vp=this.Vp&&a;a||(N8(this),O8(this))}else Vqb(this,f);this.Vp&&!this.Cu&&(4==b?this.j.gF(this):(this.Vp=!1,M8(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Tr=3,K8(13)):(this.Tr=0,K8(14)),N8(this),O8(this)}}catch(l){}finally{}};
g.k.x8=function(a){I8((0,g.Ya)(this.w8,this,a),0)};
g.k.w8=function(a){this.Cu||(Uqb(this),Vqb(this,a),M8(this))};
g.k.vX=function(a){I8((0,g.Ya)(this.v8,this,a),0)};
g.k.v8=function(a){this.Cu||(N8(this),this.Vp=a,this.j.gF(this),this.j.Hn(4))};
g.k.cancel=function(){this.Cu=!0;N8(this)};
g.k.g0=function(){this.mx=null;var a=Date.now();0<=a-this.RJ?(2!=this.lx&&this.j.Hn(3),N8(this),this.Tr=2,K8(18),O8(this)):Tqb(this,this.RJ-a)};
g.k.getLastError=function(){return this.Tr};g.k=Yqb.prototype;g.k.TJ=null;g.k.Fj=null;g.k.pI=!1;g.k.QY=null;g.k.fG=null;g.k.IN=null;g.k.UJ=null;g.k.Ml=null;g.k.Wp=-1;g.k.SA=null;g.k.oB=null;g.k.connect=function(a){this.UJ=a;a=R8(this.j,null,this.UJ);K8(3);this.QY=Date.now();var b=this.j.ma;null!=b?(this.SA=b[0],(this.oB=b[1])?(this.Ml=1,Zqb(this)):(this.Ml=2,$qb(this))):(Z7(a,"MODE","init"),this.Fj=new L8(this),this.Fj.Du=this.TJ,Nqb(this.Fj,a,!1,null,!0),this.Ml=0)};
g.k.Y2=function(a){if(a)this.Ml=2,$qb(this);else{K8(4);var b=this.j;b.po=b.zs.Wp;V8(b,9)}a&&this.Hn(2)};
g.k.SJ=function(a){return this.j.SJ(a)};
g.k.abort=function(){this.Fj&&(this.Fj.cancel(),this.Fj=null);this.Wp=-1};
g.k.hh=function(){return!1};
g.k.DR=function(a,b){this.Wp=a.RA;if(0==this.Ml)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.po=this.Wp;V8(a,2);return}this.SA=c[0];this.oB=c[1]}else a=this.j,a.po=this.Wp,V8(a,2);else if(2==this.Ml)if(this.pI)K8(7),this.IN=Date.now();else if("11111"==b){if(K8(6),this.pI=!0,this.fG=Date.now(),a=this.fG-this.QY,!g.Ze||g.Pc(10)||500>a)this.Wp=200,this.Fj.cancel(),K8(12),S8(this.j,this,!0)}else K8(8),this.fG=this.IN=Date.now(),this.pI=!1};
g.k.gF=function(){this.Wp=this.Fj.RA;if(this.Fj.Vp)0==this.Ml?this.oB?(this.Ml=1,Zqb(this)):(this.Ml=2,$qb(this)):2==this.Ml&&((!g.Ze||g.Pc(10)?!this.pI:200>this.IN-this.fG)?(K8(11),S8(this.j,this,!1)):(K8(12),S8(this.j,this,!0)));else{0==this.Ml?K8(9):2==this.Ml&&K8(10);var a=this.j;this.Fj.getLastError();a.po=this.Wp;V8(a,2)}};
g.k.TA=function(){return this.j.TA()};
g.k.isActive=function(){return this.j.isActive()};
g.k.Hn=function(a){this.j.Hn(a)};g.k=arb.prototype;g.k.oo=null;g.k.UA=null;g.k.Oj=null;g.k.Sg=null;g.k.VJ=null;g.k.hF=null;g.k.ER=null;g.k.iF=null;g.k.VA=0;g.k.k0=0;g.k.Ei=null;g.k.Vr=null;g.k.Xp=null;g.k.Gu=null;g.k.zs=null;g.k.fJ=null;g.k.qx=-1;g.k.FR=-1;g.k.po=-1;g.k.ox=0;g.k.nx=0;g.k.Fu=8;g.eb(crb,g.xb);g.eb(drb,g.xb);g.k=arb.prototype;g.k.connect=function(a,b,c,d,e){K8(0);this.VJ=b;this.UA=c||{};d&&void 0!==e&&(this.UA.OSID=d,this.UA.OAID=e);this.V?(I8((0,g.Ya)(this.PT,this,a),100),frb(this)):this.PT(a)};
g.k.disconnect=function(){grb(this);if(3==this.j){var a=this.VA++,b=this.hF.clone();g.wl(b,"SID",this.C);g.wl(b,"RID",a);g.wl(b,"TYPE","terminate");U8(this,b);a=new L8(this,this.C,a);a.lx=2;a.Sr=Y7(b.clone());(new Image).src=a.Sr.toString();a.kx=Date.now();M8(a)}qrb(this)};
g.k.PT=function(a){this.zs=new Yqb(this);this.zs.TJ=this.oo;this.zs.u=this.D;this.zs.connect(a)};
g.k.hh=function(){return 0==this.j};
g.k.getState=function(){return this.j};
g.k.HR=function(a){this.Vr=null;lrb(this,a)};
g.k.GR=function(){this.Xp=null;this.Sg=new L8(this,this.C,"rpc",this.K);this.Sg.Du=this.oo;this.Sg.QJ=0;var a=this.ER.clone();g.wl(a,"RID","rpc");g.wl(a,"SID",this.C);g.wl(a,"CI",this.fJ?"0":"1");g.wl(a,"AID",this.qx);U8(this,a);if(!g.Ze||g.Pc(10))g.wl(a,"TYPE","xmlhttp"),Nqb(this.Sg,a,!0,this.iF,!1);else{g.wl(a,"TYPE","html");var b=this.Sg,c=!!this.iF;b.lx=3;b.Sr=Y7(a.clone());Sqb(b,c)}};
g.k.DR=function(a,b){if(0!=this.j&&(this.Sg==a||this.Oj==a))if(this.po=a.RA,this.Oj==a&&3==this.j)if(7<this.Fu){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Xp){if(this.Sg)if(this.Sg.kx+3E3<this.Oj.kx)T8(this),this.Sg.cancel(),this.Sg=null;else break a;orb(this);K8(19)}}else this.FR=a[1],0<this.FR-this.qx&&37500>a[2]&&this.fJ&&0==this.nx&&!this.Gu&&(this.Gu=I8((0,g.Ya)(this.l0,this),6E3));else V8(this,11)}else null!=b&&V8(this,11);else if(this.Sg==
a&&T8(this),!g.gc(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.qx=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.iF=c[2],c=c[3],null!=c?this.Fu=c:this.Fu=6,this.j=3,this.Ei&&this.Ei.KR(),this.ER=R8(this,this.TA()?this.iF:null,this.VJ),mrb(this)):"stop"==c[0]&&V8(this,7):3==this.j&&("stop"==c[0]?V8(this,7):"noop"!=c[0]&&this.Ei&&this.Ei.JR(c),this.nx=0)};
g.k.l0=function(){null!=this.Gu&&(this.Gu=null,this.Sg.cancel(),this.Sg=null,orb(this),K8(20))};
g.k.gF=function(a){if(this.Sg==a){T8(this);this.Sg=null;var b=2}else if(this.Oj==a)this.Oj=null,b=1;else return;this.po=a.RA;if(0!=this.j)if(a.Vp)if(1==b){b=Date.now()-a.kx;var c=J8;c.dispatchEvent(new crb(c,a.Eu?a.Eu.length:0,b,this.ox));erb(this);this.B.length=0}else mrb(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.po)){if(d=1==b)this.Oj||this.Vr||1==this.j||2<=this.ox?d=!1:(this.Vr=I8((0,g.Ya)(this.HR,this,a),nrb(this,this.ox)),this.ox++,d=!0);d=!(d||2==b&&orb(this))}if(d)switch(c){case 1:V8(this,
5);break;case 4:V8(this,10);break;case 3:V8(this,6);break;case 7:V8(this,12);break;default:V8(this,2)}}};
g.k.j0=function(a){if(!g.Gb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.k.Y9=function(a){a?K8(2):(K8(1),prb(this,8))};
g.k.SJ=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Mj;a.J=!1;return a};
g.k.isActive=function(){return!!this.Ei&&this.Ei.isActive(this)};
g.k.Hn=function(a){var b=J8;b.dispatchEvent(new drb(b,a))};
g.k.TA=function(){return!(!g.Ze||g.Pc(10))};
g.k=rrb.prototype;g.k.KR=function(){};
g.k.JR=function(){};
g.k.IR=function(){};
g.k.WJ=function(){};
g.k.LR=function(){return{}};
g.k.isActive=function(){return!0};g.k=srb.prototype;g.k.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.k.clear=function(){this.j=[];this.u=[]};
g.k.contains=function(a){return g.Gb(this.j,a)||g.Gb(this.u,a)};
g.k.remove=function(a){var b=this.j;var c=(0,g.m9a)(b,a);0<=c?(g.Hb(b,c),b=!0):b=!1;return b||g.Jb(this.u,a)};
g.k.hm=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.x(trb,g.xb);g.x(urb,g.xb);g.eb(W8,g.D);g.k=W8.prototype;g.k.p8=function(){this.Ri=Math.min(3E5,2*this.Ri);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Ri+15E3*Math.random();g.rq(this.j,a);this.u=Date.now()+a};
g.k.stop=function(){this.j.stop();this.u=0};
g.k.isActive=function(){return this.j.isActive()};
g.k.reset=function(){this.j.stop();this.Ri=5E3};g.eb(wrb,rrb);g.k=wrb.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.Qh=function(a){return this.B.Qh(a)};
g.k.qa=function(a,b){return this.B.qa.apply(this.B,arguments)};
g.k.dispose=function(){this.oa||(this.oa=!0,g.qb(this.B),this.disconnect(),g.qb(this.u),this.u=null,this.ra=function(){return""})};
g.k.isDisposed=function(){return this.oa};
g.k.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.ma="";this.u.stop();this.J=a||null;this.D=b||0;a=this.Ba+"/test";b=this.Ba+"/bind";var d=new arb(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Ra),e=this.j;e&&(e.Ei=null);d.Ei=this;this.j=d;xrb(this);if(this.j){d=g.Xy("ID_TOKEN");var f=this.j.oo||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.oo=f}e?(3!=e.getState()&&0==irb(e)||e.getState(),this.j.connect(a,b,this.K,e.C,e.qx)):c?this.j.connect(a,
b,this.K,c.sessionId,c.arrayId):this.j.connect(a,b,this.K)}};
g.k.disconnect=function(a){this.V=a||0;this.u.stop();xrb(this);this.j&&(3==this.j.getState()&&lrb(this.j),this.j.disconnect());this.V=0};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.od(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Yy()&&(xrb(this),hrb(this.j,a))};
g.k.KR=function(){this.u.reset();this.J=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)hrb(this.j,a[b])}this.qa("handlerOpened");Vob(this.Oa,"BROWSER_CHANNEL")};
g.k.IR=function(a){var b=2==a&&401==this.j.po;4==a||b||this.u.start();this.qa("handlerError",a,b);apb(this.Fa,"BROWSER_CHANNEL")};
g.k.WJ=function(a,b){if(!this.u.isActive())this.qa("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}Xob(this.Ga,"BROWSER_CHANNEL");a&&this.fb.j.XJ("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.kb.j.XJ("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.LR=function(){var a={v:2};this.ma&&(a.gsessionid=this.ma);0!=this.D&&(a.ui=""+this.D);0!=this.V&&(a.ui=""+this.V);this.J&&g.od(a,this.J);return a};
g.k.JR=function(a){"S"==a[0]?this.ma=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.qa("handlerMessage",new vrb(a[0],a[1]));Zob(this.La,"BROWSER_CHANNEL")};
g.k.Yy=function(){return!!this.j&&3==this.j.getState()};
g.k.zr=function(a){(this.K.loungeIdToken=a)||this.u.stop();if(this.Ya&&this.j){var b=this.j.oo||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.oo=b}};
g.k.Ns=function(){return this.K.id};
g.k.Vs=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.k.uw=function(){var a=this.u;g.sq(a.j);a.start()};
g.k.u9=function(){this.u.isActive();0==irb(this.j)&&this.connect(this.J,this.D)};X8.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
X8.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
X8.prototype.D=function(a){a(Error("request timed out"))};g.x(zrb,g.Dd);g.k=zrb.prototype;g.k.connect=function(a,b,c){this.Dd.connect(a,b,c)};
g.k.disconnect=function(a){this.Dd.disconnect(a)};
g.k.uw=function(){this.Dd.uw()};
g.k.Ns=function(){return this.Dd.Ns()};
g.k.Vs=function(){return this.Dd.Vs()};
g.k.Yy=function(){return this.Dd.Yy()};
g.k.o0=function(){this.dispatchEvent("channelOpened");var a=this.Dd,b=this.j;g.JA("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.fJ,sessionId:a.j.C,arrayId:a.j.qx});g.JA("yt-remote-session-screen-id",b);a=g8();b=h8();g.Gb(a,b)||a.push(b);rpb(a);tpb()};
g.k.m0=function(){this.dispatchEvent("channelClosed")};
g.k.n0=function(a){this.dispatchEvent(new trb(a))};
g.k.onError=function(a){this.dispatchEvent(new urb(a?1:0))};
g.k.sendMessage=function(a,b){this.Dd.sendMessage(a,b)};
g.k.zr=function(a){this.Dd.zr(a)};
g.k.dispose=function(){this.Dd.dispose()};g.k=Arb.prototype;
g.k.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.J&&(this.B.stop(),this.V=a,this.K=b,Crb(this),(a=g.Xy("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.A5&&(this.u.mdxVersion=""+this.j.A5),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities),this.j.u3&&(this.u.cst=this.j.u3),
this.j.authuser&&(this.u.authuser=this.j.authuser),this.j.pageId&&(this.u.pageId=this.j.pageId)),0!==this.K?this.u.ui=""+this.K:delete this.u.ui,Object.assign(this.u,this.V),this.channel=new H8(this.pathPrefix,{V4:"gsessionid",E5:this.C,F5:this.u}),this.channel.open(),this.J=2,Brb(this))};
g.k.disconnect=function(a){this.ma=void 0===a?0:a;this.B.stop();Crb(this);this.channel&&(0!==this.ma?this.u.ui=""+this.ma:delete this.u.ui,this.channel.close());this.ma=0};
g.k.Vs=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.k.uw=function(){var a=this.B;g.sq(a.j);a.start()};
g.k.sendMessage=function(a,b){this.channel&&(Crb(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.k.zr=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.k.Ns=function(){return this.j?this.j.id:""};
g.k.qa=function(a){return this.D.qa.apply(this.D,[a].concat(g.pa(g.Fa.apply(1,arguments))))};
g.k.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.k.Qh=function(a){return this.D.Qh(a)};
g.k.dispose=function(){this.oa||(this.oa=!0,g.qb(this.D),this.disconnect(),g.qb(this.B),this.Ba=function(){return""})};
g.k.isDisposed=function(){return this.oa};g.x(Drb,g.Dd);g.k=Drb.prototype;g.k.connect=function(a,b){this.j.connect(a,b)};
g.k.disconnect=function(a){this.j.disconnect(a)};
g.k.uw=function(){this.j.uw()};
g.k.Ns=function(){return this.j.Ns()};
g.k.Vs=function(){return this.j.Vs()};
g.k.Yy=function(){return 3===this.j.J};
g.k.s0=function(){this.dispatchEvent("channelOpened")};
g.k.q0=function(){this.dispatchEvent("channelClosed")};
g.k.r0=function(a){this.dispatchEvent(new trb(a))};
g.k.onError=function(){this.dispatchEvent(new urb(401===this.j.Vg?1:0))};
g.k.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.k.zr=function(a){this.j.zr(a)};
g.k.dispose=function(){this.j.dispose()};var Lrb=Date.now(),Z8=null,c9=Array(50),b9=-1,d9=!1;g.eb(e9,g.cG);e9.prototype.Kk=function(){return this.screens};
e9.prototype.contains=function(a){return!!opb(this.screens,a)};
e9.prototype.get=function(a){return a?f8(this.screens,a):null};
e9.prototype.info=function(a){$8(this.J,a)};g.x(Prb,g.cG);g.k=Prb.prototype;g.k.start=function(){!this.j&&isNaN(this.Jc)&&this.IX()};
g.k.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.Jc)||(g.vz(this.Jc),this.Jc=NaN)};
g.k.xa=function(){this.stop();g.cG.prototype.xa.call(this)};
g.k.IX=function(){this.Jc=NaN;this.j=g.zz(Y8(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.Ya)(this.u0,this),onError:(0,g.Ya)(this.t0,this),onTimeout:(0,g.Ya)(this.v0,this)})};
g.k.u0=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.J;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.qa("pairingComplete",new c8(a),b)};
g.k.t0=function(a){this.j=null;a.status&&404==a.status?this.u>=Jtb.length?this.qa("pairingFailed",Error("DIAL polling timed out")):(a=Jtb[this.u],this.Jc=g.tz((0,g.Ya)(this.IX,this),a),this.u++):this.qa("pairingFailed",Error("Server error "+a.status))};
g.k.v0=function(){this.j=null;this.qa("pairingFailed",Error("Server not responding"))};
var Jtb=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.eb(g9,e9);g.k=g9.prototype;g.k.start=function(){f9(this)&&this.qa("screenChange");!g.KA("yt-remote-lounge-token-expiration")&&Qrb(this);g.vz(this.j);this.j=g.tz((0,g.Ya)(this.start,this),1E4)};
g.k.add=function(a,b){f9(this);Mrb(this,a);h9(this,!1);this.qa("screenChange");b(a);a.token||Qrb(this)};
g.k.remove=function(a,b){var c=f9(this);Orb(this,a)&&(h9(this,!1),c=!0);b(a);c&&this.qa("screenChange")};
g.k.eJ=function(a,b,c,d){var e=f9(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,h9(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.qa("screenChange")};
g.k.xa=function(){g.vz(this.j);g9.Pf.xa.call(this)};
g.k.w4=function(a){f9(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}h9(this,!b);b&&$8(this.J,"Missed "+b+" lounge tokens.")};
g.k.v4=function(a){$8(this.J,"Requesting lounge tokens failed: "+a)};g.x(Srb,g.cG);g.k=Srb.prototype;g.k.start=function(){var a=parseInt(g.KA("yt-remote-fast-check-period")||"0",10);(this.C=g.$a()-144E5<a?0:a)?i9(this):(this.C=g.$a()+3E5,g.JA("yt-remote-fast-check-period",this.C),this.EP())};
g.k.isEmpty=function(){return g.hd(this.j)};
g.k.update=function(){Rrb("Updating availability on schedule.");var a=this.J(),b=g.Xc(this.j,function(c,d){return c&&!!f8(a,d)},this);
Vrb(this,b)};
g.k.xa=function(){g.vz(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.cG.prototype.xa.call(this)};
g.k.EP=function(){g.vz(this.B);this.B=NaN;this.u&&this.u.abort();var a=Wrb(this);if(Qob(a)){var b=Y8(this.D,"/pairing/get_screen_availability");this.u=yrb(this.D,b,{lounge_token:g.cd(a).join(",")},(0,g.Ya)(this.V7,this,a),(0,g.Ya)(this.U7,this))}else Vrb(this,{}),i9(this)};
g.k.V7=function(a,b){this.u=null;var c=g.cd(Wrb(this));if(g.Xb(c,g.cd(a))){b=b.screens||[];c={};for(var d=b.length,e=0;e<d;++e)c[a[b[e].loungeToken]]="online"==b[e].status;Vrb(this,c);i9(this)}else this.fg("Changing Screen set during request."),this.EP()};
g.k.U7=function(a){this.fg("Screen availability failed: "+a);this.u=null;i9(this)};
g.k.fg=function(a){$8("OnlineScreenService",a)};g.eb(j9,e9);g.k=j9.prototype;g.k.start=function(){this.u.start();this.j.start();this.screens.length&&(this.qa("screenChange"),this.j.isEmpty()||this.qa("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.k.eJ=function(a,b,c,d){this.u.contains(a)?this.u.eJ(a,b,c,d):(a="Updating name of unknown screen: "+a.name,$8(this.J,a),d(Error(a)))};
g.k.Kk=function(a){return a?this.screens:g.Lb(this.screens,g.zo(this.B,function(b){return!this.contains(b)},this))};
g.k.MR=function(){return g.zo(this.Kk(!0),function(a){return!!this.j.j[a.id]},this)};
g.k.NR=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new Prb(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.qb(l);e(k9(h,m),n)});
l.subscribe("pairingFailed",function(m){g.qb(l);f(m)});
l.start();return(0,g.Ya)(l.stop,l)};
g.k.w0=function(a,b,c,d){g.zz(Y8(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Ya)(function(e,f){e=new c8(f.screen||{});if(!e.name||$rb(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);$rb(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(k9(this,e))},this),
onError:(0,g.Ya)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Ya)(function(){d(Error("pairing request timed out."))},this)})};
g.k.xa=function(){g.qb(this.u);g.qb(this.j);j9.Pf.xa.call(this)};
g.k.F4=function(){bsb(this);this.qa("screenChange");this.j.update()};
j9.prototype.dispose=j9.prototype.dispose;g.eb(l9,g.cG);g.k=l9.prototype;g.k.vj=function(a){this.isDisposed()||(a&&(n9(this,""+a),this.qa("sessionFailed")),this.j=null,this.qa("sessionScreen",null))};
g.k.info=function(a){$8(this.Fa,a)};
g.k.OR=function(){return null};
g.k.TP=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Ya)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Ya)(function(){n9(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.xa=function(){this.TP("");l9.Pf.xa.call(this)};g.x(o9,l9);g.k=o9.prototype;g.k.SP=function(a){if(this.B){if(this.B==a)return;n9(this,"Overriding cast session with new session object");nsb(this);this.Ba=!1;this.ma="unknown";this.B.removeUpdateListener(this.ra);this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Ga)}this.B=a;this.B.addUpdateListener(this.ra);this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Ga);isb(this,"getMdxSessionStatus")};
g.k.kz=function(a){this.info("launchWithParams no-op for Cast: "+g.ij(a))};
g.k.stop=function(){this.B?this.B.stop((0,g.Ya)(function(){this.vj()},this),(0,g.Ya)(function(){this.vj(Error("Failed to stop receiver app."))},this)):this.vj(Error("Stopping cast device without session."))};
g.k.TP=function(){};
g.k.xa=function(){this.info("disposeInternal");nsb(this);this.B&&(this.B.removeUpdateListener(this.ra),this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Ga));this.B=null;l9.prototype.xa.call(this)};
g.k.E8=function(a,b){if(!this.isDisposed())if(b)if(b=$7(b),g.Ua(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.ij(b)),a){case "mdxSessionStatus":fsb(this,b);break;case "loungeToken":jsb(this,b);break;default:n9(this,"Unknown youtube message: "+a)}else n9(this,"Unable to parse message.");else n9(this,"No data in message.")};
g.k.UU=function(a,b,c,d){g.vz(this.V);this.V=0;Zrb(this.C,this.u.label,a,this.u.friendlyName,(0,g.Ya)(function(e){e?b(e):0<=d?(n9(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.V=g.tz((0,g.Ya)(this.UU,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.OR=function(){return this.B};
g.k.x0=function(a){this.isDisposed()||a||(n9(this,"Cast session died."),this.vj())};g.x(p9,l9);g.k=p9.prototype;g.k.SP=function(a){this.B=a;this.B.addUpdateListener(this.La)};
g.k.kz=function(a){this.Oa=a;this.oa()};
g.k.stop=function(){vsb(this);this.B?this.B.stop((0,g.Ya)(this.vj,this,null),(0,g.Ya)(this.vj,this,"Failed to stop DIAL device.")):this.vj()};
g.k.xa=function(){vsb(this);this.B&&this.B.removeUpdateListener(this.La);this.B=null;l9.prototype.xa.call(this)};
g.k.y0=function(a){this.isDisposed()||a||(n9(this,"DIAL session died."),this.D(),this.D=function(){},this.vj())};g.x(s9,l9);s9.prototype.stop=function(){this.vj()};
s9.prototype.SP=function(){};
s9.prototype.kz=function(){g.vz(this.B);this.B=NaN;var a=f8(this.C.Kk(),this.u.label);a?m9(this,a):this.vj(Error("No such screen"))};
s9.prototype.xa=function(){g.vz(this.B);this.B=NaN;l9.prototype.xa.call(this)};g.x(t9,g.cG);g.k=t9.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.V,[chrome.cast.Capability.AUDIO_OUT]);this.ma||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.J?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Ya)(this.F7,this);c=new chrome.cast.ApiConfig(c,(0,g.Ya)(this.rX,this),e,d,a);c.customDialLaunchCallback=(0,g.Ya)(this.F6,this);
chrome.cast.initialize(c,(0,g.Ya)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),Irb(),this.u.subscribe("onlineScreenChange",(0,g.Ya)(this.PR,this)),this.B=ysb(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ya)(function(f){this.fg("Failed to set initial custom receivers: "+g.ij(f))},this)),this.qa("yt-remote-cast2-availability-change",v9(this)),b(!0))},this),(0,g.Ya)(function(f){this.fg("Failed to initialize API: "+g.ij(f));
b(!1)},this))};
g.k.z9=function(a,b){u9("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.j;if(!a||c&&c.id!=a)u9("Unsetting old screen status: "+this.j.u.friendlyName),w9(this,null)}if(a&&b){if(!this.j){c=f8(this.u.Kk(),a);if(!c){u9("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){u9("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=wsb(this,c);a||(u9("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ya)(function(d){this.fg("Failed to set initial custom receivers: "+g.ij(d))},this)));
u9("setConnectedScreenStatus: new active receiver: "+a.friendlyName);w9(this,new s9(this.u,a),!0)}this.j.TP(b)}else u9("setConnectedScreenStatus: no screen.")};
g.k.B9=function(a){this.isDisposed()?this.fg("Setting connection data on disposed cast v2"):this.j?this.j.kz(a):this.fg("Setting connection data without a session")};
g.k.A0=function(){this.isDisposed()?this.fg("Stopping session on disposed cast v2"):this.j?(this.j.stop(),w9(this,null)):u9("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Ya)(this.rX,this),(0,g.Ya)(this.Y7,this))};
g.k.xa=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Ya)(this.PR,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=Frb,b=g.Pa("yt.mdx.remote.debug.handlers_");g.Jb(b||[],a);g.qb(this.j);g.cG.prototype.xa.call(this)};
g.k.fg=function(a){$8("Controller",a)};
g.k.tX=function(a,b){this.j==a&&(b||w9(this,null),this.qa("yt-remote-cast2-session-change",b))};
g.k.C7=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),u9("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.u.label!=a.label)u9("onReceiverAction_: Stopping active receiver: "+this.j.u.friendlyName),this.j.stop();else{u9("onReceiverAction_: Casting to active receiver.");this.j.j&&this.qa("yt-remote-cast2-session-change",this.j.j);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:w9(this,
new s9(this.u,a));break;case chrome.cast.ReceiverType.DIAL:w9(this,new p9(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:w9(this,new o9(this.u,a,this.config_));break;default:this.fg("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.u.label==a.label?this.j.stop():this.fg("Stopping receiver w/o session: "+a.friendlyName)}else this.fg("onReceiverAction_ called without receiver.")};
g.k.F6=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.fg("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.u:null;if(!c||c.label!=b.label)return this.fg("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.j)return u9("Reselecting dial screen."),
this.qa("yt-remote-cast2-session-change",this.j.j),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.fg('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);w9(this,new p9(this.u,b,this.C,this.config_))}b=this.j;b.V=a;b.V.appState==chrome.cast.DialAppState.RUNNING?(a=b.V.extraData||{},c=a.screenId||null,q9(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=ssb(b,{name:b.u.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.V.receiver.label,screenIdType:"shortLived"},
a.loungeTokenRefreshIntervalMs):(g.dz(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=tsb(b,c)):a=tsb(b,c)):a=qsb(b);return a};
g.k.rX=function(a){var b=this;if(!this.isDisposed()&&!this.J){u9("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)u9("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),w9(this,new o9(this.u,c,this.config_),!0);else{this.fg("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.u,e=f8(this.u.Kk(),
d.label);e&&d8(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(u9("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.qb(this.j),this.j=new o9(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Ya)(this.tX,this,this.j)),this.j.subscribe("sessionFailed",function(){return xsb(b,b.j)}),this.j.kz(null));
this.j.SP(a)}}};
g.k.z0=function(){return this.j?this.j.OR():null};
g.k.Y7=function(a){this.isDisposed()||(this.fg("Failed to estabilish a session: "+g.ij(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&w9(this,null),this.qa("yt-remote-cast2-session-failed"))};
g.k.F7=function(a){u9("Receiver availability updated: "+a);if(!this.isDisposed()){var b=v9(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;v9(this)!=b&&this.qa("yt-remote-cast2-availability-change",v9(this))}};
g.k.PR=function(){this.isDisposed()||(this.B=ysb(this),u9("Updating custom receivers: "+g.ij(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ya)(function(){this.fg("Failed to set custom receivers.")},this)),this.qa("yt-remote-cast2-availability-change",v9(this)))};
t9.prototype.setLaunchParams=t9.prototype.B9;t9.prototype.setConnectedScreenStatus=t9.prototype.z9;t9.prototype.stopSession=t9.prototype.A0;t9.prototype.getCastSession=t9.prototype.z0;t9.prototype.requestSession=t9.prototype.requestSession;t9.prototype.init=t9.prototype.init;t9.prototype.dispose=t9.prototype.dispose;var Hsb=[];g.k=D9.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";Nsb(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.fp=a.hasPrevious,this.Ok=a.hasNext,this.K=a.playerTime,this.J=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.V=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.pd=function(){return 1==this.playerState};
g.k.jl=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+E9(this):this.D};
g.k.clone=function(){return new D9(Osb(this))};g.x(J9,g.cG);g.k=J9.prototype;g.k.getState=function(){return this.B};
g.k.Vs=function(){return this.C.getReconnectTimeout()};
g.k.uw=function(){this.C.reconnect()};
g.k.play=function(){L9(this)?(this.j?this.j.play(null,g.Hd,P9(this,"play")):O9(this,"play"),Rsb(this,1,G9(K9(this))),this.qa("remotePlayerChange")):M9(this,this.play)};
g.k.pause=function(){L9(this)?(this.j?this.j.pause(null,g.Hd,P9(this,"pause")):O9(this,"pause"),Rsb(this,2,G9(K9(this))),this.qa("remotePlayerChange")):M9(this,this.pause)};
g.k.seekTo=function(a){if(L9(this)){if(this.j){var b=K9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.pd()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.Hd,P9(this,"seekTo",{newTime:a}))}else O9(this,"seekTo",{newTime:a});Rsb(this,3,a);this.qa("remotePlayerChange")}else M9(this,g.Za(this.seekTo,a))};
g.k.stop=function(){if(L9(this)){this.j?this.j.stop(null,g.Hd,P9(this,"stopVideo")):O9(this,"stopVideo");var a=K9(this);a.index=-1;a.videoId="";Nsb(a);N9(this,a);this.qa("remotePlayerChange")}else M9(this,this.stop)};
g.k.setVolume=function(a,b){if(L9(this)){var c=K9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Ya)(function(){a9("set receiver volume: "+d)},this),(0,g.Ya)(function(){this.fg("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Ya)(function(){a9("set receiver muted: "+b)},this),(0,g.Ya)(function(){this.fg("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);O9(this,"setVolume",e)}c.muted=b;c.volume=a;N9(this,c)}else M9(this,g.Za(this.setVolume,a,b))};
g.k.QR=function(a,b){if(L9(this)){var c=K9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.ij(b.style),g.od(a,c.trackData));O9(this,"setSubtitlesTrack",a);N9(this,c)}else M9(this,g.Za(this.QR,a,b))};
g.k.setAudioTrack=function(a,b){L9(this)?(b=b.getLanguageInfo().getId(),O9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=K9(this),a.audioTrackId=b,N9(this,a)):M9(this,g.Za(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=K9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);H9(l,a,c||0);void 0!==b&&(F9(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.ij(h));O9(this,"setPlaylist",m);d||N9(this,l)};
g.k.iI=function(a,b){if(L9(this)){if(a&&b){var c=K9(this);H9(c,a,b);N9(this,c)}O9(this,"previous")}else M9(this,g.Za(this.iI,a,b))};
g.k.nextVideo=function(a,b){if(L9(this)){if(a&&b){var c=K9(this);H9(c,a,b);N9(this,c)}O9(this,"next")}else M9(this,g.Za(this.nextVideo,a,b))};
g.k.HF=function(){if(L9(this)){O9(this,"clearPlaylist");var a=K9(this);a.reset();N9(this,a);this.qa("remotePlayerChange")}else M9(this,this.HF)};
g.k.eU=function(){L9(this)?O9(this,"dismissAutoplay"):M9(this,this.eU)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.qa("proxyStateChange",a,this.B)}g.cG.prototype.dispose.call(this)};
g.k.xa=function(){Qsb(this);this.C=null;this.D.clear();I9(this,null);g.cG.prototype.xa.call(this)};
g.k.WP=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.qa("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.k.A7=function(a,b){this.qa(a,b)};
g.k.v6=function(a){if(!a)this.jD(null),I9(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=K9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)a9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,N9(this,b)}};
g.k.jD=function(a){a9("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.V);if(this.j=a)this.j.addUpdateListener(this.V),Ssb(this),this.qa("remotePlayerChange")};
g.k.u6=function(a){a?(Ssb(this),this.qa("remotePlayerChange")):this.jD(null)};
g.k.sQ=function(){O9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.y6=function(){var a=Ksb();a&&I9(this,a)};
g.k.fg=function(a){$8("CP",a)};g.x(S9,g.cG);g.k=S9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.La&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;F9(this.j,
n);this.D="UNSUPPORTED";c=this.La?"setInitialState":"setPlaylist";Q9("Connecting with "+c+" and params: "+g.ij(m));this.u.connect({method:c,params:g.ij(m)},a,upb())}else Q9("Connecting without params"),this.u.connect({},a,upb());Wsb(this)};
g.k.zr=function(a){this.u.zr(a)};
g.k.dispose=function(){this.isDisposed()||(g.Na("yt.mdx.remote.remoteClient_",null),this.qa("beforeDispose"),R9(this,3));g.cG.prototype.dispose.call(this)};
g.k.xa=function(){Xsb(this);Zsb(this);Ysb(this);g.vz(this.V);this.V=NaN;g.vz(this.ma);this.ma=NaN;this.C=null;g.yA(this.oa);this.oa.length=0;this.u.dispose();g.cG.prototype.xa.call(this);this.D=this.K=this.B=this.j=this.u=null};
g.k.NV=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.u(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.l4=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.jC())?this.u.Yy()&&isNaN(this.J)&&(a=1):a=2);return a};
g.k.Cy=function(a){Q9("Disconnecting with "+a);g.Na("yt.mdx.remote.remoteClient_",null);Xsb(this);this.qa("beforeDisconnect",a);1==a&&i8();this.u.disconnect(a);this.dispose()};
g.k.i4=function(){var a=this.j;this.C&&(a=this.j.clone(),H9(a,this.C,a.index));return Osb(a)};
g.k.C9=function(a){var b=this,c=new D9(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.vz(this.V),this.V=g.tz(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&T9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&G9(this.j)==G9(c)&&g.ij(this.j.trackData)==g.ij(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.bc(d,function(e){this.qa(e)},this)};
g.k.QU=function(){var a=this.u.Ns(),b=g.Eb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.jC=function(){return this.u.Vs()};
g.k.d4=function(){return this.D||"UNSUPPORTED"};
g.k.e4=function(){return this.K||""};
g.k.B0=function(){!isNaN(this.jC())&&this.u.uw()};
g.k.y9=function(a,b){T9(this,a,b);atb(this)};
g.k.RR=function(){var a=g.Kz("SID","")||"",b=g.Kz("SAPISID","")||"",c=g.Kz("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Zf(g.Yf(a),2);b=g.Zf(g.Yf(b),2);c=g.Zf(g.Yf(c),2);return g.Zf(g.Yf(a+","+b+","+c),2)};
S9.prototype.subscribe=S9.prototype.subscribe;S9.prototype.unsubscribeByKey=S9.prototype.Qh;S9.prototype.getProxyState=S9.prototype.l4;S9.prototype.disconnect=S9.prototype.Cy;S9.prototype.getPlayerContextData=S9.prototype.i4;S9.prototype.setPlayerContextData=S9.prototype.C9;S9.prototype.getOtherConnectedRemoteId=S9.prototype.QU;S9.prototype.getReconnectTimeout=S9.prototype.jC;S9.prototype.getAutoplayMode=S9.prototype.d4;S9.prototype.getAutoplayVideoId=S9.prototype.e4;S9.prototype.reconnect=S9.prototype.B0;
S9.prototype.sendMessage=S9.prototype.y9;S9.prototype.getXsrfToken=S9.prototype.RR;S9.prototype.isCapabilitySupportedOnConnectedDevices=S9.prototype.NV;g.x(mtb,e9);g.k=mtb.prototype;g.k.Kk=function(a){return this.gh.$_gs(a)};
g.k.contains=function(a){return!!this.gh.$_c(a)};
g.k.get=function(a){return this.gh.$_g(a)};
g.k.start=function(){this.gh.$_st()};
g.k.add=function(a,b,c){this.gh.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.gh.$_r(a,b,c)};
g.k.eJ=function(a,b,c,d){this.gh.$_un(a,b,c,d)};
g.k.xa=function(){for(var a=0,b=this.j.length;a<b;++a)this.gh.$_ubk(this.j[a]);this.j.length=0;this.gh=null;e9.prototype.xa.call(this)};
g.k.C0=function(){this.qa("screenChange")};
g.k.j7=function(){this.qa("onlineScreenChange")};
j9.prototype.$_st=j9.prototype.start;j9.prototype.$_gspc=j9.prototype.w0;j9.prototype.$_gsppc=j9.prototype.NR;j9.prototype.$_c=j9.prototype.contains;j9.prototype.$_g=j9.prototype.get;j9.prototype.$_a=j9.prototype.add;j9.prototype.$_un=j9.prototype.eJ;j9.prototype.$_r=j9.prototype.remove;j9.prototype.$_gs=j9.prototype.Kk;j9.prototype.$_gos=j9.prototype.MR;j9.prototype.$_s=j9.prototype.subscribe;j9.prototype.$_ubk=j9.prototype.Qh;var d$=null,g$=!1,U9=null,V9=null,xtb=null,Z9=[];g.x(Ctb,g.D);g.k=Ctb.prototype;g.k.xa=function(){g.D.prototype.xa.call(this);this.j.stop();this.u.stop();this.K.stop();var a=this.Cc;a.unsubscribe("proxyStateChange",this.qX,this);a.unsubscribe("remotePlayerChange",this.qD,this);a.unsubscribe("remoteQueueChange",this.RH,this);a.unsubscribe("previousNextChange",this.nX,this);a.unsubscribe("nowAutoplaying",this.iX,this);a.unsubscribe("autoplayDismissed",this.NW,this);this.Cc=this.module=null};
g.k.Nk=function(a){var b=g.Fa.apply(1,arguments);if(2!=this.Cc.B)if(h$(this)){if(1081!=K9(this.Cc).playerState||"control_seek"!==a)switch(a){case "control_toggle_play_pause":K9(this.Cc).pd()?this.Cc.pause():this.Cc.play();break;case "control_play":this.Cc.play();break;case "control_pause":this.Cc.pause();break;case "control_seek":this.J.PJ(b[0],b[1]);break;case "control_subtitles_set_track":Etb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.I.getCurrentTime();i$(this,0===b?void 0:b);break;case "control_seek":i$(this,b[0]);break;case "control_subtitles_set_track":Etb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.s6=function(a){this.K.X_(a)};
g.k.t$=function(a){this.Nk("control_subtitles_set_track",g.hd(a)?null:a)};
g.k.YY=function(){var a=this.I.getOption("captions","track");g.hd(a)||Etb(this,a)};
g.k.Ac=function(a){this.module.Ac(a,this.I.getVideoData().lengthSeconds)};
g.k.U6=function(){g.hd(this.B)||Ftb(this,this.B);this.C=!1};
g.k.qX=function(a,b){this.u.stop();2===b&&this.PY()};
g.k.qD=function(){if(h$(this)){this.j.stop();var a=K9(this.Cc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.module.Lh=1;break;case 1082:case 1083:this.module.Lh=0;break;default:this.module.Lh=-1}switch(a.playerState){case 1081:case 1:this.xc(new g.gQ(8));this.MY();break;case 1085:case 3:this.xc(new g.gQ(9));break;case 1083:case 0:this.xc(new g.gQ(2));this.J.stop();this.Ac(this.I.getVideoData().lengthSeconds);break;case 1084:this.xc(new g.gQ(4));break;case 2:this.xc(new g.gQ(4));
this.Ac(G9(a));break;case -1:this.xc(new g.gQ(64));break;case -1E3:this.xc(new g.gQ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",bG:2}))}a=K9(this.Cc).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,Ftb(this,a));a=K9(this.Cc);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.V.isActive()||this.CZ()}else Dtb(this)};
g.k.nX=function(){this.I.qa("mdxpreviousnextchange")};
g.k.RH=function(){h$(this)||Dtb(this)};
g.k.iX=function(a){isNaN(a)||this.I.qa("mdxnowautoplaying",a)};
g.k.NW=function(){this.I.qa("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){h$(this)&&this.Cc.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===K9(this.Cc).playerState?i$(this,a):b&&this.Cc.seekTo(a)};
g.k.CZ=function(){var a=this;if(h$(this)){var b=K9(this.Cc);this.events.Kc(this.ma);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.ma=this.events.T(this.I,"onVolumeChange",function(c){Atb(a,c)})}};
g.k.MY=function(){this.j.stop();if(!this.Cc.isDisposed()){var a=K9(this.Cc);a.pd()&&this.xc(new g.gQ(8));this.Ac(G9(a));this.j.start()}};
g.k.PY=function(){this.u.stop();this.j.stop();var a=this.Cc.Vs();2==this.Cc.B&&!isNaN(a)&&this.u.start()};
g.k.xc=function(a){this.u.stop();var b=this.D;if(!g.DAa(b,a)){var c=g.HP(a,2);c!==g.HP(this.D,2)&&this.I.cA(c);this.D=a;Htb(this.module,b,a)}};g.x(j$,g.X);j$.prototype.wd=function(){this.j.show()};
j$.prototype.Mb=function(){this.j.hide()};
j$.prototype.u=function(){k8("mdx-privacy-popup-cancel");this.Mb()};
j$.prototype.B=function(){k8("mdx-privacy-popup-confirm");this.Mb()};g.x(k$,g.X);k$.prototype.onStateChange=function(a){this.yc(a.state)};
k$.prototype.yc=function(a){if(3===this.api.getPresentingPlayerType()){var b={RECEIVER_NAME:this.api.getOption("remote","currentReceiver").name};a=g.HP(a,128)?g.VP("Error on $RECEIVER_NAME",b):a.pd()||g.lQ(a)?g.VP("Playing on $RECEIVER_NAME",b):g.VP("Connected to $RECEIVER_NAME",b);this.updateValue("statustext",a);this.j.show()}else this.j.hide()};g.x(l$,g.gW);l$.prototype.C=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.Rt=g.cc(a,this.j,this),g.hW(this,g.Gm(a,this.j)),a=this.I.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.Hj(a),this.enable(!0)):this.enable(!1)};
l$.prototype.j=function(a){return a.key};
l$.prototype.zk=function(a){return"cast-selector-receiver"===a?"Cast...":this.Rt[a].name};
l$.prototype.ph=function(a){g.gW.prototype.ph.call(this,a);this.I.setOption("remote","currentReceiver",this.Rt[a]);this.Kb.Mb()};g.x(Gtb,g.dU);g.k=Gtb.prototype;
g.k.create=function(){var a=this.player.W(),b=g.xM(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};rtb(b,a);this.subscriptions.push(g.iD("yt-remote-before-disconnect",this.q6,this));this.subscriptions.push(g.iD("yt-remote-connection-change",this.G7,this));this.subscriptions.push(g.iD("yt-remote-receiver-availability-change",this.pX,
this));this.subscriptions.push(g.iD("yt-remote-auto-connect",this.E7,this));this.subscriptions.push(g.iD("yt-remote-receiver-resumed",this.D7,this));this.subscriptions.push(g.iD("mdx-privacy-popup-confirm",this.X8,this));this.subscriptions.push(g.iD("mdx-privacy-popup-cancel",this.W8,this));this.pX()};
g.k.load=function(){this.player.cancelPlayback();g.dU.prototype.load.call(this);this.Ol=new Ctb(this,this.player,this.Cc);var a=(a=ztb())?a.currentTime:0;var b=wtb()?new J9(c$(),void 0):null;0==a&&b&&(a=G9(K9(b)));0!==a&&this.Ac(a);Htb(this,this.hf,this.hf);this.player.Hp(6)};
g.k.unload=function(){this.player.qa("mdxautoplaycanceled");this.Cs=this.wp;g.sb(this.Ol,this.Cc);this.Cc=this.Ol=null;g.dU.prototype.unload.call(this);this.player.Hp(5);m$(this)};
g.k.xa=function(){g.jD(this.subscriptions);g.dU.prototype.xa.call(this)};
g.k.lD=function(a){var b=g.Fa.apply(1,arguments);this.loaded&&this.Ol.Nk.apply(this.Ol,[a].concat(g.pa(b)))};
g.k.getAdState=function(){return this.Lh};
g.k.fp=function(){return this.Cc?K9(this.Cc).fp:!1};
g.k.Ok=function(){return this.Cc?K9(this.Cc).Ok:!1};
g.k.Ac=function(a,b){this.YV=a||0;this.player.qa("progresssync",a,b);this.player.Qa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.YV};
g.k.getProgressState=function(){var a=K9(this.Cc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:1081!=a.playerState&&this.player.Kh(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+E9(a):a.B,isAtLiveHead:1>=(a.u?a.j+E9(a):a.j)-this.getCurrentTime(),loaded:a.V,seekableEnd:a.u?a.j+E9(a):a.j,seekableStart:0<a.C?a.C+E9(a):a.C,offset:0,viewerLivestreamJoinTime:b.viewerLivestreamJoinTime}};
g.k.nextVideo=function(){this.Cc&&this.Cc.nextVideo()};
g.k.iI=function(){this.Cc&&this.Cc.iI()};
g.k.q6=function(a){1===a&&(this.hP=this.Cc?K9(this.Cc):null)};
g.k.G7=function(){var a=wtb()?new J9(c$(),void 0):null;if(a){var b=this.Cs;this.loaded&&this.unload();this.Cc=a;this.hP=null;b.key!==this.wp.key&&(this.Cs=b,this.load())}else g.qb(this.Cc),this.Cc=null,this.loaded&&(this.unload(),(a=this.hP)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,G9(a)));this.player.qa("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.pX=function(){var a=[this.wp],b=a.concat,c=stb();A9()&&g.KA("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Rt=b.call(a,c);a=utb()||this.wp;n$(this,a);this.player.Qa("onMdxReceiversChange")};
g.k.E7=function(){var a=utb();n$(this,a)};
g.k.D7=function(){this.Cs=utb()};
g.k.X8=function(){this.KD=!0;m$(this);g$=!1;d$&&f$(d$,1);d$=null};
g.k.W8=function(){this.KD=!1;m$(this);n$(this,this.wp);this.Cs=this.wp;g$=!1;d$=null;this.player.playVideo()};
g.k.Eh=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Rt;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Lsb():n$(this,b)),this.loaded?this.Cs:this.wp;case "quickCast":return 2===this.Rt.length&&"cast-selector-receiver"===this.Rt[1].key?(b&&Lsb(),!0):!1}};
g.k.sQ=function(){this.Cc.sQ()};
g.k.ll=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.cU("remote",Gtb);})(_yt_player);


}
/*
     FILE ARCHIVED ON 20:53:42 Jun 27, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:14:21 Jul 12, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 122.036
  exclusion.robots: 0.112
  exclusion.robots.policy: 0.096
  cdx.remote: 0.081
  esindex: 0.013
  LoadShardBlock: 38.72 (3)
  PetaboxLoader3.datanode: 46.695 (4)
  load_resource: 84.927
  PetaboxLoader3.resolve: 56.12
*/