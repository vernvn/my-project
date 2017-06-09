//周玉杰（zyj）图片预加载（img preload）2015-06-24


//要加载的图片文件url数组（从后台获取图片url，再组成这个数组）
var aImgurl =["images/commIcon/007_bg.png","images/commIcon/007_select1.png","images/commIcon/007_select2.png","images/commIcon/007_select3.png","images/commIcon/007_select4.png","images/commIcon/007_select5.png","images/commIcon/all_icon.png","images/commIcon/amp.png","images/commIcon/clickbtn1.png","images/commIcon/guanbi.png","images/commIcon/logo.jpg","images/commIcon/nar.png","images/commIcon/tishianniu.png","images/commIcon/tn_bg.png","images/commIcon/touming.png","images/commIcon/xyt_bg.png","images/commIcon/zz_1.png","images/dj_21.png","images/svg/9-10.png","images/svg/27-31.png","images/svg/1940-1931.png","images/svg/1940-1931-28-29-30-31.png","images/svg/1940-1931-212.png"]
//预加载函数
function ImagePreload(arr){
	var newImages=[];
	var loadImages=0;
	//确保该参数是数组
	var arr = (typeof arr != "object") ? [arr] : arr;
	//图片加载完一张时执行的函数
	function ImageLoaded(){
		loadImages++;
		// alert("加载了"+loadImages+"张");
//		$(".color").css("width",(loadImages/arr.length)*100+"%")
		if(loadImages==arr.length){
			return;
//			alert("图片全部加载完成");
		}
	}
	//用for来加载每一张图片
	for(var i=0;i<arr.length;i++){
		newImages[i]=new Image();
		newImages[i].src=arr[i];
		//如果已经存在于缓存中则不用再走onload或onerror了
		if(newImages[i].complete){
			ImageLoaded();
			continue;
		}else{
			//当图片加载正确时
			newImages[i].onload=function(){
				ImageLoaded();
			}
			//当图片加载失败时
			newImages[i].onerror=function(){
//				alert("加载失败")
				ImageLoaded();
			}
		}				
	}
}
