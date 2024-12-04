package questaoum;

public class TesteSistemaBancario {
    public static void main(String[] args) {
        ContaComum contaComum = new ContaComum(12345, "senha123");
        System.out.println("\n------------- Conta Comum -------------");
        contaComum.deposito(1000);
        contaComum.saque(200, "senha123");
        contaComum.exibirInformacoes();
        contaComum.encerrarConta();
        contaComum.abrirConta();
        contaComum.saque(100, "senha123");
        contaComum.exibirInformacoes();
    }
}
