### dashboard中传入要执行的方法

> 实现解耦合

#### import dashboard 文件 `yoururl`[用相对路径替换‘youurl’]

```
    import { DashboardService} from '‘＋yoururl’＋/components/dashboard';

```

#### 在构造器中实例化

```
    constructor(private dashboardService: DashboardService) {

    }
```
#### 调用方法

##### 所有的lock档位执行的方法都写在lockGearFun()里面，返回lockGearFun()

```
    this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() })

    

##### 所有的on档位执行的方法都写在onGearFun()里面，返回onGearFun()

```
    this.dashboardService.setGearsFun('on', () => { return this.onGearFun() })

      
```

##### 所有的车速为零执行的方法都写在setSpeedIsZeroFun()里面，返回setSpeedIsZeroFun()

```
    this.dashboardService.setGearsFun(0, () => { return this.setSpeedIsZeroFun() })

      
```  
```

#### 方法参数介绍

##### 档位
```
    /**
    * 设置仪表需要在哪个档位执行外部的什么方法
    * 
    * @param {any} gear   在哪个档位执行
    * @param {any} fun    执行什么方法
    * 
    * @memberOf DashboardService
    */
    setGearsFun(gear, fun) 
```


##### 车速

/**
     * 设置速度为零需要在哪个档位执行外部的什么方法
     * 
     * @param {number} num
     * @param {any} fun
     * 
     * @memberOf DashboardService
     */
    setSpeedIsZeroFun(num, fun) {