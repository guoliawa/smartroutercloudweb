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
// 	var selectValue = $('#inputMac').val();// 获取值

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
                    var appImageName;
                    if(internetText[internetText.length-k-1]=='QQ音乐'||internetText[internetText.length-k-1]=='QQMusic'){
                        appImageName='QQMusic';
                    }else if(internetText[internetText.length-k-1]=='SohuPlayerSDK'){
                        appImageName='SohuPlayerSDK';
                    }else if(internetText[internetText.length-k-1]=='qqlive4Android'||internetText[internetText.length-k-1]=='tencentvideo'){
                        appImageName='QQlive';
                    }else if(internetText[internetText.length-k-1]=='SohuPlayerSDK'){
                        appImageName='SohuPlayerSDK';
                    }else if(internetText[internetText.length-k-1]=='BiliDroid'){
                        appImageName='BiliPlayer';
                    }else if(internetText[internetText.length-k-1]=='wechat'){
                        appImageName='WeChat';
                    }else if(internetText[internetText.length-k-1]=='iqiyi'){
                        appImageName='iqiyi';
                    }else if(internetText[internetText.length-k-1]=='SohuNews'){
						appImageName='sohunews';
					}else if(internetText[internetText.length-k-1]=='sinanews'){
						appImageName='SinaNews';
					}else if(internetText[internetText.length-k-1]=='Sina'){
						appImageName='weibo';
					}else if(internetText[internetText.length-k-1]=='Chrome'){
						appImageName='chrome';
					}else if(internetText[internetText.length-k-1]=='qq'){
						appImageName='qq';
					}else if(internetText[internetText.length-k-1]=='Safari'){
						appImageName='safari';
					}else if(internetText[internetText.length-k-1]=='Internet Explorer'){
						appImageName='IE';
					}else{
						appImageName='iTunesArtwork';
					}if (appType[appType.length-k-1]=='Unknown') {
						appType[appType.length-k-1]="";
					}
                    $("#bodyData").append("<div class='hidde' style='top:"+imgeYou+"px;left: 552px;width: 21px;height: 21px;position: absolute;'><img src='router/img/appImage/"+appImageName+".png' style='width: 21px;height: 21px;'/></div>")
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
				if(webType[j]=="video"){//视频
					arr.push(j);	
				}
				if(appType[j]=="video"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="social"){//社交
					arr.push(j);	
				}
				if(appType[j]=="social"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="news"){//新闻
					arr.push(j);	
				}
				if(appType[j]=="news"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="shopping"){//购物
					arr.push(j);	
				}
				if(appType[j]=="shopping"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="music"){//音乐
					arr.push(j);	
				}
				if(appType[j]=="music"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="trip"){//旅行
					arr.push(j);	
				}
				if(appType[j]=="trip"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="life-service"){//生活服务
					arr.push(j);	
				}
				if(appType[j]=="life-service"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="game"){//游戏
					arr.push(j);	
				}
				if(appType[j]=="game"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="e-radio"){//网络电台
					arr.push(j);	
				}
				if(appType[j]=="e-radio"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="security"){//安全
					arr.push(j);	
				}
				if(appType[j]=="security"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="dev-manage"){//设备管理
					arr.push(j);	
				}
				if(appType[j]=="dev-manage"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="portal"){//门户
					arr.push(j);	
				}
				if(appType[j]=="portal"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="military"){//军事
					arr.push(j);	
				}
				if(appType[j]=="military"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="sports"){//体育
					arr.push(j);	
				}
				if(appType[j]=="sports"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="finance"){//财经
					arr.push(j);	
				}
				if(appType[j]=="finance"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="tech"){//科技
					arr.push(j);	
				}
				if(appType[j]=="tech"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="mobile"){//手机
					arr.push(j);	
				}
				if(appType[j]=="mobile"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="ent"){//娱乐
					arr.push(j);	
				}
				if(appType[j]=="ent"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="auto"){//汽车
					arr.push(j);	
				}
				if(appType[j]=="auto"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="blog"){//博客
					arr.push(j);	
				}
				if(appType[j]=="blog"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="house"){//房产
					arr.push(j);	
				}
				if(appType[j]=="house"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="book"){//读书
					arr.push(j);	
				}
				if(appType[j]=="book"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="edu"){//教育
					arr.push(j);	
				}
				if(appType[j]=="edu"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="fashion"){//时尚
					arr.push(j);	
				}
				if(appType[j]=="fashion"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="health"){//健康
					arr.push(j);	
				}
				if(appType[j]=="health"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="lottery"){//彩票
					arr.push(j);	
				}
				if(appType[j]=="lottery"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="art"){//艺术
					arr.push(j);	
				}
				if(appType[j]=="art"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="pet"){//宠物
					arr.push(j);	
				}
				if(appType[j]=="pet"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="history"){//历史
					arr.push(j);	
				}
				if(appType[j]=="history"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="culture"){//文化
					arr.push(j);	
				}
				if(appType[j]=="culture"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="society"){//社会
					arr.push(j);	
				}
				if(appType[j]=="society"){
					arrApp.push(j);	
				}
			}
			for (var	 j=0;j<5;j++) {
				if(webType[j]=="astro"){//星座
					arr.push(j);	
				}
				if(appType[j]=="astro"){
					arrApp.push(j);	
				}
			}
			for (var j=0;j<5;j++) {
				if(webType[j]=="Unknown"){//
					arr.push(j);	
				}
				if(appType[j]=="Unknown"){
					arrApp.push(j);	
				}
			}

            for (var k=0;k<arr.length;k++) {
                var imgeYou=i*415+20*(i+1)+54+32*k;//右image top
                var appName=i*415+20*(i+1)+60+32*k;//右app name top
                if(internetText[arr[k]]){
                    
                    $("#bodyData").append("<div class='hidde1' style='top:"+imgeYou+"px;left: 552px;width: 21px;height: 21px;position: absolute;display:none;'><img src='router/img/appImage/"+internetText[arr[k]]+".png' style='width: 21px;height: 21px;'/></div>")
                    $("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 580px;width: 100px;height: 22px;position: absolute;display:none;'>"+internetText[arr[k]]+"</div>")
                    $("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 711px;width: 100px;height: 22px;position: absolute;display:none;'>"+appType[arr[k]]+"</div>")
                    $("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 828px;width: 300px;height: 22px;position: absolute;display:none;'>"+timeDifference(apptimeText[arr[k]])+"</div>")
                }
            }
            for (var j=0;j<arrApp.length;j++) {
                var appName=i*415+20*(i+1)+254+32*j;//右app name top
                if(webText[arrApp[j]]){
                    $("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 552px;width: 100px;height: 22px;position: absolute;display:none;'>"+webText[arrApp[j]]+"</div>")
                    $("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 711px;width: 100px;height: 22px;position: absolute;display:none;'>"+webType[arrApp[j]]+"</div>")
                    $("#bodyData").append("<div class='hidde1' style='color: #697B8C;font-size: 12px;top:"+appName+"px;left: 828px;width: 300px;height: 22px;position: absolute;display:none;'>"+timeDifference(webtimeText[arrApp[j]])+"</div>")
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
function reloadPage() {
//	document.location.reload()
	var selectValue = $('#inputMac').val();
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
