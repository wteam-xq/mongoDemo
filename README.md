
###链接mongo数据库demo(node后台开发模板)
* 技术点： mongodb express bootstrap jquery

### 图文部署讲解
* [传送门](https://github.com/wteam-xq/mongoDemo/blob/master/graphTutorial.md)

#### 本地部署（win7 64bit为例）
* 安装nodeJs
* 安装mongodb（最好配置成window服务），生成mongoDemo数据库、生成users表，以下是相关教程：
  * 手动安装mongodb, 下载地址： [mongodb下载](http://pan.baidu.com/s/1qWG5Lr2)
  * mongodb 配置以及设置成windows服务：[配置mongodb](http://blog.csdn.net/liusong0605/article/details/10574863)
  * mongodb shell 控制台使用: [mongodb 基本命令](http://www.cnblogs.com/xusir/archive/2012/12/24/2830957.html)
```Bash
mongo
MongoDB shell version: 2.6.5
connecting to: test

use mongoDemo
switched to db mongoDemo

db.createCollection("users")
{ "ok" : 1}

```

* 进入工程目录 cmd: npm install 安装node_modules的依赖模块
```Bash
npm install
```

* 工程目录下 npm start启动项目
```Bash
npm start
```
```Bash
node-dev bin/www
```

* 打开浏览器（建议 chrome）输入： `localhost:300`(端口号在 bin/www 文件中设置)