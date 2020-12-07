/*
 * @author: zzymr
 * @Date: 2020-12-07 15:15:02
 * @description: 测试队列
 */

// 普通队列
// import { Queue } from './queue.js'
// let queue = new Queue();
// console.log(queue.isEmpty());
// console.log(queue);
// queue.enqueue('zs');
// queue.enqueue('ls');
// queue.enqueue('ww');
// console.log(queue.toString());
// queue.dequeue();
// console.log(queue.toString());
// console.log(queue.size());

// 双端队列
import { Deque } from './deque.js';
let deque = new Deque();
console.log(deque.isEmpty());
console.log(deque);
deque.addBack('zs');
deque.addBack('ls');
deque.addBack('ww');
console.log(deque.toString());
deque.removeFront();
console.log(deque.toString());
deque.removeBack(); // ww决定离开
console.log(deque.toString()); 
deque.addFront('zs'); //zs再次回来
console.log(deque.toString()); 