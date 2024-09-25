package Livraria;

public class Livraria {
	public static void main (String[] args) {
		Livro livro = new Livro();
		livro.setNome("Java 8 prático");
		livro.setDescricao("Novo recursos da linguagem");
		livro.setValor(59.90);
		livro.setIsbn("978-85-66250-46-6");
		
        Livro outroLivro = new Livro();
        outroLivro.setNome("Lógica de Programação");
        outroLivro.setDescricao("Crie seus primeiros programas");
        outroLivro.setValor(59.90);
        outroLivro.setIsbn("978-85-66250-22-0");

        Autor autor = new Autor();
        autor.setNome("Rodrigo Turini");
        autor.setEmail("rodrigo.turini@caelum.com.br");
        autor.setCpf("123.456.789-10");

        livro.setAutor(autor);

        Autor outroAutor = new Autor();
        outroAutor.setNome("Paulo Silveira");
        outroAutor.setEmail("paulo.silveira@caelum.com.br");
        outroAutor.setCpf("987.654.321-00");

        outroLivro.setAutor(outroAutor);

        livro.mostrarDetalhes();
        outroLivro.mostrarDetalhes();
	}
}
