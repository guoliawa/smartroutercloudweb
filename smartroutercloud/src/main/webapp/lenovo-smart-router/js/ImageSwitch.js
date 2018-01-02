function appNameText(obj){
	var appImageName='iTunesArtwork';
	obj=obj.toLowerCase();
	for (var k=0;k<5;k++) {
		if(obj=='qq音乐'||obj=='qqmusic'){
			appImageName='QQMusic';
		}else if(obj=='sohuplayersdk'){
			appImageName='SohuPlayer';
		}else if(obj=='qqlive4android'||obj=='tencentvideo'){
			appImageName='QQlive';
		}else if(obj=='bilidroid'){
			appImageName='BiliBili';
		}else if(obj=='wechat'||obj=='micromessenger'){
			appImageName='微信';
		}else if(obj=='iqiyi'||obj=='qiyivideo'||obj=='HCDNClient_IOS'){
			appImageName='爱奇艺';
		}else if(obj=='sohunews'){
			appImageName='搜狐新闻';
		}else if(obj=='sinanews'){
			appImageName='新浪新闻';
		}else if(obj=='sina'||obj=='weibo'||obj=='微博'){
			appImageName='新浪微博';
		}else if(obj=='chrome'||obj=='chrome webview'){
			appImageName='chrome';
		}else if(obj=='qq'||obj=='qq client'){
			appImageName='QQ';
		}else if(obj=='safari'){
			appImageName='safari';
		}else if(obj=='internet explorer'||obj=='internet'){
			appImageName='IE';
		}else if(obj=='youku'||obj=='优酷'||obj=='tbios'){
			appImageName='优酷';
		}else if(obj=='网易云音乐'||obj=='163music'||obj=='neliveplayer'||obj=='NeteaseMusic'){
			appImageName='网易云音乐';
		}else if(obj=='360手机卫士'){
			appImageName='360手机卫士';
		}else if(obj=='ting'||obj=='kdtUnion_iting'||obj=='kdtUnion_iting iting'||obj=='ting_v6.3.45_c5'){
			appImageName='喜马拉雅';
		}else if(obj=='京东'){
			appImageName='京东商城';
		}else if(obj=='百度视频'||obj=='lavf'||obj=='baiduvideo'){
			appImageName='百度视频';
		}else if(obj=='newsboard'||obj=='newsapp'){
			appImageName='网易新闻';
		}else{
			appImageName=obj;
		}
	}
	return appImageName;
}
function imgName(obj){
	var appImageName='iTunesArtwork';
	obj=obj.toLowerCase();
	for (var k=0;k<5;k++) {
		if(obj=='qq音乐'||obj=='qqmusic'){
			appImageName='QQMusic';
		}else if(obj=='sohuplayersdk'){
			appImageName='SohuPlayerSDK';
		}else if(obj=='qqlive4android'||obj=='tencentvideo'){
			appImageName='QQlive';
		}else if(obj=='bilidroid'){
			appImageName='BiliPlayer';
		}else if(obj=='wechat'||obj=='micromessenger'){
			appImageName='WeChat';
		}else if(obj=='iqiyi'||obj=='qiyivideo'||obj=='HCDNClient_IOS'){
			appImageName='iqiyi';
		}else if(obj=='sohunews'){
			appImageName='sohunews';
		}else if(obj=='sinanews'){
			appImageName='SinaNews';
		}else if(obj=='sina'||obj=='weibo'||obj=='微博'){
			appImageName='weibo';
		}else if(obj=='chrome'||obj=='chrome webview'){
			appImageName='chrome';
		}else if(obj=='qq'||obj=='qq client'){
			appImageName='qq';
		}else if(obj=='safari'){
			appImageName='safari';
		}else if(obj=='internet explorer'||obj=='internet'){
			appImageName='IE';
		}else if(obj=='youku'||obj=='优酷'||obj=='tbios'){
			appImageName='youku';
		}else if(obj=='网易云音乐'||obj=='163music'||obj=='neliveplayer'||obj=='NeteaseMusic'){
			appImageName='163Music';
		}else if(obj=='360手机卫士'){
			appImageName='360';
		}else if(obj=='ting'||obj=='kdtUnion_iting'||obj=='kdtUnion_iting iting'||obj=='ting_v6.3.45_c5'){
			appImageName='ximalaya';
		}else if(obj=='京东'){
			appImageName='jingdong';
		}else if(obj=='百度视频'||obj=='lavf'||obj=='baiduvideo'){
			appImageName='百度视频';
		}else if(obj=='newsboard'||obj=='newsapp'){
			appImageName='NewsApp';
		}else{
			appImageName='iTunesArtwork';
		}
	}
	return appImageName;
}
