/**
 * @createDate   2015-08-4 下午05:28:38
 * @author       hao liqiang
 * @email        lq.hao@xiaochejiang.com
 * @version      1.0
 */

var batteryModule=angular.module("batteryModule",[]);
//注射器加载完所有模块时，此方法执行一次
batteryModule.run(function ($templateCache) {
    $templateCache.put("batteryTemplate", "framework/battery/template/battery.html");
});


batteryModule.directive("battery", function ($templateCache) {
    return {
        restrict: 'E', //指令的使用方式，包括标签，属性，类，注释AECM
        templateUrl: $templateCache.get("batteryTemplate"),
        replace: false //是否用模板替换当前元素，若为false，则append在当前元素上
    }

})

