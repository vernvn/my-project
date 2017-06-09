var pageTimer = [];
//初始化原理界面
function InitializePrinciple() {
	controlStalls = 0;
	stallsInit();
	clearInterval(pageTimer['arrowTime']);
	clearInterval(pageTimer['speed']);
	$(".arrow-turn").hide();
	$(".arrow-turns").show();

	//$(".arrow-turn").stop(true).fadeIn();
}


//原理页面on档动画
function principleAnimate() {
	//双箭头闪烁
	//light(".arrow-turn",500);
	arrowBlink();
}
function InitializeCircuit() {
	$(".circuit-stalls").attr("stroke", "#231815");
	$(".circuit-on").attr("stroke", "#231815");
	$(".circuit-green").attr("stroke", "#231815");
	$(".circuit-blue").attr("stroke", "#231815");
	$(".circuit-purple").attr("stroke", "#231815");
	$(".circuit-switch1").attr({ "stroke": "#231815", "x2": "466.246" });
	$(".circuit-switch2").attr({ "stroke": "#231815", "y2": "29.451" });
	$(".circuit-switch4").attr({ "y1": "51.805", "y2": "51.805" });
	$(".circuit-lock").attr("stroke", "#E50012");

	circuitInit();

}

function circuitAnimate() {
	$(".circuit-on").attr("stroke", "#E50012");
	$(".circuit-green").attr("stroke", "#16FF85");
	$(".circuit-blue").attr("stroke", "#28C2FF");
	$(".circuit-purple").attr("stroke", "#C59CF4");
	$(".circuit-switch1").attr({ "stroke": "#E50012", "x2": "473.246" });
	$(".circuit-switch2").attr({ "stroke": "#E50012", "y2": "35.451" });
	$(".circuit-switch4").attr({ "y1": "55.805", "y2": "55.805" });
	$(".circuit-lock").attr("stroke", "#231815");

}
function circuitInit() {
	clearInterval(pageTimer["mask"]);
	$(".line-flow1").hide();
	$(".line-flow2").hide();
	$(".line-mask1,.line-mask2,.line-mask3,.line-mask4,.line-mask5").hide()
}

//车轮初始化
function stallsInit() {
	var trail1 = new Scroll(".tyre-trail1", 800);
	var trail2 = new Scroll(".tyre-trail2", 800);
	var trail3 = new Scroll(".tyre-trail3", 800);
	var trail4 = new Scroll(".tyre-trail4", 800);
	trail1.stop();
	trail2.stop();
	trail3.stop();
	trail4.stop();
	//方块不动
	$(".block-slide2").hide();
	$(".block-slide1").hide();
}
//d档车轮正传向左
function stallsDAnimate(speed) {
	var _speed = (1 / speed) * 1600;
	var trail1 = new Scroll(".tyre-trail1", _speed);
	var trail2 = new Scroll(".tyre-trail2", _speed);
	var trail3 = new Scroll(".tyre-trail3", _speed);
	var trail4 = new Scroll(".tyre-trail4", _speed);
	trail1.stop();
	trail2.stop();
	trail3.stop();
	trail4.stop();
	if (speed == 0) {
		return;
	}
	trail1.left();
	trail2.left();
	trail3.left();
	trail4.left();
}
//r档车轮倒转向右
function stallsRAnimate(speed) {
	var _speed = (1 / speed) * 1600;
	var trail1 = new Scroll(".tyre-trail1", _speed);
	var trail2 = new Scroll(".tyre-trail2", _speed);
	var trail3 = new Scroll(".tyre-trail3", _speed);
	var trail4 = new Scroll(".tyre-trail4", _speed);
	trail1.stop();
	trail2.stop();
	trail3.stop();
	trail4.stop();
	if (speed == 0) {
		return;
	}
	trail1.right();
	trail2.right();
	trail3.right();
	trail4.right();
}
//结构页面划上显示提示点击文字
function promptShow(val, obj) {
	$(".prompt" + val + "").css("display", "block");
	$(obj).mouseout(function () {
		$(".prompt").css("display", "none");
	})
}
//原理页面改变背景图片
function bgChange(index) {
	//对应的红色变绿色
	$(".principle-mask" + index + " div").css("background", "url(images/mask" + (index) + ".png) no-repeat");
	$(".principle-mask" + index + " span").removeAttr("onmouseover");

	$(".principle-mask" + index + " span").mouseout(function () {
		$(".principle-mask" + index + " div").css("background", "url(images/mask" + (index) + ".png) no-repeat");
	});
}
//原理页面改变背景图片
function bgChange1(index, obj) {
	//对应的红色变绿色
	$(".principle-mask" + index + " div").css("background", "url(images/mask" + (index + 5) + ".png) no-repeat");
	$(obj).mouseout(function () {
		$(".principle-mask" + index + " div").css("background", "none");
	})
}
//条纹无缝滚动
function Scroll(obj, time) {
	this.obj = $(obj);
	this.width = $(obj).css('width');
	this.height = $(obj).css('height');
	var top = 0;
	var left = 0;
	var offsetTop = parseInt(top) - parseInt(this.height);
	var resetTop = parseInt(top) + parseInt(this.height);
	var offsetLeft = parseInt(left) - parseInt(this.width);
	var resetLeft = parseInt(left) + parseInt(this.width);

	this.up = function () {
		var _self = this;
		$(obj).append("<img src='./assets/images/principle/tyre_trail.png' />");
		$(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'top': offsetTop + 'px' }, time, 'linear', function () { });
		$(obj).find("img").eq(1).css("top", resetTop + 'px').stop().animate({ 'top': top }, time, 'linear', function () {
			removeDiv();
			_self.up();
		});

	}
	this.down = function () {
		var _self = this;
		$(obj).append("<img src='./assets/images/principle/tyre_trail.png' />");
		$(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'top': resetTop + 'px' }, time, 'linear', function () { });
		$(obj).find("img").eq(1).css("top", offsetTop + 'px').stop().animate({ 'top': top }, time, 'linear', function () {
			removeDiv();
			_self.down();
		});
	}
	this.left = function () {
		var _self = this;
		$(obj).append("<img src='./assets/images/principle/tyre_trail.png' />");
		$(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'left': offsetLeft + 'px' }, time, 'linear', function () { });
		$(obj).find("img").eq(1).css("left", resetLeft + 'px').stop().animate({ 'left': left }, time, 'linear', function () {
			removeDiv();
			_self.left();
		});
	}
	this.right = function () {
		var _self = this;
		//this.stop();
		$(obj).append("<img src='./assets/images/principle/tyre_trail.png' />");
		$(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'left': resetLeft + 'px' }, time, 'linear', function () { });
		$(obj).find("img").eq(1).css("left", offsetLeft + 'px').stop().animate({ 'left': left }, time, 'linear', function () {
			removeDiv();
			_self.right();
		});
	}
	this.stop = function () {
		$(obj).find("img").stop(true).css({ 'top': '0px', 'left': '0px' });
		$(obj).find("img").eq(1).remove();
		$(obj).find("img").eq(2).remove();
	}
	var removeDiv = function () {
		$(obj).find("img").eq(0).remove();
	}

	var toArr = function () {
		var objLen = $(obj).find("img").toArray();
		if (objLen.length == 0) {
			$(obj).append("<img src='./assets/images/stripe_" + obj.split("-")[1] + ".png' />");
		} else if (objLen.length > 1) {
			objLen.length = 1;
		}
	}

}

//双箭头闪烁
function arrowBlink() {
	/*function time(){
		$(".arrow-turn").fadeOut(400).fadeIn(400);
	}
	function back(f,t){
		clearInterval(pageTimer['arrowTime']);
		pageTimer['arrowTime'] = 0 ;
		return function(){
			pageTimer['arrowTime'] =setTimeout(function(){
				f();
				back(f,t)();
			},t)
		}
	}
	time();
	back(time,1000)();*/
	clearInterval(pageTimer["arrowTime"]);
	$(".arrow-turns").hide();
	pageTimer['arrowTime'] = setInterval(function () {
		if ($(".arrow-turn3").css("display") == "block") {
			$(".arrow-turn1").show();
			$(".arrow-turn2").hide();
			$(".arrow-turn3").hide();
		} else if ($(".arrow-turn1").css("display") == "block") {

			$(".arrow-turn1").hide();
			$(".arrow-turn2").show();
			$(".arrow-turn3").hide();
		} else if ($(".arrow-turn2").css("display") == "block") {

			$(".arrow-turn1").hide();
			$(".arrow-turn2").hide();
			$(".arrow-turn3").show();
		} else {

			$(".arrow-turn1").show();
			$(".arrow-turn2").hide();
			$(".arrow-turn3").hide();
		}
	}, 300)
}

//一闪一闪
function light(obj, t) {
	$(obj).show();



	function outIn() {
		console.log(that);
		var that = obj;
		$(obj).stop().animate({ 'opacity': 0 }, t).animate({ 'opacity': 1 }, t, function () {
			//arguments.callee();
			that.callee();
			//console.log(that)

		})
	}
	outIn();
}
