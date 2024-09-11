package Livraria;

public class Livraria {
	public static void main (String[] args) {
		Livro livro = new Livro();
		livro.nome = "Java 8 Prático";
		livro.descricao = "Novos recursos da linguagem";
		livro.valor = 59.90;
		livro.isbn = "978-85-66250-46-6";
		
		// System.out.println("O nome do livro é: " + livro.nome);
        // System.out.println("Descrição do livro: " + livro.descricao);
        // System.out.println("Valor do livro: R$" + livro.valor);
        // System.out.println("ISBN do livro: " + livro.isbn);

        Livro outroLivro = new Livro();
        outroLivro.nome = "Lógica de Programação";
        outroLivro.descricao = "Crie seus primeiros programas";
        outroLivro.valor = 59.90;
        outroLivro.isbn = "978-85-66250-22-0";

        // System.out.println("O nome do livro é: " + outroLivro.nome);
        // System.out.println("Descrição do livro: " + outroLivro.descricao);
        // System.out.println("Valor do livro: R$" + outroLivro.valor);
        // System.out.println("ISBN do livro: " + outroLivro.isbn);

        Autor autor = new Autor();
        autor.nome = "Rodrigo Turini";
        autor.email = "rodrigo.turini@caelum.com.br";
        autor.cpf = "123.456.789-10";

        livro.autor = autor;

        Autor outroAutor = new Autor();
        outroAutor.nome = "Paulo Silveira";
        outroAutor.email = "paulo.silveira@caelum.com.br";
        outroAutor.cpf = "987.654.321-00";

        outroLivro.autor = outroAutor;

        livro.mostrarDetalhes();
        autor.mostrarDetalhes();

        outroLivro.mostrarDetalhes();
        outroAutor.mostrarDetalhes();
	}
}
