// Criando a classe Stack

class Stack {
    constructor(){
    this.items = [] // 1
    }
    push(Element){
    this.items.push(Element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    clear(){
        this.items = []
    }
}

// Exercícios de Pilha: Codifique um conversor de decimal para binário

const pilha = new Stack

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) { // {1}
    rem = Math.floor(number % 2); // {2}
    remStack.push(rem); // {3}
    number = Math.floor(number / 2); // {4}
    }
    while (!remStack.isEmpty()) { // {5}
    binaryString += remStack.pop().toString();
    }
    return binaryString;
    }
    
    // Testando o código

console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000
console.log(decimalToBinary(25082005)); // 1011111101011100010010101
