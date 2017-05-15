
# 任务三：三栏式布局

[题目](http://ife.baidu.com/course/detail/id/94)

[预览](https://theaao.github.io/baidu_ife_tasks/bing_academy/task3/task3.html)

[代码](https://github.com/TheaAo/baidu_ife_tasks/tree/master/bing_academy/task3)

## 任务目标

- 掌握HTML/CSS布局的概念

- 掌握盒模型的概念

- 掌握position与float的概念以及在布局时的用法

## 笔记

任务主要需要考虑的任务有两点：

1. 如何将三行水平并列放置？

2. 中间栏的弹性变化如何实现？

### 我的解决方法

问题一：

使用 inline-block 或 float。

两种方式的实现都不复杂，但需要注意——

元素的 display 设置成 inline-block 后彼此之间会有值大约为几像素的小间距，具体是多少各个浏览器之间可能会有细微差别。这部分间距不可以通过设置 margin 为 0 消除，在计算中栏宽度时需要将这部分间距也考虑进去。

而设置为浮动的元素则部分地脱离了其父元素，如果父元素除了浮动元素没有其他的子元素，则会包裹不住浮动子元素。最简单的解决方法是设置父元素的 overflow 值为 auto。还有其他方法，在父元素的最后面增加一个元素（或利用伪元素），将该元素的 clear 值设为 both(或按照实际情况设为 left 或 right).更多清除浮动的方法见参考资料。

通过绝对定位也可以实现三栏的并列放置，绝对定位的元素完全地脱离了文档流，没办法实现父元素对它们的包裹，不满足任务要求，所以不予采用。

问题二：

使用 calc 函数，用整行宽度减去左右栏加栏间距的宽度。

[MDN calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)

浏览器会自动计算中栏的宽度，但是 IE9 以下不支持该函数。

所以我的办法优点是实现简单，缺点是在低版本 IE 中会遇到兼容性问题。三栏式布局是一种很典型的布局方式，所以也已经有了经典的解决方法。

### 圣杯式布局和双飞翼布局

这两种方法也是通过浮动实现三栏的水平并列放置，其 HTML 页面结构是将中间栏放在最前，后面依次是左栏和右栏。

#### 圣杯式布局

通过设置三栏的父元素的 padding 为后面两栏预留空间。然后设置左右栏的定位方式为 relative,在通过设置它们的 margin 和 left/right 为负值，对它们的位置进行调整。

[圣杯式布局预览](https://theaao.github.io/baidu_ife_tasks/bing_academy/task3/shengbei/)
[圣杯式布局代码](https://github.com/TheaAo/baidu_ife_tasks/tree/master/bing_academy/task3/shengbei)

#### 双飞翼布局

给中间栏单独加了一个外包装，浮动它。然后设置中间栏的外边距为左右两栏预留空间，再通过设置左右两栏的外边距将其摆好。与圣杯式布局相比，多了 HTML 结构，但是无需使用相对定位。

[双飞翼布局预览](https://theaao.github.io/baidu_ife_tasks/bing_academy/task3/shuangfeiyi)
[双飞翼布局代码](https://github.com/TheaAo/baidu_ife_tasks/tree/master/bing_academy/task3/shuangfeiyi)

## 参考资料

[MDN position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

[MDN float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

[Learn CSS positioning in ten steps](http://www.barelyfitz.com/screencast/html-training/css/positioning/)

[清除浮动](http://zh.learnlayout.com/clearfix.html)