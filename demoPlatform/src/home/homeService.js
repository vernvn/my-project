/**
 * 定义一个服务，依托于homeController
 */

home.service('homeService',['$sce','clientService','mainservice', function($sce,clientService,mainservice){
	//定义的常量,打开某一课件需要传入的字段
	var apiUrl = mainservice.ip;
	var urlport = mainservice.ip;
	var domainAccount = "demo2q";
	var userCourseClassId = 0;
	mainservice.totalsPage=1;
	mainservice.totalsPage=1;
	mainservice.seconds=0;
	mainservice.pageSize=10;
	mainservice.result=[];
	mainservice.key= "";
	mainservice.sbtTestScore={};

	
	this.closeWindow = function(){    //关闭窗口方法
       var userAgent = navigator.userAgent;
       if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
          window.location.href= mainservice.href;  //读取mainservice里面的href属性，返回登陆页面
       } else {
          window.opener = null;
          window.open("", "_self");
          window.close();
       }
     };
    // 在学或已学进行点击，打开另一页面
    this.openotherwindow = function(courseindex,code){  //courseindex为通过索引遍历出来的自身对象
    	var email = mainservice.email;
		var courseNumber = courseindex.courseNumber;
		var faultNumber = courseindex.faultNumber;
		var entry = courseindex.entry;
		var url = "&userEmail=" + email + "&courseNumber="+ courseNumber + "&code=" +code;
 		if(faultNumber !== '' && faultNumber !== undefined && faultNumber !== null){
			url += "&faultNumber="+ faultNumber+'#/scene';
		}
		var flag = courseNumber.substr(0,4);
		if(flag === 'SBT_'){
			window.open(apiUrl+"/course/"+ entry +"?domainUrl="+ urlport    //指定的具体课件的url地址
			+"&domainAccount=contentadmin&isPopup=true&userCourseClassId=0"+ url);
		}else{
			window.open(apiUrl+"/course/"+ entry +"?domainUrl="+ urlport    //指定的具体课件的url地址
			+"&domainAccount=contentadmin&userCourseClassId=0"+ url);
		}
    }
    // 定义培训课程页面里进行具体课程的访问      
    this.studySubmit = function(courseNumber,entry,faultNumber,sbtflag,isVideo,code){
    	if(!courseNumber && !faultNumber && !isVideo){     //云课堂为写死的url地址，判断如果没有具名参数，则打开云课堂
    		window.open(entry);
    	}else if(!courseNumber && !faultNumber && isVideo){  //视频在当前窗口打开
			mainservice.videoSrc = $sce.trustAsResourceUrl(entry);
			mainservice.videoStatus = true;
		}else{											// 否则将打开对应的课件
    		var email = mainservice.email;
			var url = "&userEmail=" + email + "&courseNumber="+ courseNumber + "&code=" +code;
	 		if(faultNumber !== '' && faultNumber !== undefined && faultNumber !== null){
				url += "&faultNumber="+faultNumber+'#/engine';
			}
			if(sbtflag){
				window.open(apiUrl+"course/"+ entry +"?domainUrl="+ urlport
	 				+ "&domainAccount=contentadmin&isPopup=true&userCourseClassId=0"+ url);
			}else{
				window.open(apiUrl+"course/"+ entry +"?domainUrl="+ urlport
	 				+ "&domainAccount=contentadmin&userCourseClassId=0"+ url);
			}
    	}
    }
	//新增新能源平台
	this.clickmergeCource = function(){
		window.open('http://content.xvehicledata.com/course/newEnergySourceV2/index.html');
	}
}])