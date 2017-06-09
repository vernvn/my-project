'use strict';

//  插件的检验	

var plugin;
var isLoad = false;
var flag = false;
function plugin0() {
	return document.getElementById('plugin0');
}
plugin = plugin0;
function addEvent(obj, name, func) {
	if (obj.attachEvent) {
		obj.attachEvent("on" + name, func);
	} else {
		obj.addEventListener(name, func, false);
	}
}
function load() {
	addEvent(plugin(), 'test', function () {
		alert("Received a test event from the plugin.");
	});
}
function pluginLoaded() {
	isLoad = true;
}
//新的不在使用
function addTestEventx() {
	addEvent(plugin(), 'echo', function (txt, count) {
		alert(txt + count);
	});
}
//重用老的
function addTestEvent() {
	alert(addEvent(plugin().echo(6, 4)));
}
function testEvent() {
	plugin().testEvent();
}
function pluginValid() {
	if (plugin()) {
		if (plugin().valid) {
			isLoad = true;
		} else {
			isLoad = false;
		}
	}
}
pluginValid();
//插件下载的方法
function popDownload() {
	var omask = document.createElement("div");
	omask.id = "mask";
	document.body.appendChild(omask);
	var omaskybyb = document.createElement("div");
	omaskybyb.id = "mask-download";
	document.body.appendChild(omaskybyb);
	omaskybyb.innerHTML = "<span class='download_font'>插件下载</span><div class='zdy'>\
		<div class='download-menu'></div>\
		<div class='download-main' >\
		<a href='/software/zip/trainnew.zip'>\
		<div class='download-bell'>\
		<img class='download-logo' width='45px' src='images/logoo.png'>培训插件\
		</div>\
		</a>\
		<a href='/software/zip/browser.zip'>\
		<div class='download-bell'>\
		<img class='download-browser' width='25' src='images/firefox.png'>浏览器</div>\
		</a>\
		<a href='/software/zip/UnityWebPlayerFull.zip'>\
		<div class='download-bell'>\
		<img class='download-browser' width='25' src='images/firefox.png'>UnityWebPlayerFull</div>\
		</a>\
		<div style='padding-top: 15px;color: red;text-align:center;' class='show-tip'>您没有下载插件,请下载\
		</div>\
		<div class='downloadCoe' id='zdy'></div>\
		</div>";
	var wyb = document.getElementById("zdy");
	wyb.onclick = function () {
		document.body.removeChild(omaskybyb);
		document.body.removeChild(omask);
	};

	// chrome
	var webplayer = checkPlugins("Unity Player", "");
	// IE不要脸 去这名称
	var webplayer1 = checkPlugins("UnityWebPlayer", "");
	webplayer = webplayer || webplayer1;

	var bro = getBrowserInfo().toString().indexOf("chrome");
	// no chrome

	// 1 都没有安装
	if (-1 == bro && !isLoad && !webplayer) {
		$(".show-tip").html("您没有安装培训插件、浏览器,请下载");
	}
	// 2 培训插件没有安装
	else if (-1 != bro && !isLoad && webplayer) {
			//chrome
			$(".show-tip").html("您没有安装培训插件,请下载");
		}
		// 3 浏览器没有安装
		else if (-1 == bro && !!isLoad && webplayer) {
				// no chrome
				$(".show-tip").html("您没有安装浏览器,请下载");
			}
			// 4 培训插件和u3d没有安装
			else if (-1 != bro && !isLoad && !webplayer) {
					//chrome
					$(".show-tip").html("您没有安装培训插件,请下载");
				}
				// 5 浏览器和八没有安装
				else if (-1 == bro && !!isLoad && !webplayer) {
						// no chrome
						$(".show-tip").html("您没有安装浏览器,请下载");
					}
					// 6 没有安装u3d
					// else if (-1 != bro && !(!isLoad) && !webplayer) { //chrome
					// 	$(".show-tip").html("您没有安装UnityWebPlayer,请下载");
					// } 
					// 7 没有安装u3d 和浏览器
					else if (-1 == bro && !isLoad && webplayer) {
							// no chrome
							$(".show-tip").html("您没有安装培训插件和浏览器,请下载");
						}
						// 8 都安装
						else if (-1 != bro && !!isLoad && webplayer) {
								$(".show-tip").html("您已安装以上所有软件");
							}
};
//浏览器
function getBrowserInfo() {
	var agent = navigator.userAgent.toLowerCase();
	var regStr_ie = /msie [\d.]+;/gi;
	var regStr_ff = /firefox\/[\d.]+/gi;
	var regStr_chrome = /chrome\/[\d.]+/gi;
	var regStr_saf = /safari\/[\d.]+/gi;
	var regStr_opr = /opr\/[\d.]+/gi;
	//IE
	if (agent.indexOf("msie") > 0) {
		return agent.match(regStr_ie);
	}
	//firefox
	if (agent.indexOf("firefox") > 0) {
		return agent.match(regStr_ff);
	}
	//Chrome
	if (agent.indexOf("chrome") > 0 && agent.indexOf("opr") < 0) {
		return agent.match(regStr_chrome);
	}
	//Safari
	if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0 && agent.indexOf("opr") < 0) {
		return agent.match(regStr_saf);
	}
	//Oper
	if (agent.indexOf("opr")) {
		return agent.match(regStr_opr);
	}
}
//检查插件
function checkPlugins(pluginsName, activexObjectName) {
	if (activexObjectName == "") activexObjectName = pluginsName + "." + pluginsName;
	var np = navigator.plugins;
	// FF
	if (np && np.length) {
		for (var i = 0; i < np.length; i++) {
			if (np[i].name.indexOf(pluginsName) != -1) return true;
		}
		return false;
	}
	// IE
	else if (window.ActiveXObject) {
			try {
				var axobj = eval("new ActiveXObject(activexObjectName);");
				return axobj ? true : false;
			} catch (e) {
				return false;
			}
		} else {
			return false;
		}
}
// 关闭浏览器后退与前进按钮
jQuery(document).ready(function () {
	if (window.history && window.history.pushState) {
		$(window).on('popstate', function () {
			// 当点击浏览器的 后退和前进按钮 时才会被触发，
			window.history.pushState('forward', null, '');
			window.history.forward(1);
		});
	}
	window.history.pushState('forward', null, ''); //在IE中必须得有这两行
	window.history.forward(1);
});
//清空密码输入框
function emptypassword() {
	$('.form-controlinput').val('');
	$('.form-controlinput2').val('');
}