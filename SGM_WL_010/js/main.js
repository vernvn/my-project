/*周玉杰 (zyj) 2015-6-12 start*/
//数字转换成页面id（001,002之类的）
function ToPageId(num) {
    num = num.toString();
    var pageId = "";
    if (num < 10) {
        pageId = "00" + num;
    } else if (num >= 10) {
        pageId = "0" + num;
    }
    return pageId;
}
//点击换页
function GoNext() {
    NaviBlock();
}

function Question() {
    var list = {},
        answers = {
            '057': 'option_057_02',
            '058': 'option_058_03',
            '059': 'option_059_01',
            '060': 'option_060_01',
            '061': 'option_061_03',
        },
        score = 0;
    rightNum = 0;
    this.setAnswers = function(questionId, optionId) {
        // console.info(questionId, optionId, typeof questionId, typeof optionId);
        if (typeof questionId === "undefined") {
            return;
        }
        list[questionId] = optionId;
    };

    this.getAnsers = function() {
        return list;
    };

    this.cacluteScore = function() {
        score = 0, rightNum = 0;
        for (var item in list) {
            if (list[item] === answers[item]) {
                score += 20;
                rightNum++;
            }
        }

        return {
            score: score,
            accuracy: (rightNum / 5).toPrecision(2) * 100
        };
    };
};

var myQuestion = new Question();
function recordHistory(obj, totalNum, studyOverStay) {
    var progress = parseInt((obj-1) * (100 / totalNum));
    $
        .xcj
        .scorm
        .api
        .setProgress(progress);
    if(obj > totalNum){
        obj = totalNum;
    }
    $.xcj.scorm.api.setSuspendData(obj + ','+ studyOverStay);
    $
        .xcj
        .scorm
        .api
        .doCommit();
    // console.log('progress---:' + progress);
    // console.log('current page---:' + obj);
    // console.log('studyOverStay---:' + studyOverStay);
}
//学习完毕最后的一步提交
function progressOver(){
    $
        .xcj
        .scorm
        .api
        .setProgress(100);
    $
        .xcj
        .scorm
        .api
        .setComplete('completed');
    // console.log('progress---:' + 100);
    // console.log('study completed!');
    $
        .xcj
        .scorm
        .api
        .doCommit();
}

//加上导航块的样式
function NaviBlock() {
    $(".main_head_navi ul li div").removeClass("naviBlock");
    //	alert(111)
    $(".main_head_navi ul li div:last").addClass("naviBlock");
}
//隐藏导航条方法
function HideNavi() {
    $(".main_head_navi ul").css('display', 'none');
}
//出现导航条方法
function ShowNavi() {
    $(".main_head_navi ul").css('display', 'block');
}
//解放所有导航块样式
function LiberNavi() {
    $(".main_head_navi ul li div")
    $(".main_head_navi ul").css('display', 'block');
    $(".main_head_navi ul li div").attr("data-name", "1").addClass("curpot");
}
//解放倒退按钮
function LiberBack() {
    $("#pre_arrow").removeClass("main_head_arrow_pre_dark").addClass("main_head_arrow_pre_light").removeAttr("disabled");
    $("#pre_arrow")[0].removeAttribute("disabled");
}
//显示下一页的置灰按钮和显示下一页可点击的按钮
function NextDarkOrLignt(val) {

    if (val == 1) {
        //1时高亮
        // console.log("gaolia");
        $("#next_dark").addClass("main_head_arrow_next_dark_hide");
        $("#next_light").removeClass("main_head_arrow_super_next_hide");
    } else {
        //不是1时置灰
        $("#next_dark").removeClass("main_head_arrow_next_dark_hide");
        $("#next_light").addClass("main_head_arrow_super_next_hide");
    }
}

//关闭浏览器窗口，兼容多个浏览器下的关闭方法
function CloseWindow() {
    //关闭父类窗口(兼容多个浏览器的关闭)
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
        top.window.opener = top;
        top.window.open('', '_self', '');
        top.window.close();
    } else {
        window.opener = null;
        window.open("", "_self");
        window.close();
    }
}
//左侧导航栏===================================================================
//左侧导航栏收缩伸展切换状态
function sideNaviToggle(obj) {
    if ($(obj).attr("name") == 0) {
        $(obj).css("background", "url(images/commIcon/navi_btn_bg_in.png) no-repeat");
        $(".sideBar_navi").animate({
            left: '0px'
        }, 200);
        $(obj).attr("name", "1");
    } else {
        $(obj).css("background", "url(images/commIcon/navi_btn_bg_out.png) no-repeat");
        $(".sideBar_navi").animate({
            left: '-127px'
        }, 200);
        $(obj).attr("name", "0");
    }
}
//导航块切换状态
function NaviActive(obj) {
    //清除其他按钮触发状态
    obj.siblings().removeClass('active');
    //加上触发状态
    obj.addClass('active');
}
//右侧工具栏=====================================================================
//右侧工具栏收缩伸展切换状态
function sideToolToggle(obj) {
    if ($(obj).attr("name") == 0) {
        $(obj).css("background", "url(images/commIcon/tool_btn_bg_in.png)");
        $(".sideBar_tool").animate({
            right: '0px'
        }, 200);
        $(obj).attr("name", "1");
    } else {
        $(obj).css("background", "url(images/commIcon/tool_btn_bg_out.png)");
        $(".sideBar_tool").animate({
            right: '-137px'
        }, 200);
        $(obj).attr("name", "0");
    }
}
//裴露婕----2170109
//底部控制中心==================================================================
// 底部控制中心收缩伸展切换状态
// $('.center-control').hide();
function bottomLockToggle(val) {
    if (val === 1) {
        $(".center-control").animate({
            bottom: '0'
        }, 200);
    } else {
        $(".center-control").animate({
            bottom: '-116px'
        }, 200);
    }
}
bottomLockToggle(0);
// function openSwitchPanel() {
//     $(".controll-center-box").show();
//     $(".door-switch").parent().addClass("active");
// }
// function closeSwitchPanel(){
//     $(".controll-center-box").hide();
//     $(".door-switch").parent().removeClass("active");
//     bottomLockToggle('.center-control-button');
// }
//-------------控制中心切换
var pen = {};
// function bottomLockBox(val) {
//     if (val == 1) {
//         $(".center-control-button").attr("name", "0");
//     } else {
//         $(".center-control-button").attr("name", "1");
//     }
//     bottomLockToggle(".center-control-button");
// }
var pages5, pages45, pages32, pages30, pages35, pages39,pages40,pages46,pages25,pages25Step,pages46Step,pages47;
function treadFootboard(obj){
    var gasSignal = $('.accelerator').attr('name');
    if(gasSignal== 1 && pageNum==='045'){
        $('.infoText').html('请松开油门')
        return;
    }else{
        $('.infoText').html('');
    }
    if ($(obj).attr("name") == 0) {
        $(".footboard").animate({
            top: '80px'
        }, 200);
        $(obj).attr("name", "1");
        // console.log(carStarted)
        if(carStarted && isInDpanel){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 6,8000/130);
            pointerRotateAnother($('.steering_meter_pointer'), rotateSpeed2, 30, 8000/73);
        }else if(carStarted && isInRpanel){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 6,3000/20);  
            pointerRotateAnother($('.steering_meter_pointer'), rotateSpeed2, 30, 3000/66);
        }else if(carStarted && isInNpanel){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 6,2000/126);
            pointerRotateAnother($('.steering_meter_pointer'), rotateSpeed2, 30, 2000/126);
        }
    } else {
        $(".footboard").animate({
            top: '15px'
        }, 200);
        $(obj).attr("name", "0");
        if(carStarted && isInDpanel && pageNum==='045'){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 19,100);
        }else if(carStarted && isInRpanel && pageNum==='045'){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 13,100);  
        }else if(carStarted && isInNpanel && pageNum==='045'){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 6,100);
        }
        if((isInDpanel || isInRpanel) && carStarted){
            NextDarkOrLignt(1)
        }
        //速度上升
    }
    if(typeof(pages30) === 'number'){
       multimeterScreen();
    }
}
function footboardBox(val) {
    if (val == 1) {
        $(".footboard").attr("name", "0");
    } else {
        $(".footboard").attr("name", "1");
    }
    treadFootboard(".footboard");
}
function treadAccelerator(obj){
    var brakeSignal = $('.footboard').attr('name');
    if(brakeSignal == 1 && pageNum==='045'){
        $('.infoText').html('请松开刹车');
        return;
    }else{
        $('.infoText').html('');
    }
    if ($(obj).attr("name") == 0 ) {
        $(".accelerator").animate({
            top: '45px'
        }, 200);
        $(obj).attr("name", "1");
        if(carStarted && isInDpanel){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 149,8000/130);
            pointerRotateAnother($('.steering_meter_pointer'), rotateSpeed2, 103,8000/73);
        }else if(carStarted && isInRpanel){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 32,3000/20);  
            pointerRotateAnother($('.steering_meter_pointer'), rotateSpeed2, 96, 3000/66);
        }else if(carStarted && isInNpanel){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 6,2000/126);
            pointerRotateAnother($('.steering_meter_pointer'), rotateSpeed2, 156, 2000/126);
        }
        if($('#speaker').attr('name')==='1'){
            $("#audiobig")[0].load();
            $("#audiobig")[0].play();
        }   
    } 
    else if($(obj).attr("name") == 1){
        $(".accelerator").animate({
            top: '15px'
        }, 200);
        $(obj).attr("name", "0");
        if(carStarted && isInDpanel){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 19,8000/130);
            pointerRotateAnother($('.steering_meter_pointer'), rotateSpeed2, 30, 8000/73);
        }else if(carStarted && isInRpanel){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 13,3000/20);
            pointerRotateAnother($('.steering_meter_pointer'), rotateSpeed2, 30, 3000/66);
        }else if(carStarted && isInNpanel){
            pointerRotate($('.speeding_meter_pointer'), rotateSpeed, 6,2000/126);
            pointerRotateAnother($('.steering_meter_pointer'), rotateSpeed2, 30, 2000/126);
        }
        $("#audiobig")[0].pause();
    }
}
//----------------------------------------------------------------------------end

//工具块切换状态
function toolActive(obj) {
    if (obj.find("button").attr("name") == 0) {
        //加上触发状态
        obj.addClass('active');
        obj.find("button").attr("name", "1")
    } else {
        //去掉触发状态
        obj.removeClass('active');
        obj.find("button").attr("name", "0")
    }

}
//侧边栏相关方法----------------------------------------------
//导航列表切换
function slideNavList(val) {
    if (val == 1) {
        $("#navlist_toggle").attr("name", "0");
    } else {
        $("#navlist_toggle").attr("name", "1");
    }
    sideNaviToggle("#navlist_toggle");
}
//工具箱切换
function slideToolBox(val) {
    if (val == 1) {
        $("#tool_toggle").attr("name", "0");
    } else {
        $("#tool_toggle").attr("name", "1");
    }
    sideToolToggle("#tool_toggle");
}
//按钮与面板切换
function slideShowOrHide(val) {
    if (val == 1) {
        $(".main_sidebar_show").css('display', 'none');
        $(".main_sidebar_inter").css('display', 'block');
    } else {
        $(".main_sidebar_inter").css('display', 'none');
        $(".main_sidebar_show").css('display', 'block');
    }
}
//管理系统闪烁定时器参数
var timesManage;
//系统管理可点击
function manageIsFlicker(val) {
    if (val == 1) {
        $(".sideBar_navi_panel li:eq(0) button").addClass("main_manage_flicke").attr("disabled", false);
        $(".sideBar_navi_panel li:eq(0) button").disabled = false; //兼容性处理
        timesManage = setInterval(function() { $(".sideBar_navi_panel li:eq(0)").fadeTo(300, 0.4).fadeTo(300, 1); }, 600);
    } else {
        clearInterval(timesManage);
        $(".sideBar_navi_panel li:eq(0) button").removeClass("main_manage_flicke").attr("disabled", true);
        $(".sideBar_navi_panel li:eq(0) button").disabled = true;
    }
}
//工具按钮高亮
function toolIsFlicker(val) {
    if (val == 1) {
        $(".main_tool").addClass("main_tool_flicker").attr("disabled", false);
    } else {
        $(".main_tool").removeClass("main_tool_flicker").attr("disabled", true);
    }
}
//维修资料闪烁定时器参数
var timesService;
//维修资料高亮
function serviceDataIsFlicker(val) {
    if (val == 1) {
        $(".sideBar_navi_panel li:eq(1) button").addClass("main_manage_flicker").attr("disabled", false);
        $(".sideBar_navi_panel li:eq(1) button").disabled = false;
        timesService = setInterval(function() { $(".sideBar_navi_panel li:eq(1) button").fadeTo(300, 0.4).fadeTo(300, 1); }, 600);
    } else {
        $(".sideBar_navi_panel li:eq(1) button").removeClass("main_manage_flicker").attr("disabled", true);
        $(".sideBar_navi_panel li:eq(1) button").disabled = true;
        clearInterval(timesService);
    }
}
//统一的置灰聚合方法
function slideHideAndDark() {
    toolIsFlicker(0);
    manageIsFlicker(0);
    serviceDataIsFlicker(0);
    slideShowOrHide(0);
}
//同一的声音变量
//关闭喇叭
function CloseSpearker() {
    var audioSpeaker = document.getElementsByTagName("audio")[0];
    var audioSpeaker1 = document.getElementsByTagName("audio")[1];
    var audioSpeaker2 = document.getElementsByTagName("audio")[2];
    var audioSpeaker3 = document.getElementsByTagName("audio")[3];
    var audioSpeaker4 = document.getElementsByTagName("audio")[4];
    var audioSpeaker5 = document.getElementsByTagName("audio")[5];
    if (typeof(audioSpeaker) == "undefined") {
        return;
    }
    if (typeof(audioSpeaker1) != "undefined") {
        try {
            audioSpeaker1.pause();
        } catch (err) {
            // console.log(err.message);
        }
    }
    if (typeof(audioSpeaker2) != "undefined") {
        try {
            audioSpeaker2.pause();
        } catch (err) {
            // console.log(err.message);
        }
    }
    if (typeof(audioSpeaker3) != "undefined") {
        try {
            audioSpeaker3.pause();
        } catch (err) {
            // console.log(err.message);
        }
    }
    if (typeof(audioSpeaker4) != "undefined") {
        try {
            audioSpeaker4.pause();
        } catch (err) {
            // console.log(err.message);
        }
    }
    if (typeof(audioSpeaker5) != "undefined") {
        try {
            audioSpeaker5.pause();
        } catch (err) {
            // console.log(err.message);
        }
    }
    try {
        audioSpeaker.pause();
    } catch (err) {
        // console.log(err.message);
    }
    // audioSpeaker.pause();
    // if(audioSpeaker4){
    //     audioSpeaker4.pause();
    // }
    //audioSpeaker[0].autoplay=false;
}
//打开喇叭
function OpenSpearker() {
    $("#speaker").attr("name", "1");
    var audioSpeaker = document.getElementsByTagName("audio");
    if (typeof(audioSpeaker) == "undefined") {
        return;
    }
    if (audioSpeaker[0]) {
        audioSpeaker[0].autoplay = false;
        try {
            audioSpeaker[0].pause();
        } catch (err) {
            // console.log(err.message);
        }

         try {
                audioSpeaker[0].load();
            } catch (err) {
                // console.log(err.message);
            }
        audioSpeaker[0].play();
    }
}
var globalSound = 1;
var carStarted = false;
var stallTimer;
function carOn(){
    $('.meter-bright-center').text('');
    stallTimer = setTimeout(function(){
        if(pages5 === 1 && $('#speaker').attr('name') === '1'){
            if((pages5 === 1 || pages45 === 1)){
                $("#audios")[0].pause();
                $("#audioo")[0].load();
                $("#audioo")[0].play();
                carStarted = true;
            }
        }
        if(pageNum==='045'){
            $('.acceleratorbox').hide();
        }
    }, 5000);
    if(pages5 === 1){
        carStarted = true;
    }
}
var pageNum;
//关闭和打开声音方法
function OpenOrCloseSpearker() {
    if ($("#speaker").attr("name") == 1) {
        //按钮样式改变
        $("#speaker").addClass("main_head_speaker_dark");
        $("#speaker").removeClass("main_head_speaker_light");
        //暂停声音
        CloseSpearker();
        //判别码
        $("#speaker").attr("name", "0");
        globalSound = 0;
    } else {
        //按钮样式改变
        $("#speaker").addClass("main_head_speaker_light");
        $("#speaker").removeClass("main_head_speaker_dark");
        //播放声音
        OpenSpearker();
        //判别码
        $("#speaker").attr("name", "1");
        globalSound = 1;
        if(stallOnceStatus && !stallStatus && (pageNum === '005' || pageNum === '025' || pageNum === '043'|| pageNum === '045')){
            $("#audioo")[0].play();
        }
        if(pageNum === '045' && $('.accelerator').attr('name')==='1'){
            $("#audiobig")[0].play();
        }
    }
}
//判断声音是否关闭
function IsSpearker() {
    var audioSpeaker = document.getElementsByTagName("audio")[0];
    if (typeof(audioSpeaker) == "undefined") {
        return;
    }
    //alert($("#speaker").attr("name"));
    if ($("#speaker").attr("name") == 1) {
        OpenSpearker();
        audioSpeaker.autoplay = true;
    } else {
        CloseSpearker();
        audioSpeaker.autoplay = false;
    }
}
//制空项目，在选择上一页和下一页的时候
function emptyPro() {
    //下一页按钮置灰
    if ($(".main_head_navi ul li div").attr("data-name") != '1') {
        NextDarkOrLignt(0);
    }
    //下一页的左右侧边都收起
    slideNavList(0);
    slideToolBox(0);
    // bottomLockBox(0);
    //维修资料变成非选中状态
    serviceDataIsFlicker(0);
    //管理系统变成非选中状态
    manageIsFlicker(0);
    //万用表在其他的页面不出现，此步骤造成的性能问题待解决
    $("#wyb").trigger("click");
    //播放第二个声音
    if (globalSound == 1) {
        IsSpearker();
    }
}




/*叶蓉蓉======================================================================================= */
//var flag=1;
//第43页面
var findSomething = 0;

function OnLoad() {
    $("#box").css('display', 'block');
    document.documentElement.style.webkitTouchCallout = "none"; //禁止弹出菜单
    document.documentElement.style.webkitUserSelect = "none"; //禁止选中
}
var messagetimer = null;  var listbordertimer = null;
function messagelink(){
    clearInterval(messagetimer);
    messagetimer = setInterval(function(){
        $.each($('#popBtn'), function(index, item){
            $(item).fadeTo(500,1,function(){
                 $(item).addClass('popBtn2').removeClass('popBtn');
            }).fadeTo(500,1,function(){
                $(item).addClass('popBtn').removeClass('popBtn2')
            });   
        })
    },1000); 
}
function listLink(){
    clearInterval(listbordertimer);
    listbordertimer = setInterval(function(){
        $('#listBorder').fadeTo(500,1,function(){
                $(this).addClass('listBorder2').removeClass('listBorder1');
        }).fadeTo(500,1,function(){
            $(this).addClass('listBorder1').removeClass('listBorder2');
        });
    },1000); 
}

var switchStallsTimer = null;
var switchStallsStatus = true;
function switchStallsLink(){
    clearInterval(switchStallsTimer);
    switchStallsTimer = setInterval(function(){
        $('#switch_stalls').fadeTo(500,1,function(){
            $(this).addClass('ignition_switch_link');
        }).fadeTo(500,1,function(){
            $(this).removeClass('ignition_switch_link');
        });
    },1000); 
}
var messsageStatus = false;
//按钮打开关闭div
function toggleDiv() {
    $("#box").toggle(500);
    if ($("#box1")) {
        $("#box1").toggle(500);
    }
    messsageStatus = true;
    if(messsageStatus){
        clearInterval(messagetimer)
    }else{
        messagelink();
    }
    //阻止冒泡
    if (event.stopPropagation) {
        event.stopPropagation();
    } else if (window.event) {
        window.event.cancelBubble = true;
    }
}
//打开诊断仪
function openDiagnostic() {
    if (typeof openDiagnosticEleven != 'undefined') {
        if (openDiagnosticEleven == 0) {
            tobiao();
        }
    } else {
        return;
    }
}
//打开万用表
var MultimeterisShow = false;
function openMultimeter() {
    if(pageNum==='033' || pageNum==='036' || pageNum==='038'){
        $('.multimeter-drop').css('display', 'block');
        hotoptBlink();
        MultimeterisShow = true;
        slideToolBox(0);
    }
}
//裴露婕---20170111
//热区闪烁
function hotoptBlink(){
    setInterval(function(){
        $.each($('.multimeter-drop').find('a'), function(index, item){
            if(index<2 && pageNum!=='038'){
                $(item).fadeTo(300,0.4).fadeTo(300,0.8);
            }else if(index<4 && pageNum==='038'){
                $(item).fadeTo(300,0.4).fadeTo(300,0.8);
            }
        })
    },800);
}

//诊断仪首页显示
function zdyShow() {
    $(".iframezdy-zdy").css("background", "#fff");
    $("#zdyPage2").css('display', 'none');
    $("#zdyPage3").css('display', 'none');
    $("#zdyPage4").css('display', 'none');
    $("#zdyPage5").css('display', 'none');
    $("#zdyPage1").css('display', 'block');
};//---end
function pages31Fun(){
    NextDarkOrLignt(0);
    $('.cc-djs6-dcf').removeClass('.cc-djs6-dcf-away');
}

function multimeterPen(Radrepetition, Blackrepetition, gearV){
    pen = {
        Radrepetition: Radrepetition, 
        Blackrepetition: Blackrepetition,
        gearV: gearV
    };
    return pen;
}

function multimeterScreen(){
    var footboard = $('.footboard').attr('name');//踏板
    // console.log(pen, footboard);
    if(pen.Radrepetition === '1' && pen.Blackrepetition === '2' && footboard === '1' && pen.gearV === '1') {
        $("#multimeterShowData").text('12');
        NextDarkOrLignt(1);
    } else if(pen.Radrepetition === '2' && pen.Blackrepetition === '1' && footboard === '1' && pen.gearV === '1'){
        $("#multimeterShowData").text('-12');
        NextDarkOrLignt(1);
    } else {
        $("#multimeterShowData").text('0');
    }
}

var switchList = ['N', 'ON', 'ON', 'OFF', 'ON', 'ON', 'OFF', 'ON', 'OFF']
function gearFootboard(){
    $('#zdyPage6 .page6-table-main').html('');
    $.each(switchList, function(index, item){
        var p = $('<p>'+ item +'</p>');
        $('#zdyPage6 .page6-table-main').append(p);
    })
}
//start end=======================
var zoom = true;
function tableZoomClick(){
    if(zoom){
        $('.tableshow').animate({
            width: '885px',
            height: '123px',
            opacity: 1
        }, 500)
        zoom = false;
        NextDarkOrLignt(1);
    } else {
        $('.tableshow').animate({
            width: 0,
            height: 0,
            opacity: 0
        }, 500)
        zoom = true;
    }
    clearInterval(listbordertimer);
    
}

var audioList = [{
    pageId: '002',
    audioSrc: 'audio/2.mp3'
}, {
    pageId: '003',
    audioSrc: 'audio/3.mp3'
}, {
    pageId: '004',
    audioSrc: 'audio/4.mp3'
}, {
    pageId: '005',
    audioSrc: 'audio/5.mp3'
}, {
    pageId: '006',
    audioSrc: 'audio/6.mp3'
}, {
    pageId: '007',
    audioSrc: 'audio/7.mp3'
}, {
    pageId: '008',
    audioSrc: 'audio/8.mp3'
}, {
    pageId: '009',
    audioSrc: 'audio/9.mp3'
}, {
    pageId: '010',
    audioSrc: 'audio/10.mp3'
}, {
    pageId: '011',
    audioSrc: 'audio/11.mp3'
}, {
    pageId: '012',
    audioSrc: 'audio/12.mp3'
}, {
    pageId: '013',
    audioSrc: 'audio/13.mp3'
}, {
    pageId: '014',
    audioSrc: 'audio/14.mp3'
}, {
    pageId: '015',
    audioSrc: 'audio/15.mp3'
}, {
    pageId: '016',
    audioSrc: 'audio/16.mp3'
}, {
    pageId: '017',
    audioSrc: 'audio/17.mp3'
}, {
    pageId: '018',
    audioSrc: 'audio/18.mp3'
}, {
    pageId: '019',
    audioSrc: 'audio/19.mp3'
}, {
    pageId: '020',
    audioSrc: 'audio/20.mp3'
}, {
    pageId: '021',
    audioSrc: 'audio/21.mp3'
}, {
    pageId: '022',
    audioSrc: 'audio/22.mp3'
}, {
    pageId: '023',
    audioSrc: 'audio/23.mp3'
}, {
    pageId: '024',
    audioSrc: 'audio/24.mp3'
}, {
    pageId: '025',
    audioSrc: 'audio/25.mp3'
}, {
    pageId: '026',
    audioSrc: 'audio/26.mp3'
}, {
    pageId: '027',
    audioSrc: 'audio/27.mp3'
}, {
    pageId: '028',
    audioSrc: 'audio/28.mp3'
}, {
    pageId: '029',
    audioSrc: 'audio/28.mp3'
}, {
    pageId: '030',
    audioSrc: 'audio/32.mp3'
}, {
    pageId: '031',
    audioSrc: 'audio/33.mp3'
},{
    pageId: '032',
    audioSrc: 'audio/34.mp3'
},{
    pageId: '033',
    audioSrc: 'audio/35.mp3'
}, {
    pageId: '034',
    audioSrc: 'audio/36.mp3'
}, {
    pageId: '035',
    audioSrc: 'audio/37.mp3'
}, {
    pageId: '036',
    audioSrc: 'audio/38.mp3'
}, {
    pageId: '037',
    audioSrc: 'audio/39.mp3'
}, {
    pageId: '038',
    audioSrc: 'audio/40.mp3'
}, {
    pageId: '039',
    audioSrc: 'audio/41.mp3'
}, {
    pageId: '040',
    audioSrc: 'audio/42.mp3'
}, {
    pageId: '041',
    audioSrc: 'audio/43.mp3'
}, {
    pageId: '042',
    audioSrc: 'audio/44.mp3'
}, {
    pageId: '043',
    audioSrc: 'audio/45.mp3'
}, {
    pageId: '044',
    audioSrc: 'audio/46.mp3'
}, {
    pageId: '045',
    audioSrc: 'audio/47.mp3'
}, {
    pageId: '046',
    audioSrc: 'audio/48.mp3'
}, {
    pageId: '047',
    audioSrc: 'audio/49.mp3'
}, {
    pageId: '048',
    audioSrc: 'audio/50.mp3'
}]
// audioPlay($rootScope.pageId);
var pageId41 = 0;
var lastAudio= false;
function audioPlay(pageId){
    // console.log('lastAudio：'+lastAudio, 'src:'+ $('#audio1').attr('src'));
    if(lastAudio){
        try {
            $('#audio1')[0].pause();
        } catch (err) {
            // console.log(err.message);
        }
    } else {
        $.each(audioList, function(index, item){
            if(pageId == item.pageId){
                createAudio();
                $('#audio1').attr('src', item.audioSrc);
                IsSpearker();
                // console.log("lalalala")
            }
        });
    }
}
function createAudio(){
    try {
        $('#audio1')[0].pause();
    } catch (err) {
        // console.log(err.message);
    }
    $('#audio1').remove();
    var audio = $('<audio id="audio1"></audio>');
    // $('#audio-src').html('');
    $('#audio-src').append(audio);
}
//指针旋转
var timer = '';
function pointerRotate(obj, start, end, during){
    // console.log(isInDpanel,isInNpanel,isInRpanel)
    // console.log(start, end)
    if(!(pageNum==='005' || pageNum==='045')){
        return;
    }
    clearInterval(timer);
    timer = setInterval(function(){
        if(start<end){
            start++;
            rotateSpeed = start;
            if(start >= end){
                clearInterval(timer);
            }
        }else if(start>end){
            start--;
            rotateSpeed = start;
            if(start <= end){
                clearInterval(timer);
            } 
        }else{
            clearInterval(timer);
        }
        obj.css('transform', 'rotate(' + start +'deg)');
    }, during); 
}
var timerAnother = '';
function pointerRotateAnother(obj, start, end, during){
    // console.log(start, end)
    // console.log(isInDpanel,isInNpanel,isInRpanel)
    if(!(pageNum==='005' || pageNum==='045')){
        return;
    }
    clearInterval(timerAnother);
    timerAnother = setInterval(function(){
        if(start<end){
            start++;
            rotateSpeed2 = start;
            if(start >= end){
                clearInterval(timerAnother);
            }
        }else if(start>end){
            start--;
            rotateSpeed2 = start;
            if(start <= end){
                clearInterval(timerAnother);
            } 
        }else{
            clearInterval(timerAnother);
        }
        obj.css('transform', 'rotate(' + start +'deg)');
    }, during); 
}
//判断喇叭是否播放音频
function speakerPlayOrPause(){
    if($("#speaker").attr("name") === '1'){
        setTimeout(function(){$('#audio1')[0].load();
        $('#audio1')[0].play();}, 100);
    } else {
        setTimeout(function(){
            try {
                $('#audio1')[0].pause();
            } catch (err) {
                // console.log(err.message);
            }
        },100)
        // 
    }
}  
function gearInit(){
    $('.shift').find('span').eq(4).addClass('span-active').siblings('span').removeClass('span-active');
	$('.handle').css({
		left: '77px',
		top: '15px'
	})
}
var pages5GearR;
function gearClick(status){
    if(status){
        $('.shift').find('span').unbind('click');
    } else {
        $('.shift').find('span').unbind('click');
    }
}
var gearArr = [{
    position: [63, 17],
    switchList: ['+', 'OFF', 'ON', 'ON', 'OFF','ON', 'OFF', 'OFF', 'ON']
}, {
    position: [63, 26],
    switchList: ['M', 'OFF', 'ON', 'ON', 'ON', 'ON', 'OFF', 'OFF', 'ON']
}, {
    position: [63, 35],
    switchList: ['-', 'OFF', 'ON', 'ON', 'ON','OFF', 'OFF', 'OFF', 'ON']
}, {
    position: [77, 10],
    switchList: ['R', 'ON', 'OFF', 'OFF', 'ON', 'ON', 'ON', 'OFF', 'OFF']
}, {
    position: [77, 15],
    switchList: ['N', 'ON', 'ON', 'OFF', 'ON', 'ON', 'OFF', 'ON', 'OFF']
}, {
    position: [77, 20],
    switchList: ['D', 'OFF','ON', 'OFF', 'ON','ON', 'OFF', 'OFF', 'ON']
}]

function informationShow(){
    if($('#service-information')){
        $('#service-information').css('display', 'block');
        $('.close-information').css('display', 'block');
        slideToolBox(0);
    }
}
var isInDpanel=false,isInNpanel=true,isInRpanel=false;
function changepanel(e){
    var gearArr = [{
		position: [63, 17],
	    switchList: ['+', 'OFF', 'ON', 'ON', 'OFF','ON', 'OFF', 'OFF', 'ON']
	}, {
		position: [63, 26],
	    switchList: ['M', 'OFF', 'ON', 'ON', 'ON', 'ON', 'OFF', 'OFF', 'ON']
	}, {
		position: [63, 35],
	    switchList: ['-', 'OFF', 'ON', 'ON', 'ON','OFF', 'OFF', 'OFF', 'ON']
	}, {
		position: [77, 10],
	    switchList: ['R', 'ON', 'OFF', 'OFF', 'ON', 'ON', 'ON', 'OFF', 'OFF']
	}, {
		position: [77, 15],
	    switchList: ['N', 'ON', 'ON', 'OFF', 'ON', 'ON', 'OFF', 'ON', 'OFF']
	}, {
		position: [77, 20],
	    switchList: ['D', 'OFF','ON', 'OFF', 'ON','ON', 'OFF', 'OFF', 'ON']
	}]
    
    var gear = $(e).text();
    // $(e).addClass('span-active').siblings('span').removeClass('span-active');
    var isloadedImage = $('.meter-bright-center').css('background-image').indexOf('center_later');
    var brightCenterText = $('.meter-bright-center').text();
    // console.log($('.footboard').attr("name"),switch_info,isloadedImage,brightCenterText)
    if($('.footboard').attr("name") == 1 && switch_info && (isloadedImage>-1 || brightCenterText==='请踏下制动踏板')){
        $.each(gearArr, function(index, item){
            if(gear === item.switchList[0]){
                $('.handle').animate({
                    left: item.position[0] + 'px',
                    top: item.position[1] + 'px'
                }, 300, function(){
                    $('.handle').css({
                        'left': item.position[0] + 'px',
                        'top': item.position[1] + 'px'
                    });
                });
                $.each(item.switchList, function(index, item){
                    if(index<8){
                        $('#zdyPage6 .page6-table-main').find('p').eq(index).html(item);
                    }
                })
            }
        })
    }
    
    if($('.footboard').attr("name") == 1  && switch_info && (isloadedImage>-1 || brightCenterText==='请踏下制动踏板')){
        var value = $(e).html();
        if(value==='D'){
            if($('.meter-bright-center').text()!='请踏下制动踏板'){
                $('.page6-table-main').find('p').eq(0).html(value);
                if(pageNum==='045'){
                    $('.driveWay').html('A');
                    $('.model').html('E');
                    $('.panel').html(value);
                }else{
                    $('.driveWay').html('');
                    $('.model').html('');
                    $('.panel').html('');
                } 
            }
            isInDpanel = true;
            isInNpanel = false;
            isInRpanel = false;
            $('.accelerator').css('cursor','pointer');
        }else if((value==='M' || value==='R')){
            if($('.meter-bright-center').text()!='请踏下制动踏板'){
                $('.page6-table-main').find('p').eq(0).html(value);
                if(pageNum==='045'){
                    $('.panel').html(value);
                }else{
                    $('.panel').html('');
                } 
                $('.driveWay').html('');
                $('.model').html('');
            }
            isInRpanel = true;
            isInDpanel = false;
            isInNpanel = false;
        }else if(value==='N'){
            if($('.meter-bright-center').text()!='请踏下制动踏板'){
                $('.page6-table-main').find('p').eq(0).html(value);
                if(pageNum==='045'){
                    $('.panel').html(value);
                }else{
                    $('.panel').html('');
                } 
                $('.driveWay').html('');
                $('.model').html('');
            }
            isInDpanel = false;
            isInNpanel = true;
            isInRpanel = false;
        }
    }
}
var Kcomplete = false,landKcomplete = false,landVcomplete= false;
function TestgoPage(){
    if(Kcomplete && landKcomplete){
        NextDarkOrLignt(1)
    }
}
//==================================================================yerr

