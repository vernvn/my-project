/**
 * 定义一个指令，针对不同的内容，解析不同的top-nav
 */

home.directive('compileNav',['$http','$compile',function($http,$compile){
	return{
		restrict: 'EA',
		replace: true,
		//controller: 'homeController',    //给定依赖的homeController，使link函数的第四个参数出现
		link : function(scope,element,attrs,ctrl){
			// scope.$watch(function(){		//进行监听
			// 	 return ctrl.mainservice.NavSrc;  
			// },function(newVal){
			// 	if(newVal){                 //若有mainservice的NavSrc变化，则通过$http进行加载，
			// 		$http.get(newVal).then(function(response){
			// 			$('.main-menu').html($compile(response.data)(scope));   //将响应回来的模板数据解析并插入到指定的$('.main-menu')
			// 		});
			// 	}
			// });
			element.bind('click',function(){
				$('.main').css('height','auto'); //高度自适应
				if(element[0].innerHTML === '帮助说明' || element[0].innerHTML === '修改密码'){
					$('.paginator').css('display','none');
					$('.prev').css('display','none');
					$('.next').css('display','none');
				}else{
					$('.paginator').css('display','block');
					$('.prev').css('display','block');
					$('.next').css('display','block');
				}
				if($('.paginator').css('display')==='block'){
					$('.first').css({'backgroundColor':'#f3f3f3','color':'#000'}).siblings().css({
						'backgroundColor':'#000','color':'#fff'
					});
				}
			});
			//  mouseover时改变对应样式
			element.bind('mouseover',function(){
				if(attrs.class === 'practiceClassActive blue'){
					$('#menubellbox').css('display','block');
					$('.practiceClassActive').css('backgroundColor','#09aced');
				}else if(attrs.class === 'mystudyClass'){
					$('#menubellboxmystudy').css('display','block');
					$('.mystudyClass').css('backgroundColor','#09aced');
				}else if(attrs.class === 'help'){
					$('#menubellboxhelp').css('display','block');
					$('.help').css('backgroundColor','#09aced');
				}
			});
			// 父级滑出时才会是下拉的菜单消失
			$('.mystudyClassbox').bind('mouseleave',function(){
				$('#menubellboxmystudy').css('display','none');
				$('.mystudyClass').css('backgroundColor','');
			});
			$('.practiceClassActivebox').bind('mouseleave',function(){
				$('#menubellbox').css('display','none');
				$('.practiceClassActive').css('backgroundColor','');
			});
			$('.helpbox').bind('mouseleave',function(){
				$('#menubellboxhelp').css('display','none');
				$('.help').css('backgroundColor','');
			});
			// 对应添加blue样式
			element.bind('click',function(){
				element.addClass('blue').parent().siblings().children().removeClass('blue');
			});
		}
	};
}]);



