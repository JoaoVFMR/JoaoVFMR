package Animal;

public class Main {
	public static void main (String[] args) {
		Animal rex = new Animal ("Rex", "Não definida", 8, "Uoorgh, oooh!");
		System.out.println(rex.falar());
		System.out.println(rex.comer());
		System.out.println(rex.dormir());
		System.out.println(rex.getIdade());
	}
}
