package Segundo;

public class Segundo {
	public static void main(String[] args) {
		double livroJava8;
		double livroTDD;
		
		livroJava8 = 59.90;
		livroTDD = 59.90;
		double soma = livroJava8 + livroTDD;
        System.out.println("A soma é: " + soma + "!\n");

		Livro livro = new Livro();
		livro.nome = "Java 8 Prático";
		livro.descricao = "Novos Recursos da linguagem";
		livro.valor = 59.90;
		livro.isbn = "978-85-66250-46-6";

		Livro outroLivro = new Livro();
		outroLivro.nome = "Lógica de Programação";
		outroLivro.descricao = "Crie seus primeiros programas.";
		outroLivro.valor = 59.90;
		outroLivro.isbn = "978-85-66250-22-0";

		System.out.println("Chamando o método mostrarDetalhes\n");
		livro.mostrarDetalhes();
		outroLivro.mostrarDetalhes();

		Autor autor = new Autor();
		autor.nome = "Rodrigo Turini";
		autor.email = "rodrigo.turini@caelum.com.br";
		autor.cpf = "123.456.789-10";

		livro.autor = autor;

		Autor outroAutor = new Autor();
		outroAutor.nome = "Paulo Silveira";
		outroAutor.email = "paulo.silveira@caelum.com.br";
		outroAutor.cpf = "123.456.789-10";


	}
}