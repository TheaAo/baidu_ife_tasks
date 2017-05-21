# 任务二：零基础HTML及CSS编码（一）

[题目](http://ife.baidu.com/course/detail/id/92)

[预览](https://theaao.github.io/baidu_ife_tasks/xiaowei_academy/task2/task2.html)

[代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/xiaowei_academy/task2/task2.html)

## 任务目的

- 针对设计稿样式进行合理的HTML架构，包括以下但不限于：

    * 掌握常用HTML标签的含义、用法
    * 能够基于设计稿来合理规划HTML文档结构
    * 理解语义化，合理地使用HTML标签来构建页面

- 掌握基本的CSS编码，包括以下但不限于：

    * 了解CSS的定义、概念、发展简史
    * 掌握CSS选择器的含义和用法
    * 实践并掌握CSS的颜色、字体、背景、边框、盒模型、简单布局等样式的定义方式

## 笔记

### rem

相对单位，相对根节点而言。如果 html 设置 font-size 为 10px, 那么 1rem 等于 10px。由于默认情况下的 font-size 一般为 16px, 所以默认的 1rem 等于 16px.

注意：

CSS中的像素为逻辑像素，与屏幕实际像素并不一定等同。但由于 rem 是基于同一根节点，因此被设置的各元素是等比例的。

### 阴影

块阴影 box-shadow

文本阴影 text-shadow

### vertical-align

除了常用的水平方向上的设置 text-align 的 left/right/center/justify，还可以进行垂直方向上的对齐设置 vertical-align, 该属性可取值有

    baseline|sub|super|text-top|text-bottom|
    middle|<length>|<percentage>|top|bottom

其中，大部分值都是相对被设置元素的父元素，而 top|bottom，是相对被设置元素所在行。数字和百分比值设置的是基线位置相对父元素基线位置的移动，百分比值的基数为行高。

注意：

vertical-align 的设置对象的要被对齐的元素而不是他们的父元素。

### list 的样式设置

- list-style-type 设置点的样式；

- list-style-position 设置点的位置；

- 设置 ul/li 的 color 属性可以设置点的颜色，用 span 包裹条目内容可再对内容进行另外的样式设置。

### form 控件的样式设置

综合利用 CSS 属性选择器及伪类和伪元素。

在最后进行表单的样式设置时，在设置表单条目的对齐方式上卡了一下。最终添加了两个类，将表单条目分为两个 inline-block 的部分，分别进行对齐设置，得以解决。翻阅其他同学的笔记，发现其他有意思的方法：

1. 利用浮动
2. 利用绝对定位
3. 在 form 里利用 table 定位
4. 将元素 display 设置为 tablerow

以上的方法都是将表单条目的说明和输入部分分离，分别进行对齐设置；只是在如何使两部分同处一行的实现方式上有不同。浮动、绝对定位和改变元素的 display 值都是可取的，但直接使用 table 元素进行定位似乎有违语义化的要求，我认为不可取。

需要注意的是，浮动和绝对定位都会使元素脱离文档流，导致父元素包裹不住。需要做一定处理。


## 在线学习参考资料

[MDN HTML 入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction)

[MDN CSS 入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started)

[慕课 HTML+CSS 基础教程视频](http://www.imooc.com/learn/9)
