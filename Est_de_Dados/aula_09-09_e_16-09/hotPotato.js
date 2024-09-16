class Queue{
    constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = []
    }

    enqueue(Element) {
        this.items[this.count] = Element;
        this.count++
    }
    dequeue() {
        if (this.isEmpty()) {
        return undefined;
        }   
    }
    peek() {
        if (this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {
        if (this.isEmpty()) {
        return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }  
}

function hotPotato(elementList, num){
    const queue = new Queue
    const eliminatedList = []
    for (let i = 0; i < elementList.length; i++){
        queue.enqueue(elementList[i])
    }
    while (queue.size() > 1){
        for (let i = 0; 1 <num; i++){
            queue.enqueue(queue.dequeue())
        }
        eliminatedList.push(queue.dequeue())
    }
    return{
        eliminated: eliminated,
        winner: queue.dequeue()
    }   
}

const nomes = ['João', 'Giovana', 'Diego', 'Rayssa', 'Tayana'];
const result = hotPotato(nomes, 7);
result.eliminated.forEach(nome => {
console.log(`${nome} foi eliminado do jogo da batata quente.`);
});
console.log(`O vencedor é: ${result.winner}`);