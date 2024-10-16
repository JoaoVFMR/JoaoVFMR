class Deque {
    constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
    }

    isEmpty() {
        return this.count - this.lowestCount === 0
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    size() {
        return this.count - this.lowestCount
    }
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        }
        else if (this.lowestCount > 0) {
        this.lowestCount--
        this.items[this.lowestCount] = element
        }
        else {
        for (let i = this.count; i > 0; i--){
            this.items[i] = this.items[i - 1]
        }
        this.count++
        this.lowestCount = 0
        this.items[0] = element
        }
    }
    addBack(element) {
        this.items[this.count] = element
        this.count++
    }
    removeFront() {
        if (this.isEmpty()) {
        return undefined
        }   
    }
    removeBack(){
        return this.items.removeBack()
    }
    peekFront(){
        return this.items[this.items.length - 1]
    }
    peekBack(){
        if (this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }
    toString() {
        if (this.isEmpty()) {
        return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`
        }
        return objString
    }  
}