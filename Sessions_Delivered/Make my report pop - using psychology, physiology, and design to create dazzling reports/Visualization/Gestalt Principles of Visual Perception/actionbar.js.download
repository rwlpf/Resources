(function(){function matches(node,selector){if(!node){return undefined;}
if(!Element.prototype.matches&&!Element.prototype.msMatchesSelector){throw new Error('Unsupported browser');}
return Element.prototype.matches?node.matches(selector):node.msMatchesSelector(selector);}
function closest(node,selector){if(!node){return undefined;}
if(Element.prototype.closest){return node.closest(selector);}
do{if(matches(node,selector)){return node;}
node=node.parentElement||node.parentNode;}while(node!==null&&node.nodeType===1);return null;}
var wpcom=window.wpcom||{};wpcom.actionbar={};wpcom.actionbar.data=window.actionbardata;var fbd=wpcom.actionbar.data;function postAction(params,callback){var req=new XMLHttpRequest();callback=callback||function(){};if(!params.action){return;}
var content='action='+encodeURIComponent(params.action);for(var param in params){if(param!=='action'){content+='&'+param+'='+encodeURIComponent(params[param]).replace(/%20/g,'+');}}
req.open('POST',fbd.xhrURL);req.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');req.setRequestHeader('X-Requested-With','XMLHttpRequest');req.addEventListener('load',callback);req.send(content);}
function bumpStat(stat,callback){postAction({'action':'actionbar_stats','stat':stat},callback);}
function followRequest(action){postAction({'action':action,'_wpnonce':fbd.nonce,'source':'actionbar','blog_id':fbd.siteID});}
var body=document.body;var lastScrollTop=0;var lastScrollDir,fhtml,fbhtml,fbHtmlLi,followingbtn,followbtn,fbdf,slkhtml='',foldhtml='',reporthtml='',customizeIcon,editIcon,statsIcon,themeHtml='',signupHtml='',loginHtml='',viewReaderHtml='',editSubsHtml='',editFollowsHtml='',followBubbleHtml='',toggleactionbar,actionbar;if(window!=window.top){return;}
fhtml='<ul>';customizeIcon='<svg class="gridicon gridicon__customize" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M2 6c0-1.505.78-3.08 2-4 0 .845.69 2 2 2 1.657 0 3 1.343 3 3 0 .386-.08.752-.212 1.09.74.594 1.476 1.19 2.19 1.81L8.9 11.98c-.62-.716-1.214-1.454-1.807-2.192C6.753 9.92 6.387 10 6 10c-2.21 0-4-1.79-4-4zm12.152 6.848l1.34-1.34c.607.304 1.283.492 2.008.492 2.485 0 4.5-2.015 4.5-4.5 0-.725-.188-1.4-.493-2.007L18 9l-2-2 3.507-3.507C18.9 3.188 18.225 3 17.5 3 15.015 3 13 5.015 13 7.5c0 .725.188 1.4.493 2.007L3 20l2 2 6.848-6.848c1.885 1.928 3.874 3.753 5.977 5.45l1.425 1.148 1.5-1.5-1.15-1.425c-1.695-2.103-3.52-4.092-5.448-5.977z" data-reactid=".2.1.1:0.1b.0"></path></g></svg>';if(fbd.canCustomizeSite&&fbd.isLoggedIn){fhtml+='<li class="actnbr-btn actnbr-customize"><a href="'+fbd.customizeLink+'">'+customizeIcon+'<span>'+fbd.i18n.customize+'<span></a></li>';}
editIcon='<svg class="gridicon gridicon__pencil" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M13 6l5 5-9.507 9.507c-.686-.686-.69-1.794-.012-2.485l-.002-.003c-.69.676-1.8.673-2.485-.013-.677-.677-.686-1.762-.036-2.455l-.008-.008c-.694.65-1.78.64-2.456-.036L13 6zm7.586-.414l-2.172-2.172c-.78-.78-2.047-.78-2.828 0L14 5l5 5 1.586-1.586c.78-.78.78-2.047 0-2.828zM3 18v3h3c0-1.657-1.343-3-3-3z"></path></g></svg>';if(fbd.canEditPost){fhtml+='<li class="actnbr-btn actnbr-edit"><a href="'+fbd.editLink+'">'+editIcon+'<span>'+fbd.i18n.edit+'</span></a></li>';}
statsIcon='<svg class="gridicon gridicon__stats-alt" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M21,21H3v-2h18V21z M8,10H4v7h4V10z M14,3h-4v14h4V3z M20,6h-4v11h4V6z"/></path></g></svg>';if(fbd.canEditPost){fhtml+='<li class="actnbr-btn actnbr-stats"><a href="'+fbd.statsLink+'">'+statsIcon+'<span>'+fbd.i18n.stats+'</span></a></li>';}
followingbtn='<svg class="gridicon gridicon__following" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M23 13.482L15.508 21 12 17.4l1.412-1.388 2.106 2.188 6.094-6.094L23 13.482zm-7.455 1.862L20 10.89V2H2v14c0 1.1.9 2 2 2h4.538l4.913-4.832 2.095 2.176zM8 13H4v-1h4v1zm3-2H4v-1h7v1zm0-2H4V8h7v1zm7-3H4V4h14v2z"/></g></svg>';followbtn='<svg class="gridicon gridicon__follow" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M23 16v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3zM20 2v9h-4v3h-3v4H4c-1.1 0-2-.9-2-2V2h18zM8 13v-1H4v1h4zm3-3H4v1h7v-1zm0-2H4v1h7V8zm7-4H4v2h14V4z"/></g></svg>';fbhtml='<a class="actnbr-action actnbr-actn-follow'+(fbd.isFollowing?' no-display':'')+'" href="">'+followbtn+'<span>'+fbd.i18n.follow+'</span></a>';fbhtml+='<a class="actnbr-action actnbr-actn-following'+(fbd.isFollowing?'':' no-display')+'" href="">'+followingbtn+'<span>'+fbd.i18n.following+'</span></a>';if(fbd.isLoggedIn){followBubbleHtml=' \
				<ul> \
					<li class="actnbr-sitename"><a href="'+fbd.siteURL+'">'+fbd.icon+' '+actionBarEscapeHtml(fbd.siteName)+'</a></li> \
					<li class="actnbr-message"></li> \
				</ul> \
			';}else{followBubbleHtml=' \
				<ul> \
					<li class="actnbr-sitename"><a href="'+fbd.siteURL+'">'+fbd.icon+' '+actionBarEscapeHtml(fbd.siteName)+'</a></li> \
					<form/> \
					<li class="actnbr-login-nudge"><div>'+fbd.i18n.alreadyUser+'</div></li> \
				</ul> \
			';}
if(fbd.canFollow&&!(fbd.canEditPost||fbd.canCustomizeSite)){fhtml+='<li class="actnbr-btn actnbr-hidden"> \
				'+fbhtml+' \
				<div class="actnbr-popover tip tip-top-left actnbr-notice"> \
					<div class="tip-arrow"></div> \
					<div class="tip-inner actnbr-follow-bubble">'+followBubbleHtml+'</div> \
				</div> \
					</li>';}
if(!fbd.canCustomizeSite){reporthtml='<li class="flb-report"><a href="http://en.wordpress.com/abuse/">'+fbd.i18n.report+'</a></li>';}
if(fbd.isSingular){slkhtml='<li class="actnbr-shortlink"><a href="'+fbd.shortlink+'">'+fbd.i18n.shortlink+'</a></li>'}
foldhtml='<li class="actnbr-fold"><a href="">'+fbd.i18n.foldBar+'</a></li>'
if(fbd.isFolded){foldhtml='<li class="actnbr-fold"><a href="">'+fbd.i18n.unfoldBar+'</a></li>'}
if(!fbd.isLoggedIn&&!fbd.canFollow){foldhtml='';}
if(fbd.isLoggedIn){if(''!=fbd.themeURL){themeHtml='<li class="actnbr-theme"><a href="'+fbd.themeURL+'">'+fbd.i18n.themeInfo.replace(/{theme}/,fbd.themeName)+'</a></li>';}
if(fbd.canFollow){if(fbd.isSingular){viewReaderHtml='<li class="actnbr-reader"><a href="https://wordpress.com/read/blogs/'+fbd.siteID+'/posts/'+fbd.postID+'">'+fbd.i18n.viewReadPost+'</a></li>';}else{viewReaderHtml='<li class="actnbr-reader"><a href="https://wordpress.com/read/'+(fbd.feedID?'feeds/'+fbd.feedID:'blogs/'+fbd.siteID)+'">'+fbd.i18n.viewReader+'</a></li>';}}
editFollowsHtml='<li class="actnbr-follows"><a href="https://wordpress.com/following/edit">'+fbd.i18n.editSubs+'</a></li>';}else{loginHtml+='<li class="actnbr-login"><a href="'+fbd.loginURL+'">'+fbd.i18n.login+'</a></li>';signupHtml='<li class="actnbr-signup"><a href="'+fbd.signupURL+'">'+fbd.i18n.signup+'</a></li>';editSubsHtml='<li class="actnbr-subs"><a href="https://subscribe.wordpress.com/">'+fbd.i18n.editSubs+'</a></li>';}
if(!fbd.canFollow){fbHtmlLi='';}else{fbHtmlLi='<li class="actnbr-folded-follow">'+fbhtml+'</li>';}
fhtml+='<li class="actnbr-ellipsis actnbr-hidden"> \
				<svg class="gridicon gridicon__ellipsis" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="12" r="2"/></g></svg> \
				<div class="actnbr-popover tip tip-top-left actnbr-more"> \
				<div class="tip-arrow"></div> \
				<div class="tip-inner"> \
					<ul> \
						<li class="actnbr-sitename"><a href="'+fbd.siteURL+'">'+fbd.icon+' '+actionBarEscapeHtml(fbd.siteName)+'</a></li> \
					<li class="actnbr-folded-customize"><a href="'+fbd.customizeLink+'">'+customizeIcon+'<span>'+fbd.i18n.customize+'<span></a></li> \
						'+fbHtmlLi+' \
					'+signupHtml+' \
						'+loginHtml+' \
						'+themeHtml+' \
						'+slkhtml+' \
						'+reporthtml+' \
						'+viewReaderHtml+' \
						'+editFollowsHtml+' \
						'+editSubsHtml+' \
						'+foldhtml+' \
						</ul> \
					</div> \
					</div> \
				</li> \
				</ul>';fbdf=document.createElement('div');fbdf.id='actionbar';fbdf.innerHTML=fhtml;body.appendChild(fbdf);actionbar=document.querySelector('#actionbar');actionbar.classList.add('actnbr-'+fbd.themeSlug.replace('/','-'));if(fbd.canCustomizeSite){actionbar.classList.add('actnbr-has-customize');}
if(fbd.canEditPost){actionbar.classList.add('actnbr-has-edit');}
if(!fbd.canCustomizeSite){actionbar.classList.add('actnbr-has-follow');}
if(fbd.isFolded){actionbar.classList.add('actnbr-folded');}
if(fbd.statusMessage){showActionBarStatusMessage(fbd.statusMessage);}
var isFollowBubbleOpen=false;var follow=actionbar.querySelector('.actnbr-actn-follow');follow&&follow.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();isFollowBubbleOpen=true;if(fbd.isLoggedIn){showActionBarStatusMessage('<div class="actnbr-reader">'+fbd.i18n.followedText+'</div>');bumpStat('followed');var eventProps={'follow_source':'actionbar','url':fbd.siteURL};recordTracksEvent('wpcom_actionbar_site_followed',eventProps);followRequest('ab_subscribe_to_blog');}else{showActionBarFollowForm();}});var unfollow=actionbar.querySelector('.actnbr-actn-following');unfollow&&unfollow.addEventListener('click',function(e){e.preventDefault();unfollow.classList.add('no-display');follow.classList.remove('no-display');bumpStat('unfollowed');var eventProps={'follow_source':'actionbar','url':fbd.siteURL};recordTracksEvent('wpcom_actionbar_site_unfollowed',eventProps);followRequest('ab_unsubscribe_from_blog');});document.addEventListener('click',function(e){var btn=actionbar.querySelector('.actnbr-btn');if(isFollowBubbleOpen&&!btn.classList.contains('actnbr-hidden')){isFollowBubbleOpen=false;if(closest(e.target,'.actnbr-popover')){return;}
btn.classList.add('actnbr-hidden');}});var shortlink=actionbar.querySelector('.actnbr-shortlink a');shortlink&&shortlink.addEventListener('click',function(e){e.preventDefault();window.prompt("Shortlink: ",fbd.shortlink);});var ellipsis=actionbar.querySelector('.actnbr-ellipsis');var isMenuOpen=false;ellipsis&&ellipsis.addEventListener('click',function(e){var closestLink=closest(e.target,'a');if(closestLink&&closestLink.classList.contains('actnbr-action')){return false;}
ellipsis.classList.toggle('actnbr-hidden');setTimeout(function(){if(!ellipsis.classList.contains('actnbr-hidden')){bumpStat('show_more_menu');isMenuOpen=true;}},10);});document.addEventListener('click',function(){if(isMenuOpen){ellipsis.classList.add('actnbr-hidden');isMenuOpen=false;}});var fold=actionbar.querySelector('.actnbr-fold');fold&&fold.addEventListener('click',function(e){e.preventDefault();var link=fold.querySelector('a');if(actionbar.classList.contains('actnbr-folded')){link.textContent=fbd.i18n.foldBar;actionbar.classList.remove('actnbr-folded');postAction({action:'unfold_actionbar'});}else{link.textContent=fbd.i18n.unfoldBar;actionbar.classList.add('actnbr-folded');postAction({action:'fold_actionbar'});}});function statsOnClick(selector,stat,additionalEffect){var el=actionbar.querySelector(selector);if(el){el.addEventListener('click',createStatsBumperEventHandler(stat,additionalEffect));}}
statsOnClick('.actnbr-sitename a','clicked_site_title');statsOnClick('.actnbr-customize a','customized');statsOnClick('.actnbr-folded-customize a','customized');statsOnClick('.actnbr-theme a','explored_theme');statsOnClick('.actnbr-edit a','edited');statsOnClick('.actnbr-stats a','clicked_stats');statsOnClick('.flb-report a','reported_content');statsOnClick('.actnbr-follows a','managed_following');statsOnClick('.actnbr-login-nudge a','clicked_login_nudge');statsOnClick('.actnbr-signup a','clicked_signup_link');statsOnClick('.actnbr-login a','clicked_login_link');statsOnClick('.actnbr-subs a','clicked_manage_subs_link');statsOnClick('.actnbr-reader a','view_reader');shortlink&&shortlink.addEventListener('click',function(){bumpStat('copied_shortlink');});var bubbleForm=actionbar.querySelector('.actnbr-follow-bubble form');if(bubbleForm){bubbleForm.addEventListener('submit',createStatsBumperEventHandler('submit_follow_form',function(){var button=bubbleForm.querySelector(button);button&&button.setAttribute('disabled',true);}));}
toggleactionbar=function(){var st=window.scrollY||window.pageYOffset||0;topOffset=0;if(lastScrollTop==0||((st==lastScrollTop)&&lastScrollDir=='up')){actionbar.classList.remove('actnbr-hidden');}else{if(st<lastScrollTop){actionbar.classList.remove('actnbr-hidden');lastScrollDir='up';}else{if(document.querySelectorAll('#actionbar > ul > li:not(.actnbr-hidden) > .actnbr-popover').length===0){actionbar.classList.add('actnbr-hidden');lastScrollDir='down';var menus=actionbar.querySelectorAll('li');for(var i=0;i<menus.length;i++){menus[i].classList.add('actnbr-hidden');}}}}
lastScrollTop=st;};setInterval(toggleactionbar,100);function recordTracksEvent(eventName,eventProps){eventProps=eventProps||{};window._tkq=window._tkq||[];window._tkq.push(['recordEvent',eventName,eventProps]);}
function createStatsBumperEventHandler(stat,additionalEffect){var completedEvents={};return function eventHandler(event){if(completedEvents[event.timeStamp]){delete completedEvents[event.timeStamp];if(event.type==='submit'){event.target.submit();}
if(typeof additionalEffect==='function'){return additionalEffect(event);}
return true;}
event.preventDefault();event.stopPropagation();function dispatchOriginalEvent(){var newEvent;if(typeof window.CustomEvent!=='function'){newEvent=document.createEvent('CustomEvent');newEvent.initCustomEvent(event.type,event.bubbles,event.cancelable,event.detail);}else{newEvent=new event.constructor(event.type,event);}
completedEvents[newEvent.timeStamp]=true;event.target.dispatchEvent(newEvent);}
bumpStat(stat,dispatchOriginalEvent);}}
function actionBarEscapeHtml(str){return String(str).replace(/[&<>"'\/]/g,function(s){var entityMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;'};return entityMap[s];});}
function initActionBarFollowForm(){var form=actionbar.querySelector('.actnbr-follow-bubble form');if(form.getAttribute('method')){return;}
form.innerHTML='';var formHtml='';if(fbd.i18n.followers){formHtml+='<div class="actnbr-follow-count">'+fbd.i18n.followers+'</div>';}
formHtml+='<div><input type="email" name="email" placeholder="'+fbd.i18n.enterEmail+'" class="actnbr-email-field" /></div>';formHtml+='<input type="hidden" name="action" value="subscribe" />';formHtml+='<input type="hidden" name="blog_id" value="'+fbd.siteID+'" />';formHtml+='<input type="hidden" name="source" value="'+fbd.referer+'" />';formHtml+='<input type="hidden" name="sub-type" value="actionbar-follow" />';formHtml+=fbd.subscribeNonce;formHtml+='<div class="actnbr-button-wrap">'+
'<button type="submit" value="'+fbd.i18n.subscribe+'" >'+
fbd.i18n.subscribe+
'</button></div>';form.setAttribute('method','post');form.setAttribute('action','https://subscribe.wordpress.com');form.setAttribute('accept-charset','utf-8');form.innerHTML=formHtml;}
function showActionBarFollowForm(){initActionBarFollowForm();var button=actionbar.querySelector('.actnbr-btn');button&&button.classList.toggle('actnbr-hidden');setTimeout(function(){actionbar.querySelector('.actnbr-email-field').focus();},10);}
function showActionBarStatusMessage(message){follow&&follow.classList.add('no-display');unfollow&&unfollow.classList.remove('no-display');var msgEl=actionbar.querySelector('.actnbr-follow-bubble .actnbr-message');if(msgEl){msgEl.innerHTML=message;}
var button=actionbar.querySelector('.actnbr-btn');button&&button.classList.remove('actnbr-hidden');}})();