var QueryString = function() {
var query_string = {};
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
        var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
        query_string[pair[0]] = arr;
    } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
}
    return query_string;
}();
function airCylinder(args) {
    var pageArgument = args;
    document.onkeydown = function KeyDown() {
        //屏蔽鼠标右键、Ctrl+n、shift+F10、F5刷新
        if (window.event.keyCode === 18 || event.ctrlKey || event.shiftKey) { //屏蔽 Alt,Ctrl,Tab键
            event.returnValue = false;
        }
        if ((event.keyCode === 116) || //屏蔽 F5 刷新键
            (event.keyCode === 112) || //屏蔽 F1 刷新键
            (event.keyCode === 133) || //屏蔽 F12 刷新键
            (event.keyCode === 132) || //屏蔽 F11 刷新键
            (event.ctrlKey && event.keyCode === 82)) { //Ctrl + R
            event.keyCode = 0;
            event.returnValue = false;
        }
        if ((event.ctrlKey) && (event.keyCode === 78)) //屏蔽 Ctrl+n
            event.returnValue = false;
        if ((event.shiftKey) && (event.keyCode === 121)) //屏蔽 shift+F10
            event.returnValue = false;
        if (window.event.srcElement.tagName === "A" && window.event.shiftKey)
            window.event.returnValue = false; //屏蔽 shift 加鼠标左键新开一网页
        if ((window.event.altKey) && (window.event.keyCode === 115)) { //屏蔽Alt+F4
            window.showModelessDialog("about:blank", "", "dialogWidth:1px;dialogheight:1px");
            return false;
        }
    };


    var airCylinder = true;
    // console.log(args)
    /*传参控制表针拖入哪一号气缸及大表指针的旋转*/
    if (args.num === "4501") {
        /*4501*/
        airCylinder = {
            smallYiBiaoDragRangeLeftUp: 447,
            smallYiBiaoDragRangeLeftDown: 467,
            angleAnimateShowQiGangXuXianRight: 179,
            dragEnterHotSpot: 456,
            dataArray: [
                [
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }]
                ],
                [
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }]
                ],
                [
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }]
                ],
                [
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }],
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }]
                ],
                [
                    [{
                        transformRate: 2.18
                    }, {
                        maxValue: 218
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }]
                ],
                [
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }]
                ],
            ]
        };

    } else if (args.num === "4502") {
        /*4502*/
        airCylinder = {
            smallYiBiaoDragRangeLeftUp: 447,
            smallYiBiaoDragRangeLeftDown: 467,
            angleAnimateShowQiGangXuXianRight: 179,
            dragEnterHotSpot: 456,
            dataArray: [
                [
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }]
                ],
                [
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }]
                ],
                [
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }]
                ],
                [
                    [{
                        transformRate: 1.68
                    }, {
                        maxValue: 168
                    }],
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 1.80
                    }, {
                        maxValue: 180
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }]
                ],
                [
                    [{
                        transformRate: 2.18
                    }, {
                        maxValue: 218
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }],
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }]
                ],
                [
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }]
                ],
            ]
        };


    } else if (args.num === "4503") {
        /*4503*/
        airCylinder = {
            smallYiBiaoDragRangeLeftUp: 447,
            smallYiBiaoDragRangeLeftDown: 467,
            angleAnimateShowQiGangXuXianRight: 179,
            dragEnterHotSpot: 456,
            dataArray: [
                [
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }]
                ],
                [
                    [{
                        transformRate: 1.88
                    }, {
                        maxValue: 188
                    }],
                    [{
                        transformRate: 2.04
                    }, {
                        maxValue: 204
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 1.96
                    }, {
                        maxValue: 196
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }]
                ],
                [
                    [{
                        transformRate: 1.24
                    }, {
                        maxValue: 124
                    }],
                    [{
                        transformRate: 1.58
                    }, {
                        maxValue: 158
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 1.24
                    }, {
                        maxValue: 124
                    }],
                    [{
                        transformRate: 2.18
                    }, {
                        maxValue: 218
                    }]
                ],
                [
                    [{
                        transformRate: 0.8
                    }, {
                        maxValue: 80
                    }],
                    [{
                        transformRate: 1.38
                    }, {
                        maxValue: 138
                    }],
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 0.88
                    }, {
                        maxValue: 88
                    }],
                    [{
                        transformRate: 2.04
                    }, {
                        maxValue: 204
                    }]
                ],
                [
                    [{
                        transformRate: 1.38
                    }, {
                        maxValue: 138
                    }],
                    [{
                        transformRate: 1.68
                    }, {
                        maxValue: 168
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 1.38
                    }, {
                        maxValue: 138
                    }],
                    [{
                        transformRate: 2.18
                    }, {
                        maxValue: 218
                    }]
                ],
                [
                    [{
                        transformRate: 1.96
                    }, {
                        maxValue: 196
                    }],
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 1.96
                    }, {
                        maxValue: 196
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }]
                ],
            ]
        };
    } else if (args.num === "4504") {
        /*4504*/
        airCylinder = {
            smallYiBiaoDragRangeLeftUp: 447,
            smallYiBiaoDragRangeLeftDown: 467,
            angleAnimateShowQiGangXuXianRight: 179,
            dragEnterHotSpot: 456,
            dataArray: [
                [
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }]
                ],
                [
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }]
                ],
                [
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }]
                ],
                [
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }],
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }]
                ],
                [
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }]
                ],
                [
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.68
                    }, {
                        maxValue: 268
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }]
                ],
            ]
        };

    } else if (args.num === "4505") {
        /*4505*/
        airCylinder = {
            smallYiBiaoDragRangeLeftUp: 447,
            smallYiBiaoDragRangeLeftDown: 467,
            angleAnimateShowQiGangXuXianRight: 179,
            dragEnterHotSpot: 456,
            dataArray: [
                [
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.18
                    }, {
                        maxValue: 218
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }]
                ],
                [
                    [{
                        transformRate: 1.32
                    }, {
                        maxValue: 132
                    }],
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 1.68
                    }, {
                        maxValue: 168
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }]
                ],
                [
                    [{
                        transformRate: 0.70
                    }, {
                        maxValue: 70
                    }],
                    [{
                        transformRate: 1.88
                    }, {
                        maxValue: 188
                    }],
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 1.10
                    }, {
                        maxValue: 110
                    }],
                    [{
                        transformRate: 2.18
                    }, {
                        maxValue: 218
                    }]
                ],
                [
                    [{
                        transformRate: 0.12
                    }, {
                        maxValue: 12
                    }],
                    [{
                        transformRate: 1.51
                    }, {
                        maxValue: 151
                    }],
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 0.34
                    }, {
                        maxValue: 34
                    }],
                    [{
                        transformRate: 1.96
                    }, {
                        maxValue: 196
                    }]
                ],
                [
                    [{
                        transformRate: 0.80
                    }, {
                        maxValue: 80
                    }],
                    [{
                        transformRate: 1.80
                    }, {
                        maxValue: 180
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 1.10
                    }, {
                        maxValue: 110
                    }],
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }]
                ],
                [
                    [{
                        transformRate: 1.46
                    }, {
                        maxValue: 146
                    }],
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 1.74
                    }, {
                        maxValue: 174
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }]
                ],
            ]
        };

    } else if (args.num === "4506") {
        /*4506*/
        airCylinder = {
            smallYiBiaoDragRangeLeftUp: 447,
            smallYiBiaoDragRangeLeftDown: 467,
            angleAnimateShowQiGangXuXianRight: 179,
            dragEnterHotSpot: 456,
            dataArray: [
                [
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.59
                    }, {
                        maxValue: 259
                    }]
                ],
                [
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }]
                ],
                [
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.18
                    }, {
                        maxValue: 218
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }]
                ],
                [
                    [{
                        transformRate: 1.68
                    }, {
                        maxValue: 168
                    }],
                    [{
                        transformRate: 2.18
                    }, {
                        maxValue: 218
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 1.96
                    }, {
                        maxValue: 196
                    }],
                    [{
                        transformRate: 2.32
                    }, {
                        maxValue: 232
                    }]
                ],
                [
                    [{
                        transformRate: 1.96
                    }, {
                        maxValue: 196
                    }],
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }],
                    [{
                        transformRate: 2.10
                    }, {
                        maxValue: 210
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }]
                ],
                [
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 2.40
                    }, {
                        maxValue: 240
                    }],
                    [{
                        transformRate: 2.54
                    }, {
                        maxValue: 254
                    }],
                    [{
                        transformRate: 2.24
                    }, {
                        maxValue: 224
                    }],
                    [{
                        transformRate: 2.46
                    }, {
                        maxValue: 246
                    }]
                ],
            ]
        };
    }

    var ceLiangBiaoBg = $(".ce-liang-biao .small-yibiao-bg");

    var $angleAnimateShowQiGangXuXian = $(".angle-animate-show");
    var $angleAnimateHideZheZhao = $(".angle-animate-hide");
    var $percentNum = $(".percent-bar .percent-num");
    // var $right = $(".right");
    // var $percentBar = $(".percent-bar");
    var $shenDu = $(".shendu");
    var $shenduT = $(".shendu-t");
    // var $keDuXian = $(".keduxian")
    var $verticalLine = $(".vertical-line");
    // var $bigYiBiao = $(".big-yibiao");
    var $bigYiBiaoZhen = $(".big-yibiaozhen");
    var $ceLiangQiGang = $(".celiang-qigang");

    var $keDuXian = $(document.getElementsByClassName("keduxian")[0]);
    var $bigYiBiao = $(document.getElementsByClassName("big-yibiao")[0]);
    var $percentBar = $(document.getElementsByClassName("percent-bar")[0]);
    var angleButtonArrayParent = document.getElementsByClassName("vertical-switch")[0];
    var angleButtonArray = angleButtonArrayParent.getElementsByTagName("span");

    var ceLiangBiaoBgLeft = parseInt(ceLiangBiaoBg.css("left"));
    var ceLiangBiaoBgTop = parseInt(ceLiangBiaoBg.css("top"));

    var isReadyCeLiang = true;
    var tipsIndex = 0;
    var yiBiaoTransformRotate = 0;
    var dragStopShowSmallBiaoPicIndex = true;
    var currentZhiZhenTransformAngle = 0;
    var glideBarBtnLeft = 0;
    var currentBiaoAngle = 0; /* 用于点击按钮时及拖动滚动条时获取当前测量表的角度是0/30/60/90/120/150 */
    // var currentButtonIndex = 0;/* 用于获取当前点击更换角度按钮的下标，用于意外拖动停止时进行获取当前的测量表的角度值是0/30/60/90/120/150/ */
    /* 建立一个图片数组，获取this.index数值作为下标，获取数组中的图片,用于点击切换角度按钮时切换small仪表的图片 */
    var smallYiBiaoPic = ["./images/qigang/small_biao0.png",
        "./images/qigang/small_biao30.png",
        "./images/qigang/small_biao60.png",
        "./images/qigang/small_biao90.png",
        "./images/qigang/small_biao120.png",
        "./images/qigang/small_biao150.png"
    ];


    /* 改变指针的旋转角度 */
    function changeZhiZhenAngle(currentCeLiangBiaoZhenTransformAngle, airCylinderNumber) {
        glideBarBtnLeft = parseInt($percentNum.css('left'));
        if ($(".percent-num .value").text() === "50%") {
            glideBarBtnLeft = 70;
        }
        switch (currentCeLiangBiaoZhenTransformAngle) {
            case 0:
                switch (currentZhiZhenTransformAngle) {
                    case 0:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[0][0][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[0][0][0].transformRate - airCylinderNumber.dataArray[0][0][1].maxValue;
                        }
                        break;
                    case 1:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[0][1][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[0][1][0].transformRate - airCylinderNumber.dataArray[0][1][1].maxValue;
                        }
                        break;
                    case 2:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[0][2][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[0][2][0].transformRate - airCylinderNumber.dataArray[0][2][1].maxValue;
                        }
                        break;
                    case 3:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[0][3][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[0][3][0].transformRate - airCylinderNumber.dataArray[0][3][1].maxValue;
                        }
                        break;
                    case 4:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[0][4][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[0][4][0].transformRate - airCylinderNumber.dataArray[0][4][1].maxValue;
                        }
                        break;
                }
                break;
            case 30:
                switch (currentZhiZhenTransformAngle) {
                    case 0:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[1][0][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[1][0][0].transformRate - airCylinderNumber.dataArray[1][0][1].maxValue;
                        }
                        break;
                    case 1:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[1][1][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[1][1][0].transformRate - airCylinderNumber.dataArray[1][1][1].maxValue;
                        }
                        break;
                    case 2:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[1][2][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[1][2][0].transformRate - airCylinderNumber.dataArray[1][2][1].maxValue;
                        }
                        break;
                    case 3:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[1][3][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[1][3][0].transformRate - airCylinderNumber.dataArray[1][3][1].maxValue;
                        }
                        break;
                    case 4:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[1][4][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[1][4][0].transformRate - airCylinderNumber.dataArray[1][4][1].maxValue;
                        }
                        break;
                }
                break;
            case 60:
                switch (currentZhiZhenTransformAngle) {
                    case 0:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[2][0][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[2][0][0].transformRate - airCylinderNumber.dataArray[2][0][1].maxValue;
                        }
                        break;
                    case 1:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[2][1][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[2][1][0].transformRate - airCylinderNumber.dataArray[2][1][1].maxValue;
                        }
                        break;
                    case 2:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[2][2][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[2][2][0].transformRate - airCylinderNumber.dataArray[2][2][1].maxValue;
                        }
                        break;
                    case 3:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[2][3][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[2][3][0].transformRate - airCylinderNumber.dataArray[2][3][1].maxValue;
                        }
                        break;
                    case 4:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[2][4][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[2][4][0].transformRate - airCylinderNumber.dataArray[2][4][1].maxValue;
                        }
                        break;
                }
                break;
            case 90:
                switch (currentZhiZhenTransformAngle) {
                    case 0:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[3][0][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[3][0][0].transformRate - airCylinderNumber.dataArray[3][0][1].maxValue;
                        }
                        break;
                    case 1:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[3][1][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[3][1][0].transformRate - airCylinderNumber.dataArray[3][1][1].maxValue;
                        }
                        break;
                    case 2:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[3][2][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[3][2][0].transformRate - airCylinderNumber.dataArray[3][2][1].maxValue;
                        }
                        break;
                    case 3:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[3][3][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[3][3][0].transformRate - airCylinderNumber.dataArray[3][3][1].maxValue;
                        }
                        break;
                    case 4:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[3][4][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[3][4][0].transformRate - airCylinderNumber.dataArray[3][4][1].maxValue;
                        }
                        break;
                }
                break;
            case 120:
                switch (currentZhiZhenTransformAngle) {
                    case 0:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[4][0][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[4][0][0].transformRate - airCylinderNumber.dataArray[4][0][1].maxValue;
                        }
                        break;
                    case 1:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[4][1][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[4][1][0].transformRate - airCylinderNumber.dataArray[4][1][1].maxValue;
                        }
                        break;
                    case 2:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[4][2][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[4][2][0].transformRate - airCylinderNumber.dataArray[4][2][1].maxValue;
                        }
                        break;
                    case 3:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[4][3][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[4][3][0].transformRate - airCylinderNumber.dataArray[4][3][1].maxValue;
                        }
                        break;
                    case 4:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[4][4][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[4][4][0].transformRate - airCylinderNumber.dataArray[4][4][1].maxValue;
                        }
                        break;
                }
                break;
            case 150:
                switch (currentZhiZhenTransformAngle) {
                    case 0:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[5][0][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[5][0][0].transformRate - airCylinderNumber.dataArray[5][0][1].maxValue;
                        }
                        break;
                    case 1:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[5][1][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[5][1][0].transformRate - airCylinderNumber.dataArray[5][1][1].maxValue;
                        }
                        break;
                    case 2:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[5][2][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[5][2][0].transformRate - airCylinderNumber.dataArray[5][2][1].maxValue;
                        }
                        break;
                    case 3:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[5][3][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[5][3][0].transformRate - airCylinderNumber.dataArray[5][3][1].maxValue;
                        }
                        break;
                    case 4:
                        if (glideBarBtnLeft < 70) {
                            yiBiaoTransformRotate = -glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[5][4][0].transformRate;
                        } else {
                            yiBiaoTransformRotate = glideBarBtnLeft / 1.4 * airCylinderNumber.dataArray[5][4][0].transformRate - airCylinderNumber.dataArray[5][4][1].maxValue;
                        }
                        break;
                }
                break;
        }
    }

    /* 判断当前是否是正面，并选择不同测量点进行测量 */
    function changeCurrentCeLiangBiaoZhenFanWeiTypeAndWaringShowStatus(currentCeLiangBiaoZhenTransformAngle, airCylinderNumber) {

        if (ceLiangBiaoBgLeft > airCylinderNumber.smallYiBiaoDragRangeLeftUp && ceLiangBiaoBgLeft < airCylinderNumber.smallYiBiaoDragRangeLeftDown) {
            if (ceLiangBiaoBgTop >= 5 && ceLiangBiaoBgTop < 14) {
                currentZhiZhenTransformAngle = 0;
                changeZhiZhenAngle(currentCeLiangBiaoZhenTransformAngle, airCylinderNumber);
            } else if (ceLiangBiaoBgTop >= 36 && ceLiangBiaoBgTop < 45) {
                currentZhiZhenTransformAngle = 1;
                changeZhiZhenAngle(currentCeLiangBiaoZhenTransformAngle, airCylinderNumber);
            } else if (ceLiangBiaoBgTop >= 67 && ceLiangBiaoBgTop < 76) {
                currentZhiZhenTransformAngle = 2;
                changeZhiZhenAngle(currentCeLiangBiaoZhenTransformAngle, airCylinderNumber);

            } else if ((ceLiangBiaoBgTop >= 14 && ceLiangBiaoBgTop < 36) || (ceLiangBiaoBgTop >= 0 && ceLiangBiaoBgTop < 5)) {
                currentZhiZhenTransformAngle = 3;
                changeZhiZhenAngle(currentCeLiangBiaoZhenTransformAngle, airCylinderNumber);
            } else if ((ceLiangBiaoBgTop >= 45 && ceLiangBiaoBgTop < 67) || (ceLiangBiaoBgTop >= 76 && ceLiangBiaoBgTop < 100)) {
                currentZhiZhenTransformAngle = 4;
                changeZhiZhenAngle(currentCeLiangBiaoZhenTransformAngle, airCylinderNumber);
            }
        }
    }



    function tableHide() {
        if ($(".table-png").css("width") !== "312px") {
            return;
        }
        $(".table-png").animate({
            width: 0,
            height: 0,
            backgroundSize: "0%",
            left: "197px",
            top: "35px",
            // opacity:0
        });
    }

    function tableShow() {
        if ($(".table-png").css("width") !== "0px") {
            return;
        }
        $(".table-png").animate({
            backgroundSize: "100%",
            left: "222px",
            width: "312px",
            height: "83px",
            top: "10px",
            // opacity:1
        });

    }

    /* 点击事件的实现，实现切换正面与侧面再进行测量 */

    function mouseover() {
        $(".alert-button").mouseover(function() {
            tableShow();
            $(".tips-text").hide();
            if (ceLiangBiaoBg.css("top") === "14px" && ceLiangBiaoBg.css("left") === "75px") {
                $(".percent-bar").hide();
            } else {
                $(".percent-bar").hide();
            }
        });
    }
    // var time = true;
    function mouseout() {
        $(".alert-button").mouseout(function() {
            $(".tips-text").show();
            tableHide();
            if (ceLiangBiaoBg.css("top") === "14px" && ceLiangBiaoBg.css("left") === "75px") {
                $(".percent-bar").hide();
            } else {
                $(".percent-bar").show();
            }
        });
    }

    function click_event() {
        document.onclick = function() {
            tableHide();
            $(".tips-text").show();
        };
        $(".vertical-switch span").click(function() {
            $(this).addClass("vertical-switch-disabled").siblings().removeClass("vertical-switch-disabled");

            $percentNum.attr("style", " ");
            $(".percent-num .value").text("0%");
            $bigYiBiaoZhen.attr("style", " ");
            $(".shendu-t").css("transform", "rotate(-7deg)");
            ceLiangBiaoBg.css("transform", "rotate(-7deg)");
        });

        /*用于切换测量仪表的背景图片*/
        for (var i = 0; i < angleButtonArray.length; i++) {
            angleButtonArray[i].index = i;

            angleButtonArray[i].onclick = function() {
                currentBiaoAngle = Number(parseInt($(this).html()));

                ceLiangBiaoBg.css("background", "url(" + smallYiBiaoPic[this.index] + ") no-repeat");
                draggabled(currentBiaoAngle, airCylinder);
                $bigYiBiaoZhen.attr("style", "transform:rotate(0deg);display:block");
                if ($angleAnimateHideZheZhao.css("display") === "block") {
                    $(".tips-text").text("请拖动导航块调整测量工具位置。");
                } else {
                    $(".tips-text").text("请拖动测量工具至2号气缸");
                }

            };
        }
    }

    /* 新手提示参数 */
    var noviceTipsArr = [{
        tipsWritingPositionL: "350px",
        tipsWritingPositionT: "380px",

        tipsText: "点击角度按钮可以调整工具的测量角度",

        nextStepsL: "593px",
        nextStepsT: "540px",

        arrowsL: "500px",
        arrowsT: "295px",
        arrowsImg: "images/qigang/r－u.png",
    }, {
        tipsWritingPositionL: "350px",
        tipsWritingPositionT: "380px",

        tipsText: "此处数据表为默认显示，在任意地方点击鼠标数据都会消失，若想查看请将鼠标移动到文本图标处即可。",

        nextStepsL: "593px",
        nextStepsT: "540px",

        arrowsL: "220px",
        arrowsT: "270px",
        arrowsImg: "images/qigang/ll－u.png",
    }, {
        tipsWritingPositionL: "250px",
        tipsWritingPositionT: "73px",

        tipsText: "请按照题目要求使用鼠标拖动工具。",

        nextStepsL: "593px",
        nextStepsT: "540px",

        arrowsL: "190px",
        arrowsT: "150px",
        arrowsImg: "images/qigang/s－d.png",
    }, {
        tipsWritingPositionL: "350px",
        tipsWritingPositionT: "380px",

        tipsText: "使用鼠标拖动蓝色滑块可以调整工具所处的位置",

        nextStepsL: "593px",
        nextStepsT: "540px",

        arrowsL: "220px",
        arrowsT: "245px",
        arrowsImg: "images/qigang/ll－u.png",
    }, {
        tipsWritingPositionL: "270px",
        tipsWritingPositionT: "380px",

        tipsText: "在此区域内可以读取测量数据",

        nextStepsL: "510px",
        nextStepsT: "540px",

        arrowsL: "187px",
        arrowsT: "245px",
        arrowsImg: "images/qigang/05.png",
    }, {
        tipsWritingPositionL: "277px",
        tipsWritingPositionT: "380px",

        tipsText: "该区域可以查看工具与所测量部件的相对位置。",

        nextStepsL: "517px",
        nextStepsT: "540px",

        arrowsL: "190px",
        arrowsT: "380px",
        arrowsImg: "images/qigang/s－d.png",
    }];

    /* draggable拖动实现 */
    function draggabled(currentCeLiangBiaoZhenTransformAngle, airCylinderNumber) {
        $bigYiBiaoZhen.css("transform", "rotate(" + (yiBiaoTransformRotate) + "deg)");
        ceLiangBiaoBg.draggable({
            cursor: "move",
            handle: ".small-yibiao",
            containment: "parent",
            start: function() {
                tableHide();
            },
            drag: function() {
                ceLiangBiaoBgLeft = parseInt(ceLiangBiaoBg.css("left"));
                ceLiangBiaoBgTop = parseInt(ceLiangBiaoBg.css("top"));

                $ceLiangQiGang.css("left", airCylinderNumber.dragEnterHotSpot);
                $ceLiangQiGang.show();
                $(".tips-text").show();

                $angleAnimateShowQiGangXuXian.css("right", airCylinderNumber.angleAnimateShowQiGangXuXianRight);
                $angleAnimateShowQiGangXuXian.show();
                if (ceLiangBiaoBgLeft > airCylinderNumber.smallYiBiaoDragRangeLeftUp && ceLiangBiaoBgLeft < airCylinderNumber.smallYiBiaoDragRangeLeftDown) {
                    if (ceLiangBiaoBgTop < 22 && ceLiangBiaoBgTop > 5) {
                        ceLiangBiaoBg.draggable("option", "axis", "y");
                        isReadyCeLiang = true;
                        $(".small-yibiao-bg").css("zIndex", "3");

                        $percentBar.show();
                        $bigYiBiao.show();
                        $bigYiBiaoZhen.show();
                        $angleAnimateHideZheZhao.show();
                        $shenduT.show();
                        $verticalLine.show();
                        $keDuXian.show();
                        $(".rulers-overflow").show();
                        if ($(".percent-num .value").text() !== "50%") {
                            $(".tips-text").text("请拖动导航块调整测量工具位置。");
                        } else {
                            $(".tips-text").text("请上下拖动测量工具至合适位置并读取数值。");
                        }

                    } else if (ceLiangBiaoBgTop < 5 && ceLiangBiaoBgTop >= 0) {
                        ceLiangBiaoBg.draggable("option", "axis", " ");
                    }
                    if ($angleAnimateHideZheZhao.css("display") === "block" && ceLiangBiaoBgTop <= 100 && ceLiangBiaoBgTop >= 0) {
                        $(".left-bottom .shendu").css("top", (ceLiangBiaoBgTop - 17) + "px");
                        $(".keduxian").css("top", (ceLiangBiaoBgTop + 66) + "px");
                        // $(".rulers-overflow").css("top", (ceLiangBiaoBgTop - 36) + "px");
                        $(".rulers").css("top", (-ceLiangBiaoBgTop + 1) * 1.2 + "px");
                    }
                } else {
                    isReadyCeLiang = false;

                    $(".small-yibiao-bg").css("zIndex", "9");

                    $percentBar.hide();
                    $bigYiBiao.hide();
                    $angleAnimateHideZheZhao.hide();
                    $shenduT.hide();
                    $verticalLine.hide();
                    $keDuXian.hide();
                }
                changeCurrentCeLiangBiaoZhenFanWeiTypeAndWaringShowStatus(currentCeLiangBiaoZhenTransformAngle, airCylinder);
                $bigYiBiaoZhen.css("transform", "rotate(" + (yiBiaoTransformRotate) + "deg)");
                if ($angleAnimateHideZheZhao.css("display") === "block") {
                    $angleAnimateShowQiGangXuXian.css("zIndex", "5");
                } else {
                    $angleAnimateShowQiGangXuXian.css("zIndex", "0");
                }
            },
            stop: function() {
                $ceLiangQiGang.hide();
                if (!isReadyCeLiang) {
                    ceLiangBiaoBg.attr("style", " ");

                    $percentNum.attr("style", " ");
                    $(".percent-num .value").text("0%");
                    $shenDu.attr("style", " ");
                    $(".keduxian").attr("style", " ");
                    $(".tips-text").text("请拖动测量工具至2号气缸");
                    $(".rulers").css("top", "14px");
                    if ($(".rulers").css("top") === "14px") {
                        $(".rulers").css("top", "14px");
                    } else {
                        $(".rulers").css("top", "100px");
                    }
                    $angleAnimateShowQiGangXuXian.hide();
                    $(".shendu-t").css("transform", "rotate(-7deg)");
                    $(".tips-text").show();
                    $shenduT.hide();
                    $verticalLine.hide();
                    $keDuXian.hide();
                    for (var i = 0; i < angleButtonArray.length; i++) {
                        if (angleButtonArray[i].className === "vertical-switch-disabled") {
                            dragStopShowSmallBiaoPicIndex = i;
                        }
                    }
                    ceLiangBiaoBg.css("background", "url(" + smallYiBiaoPic[dragStopShowSmallBiaoPicIndex] + ") no-repeat");
                } else {
                    //  changeCurrentCeLiangBiaoZhenFanWeiTypeAndWaringShowStatus(currentCeLiangBiaoZhenTransformAngle,airCylinder);
                    //  $bigYiBiaoZhen.css("transform", "rotate(" + (yiBiaoTransformRotate) + "deg)");
                }
            }
        });
        $percentNum.draggable({
            cursor: "move",
            containment: $(".percent-bar"),
            axis: "x",
            start: function() {
                $(".alert-button").css("zIndex", "0");
            },
            drag: function() {
                glideBarBtnLeft = parseInt($percentNum.css('left'));
                ceLiangBiaoBg.css({
                    "transform": "rotate(" + (glideBarBtnLeft / 10 - 7) + "deg)"
                });
                $(".shendu-t").css("transform", "rotate(" + (glideBarBtnLeft / 10 - 7) + "deg)");
                $(".percent-num .value").text(Math.round(parseInt(glideBarBtnLeft) * 100 / 140) + "%");
                if (Math.round(parseInt(glideBarBtnLeft) * 100 / 140) >= 49 && Math.round(parseInt(glideBarBtnLeft) * 100 / 140) <= 51) {
                    $(".percent-num .value").text("50%");
                }

                if ($(".percent-num .value").text() === "50%") {
                    $(".tips-text").text("请上下拖动测量工具至合适位置并读取数值。");
                } else {
                    $(".tips-text").text("请拖动导航块调整测量工具位置。");
                }
                changeCurrentCeLiangBiaoZhenFanWeiTypeAndWaringShowStatus(currentCeLiangBiaoZhenTransformAngle, airCylinder);
                $bigYiBiaoZhen.css("transform", "rotate(" + (yiBiaoTransformRotate) + "deg)");
            },
            stop: function() {
                $(".alert-button").css("zIndex", "2");
            }
        });
    }

    function DraggabledAnimate() {
        this.init = function() {
            draggabled(0, airCylinder);
            click_event();
            mouseover();
            mouseout();
        };
    }
    var animate = new DraggabledAnimate();
    animate.init();
}
