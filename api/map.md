<!--
* Author:zhuqiang
* CreateDate:2019-06-11
-->
# 前端资料整理

***************************************
> 本文使用 [markdown](./markdown.md) 编写

## 生产效率
### 模块化打包

## 前端框架
### Vue


## Web of Thing (WoT)

## 当前
### react / vue 
### axios
### wot
### node
### docker

## 常用代码整理
1. [CSS](./css/常用样式.md)

## 解决方案
1. [移动web开发](./解决方案/移动web开发方案.md)
1. [微信小程序开发](./解决方案/微信小程序开发.md)
1. [浏览器自动化测试](./解决方案/浏览器自动化测试.md)
1. [混合应用](./解决方案/混合应用解决方案.md)


## 服务器
***************************************
1. [nginx](./tool/nginx/index.md) 作为代理/反向代理服务器
2. tomcat
3. IIS
4. Node HTTP
	2. Express
	3. KOA
		1. EGG

## 网络代理
***************************************
1. Charles.exe 代理服务、虚拟域名、http转http
1. mitmproxy  抓包工具、代理服务、监控请求、安装简单
	1. [下载安装](https://mitmproxy.org/)
	2. 启动代理服务器 mitmweb --listen-port 127.0.0.1 6666
	3. 配置浏览器代理 127.0.0.1 6666
	3. 打开浏览器 [选择安装对应CA证书](http://mitm.it/)

## 持续集成
1. Travis CI
Travis CI 只支持 Github

## 版本控制
1. vss
1. svg
1. [git](./tool/git.md) [常见问题](./tool/git.md)


### 常用命令
#### 1. 克隆
git clone https://github.com/twbs/bootstrap.git
#### 2. 克隆指定分支
git clone -b v3-dev-xmr https://github.com/twbs/bootstrap.git


## 前端
### 模块加载 
#### requireJS：amd规范 
关键字 define、requirejs、require（与node中的reuqire关键字不一样）
#### SystemJs 提供通用的模块导入途径，支持传统模块和ES6的模块。
> SystemJs有两个版本，6.x^版本是在浏览器中使用的，0.21版本的是在浏览器和node环境中使用的，两者的使用方式不同。
#### LABjs

### 纯css库
### loaders.css 加载动画
### annimals.css 常用动画

### web 控件
#### 代码编辑器 monaco editor ，VSCODE 使用
#### web模拟终端 XTERM.JS ，VSCODE 使用
#### jqgrid [国内文档](www.mn886.com)
#### jsonEditor JSON 编辑器


### 工具库
#### ramda 纯函数工具库，柯里化
#### lodash 纯函数工具库，柯里化
#### rxjs 响应式编程、纯函数
#### 语法检查
##### Esprima.js 是一个用于对 JS 代码做词法或者语法分析的工具

### 前端框架
#### vue
#### angular
##### Angular1 和 Angular2 完全是两套不同框架
##### Angular2使用Typescript开发
#### react
#### rax 淘宝推出的类似于react的框架
#### svelte Svelte 将你的模板变成快速、轻量级的 vanilla JavaScript，无需运行时
#### singleSpa 前端微服务
##### singleSpa
> single-spa是一个在前端应用程序中将多个javascript应用集合在一起的框架。主要充当包装器的角色。

## SVELTE 打包应用

### UI框架
#### 基于jquery
##### layer-ui
##### jquery-ui
##### bootstrap

#### 基于VUE
#### Bootstrap-vue
#### Vue-Element-UI
#### Vuetifyjs
#### iview

#### 基于react
##### [Ant Design](https://ant.design/docs/react/introduce-cn)
antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。
##### [material-ui](https://material-ui.com/zh/getting-started/installati)
##### bootstrap-react
##### [semantic-ui](https://semantic-ui.com/)

#### 独立的UI框架
#### [toast-ui](https://ui.toast.com/)
包含以下独立组件：扩展性较强
1. App Loader 加载APP
2. Auto Complete 自动完成
3. Color Picker 颜色选择
4. Context Menu 右键菜单（独立组件:推荐）
5. Date Picker 日期选择
6. Pagination 分页栏
7. Rolling 轮播组件
8. Select Box 下拉选择
9. Time Picker 时间线
10. Tree 树

### Web控件（开源）
#### 表格/grid 
##### jqGrid jquery
##### [toast-ui.grid](https://ui.toast.com/tui-grid/) 基于VUE/REACT
#### 图表/chart
##### echart
##### hchart
##### [toast-ui.chart](https://ui.toast.com/tui-chart/)
#### 颜色选择/color
##### [react-color](http://casesandberg.github.io/react-color/)
##### [tui-color-picker](https://ui.toast.com/tui-color-picker/)
#### 日历待办/calendar
##### [tui-calendar](https://ui.toast.com/tui-calendar/) 
#### 富文本编辑器
##### ueditor 百度
##### kindeditor
#### Markdown编辑器/editor
##### [tui-editor](https://ui.toast.com/tui-editor/)
##### mdeditor
#### 代码编辑器
##### codemirror 推荐
##### naco 来源于ms-vscode
#### 图片编辑器
##### [图片编辑](https://ui.toast.com/tui-image-editor/)
#### 弹出层
##### layer 
#### 树
##### ztree
##### [tui-tree](https://ui.toast.com/tui-tree/)

### ajax
#### mock.js 接口模拟

### typescript
1. js超集，最终执行时会编译为js代码
2. 强类型，编译阶段就可发现大部分问题
3. 缺点：所有引入的模块都需要指定类型，使用typescript编写或者添加d.ts文件

### css 预编译
scss 一般用于需要实时编译的项目
#### less 引入less.js后可直接在浏览器中运行
#### scss 据说效率较高，但安装较less复杂
```
Install from mirror in China
npm install -g mirror-config-china --registry=http://registry.npm.taobao.org
npm install node-sass
```

### html模板引擎
#### Jade() [官网](http://jade-lang.com/) Express 默认引擎 层级靠缩进识别
#### pug(.pug) 原名jade（因商标问题改名） Express 默认引擎 层级靠缩进识别
[中文API](https://pug.bootcss.com/api/getting-started.html)
[html2pug 在线转换](https://html2pug.com/)
#### Handlebars(.hbs) 
#### nunjucks(.ng,.tpl) egg.js默认引擎 egg-view-nunjucks 
#### vue-ssr node vue服务端渲染
#### 浏览器存储
##### Cookie
##### LocalStorage
##### SessionStorages
##### IndexedDB
##### WebSQL
### js 模板引擎
#### art-template

## 前端可视化
### 图表控件:canvas,js
### ThreeJS:webGL
### D3.js:svg
### 布局工具
https://github.com/jaweii/Vue-Layout
https://github.com/L-Chris/vue-design
https://github.com/fireyy/vue-page-designer
https://github.com/OXOYO/X-Page-Editor-Vue
### 流程图
#### mxgraph
#### jsplumb

## Node 
### 库
#### glob 文件检索
#### lovell/sharp 图片处理
#### cross-env 定义环境变量 EGG_SERVER_ENV=prod
#### npm-check-updates 检查依赖更新
```js
npm i npm-check-updates -g //全局安装
ncu //检查更新
ncu -u //检查更新，并更新 package.json
npm i/yarn install
```
### 静态Web服务
#### serve 

### 桌面程序
#### electron
开始程序指定一个js文件路径，创建窗体等工作需要在js中实现
#### nw.js(原:node-webkit)
开始程序指定一个html路径，对新手比较友好，但扩展性不如 electron
#### carlo
google开发，可实现部分 electron 功能，调用系统自身的chrome浏览器
#### pkg
将 nodejs 的脚本文件打包成 控制台程序

### 移动端
#### HTML5+ D-Cloud 混合应用开发

### 测试工具
#### js UnitTest
##### qunit 

### window 服务

### web服务端框架
#### express
#### koa
#### egg 阿里主导，基于koa企业级开发框架
#### http
### 打包工具
#### browserify
```
yarn add browserify
npx browserify lib/browser.js -o dist/html-lexer.js
```
#### terser
压缩工具
```
yarn app terser
npx terser [input files] [options]
```

#### Grunt
#### rollup
#### glup
全局安装
```cmd
全局安装
npm install --global gulp
作为项目的开发依赖(devDependencies)安装
npm install --save-dev gulp

```
```
var gulp = require('gulp');
 
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
```
在项目根目录下创建一个名为glupfile.js的文件
运行gulp
#### webpack

### 常见问题
* 'NODE_ENV' 不是内部或外部命令，也不是可运行的程序 或批处理文件  
原因：window 系统兼容问题   
解决方案：安装 cross-env ，再命令的前面加上 cross-env NODE_ENV=...

### 包管理工具
#### npm node自带的包管理工具
#### yarn 用来替代npm 解决了重复下包的问题
#### brower 前端包管理工具


## 数据库
### mysql
### oracle
### sqlserver
### sequelize node.js 的 ORM

## 开发工具
### vscode 基于 electron
### eclipse
### vs2013
### HBuilder 基于 eclipse

## 包管理工具
### npm [npm](./node/npm.md) 
### yarn

## 架构
### MVC
### MVP
### MVVM
#### React
#### Angular
#### Vue
##### vue-router 路由
##### nuxt 基于 vue 的web服务
##### vue-ssr 服务端渲染
## 接口规范
[接口规范](API设计风格.md)
### RESTful
### GraphQL
### RPC

## Web整站项目
### Raneto 基于MD文档目录的web服务，无数据库，多用户登陆（确定：中文搜索似乎还有问题）
### Admin
#### VueAdmin
##### Eelement-Admin 基于Eelement-UI
###### D2Admin 基于Eelement-UI
#### Bootstrap
##### [Bootstrap3](lib/bootstrap/bootstrap3.md)
##### gentelella 基于Bootstrap
##### AdminLTE 基于Bootstrap
##### blur-admin 基于Bootstrap+Angular
##### Bootstrap Magic 在线主题编辑

## 移动端UI框架
### framework7 混合应用/整套解决方案 最新版2019年10月27日发布
### MUI DCloud 混合应用
### SUI 混合应用 淘宝国际
### frozenui 手机QQ
### weui 微信
### BootstrapVue Bootstrap 移动端玩网站
### Amaza UI	 移动端玩网站
## 移动APP 开发框架
### Flutter google APP 开发框架


## [在线工具](在线工具.md)（免费）
### 流程图
#### [draw.io](https://www.draw.io/)
### 图片编辑器
#### [图片编辑](https://ui.toast.com/tui-image-editor/)

## 在线工具（收费/部分免费）
### [在线PS](https://www.gaoding.com/) 

## Web控件（商业/社区版）
### 打印控件
#### lodop

## chrome 插件
### [插件英雄榜](https://zhaoolee.com/ChromeAppHeroes/) 

## 在线工具


## 微信小程序
### weUI 官方demo
### 模拟 https 使用 Charles.exe 将http服务转为https服务，并启动代理服务器将指定域名代理到本地

## 项目实例
### .net 项目
#### webservice oracle 的VS项目模板，程序端无需安装 oracle
[webservice oracle](./code/vs/WebSite_WebService_oracle.zip)
#### 窗口程序 oracle 的VS项目模板，程序端无需安装 oracle
[webservice oracle](./code/vs/OracleTool.zip)
### node项目
#### 基于egg的门户网站
[webservice oracle](./code/node/www.kykjsoft.com.zip)
### web项目静态模板
[前端资源模板](./code/html5-boilerplate_v7.3.0.zip)

## 开发效率
### web前端
#### mock.js 接口模拟
### typescript
### css预编译
### Emmet 
### [http 命令行工具](https://httpie.org/)

## 其他开源项目
### ffmpeg 视频处理

## 开发模式
### 移动端加速 谷歌 google AMP & 百度 baidu MIP
按其规则编写html，实现快速打开页面，规则包括：必须使用指定的js、不允许
外联style、只能使用其提供的基本控件等..从而保证移动打开的页面高效，
本质上是一种提高性能的开发规范，便于搜索引擎集成，并不能适用所有网页，其推荐做法是，在原页面中
关联AMP或MIP页面，手机通过搜索引擎访问该页面时，跳转到其定义的AMP/MIP页面，
同理PC通过搜索引擎访问不受影响

## 开源软件
### PDF 工具 Calibre

## 正则
### javascript
```js
//定义

```

## 物联网

### node-red   IBM Nodejs 可视化流程编排
### Wot



## 杂项
### windows-shortcuts 创建快捷方式 window
### 虚拟机
+ VMWare Fusion，Oracle VirtualBox, AWS, OpenStack
+ Vagrant



### 浏览器端js能力
#### 原生js
##### webwork HTML5
##### HTML5 Intersection Observer  判断元素是否可见
> IntersectionObserver polyfill:intersection-observer.js
#### 第三方支持
##### fingerprintjs 浏览器指纹

## 其他
1. 加载中效果定制 [spin.js](http://spin.js.org/)
2. 数学公式渲染[MathJax.js](https://www.mathjax.org/)
2. excel[excel4node](https://www.npmjs.com/package/excel4node)



## 词库

一类

html  
js css
image canvas svg 3d

http https websocket

二类
html5 html/css3
js es6 es2015 typescript 
css less/scss 
dom jquery
canvas zrender
canvas/3d three
svg d3





名词库
vue angular react
promise await/async
npm yarn bower nuget
git svn
github coding
radom loadsh rxjs
svg canvas webgl
echarts d3 threejs
markdown yaml
webpack gurnt gulp
requirejs seajs commonjs typescript
less sass/scss
html5 css3
promise prototype
dom js es3 es5/es2015 es6 es2016
json xml html xhtml
zrender egg
express 
serve nuxt
tomcat iis nginx
ssh
Jenkins
Jekyll、Hugo、Hexo
apistyle rpc rest restfull graphql

select2 ztree jqgrid

Headlessbrowser selenium PhantomJS
karma 

REPL — 交互式解释器环境。
arguments 参数（实参）
parameters 参数（形参）
Arity 形参数量
ad hoc polymorphism 特定多态 通过不同的输入值让一个函数重载拥有不同的行为的技巧