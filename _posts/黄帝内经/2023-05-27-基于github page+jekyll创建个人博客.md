---
layout: post
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

1. 卸载Jekyll：`gem uninstall jekyll`
2. 安装最新版本Jekyll：`gem install jekyll`
3. 安装3.8.7版本Jekyll：`gem install jekyll -v3.8.7`
4. 检查Jekyll是否安装成功：`ruby -v`，显示出具体版本号即为安装成功。

## 1.3 启动Jekyll服务

Jekyll环境搭建完成之后，在cmd中进入到网站项目文件夹下，输入启动命令：`jekyll server`。

若没有异常，启动服务后的默认端口为4000，浏览器地址栏输入 `127.0.0.1/4000` 即可访问。

![](/assets/img/web_skill/jekyll server.png)

常见异常如下：
- Could not find gem 'rake (~> 10. 0) x64-mingw32' in any of the gem sources listed in your Gemfile.：`bundle install`
- error:permission denied -bind(2) for 127.0.0.1:4000：[详见此处](https://segmentfault.com/q/1010000010483290)

# 2. 网站开发基础

一个网站由许多文件组成：文本内容(.html、.md等)、代码、样式表、媒体内容，等等。当你建立一个网站时，你需要将这些文件组合成一个合理的结构，并确保它们能够相互交流。

## 2.1 HTML基础

HTML不是一门编程语言，而是一种用来结构化Web网页及其内容的标记语言。HTML由一系列的元素组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对标签可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。例如，键入下面一行内容：

## 2.2 CSS基础

和HTML类似，CSS也不是真正的编程语言，甚至不是标记语言。CSS是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML元素添加样式。举例来说，以下CSS代码选择了所有的段落文字，并将它们设置为红色。

## 2.3 JavaScript基础

JavaScript是一门编程语言，可为网站添加交互功能（例如：游戏、动态样式、动画以及在按下按钮或收到表单数据时做出的响应等）。

## 2.4 Jekyll相关内容

[Jekyll官网](http://jekyllcn.com/docs/structure/)
