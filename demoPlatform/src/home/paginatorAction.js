/**
 * 分页的逻辑指令
 */
home.directive('paginatorAction',['mainservice','clientService',function(mainservice,clientService){
	return {
		replace: true,
		restrict: 'EA',
		//controller:'homeController',
		link: function(scope,element,attrs,ctrl){
			scope.$watch(function(){      //进行总页码的数据监听
				return mainservice.total; 
			},function(newVal){
				if(newVal<= 7 && newVal>=1){
				   //如果总页码大于最大限制页码7并且大于1页则进行分页判断
					if(element[0].innerHTML<= newVal){    //如果当前页码页小于等于最大页，则该当前页出现，否则隐藏
						element.css('display','block');
					}else{
						element.css('display','none');
					}
					$('.next').css('left',newVal*23+(newVal+1)*10+'px'); //下一页紧邻最后页
					$('.next').css('display','block');
					$('.prev').css('display','block');
				}
				else if(!newVal ||  newVal== 0){
					$('.next').css('display','none');
					$('.prev').css('display','none');
					element.css('display','none');
				}
				else{
					element.css('display','block');
					$('.next').css('display','block');
					$('.prev').css('display','block');
					$('.next').css('left',newVal*23+(newVal+1)*10+'px');
				}
			},true);
			//  监听第一个页码的color,pointer与default切换
			scope.$watch(function(){
				return $('.first').css('color');
			},function(newVal){
				if(newVal == 'rgb(0, 0, 0)'){
					$('.prev').css('cursor','default');
				}else{
					$('.prev').css('cursor','pointer');
				}
			});
			//  监听第总页码的数页码的color,pointer与default切换
			scope.$watch(function(){
				return $($('.paginator').find('li')[mainservice.total-1]).css('color');
			},function(newVal){
				if(newVal == 'rgb(0, 0, 0)'){
					$('.next').css('cursor','default');
				}else{
					$('.next').css('cursor','pointer');
				}
			});
			element.bind('click',function(){                   //点击事件改变相应的样式
				if(mainservice.total>=element[0].innerHTML){
					mainservice.currentPage = element[0].innerHTML;
					element.css({'backgroundColor':'#f3f3f3','color':'#000'}).siblings().css({
						'backgroundColor':'#000','color':'#fff'
					});
				}else{
					return false;
				}
			});
		}
	}
}]);