package Livraria;

public class Desconto {
    public static void main(String[] args) {
        Livro livro = new Livro();
        livro.setValor(59.90);

        System.out.println("-------------------------------------");
        System.out.println("Valor inicial: " + livro.getValor());

        if (!livro.aplicaDescontoDe(0.30)) {
            System.out.println("Desconto não pode ser maior que 30%");
        }
        System.out.println("-------------------------------------\n");

        Autor autor = new Autor();
        autor.setNome("Argemiro Bevilacqua");
        livro.setAutor(autor);

        livro.mostrarDetalhes();
    }
}
