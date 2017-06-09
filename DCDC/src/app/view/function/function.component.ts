import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../components/dashboard';
import { GearPanelService } from '../../components/gear_panel';
import { structureResources } from '../../index/in_memory_data.service';
declare var $: any,
    InitializePrinciple: any,
    InitializeCircuit: any,
    principleAnimate: any,
    circuitAnimate: any;
@Component({
    selector: 'function',
    providers: [
    ],
    templateUrl: './function.component.html',
    styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit {
    animateStatus = false;
    arrowTurnStatus = false;
    buttonshowStatus = false;
    pageTimerFunction = [];
    pagename: string = '';
    constructor(private dashboardService: DashboardService, private gearpanelService: GearPanelService) { }

    onmouseover(e) {
        if (e.target.className === 'DCDC') {
            this.buttonshowStatus = true;
        }
    }
    onmouseout($event) {
        $event.stopPropagation();
        $event.cancelBubble = true;
        this.buttonshowStatus = false;
    }
    openpage(name: string): void {
        this.pagename = name;
        $('#mask-svg').css('z-index', 6);
        $('.DCDCbox').hide();
        for (let i of structureResources) {
            if (i.index === name) {
                let length = i.infoText.length;
                for (let j = 0; j < length; j++) {
                    setTimeout(() => {
                        $('.describe-font' + (j + 1)).html(i.infoText[j])
                    }, 0)
                }
            }
        }
    }
    closepage() {
        this.pagename = '';
        $('#mask-svg').css('z-index', 5);
        $('.DCDCbox').show();
    }

    switchclose() {
        $('.switch').addClass('switchclose').removeClass('switch');
        $('.line-assist').addClass('line-assist-red').removeClass('line-assist');
        $('.enable-line').addClass('enable-line-purple').removeClass('enable-line');
        $('.feedback-line').addClass('feedback-line-blue').removeClass('feedback-line');
    }
    switchopen() {
        $('.switchclose').addClass('switch').removeClass('switchclose');
        $('.line-assist-red').addClass('line-assist').removeClass('line-assist-red');
        $('.enable-line-purple').addClass('enable-line').removeClass('enable-line-purple');
        $('.feedback-line-blue').addClass('feedback-line').removeClass('feedback-line-blue');
    }
     /**
     * 把要执行的循环动画都绑定到一个数组中，统一循环
     */
    loopA = [];
     /**
     * 执行的循环动画在数组中的下标
     */
    loopAIndex: number = 0;
     /**
     * 是否执行动画循环
     */
    setTimeoutGO: boolean = true;
    duration;
    /**
     * 执行所有的循环动画
     */
    loopAFun() {
        for (let i in this.loopA) {
            this.loopA[i]();
        }
    }
    loop(obj, start, max, duration, direction) {
        // let self = this;
        if (!obj) return false;
        start = start || 0;
        max = max || 48;
        this.duration = duration || 20;
        let timer = [];
        this.loopA[this.loopAIndex] = () => {

            $(obj).show();
            // 条件判断，以跳出循环动画
            // if (obj.id === 'arrow-turn2') {
            //     if (!self.arrowTurnStatus) {
            //         clearTimeout(timer[obj.id]);
            //         // cancelAnimationFrame(timer[obj.id]);
            //         $(obj).hide();
            //         return;
            //     }
            // } else {
            if (!this.animateStatus) {
                // clearTimeout(timer[obj.id]);
                // cancelAnimationFrame(timer[obj.id]);
                this.setTimeoutGO = false;
                $(obj).hide();
                return;
            }
            // }
            if (start > max) start = 0;
            // 下面是每隔一段时间执行动画的业务逻辑部分，可以修改
            if (direction) {
                switch (obj.id) {
                    case 'redpointbox3': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointbox': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointbox2': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointbox6': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointbox7': obj.style.marginTop = start + 'px'; break;
                    case 'redpointbox8': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointbox9': obj.style.marginTop = start + 'px'; break;
                }
            } else {
                switch (obj.id) {
                    case 'arrow-turn2': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointbox3': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointbox': obj.style.marginTop = start + 'px'; break;
                    case 'redpointbox2': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointbox6': obj.style.marginTop = start + 'px'; break;
                    case 'redpointbox7': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointbox8': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointbox9': obj.style.marginTop = -start + 'px'; break;
                }
            }
            // 该帧动画执行完毕后，width + 1，然后进行下一帧动画
            start++;

        };

        this.loopAIndex += 1;
    }
    /**
     * 处理动画是否循环执行
     */
    requestAnimation(boolean) {
        if (boolean) {
            this.setTimeoutGO = true;
            this.animateStatus = true;
        }
        if (this.loopAIndex > 0) {
            this.loopAFun();
        }
        if (this.setTimeoutGO) {
            setTimeout(() => this.requestAnimation(false), this.duration);

        } else {
            this.loopA = [];
            this.loopAIndex = 0;
        }
    }
    /**
     * On档双绞线脉冲闪烁
     * @memberOf FunctionComponent
     */
    twistedPairSparkle(doOrfalse: boolean): void {
        let main = document.getElementById('arrow-turn2');
        let self = this;
        self.animateStatus = doOrfalse;
        this.loop(main, 0, 48, 20, '')
    }

    /**
     * 箭头流动动画
     * @memberOf FunctionComponent
     */
    filesOflines(doOrfalse: boolean): void {
        if (doOrfalse) {
            let animateTime = 3000;
            let arrow1 = function () {
                $('.arrow1').show().stop().css({ 'left': '296px', 'top': '147px', "transform": "rotate(90deg)" }).animate({
                    left: '391px'
                }, animateTime * (95 / 134), "linear", function () {
                    $(this).css({ 'left': '391px', 'top': '147px', "transform": "rotate(180deg)" }).stop().animate({
                        top: '186px'
                    }, animateTime * (39 / 134), "linear", function () {
                        $(this).hide();
                        arrow1();
                    })
                })
            }
            let arrow2 = function () {
                $('.arrow2').show().stop().css({ 'left': '407px', 'top': '183px', "transform": "rotate(0deg)" }).animate({
                    top: '122px'
                }, animateTime * (61 / 172), "linear", function () {
                    $(this).css({ 'left': '407px', 'top': '122px', "transform": "rotate(-90deg)" }).stop().animate({
                        left: '296px'
                    }, animateTime * (111 / 172), "linear", function () {
                        $(this).hide();
                        arrow2();
                    })
                })
            }
            arrow1();
            arrow2();
        } else {
            $('.arrow1').hide().stop().css({ 'left': '296px', 'top': '149px', "transform": "rotate(90deg)" });
            $('.arrow2').hide().stop().css({ 'left': '407px', 'top': '183px' });
        }
    }
    /**
     * On档从动力电池到高压控制盒、高压控制盒到电机控制器的高压直流线内部有红色小圆点流动方向通过布尔控制，true正向，false反向
     * @memberOf FunctionComponent
     */
    redpointFlow(direction: boolean, doOrfalse: boolean): void {
        let main = document.getElementById('redpointbox');
        let main2 = document.getElementById('redpointbox2');
        let main3 = document.getElementById('redpointbox3');
        let main6 = document.getElementById('redpointbox6');
        let main7 = document.getElementById('redpointbox7');
        let self = this;
        self.animateStatus = doOrfalse;
        this.loop(main, 0, 10, 20, direction);
        this.loop(main2, 0, 10, 20, direction);
        this.loop(main3, 0, 10, 20, direction);
        this.loop(main6, 0, 10, 20, direction);
        this.loop(main7, 0, 10, 20, direction);
    }
    /**
     * On档从DCDC2Power内部有红色小圆点流动方向通过布尔控制，true正向，false反向
     * @memberOf FunctionComponent
     */
    DCDC2Power(direction: boolean, doOrfalse: boolean): void {
        let main = document.getElementById('redpointbox8');
        let main2 = document.getElementById('redpointbox9');
        let self = this;
        self.animateStatus = doOrfalse;
        this.loop(main, 0, 10, 20, direction);
        this.loop(main2, 0, 10, 20, direction);
    }

    //生命周期钩子函数
    ngOnInit() {
        this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() })
        this.dashboardService.setGearsFun('on', () => { return this.onGearFun() })
        this.gearpanelService.setStopAnimate(() => { return this.onGearFun() })
    }
    // 初始化功能页面
    InitializeFunction() {
        for (let each in this.pageTimerFunction) {
            clearTimeout(this.pageTimerFunction[each]);   //清除全局定时器
        }
        this.animateStatus = false;

        // this.redpointFlow(true,false);
        // this.circleOnhreepower(true,false);  //前面參數為方向，後滿為開啟停止
        $('#redpointbox1').hide();
        $('#redpointbox2').hide();
        $('#redpointbox3').hide();
        $('#redpointbox6').hide();
        $('#redpointbox7').hide();
        $('#redpointbox8').hide();
        $('#redpointbox9').hide();
    }
    //locl档执行方法
    lockGearFun() {
        this.InitializeFunction();
        this.filesOflines(false);
        this.twistedPairSparkle(false);
        this.switchopen()
        $('.arrow1').hide();
        $('.arrow2').hide();
    }
    //on档执行方法
    onGearFun() {
        this.InitializeFunction();
        if (this.pageTimerFunction['timer11']) {
            clearTimeout(this.pageTimerFunction['timer11'])
        }
        this.arrowTurnStatus = false;
        clearTimeout(this.pageTimerFunction['timer11']);
        this.pageTimerFunction['timer11'] = setTimeout(() => {
            this.filesOflines(true);
            this.redpointFlow(true, true);
            this.twistedPairSparkle(true);
            this.DCDC2Power(true, true);
            this.requestAnimation(true);
        }, 100);
        this.switchclose()
        // setInterval(()=>{
        //     for(let each in this.pageTimerFunction){
        //         clearTimeout(this.pageTimerFunction[each]);   //清除全局定时器
        //     }
        // },500)
    }
}

