class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class ArvoreBinaria {
    constructor() {
        this.root = null
    }

    insert(key) {
        if (this.root == null) {
            let node = new Node(key)
            console.log("Primeiro node: ", + node.key)
            this.root = node
        }
        else {
            this.insertNode(this.root, key)
        }
    }

    insertNode(node, key) {
        if (key < node.key) {
            if (node.left == null) {
                let nodeaux = new Node(key)
                node.left = nodeaux
            }
            else {
                this.insertNode(node.left, key)
            }
        }
        else {

            if (node.right == null) {
                node.right = new Node(key)
            }
            else {
                this.insertNode(node.right, key)
            }
        }
    }


    search() {

    }

    inOrderTraverse() {

    }

    preOrderTraverse() {

    }

    posOrderTraverse() {

    }

    min() {

    }

    max() {

    }

    removeKey() {

    }
}

const arvore = new ArvoreBinaria()
arvore.insert(7)
arvore.insert(5)
arvore.insert(12)
arvore.insert(3)
arvore.insert(8)
arvore.insert(15)
arvore.insert(4)
arvore.insert(11)
arvore.insert(13)
