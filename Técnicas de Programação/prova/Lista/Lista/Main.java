package Lista;

import java.util.*; 

public class Main {
	public static void main(String[] args) {
		List<String> minhaLista = new ArrayList<String>();
		minhaLista.add("João");
		minhaLista.add("Diego");
		minhaLista.add("Larissa");
		minhaLista.add("Giovana");
		System.out.println("Nomes da lista:" + minhaLista);
		minhaLista.remove("Giovana");
		System.out.println("Nomes da lista: " + minhaLista);
		System.out.println("Minha lista contém tal palavra? " + minhaLista.contains("João"));
		System.out.println("Nomes da lista:" + minhaLista);
		minhaLista.clear();
		System.out.println("Lista esvaziada");
		System.out.println(minhaLista);
	}
}
