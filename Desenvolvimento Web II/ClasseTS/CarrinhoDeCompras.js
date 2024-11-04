var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    CarrinhoDeCompras.prototype.calcularTotal = function () {
        return this.produtos.reduce(function (total, produto) { return total + produto.preco; }, 0);
    };
    return CarrinhoDeCompras;
}());
var produto1 = { nome: 'Teclado', preco: 150, quantidadeEmEstoque: 20 };
var produto2 = { nome: 'Mouse', preco: 80, quantidadeEmEstoque: 15 };
var carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
console.log(carrinho.calcularTotal());
