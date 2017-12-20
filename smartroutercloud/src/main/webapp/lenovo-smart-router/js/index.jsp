<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Lenovo</title>
<link rel="stylesheet" type="text/css"
	href="/smartroutercloud/router/css/Router.css" />
<script src="/smartroutercloud/router/js/jquery.min.js"
	type="text/javascript"></script>
<link href="/smartroutercloud/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<script src="/smartroutercloud/bootstrap/js/bootstrap.min.js"></script>
</head>
<body onload="window.setInterval('reloadPage()',60000)">
	<img class="LenovoLogo"
		src="/smartroutercloud/router/img/LenovoLogo.png" />
	<img id="RouteImg" src="/smartroutercloud/router/img/RouterImg.png" />
	<div id="RouterName">路由器MAC</div>
	<div id="RouterMac"></div>
	<div
		style="color: red; font: 12px; top: 10px; left: 10px; width: 100px; height: 20px;"></div>
	<input id="inputMac" type="text" placeholder="输入Mac地址查询">
	<button id="selectMacText" type="submit" onclick="selectMac(2)">搜索</button>
	<button id="cutcategory" style="position: absolute;left: 1050px;top:22px;height: 33px;width: 63px;display:none;" type="submit" onclick="cutcategory()">排序方式</button>
	<!--<div  class="bodyData1">-->
	<table id="bodyData"
		style="position: absolute; left: 0px; top: 83px; height: 100%; width: 100%; background-color: #EEF4F9;">

	</table>
	<!--</div>-->

	<script type="text/javascript"
		src="/smartroutercloud/router/js/Router.js"></script>
</body>
</html>
