import { Injectable } from '@angular/core';
import { HandleErrorService } from '../handle_error';
import { Communication } from './communication';

/**
 * 
 * 代理通信的服务
 * @export
 * @class CommunicationService
 *
 */
@Injectable()
export class CommunicationService {

    // 初始化通信业务实例时,注入处理错误的服务
    communication = new Communication(this.handleErrorService);
    constructor(
        private handleErrorService: HandleErrorService,
    ) { }
    /**
     * 调用实例的初始化方法
     */
    init() {
        this.communication.init();

        // 非正常退出课程时,调用退出方法
        window.onbeforeunload = () => {
            this.communication.commit('exit');
        };
    };

    /**
     * 统一的动作入口
     * @param id 动作id /value对象的id
     * @param flag 故障是否修复
     * @param sub 是否扣分
     * @param value value对象要赋予的值
     */
    setAction({
        id,
        flag,
        sub,
        value,
    }: {
            id: string;
            flag?: any;
            sub?: any;
            value?: string;
        }): void {
        if (value === undefined) {
            // 出发动作
            this.communication.setHandle(id, flag, sub);
        } else {
            // 触发数组对象变更数值
            this.communication.setCondition(id, value, flag);
        }
    }

    /**
     * 提交数据
     * @param mode 判断提交和退出的标识
     */
    commit(mode) {

        this.communication.commit(mode);
    };
    /**
     * 设置进度点
     * @param id 进度点id
     */
    setProgress(id) {
        this.communication.setProgress(id);
    };

    /**
     * 答题
     * @param id 题目id
     * @param optionId 选项id
     */
    setQuestion(id, optionId) {
        this.communication.setQuestion(id, optionId);
    };


    // progress(item: string) {
    //     var _this = this;
    //     var progressArr = [
    //         { step: 'welcome', id: 'D001' },//进入课程
    //         { step: 'principle', id: 'D002' },//原理
    //         { step: 'structure', id: 'D003' }, //结构
    //         { step: 'IGBT', id: 'D004' }, //IGBT组件
    //         { step: 'controller', id: 'D005' }, //控制器组件
    //         { step: 'transducer', id: 'D006' },//传感器组件
    //         { step: 'test', id: 'D007' },//检测
    //         { step: 'multimeterres', id: 'D008' },//万用表res档位
    //         { step: 'diagnostic', id: 'D010' },//诊断仪
    //         { step: 'ON', id: 'D011' },//点火开关ON
    //         { step: 'brakeOn', id: 'D012' },//刹车踏板
    //         { step: 'accelerator', id: 'D013' },//拖动油门踏板
    //         { step: 'gear', id: 'D014' }]//D档和R档
    //     for (var i = 0; i < progressArr.length; i++) {
    //         (function (index) {
    //             if (item === progressArr[index].step) {
    //                 _this.setProgress(progressArr[index].id);
    //             }
    //         })(i)
    //     }
    //     console.log(item);
    // }
}
