### 设置要执行的方法

> 实现解耦合

#### import charge_switch 文件 `yoururl`[用相对路径替换‘youurl’]

```
    import { ChargeSwitchService } from '‘＋yoururl’＋/components/charge_switch';

```

#### 在构造器中实例化

```
    constructor(private chargeSwitchService: ChargeSwitchService) {

    }
```
#### 调用方法

> 所有的［充电开关关闭］执行的方法都写在chargeOffFun()里面，返回chargeOffFun()

```
    chargeOffFun(){
        
    }

    this.chargeSwitchService.setchargeFun('off', () => { return this.offChargeFun() })

     /**
     * 设置油门需要在哪个状态执行外部的什么方法
     * 
     * @param {any} status
     * @param {any} fun
     * 
     * @memberOf ChargeSwitchService
     */
    setchargeFun(status, fun) 
      
```

> 所有的［充电开关打开］ 执行的方法都写在onChargeFun()里面，返回onChargeFun()

```
    onChargeFun(){
        
    }
    this.chargeSwitchService.setchargeFun('on', () => { return this.onChargeFun() })

     /**
     * 设置油门需要在哪个状态执行外部的什么方法
     * 
     * @param {any} status
     * @param {any} fun
     * 
     * @memberOf ChargeSwitchService
     */
    setchargeFun(status, fun) 
      
```


#### 是否需要执行充电开关本身动画

##### 是否需要执行充电开关关闭本身动画
```
    // 是
   this.chargeSwitchService.chargeOffContinue=true;
    // 否
   this.chargeSwitchService.chargeOffContinue=flase;
   

```
##### 是否需要执行充电开关打开本身动画
```
    // 是
   this.chargeSwitchService.chargeOnContinue=true;
    // 否
   this.chargeSwitchService.chargeOnContinue=flase;
   

```
