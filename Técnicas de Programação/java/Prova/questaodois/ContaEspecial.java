public class ContaEspecial extends ContaComum {
    private double limiteConta;

    public ContaEspecial(int numeroConta, String senha, double limiteConta) {
        super(numeroConta, senha);
        this.limiteConta = limiteConta;
    }

    @Override
    public void saque(double valor, String senha) {
        if (conferirSenha(senha)) {
            if (valor > 0 && (getSaldo() + limiteConta) >= valor && getSituacao() == 1) {
                setSaldo(getSaldo() - valor);
                System.out.println("Saque de R$" + valor + " realizado com sucesso. Saldo atual: R$" + getSaldo());
            } else {
                System.out.println("Saque falhou. Limite insuficiente.");
            }
        } else {
            System.out.println("Senha incorreta.");
        }
    }
    
    public double getLimiteConta() {
        return limiteConta;
    }

    public void setLimiteConta(double limiteConta) {
        this.limiteConta = limiteConta;
    }
}
