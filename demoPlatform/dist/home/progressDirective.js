/**
 * 定义一个指令，进度的跟进
 */

home.directive('progressIndent',function(){
	return{
		restrict: 'EA',
		replace: true,
		scope: {},   //设置为独立作用域
		link : function(scope,element,attrs){
			scope.$watch(function(){              //进行监听，如果百分值变化，则对应的talkpromp会跟随变化
				return element[0].value;
			},function(newVal){
				if(newVal || newVal == 0){   // 如果百分比变化，则根据当前数值改变对应的谈话框位置
					if(newVal>83){
						$('.talkpromp').css('left','140px');
					}else if(newVal<6){
						$('.talkpromp').css('left','0px');
					}else{
						$('.talkpromp').css('left',newVal*1.8-10+'px');
					}
				}
			},true);
		}
	};
});



