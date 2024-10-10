package Livraria;

public class Livro {
    private String nome;
    private String descricao;
    private double valor;
    private String isbn;
    private Autor autor;
    private boolean impresso;

    public Livro (Autor autor) {
        this.autor = autor;
        this.isbn = "123.456.789-10";
        this.impresso = true;
    }
    
    Livro() {
        System.out.println("Criando um novo livro");
    }

    public void mostrarDetalhes() {
        String mensagem = "Informações do Livro\n";
        System.out.println(mensagem);
        System.out.println("O nome do livro é: " + nome);
        System.out.println("Descrição do livro: " + descricao);
        System.out.println("Valor do livro: R$" + getValor());
        System.out.println("ISBN do livro: " + isbn);
        System.out.println("\n-------------------------------------\n");

        if (this.temAutor()) {
            autor.mostrarDetalhes();
        }
    }

    public boolean aplicaDescontoDe(double porcentagem) {
        if (porcentagem > 0.3) {
            return false;
        } else if (!this.impresso && porcentagem > 0.15) {
            return false;
        }
        this.valor -= this.valor * porcentagem;
        return true;
    }

    public boolean temAutor() {
        return (autor != null);
    }

    public void setValor(double preco) {
        this.valor = preco;
    }

    public double getValor() {
        return this.valor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Autor getAutor() {
        return autor;
    }

    public void setAutor(Autor autor) {
        this.autor = autor;
    }
}