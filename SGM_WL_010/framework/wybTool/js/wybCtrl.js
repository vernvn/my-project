
//页面(0没打开过1打开过)
var dhxq12_ym=0;
var dhxq34_ym=0;
var pyz12_ym=0;
var pyz34_ym=0;
var dn_ym=0;
//读取故障码
var gzm_dq=0;
//修复故障后读取故障码 5-13
var gzm_dq_xf=0;
//清除故障码
var gzm_qc=0;
//读取数据流
var sjl_dq=0;
//油压表盖是否安装上1代表安装//5-11
var yybg_stall=1;
//yerr 5-18
var dianhuo_deg=0;
var wyb_ym="";
var w_tg_white_3_1=0;
var w_tg_white_3_2=0;
//水温传感器
var w_sw_white=0;//万用表线的参数
var Param_redx=467;//红色表线起始x坐标
var Param_redy=30;//红色表线起始y坐标
var Param_redx1=467;//红色表线曲线起始x坐标
var Param_redy1=30;//红色表线曲线起始y坐标
var Param_redcx=430;//红色表线曲线拐x坐标
var Param_redcy=-30;//红色表线曲线拐y坐标
var Param_redpx=400;//红色表线曲线结束x坐标
var Param_redpy=310;//红色表线曲线结束x坐标
var Param_stasds=0;
var Param_redstas=0;
var Param_blackstas=0;
var Param_blackx=250;
var Param_blacky=30;
var Param_blackcx=300;
var Param_blackcy=-30;
var Param_blackpx=370;
var Param_blackpy=310;
var wyb_drag_status=0;
var hehehfehfe=0;//记录万用表的表针是否放在热区上，0表示没有，1表示有，可以进行下一步
var wybblackPosition=null;//记录万用表的红表针是否放在热区上
var wybredPosition=null;//记录万用表的红表针是否放在热区上
var Radrepetition=0;//标示红表笔和黑表笔不能放在一个热区上,红表笔记忆
var Blackrepetition=0;//标示红表笔和黑表笔不能放在一个热区上，黑表笔记忆
//var Param_stasds=0;
//var Param_redstas=0;
//var Param_blackstas=0;
var wyb_body=1;
var wyb_red=0;//红色表是否放在热区，0是没有，1标示有，拖拽万用表时，的
var wyb_black=0;//黑色表是否放在热区，0是没有，1标示有，拖拽万用表时，的
//后座的页面
var w_wybcurrent_backseat=0;
//发动机的页面
var w_current_engine=0;
//后座椅
var w_backseat_1=0;
//燃油泵护盖
var w_ranyouben_2=0;
//碳罐5个插头(从最左边顺时针)
var w_tanguan_1=0;
var w_tanguan_2=0;
var w_tanguan_3=0;
var w_tanguan_4=0;
var w_tanguan_5=0;
//当前工具
var currentTool = "";
//节气门插头
var w_jqm_white=0;
//节气门插头上面的线（0-5）
var w_jqm_white_0=0;
var w_jqm_white_1=0;
var w_jqm_white_2=0;
var w_jqm_white_3=0;
var w_jqm_white_4=0;
var w_jqm_white_5=0;
//凸轮轴位置传感器
var w_tlz_white=0;
//凸轮轴位置传感器的线（0-2）
var w_tlz_white_0=0;
var w_tlz_white_1=0;
var w_tlz_white_2=0;
//碳罐电磁阀皮管左
var w_tg_white_1=0;
//碳罐电磁阀皮管右
var w_tg_white_2=0;
//碳罐电磁阀
var w_tg_white_3=0;
//碳罐电磁阀上面的线
//水温传感器上面的线
var w_sw_white_1=0;
var w_sw_white_2=0;
//痒传感器
var w_ycgq_white=0;
//痒传感器上面的线
var w_ycgq_white_1=0;
var w_ycgq_white_2=0;
var w_ycgq_white_3=0;
var w_ycgq_white_4=0;
//喷油嘴(左到右 黑白黑白)
var w_pyz_black1=0;
var w_pyz_white2=0;
var w_pyz_black3=0;
var w_pyz_white4=0;
//喷油嘴1上面的线
var w_pyz_black1_1=0;
var w_pyz_black1_2=0;
//喷油嘴2上面的线
var w_pyz_white2_1=0;
var w_pyz_white2_2=0;
//喷油嘴3上面的线
var w_pyz_black3_1=0;
var w_pyz_black3_2=0;
//喷油嘴4上面的线
var w_pyz_white4_1=0;
var w_pyz_white4_2=0;
//点火线圈(左到右 黑白黑白)
var w_dhxq_black1=0;
var w_dhxq_white2=0;
var w_dhxq_black3=0;
var w_dhxq_white4=0;
//点火线圈1号c打插头打开  1.2.3.4号
var dhxq1_ct=0;
var dhxq2_ct=0;
var dhxq3_ct=0;
var dhxq4_ct=0;
//喷油嘴插头打开 1.2.3.4
var pyz1_ct=0;
var pyz2_ct=0;
var pyz3_ct=0;
var pyz4_ct=0;
//点火线圈上面的线
var w_dhxq_black1_1=0;
var w_dhxq_black1_2=0;
var w_dhxq_black1_3=0;
var w_dhxq_black1_4=0;
var w_dhxq_white2_1=0;
var w_dhxq_white2_2=0;
var w_dhxq_white2_3=0;
var w_dhxq_white2_4=0;
var w_dhxq_black3_1=0;
var w_dhxq_black3_2=0;
var w_dhxq_black3_3=0;
var w_dhxq_black3_4=0;
var w_dhxq_white4_1=0;
var w_dhxq_white4_2=0;
var w_dhxq_white4_3=0;
var w_dhxq_white4_4=0;
//电池征服极安装
var w_positive=0;
var w_negative=0;
//空气流量计插头
var w_kq_switch=0;
//空气流量计插头上面的线
var w_kq_switch_1=0;
var w_kq_switch_2=0;
var w_kq_switch_3=0;
var w_kq_switch_4=0;
var w_kq_switch_5=0;
//空气流量计插头下面的壳子
var w_kq_black=0;
//发动机插头1
var w_fdjch_switch1=0;
//发动机插头2
var w_fdjch_switch2=0;
//保险盒盖
var w_bxh_box=0;
//保险盒里的两保险
var w_bxh_bx1=0;
var w_bxh_bx2=0;
//蓄电池盖
var w_xdc_box=0;
//管夹工具
var w_tg_gjtoole=0;
//红笔所在的页面
var w_wyb_redHtml="";
//黑笔所在的页面
var w_wyb_blackHtml="";
//是否跟换过油泵罐
var w_isChange_Tg=0;
//管夹工具判断是否在那根油管上
var tgGuanqiangongjuSwithch=0;
var tg2GuanqiangongjuSwithch=0;

// 万用表点击状态
var wybdianjizhuangtai=0;
// 仪表盘点击状态
var ybpdianjizhuangtai=0;
// 仪表踏板状态
var ybybrighttbzhuangtai=0;
// 仪表油门状态
var ybybrightymzhuangtai=0;
// 万用表红色线拖拽起点x坐标
var wybredstartx=400;
// 万用表红色线拖拽起点y坐标
var wybredstarty=310;
// 万用表红色线拖拽弧度x坐标
var wybredradianx=430;
// 万用表红色线拖拽弧度y坐标
var wybredradiany=-30;
// 万用表红色线拖拽终点x坐标
var wybredstopx=467;
// 万用表红色线拖拽终点y坐标
var wybredstopy=30;

// 万用表黑色线拖拽起点x坐标 
var wybblackstartx=370;
// 万用表黑色线拖拽起点y坐标
var wybblackstarty=310;
// 万用表黑色线拖拽弧度x坐标
var wybblackradianx=300;
// 万用表黑色线拖拽弧度y坐标
var wybblackradiany=-30;
// 万用表黑色线拖拽终点x坐标
var wybblackstopx=250;
// 万用表黑色线拖拽终点y坐标
var wybblackstopy=30;
var w_tanguan_2_penyou=0;

//万用表指针笔颜色（0红1黑）
var wybColor=2;
//万用表（红，黑笔）所在的热区位置
var wybRedWz = "";
var wybBlackWz = "";
//仪表的LED知识等的判断
//var iddd=0;
//万用表工具状态
var wanyongbiao=0;
//仪表盘工具的状态
var yibiaopan=0;
//当打火的时候不的点击钥匙开关()
var dianhuoSwithIng=0;
//当前是否启动状态
var dianhuoIng=0;
//点火是否启动过
var dianhuoStart=0;
//发动机
var dian;
//声音时间定时器
var audioTime;
//声音文件
var staticAudio="";
var daisuAudio="";
var falgAudio=0;
var ybpparamTime;
var ybLEDtime;
var currentZdyHtml="dnc.html";
var zdySwitch = 0;
//诊断仪开机
var zdySwitchPower=0;
//油压
var yybtoole=0;
//试卷
var sjSwitch=0;
//iframe(郝立强，2015,5,9)
var documentc;
//记忆万用表的表针放在的页面(郝立强，2015,5,10)
var h_href;
//跳页面时万用表线跟踪表针的状态(郝立强，2015,5,10)
var hlq_wybRedLine=true;
var hlq_wybBlackLine=true;
function addpath() {
	if(!document.getElementById("mask-svg")) {
		var omasksvg = document.createElement("div");
		omasksvg.id = "mask-svg";
		document.getElementById("contain").appendChild(omasksvg);
		omasksvg.innerHTML = " <svg width='1024' height='540' version='1.1' xmlns='http://www.w3.org/2000/svg'  id='svg'><path d='M467 30 C467 30 430 -30 400 310' style='fill:none;stroke:#d83747;stroke-width:5'  id='path_rad'/><path d='M250 30 C250 30 300 -30 370 310 ' style='fill:none;stroke:#43393a;stroke-width:5'  id='path_black'/></svg>";
	}
};



function wyb(){



	var osc=document.getElementById("wyb");
	if(document.getElementById("mask-wyb")){return false;}
	if(!document.getElementById("mask-wyb")){

		var omaskwyb=document.createElement("div");
		var omaskwybRad=document.createElement("div");
		var omaskwybBlack=document.createElement("div");
		omaskwyb.id="mask-wyb";
		omaskwybRad.id="mask-wybRad";
		omaskwybBlack.id="mask-wybBlack";
		document.getElementById("contain").appendChild(omaskwyb);
		document.getElementById("contain").appendChild(omaskwybRad);
		document.getElementById("contain").appendChild(omaskwybBlack);
		omaskwyb.innerHTML="<div class='wyb' id='hehhe'><img src='framework/wybTool/images/wyb.png' ><div class='wyb-topUnit'></div><div class='wyb-top' id='wybShowData' align='left'></div><div class='wyb-topHot' id='wyb-topHot' ></div><div class='wyb-bottom' ></div><div class='wyb-off'></div><div class='wyb-vv'></div><div class='wyb-v'></div><div class='wyb-k'></div><div class='wyb-nofine'></div><div class='wyb-AA'></div><div class='wyb-A'></div><div class='wyb-mA'></div><div class='wyb-rad'></div><div class='wyb-black'></div><div class='coe' id='wyb'></div></div>";
		omaskwybRad.innerHTML="<div id='hhjwybRed_hotspot' class='hhjwybRed_hotspot ui-draggable'></div><div id='hhjwybRed' class='wybRad'></div>";//往创建的div中加内容
		omaskwybBlack.innerHTML="<div id='hhjwybBlack_hotspot' class='hhjwybBlack_hotspot ui-draggable'></div><div id='hhjwybBlack' class='wybBlack' ></div>";//往创建的div中加内容
		addpath();
		$(".wyb-bottom").css("transform","rotate(0deg)");
	}
	var wyb=document.getElementById("wyb");

	// $(".wybRad").on("click",function(){
	// 	//alert(1)
	// 	$(this).hide();
	// });
	// $(".wybBlack").on("click",function(){
	// 	//alert(1)
	// 	$(this).hide();
	// });



	wyb.onclick=function(){
		/*//pages41页面
		if(typeof pages41!="undefined"){
			if(pages41==2){
				return false;
			}
		}*/
		$("#audio3")[0].pause();
		pages41=1;
		$(".mask1").hide();
		$(".mask2").hide();
		if(typeof timesW!='undefined'&&typeof timesWy!='undefined'){
			clearInterval(timesW);
			clearInterval(timesWy);
		}
		$(".wyb-bottom").css("transform","rotate(0deg)");
		w_wyb_redHtml="";
		w_wyb_blackHtml="";
		/*document.getElementById("lefttIframe").src = "images/beijing.jpg";
		 document.getElementById("righttIframe").src = "images/beijing.jpg";*/

		wyb_red=0;wyb_black=0;
		//万用表工具关闭
		wanyongbiao = 0;
		//万用表指针笔颜色（0红1黑）
		wybColor=2;
		//万用表指针笔消失
		$("#mask-yb-zz-black").remove();
		$("#mask-yb-zz-red").remove();
		//万用表红黑笔所在的热区位置
		wybRedWz = "";
		wybBlackWz = "";


		wanyongbiao = 0;
		document.getElementById("contain").removeChild(omaskwyb);
		document.getElementById("contain").removeChild(omaskwybRad);
		document.getElementById("contain").removeChild(omaskwybBlack);
		document.getElementById("contain").removeChild(document.getElementById("mask-svg"));
		repetition=0;
		hehehfehfe=0;
		wybblackPosition=null;
		wybredPosition=null;
		Radrepetition=0;
		Blackrepetition=0;
		hlq_wybRedLine=true;
		hlq_wybBlackLine=true;
		wyb_red=0;
		wyb_black=0;
		h_href=null;

		Param_redx=467;//红色表线起始x坐标
		Param_redy=30;//红色表线起始y坐标
		Param_redx1=467;//红色表线曲线起始x坐标
		Param_redy1=30;//红色表线曲线起始y坐标
		Param_redcx=430;//红色表线曲线拐x坐标
		Param_redcy=-30;//红色表线曲线拐y坐标
		Param_redpx=400;//红色表线曲线结束x坐标
		Param_redpy=310;//红色表线曲线结束x坐标
		Param_stasds=0;
		Param_redstas=0;
		Param_blackstas=0;

		Param_blackx=250;
		Param_blacky=30;
		Param_blackcx=300;
		Param_blackcy=-30;
		Param_blackpx=370;
		Param_blackpy=310;

		wybblackstartx=Param_blackx;
		wybblackstarty=Param_blacky;
		wybblackradianx=Param_blackcx;
		wybblackradiany=Param_blackcy;
		wybblackstopx=Param_blackpx;
		wybblackstopy=Param_blackpy;



		wybredstartx=Param_redx;
		wybredstarty=Param_redy;
		wybredradianx=Param_redcx;
		wybredradiany=Param_redcy;
		wybredstopx=Param_redpx;
		wybredstopy=Param_redpy;
		
		if(Boolean(document.getElementById("svg"))){
			var oclosessvg = document.getElementById("svg");
			document.body.removeChild(document.getElementById("mask-svg"));
		}

	}
	freshHotspot();
	//红表笔drag，通过一个小块热区带动红表笔
	$(function() {
		$( "#hhjwybRed_hotspot" ).draggable({
			containment: "#contain", //只能在规定范围
			scroll: false,//不出现滚动条
			iframeFix: true,
			cursor: "move",
			start: function() {
				wyb_drag_status=1;
				//var wyb_drag_status=0;
				//var Param_stasds=0;
				//var Param_redstas=0;
				//var Param_blackstas=0;
				//var wyb_body=1;
				//var wyb_red=0;
				//var wyb_black=0;
			},
			drag:function(event){
				Param_redstas=1;
			
				if(!document.getElementById("mask-svg")){
					var omasksvg = document.createElement("div");
					omasksvg.id = "mask-svg";
					document.body.appendChild(omasksvg);
					omasksvg.innerHTML = " <svg width='1024' height='708' version='1.1' xmlns='http://www.w3.org/2000/svg'  id='svg'><path d='M467 30 C467 30 430 -30 400 310' style='fill:none;stroke:#d83747;stroke-width:10'  id='path_rad'/><path d='M"+wybblackstopx+" "+wybblackstopy+" C"+wybblackstopx+" "+wybblackstopy+" "+wybblackradianx+" "+wybblackradiany+" "+wybblackstartx+" "+wybblackstarty+" ' style='fill:none;stroke:#43393a;stroke-width:10'  id='path_black'/></svg>";
					var oclosessvg = document.getElementById("svg");
					oclosessvg.onclick = function() {
						document.body.removeChild(omasksvg);
					}
				}
				if(Boolean(document.getElementById("mask-svg"))) {
					$("#hhjwybRed").css("top",""+(parseInt($("#hhjwybRed_hotspot").css("top").replace("px",""))-217)+"px");
					$("#hhjwybRed").css("left",""+(parseInt($("#hhjwybRed_hotspot").css("left").replace("px","")))+"px");
					var redLeftInt =  parseInt($("#hhjwybRed").css("left").replace("px",""))+15,
						redTopInt =  parseInt($("#hhjwybRed").css("top").replace("px",""))+5,
						topInt = parseInt($("#mask-wyb" ).css("top").replace("px",""))+230,
						leftInt = parseInt($( "#mask-wyb" ).css("left").replace("px",""))+110,

						cl = (redLeftInt-40),
						ct = (redTopInt-80);
					/* console.log(window.parent.Param_stasds);*/
					wybredstartx=leftInt;
					wybredstarty=topInt;
					wybredradianx=cl;
					wybredradiany=ct;
					wybredstopx=redLeftInt;
					wybredstopy=redTopInt;
					var redLeftIntt=redLeftInt-15,redTopIntt= parseInt(redTopInt)+230;
					/*  decidexyz(redLeftIntt,redTopIntt,"dhxq34","path_rad");*/
					if (wyb_drag_status==1) {

						document.getElementById("path_rad").setAttribute("d","M"+redLeftInt+" "+redTopInt+" C"+redLeftInt+" "+redTopInt+" "+cl+" "+ct+" "+leftInt+" "+topInt);
					};}
			},
			stop: function() {

				if (hehehfehfe==0) {
					w_wyb_redHtml="";
					
					var topInt = parseInt($( "#mask-wyb" ).css("top").replace("px","")),
						leftInt = parseInt($( "#mask-wyb" ).css("left").replace("px","")),
						toppoint=topInt-80; leftpoint=leftInt-290;
					$("#hhjwybRed").css("top",""+(toppoint+26)+"px");
					$("#hhjwybRed").css("left",""+(leftpoint+455)+"px");
					$("#hhjwybRed_hotspot").css("top",""+(toppoint+243)+"px");
					$("#hhjwybRed_hotspot").css("left",""+(leftpoint+455)+"px");
					Param_redx=leftpoint+467;
					Param_redy=toppoint+30;
					Param_redcx=leftpoint+430;
					Param_redcy=toppoint-30;
					Param_redpx=leftInt+114;
					Param_redpy=topInt+298;
					wyb_red=0;
					document.getElementById("path_rad").style.stroke="#d83747";
					w_wyb_redHtml="";
					Radrepetition=0;
					wybredstartx=Param_redx;
					wybredstarty=Param_redy;
					wybredradianx=Param_redcx;
					wybredradiany=Param_redcy;
					wybredstopx=Param_redpx;
					wybredstopy=Param_redpy;
					hlq_wybBlackLine=true;
					/* console.log(Param_stasds);*/
					Param_redstas=0;
					Param_stasds=0;

					$(document).find("#path_rad" ).attr("d","M"+Param_redx+" "+Param_redy+" C"+Param_redx+" "+Param_redy+" "+Param_redcx+" "+Param_redcy+" "+Param_redpx+" "+Param_redpy);
				}else{
					hehehfehfe=0;
				}


			}		//alert("drag:"+wyb_drag_status+"para_sta:"+Param_stasds+"red_sta:"+Param_redstas+"black_sta:"+Param_blackstas+"body:"+wyb_body+"red"+wyb_red+"black"+wyb_black+"");




		});


	});

	$(function() {
		$( "#hhjwybBlack_hotspot" ).draggable({ containment: "#contain", scroll: false,  iframeFix: true,cursor: "move",
			start: function() {wyb_drag_status=1;
			},
			drag:function(event){

				Param_blackstas=1;
				
				if(!document.getElementById("mask-svg")){
					var omasksvg = document.createElement("div");
					omasksvg.id = "mask-svg";
					document.body.appendChild(omasksvg);
					omasksvg.innerHTML = " <svg width='1024' height='708' version='1.1' xmlns='http://www.w3.org/2000/svg'  id='svg'><path d='M467 30 C467 30 430 -30 400 310' style='fill:none;stroke:#d83747;stroke-width:10'  id='path_rad'/><path d='M"+wybblackstopx+" "+wybblackstopy+" C"+wybblackstopx+" "+wybblackstopy+" "+wybblackradianx+" "+wybblackradiany+" "+wybblackstartx+" "+wybblackstarty+" ' style='fill:none;stroke:#43393a;stroke-width:10'  id='path_black'/></svg>";
					var oclosessvg = document.getElementById("svg");
					oclosessvg.onclick = function() {
						document.body.removeChild(omasksvg);
					}
				}
				if(Boolean(document.getElementById("mask-svg"))) {
					$("#hhjwybBlack").css("top",""+(parseInt($("#hhjwybBlack_hotspot").css("top").replace("px",""))-217)+"px");
					$("#hhjwybBlack").css("left",""+(parseInt($("#hhjwybBlack_hotspot").css("left").replace("px","")))+"px");
					var redLeftInt =  parseInt($("#hhjwybBlack").css("left").replace("px",""))+10,
						redTopInt =  parseInt($("#hhjwybBlack").css("top").replace("px",""))+10,
						topInt = parseInt($("#mask-wyb" ).css("top").replace("px",""))+295,
						leftInt = parseInt($( "#mask-wyb" ).css("left").replace("px",""))+85,
						cl = (redLeftInt-40),
						ct = (redTopInt-80);
					//decidexyz(redLeftInt,redTopInt,"dhxq12","path_black");

					if (wyb_drag_status==1) {
						document.getElementById("path_black").setAttribute("d","M"+redLeftInt+" "+redTopInt+" C"+redLeftInt+" "+redTopInt+" "+cl+" "+ct+" "+leftInt+" "+topInt);

					}}

			},

			stop: function() {
				if (hehehfehfe==0) {



					
					var topInt = parseInt($( "#mask-wyb" ).css("top").replace("px","")),
						leftInt = parseInt($( "#mask-wyb" ).css("left").replace("px","")),
						toppoint=topInt-80; leftpoint=leftInt-290;
					document.getElementById("path_black").style.stroke="#43393a";
					$("#hhjwybBlack").css("top",""+(toppoint+26)+"px");
					$("#hhjwybBlack").css("left",""+(leftpoint+240)+"px");
					$("#hhjwybBlack_hotspot").css("top",""+(toppoint+243)+"px");
					$("#hhjwybBlack_hotspot").css("left",""+(leftpoint+240)+"px");
					Param_blackx=leftpoint+250;
					Param_blacky=toppoint+30;
					Param_blackcx=leftpoint+300;
					Param_blackcy=toppoint-30;
					Param_blackpx=leftInt+90;
					Param_blackpy=topInt+300;
					wyb_black=0;
					wybblackstartx=Param_blackx;
					wybblackstarty=Param_blacky;
					wybblackradianx=Param_blackcx;
					wybblackradiany=Param_blackcy;
					wybblackstopx=Param_blackpx;
					wybblackstopy=Param_blackpy;
					Param_blackstas=0;
					Param_stasds=0;
					hlq_wybBlackLine=true;

					w_wyb_blackHtml="";
					Blackrepetition=0;

					$(document).find("#path_black" ).attr("d","M"+Param_blackx+" "+Param_blacky+" C"+Param_blackx+" "+Param_blacky+" "+Param_blackcx+" "+Param_blackcy+" "+Param_blackpx+" "+Param_blackpy);
				}else{
					hehehfehfe=0;
				}




			}
		});
	});

	$(function() {
		$( "#mask-wyb" ).draggable({handle: "img", containment: "#contain", scroll: false,cursor: "move", iframeFix: true, drag:function(event){


			//当红黑表笔都不在热区上时，万用表整体的拖动
			if (wyb_body==1&&wyb_red==0&&wyb_black==0) {

				var topInt = parseInt($( "#mask-wyb" ).css("top").replace("px","")),
					leftInt = parseInt($( "#mask-wyb" ).css("left").replace("px","")),
					toppoint=topInt-80; leftpoint=leftInt-290;
				$(".wybRad").css("top",""+(toppoint+26)+"px");
				$(".wybRad").css("left",""+(leftpoint+455)+"px");
				$(".wybBlack").css("top",""+(toppoint+26)+"px");
				$(".wybBlack").css("left",""+(leftpoint+240)+"px");
				$("#hhjwybRed_hotspot").css("top",""+(toppoint+243)+"px");
				$("#hhjwybRed_hotspot").css("left",""+(leftpoint+455)+"px");
				$("#hhjwybBlack_hotspot").css("top",""+(toppoint+243)+"px");
				$("#hhjwybBlack_hotspot").css("left",""+(leftpoint+240)+"px");
				Param_redx=leftpoint+467;
				Param_redy=toppoint+30;
				Param_redcx=leftpoint+430;
				Param_redcy=toppoint-30;
				Param_redpx=leftInt+114;
				Param_redpy=topInt+298;

				Param_blackx=leftpoint+250;
				Param_blacky=toppoint+30;
				Param_blackcx=leftpoint+300;
				Param_blackcy=toppoint-30;
				Param_blackpx=leftInt+90;
				Param_blackpy=topInt+300;
				$(document).find("#path_rad" ).attr("d","M"+Param_redx+" "+Param_redy+" C"+Param_redx+" "+Param_redy+" "+Param_redcx+" "+Param_redcy+" "+Param_redpx+" "+Param_redpy);
				$(document).find("#path_black" ).attr("d","M"+Param_blackx+" "+Param_blacky+" C"+Param_blackx+" "+Param_blacky+" "+Param_blackcx+" "+Param_blackcy+" "+Param_blackpx+" "+Param_blackpy);

				wybredstartx=Param_redx;
				wybredstarty=Param_redy;
				wybredradianx=Param_redcx;
				wybredradiany=Param_redcy;
				wybredstopx=Param_redpx;
				wybredstopy=Param_redpy;

				wybblackstartx=Param_blackx;
				wybblackstarty=Param_blacky;
				wybblackradianx=Param_blackcx;
				wybblackradiany=Param_blackcy;
				wybblackstopx=Param_blackpx;
				wybblackstopy=Param_blackpy;

			};//当黑表笔都在热区上时，万用表整体的拖动
			if (wyb_body==1&&wyb_red==0&&wyb_black==1) {

				var blackLeftInt = parseInt($("#hhjwybBlack").css("left").replace("px",""))+10,
					blackTopInt = parseInt($("#hhjwybBlack").css("top").replace("px",""))+5,
					topInt = parseInt($( "#mask-wyb" ).css("top").replace("px","")),
					leftInt = parseInt($( "#mask-wyb" ).css("left").replace("px","")),

					cl = (blackLeftInt-40),
					ct = (blackTopInt-80);


				toppoint=topInt-80; leftpoint=leftInt-290;
				$("#hhjwybRed").css("top",""+(toppoint+26)+"px");
				$("#hhjwybRed").css("left",""+(leftpoint+455)+"px");
				$("#hhjwybRed_hotspot").css("top",""+(toppoint+243)+"px");
				$("#hhjwybRed_hotspot").css("left",""+(leftpoint+455)+"px");
				/* console.log(toppoint); */
				Param_blackx=blackLeftInt;
				Param_blacky=blackTopInt;
				Param_blackcx=cl;
				Param_blackcy=ct;
				Param_blackpx=leftInt+90;
				Param_blackpy=topInt+300;

				wybblackstartx=Param_blackx;
				wybblackstarty=Param_blacky;
				wybblackradianx=Param_blackcx;
				wybblackradiany=Param_blackcy;
				wybblackstopx=Param_blackpx;
				wybblackstopy=Param_blackpy;

				Param_redx=parseInt($("#hhjwybRed").css("left").replace("px",""))+10;
				Param_redy=parseInt($("#hhjwybRed").css("top").replace("px",""))+5;
				Param_redcx=parseInt($("#hhjwybRed").css("left").replace("px",""))-40;
				Param_redcy=parseInt($("#hhjwybRed").css("top").replace("px",""))-80;
				Param_redpx=leftInt+114;
				Param_redpy=topInt+300;

				wybredstartx=Param_redx;
				wybredstarty=Param_redy;
				wybredradianx=Param_redcx;
				wybredradiany=Param_redcy;
				wybredstopx=Param_redpx;
				wybredstopy=Param_redpy;
				$(document).find("#path_rad" ).attr("d","M"+Param_redx+" "+Param_redy+" C"+Param_redx+" "+Param_redy+" "+Param_redcx+" "+Param_redcy+" "+Param_redpx+" "+Param_redpy);
				$(document).find("#path_black" ).attr("d","M"+Param_blackx+" "+Param_blacky+" C"+Param_blackx+" "+Param_blacky+" "+Param_blackcx+" "+Param_blackcy+" "+Param_blackpx+" "+Param_blackpy);
			}//当红表笔都在热区上时，万用表整体的拖动
			if (wyb_body==1&&wyb_red==1&&wyb_black==0) {
				Param_stasds=1;
				var redLeftInt = parseInt($("#hhjwybRed").css("left").replace("px",""))+10,
					redTopInt = parseInt($("#hhjwybRed").css("top").replace("px",""))-104,
					topInt = parseInt($( "#mask-wyb" ).css("top").replace("px","")),
					leftInt = parseInt($( "#mask-wyb" ).css("left").replace("px","")),

					cl = (redLeftInt-40),
					ct = (redTopInt-80);


				toppoint=topInt-80; leftpoint=leftInt-290;
				$("#hhjwybBlack").css("top",""+(toppoint+26)+"px");
				$("#hhjwybBlack").css("left",""+(leftpoint+255)+"px");
				$("#hhjwybBlack_hotspot").css("top",""+(toppoint+243)+"px");
				$("#hhjwybBlack_hotspot").css("left",""+(leftpoint+255)+"px");
				Param_redx=redLeftInt;
				Param_redy=redTopInt+110;
				Param_redcx=cl;
				Param_redcy=ct;
				Param_redpx=leftInt+114;
				Param_redpy=topInt+300;

				wybredstartx=Param_redx;
				wybredstarty=Param_redy;
				wybredradianx=Param_redcx;
				wybredradiany=Param_redcy;
				wybredstopx=Param_redpx;
				wybredstopy=Param_redpy;
				Param_blackx=parseInt($("#hhjwybBlack").css("left").replace("px",""))+10;
				Param_blacky=parseInt($("#hhjwybBlack").css("top").replace("px",""))+5;
				Param_blackcx=parseInt($("#hhjwybBlack").css("left").replace("px",""))+80;
				Param_blackcy=parseInt($("#hhjwybBlack").css("top").replace("px",""))-80;
				Param_blackpx=leftInt+90;
				Param_blackpy=topInt+300;

				wybblackstartx=Param_blackx;
				wybblackstarty=Param_blacky;
				wybblackradianx=Param_blackcx;
				wybblackradiany=Param_blackcy;
				wybblackstopx=Param_blackpx;
				wybblackstopy=Param_blackpy;
				$(document).find("#path_rad" ).attr("d","M"+Param_redx+" "+Param_redy+" C"+Param_redx+" "+Param_redy+" "+Param_redcx+" "+Param_redcy+" "+Param_redpx+" "+Param_redpy);
				$(document).find("#path_black" ).attr("d","M"+Param_blackx+" "+Param_blacky+" C"+Param_blackx+" "+Param_blacky+" "+Param_blackcx+" "+Param_blackcy+" "+Param_blackpx+" "+Param_blackpy);
			}//当红黑表笔都在热区上时，万用表整体的拖动
			if (wyb_body==1&&wyb_red==1&&wyb_black==1) {

				var redLeftInt = parseInt($("#hhjwybRed").css("left").replace("px",""))+10,
					redTopInt = parseInt($("#hhjwybRed").css("top").replace("px",""))-104,
					blackLeftInt = parseInt($("#hhjwybBlack").css("left").replace("px",""))+10,
					blackTopInt = parseInt($("#hhjwybBlack").css("top").replace("px",""))+10,
					topInt = parseInt($( "#mask-wyb" ).css("top").replace("px","")),
					leftInt = parseInt($( "#mask-wyb" ).css("left").replace("px","")),

					redcl = (redLeftInt-40),
					redct = (redTopInt-80),
					blackcl = (blackLeftInt-40),
					blackct = (blackTopInt-80);


				Param_redx=redLeftInt;
				Param_redy=redTopInt+110;
				Param_redcx=redcl;
				Param_redcy=redct;
				Param_redpx=leftInt+114;
				Param_redpy=topInt+300;

				wybredstartx=Param_redx;
				wybredstarty=Param_redy;
				wybredradianx=Param_redcx;
				wybredradiany=Param_redcy;
				wybredstopx=Param_redpx;
				wybredstopy=Param_redpy;

				Param_blackx=blackLeftInt;
				Param_blacky=blackTopInt;
				Param_blackcx=blackcl;
				Param_blackcy=blackct;
				Param_blackpx=leftInt+90;
				Param_blackpy=topInt+300;

				wybblackstartx=Param_blackx;
				wybblackstarty=Param_blacky;
				wybblackradianx=Param_blackcx;
				wybblackradiany=Param_blackcy;
				wybblackstopx=Param_blackpx;
				wybblackstopy=Param_blackpy;


				$(document).find("#path_rad" ).attr("d","M"+Param_redx+" "+Param_redy+" C"+Param_redx+" "+Param_redy+" "+Param_redcx+" "+Param_redcy+" "+Param_redpx+" "+Param_redpy);
				$(document).find("#path_black" ).attr("d","M"+Param_blackx+" "+Param_blacky+" C"+Param_blackx+" "+Param_blacky+" "+Param_blackcx+" "+Param_blackcy+" "+Param_blackpx+" "+Param_blackpy);
			}
		}});
	});


	var x=1;

	/*$(".wyb-off").click(function(){

		$(".wyb-bottom").css("transform","rotate(0deg)");


		$(".wyb-top").css("color","#9C9C90");
		$(".wyb-topUnit").html("");
	});
	$(".wyb-vv").click(function(){

		$(".wyb-bottom").css("transform","rotate(23deg)");
		$(".wyb-top").css("color","#454545");
		$(".wyb-topUnit").html("V~");

	});
	$(".wyb-v").click(function(){

		$(".wyb-bottom").css("transform","rotate(46deg)");
		$(".wyb-top").css("color","#454545");
		$(".wyb-topUnit").html("V");

	});
	$(".wyb-mv").click(function(){

		$(".wyb-bottom").css("transform","rotate(69deg)");
		$(".wyb-top").css("color","#454545");
		$(".wyb-topUnit").html("mV");

	});*/
	$(".wyb-k").click(function(){
		if(typeof pages41!='undefined'){
			if(pages41==2){
				pencilMeter();
			}
		}
		$(".wyb-bottom").css("transform","rotate(92deg)");
		$(".wyb-top").css("color","#454545");
		//$(".wyb-topUnit").html("Ω");
		$(".wyb-top").html("1.");

	});
	/*$(".wyb-nofine").click(function(){

		$(".wyb-bottom").css("transform","rotate(115deg)");
		$(".wyb-top").css("color","#454545");
		$(".wyb-topUnit").html("");

	});
	$(".wyb-AA").click(function(){

		$(".wyb-bottom").css("transform","rotate(138deg)");
		$(".wyb-top").css("color","#454545");
		$(".wyb-topUnit").html("A~");

	});
	$(".wyb-A").click(function(){

		$(".wyb-bottom").css("transform","rotate(161deg)");
		$(".wyb-top").css("color","#454545");
		$(".wyb-topUnit").html("A");

	});
	$(".wyb-mA").click(function(){

		$(".wyb-bottom").css("transform","rotate(184deg)");
		$(".wyb-top").css("color","#454545");
		$(".wyb-topUnit").html("mA");
	});*/


}
function freshHotspot(){
var eefefe=0;
//第一次documentc初始获得热区
//下面的参考上面同案例
$(document).find('a').droppable({
	accept: "#hhjwybBlack_hotspot,#hhjwybRed_hotspot",
	tolerance: "pointer",
	greedy: true,
	over: function( event, ui ) {
		eefefe=0;


		if(ui.draggable[0].id=="hhjwybBlack_hotspot"){

			document.getElementById("path_black").style.stroke="#EBB41E";
			/*console.log(document.getElementById("path_black").style.stroke);*/
			//console.log(event);
		}if(ui.draggable[0].id=="hhjwybRed_hotspot"){
			document.getElementById("path_rad").style.stroke="#EBB41E";
			//console.log(event);

		}




	},
	out: function( event, ui ) {

		if(ui.draggable[0].id=="hhjwybRed_hotspot"){

			document.getElementById("path_rad").style.stroke="#d83747";

			return false;
		}if(ui.draggable[0].id=="hhjwybBlack_hotspot"){

			document.getElementById("path_black").style.stroke="#43393a";
			/*console.log("out-----"+ui.draggable[0].id);*/
			return false;
		}

		hehehfehfe=0;
		eefefe=1;
	},
	drop: function( event, ui ) {

		//console.log("----------------------------------------------------------------------------");
		if (eefefe==0) {
			if(ui.draggable[0].id=="hhjwybRed_hotspot"&&Blackrepetition!=$(this).attr("rqPosition")){

				document.getElementById("path_rad").style.stroke="#d83747";
				$("#hhjwybRed").css("top",""+($(this).attr("h_x")-234)+"px");
				$("#hhjwybRed").css("left",""+(parseInt($(this).attr("h_y"))+5)+"px");
				$("#hhjwybRed_hotspot").css("top",""+($(this).attr("h_x")-17)+"px");
				$("#hhjwybRed_hotspot").css("left",""+(parseInt($(this).attr("h_y"))+5)+"px");

				wyb_red=1;

				Radrepetition=$(this).attr("rqPosition");//记忆已经有一只放在热区上
				wybredstartx=parseInt($("#hhjwybRed").css("left"))+10;
				wybredstarty=parseInt($("#hhjwybRed").css("top"))+5;
				wybredradianx=parseInt($("#hhjwybRed").css("left"))-90;
				wybredradiany=parseInt($("#hhjwybRed").css("top"))-90;
				wybredstopx=parseInt($( "#mask-wyb" ).css("left"))+114;
				wybredstopy=parseInt($( "#mask-wyb" ).css("top"))+298;
				hehehfehfe=1;

				w_wyb_redHtml=$(this).attr("h_href");
				wybredPosition=$(this).attr("wybredPosition");


				$(document).find("#path_rad" ).attr("d","M"+wybredstartx+" "+wybredstarty+" C"+wybredstartx+" "+wybredstarty+" "+wybredradianx+" "+wybredradiany+" "+wybredstopx+" "+wybredstopy);

			}if(ui.draggable[0].id=="hhjwybBlack_hotspot"&&Radrepetition!=$(this).attr("rqPosition")){

				document.getElementById("path_black").style.stroke="#43393a";
				$("#hhjwybBlack").css("top",""+($(this).attr("h_x")-234)+"px");
				$("#hhjwybBlack").css("left",""+(parseInt($(this).attr("h_y"))+5)+"px");
				$("#hhjwybBlack_hotspot").css("top",""+($(this).attr("h_x")-17)+"px");
				$("#hhjwybBlack_hotspot").css("left",""+(parseInt($(this).attr("h_y"))+5)+"px");
				wyb_black=1;
				Blackrepetition=$(this).attr("rqPosition");//记忆已经有一只放在热区上
				wybblackstartx=parseInt($("#hhjwybBlack").css("left"))+5;
				wybblackstarty=parseInt($("#hhjwybBlack").css("top"))+5;
				wybblackradianx=parseInt($("#hhjwybBlack").css("left"))+90;
				wybblackradiany=parseInt($("#hhjwybBlack").css("top"))-90;
				wybblackstopx=parseInt($( "#mask-wyb" ).css("left"))+90;
				wybblackstopy=parseInt($( "#mask-wyb" ).css("top"))+300;
				hehehfehfe=1;

				w_wyb_blackHtml=$(this).attr("h_href");
				wybblackPosition=$(this).attr("wybblackPosition");

				$(document).find("#path_black" ).attr("d","M"+wybblackstartx+" "+wybblackstarty+" C"+wybblackstartx+" "+wybblackstarty+" "+wybblackradianx+" "+wybblackradiany+" "+wybblackstopx+" "+wybblackstopy);
			}
			if(pages41==3){
				if(Radrepetition!=0&&Blackrepetition!=0) {
					$(".wyb-top").html("1.");
					$(".wyb-topUnit").hide();
					$(".mask1").hide();
					$(".mask2").hide();
					NextDarkOrLignt(1);
					clearInterval(timesW);
					clearInterval(timesWy);
					pages41 = 1;
				}
			}
		}
	}
});
};
			/* console.log( );*/
			/* console.log("drop-----",event.pageX,event.pageY);*/
/*
}*/
