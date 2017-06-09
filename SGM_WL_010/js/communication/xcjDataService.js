/**
 * @author 周博宇
 *
 */
var golbalXcjDataService; //适用于普通js文件使用的后台通讯文件
var xcjDataService = angular.module("xcjDataService", []);

xcjDataService.service('xcjDataService', function($timeout, $interval) {
    var xcjDataService = {
        faultType: "",
        questionOrder: [],
        seconds: 0,
        result: false,
        adapter: "", //通信对象实例
        progressArray: "", //进度点集合
        paper: "", //试题、得分点集合
        handleArray: "", //操作记录、动作标集合
        isAuto: true, //是否自动提交
        isAutoSeconds: "120000", //自动提交间隔时间
        clock: '',
        /**
         * 初始化各个实例，并调用实例的初始化方法
         */
        init: function(initCallback) {
            this.adapter = new Adapter();
            this.progressArray = new ProgressArray();
            this.paper = new Paper();
            this.handleArray = new HandleArray();
            this.adapter.init();
            //this.adapter.getStudyCode();
            dtd.promise(this.adapter.getStudyTs);
            this.adapter.getStudyTs.done(function() {
                xcjDataService.adapter.startStudy(xcjDataService.progressArray, xcjDataService.paper, xcjDataService.handleArray, initCallback);
            });

            this.adapter.getStudyTs(dtd);

            //$timeout(function(){
            //    xcjDataService.adapter.startStudy(xcjDataService.progressArray,xcjDataService.paper,xcjDataService.handleArray);
            //},2000);

            this.faultType = this.adapter.faultNumber || "RM_DMA_DSG_AX_001";

            /*var questionCatch=setInterval(function(){
                xcjDataService.questionOrder=order;
                if(/question/.test(xcjDataService.questionOrder)){
                    clearInterval(questionCatch);
                }
            },1000);*/


            this.clock = new Date().getTime();
            if (this.isAuto) {
                setInterval(function() {
                    xcjDataService.commit("commit");
                }, xcjDataService.isAutoSeconds);
            }
        },

        /**
         * 提交数据
         * @param mode 判断提交和退出的标识
         */
        commit: function(mode) {

            this.seconds = parseInt((new Date().getTime() - this.clock) / 1000);
            if (this.seconds > 150) {

            }
            this.adapter.seconds += this.seconds;
            if (mode == "commit") {
                this.adapter.commitStudy(this.progressArray, this.paper, this.handleArray);
            } else if (mode == "exit") {

                this.adapter.exitStudy(this.progressArray, this.paper, this.handleArray);
            }
            this.seconds = 0;
            this.clock = new Date().getTime();
        },
        /**
         * 设置进度点
         * @param id 进度点id
         */
        setProgress: function(id) {
            this.progressArray.setProgress(id);
        },

        /**
         * 答题
         * @param id 题目id
         * @param optionId 选项id
         */
        setQuestion: function(id, optionId) {
            this.paper.setQuestion(id, optionId);
        },

        /**
         * 出发动作
         * @param id 动作id
         * @param flag 故障是否修复
         * @param sub 是否扣分
         */
        setHandle: function(id, flag, sub) {
            var time = this.seconds * 1000 + this.adapter.serverTime;
            this.handleArray.setHandle(id, this.progressArray, this.paper, time, flag, sub);
        },

        setCustomData: function(key, value) {
            this.handleArray.setCustomData(key, value);
        },

        setAnswers: function(questionId, answer) {
            this.handleArray.setAnswers(questionId, answer);
        },

        /**
         * 触发数组对象变更数值
         * @param id value对象的id
         * @param value value对象要赋予的值
         * @param flag 故障是否修复
         */
        setCondition: function(id, value, flag) {

            var hid = this.handleArray.setCondition(id, value);

            this.setHandle(hid, flag);
        }

    };
    golbalXcjDataService = xcjDataService;

    return xcjDataService;
});
