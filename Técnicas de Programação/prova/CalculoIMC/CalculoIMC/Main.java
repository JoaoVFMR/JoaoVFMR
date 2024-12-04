package CalculoIMC;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Pessoa pessoa = null;

        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1. Calcular IMC");
            System.out.println("2. Encerrar");
            System.out.print("Escolha uma opção: ");
            int opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    System.out.print("Digite o seu nome: ");
                    String nome = scanner.nextLine();

                    Float altura;
                    Float peso;

                    do {
                        System.out.print("Digite a sua altura (em metros): ");
                        altura = scanner.nextFloat();
                    } while (altura <= 0);

                    do {
                        System.out.print("Digite o seu peso (em kg): ");
                        peso = scanner.nextFloat();
                        if (peso < 0 || peso > 200) {
                            System.out.println("Peso inválido, digite novamente.");
                        }
                    } while (peso < 0 || peso > 200);

                    pessoa = new Pessoa(nome, altura, peso);
                    System.out.println(pessoa.getAll());
                    break;

                case 2:
                    System.out.println("Programa encerrado.");
                    scanner.close();
                    return;

                default:
                    System.out.println("Opção inválida, tente novamente.");
            }
        }
    }
}
