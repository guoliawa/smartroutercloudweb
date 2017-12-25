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
		}else if(obj=='wechat'){
			appImageName='WeChat';
		}else if(obj=='iqiyi'){
			appImageName='iqiyi';
		}else if(obj=='sohunews'){
			appImageName='sohunews';
		}else if(obj=='sinanews'){
			appImageName='SinaNews';
		}else if(obj=='sina'||obj=='weibo'||obj=='微博'){
			appImageName='weibo';
		}else if(obj=='chrome'||obj=='chrome webview'){
			appImageName='chrome';
		}else if(obj=='qq'){
			appImageName='qq';
		}else if(obj=='safari'){
			appImageName='safari';
		}else if(obj=='internet explorer'||obj=='internet'){
			appImageName='IE';
		}else if(obj=='youku'||obj=='优酷'){
			appImageName='youku';
		}else if(obj=='网易云音乐'){
			appImageName='163Music';
		}else if(obj=='360手机卫士'){
			appImageName='360';
		}else if(obj=='ting'){
			appImageName='ximalaya';
		}else if(obj=='京东'){
			appImageName='jingdong';
		}else{
			appImageName='iTunesArtwork';
		}
	}
	return appImageName;
}