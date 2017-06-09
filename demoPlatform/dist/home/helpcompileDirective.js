/**
 * 定义一个指令，针对不同的帮助文档内容，解析不同的模板
 */

home.directive('compileHelpnav',['$http','$compile',function($http,$compile){
	return{
		restrict: 'EA',
		replace: true,
		//controller: 'homeController',    //给定依赖的homeController，使link函数的第四个参数出现
		link : function(scope,element,attrs,ctrl){
			element.bind('click',function(){
				var  str = element[0].innerHTML;
				var  templateHelp = '';
				var font = str.replace(/[^\u4e00-\u9fa5]/gi,""); //过滤出中文
				switch(font){
					case "下载浏览器和插件": templateHelp = 'home/help/template/downloadplugin.html';
					break;
					case "安装浏览器和插件": templateHelp = 'home/help/template/installplugin.html';
					break;
					case "确认插件是否安装成功": templateHelp = 'home/help/template/ensuresuccess.html';
					break;
					case "高版本谷歌浏览器插件兼容": templateHelp = 'home/help/template/googlecompatible.html';
					break;
					case "更新培训插件": templateHelp = 'home/help/template/updatapractice.html';
					break;
					case "软件使用问题": templateHelp = 'home/help/template/solfwareuse.html';
					break;
				}
				$http.get(templateHelp).then(function(response){
					$('.navContent').html($compile(response.data)(scope));   //将响应回来的模板数据解析并插入到指定的$('.main-menu');
					var heightnum = $('.content').css('height').replace('px','');
					$('.main').css('height',(Number(heightnum)+160)+'px');
				});
			});
			element.bind('mouseover',function(){
				element.css('zIndex',10);
			});
			$('.navContent').bind('mouseover',function(){
				$('.navlist').css('zIndex',10);
			})
			element.bind('mouseleave',function(){
				element.css('zIndex',3);
			});
		}
	};
}]);



