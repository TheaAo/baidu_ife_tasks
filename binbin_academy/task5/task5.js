/*
* @Author: Thea Ao
* @Date:   2017-06-09 15:07:31
* @Last Modified by:   Thea Ao
* @Last Modified time: 2017-06-09 15:19:28
*/

'use strict';
// 获取DOM结构
var btnLeftIn = document.getElementById('ins-left');
var btnLeftOut = document.getElementById('del-left');
var btnRightIn = document.getElementById('ins-right');
var btnRightOut = document.getElementById('del-right');
var btnClearAll = document.getElementById('clear-all');
var btnRandom = document.getElementById('random');
var btnBubbleSort = document.getElementById('bubble-sort');
var btnInsertionSort = document.getElementById('insertion-sort');
var btnSelectionSort = document.getElementById('selection-sort');
var queue = document.getElementById('queue');
var snapshots = [];
var timer = null;

// 为按钮绑定事件处理程序
btnClearAll.onclick = function(){
    queue.innerHTML = '';
}
btnLeftIn.onclick = function(){
    if (validateQueueLength()) {
        var input = validateInput();
        if (input) {
            var newNode = createNewNode(input);
            if (queue.hasChildNodes()) {
                queue.insertBefore(newNode, queue.firstChild);
            }else{
                queue.append(newNode);
            }
        }
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
    if (validateQueueLength()) {
        var input = validateInput();
        if (input) {
            var newNode = createNewNode(input);
            queue.append(newNode);
        }
    }               
};
btnRightOut.onclick = function(){
    if (queue.hasChildNodes()) {
        queue.removeChild(queue.lastChild);
    }else{
        alert('队列已空！');
    }
}
btnRandom.onclick = function(){
    var arr = [];
    for(var i = 0; i < 10; i++){
        arr.push(Math.random() * 90 + 10);
    }
    createNodes(arr);
}
btnBubbleSort.onclick = function(){
    var queueArr = getQueue();
    console.log(queueArr);
    bubbleSort(queueArr);
    timer = setInterval(function(){
        visualization();
    },200);
}
btnSelectionSort.onclick = function(){
    var queueArr = getQueue();
    console.log(queueArr);
    selectionSort(queueArr);
    console.log(queueArr);
    timer = setInterval(function(){
        visualization();
    },200);
}
btnInsertionSort.onclick = function(){
    var queueArr = getQueue();
    console.log(queueArr);
    insertionSort(queueArr);
    console.log(queueArr);
    timer = setInterval(function(){
        visualization();
    },200);
}

// 验证输入是否为取值范围内的数字
function validateInput(){
    var input = document.getElementsByTagName('input')[0];
    input = parseInt(input.value);
    if (isNaN(input)) {
        alert('请输入一个数字');
    }else{
        if(input <= 100 && input >= 10){
            return input;
        }else{
            alert('请输入 10-100 以内的数字！');
        }
    }
    return false;
}
// 验证队列长度是否在要求内
function validateQueueLength(){
    var queue = document.getElementById('queue');
    var queueLength = queue.childNodes.length;
    if (queueLength == 60) {
        alert('队列过长，不能再添加元素');
        return false;
    }else{
        return true;
    }
}
// 自我移除函数，元素被点击后会直接从队列中被删除
function removeSelf(){
    var parent = this.parentNode;
    parent.removeChild(this);
}
// 创建新的队列节点
function createNewNode(input){
    var newNode = document.createElement('div');
    newNode.setAttribute('class','number');
    newNode.style.height = input + 'px';
    newNode.onclick = removeSelf;
    return newNode;
}
// 创建一组队列
function createNodes(arr){
    queue.innerHTML='';
    var nodes = document.createDocumentFragment();
    for(var i = 0; i < arr.length ; i++){
        nodes.append(createNewNode(arr[i]));
    }
    queue.append(nodes);
}
// 获取队列节点
function getQueue(){
    var nodeList = queue.childNodes;
    var queueValue = [];
    for(var i = 0; i < nodeList.length; i++){
        queueValue.push(parseFloat(nodeList[i].style.height));
    }
    return queueValue;
}
// 冒泡排序
function bubbleSort(arr){
    var l = arr.length;
    for(var i = 1; i < l; i++){
        for(var j = 0; j < l - i; j++){
            if (arr[j] > arr[j+1]) {
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                // 记录此刻的队列状态以便稍后可视化呈现
                snapshots.push(JSON.parse(JSON.stringify(arr))); 
            }
        }
    }
    return arr;
}
// 选择排序
function selectionSort(arr){
    var l = arr.length;
    for(var i = 0; i < l - 1; i++){
        var min = i;
        for(var j = i + 1; j < l; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        var tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
        snapshots.push(JSON.parse(JSON.stringify(arr)));
    }
    return arr;
}
// 插入排序
function insertionSort(arr){
    var l = arr.length;
    var pos;
    var tmp;
    for(var i = 0; i < l - 1; i++){
        var j = i + 1;
        pos = j;
        tmp = arr[j];
        for(; j > 0; j--){
            if(tmp < arr[j-1]){
                pos = j - 1;
                arr[j] = arr[j-1];
            }else{
                break;
            }
        }
        arr[pos] = tmp;
        snapshots.push(JSON.parse(JSON.stringify(arr)));
    }
    return arr;
}
// 排序过程可视化
function visualization(){
    var snapshot = snapshots.shift() || [];
    console.log(snapshot);
    createNodes(snapshot);
    if(snapshots.length == 0){
        clearInterval(timer);
    }
}