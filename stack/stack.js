// class Stack{
//     constructor(){
//         this.items=[]
//         this.maxSize=10
//     }
//     add(element){
//         return this.items.push(element)
//     }
//     remove(){
//         if(this.items.length>0){
//             return this.items.pop()
//         }
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isEmpty(){
//         return this.items.length==0
//     }
//     isFull(){
//         return this.items.length==this.maxSize
//     }
// }

// let stack = new Stack()
// stack.add("first string")
// stack.add("second string")
// stack.add("third string")
// console.log(stack.items.join(" "))
// // stack.remove()
// // stack.remove()
// console.log(stack.items.join(" "))

//tc=o(n) worst
//o(1) avg
class MyQueue{
    constructor(){
        this.pushStack=[]
        this.popStack=[]
    }
    push(val){
        this.pushStack.push(val);
    }
    pop(){
        if(this.popStack.length==0){
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack.pop()
    }
    peek(){
        if(!this.popStack.length){
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack[this.popStack.length-1]
    }
    empty(){
        return !this.pushStack.length && !this.popStack.length
    }
}

let myQueue = new MyQueue()
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek([]); // return 1
myQueue.pop([]); // return 1, queue is [2]
myQueue.empty([]); // return false
console.log(myQueue)