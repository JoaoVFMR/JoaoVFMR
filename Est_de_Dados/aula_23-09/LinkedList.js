class LinkedList {
    constructor() {
        this.count = 0
        this.head = undefined
    }

    equalsFn(a, b) {
        return a === b
    }

    push(element) {
        // Insere elemento no final da lista
        const node = new Node(element)
        let current
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    insert(element, position) {
        // Insere um elemento na posição indicada
    }

    getElementAt(index) {
        // Devolve o elemento presente na posição indicada. Caso seja vazio, retorna "undefined"
        if (index >= 0 && index <= this.count) {
            let node = this.head
            for (let i = 0; i < index && node != null; i++) {
            node = node.next
            }
            return node
        }
        return undefined
    }

    remove(element) {
        // Remove o elemento indicado
    }

    index0f(element) {
        // Devolve o índice de determinado elemento, se o elemento não estiver na lista, retorna "-1"
    }

    removeAt(index) {
        // Remove o elemento na posição indicada
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                this.head = current.next
            } else {
                let previous
                for (let i = 0; i < index; i++) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }

    isEmpty() {
        // Verifica se a lista está vazia
    }

    size() {
        // Retorna a quantidade de elementos presentes na lista (semelhante ao length)
    }

    toString() {
        // Devolve uma representação em string da lista ligada

    }
}

class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}

let lista = new LinkedList()

lista.push("João")
lista.push("Diego")

console.log(lista.count);
console.log(lista.head);

console.log(lista.removeAt(1));

console.log(lista.count);
console.log(lista.head);