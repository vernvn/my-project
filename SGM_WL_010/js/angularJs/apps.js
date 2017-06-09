/*周玉杰 (zyj) 2015-6-16*/
var mainModule=angular.module("mainModule",['ui.router','modelChoice','mytool','myMalfunction','xcj.Service', 'xcj.validate','multimeterModule','xcjDataService', 'batteryModule']);
//,'xcj.Service', 'xcj.validate'
/**
 * Created by Administrator on 2015/6/12.
 * @作者：叶蓉蓉
 */
var modelChoice=angular.module('modelChoice',['ui.router','modelChoice.service','xcj.Service','xcjDataService']);
//,'xcj.Service'


/**
 * Created by Administrator on 2015/6/12.
 * @作者：杜珊
 */

var mytool=angular.module('mytool', ['ui.router','modelChoice.service']);
var myMalfunction=angular.module('myMalfunction',['modelChoice.service']);