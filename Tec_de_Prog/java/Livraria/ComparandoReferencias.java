package Livraria;

public class ComparandoReferencias {
	public static void main (String[] args) {
		Autor autor = new Autor();
		autor.nome = "Rodrigo Turini";
		autor.email = "rodrigo.turino@caelum.com.br";
		autor.cpf = "123.456.789-10";
		
		Autor autor2 = new Autor();
		autor2.nome = "Rodrigo Turini";
		autor2.email = "rodrigo.turino@caelum.com.br";
		autor2.cpf = "123.456.789-10";

        if (autor == autor2) {
            System.out.println("São iguais");
        } else {
            System.out.println("São diferentes");
        }

        Autor autor3 = new Autor();
        autor3.nome = "Rodrigo Turini";

        Livro livro = new Livro();
        livro.autor = autor3;

        livro.autor.nome = "Guilherme Silveira";

        System.out.println(autor.nome);
        System.out.println(livro.autor.nome);
	}
}
