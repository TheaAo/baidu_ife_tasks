# 任务四：定位和居中问题

[题目](http://ife.baidu.com/course/detail/id/95)

[预览](https://theaao.github.io/baidu_ife_tasks/bing_academy/task4/task4_1.html)

[代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task4)

## 任务目的

- 实践HTML/CSS布局方式
 
-深入了解position等CSS属性

最终效果图：

![任务四最终要求效果图](task_4.png)

## 笔记

### 水平居中

水平居中的实现比较简单，如果是行内元素，利用父元素的 text-align: center 可以实现。如果是块元素，在设置宽度后，将其 margin 设为 auto 即可。

这是两种 CSS 自带的简单快速的居中方式，如果想用其他方式实现水平居中，可以参考垂直居中的实现方法。

### 垂直居中

在 flexbox 出现之前，垂直居中的实现比较麻烦。但是前人的智慧是无穷的，大家依然找出了多种多样的实现居中的方法。本次任务中，我一共通过八种方式实现了垂直居中，我将它们分为三类——

#### 通过定位实现居中

所有方法的 HTML 结构如下，如有调整将单独列出。

    <div class="outer">
        <div class="inner"></div>
    </div>

##### 1.绝对定位居中

这是我最喜欢的定位方式，一次性实现水平垂直两个方向的居中，并且实现简单好记，兼容性好。

CSS 样式

    .outer {
        width: 100vw;
        height: 100vh;
        position: relative;
    }
    .inner {
        width: 50vw;
        height: 50vh;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }

[任务实现结果](https://theaao.github.io/baidu_ife_tasks/bing_academy/task4/task4_1.html)

[具体代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task4/task4_1.html)

这种方法的实现原理是：

父元素的高度 = 子元素的高度 + 子元素的边距。

在子元素高度确定的情况下，设置其 margin 为 auto，系统计算的结果就是两高度之差除以二。上面的 CSS 实现了两个方向的居中，如果只要单方向的居中，top/bottm、left/right 设置一对就行了。

##### 2.绝对定位和 margin 组合使用

这种方法的思路是：首先将元素左上角定位到父元素中心点，再利用负外边距调整元素的位置。

CSS 样式

    .outer {
        width: 100vw;
        height: 100vh;
        position: relative;
    }
    .inner {
        width: 50vw;
        height: 50vh;
        position: absolute；
        top: 50%;
        left: 50%;
        margin-left: -25vw;
        margin-top: -25vh;
    }

[任务实现结果](https://theaao.github.io/baidu_ife_tasks/bing_academy/task4/task4_5.html)

[具体代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task4/task4_5.html)

以上两种方式都必须确定元素的高度，否则方法一中元素的高度会被拉长到底，而方法二中 margin 的值则无法确定。

##### 3.绝对定位和 translate 组合使用

这种方法思路和上一种是一样的，但是可以在不知道元素的高度下实现。

CSS 样式

    .outer {
        width: 100vw;
        height: 100vh;
        position: relative;
    }
    .inner {
        width: 50vw;
        height: 50vh;
        position: absolute；
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

[任务实现结果](https://theaao.github.io/baidu_ife_tasks/bing_academy/task4/task4_6.html)

[具体代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task4/task4_6.html)

#### 通过内外边距实现居中

所谓居中，不过是元素上边框至父元素上边框距离与元素下边框至父元素下边框距离相等。

##### 1.设置子元素外边距

CSS 样式

    .outer {
        width: 100vw;
        height: 100vh;
        border: solid 1px black;
    }
    .inner {
        width: 50vw;
        height: 50vh;
        margin-top: calc((100% - 50vh) / 2);
    }

注意，这里的父元素边框一定要进行设置，不然父元素会随着子元素一起下移。如果不想要看到边框怎么办？将边框设置与背景同色即可。

[任务实现结果](https://theaao.github.io/baidu_ife_tasks/bing_academy/task4/task4_8.html)

[具体代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task4/task4_8.html)

##### 2.设置父元素内边距

CSS 样式

    .outer {
        width: 100vw;
        height: 100vh;
        padding-top: calc((100% - 50vh) / 2);
    }
    .inner {
        width: 50vw;
        height: 50vh; 
    }

[任务实现结果](https://theaao.github.io/baidu_ife_tasks/bing_academy/task4/task4_3.html)

[具体代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task4/task4_3.html)

##### 3.利用子元素内边距填充间距

CSS 样式

    .outer {
        width: 100vw;
        height: 100vh;
    }
    .inner {
        width: 50vw;
        height: 50vh; 
        padding: calc((100% - 50vh) / 2);
        background-clip: content-box;
    }    

注意，本方法中居中元素的 box-sizing 得是 content-box。

我觉得这个方法比较 tricky，不太喜欢。而且在本任务中，两个黄色 1/4 圈就不好实现了。但是也是一个比较创意的方法吧，所以列出来。

[任务实现结果](https://theaao.github.io/baidu_ife_tasks/bing_academy/task4/task4_4.html)

[具体代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task4/task4_4.html)

#### 通过改变 display 实现居中

##### 1.display: inline-block;

设置父元素行高为自身高度，再设置子元素的 vertical-align。

CSS 样式

    .outer {
        width: 100vw;
        height: 100vh;
        line-height: 100vh;
    }
    .inner {
        width: 50vw;
        height: 50vh; 
        vertical-align: middle;
    }    

[任务实现结果](https://theaao.github.io/baidu_ife_tasks/bing_academy/task4/task4_2.html)

[具体代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task4/task4_2.html)

##### 2.display: table-cell

同时修改父元素和子元素的 display, 表格内元素可以轻松实现水平垂直居中。

CSS 样式

    .outer {
        width: 100vw;
        height: 100vh;
        display: table-cell;
        vertical-align:center;
    }
    .inner {
        width: 50vw;
        height: 50vh; 
        display: inl
    }    

[任务实现结果](https://theaao.github.io/baidu_ife_tasks/bing_academy/task4/task4_7.html)

[具体代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task4/task4_7.html)

##### 3.display: flex

    .outer {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items:center;
    }
 
[任务实现结果](https://theaao.github.io/baidu_ife_tasks/bing_academy/task4/task4_9.html)

[具体代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task4/task4_9.html)

## 在线学习参考资料

[HTML和CSS高级指南之二——定位详解](http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html)

[Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)

[Get HTML & CSS Tips In Your Inbox](http://howtocenterincss.com/)
