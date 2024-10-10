interface IProduto {
    nome: string
    preco: number
    quantidadeEmEstoque: number
}

class CarrinhoDeCompras {
    produtos: IProduto[] = []

    adicionarProduto(produto: IProduto): void {
        this.produtos.push(produto)
    }

    calcularTotal(): number {
        return this.produtos.reduce((total, produto) => total + produto.preco, 0)
    }
}

const produto1: IProduto = { nome: 'Teclado', preco: 150, quantidadeEmEstoque: 20 }
const produto2: IProduto = { nome: 'Mouse', preco: 80, quantidadeEmEstoque: 15 }

const carrinho = new CarrinhoDeCompras()

carrinho.adicionarProduto(produto1)
carrinho.adicionarProduto(produto2)

console.log(carrinho.calcularTotal())
