import { Component } from '@angular/core';
import {ObdscanService} from './obdscan.service';
declare var $:any;
@Component({
  selector: 'obdscan',
  styleUrls: [ './obdscan.component.scss' ],
  templateUrl: './obdscan.component.html',
  providers: []
})
/**
 * 处理错误的组件
 */

export class ObdscanComponent {
   obdscanServiceZdata=this.obdscanService.Zdata;
   constructor(public obdscanService:ObdscanService){

   }
        ngOnInit(): void {
        // setInterval(() => {
        //     console.log(this.obdscanService.Mout.Out1Mot_Gear_Signal_x_x);
            
        // }, 1000);
    }


        obdscan() {
           this.obdscanService.Zdata.obdscan();
        };
        //动作测试弹出层的拖动
        ationTestPop() {
           this.obdscanService.Zdata.ationTestPop();
      

        };
        //关闭动作测试里面的弹出层
        colsedPoplayer(name){
           this.obdscanService.Zdata.colsedPoplayer(name);
           
        };
        //关闭诊断仪
        closedobdscan() {
           this.obdscanService.Zdata.closedobdscan();
           
        };


        /*诊断仪的菜单操作*/
        changeTemplate(type, page,clear,whicha,personTest) {
          // console.log(11);
          
           this.obdscanService.Zdata. changeTemplate(type, page,clear,whicha,personTest);
           
        };

        //诊断仪的返回
        obdscanReturn() {
           this.obdscanService.Zdata.obdscanReturn();
         
        };

        //诊断仪的加电
        obdscanPower() {
           this.obdscanService.Zdata.obdscanPower();
           
        };
        actionTest(type,layer) {
           this.obdscanService.Zdata.actionTest(type,layer);
           
        };
        //设置Service参数
         setServiceData(){
           this.obdscanService.Zdata.setServiceData();
           

        };
        //弹出层调节器
        leftAdjust(tmep:any,cs:any){
           this.obdscanService.Zdata.leftAdjust(tmep,cs);
           
        };
        rightAdjust(temp,cs){
           this.obdscanService.Zdata.rightAdjust(temp,cs);
           
        };




        adjustData(num) {
           this.obdscanService.Zdata.adjustData(num);
           
        };

        switchBtn(type,str){
           this.obdscanService.Zdata.switchBtn(type,str);
           
        };
}
function changeTemplate(){
  // console
}