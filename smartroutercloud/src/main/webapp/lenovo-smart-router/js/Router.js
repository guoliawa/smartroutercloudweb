function selectMac(obj) {
	var selectValue;
	if(obj==2){
		 selectValue= $('#inputMac').val();//获取值
	}else{
		if(obj){
			selectValue=obj;
		}else{
			return;
		}
	}
	document.getElementById('RouterMac').innerHTML = selectValue;

	var request = $
			.ajax({
				"async" : true,
				"datatype" : 'json',
				"contentType" : 'application/json',
				"url" : "http://106.14.47.167:8080/smartroutercloud/devices/getall?routermacaddress="
						+ selectValue,
				"method" : "GET"
			});

	request.done(function(response) {
		listMP = response
		display(listMP)
	});

	request.fail(function() {
		alert("请输入正确的MAC地址！");
	});

	function display(listMP) {
		document.getElementById('cutcategory').style.display = 'block';
		document.getElementById('cutcategoryLabel').style.display = 'block';
		document.getElementById('RouterMac').innerHTML = selectValue;



		for (var i = 0; i < listMP.length; i++) {
			var hrH = i * 415 + 20 * (i + 1);
			// 左侧设备信息标志top位置
			var hrHeadWen = i * 415 + 20 * (i + 1) + 12;
			var hrHeadTime = i * 415 + 20 * (i + 1) + 60;
			var hrHeadName = i * 415 + 20 * (i + 1) + 84;
			var hrHeadHao = i * 415 + 20 * (i + 1) + 104;
			var hrHeadSystem = i * 415 + 20 * (i + 1) + 128;
			var hrHeadImage = i * 415 + 20 * (i + 1) + 66;
			// 右侧top位置
			var App = i * 415 + 20 * (i + 1) + 40;
			var Web = i * 415 + 20 * (i + 1) + 228;
			var imgeYou2 = i * 415 + 20 * (i + 1) + 54;

			$("#bodyData")
					.append(
							"<div id='yui' style='background-color: white;width: 1224px;height: 415px;top:"
									+ hrH
									+ "px;left:25px;position: absolute;' ></div></div>");
			$("#bodyData")
					.append(
							"<div style='color: #697B8C;font-size: 16px;top:"
									+ hrHeadWen
									+ "px;left: 36px;width: 100px;height: 22px;position: absolute;'>设备信息</div>")
			$("#bodyData")
					.append(
							"<div style='color: #697B8C;font-size: 16px;top:"
									+ hrHeadWen
									+ "px;left: 467px;width: 100px;height: 22px;position: absolute;'>最近访问</div>")
            
            
            //判断设备图标
			var imageName=listMP[i].ostype;
			var imageNameSure;
			var arr=imageName.split(" ");
			
			for (var j=0;j<arr.length;j++) {
				if(arr[arr.length-j-1]=="Mac"||arr[arr.length-j-1]=="Darwin"||arr[arr.length-j-1]=="(iOS)"||arr[arr.length-j-1]=="OS"||arr[arr.length-j-1]=="X"||arr[arr.length-j-1]=="iOS"){
					imageNameSure='iOSImage';
				}else if(arr[arr.length-j-1]=="Android"){
					imageNameSure='AndroidImage';
				}else if(arr[arr.length-j-1]=="Windows"){
					imageNameSure='WindowsImage';
				}else{
					imageNameSure='DefaultImage';
				}
			}
            
			if (listMP[i].devicename=='Unknown') {
				listMP[i].devicename='';
			}
			if (listMP[i].devicetype=='Unknown') {
				listMP[i].devicetype='';
			}
			if (listMP[i].ostype=='Unknown'){
				listMP[i].ostype='';
			}
			          
            
            
			$("#bodyData")
					.append(
							"<div style='top:"
									+ hrHeadImage
									+ "px;left: 50px;width: 42px;height: 42px;position: absolute;'><img src='router/img/"
									+ imageNameSure
									+ ".png ';style='width: 41px;height: 41px;'/></div>")

			$("#bodyData")
					.append(
							"<div style='color: #697B8C;font-size: 12px;top:"
									+ hrHeadTime
									+ "px;left: 120px;width: 200px;height: 22px;position: absolute;'>MAC地址："
									+ listMP[i].macaddress + "</div>")
			$("#bodyData")
					.append(
							"<div style='color: #697B8C;font-size: 12px;top:"
									+ hrHeadName
									+ "px;left: 120px;width: 200px;height: 22px;position: absolute;'>公司："
									+ listMP[i].devicename + "</div>")
			$("#bodyData")
					.append(
							"<div style='color: #697B8C;font-size: 12px;top:"
									+ hrHeadHao
									+ "px;left: 120px;width: 200px;height: 22px;position: absolute;'>型号："
									+ listMP[i].devicetype + "</div>")
			$("#bodyData")
					.append(
							"<div style='color: #697B8C;font-size: 12px;top:"
									+ hrHeadSystem
									+ "px;left: 120px;width: 200px;height: 22px;position: absolute;'>系统："
									+ listMP[i].ostype + "</div>")

			$("#bodyData")
					.append(
							"<div style='color: #697B8C;font-size: 12px;top:"
									+ App
									+ "px;left: 529px;width: 20px;height: 22px;position: absolute;'>APP</div>")
			$("#bodyData")
					.append(
							"<div style='color: #697B8C;font-size: 12px;top:"
									+ Web
									+ "px;left: 529px;width: 20px;height: 22px;position: absolute;'>WEB</div>")
			// 右侧top位置
			var internetText = listMP[i].applications;
			var webtimeText = listMP[i].webtimes;
			var apptimeText = listMP[i].apptimes;
			var webText = listMP[i].webpages;
			var webType = listMP[i].webpagetype;
			var appType = listMP[i].applicationtype;
			for (var k=0;k<5;k++) {
				var imgeYou = i * 415 + 20 * (i + 1) + 54 + 32 * k;// 右image
																	// top
				var appName = i * 415 + 20 * (i + 1) + 60 + 32 * k;// 右app name
																	// top
                if(internetText[k]){
       
					if (appType[appType.length-k-1]=='Unknown') {
						appType[appType.length-k-1]="";
					}
                    $("#bodyData").append("<div class='hidde' style='top:"+imgeYou+"px;left: 552px;width: 21px;height: 21px;position: absolute;'><img src='router/img/appImage/"+imgName(internetText[internetText.length-k-1])+".png' style='width: 21px;height: 21px;'/></div>")
                    $("#bodyData").append("<div class='hidde' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 580px;width: 100px;height: 22px;position: absolute;'>"+internetText[internetText.length-k-1]+"</div>")
                    $("#bodyData").append("<div class='hidde' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 711px;width: 100px;height: 22px;position: absolute;'>"+appType[appType.length-k-1]+"</div>")
                    $("#bodyData").append("<div class='hidde' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 828px;width: 300px;height: 22px;position: absolute;'>"+timeDifference(apptimeText[apptimeText.length-k-1])+"</div>")
                }
			}
	for (var j=0;j<5;j++) {
		var appName = i * 415 + 20 * (i + 1) + 254 + 32 * j;// 右app name
																	// top
                if(webText[j]){
                    $("#bodyData").append("<div class='hidde' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 552px;width: 100px;height: 22px;position: absolute;'>"+webText[webText.length-j-1]+"</div>")
                    $("#bodyData").append("<div class='hidde' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 711px;width: 100px;height: 22px;position: absolute;'>"+webType[webType.length-j-1]+"</div>")
                    $("#bodyData").append("<div class='hidde' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 828px;width: 300px;height: 22px;position: absolute;'>"+timeDifference(webtimeText[webtimeText.length-j-1])+"</div>")
                }
	}

			var arr = new Array(0);
			var arrApp = new Array(0);
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="video"){//视频
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="video"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="social"){//社交
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="social"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="news"){//新闻
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="news"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="shopping"){//购物
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="shopping"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="music"){//音乐
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="music"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="trip"){//旅行
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="trip"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="life-service"){//生活服务
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="life-service"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="game"){//游戏
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="game"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="e-radio"){//网络电台
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="e-radio"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="security"){//安全
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="security"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="dev-manage"){//设备管理
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="dev-manage"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="portal"){//门户
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="portal"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="military"){//军事
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="military"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="sports"){//体育
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="sports"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="finance"){//财经
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="finance"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="tech"){//科技
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="tech"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="mobile"){//手机
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="mobile"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="ent"){//娱乐
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="ent"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="auto"){//汽车
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="auto"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="blog"){//博客
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="blog"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="house"){//房产
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="house"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="book"){//读书
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="book"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="edu"){//教育
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="edu"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="fashion"){//时尚
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="fashion"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="health"){//健康
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="health"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="lottery"){//彩票
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="lottery"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="art"){//艺术
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="art"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="pet"){//宠物
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="pet"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="history"){//历史
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="history"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="culture"){//文化
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="culture"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="society"){//社会
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="society"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[webType.length-j-1]=="astro"){//星座
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]=="astro"){
					arrApp.push(appType.length-j-1);	
				}
			}
			for (var j=0;j<5;j++) {
				if(webType[webType.length-j-1]==""||webType[webType.length-j-1]=="Unknown"){//
					arr.push(webType.length-j-1);	
				}
				if(appType[appType.length-j-1]==""||appType[appType.length-j-1]=="Unknown"){
					arrApp.push(appType.length-j-1);	
				}
			}

            for (var k=0;k<5;k++) {
				var imgeYou=i*415+20*(i+1)+54+32*k;//右image top
				var appName=i*415+20*(i+1)+60+32*k;//右app name top
				if(internetText[arrApp[k]]){
					
				$("#bodyData").append("<div class='hidde1' style='top:"+imgeYou+"px;left: 552px;width: 21px;height: 21px;position: absolute;display:none;'><img src='img/appImage/"+imgName(internetText[arrApp[k]])+".png' style='width: 21px;height: 21px;'/></div>")
				$("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 580px;width: 100px;height: 22px;position: absolute;display:none;'>"+internetText[arrApp[k]]+"</div>")
				$("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 711px;width: 100px;height: 22px;position: absolute;display:none;'>"+appType[arrApp[k]]+"</div>")
				$("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 828px;width: 300px;height: 22px;position: absolute;display:none;'>"+timeDifference(apptimeText[arrApp[k]])+"</div>")
				}
			}
			for (var j=0;j<5;j++) {
				var appName=i*415+20*(i+1)+254+32*j;//右app name top
				if(webText[arr[j]]){
				$("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 552px;width: 100px;height: 22px;position: absolute;display:none;'>"+webText[arr[j]]+"</div>")
				$("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 711px;width: 100px;height: 22px;position: absolute;display:none;'>"+webType[arr[j]]+"</div>")
				$("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 828px;width: 300px;height: 22px;position: absolute;display:none;'>"+timeDifference(webtimeText[arr[j]])+"</div>")
				}
			}

			//网页高度
			if (listMP.length == 1) {
				var BodH1 = 625 + 20;
				BodH.style.height = BodH1 + 'px';
			} else if (listMP.length == 2) {
				var BodH1 = 625 * (2) + 20 * (2 + 1);
				BodH.style.height = BodH1 + 'px';
			} else {
				if (i == (listMP.length - 1)) {
					var BodH = document.getElementById("bodyData");//获得元素
// 					var BodH1 = 625 * (i) + 20 * (i + 1);
					var BodH1=i*415+20*(i+1)+254+180;
//					BodH.style.height = BodH1 + 'px';
					BodH.style.height=BodH1+'px';
				}
			}
		}
	}
}

//每60秒刷新一次页面
 function reloadPage()
{	
	
	var selectValue = $('#inputMac').val();
	document.getElementById("cutcategoryLabel").innerHTML="时间";
	$(".hidde").show();
	$(".hidde1").hide();
    	selectMac(selectValue);
}
//排序方式
 function cutcategory()
{	
	var valueName=document.getElementById("cutcategoryLabel").innerHTML;//获取值
//	alert(valueName);
    if(valueName=="时间"){
        document.getElementById("cutcategoryLabel").innerHTML="类别";
		$(".hidde").hide();
		$(".hidde1").show();
    }else{
        document.getElementById("cutcategoryLabel").innerHTML="时间";
		$(".hidde").show();
		$(".hidde1").hide();
    }
}
//获时间差
function timeDifference(obj){
    
    var d=obj;
    d=d/1000;
    d=d-8*60*60;
    var timestamp=new Date();
    timestamp.getTime();
    timestamp=timestamp/1000;
    //计算出相差天数
    var date3=parseInt(timestamp-d);
    var days=Math.floor(date3/(24*3600))
    //计算出小时数
    var leave1=date3%(24*3600)    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600))
    //计算相差分钟数
    var leave2=leave1%(3600)       //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60))
    if (days>30) {
        return '大于一个月';
    } else{
        if (days==0&&hours!=0) {
            return hours+"小时 "+minutes+" 分钟前使用";
        } else if(hours==0&&days!=0){
            return days+"天 "+minutes+" 分钟前使用";
        }else if(hours==0&&days==0){
            return minutes+" 分钟前使用";
        }else{
            return days+"天 "+hours+"小时 "+minutes+" 分钟前使用";
        }
        
    }
}

function imgName(obj){
	var appImageName='iTunesArtwork';
	for (var k=0;k<5;k++) {
					if(obj=='QQ音乐'||obj=='QQMusic'){
						appImageName='QQMusic';
					}else if(obj=='SohuPlayerSDK'){
						appImageName='SohuPlayerSDK';
					}else if(obj=='qqlive4Android'||obj=='tencentvideo'){
						appImageName='QQlive';
					}else if(obj=='SohuPlayerSDK'){
						appImageName='SohuPlayerSDK';
					}else if(obj=='BiliDroid'){
						appImageName='BiliPlayer';
					}else if(obj=='wechat'){
						appImageName='WeChat';
					}else if(obj=='iqiyi'){
						appImageName='iqiyi';
					}else if(obj=='SohuNews'){
						appImageName='sohunews';
					}else if(obj=='SinaNews'){
						appImageName='SinaNews';
					}else if(obj=='Sina'){
						appImageName='weibo';
					}else if(obj=='Chrome'||obj=='Chrome Webview'){
						appImageName='chrome';
					}else if(obj=='qq'){
						appImageName='qq';
					}else if(obj=='Safari'){
						appImageName='safari';
					}else if(obj=='Internet Explorer'){
						appImageName='IE';
					}else{
						appImageName='iTunesArtwork';
					}
	}
	return appImageName;
}
