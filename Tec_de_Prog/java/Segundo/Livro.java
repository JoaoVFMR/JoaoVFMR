package Segundo;

public class Livro {
	String nome;
	String descricao;
	double valor;
	String isbn;
	Autor autor;

	void mostrarDetalhes() {
		String mensagem = "Mostrando detalhes do livro\n";
		System.out.println(mensagem);
		System.out.println(nome);
		System.out.println(descricao);
		System.out.println(valor);
		System.out.println(isbn);
		System.out.println("----------------------------\n");

		System.out.println("Mostrando detalhes do Autor");
		System.out.println("Nome do autor: " + autor.nome);
		System.out.println("Email do Autor: " + autor.email);
		System.out.println("CPF do autor: " + autor.cpf);
		System.out.println("----------------------------\n");
	}
}
