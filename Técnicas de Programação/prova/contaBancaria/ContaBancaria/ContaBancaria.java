public class ContaBancaria{
    private String numeroDaConta;
    private float saldo;

    public ContaBancaria(String numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
        this.saldo = 0.0f;
    }

    public String getNumeroDaConta() {
        return numeroDaConta;
    }

    public void depositar(float valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito de R$" + valor + " realizado com sucesso.");
        } else {
            System.out.println("Valor de depósito deve ser positivo.");
        }
    }

    public void sacar(float valor) {
        if (valor > saldo) {
            System.out.println("Valor de saque maior do que saldo.");
        } else if (valor > 0) {
            saldo -= valor;
            System.out.println("Saque de R$" + valor + " realizado com sucesso.");
        } else {
            System.out.println("Valor de saque deve ser positivo.");
        }
    }

    public void verSaldo() {
        System.out.println("Saldo disponível: R$" + saldo);
    }
}