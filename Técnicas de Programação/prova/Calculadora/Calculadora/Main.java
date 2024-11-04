import java.util.Scanner;

public class Main {
    public static void main (String [] args) {
        Scanner scanner = new Scanner(System.in);
        Calculadora calculadora = new Calculadora();

        System.out.println("Bem-vindo à Calculadora!");

        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1. Somar");
            System.out.println("2. Subtrair");
            System.out.println("3. Multiplicar");
            System.out.println("4. Dividir");
            System.out.println("5. Sair");
            System.out.print("\nEscolha uma opção: ");
            int opcao = scanner.nextInt();

            if (opcao == 5) {
                System.out.println("Fechando calculadora");
                break;
            }

            System.out.print("Digite o primeiro número: ");
            double num1 = scanner.nextDouble();
            System.out.print("Digite o segundo número: ");
            double num2 = scanner.nextDouble();

            switch (opcao) {
                case 1:
                    System.out.println("A soma desses dois valores é: " + calculadora.somar(num1, num2));
                    break;
                case 2:
                    System.out.println("A subtração desses dois valores é: " + calculadora.subtrair(num1, num2));
                    break;
                case 3:
                    System.out.println("A multiplicação desses dois valores é: " + calculadora.multiplicar(num1, num2));
                    break;
                case 4:
                    try {
                        System.out.println("Resultado da divisão: " + calculadora.dividir(num1, num2));
                    } catch (ArithmeticException e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                default:
                    System.out.println("Opção inválida, tente novamente.");
            }
        }
        scanner.close();
    }
}