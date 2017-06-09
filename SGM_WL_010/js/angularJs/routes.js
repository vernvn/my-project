//zyj 2015-06-17
mainModule.config(function($stateProvider,$urlRouterProvider,$httpProvider){
	//默认框架页面
	if (!$httpProvider.defaults.headers.get) {
		$httpProvider.defaults.headers.get = {};
	}
	// Enables Request.IsAjaxRequest() in ASP.NET MVC
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
	// Disable IE ajax request caching
	$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
	$httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
	$urlRouterProvider.otherwise("/modelWorkOrder");
	$stateProvider.state("workOrderModel",{
		url:"/modelWorkOrder",
		views: {
			'':{
				templateUrl:"template/modelWorkOrder_yrr.html"
			},
			'selectBox@workOrderModel':{
				templateUrl: 'template/selectBox.html'
			}
		}
	}).state("choiceModel",{
		url:"/modelChoice",
		templateUrl:"template/modelChoice_yrr.html"
	}).state("choiceModelChoose",{
		url:"/modelChoiceChoose",
		templateUrl:"template/modelChoiceChoose.html"
	}).state("horiChoiceModel",{
		url:"/modelHoriChoice",
		templateUrl:"template/modelHoriChoice_ds.html"
	}).state("vertChoiceModel",{
		url:"/modelVertChoice",
		templateUrl:"template/modelVertChoice_ds.html"
	}).state("modelMultiple",{
			url:"/modelMultiple",
			templateUrl:"template/modelMultipleChoice.html"
	}).state("modelBgImg",{
		url:"/modelBgImg",
		templateUrl:"template/modelBgImg.html"
	}).state("005",{
		url:"/005",
		templateUrl:"template/005.html"
	}).state("008",{
		url:"/008",
		templateUrl:"template/008.html"
	}).state("010",{
		url:"/010",
		views: {
			'':{
				templateUrl: 'template/010.html'
			},
			'zdyPage@010': {
				templateUrl: 'template/zdy/index.html'
			},
			'ignition@010':{
				templateUrl: 'template/005.html'
			}
		}
	}).state("028",{
		url:"/028",
		templateUrl:"template/028.html"
	}).state("029",{
		url:"/029",
		templateUrl:"template/029.html"
	}).state("033",{
		url:"/033",
		views: {
			'':{
				templateUrl: 'template/033.html'
			},
			'ignition@033':{
				templateUrl: 'template/005.html'
			}
		}
	}).state("036",{
		url:"/036",
		templateUrl:"template/036.html"
	}).state("038",{
		url:"/038",
		templateUrl:"template/038.html"
	}).state("043",{
		url:"/043",
		templateUrl:"template/043.html"
	}).state("045",{
		url:"/045",
		views: {
			'':{
				templateUrl:"template/045.html"
			},
			'ignition@045':{
				templateUrl: 'template/005.html'
			}
		}
	}).state("047",{
		url:"/047",
		views: {
			'':{
				templateUrl:"template/047.html"
			},
			'zdyPage@047': {
				templateUrl: 'template/zdy/index.html'
			},
			'ignition@047':{
				templateUrl: 'template/005.html'
			}
		}
	});
});


