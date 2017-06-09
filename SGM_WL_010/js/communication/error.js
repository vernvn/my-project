/**
 * @author zhouboyu
 * handle error
 * @param errorCode
 * 20 ajax or jsonp error
 * 21 server response body nodata
 *
 */
(function() {
    var error;
    var errorImage = new Image();
    errorImage.src="./images/popup.png";
    return handleError = function(errorCode) {
        error = true;
        var content = "";
        /5000/.test(errorCode) ? errorCode = 20001 : null;
        switch (errorCode) {
            case "-1":
                content = "系统繁忙！请与管理员联系。";
                break;
            case "20":
                if (location.hostname === "localhost") {
                    error = false;
                }
                content = "与服务器连接失败！请与管理员联系。";
                break;
            case "21":
                content = "当前网络异常，无法获取学习数据。";
                break;
            case "22":
                content = "插件版本较老，请关闭浏览器，再更新插件。";
                break;
            case "23":
                content = "打开了多个课程，本平台不支持同时学习多个课程，请关闭所有课程页面后，重新打开课程。";
                break;
            case "24":
                content = "找不到插件，请关闭浏览器,请安装最新插件或重新启动插件。";
                break;
            case "20001":
                if (location.hostname === "localhost") {
                    error = false;
                }
                content = "当前非正常打开课件，请重新打开课件。";
                break;
            case "30005":
                content = "该用户在其他地方登陆或打开多个课件。";
                break;
            // default:
            //     content = "当前课程出错，请从新打开。";
        }
        var img = "./images/popup.png";
        var html =
            '<div style="width:100%;height:100%;position:fixed;top: 0;left:0; margin:auto;z-index:102; background: rgba(0,0,0,0.5);" id="overspread">\
               <div style="width: 373px;height: 224px;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;background: url(' + img + ') no-repeat;">\
                  <div id="error_close" style="position: absolute; width: 40px; height: 41px; cursor: pointer; right: 4px; top: 4px;"></div>\
                  <div style="position: absolute; margin: 50px 10px; height: 119px; text-align: center;line-height: 1.5em;">' + content + '</div>\
                  <div id="error_ensure" style="position: absolute; right: 10px; bottom: 10px; width: 67px; height: 29px; cursor: pointer;"></div>\
               </div>\
            </div>';

        if (error) {
            if ($("#overspread").length !== 0) {
                $("#overspread .error-content").text(content);
            } else {
                $(".container").append(html);
                $("#error_close").click(closeWindow);
                $("#error_ensure").click(closeWindow);
            }
            error = false;
        }
    }
})();



/**
 * @author zhouboyu
 * 关闭浏览器方法
 */

function closeWindow() {
    exitServer();
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
        top.window.parent.opener = top;
        top.window.parent.open('', '_self', '');
        top.window.parent.close();
        window.location.href = "http://content.xiaochejiang.com/warn.html";
    } else {
        window.parent.opener = null;
        window.parent.open("", "_self");
        window.parent.close();
        window.location.href = "http://content.xiaochejiang.com/warn.html";
    }
}

function exitServer() {
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:99/",
        async: false,
        data: timestamp,
        success: function(data) {

        },
        error: function(jqXHR, textStatus, errorMsg) {

        }
    });
}