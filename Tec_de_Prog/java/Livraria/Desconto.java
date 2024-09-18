package Livraria;

public class Desconto {
	public static void main (String[] args) {
		Livro livro = new Livro();
		livro.adicionaValor(59.90);

        System.out.println("-------------------------------------");
		System.out.println("Valor inicial: " + livro.retornaValor());

		// livro.valor -= livro.valor * 0.1;
        if(!livro.aplicaDescontoDe(0.30)){
            System.out.println("Desconto não pode ser maior que 30%");
        } else {
            System.out.println("Valor com desconto: " + livro.retornaValor());
        }		

        System.out.println("-------------------------------------\n");

		Autor autor = new Autor();
		autor.nome = "Argemiro Bevilacqua";
		livro.autor = autor;

		livro.mostrarDetalhes();

        Livro outroLivro = new Livro();
        Livro maisUmLivro = new Livro();
        Livro ultimoLivro = new Livro();
	}
}
