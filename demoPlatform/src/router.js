/**
 * 定义路由，注入第三方模块uiRouter
 */

var app = angular.module('routerModule', ['ui.router']);
 
app.config(function ($stateProvider, $urlRouterProvider) {
     $stateProvider
        .state("login", {
            url:"/login",
            templateUrl: "template/login.html",
            controller: 'loginController',
            controllerAs : 'vm'
        })
        .state('home',{
        	url:'/home',
        	templateUrl :'template/home.html',
        	controller: 'homeController',
            controllerAs : 'vm'
        })
        .state('home.help',{
            url:'/home.help',
            controller: 'homeController',
            templateUrl :'home/help/index.html'
        })
        .state('home.studylearning',{
            url:'/home.studylearning',
            templateUrl:'template/study_learning.html'
        })
         .state('home.learningRecord',{
             url:'/home.learningRecord',
             templateUrl:'template/learningRecord.html'
         })
        .state('home.studylearned',{
            url:'/home.studylearned',
            templateUrl:'template/study_learned.html'
        })
        .state('home.changepassword',{
            url:'/home.changepassword',
            templateUrl:'template/changepassword.html',
            controller: 'homeController'
        })

        $urlRouterProvider.otherwise("/login");
});