/**
 * 定义一个指令进行dom操作，划过人物头像时触发弹窗的出现与消失
 */

home.directive('personNav',function(){
	return {
		restrict : 'EA',
		replace: true,
		link : function(scope,ele,attrs){   //绑定mouseover和mouseleave事件
			ele.bind('mouseover',function(){
				$('.personalbox').css('display','block');
				$(ele).css('backgroundColor','#09aced');
			});
			$('.top-portraitDrop').bind('mouseleave',function(){
				$('.personalbox').css('display','none');
				$(ele).css('backgroundColor','');
			})
		}
	};
});