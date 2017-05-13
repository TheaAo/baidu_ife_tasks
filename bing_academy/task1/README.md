# 任务一：零基础HTML编码

[题目](http://ife.baidu.com/course/detail/id/90)
[预览](https://theaao.github.io/baidu_ife_tasks/bing_academy/task1/task1.html)
[代码](https://github.com/TheaAo/baidu_ife_tasks/blob/master/bing_academy/task1/task1.html)

## 任务目的

- 了解HTML的定义、概念、发展简史
- 掌握常用HTML标签的含义、用法
- 能够基于设计稿来合理规划HTML文档结构
- 理解语义化，合理地使用HTML标签来构建页面

## 在线学习参考资料

- [Web相关名词通俗解释](https://www.zhihu.com/question/22689579)
- [MDN HTML入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction)
- [慕课HTML+CSS基础教程视频](http://www.imooc.com/learn/9)

## 笔记

### 1. 表格

|表格标签|表格标签|
|:--------:|:---:|
|table|caption|
|colgroup|col|
|thead|tfoot|
|tbody|th|
|tr|td|

#### caption

表格的标题，通常为\<table\>的第一个子元素。注意和\<figcaption\>区分，\<figure\>代表一段独立的引用单元，\<figcaption\> 是对这段单元的说明。

#### colgroup

允许内容：

如果有 span 属性，那么它不包含任何内容，是一个空元素。
如果没有 span 属性，它可以包含零个及以上个数的 \<col\> 元素。

span 属性：

正整数值，表示其横跨的列数。

#### col

通常位于 colgroup 元素内，是一个空元素。span 属性取值和意义同 colgroup。

#### 结构化表格

利用 thead、tbody、tfoot、th 结构化表格。th 与 td 仅是语义上的区别，表现上区别不大。

#### 表格的 accessibility

合理设置属性能够帮助屏幕阅读器读取表格，增加表格的易用性。

设置 th 的 scope 和 id, 设置表格单元的 headers 属性值为对应表头的 id.

### 2. 表单

|标签|属性|
|:---|:---|
|meter|min、max、value、high、low、optimum、form|
|progress|max、value|
|output|for、form、name|
|textarea|form、cols、rows、maxlength、minlength、name、autocomplete、autofocus、readonly、disabled、required、placeholder、spellcheck、wrap、selectionDirection、selectionStart、selectionEnd|
|select|form、name、size、mutiple、autofocus、required、disabled|
|datalist|公用的全局属性|
|optgroup|disabled、label(必须)|
|option|disabled、value、label、selected|
|button|name、type、value、autofocus、disabled、form、formaction、formenctype、formnovalidate、formtarget|
|input|[属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input)|
|label|for、form、accesskey|
|fieldset|disabled、form、name|
|legend|只有全局属性|
|form|accept-charset、name、autocomplete、enctype、action、method、target、novalidate|

type="radio" 的 input 元素，不同选项的 name 值相同，id 值不同才能实现单选效果。


### 3. \<meta\> 标签

这是一个空元素，全局属性 name 在该元素中具有特殊语义。只记录了 name 和 content 属性相关的笔记，更多关于该标签的信息见 [\<meta\> - HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)

####content####

基于内容，该属性为 http-equiv 或 name 属性提供了与其相关的值的定义。

####name####

This document-level metadata name is associated with a value, contained by the content attribute. The possible values for the name element are, with their associated value, stored via the content attribute:

- author，就是这个文档的作者名称，可以用自由的格式去定义；
- description，包括一个关于页面内容的缩略而精准的描述。Firefox 和 Opera 浏览器使用这个描述作为收藏时的页面默认描述；
- generator, 自由格式，包含生成该页面的软件标识符；
- keywords, 用逗号分隔的字符串，页面关键词；
- viewport, 用于移动设备，给出视口初始值的线索。

    可取的值：

    |Value |可能值 |描述|
    |:-----|:--------|:------|
    |width|一个正整数或者字符串 device-width|defines the width, in pixels, of the viewport|
    |height|一个正整数或者字符串 device-height|defines the height, in pixels, of the viewport|
    |initial-scale|一个0.0 到10.0之间的正数|defines the ratio between the device width (device-width in portrait mode or device-height in landscape mode) and the viewport size.|
    |maximum-scale|一个0.0 到10.0之间的正数|defines the maximum value of the zoom; it must be greater or equal to the minimum-scale or the behavior is indeterminate.|
    |minimum-scale|一个0.0 到10.0之间的正数|defines the minimum value of the zoom; it must be smaller or equal to the maximum-scale or the behavior is indeterminate.|
    |user-scalable|一个布尔值（yes 或者no）|If set to no, the user is not able to zoom in the webpage. Default value is yes.|

[meta-name](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#attr-name)


