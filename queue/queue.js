/*
 * @author: zzymr
 * @Date: 2020-12-07 15:10:59
 * @description: 队列基本函数实现
 * 队列：先进先出
 */
class Queue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lawestCount = 0;
    }
    // 队尾增加一项
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }
    // 移除队列第一项
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lawestCount];;
        delete this.items[this.lawestCount];
        this.lawestCount++;
        return result;
    }
    // 返回队列的第一项
    peek(){
        if(this.isEmpty()){
            return undefined;
        }        
       return this.items[this.lawestCount];
    }
    // 返回队列中包含元素个数
    size(){
        return this.count - this.lawestCount;
    }
    // 判断队列中是否包含元素，true/ false 
    isEmpty(){
        return this.size() === 0;
    }    
    // 清空队列元素  直接初始化
    clear(){
        this.items = {};
        this.count = 0;
        this.lawestCount = 0;
    }
    // 实现队列的toString方法
    toString(){
        if(this.isEmpty()){
            return '';
        }   
        let queueString = `${this.items[this.lawestCount]}`;
        for(let i=this.lawestCount+1; i<this.count; i++){
            queueString = `${queueString},${this.items[i]}`
        }
        return queueString;
    }
} 
export { Queue };