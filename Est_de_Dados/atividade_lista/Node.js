class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    // Método para inserir um nome em ordem alfabética
    insertInOrder(name) {
        const newNode = new Node(name)

        // Se a lista estiver vazia ou o novo nome for menor que o primeiro, insira no início
        if (this.head === null || name < this.head.data) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let current = this.head
            // Percorre a lista até encontrar a posição correta
            while (current.next !== null && current.next.data < name) {
                current = current.next
            }
            newNode.next = current.next
            current.next = newNode
        }
    }

    // Método para imprimir a lista
    printList() {
        let current = this.head
        while (current !== null) {
            console.log(current.data)
            current = current.next
        }
    }
}

// Criação das listas desordenada e ordenada
const listaDesordenada = [
    "ARTHUR DAVI GOMES",
    "BRUNO HENRIQUE QUERICHELLI GARCIA",
    "CAIO HENRIQUE FERREIRA DE SOUZA",
    "DANIEL BRITO DA SILVA JUNIOR",
    "DANIEL GALVAO MAGALHAES DA SILVA",
    "DAVI BERTO MANSUR DUARTE",
    "ELISA APARECIDA MARTINS DE OLIVEIRA",
    "ERIC VINICIUS DA SILVA MENEGON",
    "FELIPE AUGUSTO PEREIRA LEMES",
    "FERNANDA VICTORIA FELIX OLIVEIRA",
    "ADRIANO DOS SANTOS",
    "GIOVANI DE BIAGI ALVES",
    "VITOR CARDOSO DA CRUZ",
    "GRAZIELLA SOUZA",
    "RODRIGO MORAES DE SOUZA GARCIA",
    "HOSANA AZEVEDO PIRES",
    "JOAO PEDRO SOUZA SILVA",
    "LEONARDO VINÍCIUS GURTLER HUBERT",
    "MARCELO HENRIQUE REDUZINO",
    "WILLIAM SILVA DOS REIS",
    "NATHAN FERRACINI BATISTA",
    "GUSTAVO SILVA DE CARVALHO",
    "PEDRO HENRIQUE BONOMO SANTOS",
    "RAMON GODINHO",
    "JOAO VITOR FERNANDES DE MATOS ROCHA",
    "MATHEUS HENRIQUE ALMEIDA VIEIRA NEVES",
    "ROBSON ALAN MANTOVANI"
]

// Lista ligada para armazenar os nomes em ordem alfabética
const listaOrdenada = new LinkedList()

// Inserir os nomes da lista desordenada na lista ordenada
listaDesordenada.forEach(nome => listaOrdenada.insertInOrder(nome))

// Imprimir a lista em ordem alfabética
console.log("Lista de nomes em ordem alfabética:")
listaOrdenada.printList()
