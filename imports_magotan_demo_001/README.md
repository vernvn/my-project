## 进口迈腾demo
### Quick start
**Make sure you have Node version  >= 7.9  and NPM >= 4**


推荐用yarn管理node包，辅助用cnpm
推荐用yarn运行脚本，辅助用npm
#### yarn 
**如果是window用户，**

- 请先安装[Python2.7.13](https://www.python.org/getit/)
> 注意在安装python过程中，在选择安装组件的一步时，勾上所有的组件：
 ![python 安装图](http://www.liaoxuefeng.com/files/attachments/0014222393965540081463bf8a9499094bdda24b6fdf2d6000)
 
 特别要注意选上pip和Add python.exe to Path，下拉框选择第一个选项就行，
 然后一路点“Next”即可完成安装。
- [yarn 本地安装](https://yarnpkg.com/zh-Hans/docs/install#windows-tab)
- yarn安装node包： 
> yarn

##### 启动项目

> yarn start

##### 添加node包
[yarn 相关的cli资料](https://yarnpkg.com/zh-Hans/docs/cli/)


### principle  combine to master

flyIn.animation.ts 中的动画需copy到master的该文件中

assets中的image add to master 

app.component.html add  flowing code
```
<principle-page *ngIf="appService.state.current.id"></principle-page>

```
component文件夹 add  promp组件  arrow组件

button组件和image组件   对html与ts文件进行针对该项目的部分添加

针对app.service请求数据的getAppConfigmock方法新增参数，不同配置文件分别获取，

appservice.ts  go2page方法去除定时器





### principle  combine to master

flyIn.animation.ts 中的动画需copy到master的该文件中

assets中的image add to master 

app.component.html add  flowing code
```
<principle-page *ngIf="appService.state.current.id"></principle-page>

```
component文件夹 add  promp组件  arrow组件

button组件和image组件   对html与ts文件进行针对该项目的部分添加

针对app.service请求数据的getAppConfigmock方法新增参数，不同配置文件分别获取，

appservice.ts  go2page方法去除定时器






