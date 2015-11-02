
# 项目部署图文说明

### window7 64位系统为例

### 1.安装nodejs 环境:

下载安装包（没使用vpn的话，不太建议官网下载，太慢了！）， 点击安装，安装完成后 window + R, 输入cmd + enter(回车) 后键入命令行：
```Bash
node -v
```

如出现版本号说明安装成功。
![截图0](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/0.jpg)

### 2.安装git :
  百度关键字“git 64位下载”下载， git官网同上没翻墙会很慢，不加64位关键字很容易下载到32位安装包；按照提示安装即可， 注意点：  
  
  ![截图1](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/1.jpg)
  
### 3.拷贝项目文件：
  电脑某盘新建一文件夹，名字任意（建议不要含中文）例如：myGit; 然后， 右键打开git 指令窗口：  
   ![截图2](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/2.jpg)  
   
   复制上述项目网址， 在指令窗口输入 'git clone' 空格 + 粘贴：  
   
   ![截图3](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/3.jpg)  
   
或直接粘贴以下命令行：  

   ```Bash
   git clone https://github.com/wteam-xq/mongoDemo
   ```  
   
### 4.下载安装、部署mongodb
 mongodb内容展开讲实在太多， 针对部署本项目简单流程如下：  
#### 4.1 下载mongodb安装包: [mongodb-win32-x86_64-2008plus-2.6.5.zip_免费高速下载](http://pan.baidu.com/s/1qWG5Lr2)  
  下载成功后，解压放置某盘下，例如：解压到D盘：
  ![截图4](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/4.jpg)
  
#### 4.2 配置mongodb ， 生成系统 服务并设为开机启动；  
在D:\mongodb目录下在新建data目录，在data目录下新建两个目录：db和log：
![截图5](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/5.jpg)  

进入到 bin 目录 ， shift + 右键 ->  “在此处打开命令行”：  
![截图6](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/6.jpg) 

在该命令窗口中输入以下指令（按照步骤3方法粘贴上去即可(￢_￢)）：  
```Bash
mongod -dbpath "d:\mongodb\data\db" --logpath "d:\mongodb\data\log\mongodb.log" --install --serviceName "MongoDB"

```  

成功的话（报错请以管理员身份打开命令窗口重试）， 就可以 window + R 输入 services.msc（打开服务）找到该服务：  
![截图7](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/7.jpg)   

在刚刚的命令窗口输入指令启动服务（或在上述服务视图窗口：选中目标服务->右键->属性->启动类型->自动  设置成开机启动）： 
```Bash
net start MongoDB
```  
![截图8](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/8.jpg)  
![截图9](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/9.jpg)  

#### 4.3 打开mongo shell窗口：

mongoDB服务启动话就可以在D:\mongodb\bin 目录中 shift + 右键 -> “**在此处打开命令行**”：
![截图6](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/6.jpg) 

然后输入以下指令：
```Bash
mongo
```  
看到以下窗口，说明打开成功！
![截图15](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/15.jpg)  
 
每次打开shell都得到 D:\mongodb\bin 目录多麻烦啊！

配置过java环境变量的同学都知道： 如果想在任何地方打开CMD都能访问 “mongo.exe”只要在 **系统->环境变量**中设置即可：

![截图16](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/16.jpg)  

配置好环境变量后就可以在任何目录 window + R 然后键入CMD后 输入指令“mongo”打开shell窗口了： 
![截图17](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/17.jpg)  

#### 4.4 在mongodb 生成新表：
4.2步骤成功后就可以使用mongodb shell窗口了，常见指令说明见参考文档；接下来使用如下指令生成一张新表：  
```Bash
use mongoDemo

db.createCollection("users")
```   
看到如下提示说明建表成功：  
```Bash
{ "ok" : 1}
```  
### 5.安装依赖模块：
步骤1下载的node环境这个时候就派上用场了， 进入步骤3拷贝的项目文件根目录，打开命令行窗口：  
![截图10](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/10.jpg)   
输入以下命令行（可能会download很久， 太久不成功可使用淘宝的npm镜像）：  
```Bash
npm install
```  

### 6.启动项目：
在工程目录下(同 步骤5 )使用以下命令行启动项目： 
```Bash
npm start
```  
如看到黄色警告什么的，暂时忽略吧(+﹏+)~  

### 7.浏览器访问项目：  
打开浏览器（建议 chrome）输入： localhost:3000(端口号在 bin/www 文件中可设置)  
然后就可以对数据库的users表 增、删、改、查了！
![截图11](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/11.jpg)
![截图12](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/12.jpg)
![截图13](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/13.jpg)  

生产开发中， 查看、操作数据库一般使用可视化工具， mongoDB的可视化工具推荐： 

**roboMongo**  
![截图14](https://github.com/wteam-xq/mongoDemo/blob/master/deploy_images/14.jpg)  


#### 参考文档：  
[Win7上Git安装及配置过程-baifengxian-ChinaUnix博客](http://blog.chinaunix.net/uid-25806493-id-3319781.html)  
[mongoDB——安装和启动](http://blog.csdn.net/liusong0605/article/details/10574863)  
[MongoDB基本命令用](http://www.cnblogs.com/xusir/archive/2012/12/24/2830957.html)  
[淘宝 NPM 镜像](http://npm.taobao.org/)  
[Download Robomongo](http://robomongo.org/download.html)  
