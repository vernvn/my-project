/**
 * 定义一个指令进行dom操作，改变dom的样式与兄弟节点的样式
 */

home.directive('changeClass',['$http','$compile',function($http,$compile){
	return {
		restrict : 'EA',
		replace: true,
		//controller: 'homeController',    //给定依赖的homeController，使link函数的第四个参数出现
		link : function(scope,ele,attrs,ctrl){   //绑定click事件，培训课程页面点击相应目录后更改样式
			ele.bind('click',function(){
				if(attrs.class !=='listbox' && attrs.class !=='navlist'){
					$(ele).css('background','#0784b4').siblings().css('background','#09aced');	
				}
				$('.currentcourse').html(ele[0].innerText);  //提示文字框插入不同解释文字
				if($('.paginator').css('display')==='block'){
					$('.first').css({'backgroundColor':'#f3f3f3','color':'#000'}).siblings().css({
						'backgroundColor':'#000','color':'#fff'
					});
				}
			});
			ele.bind('click',function(){
				if(ele[0].innerHTML==='在学' || ele[0].innerHTML==='学完'){
					$('.mystudyClass ').addClass('blue').parent().siblings().children().removeClass('blue');
				}else if(ele[0].innerHTML==='故障模拟诊断' || ele[0].innerHTML==='情景模拟诊断' ||
					ele[0].innerHTML==='原理互动教学' || ele[0].innerHTML==='互动拆装实训' || ele[0].innerHTML==='云课堂'){
					$('.practiceClassActive ').addClass('blue').parent().siblings().children().removeClass('blue');
				}else if(ele[0].innerHTML==='使用帮助' || ele[0].innerHTML==='常见问题'){
					$('.help').addClass('blue').parent().siblings().children().removeClass('blue');
				}
			});
		}
	};
}]);