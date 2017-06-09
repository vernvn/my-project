/**
 * 定义一个指令进行dom操作，top-menu样式的变化
 */

home.directive('topMenu',function(){
	return {
		restrict : 'EA',
		replace: true,
		link : function(scope,ele,attrs){
			ele.bind('click',function(){     // 将培训课程与我的学习添加绑定事件，点击时active,兄弟元素default
					ele.addClass('blue').siblings().children().removeClass('blue');
					if(attrs.class==='download'){
						ele.addClass('blue').siblings().children().removeClass('blue');
						$('.icon_download').css('background','url(./images/download.png)');
					}else{
						ele.addClass('blue').parent().siblings().children().removeClass('blue');
						ele.addClass('blue').parent().siblings().removeClass('blue');
						$('.icon_download').css('background','url(./images/download_deep.png)')
					}
					if(ele[0].className === 'download blue'){
						$('.main-menu').children().hide();
					}else{
						$('.main-menu').children().show();
					}
			});
			ele.bind('mouseover',function(){
				$('#menubellbox').css('zIndex',5);
				$('.navlist').css('zIndex',1);
			});
			ele.bind('mouseleave',function(){
				if($('#menubellbox').css('display')==='block'){
					$('.navlist').css('zIndex',1);
					$('#menubellbox').css('zIndex',5);
				}else if($('#menubellbox').css('display')==='none'){
					$('#menubellbox').css('zIndex',1);
					$('.navlist').css('zIndex',3);
				}
			});
		}
	};
});