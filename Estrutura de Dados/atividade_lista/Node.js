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

    nomeOrdemAlfabetica(name) {
        const newNode = new Node(name)

        if (this.head === null || name < this.head.data) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let current = this.head
            while (current.next !== null && current.next.data < name) {
                current = current.next
            }
            newNode.next = current.next
            current.next = newNode
        }
    }

    printList() {
        let current = this.head
        while (current !== null) {
            console.log(current.data)
            current = current.next
        }
    }
}

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

const listaOrdenada = new LinkedList()

listaDesordenada.forEach(nome => listaOrdenada.insertInOrder(nome))

console.log("Lista de nomes em ordem alfabética:")
listaOrdenada.printList()
