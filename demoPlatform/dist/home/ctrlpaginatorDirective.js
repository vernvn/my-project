
/**
 * [定义控制分页下一页与上一页的指令,进行按钮的限制]
 * 
 */
home.directive('ctrlPaginator',['mainservice',function(mainservice){
	return {
		restrict: 'EA',
		replace : true,
		link:function(scope,element,attrs){
			element.bind('click',function(){
				$($('.prev').parent().find('li')[mainservice.currentPage-1]).css({'backgroundColor':'#f3f3f3','color':'#000'}).siblings().css({
					'backgroundColor':'#000','color':'#fff'
				});
				var shownum = 7;  //最大分页限制为7页
				// 监听前一页的点击事件，通过innerHTML请求具体页码
				if(attrs.class=='prev'){
					if($('.paginator').find('li')[0].innerHTML.indexOf(1)==-1){
						for(var i=0;i<$('.paginator').find('li').length;i++){
							$('.paginator').find('li')[i].innerHTML = Number($('.paginator').find('li')[i].innerHTML)-1;
						}
					}
				}else{
					var clicknum = mainservice.total - shownum;  //总页码大于页码最大限制，则进行累加
					if(clicknum>0){
						if(mainservice.currentPage<=mainservice.total && $('.paginator').find('li')[0].innerHTML.indexOf(clicknum+1)==-1){
							if(mainservice.currentPage>shownum){
								for(var i=0;i<$('.paginator').find('li').length;i++){
									$('.paginator').find('li')[i].innerHTML = Number($('.paginator').find('li')[i].innerHTML)+1;
								}
							}
						}
					}	
				}
			});
		}
	};
}]);