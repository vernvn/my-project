//全局变量
//1234对应导航,0对应欢迎页
var 
//navIndex=0,
//文字弹出框划上是否有效
alertTextBlock=false,
//控制中心的按钮在什么档位，1、2、3分别代表r、n、d
controlStalls = 0,
//是否踩下刹车踏板
isBrake = 0,
//是否在拖拽
isDrag = 0,
//上次传来的车速
oldSpeed = 0,
times = 0,
//档位在lock档
stalls = 0;
//关闭文字图片弹出框
function closeAlert(){
	$(".alert-wrap").addClass("hide-important");
}
//文本框点击
function alertTextClick(){
	if(alertTextBlock){
		$(".alert-text").addClass("hide-important")
		alertTextBlock=false;
	}else if(!alertTextBlock){
		$(".alert-text").removeClass("hide-important")
		alertTextBlock=true;
	}
}
//页面声音按钮点击重播声音
// function audioPlayLoop(){
// 	$("#audio").remove();
// 	var audioElement = document.createElement("audio");
//     audioElement.id = "audio";
//     document.body.appendChild(audioElement);

//     audioElement.src="audio/"+navIndex+"_1.wav";
// 	//这里是兼容ie的代码，wav格式在ie不支持
// 	if (!!window.ActiveXObject || "ActiveXObject" in window){
// 		audioElement.src="audio/"+navIndex+"_1.mp3";
// 	}
//     audioElement.autoplay=true;
//     audioElement.loop=false;
// }
///原理界面的上一步，下一步，解决在路由中初始化动画无效问题
function principleLastNext(){
	//初始化原理动画
    InitializePrinciple();
}
function hideAHot() {
	//让电路图上的热区的点隐藏掉
	$(".circuit-multimeter-hot").addClass("hide-important");

}

//显示万用表热区点
function showAHot() {
	if (multimeterStay != 1) {
		return;
	}
	//alert(navIndex);
	//系统电路下============================================
	if (navIndex == 1) {
		//让电路图上的热区的点隐藏掉
		$(".circuit-multimeter-hot").addClass("hide-important");
	} else {
		//让电路图上的热区的点显示出来
		$(".circuit-multimeter-hot").removeClass("hide-important");
	}
	//让电路图上的热区的点显示出来
	$(".circuit-multimeter-hot").removeClass("hide-important");
}