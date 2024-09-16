class Queue{
    constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = []
    }

    enqueue(Element) {
        this.items[this.count] = Element;
        this.count++
    }
    dequeue() {
        if (this.isEmpty()) {
        return undefined
        }   
    }
    peek() {
        if (this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }
    isEmpty() {
        return this.count - this.lowestCount === 0
    }
    size() {
        return this.count - this.lowestCount
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString() {
        if (this.isEmpty()) {
        return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`
        }
        return objString;
    }  
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('João')
queue.enqueue('Giovana')
console.log(queue.toString())

queue.enqueue('Rayssa')

console.log(queue.toString())
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue()
queue.dequeue()
console.log(queue.toString())

