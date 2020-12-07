/*
 * @author: zzymr
 * @Date: 2020-12-07 16:00:53
 * @description: 双端队列:双端队列允许两端添加和移除元素  
 */
class Deque {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lawestCount = 0;
    }
    // 双端队列前端增加元素
    addFront(element){
        if(this.isEmpty()){
            this.addBack(element);
        }else if(this.lawestCount>0){  
            this.lawestCount--;
            this.items[this.lawestCount] = element;  
        }else {
            // lawestCount=0 的情况
            for(let i= this.count; i>0; i--){
                this.items[i] = this.items[i-1];
            }
            this.count++;
            this.lawestCount = 0;
            this.items[0] = element;
        }
     }
     // 在双端队列后端添加元素，和普通队列的一样
     addBack(element){
        this.items[this.count] =  element;
        this.count++;
     }
     // 双端队列前端移除第一个元素 ,和普通队列一样
     removeFront(){
       if(this.isEmpty()){
           return undefined;
       }
       const result = this.items[this.lawestCount];
       delete this.items[this.lawestCount];
       this.lawestCount ++;
       return result;
     }
    // 在双端队列后端移除元素，和Stack的pop方法一样
     removeBack(){
       if(this.isEmpty()){
           return undefined;
       }
       this.count --;
       const result = this.items[this.count];
       delete this.items[this.count];
       return result;       
     }
    // 返回双端队列的前端第一个元素，和普通队列一样
     peekFront(){
        if(this.isEmpty()){
            return undefined;
        }      
       return this.items[this.lawestCount];
     }
    // 返回双端队列的后端的第一个元素
     peekBack(){
        if(this.isEmpty()){
            return undefined;
        }      
       return this.items[this.count-1];
     }
    // 返回队列中包含元素个数
    size(){
        return this.count - this.lawestCount;
    }
    // 判断队列中是否包含元素，true/ false 
    isEmpty(){
        return this.size() === 0;
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

export { Deque }