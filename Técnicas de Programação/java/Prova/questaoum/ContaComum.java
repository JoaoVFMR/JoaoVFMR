package questaoum;
import java.util.Date;

public class ContaComum {
    private int numeroConta;
    private Date dataAbertura;
    private Date dataEncerramento;
    private int situacao;
    private String senha;
    private double saldo;

    public ContaComum(int numeroConta, String senha) {
        this.numeroConta = numeroConta;
        this.senha = senha;
        this.saldo = 0.0;
        this.situacao = 1;
        this.dataAbertura = new Date();
    }

    public void deposito(double valor) {
        if (valor > 0 && situacao == 1) {
            setSaldo(getSaldo() + valor);
            System.out.println("Depósito de R$" + valor + " realizado. Saldo atual: R$" + getSaldo());
        } else {
            System.out.println("Depósito falhou.");
        }
    }

    public void saque(double valor, String senha) {
        if (conferirSenha(senha)) {
            if (valor > 0 && valor <= saldo && situacao == 1) {
                saldo -= valor;
                System.out.println("Saque de R$" + valor + " realizado com sucesso. Saldo atual: R$" + saldo);
            } else {
                System.out.println("Saque falhou. Verifique o valor ou o saldo.");
            }
        } else {
            System.out.println("Senha incorreta.");
        }
    }

    public Date getDataAbertura() {
        return dataAbertura;
    }

    public int getSituacao() {
        return situacao;
    }

    public void setSituacao(int situacao) {
        this.situacao = situacao;
    }

    public double getSaldo() {
        return saldo;
    }

    protected void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public Date getDataEncerramento() {
        return dataEncerramento;
    }

    public boolean conferirSenha(String senha) {
        return this.senha.equals(senha);
    }

    public void abrirConta() {
        if (situacao == 2) {
            situacao = 1;
            dataAbertura = new Date();
            System.out.println("Conta reaberta com sucesso.");
        } else {
            System.out.println("Conta já está ativa.");
        }
    }

    public void encerrarConta() {
        if (situacao == 1) {
            situacao = 2;
            dataEncerramento = new Date();
            System.out.println("Conta encerrada com sucesso.");
        } else {
            System.out.println("Conta já está encerrada.");
        }
    }

    public void exibirInformacoes() {
        System.out.println("Número da Conta: " + numeroConta);
        System.out.println("Saldo: R$" + saldo);
        System.out.println("Situação: " + (situacao == 1 ? "Ativa" : "Encerrada"));
    }
}
