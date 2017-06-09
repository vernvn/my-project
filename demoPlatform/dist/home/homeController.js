/**
 * home模块 交互的逻辑
 */
var home = angular.module('home',['clientModule']);   //注入通信模块
home.controller('homeController',['$scope','$state','$compile','$location','homeService','clientService','mainservice',function($scope,$state,$compile,$location,homeService,clientService,mainservice){
	var vm = this;    			  //  将this赋值vm，vm替代$scope
    vm.name = mainservice.name;  //存贮在内存的数据赋值，与视图绑定
    vm.password = mainservice.password; 
	vm.mainservice = mainservice;   
	vm.mainservice.erropen = false;
	vm.mainservice.currentPage = 1; 		//初始进入页面为1

 	//调用接口，初始进入，type传参为1，进行home主页面的数据渲染

	function initCourse(){
		if(mainservice.in){
			clientService.getlessonlist({type:1,username:vm.mainservice.username,loginId:vm.mainservice.loginId,currentPage:1,pageSize:8})
				.then(function(data){
					if(data.errCode === '0'){
						vm.lessiondata = data.resultList;
						$($('.listbox')[0]).find('p').css('backgroundColor','#01c8ff');
						$($('.listbox')[0]).siblings().find('p').css('backgroundColor','');
						if(vm.lessiondata){
							if(vm.lessiondata[0]){
								if(vm.lessiondata[0].id || vm.lessiondata[0].id==0){
									clientService.getlessoncourses({type:1,username:vm.mainservice.username,loginId:vm.mainservice.loginId,courseId:vm.lessiondata[0].id,currentPage:1,pageSize:8})
									.then(function(data){
										if(data.errCode === '0'){
											useCourse(data);
											mainservice.total = data.totalsPage;
											mainservice.courseId = vm.lessiondata[0].id;   //将初始页面第一个课程的id存储，进行传参
										}else if(data.errCode ==='104'){
											resetlogin(data);
										}else{
											resetcurrent(data);
										};
										mainservice.in = false;
									});
								}
							}
						}
					}
				});
		}
	}

	setTimeout(function(){
		initCourse();
	},0);
 	// 点击课程页面后进行分页数据获取
	vm.getcoursewarepage = function(index){
		vm.mainservice.currentPage = 1;   // 初始化当前页为1
		mainservice.courseId = vm.lessiondata[index].id;
		$($('.listbox')[index]).find('p').css('backgroundColor','#01c8ff');
		$($('.listbox')[index]).siblings().find('p').css('backgroundColor','');
		clientService.getlessoncourses({type:1,username:vm.mainservice.username,loginId:vm.mainservice.loginId,courseId:vm.lessiondata[index].id,currentPage:1,pageSize:8})
		.then(function(data){
 			errmesFn(data,useCourse);
		});
	};

	this.getLocalTime=function(nS){
		var timestamp4 = new Date(nS);
		return timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8);
	};

	vm.renderVideo = function(type){
		vm.lessiondata = [{
			id:'',
			name:'新能源视频'
		}];
		if(type == 1){
			vm.courselist = [{
				name: "驱动电机更换",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/1.mp4",
				fault_number: "",
				isVideo : true
			},
			{
				name: "诊断仪使用",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/2.mp4",
				fault_number: "",
				isVideo : true
			},
			{
				name: "内阻测试仪使用",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/3.mp4",
				fault_number: "",
				isVideo : true
			},
			{
				name: "新能源车专用万用表使用",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/4.mp4",
				fault_number: "",
				isVideo : true
			},
			{
				name: "电池更换后检查",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/5.mp4",
				fault_number: "",
				isVideo : true
			},
			{
				name: "动力电池拆装",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/6.mp4",
				fault_number: "",
				isVideo : true
			},
			{
				name: "放电仪使用",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/7.mp4",
				fault_number: "",
				isVideo : true
			},
			{
				name: "单体电池充放电测试仪使用",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/8.mp4",
				fault_number: "",
				isVideo : true
			}]
		}else if(type == 2){
			vm.courselist = [{
				name: "电动汽车快充使用方法",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/9.mp4",
				fault_number: "",
				isVideo : true
			},{
				name: "常用设备的使用方法",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/10.mp4",
				fault_number: "",
				isVideo : true
			},{
				name: "学习急救方法",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/11.mp4",
				fault_number: "",
				isVideo : true
			},{
				name: "高压电终止流程",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/12.mp4",
				fault_number: "",
				isVideo : true
			},{
				name: "电动汽车PDI检查",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/13.mp4",
				fault_number: "",
				isVideo : true
			},{
				name: "电动汽车保养流程",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/audio/14.mp4",
				fault_number: "",
				isVideo : true
			}]
		}
	}

	// 点击左边栏通过type进行接口调用，
	vm.showData = function(type){	
		vm.mainservice.currentPage = 1;	
		mainservice.type = type;
		// 云课堂要求写死
		if(type === 5){
			vm.lessiondata = [{
				id:'',
				name:'职业院校示范课'
			}];
			vm.courselist = [{
				name: "曲轴位置传感器",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/AA-AA-AA-AA/index.html",
				fault_number: ""
			},
			{
				name: "奔驰C180空调制冷不良",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/benz/index.html",
				fault_number: ""
			},
			{
				name: "车载充电机故障",
				course_number: "",
				entry: "http://content.xvehicledata.com/course/vehicular/index.html",
				fault_number: ""
			}];
			mainservice.total = 1;
			// vm.getcoursewarepage = function(){
			// 	vm.courselist = [{
			// 		name: "职业院校示范课",
			// 		course_number: "",
			// 		entry: "",
			// 		fault_number: ""
			// 	}];
			// };
		}else if(type == 6){
			vm.renderVideo(1);
			mainservice.total = 2;
		}
		else{
			clientService.getlessonlist({type:type,username:vm.mainservice.username,loginId:vm.mainservice.loginId,currentPage:1,pageSize:4})
			.then(function(data){
				if(data.errCode === '0'){
					vm.lessiondata = data.resultList; 
					$($('.listbox')[0]).find('p').css('backgroundColor','#01c8ff');
					$($('.listbox')[0]).siblings().find('p').css('backgroundColor','');
					if(data.resultList){
						if(data.resultList[0]){
							if(data.resultList[0].id || data.resultList[0].id==0){
								clientService.getlessoncourses({type:type,username:vm.mainservice.username,loginId:vm.mainservice.loginId,courseId:data.resultList[0].id,currentPage:1,pageSize:8})
								.then(function(data){
						 			errmesFn(data,useCourse);
								});
								vm.getcoursewarepage = function(index){
									vm.mainservice.currentPage = 1;
									mainservice.courseId = data.resultList[index].id;
									$($('.listbox')[index]).find('p').css('backgroundColor','#01c8ff');
									$($('.listbox')[index]).siblings().find('p').css('backgroundColor','');
									if(data.resultList){
										if(data.resultList[index]){
											if(data.resultList[index].id || data.resultList[index].id == 0){
												clientService.getlessoncourses({type:type,username:vm.mainservice.username,loginId:vm.mainservice.loginId,courseId:data.resultList[index].id,currentPage:1,pageSize:8})
												.then(function(data){
													errmesFn(data,useCourse);
												});
											}
										}
									}
								};
							}
						}
					}
				}else if(data.errCode ==='104'){
	 				resetlogin(data);
	 				vm.courselist = '';
	 			}else{
	 				resetcurrent(data);
	 				vm.courselist = '';
	 			}
			});	
		}
	};
 	// 退出窗口
	 vm.exit = function(){
	 	clientService.exit({username:mainservice.username,loginId:mainservice.loginId})
 		.then(function(data){
 			homeService.closeWindow();
 		});
	 };
	 // 修改密码
	 vm.changepassword = function(){
	 	mainservice.promp = true;
	 	vm.signupPassword = function(){
		 	 clientService.changepersonalPassword({username:mainservice.username,ackPassword:mainservice.password,newPassword:vm.form.newpassword,loginId:mainservice.loginId})
	 	 	.then(function(data){
	 			errmesFn(data,mainservice.promp = false);
	 	 	});
		};
	 };
	 //解析不同的top-nav
	 vm.clickpracticeClass = function(){
		 mainservice.in=true;
	 	vm.mainservice.currentPage = 1;
	 	$('.currentcourse').html('故障模拟诊断');
	 	clientService.getlessonlist({type:1,username:vm.mainservice.username,loginId:vm.mainservice.loginId,currentPage:1,pageSize:4})
		.then(function(data){
 			errmesFn(data,vm.lessiondata = data.resultList);
 			$($('.listbox')[0]).find('p').css('backgroundColor','#01c8ff');
			$($('.listbox')[0]).siblings().find('p').css('backgroundColor','');
			if(vm.lessiondata){
 				if(vm.lessiondata[0]){
 					if(vm.lessiondata[0].id){
	 					clientService.getlessoncourses({type:1,username:vm.mainservice.username,loginId:vm.mainservice.loginId,courseId:vm.lessiondata[0].id,currentPage:1,pageSize:8})
						.then(function(data){
							errmesFn(data,useCourse);
							mainservice.courseId = vm.lessiondata[0].id;
						});
	 				}
 				}
 			}
		});
	 };
	 //  通过声明一个方法进行已学和在学页面的渲染
	 function romance2view(data){
	 	if(data.errCode==='0'){
			//console.log(data)
	 		mainservice.total = data.totalsPage;
	 		if(data.resultList){
	 			for(var i=0;i<data.resultList.length;i++){
					data.resultList[i].data = new Date(data.resultList[i].modifyDate).getFullYear()+'-'+parseInt(new Date(data.resultList[i].modifyDate).getMonth()+1)+'-'+ new Date(data.resultList[i].modifyDate).getDate();//通过获取的数据进行形式变化实现设计的页面要求
					if(!data.resultList[i].picUrl){
						data.resultList[i].picUrl = mainservice.ip+data.defaultPicUrl;   //如果没有课程图片则使用默认图片
					}
					data.resultList[i].minutes = Math.floor(data.resultList[i].seconds/60);  //数据形式变化，秒变为分
				}
				vm.onstudydata = data.resultList;
				vm.getcodelearning = function(index){  //数据通过索引进行遍历，点击访问时将索引传参传进来，进而获取课件码等params参数
			 	 	var courseindex = data.resultList[index];
					clientService.getcode({courseNumber:courseindex.courseNumber,userEmail:mainservice.email,userCourseClassId:courseindex.currentCourseId})
					.then(function(data){
						if(data.errCode === '0'){ 
					 		homeService.openotherwindow(courseindex,data.code);
						}else{
							resetcurrent(data);
						}
					});
				};
				vm.processDetails = function(index){
					//console.log(data)
					var courseindex = data.resultList[index];
					//var courseindex = data.learningList[index];
					//alert(JSON.stringify(courseindex))
					//console.log(courseindex);
					mainservice.courseNumber=courseindex.courseNumber;
					mainservice.faultNumber=courseindex.faultNumber;
					storage.courseNumber = courseindex.courseNumber;
					storage.faultNumber = courseindex.faultNumber;
					$scope.processDetails();
				};
	 		}
	 	}
	 }
	 vm.clickmystudyClass = function(){
	 	$('.currentcourse').html('在学');
		$(".paginator").show();
	 	// 调用接口，进行在学页面的数据渲染
		clientService.onstudy({username:mainservice.username,loginId:mainservice.loginId,currentPage:1,pageSize:10})
		.then(function(data){
 			errmesFn(data,romance2view);
		});
	 };
	 vm.clickmergeCource = function(){
		 homeService.clickmergeCource();
	 }
	// 定义一个方法就行错误码的前台操作
	function errmesFn(data,relayFn){
		if(typeof relayFn ==='function'){
			if(data.errCode==='0'){
				//console.log(data)
				mainservice.total = data.totalsPage;
				relayFn(data);
			}else if(data.errCode ==='104'){
				resetlogin(data)
			}else{
				resetcurrent(data);
			}
		}else{
			if(data.errCode==='0'){
				return function(){
					relayFn;
				};
			}else if(data.errCode ==='104'){
				resetlogin(data)
			}else{
				resetcurrent(data);
			}
		}
	 }
	vm.alreadystudy = function(){   // 调用接口，进行已学页面的数据渲染
		$state.go('home.studylearning');
		$('.currentcourse').html('学完');
		clientService.alreadystudy({username:mainservice.username,loginId:mainservice.loginId,currentPage:1,pageSize:8})
		.then(function(data){
			errmesFn(data,romance2view);
		});
 	};
 	vm.onstudy = function(){  		// 调用接口，进行在学页面的数据渲染
		setTimeout(function(){$(".paginator").show();},100);
 		clientService.onstudy({username:mainservice.username,loginId:mainservice.loginId,currentPage:1,pageSize:8})
		.then(function(data){
 			errmesFn(data,romance2view);
		});
 	};
	vm.clickhelp = function(){
	 	vm.mainservice.helpdata = mainservice.help;
	 	$('.currentcourse').html('使用帮助');
	};
	 // 培训课程页面里进行具体课程的访问
	vm.studySubmit = function(courseNumber,entry,faultNumber,sbtflag,isVideo){
		if(!courseNumber && !faultNumber){
			homeService.studySubmit(courseNumber,entry,faultNumber,sbtflag,isVideo);
		}else{
			clientService.getcode({courseNumber:courseNumber,userEmail:mainservice.email,userCourseClassId:0})
			.then(function(data){
				if(data.errCode === '0'){
					homeService.studySubmit(courseNumber,entry,faultNumber,sbtflag,isVideo,data.code);
				}else{
					resetcurrent(data);
				}
			});
		}
	}; 
	vm.closeVideo = function(){
		vm.mainservice.videoStatus = false;
		vm.mainservice.videoSrc = '';
	}
	// 通过声明一个方法，进行数据的获取，渲染到页面
 	function useCourse(data){
 		if(data.listSbt){
 			vm.courselist = data.listSbt;
 			for(var i = 0;i<vm.courselist.length;i++){
 				vm.courselist[i].isPopup = true;
 			}
 		}else if(data.listCourse){
 			vm.courselist = data.listCourse;
 		}
 		for(var i=0;i < vm.courselist.length;i++){
			if(vm.courselist[i].duration){
				mainservice.clockshow = true;
			}else{
				mainservice.clockshow = false;
			}
		}
 	}
 	// 声明一个方法通过next，prev进行数据获取
 	function paginatorgcourses(){
 		var href = window.location.href;
 		if(href.indexOf('studylearning')>-1){
 			clientService.onstudy({username:mainservice.username,loginId:mainservice.loginId,currentPage:vm.mainservice.currentPage,pageSize:8})
			.then(function(data){
	 			errmesFn(data,romance2view);
			});
 		}else if(href.indexOf('studylearned')>-1){
 			clientService.alreadystudy({username:mainservice.username,loginId:mainservice.loginId,currentPage:vm.mainservice.currentPage,pageSize:8})
			.then(function(data){
				errmesFn(data,romance2view);
			});
 		}else if(mainservice.type == 6){
			vm.renderVideo(vm.mainservice.currentPage);
		 }else{
 			if(mainservice.type!=5 && mainservice.type!=6){
	 			clientService.getlessoncourses({type:mainservice.type,username:mainservice.username,loginId:mainservice.loginId,courseId:mainservice.courseId,currentPage:vm.mainservice.currentPage,pageSize:8})
				.then(function(data){
					if(data.errCode==='0'){
						if(mainservice.type === 1){
							vm.courselist = data.listSbt;
						}else{
							vm.courselist = data.listCourse;
						}
					}else if(data.errCode ==='104'){
		 				resetlogin(data);
		 			}else{
		 				resetcurrent(data);
		 			}
				});
	 		}
 		}
 	}
 	// 返回错误码时停留在当前页的方法
 	function resetlogin(data){
 		mainservice.erropen = true;
 		vm.errMessage = data.errMsg;
 		mainservice.resetTologinStatus = true;
 		vm.onstudydata = '';
 		vm.lessiondata = '';
 		vm.courselist = '';
 	}
 	// 返回错误码时跳转到登陆页的方法
 	function resetcurrent(data){
 		mainservice.erropen = true;
 		vm.errMessage = data.errMsg;
 		vm.onstudydata = '';
 		vm.lessiondata = '';
 		vm.courselist = '';
 	}
 	// 下一页获取分页数据
	vm.getnext = function(){
		vm.mainservice.currentPage ++;
		if(mainservice.total>=mainservice.currentPage){
			paginatorgcourses();
		}else{
			if(mainservice.total == 0){
				mainservice.currentPage = 1;
			}else{
				mainservice.currentPage = mainservice.total;
			}
			return false;
		}
 	};
 	// 上一页获取分页数据
 	vm.getprev = function(){
 		if(mainservice.currentPage>1){
 			mainservice.currentPage--;
 			if(mainservice.total>=mainservice.currentPage){
				paginatorgcourses();
			}
 		}else{
 			mainservice.currentPage = 1;
			return false;
 		}
 	};
 	// 进行已知页码的分页数据获取
 	vm.getknown = function(index){
 		if(mainservice.total>=index){
 			paginatorgcourses();
 		}else{
 			return false;
 		}
 	};
 	// 帮助说明分别进行帮助和问题的数据获取
 	vm.help = function(){
 		vm.mainservice.helpdata = mainservice.help;
 	};
 	vm.question = function(){
 		vm.mainservice.helpdata = mainservice.question;
 	};
 	//监听弹窗状态,
 	$scope.$watch('vm.mainservice.promp',function(){
 		if(vm.mainservice.promp){
 			$('.promp').css('display','block');
 		}else{
 			$('.promp').css('display','none');	
 		}
 	});


	/**
	 *
	 * ***/
	$scope.processDetails = function(){
		$(".paginator").hide();
		clientService.getStepsList({username:mainservice.username,courseNumber:mainservice.courseNumber,faultNumber:mainservice.faultNumber,userEmail:mainservice.email,loginId:mainservice.loginId})
			.then(function(data){
				//console.log(data)
				if(data.errCode==0){
					mainservice.sumscore=0;
					$scope.baseTotalStudyInfo = data.totalStudyInfo;
					$scope.username=data.totalStudyInfo.name;
					$scope.topScore=data.totalStudyInfo.topScore;
					$scope.formName=data.sbtTestScore.name;
					$scope.actionList = data.action;
					mainservice.seconds=data.studyTime;
					//console.log(data);
					var map = new Object();
					map.put = function (key,value){
						var s = "map." + key + ' = "' + value + '";';
						eval(s);
					}
					map.get = function(key){
						var v = eval("map." + key + ";");
						return v;
					}
					map.keySet = function(){
						var keySets = new Array();
						for(key in map){
							if(!(typeof(map[key])=="function")){
								keySets.push(key);
							}
						}
						return keySets;
					}

					if(Boolean(data.sbtTestScore)) {
						mainservice.sbtTestScore = JSON.parse(data.sbtTestScore.text);
						//console.log(mainservice.sbtTestScore.question)
						$scope.sbtScore = mainservice.sbtTestScore;
						//$scope.sumscore=0;
						if(Boolean(mainservice.sbtTestScore)) {
							for(var i=0;i<mainservice.sbtTestScore.score.length;i++){
								mainservice.sumscore += (mainservice.sbtTestScore.score)[i].rate*1<0?0:(mainservice.sbtTestScore.score)[i].rate*1;
								if(Boolean((mainservice.sbtTestScore.score)[i].questionId)){
									map.put("score"+(mainservice.sbtTestScore.score)[i].questionId,(mainservice.sbtTestScore.score)[i].rate);
								}
								if(Boolean((mainservice.sbtTestScore.score)[i].handleId)){
									map.put("score"+(mainservice.sbtTestScore.score)[i].handleId,(mainservice.sbtTestScore.score)[i].rate);
									//互斥动作得分临时存放,如果是互斥项的备选项 应得分数为0 ,所有后面判断是就赋值为 0
									map.put("scoreTemp"+(mainservice.sbtTestScore.score)[i].handleId,(mainservice.sbtTestScore.score)[i].rate);
									map.put("scoreIdHandle"+(mainservice.sbtTestScore.score)[i].id,(mainservice.sbtTestScore.score)[i].handleId);
								}
								//scoreId和分数对应。
								map.put("scoreId"+(mainservice.sbtTestScore.score)[i].id,(mainservice.sbtTestScore.score)[i].rate);
							}

							//-----减掉互斥的得分项start------
							for(var i=0;i<mainservice.sbtTestScore.exclusive.length;i++){
								var priorityId = (mainservice.sbtTestScore.exclusive)[i].priorityId;
								var id = (mainservice.sbtTestScore.exclusive)[i].id;
								var ids = id.split(",");
								for(var j=0;j<ids.length;j++){
									if(priorityId != ids[j]){
										mainservice.sumscore -= map.get("scoreId"+ids[j]);
										map.put("scoreTemp"+(map.get("scoreIdHandle"+ids[j])),0);
									}
								}
							}
							//-----减掉互斥的得分项end----
						}

						//所有动作
						if(Boolean($scope.actionList)){
							for(var i=0;i<$scope.actionList.length;i++){
								map.put("action"+$scope.actionList[i].actionId,$scope.actionList[i].description);
							}
						}
						//得分动作
						if(Boolean($scope.baseTotalStudyInfo)){
							var scoreArray = JSON.parse($scope.baseTotalStudyInfo.characterA).score;
							if(Boolean(scoreArray)){
								setTimeout(function(){
									var arrObj = new Array();
									$scope.headleScoreSum = 0;
									$scope.formScoreSum = 0;
									for(var i=0;i<scoreArray.length;i++){
										//如果问题的id不为空者为题，否则为动作
										if(Boolean(scoreArray[i].questionID)){
											if(scoreArray[i].isRight==1){
												$("#score"+scoreArray[i].questionID).html((map.get("score"+scoreArray[i].questionID)/mainservice.sumscore*100).toExponential(1)*1);
												$scope.formScoreSum += (map.get("score"+scoreArray[i].questionID)/mainservice.sumscore*100).toExponential(1)*1;
											}
											//把选项勾上
											var option = scoreArray[i].optionArray;
											for(var j=0;j<option.length;j++){
												$("#"+option[j].id).addClass("selected");
												var optionSon = option[j].optionArray;
												for(var k=0;k<optionSon.length;k++){
													$("#"+optionSon[k].id).addClass("selected");
												}
											}
										}else{
											if(Boolean(scoreArray[i].handleArray)){
												for(var j=0;j<scoreArray[i].handleArray.length;j++){
													var handleArr ={};
													handleArr.name=map.get("action"+scoreArray[i].handleArray[j].id);
													handleArr.score=Boolean(map.get("score"+scoreArray[i].handleArray[j].id))?(map.get("score"+scoreArray[i].handleArray[j].id)/mainservice.sumscore*100).toExponential(1)*1:0;
													//应得分数
													handleArr.scoreTemp=Boolean(map.get("scoreTemp"+scoreArray[i].handleArray[j].id))?(map.get("scoreTemp"+scoreArray[i].handleArray[j].id)/mainservice.sumscore*100).toExponential(1)*1:0;
													handleArr.isRight=scoreArray[i].isRight;
													arrObj.push(handleArr);
												}
											}
										}
									}
									pageData(arrObj);
									$scope.$apply();
									//表格样式
									/*$(".table_single_four tr td:last").css("border","none");
									 $(".table_single_four tr:last td").css("border","none");*/
								},500)

							}
						}
					}
				}
				else{
					errMessage(data);
				}
			});

	};

	var currentPage= 1,mr= 0,coutPage=10;
	function pageData(arrObj){
		var strhtml="";
		//console.log("--------------------------------------------------");
		//console.log(arrObj)
		for(var i=0;i<arrObj.length;i++){
			strhtml +='<li>';
			if(Boolean(arrObj[i].name)){
				strhtml +='<p>'+arrObj[i].name+'</p>';
			}else{
				strhtml +='<p></p>';
			}
			strhtml +='<b style="margin-right: 66px;width:35px;">'+(((arrObj[i].scoreTemp)*1).toExponential(1)*1)+'分</b>';

			//所得得分
			if(arrObj[i].isRight != 1){
				strhtml +='<b style="width:200px;">0分</b>';
			}else{
				//console.log("-----"+(((arrObj[i].score)*1).toExponential(1)*1));
				strhtml +='<b style="width:200px;">'+(((arrObj[i].score)*1).toExponential(1)*1)+'分</b>';
				$scope.headleScoreSum += ((arrObj[i].score)*1).toExponential(1)*1;//工单中动作得分累计
			}
			strhtml +='</li>';

		}
		$scope.setPaging();
		$("#handleScore").html(strhtml);
		$scope.setPageCss();
	}

	$scope.setPageCss=function(){
		$(".paging span").removeAttr("style");
		$("#page"+currentPage).css({"border":"1px solid #fff","fontWeight":"bold"});
	}

	var start=5,all,cur,pageSize=10;

	$scope.setPaging=function(){
		var html="";
		html+="<label>总共"+mainservice.totalsPage+"页</label>"
		if(currentPage > mainservice.totalsPage){
			currentPage=mainservice.totalsPage;
		}else{
			if(mainservice.totalsPage <= 10){
				for (var i = 1; i <= mainservice.totalsPage; i++) {
					html+="<span id='page"+parseInt(i)+"' ng-click='goPage("+i+")'>"+i+"</span>"
				}
			}else{
				if(currentPage!=1){
					html+="<span  ng-click='goPage("+parseInt(currentPage-1)+")'>上一页</span>";
				}
				if(currentPage - start > 0){//开始重新计算显示的页数
					if(currentPage - start + 9 < mainservice.totalsPage){
						for (var  ii = currentPage - start; ii <= currentPage - start + 9; ii++) {
							html+="<span id='page"+parseInt(ii)+"' ng-click='goPage("+ii+")'>"+ii+"</span>"
						}
					}else{
						for (var iii = mainservice.totalsPage - 9; iii <= mainservice.totalsPage; iii++) {
							html+="<span id='page"+parseInt(iii)+"' ng-click='goPage("+iii+")'>"+iii+"</span>"
						}
					}
				}else{//不用重新显示的页数
					for (var iiii = 1; iiii <= pageSize; iiii++) {
						html+="<span id='page"+parseInt(iiii)+"' ng-click='goPage("+iiii+")'>"+iiii+"</span>"
					}
				}

				if(currentPage!=mainservice.totalsPage) {
					html += "<span ng-click='goPage(" + parseInt(currentPage + 1) + ")'>下一页</span>";
				}
			}
		}
		$("#pageNum").html($compile(html)($scope));
	}

	$scope.goPage=function(page){
		if(currentPage > mainservice.totalsPage){
			currentPage=mainservice.totalsPage;
		}else{
			currentPage=page;
		}
		$scope.getStepsDetailList();
		//$scope.processDetails();
	}

	$scope.getStepsDetailList=function(){
		currentPage=currentPage==0 ? 1:currentPage;
		clientService.geProgressList({username:mainservice.username,courseNumber:mainservice.courseNumber,faultNumber:mainservice.faultNumber,currentPage:currentPage,pageSize:mainservice.pageSize,userEmail:mainservice.email,Key:mainservice.key,loginId:mainservice.loginId})
			.then(function(data){
				if(data.errCode==0){
					mainservice.key=data.Key;
					mainservice.totalCount=data.resultList.totalsCount;
					mainservice.totalsPage=data.resultList.totalsPage;
					mainservice.result=data.resultList.result;
					pageData(mainservice.result);
				}else{
					errMessage(data);
				}
			});

	}

	function errMessage(data){
		var message="";
		switch (data.errCode){
			case "106" :
				message="账号错误";
				break;
			case "103" :
				message="参数错误";
				break;
			case "104" :
				message="请重新登录";
				break;
		}
		mainservice.erropen=true;
		vm.errMessage=message;

	}

	$scope.getSearchData=function(){
		currentPage=1;
		mainservice.key=$("[name='search']").val()=='' ||$("[name='search']").val()=='搜索'?  '' : $("[name='search']").val();
		$scope.getStepsDetailList();
	};


	$scope.clickmystudyClass = function(){
		// 调用接口，进行在学页面的数据渲染
		$state.go('home.studylearning')
		$("#menunavbox a").removeClass('active');
		$("#studynav").addClass('active');
		clientService.onstudy({username:mainservice.username,loginId:mainservice.loginId})
			.then(function(data){
				errmesFn(data,romance2view);
			});
	};


	/**
	 * 页面刷新需要访问的接口
	 *
	 */
	(function(){
		$("#menunavbox a").removeClass('active');
		var pathUlr=$location.path();
		if(pathUlr=='/home/home.studylearning'){
			mainservice.in= false;
			vm.clickmystudyClass();
			$(".practiceClassActive").removeClass('blue');
			$(".mystudyClass ").addClass('blue');
			setTimeout(function(){
				$(".paginator").show();
			},10);
		}
		else if(pathUlr=='/home/home.studylearned'){
			$(".practiceClassActive").removeClass('blue');
			$(".mystudyClass ").addClass('blue');
			vm.alreadystudy();
		}
		else if(pathUlr=='/home'){
			$("#classnav").addClass('active');
			// $scope.clickpracticeClass();
		}
		else if(pathUlr=='/home/home.learningRecord'){
			$('.currentcourse').html('在学');
			$(".practiceClassActive").removeClass('blue');
			$(".mystudyClass ").addClass('blue');
			$scope.processDetails();

		}



	})();






}]);