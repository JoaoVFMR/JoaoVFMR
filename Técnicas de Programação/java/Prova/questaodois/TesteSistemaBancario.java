import java.util.Date;

public class TesteSistemaBancario {
    public static void main(String[] args) {
        ContaComum contaComum = new ContaComum(12345, "senha123");
        System.out.println("------------ Conta Comum ------------");
        contaComum.deposito(1000);
        contaComum.saque(200, "senha123");
        contaComum.exibirInformacoes();

        ContaEspecial contaEspecial = new ContaEspecial(67890, "senha456", 500);
        System.out.println("\n------------ Conta Especial ------------");
        contaEspecial.deposito(300);
        contaEspecial.saque(700, "senha456");
        contaEspecial.exibirInformacoes();

        ContaPoupanca contaPoupanca = new ContaPoupanca(11223, "senha789", new Date());
        System.out.println("\n------------ Conta Poupança ------------");
        contaPoupanca.deposito(1500);
        contaPoupanca.aplicarJurosMensais();
        contaPoupanca.exibirInformacoes();
    }
}
