class Queue{
    constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = []
    }

    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
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

function hotPotato(elementsList, num) {
    const queue = new Queue();
    const elimitatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i])
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}

const names = ['João', 'Giovana', 'Diego', 'Rayssa', 'Tayana']
const result = hotPotato(names, 7)
result.eliminated.forEach(name => {
console.log(`${name} foi eliminado do jogo da batata quente.`)
})
console.log(`O vencedor é: ${result.winner}`)