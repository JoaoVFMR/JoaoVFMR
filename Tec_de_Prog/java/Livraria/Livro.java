package Livraria;

public class Livro {
	String nome;
	String descricao;
	private double valor;
	String isbn;
    Autor autor;

    Livro() {
        System.out.println("Criando um novo livro");
    }

    public void mostrarDetalhes(){
        String mensagem = "Informações do Livro";
        System.out.println(mensagem);
        System.out.println("O nome do livro é: " + nome);
        System.out.println("Descrição do livro: " + descricao);
        System.out.println("Valor do livro: R$" + valor);
        System.out.println("ISBN do livro: " + isbn);
        System.out.println("\n-------------------------------------\n");

        
        if (this.temAutor()){
        	autor.mostrarDetalhes();
        }
    }
    
    public boolean aplicaDescontoDe(double porcentagem){
        if(porcentagem > 0.3){
            return false;
        }
    	this.valor -= this.valor * porcentagem;
        return true;
    }
    
    public boolean temAutor(){
        return (autor != null);
    }

    public void adicionaValor(double preco){
        this.valor = preco;
    }

    public double retornaValor(){
        return this.valor;
    }
}
