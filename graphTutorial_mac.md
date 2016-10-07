
# 项目部署图文说明

### mac OX系统为例

### 1.安装nodejs 环境:
* mac上登录[官网](https://nodejs.org/en/)能自动识别你当前系统为 mac OS-X下载即可；
* 打开 终端 或 其他命令工具（如：iTerm） 使用以下指令检验是否安装成功：
```
node -v
```

### 2.安装git:
* git官网[首页](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)就有mac上安装git教程；

### 3.下载本项目：
* mac终端进入某一目录（建议进入工作目录，例如：Users/userName/mygit）后运行以下指令:
```Bash
git clone https://github.com/wteam-xq/mongoDemo
```

### 4.安装mongodb：
* mac上安装 mongodb的[教程](http://jingyan.baidu.com/article/6fb756ecbfe474241858fb3b.html)
* mac 上安装 mongodb 的个人实践步骤：
* 第一步：
	* 到官网下载tgz文件，或者直接按以下链接下载：（国内访问官网大部分时候很卡）
	* 推荐下载地址： http://downloads.mongodb.org/osx/mongodb-osx-x86_64-2.6.3.tgz
 
* 第二步：
	* 打开终端并到下载目录页，输入以下指令解压：
	* 解压缩文件：tar -zxvf mongodb-osx-x86_64-2.6.3.tgz
 
* 第三步：
	* 将解压出来的文件夹重命名并剪切到其他任意文件夹，本人将其改名为“mongodb”然后放置在“applications”文件夹下；（mac 剪切： 先把要剪切的文件按CMD+C复制，然后，到目的位置，按下OPTION+CMD+V粘粘，就会发现复制的源文件已经被剪切过来了。）
	* 在 mongodb 文件夹下创建文件夹 data
 
* 第四步：
	* 在data文件夹下创建文件夹db
	* [文件夹结构 mongodb/data/db]
 
* 第五步：指定数据存放位置
	* 终端进入mongodb/bin目录：
	* 执行命令：./mongod --dbpath /User/yourName/.../mongodb/data/db
	* (本人执行的命令： ./mongod --dbpath ../data/db)
	* //切记是 ./mongod ，网上有的说是mongod 但是我试过是错误的
 * 看到`waiting for connections on port 27017`，表示启动mongoDB server成功，启动后注意不要关闭终端
 
* 第六步：启动mongo
	* 另外打开一个终端窗口【快捷键 command+T 】，
	* 同样为了方便起见，终端再次进入"mongodb/bin"目录，运行命令"./mongo"
	* 这时可以看到mongoDB的控制台在终端上出现了，这时就可以使用任意mongoDB的命令操作mongoDB数据了，就和使用mysql命令行操作mysql一样；


### 4 在mongodb 生成新表：
成功安装、启动mongodb后就可以用指令操作数据库了:[MongoDB基本命令用法](http://www.cnblogs.com/xusir/archive/2012/12/24/2830957.html)接下来使用如下指令生成一张新表：  
```Bash
use mongoDemo

db.createCollection("users")
```   
看到如下提示说明建表成功：  
```Bash
{ "ok" : 1}
```  
### 5.安装依赖模块：
步骤1下载的node环境这个时候就派上用场了， 进入步骤3拷贝的项目文件根目录(推荐mac上的"go2shell"小工具)，打开命令行窗口;  

输入以下命令行（可能会download很久， 太久不成功可使用淘宝的npm镜像）：  
```Bash
npm install
```  

### 6.启动项目：
在工程目录下(同 步骤5 )使用以下命令行启动项目： 
```Bash
npm start
```  

### 7.浏览器访问项目：  
打开浏览器（建议 chrome）输入： localhost:3000(端口号在 bin/www 文件中可设置)  
然后就可以对数据库的users表 增、删、改、查了！
![截图11](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/11.jpg)
![截图12](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/12.jpg)
![截图13](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/13.jpg)  

生产开发中， 查看、操作数据库一般使用可视化工具， mongoDB的可视化工具推荐： 

**roboMongo**  
![截图14](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/14.jpg) 

* ps: mac 下 roboMongo 0.8.x版本无法正常显示中文bug，0.9.x中已修复；


### 常用指令：
* 启动mongodb : ./mongod --dbpath ../data/db

* 命令行查看数据库： ./mongo

### 参考文档：  
[MongoDB基本命令用法](http://www.cnblogs.com/xusir/archive/2012/12/24/2830957.html)  
[淘宝 NPM 镜像](http://npm.taobao.org/)  
[Download Robomongo](http://robomongo.org) 
