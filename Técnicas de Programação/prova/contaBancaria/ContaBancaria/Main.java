import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Sistema de Conta Bancária");
        System.out.print("Digite o número da conta: ");
        String numeroDaConta = scanner.nextLine();
        ContaBancaria conta = new ContaBancaria(numeroDaConta);

        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1. Depositar");
            System.out.println("2. Sacar");
            System.out.println("3. Ver saldo");
            System.out.println("4. Sair");
            System.out.print("\nEscolha uma opção:\n ");
            int opcao = scanner.nextInt();

            if (opcao == 4) {
                System.out.println("Encerrando operação");
                break;
            }

            switch (opcao) {
                case 1:
                    System.out.print("Digite o valor do depósito: ");
                    float valorDeposito = scanner.nextFloat();
                    conta.depositar(valorDeposito);
                    break;
                case 2:
                    System.out.print("Digite o valor do saque: ");
                    float valorSaque = scanner.nextFloat();
                    conta.sacar(valorSaque);
                    break;
                case 3:
                    conta.verSaldo();
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }

        scanner.close(); // Fecha o scanner ao final
    }
}