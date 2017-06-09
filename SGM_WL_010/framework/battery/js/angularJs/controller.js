/**
 * @createDate   2015-08-4 下午05:28:38
 * @author       hao liqiang
 * @email        lq.hao@xiaochejiang.com
 * @version      1.0
 */
//万用表的控制器
var mutimeter = new Mutimeter({
    "id": "battery-contain",
    "top": 150,
    "left": 400,
    "project": "relay",
    "componentNum": "6501",
    "voltageValue": "5",
    "airValue": "0",
    "otherLineStatus": true,
    "allGear": ["v"]
});
mutimeter.receiveMlCallback(pages31Fun);


    function pages31Fun(){
        if(mutimeter.otherBlackPosition&&mutimeter.otherRedPosition&&mutimeter.otherLineBlackRightPosition&&mutimeter.otherLineBlackLeftPosition){
            NextDarkOrLignt(1);
            $('#cc-djs6-dcf').removeClass('cc-djs6-dcf-away');
        } else {
            $('#cc-djs6-dcf').addClass('cc-djs6-dcf-away');
        }
        return this;
    }
batteryModule.controller('batteryCtrl', ['$scope', '$state', '$rootScope', 'batteryService', '$interval', function($scope, $state, $rootScope, batteryService, $interval) {
    $scope.batteryServiceMdata = batteryService.Mdata; //万用表service中的基本参数存到controller的$scope中供页面调用
    $scope.greeting = batteryService.Mout; //万用表service中的从仿真模型接收到的参数存到controller的$scope中供页面调用
    batteryService.Mdata.batteryStatus = false;

    mutimeter.otherBlackPosition=null;
    mutimeter.otherRedPosition=null;
    mutimeter.otherLineBlackRightPosition=null;
    mutimeter.otherLineBlackLeftPosition=null;
    mutimeter.otherLine=null;
    $scope.battery = function() {

    if(pages31 === 1){
        batteryService.Mdata.batteryStatus = true; //万用表身显示
        //红表笔drag，通过一个小块热区带动红表笔
        // console.log(mutimeter.otherLine);
        if (!mutimeter.otherLine) {

            mutimeter.init();
            mutimeter.setPowerSwitch("1");
            mutimeter.setConnectStatus("1");
        }
    }
 }
}]);
