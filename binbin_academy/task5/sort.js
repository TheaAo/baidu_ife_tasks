/*
* @Author: Thea Ao
* @Date:   2017-05-27 18:58:37
* @Last Modified by:   Thea Ao
* @Last Modified time: 2017-06-07 15:19:06
*/
/*所有排序均为由小到大排列*/
'use strict';
// 冒泡排序
function bubbleSort(data){
    var l = data.length;
    var tmp;
    for(var i = 1; i < l; i++){
        for(var j = 0; j < l - i ; j++){
            if (data[j] > data[j+1]) {
                tmp = data [j+1];
                data[j+1] = data[j];
                data[j] = tmp;
            }
        }
    }
    return data;
}
// 选择排序
function selectionSort(data){
    var l = data.length;
    var min;
    var tmp;
    for(var i = 0; i < l - 1; i++){
        min = i;
        // 寻找待排序队列中的最小值
        for(var j = i + 1; j < l; j++){
            if (data[min] > data[j]) {
                min = j;
            }
        }
        // 放到序列的起始处
        tmp = data[i];
        data[i] = data[min];
        data[min] = tmp;
    }
    return data;
}
// 插入排序
function insertionSort(data){
    var l = data.length;
    var tmp,pos;
    for(var i = 1; i < l; i++){
        pos = i;
        tmp = data[i];
        for(;i > 0; i--){
            if(tmp < data[i-1]){
                data[i] = data[i-1];
                pos = i - 1;
            }else{
                break;
            }
        }
        data[pos] = tmp;
    }
    return data;
}
// 快速排序
function quickSort(array) {
    // 交换元素位置
    function swap(array, i, k) {
        var temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }
    // 数组分区，左小右大
    function partition(array, left, right) {
        var storeIndex = left;        
        var pivot = array[right]; // 直接选最右边的元素为基准元素
        for (var i = left; i < right; i++) {
            if (array[i] < pivot) {
                swap(array, storeIndex, i);
                storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
            }
        }
        swap(array, right, storeIndex); // 将基准元素放置到最后的正确位置上
        return storeIndex;
    }
    function sort(array, left, right) {
        if (left > right) {
            return;
        }
        var storeIndex = partition(array, left, right);
        sort(array, left, storeIndex - 1);
        sort(array, storeIndex + 1, right);
    }
    sort(array, 0, array.length - 1);
    return array;
}
/*
function quickSort(data){
    function swap(a,b){
        var tmp = a;
        a = b;
        b = tmp;
    }
    function partition(arr,start,end){
        var pivot = arr[end];
        var storeIndex = start;
        for(var i = start; i < end; i++){
            if(arr[i] <= pivot){
                swap(arr[i],arr[storeIndex]);
                storeIndex++;
            }
        }
        swap(arr[storeIndex],pivot);
        return storeIndex;
    }
    function sort(){

    }
}
*/

var data = [1,5,8,8,3,7,1,6];
console.log(bubbleSort(data));
console.log(insertionSort(data));
console.log(selectionSort(data));
console.log(quickSort(data));