
//关闭div窗口
function closeDiv(){
    $("#box").hide(500);
}
//弹出div窗口
function submitHoriChoice(selectID){
    $("#audio1")[0].pause();
    $("#error")[0].play();
    $("#"+selectID+"").attr("data-reveal-id","myModal_1");
}



