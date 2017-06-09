 	
		
//记录答案
function Submit(id) {
	var answer = $("#daan", window.parent.document).val();
	$("#daan", window.parent.document).attr("value", answer + "," + id);
}

//打开工具
function opentTool(){
	 window.parent.gongjuShow();
}

 
//打开第一个工具
function toolLight1(){
	$("#gongju_box",parent.document).find("button").eq(1).removeClass("btn_gj_no").addClass("btn_gj");
	$("#gongju_box",parent.document).find("button").eq(2).removeClass("btn_cl").addClass("btn_cl_no");

		$("#gongju_box .btn_gj",parent.document).click(function(){
			if($(this).hasClass("btn_gj")) {
				$("#sta").attr("value", "1");
				$("#gongju").toggle(500);
				if ($("#gongju_t")) {
					$("#gongju_t").show(500);
				}
			}else{
				return false;
			}
			closeTool();
		});


}
//打开第二个工具
function toolLight2(){
	$("#gongju_box",parent.document).find("button").eq(2).removeClass("btn_cl_no").addClass("btn_cl");
	$("#gongju_box",parent.document).find("button").eq(1).removeClass("btn_gj").addClass("btn_gj_no");
	
}
//打开第三个工具
function toolLight3(){
	$("#gongju_box",parent.document).find("button").eq(3).removeClass("btn_wx_no").addClass("btn_wx");
	
}
//关闭三个工具
function toolclose(){
	$("#gongju_box",parent.document).find("button").eq(2).removeClass("btn_cl").addClass("btn_cl_no");
	$("#gongju_box",parent.document).find("button").eq(1).removeClass("btn_gj").addClass("btn_gj_no");
	$("#gongju_box",parent.document).find("button").eq(3).removeClass("btn_wx").addClass("btn_wx_no");
}



//下一页js
function goNext() {
	window.parent.goNext();
}

//关闭div窗口
function closeDiv(){
	$("#box").hide(500);
}

//按钮打开关闭div
function toggleDiv(){
	$("#box").toggle(500);
	if($("#box1")){
		$("#box1").toggle(500);
	}
}

//执行下一页
function removeNext(){
	 
	$("#nextGo",parent.document.body).removeAttr("disabled").attr("class","btn_next btn");
}
//禁止下一步
function forbidNext(){
	$("#nextGo",parent.document.body).attr({"disabled":"disabled"}).attr("class","btn_next_no btn");
	 
}

//禁止下一步
function buttonDisplay(){
	$("#nextGos",parent.document.body).css('display','block');
	$("#nextGo",parent.document.body).css('display','none');
}

//隐藏导航
function hideTitle(){
	 
	$("#navtionlj ul",parent.document.body).hide(500);
}

function showTitle(){
	 
	$("#navtionlj ul",parent.document.body).show(500);
}
//接触导航按钮
function navtionButton(){
	$(".btnns",parent.document.body).removeAttr("disabled");
	 
}
//全看完之后 可以后退按钮导航按钮接触
function idDisabled(){
	$("#reviousGo",parent.document.body).removeAttr("disabled").attr("css","btn_pre btn");
	$("#nextGo",parent.document.body).hide();
	$("#nextGos",parent.document.body).show();
}

//ipad
function OnLoad(){
   $("#box").hide();
   document.documentElement.style.webkitTouchCallout = "none"; //禁止弹出菜单
   document.documentElement.style.webkitUserSelect = "none";//禁止选中
}
