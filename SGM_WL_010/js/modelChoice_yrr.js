/**
 * Created by Administrator on 2015/6/15.
 */

function hideDiv(){
    $("#topic").hide();
    $("#view_profile").attr("onclick","showDiv()");
    $("#view_profile").html("继续答题");
}
function showDiv(){
    $("#topic").show();
    $("#view_profile").attr("onclick","hideDiv()");
    $("#view_profile").html("查看资料");
}
function selected(obj){
    $(".selection_box_answer").removeClass("answer_act");
    $(obj).addClass("answer_act");
}
function Clear(){
    $("#P2").removeAttr('stroke');
    $("#K2").removeAttr('stroke');
    $("#Z2").removeAttr('stroke');
    $("#D2").removeAttr('stroke');
    $("#P1").removeAttr('stroke');
    $("#K1").removeAttr('stroke');
    $("#Z1").removeAttr('stroke');
    $("#D1").removeAttr('stroke');
}
function errors(arr){
    var str=arr;
    Clear();

    $("#"+str[0]).attr('stroke','red');
    $("#"+str[1]).attr('stroke','orange');
    $("#"+str[2]).attr('stroke','yellow');
    $("#"+str[3]).attr('stroke','black');
    $("#D3").attr('stroke','black').attr("stroke-width","2");
}
function allRight(){
    $("#btn_b3").attr("data-reveal-id","myModal");
    $("#audio1")[0].pause();
    $("#correct")[0].play();
}
function allFalse(){
    $("#audio1")[0].pause();
    $("#error")[0].play();
    $("#btn_b3").attr("data-reveal-id","myModal_1");
}
function ShowTool(){
    $("#sta").attr("value","1");
    toolIsFlicker(0);
    slideShowOrHide(0);
    $("#gongju").show(500);
    if($("#gongju_z")){
        $("#gongju_z").show(500);
    }
    if($("#gongju_d")){
        $("#gongju_d").show(500);
    }
    if($("#gongju_t")){
        $("#gongju_t").show(500);
    }
}
function toggleShows(){
    $("#sta").attr("value","1");
    $("#gongju").toggle(500);
}
function correct(){
    if( $("#audio1").length>0){
        $("#audio1")[0].pause();
    }
    $("#error")[0].pause();
    $("#correct")[0].play();
    $("#btnSubmit").attr("data-reveal-id","myModal");
}
function error(){
    if($("#audio1").length>0){
        $("#audio1")[0].pause();
    }
    $("#correct")[0].pause();
    $("#error")[0].play();
    $("#btnSubmit").attr("data-reveal-id","myModal_1");
}

function add(){
    var strName = $("#strName").val();
    var placeholderValue = $("#strName").attr('placeholder');
    if(strName!="" && strName != placeholderValue){
        $("#strNames").attr("value","X102 36号端子 至TCM X3  5号端子之间线束存在对地短路");
        $("#strNames").show(500);
        NextDarkOrLignt(1);
    }
}
function add1(){
    var strName = $("#maintenance").val();
    var placeholderValue = $("#maintenance").attr('placeholder');
    if(strName!="" && strName != placeholderValue){
        $("#maintenances").attr("value","更换变速箱线束。");
        $("#maintenances").show(500);
        NextDarkOrLignt(1);
        progressOver();
    }
}

function upWindow(index,id){
    window['up'+id]++;
    if(window['up'+id]==3){
        count(window['up'+id]);
        return false;
    }
}
function downWindow(index,id){
    window['down'+id]++;
    if(window['down'+id]==3){
        count(window['down'+id]);
        return false;
    }
}
function upsWindow(index,id){
    window['up'+id]++;
    $("#bl_b_"+index).animate({marginTop:'',opacity:'1'},5000);
    if(window['up'+id]==1){
        counts(window['up'+id]);
        return false;
    }
}

function downsWindow(index,id){
    window['down'+id]++;
    $("#bl_b_"+index).animate({marginTop:'75px',opacity:'1'},5000);
    if(window['down'+id]==1){
        counts(window['down'+id]);
        return false;
    }
}
//017页面
function codeTab(){
    $("#vert_choice").hide();
    //显示没有通告信息
    $(".TechnicalBulletins").show();
    $("#insert").show().html("P0443");
    $(".TechnicalBulletins pre #insert_other").html('<div class="vert_btn vert_btn_width2">P0446</div><div class="vert_btn vert_btn_width2">P0447</div>');
    $("#p-con").html("选择此车故障码P0443，查看相关信息。");
    $("#audio1").remove();
    if(globalSound==1){
        $("#audio2")[0].play();
    }
}
//005

//drag------------------------------------------------------------------------------


var dragElement;
var dis_x;
var dis_y;
// function downSvg(obj,e){
//     dragElement = obj;
//     dis_x = e.pageX- $(obj).position().left;
//     dis_y = e.pageY- $(obj).position().top;
// }
// function moveSvg(e){
//     $(document).mousemove(function(e) {
//         $(dragElement).css({top:e.pageY-dis_y,left:e.pageX-dis_x});
//     });
// }
// function upSvg(e){
//     dragElement = null;
//     $(document).unbind("mousemove");
//     $(document).unbind("mouseup");
// }

function Amplification(){
    var height1=$("#svg1").height();
    var width1=$("#svg1").width();
    var h=height1*1.2;
    var w=width1*1.2;
    $("#svg1").css("height",h);
    $("#svg1").css("width",w);
}
function narrow(){
    //$("#svg1").css("cursor","url(../img/nar.png)");
    var height1=$("#svg1").height();
    var width1=$("#svg1").width();
    var h=height1/1.2;
    var w=width1/1.2;
    $("#svg1").css("height",h);
    $("#svg1").css("width",w);
}





