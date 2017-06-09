/**
 * 定义一个指令进行弹窗的操作，
 */

home.directive('prompErr',['homeService','mainservice',function(homeService,mainservice){
	return {
		restrict : 'EA',
		replace: true,
		scope:{
			errMessage:'@'   //绑定策略，访问外部作用域变量
		},
		//controller:'homeController',   //依托于homeController
		template:'<div class="errmes"  style="width:500px;height:350px;position:absolute;left:365px;top:150px;background:#fff;">\
				<div style="width:500px;height:50px;background:#ddd;font-size:17px;text-align:center;line-height:50px;color:#000;">提示\
				</div>\
				<span style="font-size:18px;text-align:center;display:block;margin-top:70px;">{{errMessage}}</span>\
				<div style="background:#999;width:500px;height:1px;position:absolute;top:272px;"></div>\
				<button style="font-size:15px;width:150px;height:40px;background:#666;color:#fff;line-height:40px;position:absolute;left:172px;top:290px;" ng-click="resetTologin()">确定</button>\
		</div>',
		link : function(scope,ele,attrs){
			scope.resetTologin = function(){       
				if(mainservice.resetTologinStatus){   //如果错误码为104，则返回到登陆页
					homeService.closeWindow();
				}else{
					mainservice.erropen = false; //如果错误码为106或其他，则弹框消失，停留在当前页
				}
			};
		}
	};
}]);