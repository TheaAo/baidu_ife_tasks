# 任务六：通过HTML及CSS模拟报纸排版

[题目](http://ife.baidu.com/course/detail/id/99)

[预览](https://theaao.github.io/baidu_ife_tasks/xiaowei_academy/task6/task6_index.html)

[代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/xiaowei_academy/task6)

## 目的及描述


- 深入掌握CSS中的字体、背景、颜色等属性的设置

- 进一步练习CSS布局

- 任务描述

    + 参考 PDS设计稿（点击下载），实现页面开发，要求实现效果与 样例（点击查看） 基本一致

    + 页面宽度固定（定宽）

最终任务要求效果图

![报纸排版效果图](images/task_1_6_2.jpg)

## 笔记

主要是一些以为自己知道了其实理解有偏差的 CSS 属性。

将块元素的行高设为块元素的高度，则块元素中的行内元素会自动垂直居中。如果需要的是将行内元素置底呢？可以使用 vertical-align.

#### 1.vertical-align

**属性适用对象**： inline or table-cell box，也适用于伪元素 ::first-letter 和 first-line, 只有块元素才有此二伪元素。

**属性值**：

baseline/sub/super —— 指的是元素 baseline 相对其父元素 baseline 的位置

text-top/text-bottom —— 指的是元素相对父元素内文字的顶端和低端对齐

middle —— 将元素中部与父元素内小写 x 的中线对齐。最终效果会比 baseline 偏下，比 sub 偏上。

\<length\>/\<percent\> —— 元素基线相对父元素基线的位置，正在上，负在下。百分比的基数是行高。

top/bottom —— 元素及其后代的顶端或低端与整行的顶端或低端对齐。

**PS**：

虽然都是对齐，text-align 的使用对象却是块级元素，但是是对块元素的行内内容元素进行对齐。

#### 2.::first-letter 

此伪元素可以设置内外边距，可看做是一个 inline-block 元素吧。

#### 3.text-decoration

text-decoration 会被后代元素继承而且不能被禁用。

#### 4.opacity

opacity 的值会被用到整个元素上，意味着其后代元素也将拥有相同的透明度，即使后代元素没有继承其值。如果不想后代元素也变得透明，可以使用设置 rgba() 代替 opacity.

#### 5.text-indent 

只适用于块级元素。值为百分比时，百分比基数为块级元素的宽度。

#### 6.利用 CSS 画小三角形

    .triangle-up {          // 向上的小三角形
        width: 16px;
        height: 16px;
        border: solid 8px #11456b;
        border-left-color: #eeedd6;
        border-top-color: #eeedd6;
        border-right-color: #eeedd6;
        float: left;
        margin-right: 10px;
    }

要画向左向右向下的小三角形，设置对应三边的颜色就好了。

## 在线资料

[MDN HTML入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction)

[MDN CSS入门教程](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started)

[慕课网：从 psd 到 html](http://www.imooc.com/learn/668)

[慕课网：前端工程师必备的PS技能——切图篇](http://www.imooc.com/learn/506: http://ife.baidu.com/course/detail/id/99)
