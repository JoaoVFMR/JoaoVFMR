package Livraria;

public class ComparandoReferencias {
	public static void main (String[] args) {
		Autor autor = new Autor();
		autor.setNome("Rodrigo Turini");
		autor.setEmail("rodrigo.turino@caelum.com.br");
		autor.setCpf("123.456.789-10");
		
		Autor autor2 = new Autor();
		autor2.setNome("Rodrigo Turini");
		autor2.setEmail("rodrigo.turino@caelum.com.br");
		autor2.setCpf("123.456.789-10");

        if (autor == autor2) {
            System.out.println("São iguais");
        } else {
            System.out.println("São diferentes");
        }

        Autor autor3 = new Autor();
        autor3.setNome("Rodrigo Turini");

        Livro livro = new Livro();
        livro.setAutor(autor3);

        livro.getAutor().setNome("Guilherme Silveira");

        System.out.println(autor.getNome());
        System.out.println(livro.getAutor().getNome());
	}
}
