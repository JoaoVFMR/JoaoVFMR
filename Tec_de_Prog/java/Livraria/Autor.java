package Livraria;

public class Autor {
    String nome;
    String email;
    String cpf;

    void mostrarDetalhes(){
        System.out.println("Informações do Autor");
        System.out.println("Nome do autor: " + nome);
        System.out.println("Email do autor: " + email);
        System.out.println("CPF do autor: " + cpf);
        System.out.println("\n------------------------------------------------------------\n");
    }
}

