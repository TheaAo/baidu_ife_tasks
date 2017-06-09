/*
* @Author: Thea Ao
* @Date:   2017-06-09 15:08:08
* @Last Modified by:   Thea Ao
* @Last Modified time: 2017-06-09 15:09:27
*/

'use strict';
// 获取DOM节点
var btnLeftIn = document.getElementById('ins-left');
var btnLeftOut = document.getElementById('del-left');
var btnRightIn = document.getElementById('ins-right');
var btnRightOut = document.getElementById('del-right');
var btnClearAll = document.getElementById('clear-all');
var btnSearch = document.getElementById('search');
var queue = document.getElementById('queue');

// 自我移除函数，元素被点击后会直接从队列中被删除
function removeSelf(){
    var parent = this.parentNode;
    parent.removeChild(this);
}
// 对输入内容进行处理，查验是否是一批输入的多个内容
function validateInput(input){
    var re = /[\s,，、]/;
    return input.split(re);
}
// 创建新的队列节点
function createNode(val){
    var node = document.createElement('span');
    node.setAttribute('class','queue-element');
    node.append(document.createTextNode(val));
    return node;
}
function createNodes(){
    var input = document.getElementById('input').value;
    input = validateInput(input);  
    var nodes = document.createDocumentFragment();
    for(var i = 0; i < input.length; i++){
        nodes.append(createNode(input[i]));
    }      
    return nodes;
}
// 为按钮绑定事件处理程序
btnLeftIn.onclick = function(){
    var nodes = createNodes();
    if (queue.hasChildNodes()) {
        queue.insertBefore(nodes, queue.firstChild);
    }else{
        queue.append(nodes);
    }
};
btnLeftOut.onclick = function(){
    if (queue.hasChildNodes()) {
        queue.removeChild(queue.firstChild);
    }else{
        alert('队列已空！');
    }
};
btnRightIn.onclick = function(){
    var nodes = createNodes();
    queue.append(nodes);            
};
btnRightOut.onclick = function(){
    if (queue.hasChildNodes()) {
        queue.removeChild(queue.lastChild);
    }else{
        alert('队列已空！');
    }
}
btnClearAll.onclick = function(){
    queue.innerHTML = '';
}
btnSearch.onclick = function(){
    var searchContent = document.getElementById('search-input').value;
    var nodeList = queue.childNodes;
    for(var i = 0; i < nodeList.length; i++){
        var str = nodeList[i].innerText
        console.log(str.indexOf(searchContent));
        if(str.indexOf(searchContent) !== -1){
            nodeList[i].setAttribute('class', 'queue-element highlight');
        }
    }
}