//诊断仪
function zdy(pageName) {
	var omaskzdy = document.createElement("div");
	omaskzdy.id = "mask-zdy";
	document.body.appendChild(omaskzdy);
	omaskzdy.innerHTML = "<div class='zdy'><iframe class='iframezdy' src='' scrolling='no' id='zdyPowerIframe'></iframe><div class='zdy-power'><P onclick='clickZdyPower()'>POWER</P></div><div class='zdy-return'><p onclick='zdyHtmlBack()'>\u8fd4\u56de</p></div><div class='coe' id='zdyy'></div></div>";
	var zdy = document.getElementById("zdyy");
	$(".mask-tools").hide(500);
	zdy.onclick = function () {
		zdySwitch = 0;
		document.body.removeChild(omaskzdy);
		$("#zdy-jk").attr("src", "images/zdy_jk.png");
		$("#zdyStatic").attr("value", "0");
	};
	$(function () {
		$("#mask-zdy").draggable({containment:".container", scroll:false});
	});
	$("#zdyStatic").attr("value", "1");
}

//工具点击弹出层
function popup(id) {
	$("#" + id + "").attr("class", "testConcent-menuBellactive");
	var omask = document.createElement("div");
	omask.id = "mask-popup";
	document.body.appendChild(omask);
	omask.innerHTML = "<div class='popup' id='shanchu2'><iframe src='' class='popupIframe' id='popupIframe' name='popupIframe' scrolling='no'></iframe></div>";
	var oclose = document.getElementById("shanchu2");
	oclose.onclick = function () {
		document.body.removeChild(omask);
	};
}
//返回按钮
function zdyHtmlBack() {
	if ($("#zdyPowerIframe").attr("src") == "diagnostic/dnc_3.html" || 
	$("#zdyPowerIframe").attr("src") == "diagnostic/dnc_4.html" || 
	$("#zdyPowerIframe").attr("src") == "diagnostic/dnc_5.html"	||
	$("#zdyPowerIframe").attr("src") == "diagnostic/dnc_6.html") {
		$("#zdyPowerIframe").attr("src", "diagnostic/dnc_2.html");
	}
}
//诊断仪开关
function clickZdyPower() {
	if (x == xa || x == xb) {
		if ($("#zdy-jk").attr("src") == "images/zdy_jk.jpg") {
			if ($("#zdyPowerIframe").attr("src") == "") {
				$("#zdyPowerIframe").attr("src", "diagnostic/dnc.html");
			} else {
				$("#zdyPowerIframe").attr("src", "");
			}
		}
	}
}

//退出弹窗
function quit() {
//获取页面的高度和宽度
	var sWidth = document.body.scrollWidth;
	var sHeight = document.body.scrollHeight;
	
	//获取页面的可视区域高度和宽度
	var wHeight = document.documentElement.clientHeight;
	var oMask = document.createElement("div");
	oMask.id = "mask";
	oMask.style.height = sHeight + "px";
	oMask.style.width = sWidth + "px";
	document.body.appendChild(oMask);
	var oLogin = document.createElement("div");
	oLogin.id = "login";
	oLogin.innerHTML = "<div class='loginCon'><div class='quit-titie'>\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762</div><div  class='quit-btn' id='closeee'>\u53d6\u6d88</div><div  class='quit-btnhl'>\u786e\u5b9a</div></div>";
	document.body.appendChild(oLogin);
	
	//获取登陆框的宽和高
	var dHeight = oLogin.offsetHeight;
	var dWidth = oLogin.offsetWidth;
		//设置登陆框的left和top
	oLogin.style.left = sWidth / 2 - dWidth / 2 + "px";
	oLogin.style.top = wHeight / 2 - dHeight / 2 + "px";
	//点击关闭按钮
	var oClose = document.getElementById("closeee");
	
		//点击登陆框以外的区域也可以关闭登陆框
	oClose.onclick = oMask.onclick = function () {
		document.body.removeChild(oLogin);
		document.body.removeChild(oMask);
	};
}
					
	
//select
$(function () {
	$(".select").each(function () {
		var s = $(this);
		var z = parseInt(s.css("z-index"));
		var dt = $(this).children("dt");
		var dd = $(this).children("dd");
		var _show = function () {
			dd.slideDown(200);
			dt.addClass("cur");
			s.css("z-index", z + 1);
			dt.css("background", "#ff6c00 url(../resources/tests/images/selecticon.png) no-repeat 74px -27px");
		};   //展开效果
		var _hide = function () {
			dd.slideUp(200);
			dt.removeClass("cur");
			s.css("z-index", z);
			dt.css("background", "#ff6c00 url(../resources/tests/images/selecticon.png) no-repeat 74px 8px");
		};    //关闭效果
		dt.click(function () {
			dd.is(":hidden") ? _show() : _hide();
		});
		dd.find("a").click(function () {
			dt.html($(this).html());
			_hide();
		});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$("body").click(function (i) {
			!$(i.target).parents(".select").first().is(s) ? _hide() : "";
		});
	});
});
$(function () {
	$(".selectt").each(function () {
		var s = $(this);
		var z = parseInt(s.css("z-index"));
		var dt = $(this).children("dt");
		var dd = $(this).children("dd");
		var _show = function () {
			dd.slideDown(200);
			dt.addClass("cur");
			s.css("z-index", z + 1);
		};   //展开效果
		var _hide = function () {
			dd.slideUp(200);
			dt.removeClass("cur");
			s.css("z-index", z);
		};    //关闭效果
		dt.click(function () {
			dd.is(":hidden") ? _show() : _hide();
		});
		dd.find("a").click(function () {
			dt.html($(this).html());
			_hide();
		});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$("body").click(function (i) {
			!$(i.target).parents(".selectt").first().is(s) ? _hide() : "";
		});
	});
});

