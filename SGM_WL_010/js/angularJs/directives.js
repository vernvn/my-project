mainModule.directive("builddivstart",function(){
	return {
		restrict:'ECMA',
		template:'<div class="main_mask"><div class="main_mask_alert"><p class="main_mask_tips">是否从您上次退出位置继续学习？</p><div class="main_mask_button"><button class="main_mask_keepUp" ng-click="ToLastPage();">继续学习</button><button class="main_mask_leave" ng-click="ToFirstPage();">从头开始</button></div></div></div>',
		replace:true
	}
})
mainModule.directive("builddivend",function(){
	return {
		restrict:'ECMA',
		template:'<div class="main_mask"><div class="main_mask_alert"><p class="main_mask_styTime">是否继续学习</p><div class="main_mask_button"><button class="main_mask_keepUp" ng-click="StayPage();">继续学习</button><button class="main_mask_leave" ng-click="LeavePage();">离开此页</button></div></div></div>',
		replace:true
	}
})
// template:'<div class="main_mask"><div class="main_mask_alert"><p class="main_mask_styTime">您此次学习使用的时间为<b>123</b>分钟</p><p class="main_mask_styAnswer">此次学习您答对<b ng-bind="nCorrectRate"></b>%的题</p><div class="main_mask_button"><button class="main_mask_keepUp" ng-click="StayPage();">继续学习</button><button class="main_mask_leave" ng-click="LeavePage();">离开此页</button></div></div></div>',

mainModule.directive("onFinishRenderFilters",function($timeout){
	return{
		restrict:'A',
		link:function(scope,element,attr){
			if(scope.$last===true){
				$timeout(function(){
					scope.$emit('ngRepeatFinished');
				})
			}
		}
	}
})

modelChoice.directive('svgPage', function() {
	var directive = {};
	directive.restrict = 'EA';
	directive.replace = true;
	directive.templateUrl = "images/svg/wbt_svg.html";
	directive.link=function(scope, element, attrs){
		scope.$watch('pageId',function(newValue,oldValue){
			//alert("aaa")
			// if(scope.$root.pageId=='030'){
			// 	directive.templateUrl = "images/svg/wbt_svg2.html";
			// }else if(scope.$root.pageId=='031'){
			// 	directive.templateUrl = "images/svg/wbt_svg3.html";
			// } else if(scope.$root.pageId=='032'){
			// 	directive.templateUrl = "images/svg/wbt_svg4.html";
			// } else if(scope.$root.pageId=='033'){
			// 	directive.templateUrl = "images/svg/wbt_svg5.html";
			// } else if(scope.$root.pageId=='034'){
			// 	directive.templateUrl = "images/svg/wbt_svg6.html";
			// }
		});

	};
	return directive;
});
