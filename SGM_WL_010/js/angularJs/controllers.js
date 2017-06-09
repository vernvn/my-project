//main start
//主显示控制器
var initStrom;
mainModule.controller("mainCtrl",["$scope","$rootScope","$timeout","$state","dataservice","xcjService","multimeterService","xcjDataService","batteryService",function($scope,$rootScope,$timeout,$state,dataservice,xcjService,multimeterService,xcjDataService,batteryService){
	//导航的块的内容数组
	var aNaviText=["客户陈述","症状确认","初步检查","故障分析","视觉检测","故障诊断","故障维修","修复确认"];
	//中间导航分级的关键$rootScope.timers数组
	var aNaviTimers=[2,4,8,14,25,31,43,45,48];
	//跳转页面数据模型（控制跳转到哪个页面）
	$scope.tempalteName="workOrder";
	//导航显示数组
	$scope.aNavis=[aNaviText[0]];
	//计算点击跳转（记录到后台）
	$rootScope.timers=2;
	$rootScope.totalNum=48;
	$rootScope.progress=0;
	//页面跳转id计算
	$rootScope.pageId=ToPageId($rootScope.timers);
	
	//service中数组数据中对应的下标
	$rootScope.index=0;
	//当前导航条块text内容
	$scope.navText=aNaviText[0];
	//存储正确题号
	var aCorrectAnswer=[];
	//最后6题正确率
	$scope.nCorrectRate=0;
	//学习完成的永恒状态码（记录到后台）
	var studyOverStay=false;
	//学习所花时间（记录到后台从后台获取）
	$scope.studyTime=0;
	//区分刷新和关闭
	$scope.isExitStudy=false;
	initStrom = function (){
		var rePage1 = $.xcj.scorm.api.getSuspendData();
		// rePage1 = '45,false';
		var rePage = rePage1.split(',');
		if(rePage[1] === 'false'){
			rePage[1] = false;
		} else {
			rePage[1] = true;
		}
		if (rePage1 === '' || rePage1 === undefined || rePage1 === 'false') {
			startAnew();
		} else {
			progressPageStart(rePage);
			setTimeout(function(){
				GoNavi();
			},0);
			if(rePage[1]){
				//解放导航条
				setTimeout(function(){
					LiberNavi();
				}, 100)
			}
		}
	}
// 如果没有进度从头开始的函数
	function startAnew(){
		$('.main_mask').hide();
		$('.main_index').show();
		$('.main_head').hide();
		$('.main_body').hide();
		$('.main_bottom').hide();
		if($rootScope.timers==2){
			var str='<audio src="audio/001.mp3" id="audioIndex" ></audio>';
			$("#contain").after(str);
			$("#audioIndex")[0].play();
		}
	}
	// 如果有进度跳到进度的页面
	function progressPageStart(progressPage){
		$('.main_mask').hide();
		$('.main_index').hide();
		$('.main_head').show();
		$('.main_body').show();
		$('.main_bottom').show();
		$rootScope.timers = parseInt(progressPage[0]);
		$rootScope.pageId=ToPageId($rootScope.timers);
		pageNum = $rootScope.pageId;
		GoPage();
		setTimeout(function(){
			GoNavi(progressPage);
			var _pageid=progressPage[0].length===1?'00'+progressPage[0]:'0'+progressPage[0];
			audioPlay(_pageid);
			OpenSpearker();
		}, 0)

		if(progressPage[1]){
			studyOverStay = progressPage[1];
			NextDarkOrLignt(1);
			//解放倒退按钮
			LiberBack();
			//解放导航条
				
		}
	}


	//初始化平台
	// golbalXcjDataService.init(function(data) {
    //     var data = JSON.parse(data.adapter.characterC);
    //     var step = data.customData.step;
    //     if (step) {
    //         $rootScope.timers = parseInt(step);
    //         $rootScope.pageId = ToPageId($rootScope.timers);
    //         //showOrhideAlertStart();
    //         if (step > aNaviTimers[0]) {
    //             $scope.$apply(function() {
    //                 // $scope.indexShowOrHide.alertStart = true;
    //                 $('.main_mask').eq(0).show();
    //             });
    //         };
    //     };
    // });
	function memoryAnswer() {
		//console.log(JSON.stringify(golbalXcjDataService.paper.scoreMap))
		// golbalXcjDataService.paper.scoreMap.eachMap(function (key, value) {
		// 	if (value.optionArray.length) {
		// 		for(var i=0;i<value.optionArray.length;i++){
        //            if($("#"+value.optionArray[i].id).length>0){
		// 			   $("#"+value.optionArray[i].id).addClass("answer_act");
		// 			   return;
		// 		   }
		// 		}
		// 	}
		// });
	}
	//var pdata=JSON.parse(window.parent.document.getElementById("historyData").innerHTML);
	//$scope.user={domainName:pdata.data.domainName,userEmail:pdata.data.userEmail,token:pdata.token,sessionId:pdata.data.sessionId,courseName:"WBT_FCO_ES_EC_001"};
	//xcjService.content.study.initStudyData($scope.user);
	//上次离开时学习到什么页面了
/*	if(typeof(xcjService.content.study.parame.character.param)!='undefined'){
		angular.forEach(xcjService.content.study.parame.character.param.progress,function(data,index){
			if(data.status=='true'){
				$rootScope.timers=parseInt(data.postedId);
			}
		});
	}*/
	
	
	//第一次学习以及重新开始学习时需要置空后台
	function newLife(){
		//xcjService.content.study.parame.character.param=param;

		//xcjService.content.study.parame.character.question=question;

		//xcjService.content.study.commitStudyData();
	}
	//存储回答正确的题号

	$scope.MemoryAnswer = function(id,answer,rAnswer,isRight,score){

		var question={"postedId":id, "answer": answer, "rAnswer": rAnswer, "isRight": isRight, "score": score, "kp": "06"};
		//xcjService.content.study.setStudyQuestionData(question);
	};
	//计算正确率
	function CountRate(){
		$scope.nCorrectRate=parseInt((aCorrectAnswer.length/6)*100);
	}


	//点击想上一页跳转--------------------------------------------------------------------------
	$scope.GoPrePage=function(){
		if(multimeterService.Mdata.multimeterStatus) {
			multimeterService.Mdata.closemultimeter();
		}

		$rootScope.timers--;
		recordHistory($rootScope.timers, $scope.totalNum, studyOverStay);
		if($rootScope.timers<=aNaviTimers[0]){
			$rootScope.timers=aNaviTimers[0];
			$("#pre_arrow").addClass("main_head_arrow_pre_dark").removeClass("main_head_arrow_pre_light");
			$("#pre_arrow").attr('disabled', 'disabled');
		}
		$rootScope.pageId=ToPageId($rootScope.timers);
		audioPlay($rootScope.pageId);
		if(studyOverStay){
			speakerPlayOrPause();
		}
		GoNavi();
		GoPage();
		//如侧边栏下一页的按钮置灰
		emptyPro();
		pageNum = $rootScope.pageId;
	}
	
	//点击向下一页跳转
	$scope.GoNextPage=function(){

		if(studyOverStay){
			$("#pre_arrow").removeClass("main_head_arrow_pre_dark").addClass("main_head_arrow_pre_light");
			$("#pre_arrow").attr('disabled', false);
		}
		if($rootScope.progress<48){
			$rootScope.progress++;

		}

		// console.log("$rootScope.progress--"+$rootScope.progress);
		if(multimeterService.Mdata.multimeterStatus) {
			multimeterService.Mdata.closemultimeter();
		}

		//如侧边栏下一页的按钮置灰
		emptyPro();
		$rootScope.timers++;
		recordHistory($rootScope.timers, $scope.totalNum, studyOverStay);
		// console.log("$rootScope.timers----"+$rootScope.timers);

		//41页面之后的页面
		if($rootScope.timers>aNaviTimers[aNaviTimers.length-1]){
			lastAudio = true;
			$rootScope.timers=aNaviTimers[aNaviTimers.length-1];
			//弹出退出提示框
			// $scope.indexShowOrHide.alertEnd=true;
			$('.main_mask_end').show();
			//计算最后几道的正确率
			CountRate();
			//学习完成的永恒状态码变成true
			studyOverStay=true;
		}
		
		//如果已经学习完成，某些功能保持解放
		if(studyOverStay){
			//如果学习完成，一直解放下一页按钮
			NextDarkOrLignt(1);
			if(lastAudio){
				if($('#speaker').attr('name')=== '1'){
					$('#audio1')[0].pause();
				}
				$('#audio1').attr('src', '');
				$('#audio2').attr('src', 'audio/last.mp3');
				setTimeout(function(){$('#audio2')[0].load();
				$('#audio2')[0].play();}, 100);
			}
			
		}
		//导航和模板跳转
		$rootScope.pageId=ToPageId($rootScope.timers);
		audioPlay($rootScope.pageId);
		if(studyOverStay){
			speakerPlayOrPause();
		}

		GoNavi();
		GoPage();
		clearPageParam();

		pageNum = $rootScope.pageId;

		// console.log(pageNum)
	};

	//导航条的跳转方法
	function GoNavi(progressPage){
		var nLength=0;
		//导航控制
		if($rootScope.timers<aNaviTimers[1]){
			nLength=0;
		}
		if(($rootScope.timers>=aNaviTimers[1])&&($rootScope.timers<aNaviTimers[2])){
			nLength=1;
		}else if(($rootScope.timers>=aNaviTimers[2])&&($rootScope.timers<aNaviTimers[3])){
			nLength=2;
		}else if(($rootScope.timers>=aNaviTimers[3])&&($rootScope.timers<aNaviTimers[4])){
			nLength=3;
		}else if(($rootScope.timers>=aNaviTimers[4])&&($rootScope.timers<aNaviTimers[5])){
			nLength=4;
		}else if(($rootScope.timers>=aNaviTimers[5])&&($rootScope.timers<aNaviTimers[6])){
			nLength=5;
		}else if(($rootScope.timers>=aNaviTimers[6])&&($rootScope.timers<aNaviTimers[7])){
			nLength=6;
		}else if(($rootScope.timers>=aNaviTimers[7])&&($rootScope.timers<aNaviTimers[8])){
			nLength=7;
			if(studyOverStay){
				LiberNavi();
			}
		}else if(($rootScope.timers>=aNaviTimers[8])){
			//先生成导航
			nLength=7;
			//隐藏导航条
			// HideNavi();
		}
		//用来生成前面的导航条
		//先把导航条置空
		if(!studyOverStay){
			$scope.aNavis=[aNaviText[0]];
		}	
		
		if(progressPage && progressPage[1]){
			nLength=7;
		}
		
		for(var i=0;i<=nLength;i++){
			$scope.aNavis[i]=aNaviText[i];
			$scope.navText=aNaviText[i];
		// console.log('$scope.navText:' + $scope.navText);
		}
	}
	//模板跳转方法
	function GoPage(){	
		//判断进入哪个模板
		$scope.tempalteName="";//跳转到哪个模板的控制
		// golbalXcjDataService.setCustomData('step', $rootScope.pageId);
		//页面跳转

		$state.go(IndexModel($rootScope.pageId));
		clearPageParam();
		$(".footboard").attr("name", "0");
		$(".accelerator").attr("name", "0");
		$('.infoText').html('');
		isInDpanel = false;
		isInNpanel = true;
		isInRpanel = false;
		clearInterval(timerAnother);
		clearInterval(timer);
		rotateSpeed = 6;
		rotateSpeed2 = 6;
		Kcomplete = false;
		landKcomplete = false;
		landVcomplete= false;
		carStarted = false;
		
		if($('.svg_pic').offset()){
			$(".svg_pic").animate({scrollTop:0},0);
		}
		if(!studyOverStay){
			messsageStatus = false;
			clearInterval(messagetimer);
			messagelink();
			switchStallsStatus = false;
		}else{
			clearInterval(messagetimer);
			switchStallsStatus = true;
			clearInterval(switchStallsTimer);
		}
		// console.log(pageNum)
		if(!studyOverStay && pageNum==='010'){  //这里需要减一才得到真正pageNum
			listLink();
		}
		if($rootScope.timers<=aNaviTimers[0]){
			$rootScope.timers=aNaviTimers[0];
			$("#pre_arrow").addClass("main_head_arrow_pre_dark").removeClass("main_head_arrow_pre_light");
			$("#pre_arrow").attr('disabled', 'disabled');
		}

		if(!studyOverStay && $rootScope.pageId === '047'){
			switchStallsLink();
		}
		if(!studyOverStay && $rootScope.pageId === '033'){
			clearInterval(switchStallsTimer);
		}
		if(!studyOverStay && $rootScope.pageId === '045'){
			clearInterval(switchStallsTimer);
		}
		
	}
	function clearPageParam(){
		//三个诊断仪页面让他们在不是本页面时清空变量
		if($scope.pageId!='005'){
			pages5 = undefined;
			bottomLockToggle(0);
		}
		if($scope.pageId!='010'){
			openDiagnosticEleven=undefined;
		}
		if($scope.pageId!='030'){
			pages30=undefined;
		}
		if($scope.pageId!='032'){
			pages32=undefined;
		}
		if($scope.pageId!='035'){
			pages35=undefined;
		}
		if($scope.pageId!='039'){
			pages39=undefined;
		}
		if($scope.pageId!='050'){
			pages41=undefined;
		}
		if($scope.pageId!='041'){
			pages42=undefined;
		}
        if($scope.pageId!='045'){
            pages45=undefined;
        }
		if($scope.pageId!='025'){
			pages25=undefined;
			pages25Step = 0;
		}
		if($scope.pageId!='046'){
			pages46=undefined;
			pages46Step = 0;
		}
		if($scope.pageId!='047'){
			pages47=undefined;
		}



	}
	//判断进入哪个模板
	function IndexModel(pageId){
		var modelType="没有找到这个页面id";
		angular.forEach(dataservice,function(item,key){
			if(pageId==item.id){
				$rootScope.index=key;
				modelType=item.modelType;
				// console.log("key---"+key+"item---"+item.modelType);
				return;
			}
		});
		return modelType;
	}

	
	//第一个页面的切换显示=================================================================
	if($rootScope.timers<=aNaviTimers[0]){
		$scope.indexShowOrHide={
			indexShow:true,	//显示进入页面
			mainHeadShow:false,//隐藏导航条等
			mainBodyShow:false,//隐藏主体等
			alertStart:false,//是否弹出询问层
			alertEnd:false//弹出退出警告
		}
	}else{
		$scope.indexShowOrHide={
			indexShow:false,//隐藏进入页面
			mainHeadShow:true,//显示导航条
			mainBodyShow:true,//隐藏主体等
			alertStart:true,//弹出询问层
			alertEnd:false//弹出退出警告
		}
	}
	//判断第一次该跳哪个模板--------------------------------------------------------------------
	function Go(){
		//导航和模板跳转
//		if(studyOverStay){
//			//解放上一页按钮
//			LiberBack();
//			//解放下一页按钮
//			NextDarkOrLignt(1);
//		}
		GoNavi();
//		GoPage();
		setTimeout(GoPage,0);
	}
	Go();
	//---------------------------------------------------------------------------------------
	//=====================================================================================
	//第一个页面首页面切换函数
	$scope.IndexHide=function(){
		if($.xcj.scorm.api.setComplete){
			  $.xcj.scorm.api.setComplete('incomplete');
			  $.xcj.scorm.api.doCommit();
		}
		recordHistory($rootScope.timers, $scope.totalNum, studyOverStay);
		//关闭第一页面的声音
		$("#audioIndex").remove();
		dataservice[0].audioIndex='';
		$('.main_mask').hide();
		$('.main_index').hide();
		$('.main_head').show();
		$('.main_body').show();
		$('.main_bottom').show();
		// $scope.indexShowOrHide={
		// 	indexShow:false,
		// 	mainHeadShow:true,
		// 	mainBodyShow:true
		// }
		//声音播放
		audioPlay($rootScope.pageId);
		OpenSpearker();
		
		

	}
	//导航条的点击事件（解锁导航条之后使用）
	$scope.NaviClick=function(nav){
		if($(".main_head_navi ul li div").attr("data-name")=="0"){
			return false;
		}
		//控制每个导航的高亮
		$scope.navText=nav;
		$("#pre_arrow").removeClass("main_head_arrow_pre_dark").addClass("main_head_arrow_pre_light");
		$("#pre_arrow").attr('disabled', false);
		//控制跳转
		if(nav==$scope.aNavis[0]){
			$rootScope.timers=aNaviTimers[0];
			$("#pre_arrow").addClass("main_head_arrow_pre_dark").removeClass("main_head_arrow_pre_light");
			$("#pre_arrow").attr('disabled', 'disabled');
		}
		if(nav==$scope.aNavis[1]){
			$rootScope.timers=aNaviTimers[1];
		}
		if(nav==$scope.aNavis[2]){
			$rootScope.timers=aNaviTimers[2];
		}
		if(nav==$scope.aNavis[3]){
			$rootScope.timers=aNaviTimers[3];
		}
		if(nav==$scope.aNavis[4]){
			$rootScope.timers=aNaviTimers[4];
		}
		if(nav==$scope.aNavis[5]){
			$rootScope.timers=aNaviTimers[5];
		}
		if(nav==$scope.aNavis[6]){
			$rootScope.timers=aNaviTimers[6];
		}
		if(nav==$scope.aNavis[7]){
			$rootScope.timers=aNaviTimers[7];
		}
		$rootScope.pageId=ToPageId($rootScope.timers);
		audioPlay($rootScope.pageId);
		if(studyOverStay){
			speakerPlayOrPause();
		}
		GoPage();
		//如侧边栏下一页的按钮置灰
		emptyPro();
		pageNum = $rootScope.pageId;
		recordHistory($rootScope.timers, $scope.totalNum, studyOverStay);
	}
	//跳到第一个页面
	$scope.ToFirstPage=function(){
		$rootScope.timers=aNaviTimers[0];		
		$rootScope.pageId=ToPageId($rootScope.timers);
		newLife();
		Go();
		//下一页的左右侧边都收起
		slideNavList(0);
		slideToolBox(0);
		$scope.indexShowOrHide={
			indexShow:true,	//显示进入页面
			mainHeadShow:false,//隐藏导航条等
			mainBodyShow:false,//隐藏主体等
			alertStart:false,//是否弹出询问层
			alertEnd:false//弹出退出警告
		};
		//关闭第二页声音
		CloseSpearker();
		//关闭提示框
		CloseDiv();
		var str='<audio src="audio/001.mp3"   id="audioIndex"></audio>';
		$("#contain").after(str);
		$("#audioIndex")[0].play();
		//隐藏的导航栏出现
		ShowNavi();
	};
	//跳到上次保存的页面
	$scope.ToLastPage=function(){
		CloseDiv();
		GoPage();
        $scope.IndexHide();
		//隐藏的导航栏出现
		//ShowNavi();
		//声音播放
		OpenSpearker();
	};
	//继续学习
	$scope.StayPage=function(){
		//中途退出时的函数
		if($rootScope.timers<aNaviTimers[aNaviTimers.length-1]){
		//关闭弹出层
			CloseDiv();
			return;
		}
		//关闭弹出层
		CloseDiv();
		//解放导航条
		LiberNavi();
		//解放倒退按钮
		LiberBack();
		//清空正确答案的数组
		aCorrectAnswer=[];
		//打开声音
		if(globalSound==1){
			OpenSpearker();
		}
		lastAudio = false;
		audioPlay($rootScope.pageId);
		speakerPlayOrPause();
		$('#audio2')[0].pause();
	}
	//离开页面
	$scope.LeavePage=function(){
/*		xcjService.content.study.commitStudyData();
		xcjService.content.study.parame.actionTime+=addTime;
		xcjService.content.study.exit();*/
		$.xcj.scorm.api.doQuit();
		//关闭窗口
		CloseWindow();
		//停止向后台提交

		


	}
	//关闭弹出层方法
	function CloseDiv(){
		$scope.indexShowOrHide.alertStart=false;//弹出询问层
		$scope.indexShowOrHide.alertEnd=false;//弹出退出警告层
		$('.main_mask').hide();
	}
//关闭按钮方法
	var addTime=0;
	var autoTime=function() {
		$timeout(function () {
			addTime += 1;
			autoTime();
		}, 2000);
	}
	autoTime();
	$scope.ExitStudent=function(){
		//弹出退出提示框
		// $scope.indexShowOrHide.alertEnd=true;
		$('.main_mask_end').show();
		//
		$scope.isExitStudy=true;

	};
	//监听页面变化
	$scope.$watch('index',function(newValue,oldValue){
		// console.log("变化了")

	})


}])
//main end===============================================================================================
//yrr start====================================================================
//这是单选题的控制器
modelChoice.controller('modelChoiceControll',['$scope','$sce','dataservice','$rootScope','xcjDataService',function($scope,$sce,dataservice,$rootScope,xcjDataService){
	$scope.selectID='';
	$scope.audioSrc = $sce.trustAsResourceUrl;
	//裴露婕---20170119
	// $scope.audioSrc = 'audio/003.mp3';
	//-------------------------end
	//监听全局index是否发生变化，这会让加载同一模板的的操作进行清空
	$scope.$watch('index',function(newValue,oldValue){
		$scope.data=dataservice[newValue];
		//播放第二个声音
		//IsSpearker();
		$scope.data.answer=dataservice[newValue].answer;
		$scope.answerTrue=0;
		$scope.answerFalse=0;
		$scope.selectID='';
		selectID='';
		$(".selection_box_answer").removeClass("answer_act");

		//连续背景图的页面，初始化是答题状态，而不是查看资料状态
		showDiv();
		// console.log($rootScope.pageId)
		// if($rootScope.pageId=='005'){
		// 	$('#p-con').text('根据工单描述，车辆变速箱故障灯点亮且车辆无法行驶，现在请操作车辆确认故障现象。');
		// }
		// if($rootScope.pageId=='047'){
		// 	console.log('asdasda')
		// 	$('#p-con').text('dsfsdfsfsd');
		// }
		
		
		$('#box').css('display', 'none');
	});
	var answer='';
	//提交事件
	var progress=0;
	$scope.submit=function(selectID){
		if($scope.data.answer==selectID){
			//alert(selectID)
			//console.log(golbalXcjDataService.progressStatus);
			/*golbalXcjDataService.setProgress(selectID);*/
			correct();
			NextDarkOrLignt(1);
			$scope.answerTrue=1;
			$scope.answerFalse=0;
		}else{
			error();
			$scope.answerTrue=0;
			$scope.answerFalse=1;
			//027页面三个错误选项跳出都不同
			// if($rootScope.pageId=='027'){
			// 	if(selectID=='b'){
			// 		$scope.data.answerFalse=$scope.data.answerFalseb;
			// 	}else if(selectID=='a'){
			// 		$scope.data.answerFalse=$scope.data.answerFalsea;
			// 	}else{
			// 		$scope.data.answerFalse=$scope.data.answerFalse;
			// 	}

			// }
		}
	}
	//选中选项的状态
	$scope.selected=function (obj){
		if(obj.getAttribute("id")!=null){
			$scope.selectID=obj.getAttribute("id");
		}
		//alert($scope.selectID)
		$(".selection_box_answer").removeClass("answer_act");
		$(obj).not("span").addClass("answer_act");
	}
}]);
//多选题
modelChoice.controller('modelMultiple',['$scope','$sce','dataservice','$rootScope',function($scope,$sce,dataservice,$rootScope){
	$scope.selectID='';
	// $scope.audioSrc = $sce.trustAsResourceUrl;
	// console.log('$rootScope.pageIdnnnnnnnnnnnnnnnnnnnn:' +$rootScope.pageId);

	//监听全局index是否发生变化，这会让加载同一模板的的操作进行清空
	$scope.$watch('index',function(newValue,oldValue){
		$scope.data=dataservice[newValue];
		//播放第二个声音
		//IsSpearker();
		$scope.data.answer=dataservice[newValue].answer;
		$scope.answerTrue=0;
		$scope.answerFalse=0;
		$scope.times=0;
		if($scope.data.answer){
			$scope.answer = $scope.data.answer.slice(0, $scope.data.answer.length - 1);
		}
		
		$(".selection_box_answer").removeClass("answer_act");
	});
	//选中选项的状态
	$scope.selected=function (obj){
		if($(obj).hasClass("answer_act")){
			$(obj).not("span").removeClass("answer_act");
		}else{
			$(obj).not("span").addClass("answer_act");
		}
	};
	$scope.answer = '';
	//答错次数
	$scope.times=0;
	//提交事件
	$scope.submit=function(){
		var answer='';
		$(".selection_box_answer").each(function(i){
			if($(this).hasClass("answer_act")){
				answer+=$(this).attr("id")+'，';
			}
		});
		// console.log(answer,$scope.data.answer)
		if(answer==$scope.data.answer){
			correct();
			NextDarkOrLignt(1);
			$scope.answerTrue=1;
			$scope.answerFalse=0;
		}else{
			//错误三次的提示
			if($scope.times>=3){
				$scope.data.answerFalse='您已经错误三次，正确答案是'+$scope.answer+"选项";
			}
			error();
			$scope.answerTrue=0;
			$scope.answerFalse=1;
			$scope.times++;
		}
	}
}]);

//这是工单信息控制器
modelChoice.controller('modelWorkOrder',['$scope','$sce','dataservice','$rootScope',function($scope,$sce,dataservice,$rootScope){
	$scope.audioSrc = $sce.trustAsResourceUrl;
	//控制查询第几条历史记录
	$scope.historyId=0;
	//三个按钮使用那一套
	$scope.itemId=0;
	$scope.$watch('index',function(newValue,oldValue){
		$scope.data=dataservice[newValue];
		$scope.answerTrue=1;
		$scope.answerFalse=0;
		if($rootScope.pageId=='002'){
			NextDarkOrLignt(1);
		}
		//播放第二个声音
		// IsSpearker();

	});
	//threeItem这个数组判断三个历史记录项是否都查看
	var threeItem=[];
	var flag=0;
	//点击历史记录事件
	$scope.whichFunction=function(){
		if( $scope.data.btntText=='返 回'){
			if($("#audio1").length>0){
				$scope.data.choosBox='yes';
				//工单页面的声音停止
				$("#audio1").remove();
				if(globalSound==1){
					$("#audio2")[0].play();
				}
				return;
			}else{
				return;
			}
		}
		if($rootScope.pageId=='041'){
			add();
		}else if($rootScope.pageId=='048'){
			add1();
		} else{
			$scope.back();
		}
	};
	//选择题提交事件
	$scope.submit=function(selectID){
		if($scope.data.answer==selectID){
			$("#audio2")[0].pause();
			correct();
			$scope.answerTrue=1;
			$scope.answerFalse=0;
		}else{
			$("#audio2")[0].pause();
			error();
			$scope.answerTrue=0;
			$scope.answerFalse=1;
		}

	}
	//选中选项的状态
	$scope.selected=function (obj){
		$(".selection_box_answer").removeClass("answer_act");
		$(obj).not("span").addClass("answer_act");
	}
	//继续状态
	$scope.goOn=function(){
		$scope.data.tips='在完成了初步检查后，下一步应进行的诊断步骤是什么？';
		$scope.answerTrue=0;
		$scope.data.choosBox='';
		//2页面选择题的声音停止
		$("#audio2").remove();
		if(globalSound==1){
			$("#audio3")[0].play();
		}
		// serviceDataIsFlicker(1);
		// slideNavList(1);
		// NextDarkOrLignt(1);
		$scope.GoNextPage();
	}
	//---------------裴露婕---20170110
	
	//===========================end
}]);
//15页面31页面单张图片
modelChoice.controller('bgIMgctrl',['$scope','$sce','dataservice','$rootScope',function($scope,$sce,dataservice,$rootScope){
	$scope.audioSrc = $sce.trustAsResourceUrl;
	$scope.$watch('index',function(newValue,oldValue){
		$scope.data=dataservice[newValue];
		//播放第二个声音
		//IsSpearker();
		// if($rootScope.pageId=='015'){
		// 	NextDarkOrLignt(1);
		// } 
	});
}]);
//005
modelChoice.controller('fireControll',['$scope','$sce','dataservice','$rootScope',function($scope,$sce,dataservice,$rootScope) {
	// $scope.audioSrc = $sce.trustAsResourceUrl;
	$scope.gearClick = false;
	gearInit();
	$scope.$watch('index',function(newValue,oldValue){
		$scope.data=dataservice[newValue];
		$('#switch_stalls').css('cursor','pointer');
		//播放第二个声音
		//IsSpearker();
		if($rootScope.pageId=='005'){
			$('.center-control').show();
	        bottomLockToggle(1);
	        footboardBox(0);
	        doublepages5 = 1;
	        $('.handle').css({
		        left: '77px',
		        top: '15px'
		    })
	        $('.shift').find('span').off().click(function(){
				var isloadedImage = $('.meter-bright-center').css('background-image').indexOf('center_later');
				var brightCenterText = $('.meter-bright-center').text();
		        if($('.footboard').attr('name') === '1' && switch_info && (isloadedImage>-1 || brightCenterText==='请踏下制动踏板')){
		            $(this).addClass('span-active').siblings('span').removeClass('span-active');
		        }
		    })
		}
		if($rootScope.pageId=='005'){
			$('.graybutton').show();
			$("#p-con").html("根据工单描述，车辆变速箱故障灯点亮且车辆无法行驶，现在请操作车辆确认故障现象。");
		}
		if($rootScope.pageId=='010'){
			$("#p-con").html("请使用诊断仪对车辆进行故障码读取。");
		}
		if($rootScope.pageId=='047'){
			$("#p-con").html("车辆故障症状消失后，需要对车辆进行历史故障码清除，请使用诊断仪进行操作。");
		}
		
	});


}]);
//yrr end=======================================================================

//ds start======================================================================
mytool.controller('toolChoice',['$scope','$sce','dataservice','$rootScope',function($scope,$sce,dataservice,$rootScope){
	$scope.selectID="";
	$scope.audioSrc = $sce.trustAsResourceUrl;
	var index=-1;
	angular.forEach(dataservice,function(item,key){
		if($rootScope.pageId==item.id){
			index=key;
			return;
		}
	});
	$scope.content=dataservice[index];
	//播放第二个声音
	//IsSpearker();
	$scope.myError = true;
	$scope.submit = function(id){
		//console.log($scope.selectID);
		if($scope.selectID==dataservice[index].answer){
			//跳转
			//$("#audio1")[0].play();
			$("#error")[0].pause();
			$scope.GoNextPage();
			// if(id === 2){
			// 	NextDarkOrLignt(0);
			// }else {
			// 	NextDarkOrLignt(1);
			// }
			$scope.myError = true;
		}else{
			submitHoriChoice(id);
			$scope.myError = false;
		}

	};
	$scope.closeSubmit = function() {
		$scope.myError = true;
	};
	$scope.$watch('index',function(newValue,oldValue){
		$scope.data=dataservice[newValue];
		$('#box').css('display', 'none');
		if($rootScope.pageId=='004'){
			$("#p-con").html("下面将要对维修工单中所描述的故障现象进行确认，请选择需要进入的场景。");
			$("#p-pro").html("[说明：请选择“车辆内饰”进入]");
			dataservice[index].answer = 'b';
		} else if($rootScope.pageId=='009') {
			$("#p-con").html("在初步检查过程中需要读取故障代码，请选择相应场景进入。");
			$("#p-pro").html("[说明：请选择“车辆内饰”进入]");
			dataservice[index].answer = 'b';
		} else if($rootScope.pageId=='014'){
			$("#p-con").html("信息列表中的哪个资源能够帮助你进行故障分析，请点击进入。");
			$("#p-pro").html("[说明：请选择“维修资料”进入]");
			dataservice[index].answer = 'e';
		} else if($rootScope.pageId=='026'){
			$("#p-con").html("选择合适的选项，学习相关资料，了解可疑部件在车上的位置和拆装方法。");
			$("#p-pro").html("[说明：请选择“维修资料”进入]");
			dataservice[index].answer = 'e';
		} else if($rootScope.pageId=='031'){
			$("#p-con").html("在故障诊断前，请查阅故障相关资料，请选择正确的选项。");
			$("#p-pro").html("[说明：请选择“维修资料”进入]");
			dataservice[index].answer = 'e';
		}
	})

}]);

myMalfunction.controller('malfunction',['$scope','$sce','dataservice','$rootScope','$state',function($scope,$sce,dataservice,$rootScope,$state){
	$scope.selectID='';
	$scope.audioSrc = $sce.trustAsResourceUrl;
	var index=-1;
	angular.forEach(dataservice,function(item,key){
		if($rootScope.pageId==item.id){
			index=key;
			return;
		}
	});
	$scope.$watch('index',function(newValue,oldValue){
		if($scope.pageId=='012'){
			NextDarkOrLignt(1)
		}
	});
	//初始化两个提示框内容
	$scope.myMalfunctioncontent=dataservice[index];
	//播放第二个声音
	//IsSpearker();
	//隐藏没有通告的信息
	$(".TechnicalBulletins").hide();
	//显示竖项选择框
	$("#vert_choice").show();
	//错误提示框的判别码
	$scope.vertmyError = true;
	$scope.submit = function(selectID){
		if($scope.selectID==dataservice[index].answer){
			//显示错误提示
			$scope.vertmyError = true;
			//第14个页面下让点击播放第二段音频
			if($rootScope.pageId=="015"){
				NextDarkOrLignt(1);
				$scope.GoNextPage();
			}else if($rootScope.pageId=="018"){
				codeTab();
			}else if($rootScope.pageId=="022"){
				//让下一步按钮高亮
				NextDarkOrLignt(1);
				$scope.GoNextPage();
			}
		}else{
			$('#audio1')[0].pause();
			$("#error")[0].play();
			$scope.vertmyError = false;
		}
	};

	$scope.closeSubmit = function() {
		$scope.vertmyError = true;
	};
	//IsSpearker();
	//点击发动机
	$scope.engine=function(){
		if($rootScope.pageId=='012'){
			$(".TechnicalBulletins pre").html("<div class='vert_btn vert_btn_width'>TSB-关于发动机电脑程序升级的注意事项</div>\r\n<div class='vert_btn vert_btn_width'>TSB- 关于ZR发动机机油消耗大抱怨对应要领（SBC8-061 续）</div>\r\n<div class='vert_btn vert_btn_width'>TSB- 关于卡罗拉２ZR 发动机尾气异味的调查报告</div>")
			NextDarkOrLignt(1);
		}else if($rootScope.pageId=='017'){
			NextDarkOrLignt(1);
			$scope.GoNextPage();
		}
	};
}]);

//ds end========================================================================
//裴露婕---20170111




