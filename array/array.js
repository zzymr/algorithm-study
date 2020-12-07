/*
 * @author: zzymr
 * @Date: 2020-12-04 13:45:40
 * @description: 数组
 */
// 数组的创建和初始化
// (1)通过 new Array()方式，也可以直接传参
const array1 = new Array();
const array2 = new Array(3); //指定长度
const array3 = new Array('a','b','c');

//(2)、[]方式
const array4 = [];
const array5 = [5]; //指定长度
const array6 = ['a','b','c'];

// 访问元素和迭代数组
for (let i=0; i<array6.length; i++) {
    console.log(array6[i]);
}

// 例子，求斐波那契数列，从第三项起每一项等于前两项的和  前两项都是1

let fbarray = [];
fbarray[1]= 1;
fbarray[2]= 1;
for (let i = 3; i < 20; i++) {
    fbarray[i] = fbarray[i-1]+fbarray[i-2];
}
console.log(fbarray);

