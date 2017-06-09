/**
 * 引入$resource模块,进行接口的管理
 */
angular.module('clientModule',['home','ngResource'])  //注入home模块与resource模块
.factory('resourceService',['$resource','mainservice',function($resource,mainservice){
	var communicateIp = 'http://10.0.1.22:8050/';     //定义ip，并存储在mainservice里面
	mainservice.ip = communicateIp;
	return {
		resourcehandle : function(params){            //进行$resource的自定义扩展
			return  $resource(communicateIp + 'api/pre/demo/:id',{id:'@id'},{  //返回八个接口的$resource方法
				getlessonlist:{method:'GET',params:params,isArray:false},      //获取课程列表
				getlessoncourses:{method:'GET',params:params,isArray:false},   //获取全部课件
				exit:{method:'GET',params:params,isArray:false},               //退出接口
				changepersonalPassword:{method:'GET',params:params,isArray:false}, //修改密码
				onstudy:{method:'GET',params:params,isArray:false},            // 在学分页
				alreadystudy:{method:'GET',params:params,isArray:false},       // 已学分页
				getcode:{method:'GET',params:params,isArray:false},            //在学与已学获取具体课件
				checkuser:{method:'GET',params:params,isArray:false},
				studyaction:{method:'GET',params:params,isArray:false},
				studyresult:{method:'GET',params:params,isArray:false}
			});
		}
	};
}])
.factory('clientService',['$q','resourceService',function($q,resourceService){ //注入$q与上面自定义的resource服务
	function handleRequest(id,params){  		//定义一个接口管理的方法
		var deferred = $q.defer();              //实例defer对象
		var User = resourceService.resourcehandle(params);  //将请求参数params通过自定义$resource服务传入
		switch(id){                                         // 判断url中的id字段，调用$resource自定义服务对应的方法
			case 'login':User.checkuser({id:id},function(data){deferred.resolve(data)},function(data){deferred.reject(data)});break;
			case 'getStudyCode':User.getcode({id:id},function(data){deferred.resolve(data)},function(data){deferred.reject(data)});break;
			case 'studyLearnedPage':User.alreadystudy({id:id},function(data){deferred.resolve(data)},function(data){deferred.reject(data)});break;
			case 'studyLearningPage':User.onstudy({id:id},function(data){deferred.resolve(data)},function(data){deferred.reject(data)});break;
			case 'updatePassword':User.changepersonalPassword({id:id},function(data){deferred.resolve(data)},function(data){deferred.reject(data)});break;
			case 'loginout':User.exit({id:id},function(data){deferred.resolve(data)},function(data){deferred.reject(data)});break;
			case 'courseWarePage':User.getlessoncourses({id:id},function(data){deferred.resolve(data)},function(data){deferred.reject(data)});break;
			case 'coursePage':User.getlessonlist({id:id},function(data){deferred.resolve(data)},function(data){deferred.reject(data)});break;
			case 'studyaction':User.studyaction({id:id},function(data){deferred.resolve(data)},function(data){deferred.reject(data)});break;
			case 'studyresult':User.studyresult({id:id},function(data){deferred.resolve(data)},function(data){deferred.reject(data)});break;
		}
		return deferred.promise;         		//返回defer实例的promise
	};
	return {//返回一个调用八个接口的方法的对象
		getStepsList:function(params){
			return handleRequest('studyresult',params);
		},
		geProgressList:function(params){
			return handleRequest('studyaction',params);
		},
	    getlessonlist: function(params){
	      return handleRequest('coursePage',params); //params为接口需求的请求参数列表，是一个对象
	    },
	    getlessoncourses: function(params){
	    	return handleRequest('courseWarePage',params);
	    },
	    exit: function(params){
	      return handleRequest('loginout',params);
	    },
	    changepersonalPassword: function(params){
	      return handleRequest('updatePassword',params);
	    },
	    onstudy: function(params){
	      return handleRequest('studyLearningPage',params);
	    },
	    alreadystudy:function(params){
	      return handleRequest('studyLearnedPage',params);
	    },
	    getcode:function(params){
	      return handleRequest('getStudyCode',params);
	    },
	    checkuser: function(params){
	    	return handleRequest('login',params);
	    }
  	};
}]);
