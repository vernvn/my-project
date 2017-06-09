/**
 * [定义登陆模块，注入接口模块]
 * @type {[type]}
 */
var login = angular.module('login',['clientModule']);
login.controller('loginController',['$scope','$state','mainservice','clientService',function($scope,$state,mainservice,clientService){
	 var vm = this;
	 vm.removeerrMes = function(){
	 	vm.loginStatus = false;
	 }
	 vm.submit = function(){   		//提交的时候调用通信服务的登陆接口
	 	clientService.checkuser({username:vm.form.username,password:vm.form.password}) 		//请求参数分别为用户名与密码
	 	.then(function(data){
	 		if(data.errCode === '0'){   
	 			vm.loginStatus = false;    //如果登陆成功则前台验证通过ng-show隐藏
	 			mainservice.username = vm.form.username;  //将相关的数据存储进mainservice
	 			mainservice.password = vm.form.password;
	 			mainservice.loginId =  data.loginId;
	 			mainservice.email = data.email;
	 			mainservice.name = data.name;  
	 			mainservice.href = window.location.href;  //将登陆页面存储进mainservice,当调用退出接口时返回登陆页面
	 			var storage = window.localStorage;   //将登陆成功后返回来的数据存储localStorage
	 			storage.username = vm.form.username;
	 			storage.email = data.email;
	 			storage.password = vm.form.password;
	 			storage.loginId = data.loginId;
	 			storage.name = data.name;
	 			$state.go('home');
	 		}else{
	 			vm.errMes = data.errMsg
	 			vm.loginStatus = true;   //如果登陆失败则前台验证通过ng-show显示
	 		}
	 	});
	 };
}]);



