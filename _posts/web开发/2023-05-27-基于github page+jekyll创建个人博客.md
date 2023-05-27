---
layout: web_skill_post
title: 基于github page+jekyll创建个人博客
category: Github
tags: [Github pages, Jekyll]
---

首先，为什么要创建个人博客？正如做每一件事情一样，在做之前都会有一个原因。或是想要记录一些内容，或是个人的兴趣爱好，亦或是其他，whatever，总之，要清楚自己的目的。

传统形式的个人博客（如新浪博客等），或是新形式的博客（如，微信公众号等），可能无法满足每个人的个性化需要。因而就产生了


# 1. 搭建工作环境

## 1.1 安装Ruby

关于这方面的内容，网络上已有大量全面的教程，这里不再赘述。详见[Windows系统下的Ruby安装教程](https://www.runoob.com/ruby/ruby-installation-windows.html)。

## 1.2 安装Jekyll

安装Jekyll需要在cmd中完成。打开`cmd.exe`(命令提示符)，输入常用命令，如下：

   - 卸载Jekyll：`gem uninstall jekyll`
   - 安装最新版本Jekyll：`gem install jekyll`
   - 安装3.8.7版本Jekyll：`gem install jekyll -v3.8.7`
   - 检查Jekyll是否安装成功：`ruby -v`，显示出具体版本号即为安装成功。

## 1.3 启动Jekyll服务

Jekyll环境搭建完成之后，在cmd中进入到网站项目文件夹（以本站为例，即为zhengzj-web.github.io文件夹）下，输入启动命令：`jekyll server`。

若没有异常，启动服务后的默认端口为4000，浏览器地址栏输入 `127.0.0.1/4000` 即可访问。

常见异常如下：
