/*
* @Author: Thea Ao
* @Date:   2017-06-09 16:17:42
* @Last Modified by:   Thea Ao
* @Last Modified time: 2017-06-09 17:12:21
*/

'use strict';
// 初始化 DOM 结构
var root = document.getElementById('tree');
var btnPre = document.getElementById('pre');
var btnMid = document.getElementById('mid');
var btnPost = document.getElementById('post');
var process = []; // 存放遍历过程
var intervalId = null; 
// 绑定事件
btnPre.onclick = function(){
    preOrder(root);
    console.log(process);
    intervalId = setInterval(function(){
        show();
    },1000);
};
btnPost.onclick = function(){
    postOrder(root);
    intervalId = setInterval(function(){
        show();
    },1000);
};
btnMid.onclick = function(){
    midOrder(root);
    intervalId = setInterval(function(){
        show();
    },1000);
};
// 遍历函数
// 前序遍历
function preOrder(node){
    if (node != null) {
        var childNodes = getElementNodes(node);
        process.push(node);
        preOrder(childNodes[0]);
        preOrder(childNodes[1]);
    }
}
// 中序遍历
function midOrder(node){
    if (node != null) {
        var childNodes = getElementNodes(node);
        midOrder(childNodes[0]);
        process.push(node);
        midOrder(childNodes[1]);
    }
}
// 后序遍历
function postOrder(node){
    if (node != null) {
        var childNodes = getElementNodes(node);
        postOrder(childNodes[0]);
        postOrder(childNodes[1]);
        process.push(node);
    }
}
// 获取子元素节点
function getElementNodes(node){
    var childNodes = node.childNodes;
    var nodesList = [];
    for(var i = 0; i < childNodes.length; i++){
        if(childNodes[i].nodeType == 1){
            nodesList.push(childNodes[i]);
        }
    }
    return nodesList;
}
// 特殊显示
function show(){
    var node = process.shift();
    node.style.backgroundColor = 'pink';
    setTimeout(function(){
        node.style.backgroundColor = 'white';
    },500);
    if(process.length == 0) {
        clearInterval(intervalId);
    }
}

