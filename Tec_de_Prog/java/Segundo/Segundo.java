package Segundo;

public class Segundo {
	public static void main(String[] args) {
		double livroJava8;
		double livroTDD;
		
		livroJava8 = 59.90;
		livroTDD = 59.90;
		double soma = livroJava8 + livroTDD;
        System.out.println("A soma é: " + soma + "!");
		Livro livro = new Livro();
		livro.nome = "Java 8 Prático";
		livro.descricao = "Novos Recursos da linguagem";
		livro.valor = 59.90;
		livro.isbn = "978-85-66250-46-6";
	}
}