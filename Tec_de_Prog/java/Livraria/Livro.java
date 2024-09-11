package Livraria;

public class Livro {
	String nome;
	String descricao;
	double valor;
	String isbn;
    Autor autor;

    public void mostrarDetalhes(){
        String mensagem = "Informações do Livro";
        System.out.println(mensagem);
        System.out.println("O nome do livro é: " + nome);
        System.out.println("Descrição do livro: " + descricao);
        System.out.println("Valor do livro: R$" + valor);
        System.out.println("ISBN do livro: " + isbn);
        System.out.println("\n-------------------------------------------------------------\n");

        // System.out.println("Informações do Autor");
        // System.out.println("Nome do autor: " + autor.nome);
        // System.out.println("Email do autor: " + autor.email);
        // System.out.println("CPF do autor: " + autor.cpf);
        // System.out.println("\n------------------------------------------------------------");
    }
}
