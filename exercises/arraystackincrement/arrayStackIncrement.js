class Stack{
    constructor(){
        this.stack = []
    }

    length(){
        return this.stack.length
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        if(this.length() !== 0){
            this.stack.pop()
        }  
    }
    peek(){
        if(this.stack.length === 0){
             console.log("EMPTY")
        }
        else{
            console.log(this.stack[this.stack.length - 1])
        }
    }
    increment(counter, add){
        for(let i = 0; i < counter; i++){
            this.stack[i] += add
        }
        return this.stack
    }
}
//operations is an array of ops
function superStack(operations) {
    let stack = new Stack()
    operations.splice(1, 0)
    for(let op of operations)
    {
        if(op.substring(0,3) == "pop"){
            stack.pop()
            stack.peek()
        }
         else if(op.substring(0,4) == "push")
         {
            stack.push(parseInt(op.substring(5)))
            stack.peek()
         }
         else{
            let spaceIndex = op.indexOf(" ")
            //[inc 2 1] => spaceIndex = 3 , secondSpace = 3
            let secondPart = op.substring(spaceIndex+1)
            let secondSpace = secondPart.indexOf(" ") + 2 + spaceIndex

            let fArg = op.substring(spaceIndex+1, secondSpace)
            fArg = parseInt(fArg)
            let sArg = op.substring(secondSpace)
            sArg = parseInt(sArg)
            stack.increment(fArg, sArg)
            stack.peek()
        }
    }
}
