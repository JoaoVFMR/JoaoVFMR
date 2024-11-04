package Animal;

public class Animal {
	String nome;
	String raca;
	int idade;
	String som;
	
	public Animal(String nome, String raca, int idade, String som) {
		this.nome = nome;
		this.raca = raca;
		this.idade = idade;
		this.som = som;
	}

	String falar() {
		return som;
	}
	
	String comer() {
		return "Está comendo";
	}
	
	String dormir() {
		return "Está dormindo";
	}
	
	int getIdade() {
		return this.idade;
	}
}
