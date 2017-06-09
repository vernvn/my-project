
/**
 * 定义一个串联整个应用的service,存储数据
 */
var storage = window.localStorage;   //将登陆成功后返回来的数据存储起来
home.service('mainservice',function(){
	this.in = true;
	this.promp = false;   //初始状态修改密码弹窗是关闭
	this.resetTologinStatus = false;  
	this.erropen = false; //初始错误返回码的弹窗是不出现的
	this.NavSrc = '';     
	this.username = '';
	this.password = '';
	this.loginId = '';	
	this.email = '';
	this.name = '';
	this.clockshow = '';
	this.type = 1;        //初始状态进入页面的type为1
	this.courseId = 1; 	  //初始状态进入页面的课件Id为1
	this.courselist = '';
	this.ip = '';
	this.total = '';
	this.href = '';
	this.videoStatus = false;  //视频弹出窗口初始化关闭
	this.videoSrc = '';   //视频路径
	this.help = [{'name':'下载浏览器和插件'},{'name':'安装浏览器和插件'}];
	this.question = [{'name':'确认插件是否安装成功'},{'name':'高版本谷歌浏览器插件兼容'},{'name':'更新培训插件'},{'name':'软件使用问题'}];
	var storage = window.localStorage;   //进行localStorage数据的读取 
	if(storage.username){
		this.username = storage.username;
		this.email = storage.email;
		this.password = storage.password;
		this.loginId = storage.loginId;
		this.name = storage.name;
	}
	this.courseNumber=storage.courseNumber;
	this.faultNumber=storage.faultNumber;
});